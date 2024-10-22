<script>
import Loading from '@shell/components/Loading';
import CreateEditView from '@shell/mixins/create-edit-view';
import LabeledSelect from '@shell/components/form/LabeledSelect';
import { exceptionToErrorsArray, stringify } from '@shell/utils/error';
import { Banner } from '@components/Banner';
import UnitInput from '@shell/components/form/UnitInput';
import { Card } from '@components/Card';
import { RadioGroup } from '@components/Form/Radio';
import KeyValue from '@shell/components/form/KeyValue';
import { LabeledInput } from '@components/Form/LabeledInput';
import ArrayListSelect from '@shell/components/form/ArrayListSelect';
import YamlEditor from '@shell/components/YamlEditor';
import { set } from '@shell/utils/object';
import { integerString } from '@shell/utils/computed';
import { _CREATE, _EDIT, _VIEW } from '@shell/config/query-params';

export const SENTINEL = '__SENTINEL__';
export const DEFAULT_VALUES = {
  cpuCount: '2',
  diskSize: '20000',
  memorySize: '4096',
  cloudConfig: '#cloud-config\n\n',
  project: 'default',
  profile: 'default'
};

/**
 * 
 * passing 'datacenter' yields
 *
 * {
 *    datacenter() {
 *       return this.datacenterResults || [];
 *    },
 *    datacenterLoading() {
 *       return this.datacenterLoading === null;
 *    }
 * }
 */
function createOptionHelpers(name) {
  return {
    [name]() {
      return this[`${name}Results`] || [];
    },
    [`${name}Loading`]() {
      return this[`${name}Results`] === null;
    }
  };
}

export default {
  components: {
    ArrayListSelect, Card, KeyValue, Loading, LabeledInput, LabeledSelect, Banner, UnitInput, RadioGroup, YamlEditor
  },

  mixins: [CreateEditView],

  props: {
    poolId: {
      type: String,
      default: '',
    },
    credentialId: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    poolCreateMode: {
      type: Boolean,
      required: true,
    },
  },

  async fetch() {
    this.errors = [];

    try {
      const projectAlreadySet = !!this.value.project;

      await this.loadProjects();

      if (projectAlreadySet) {
        this.loadAllProjectResources();
      }
    } catch (e) {
      this.errors = exceptionToErrorsArray(e);
    }
  },

  data() {
    if ((this.mode === _CREATE || this.poolCreateMode) && !this.value.initted) {
      Object.defineProperty(this.value, 'initted', { value: true, enumerable: false });

      const {
        cpuCount,
        diskSize,
        memorySize,
        cloudinitUserdata,
        project,
        profile,
      } = DEFAULT_VALUES;

      set(this.value, 'cpuCount', cpuCount);
      set(this.value, 'diskSize', diskSize);
      set(this.value, 'memorySize', memorySize);
      set(this.value, 'cloudinitUserdata', cloudinitUserdata);
      set(this.value, 'project', project);
      set(this.value, 'profile', profile);
    }

    return {
      initted: false,
      credential: null,
      projectsResults: null,
      imageNamesResults: null,
      storageNamesResults: null,
      networkNamesResults: null,
      profilesResults: null,
      validationErrors: {},
    };
  },

  computed: {
    ...createOptionHelpers('projects'),
    ...createOptionHelpers('imageNames'),
    ...createOptionHelpers('storageNames'),
    ...createOptionHelpers('networkNames'),
    ...createOptionHelpers('profiles'),

    isDisabled() {
      return this.disabled || this.mode === _VIEW;
    },

    cpuCount: integerString('value.cpuCount'),
    memorySize: integerString('value.memorySize'),
    diskSize: integerString('value.diskSize'),
  },

  watch: {
    credentialId(neu, old) {
      if (neu !== old) {
        this.$fetch();
      }
    },
    'value.project'() {
      this.loadAllProjectResources();
    },
    validationErrors(value) {
      this.$emit('error', value);
    }
  },

  methods: {
    stringify,
    async requestOptions(resource, project) {
      const projectlessResources = ['projects', 'networks', 'storages']

      if (!this.credentialId || (!projectlessResources.includes(resource) && !project)) {
        return [];
      }

      const queryParams = Object.entries({
        cloudCredentialId: this.credentialId,
        project
      })
        .filter((entry) => entry[1])
        .map((entry) => `${entry[0]}=${entry[1]}`)
        .join('&');

      const url = `/meta/incus/${resource}?${queryParams}`;

      const result = await this.$store.dispatch('management/request', {
        url,
        redirectUnauthorized: false,
      }, { root: true });

      return result.data;
    },

    mapPathOptionsToContent(pathOptions) {
      return (pathOptions || []).map((pathOption) => {
        return {
          label: pathOption,
          value: pathOption
        };
      });
    },

    loadAllProjectResources() {
      this.loadImageNames();
      this.loadProfiles();
      this.loadStorageNames();
      this.loadNetworkNames();
    },

    async loadProjects() {
      const options = await this.requestOptions('projects');
      const content = this.mapPathOptionsToContent(options);

      set(this, 'projectsResults', content);
    },

    async loadImageNames() {
      set(this, 'imageNamesResults', null);

      const options = await this.requestOptions('images', this.value.project);
      const content = this.mapPathOptionsToContent(options);

      set(this, 'imageNamesResults', content);
    },

    async loadProfiles() {
      set(this, 'profilesResults', null);

      const options = await this.requestOptions('profiles', this.value.project);
      const content = this.mapPathOptionsToContent(options);

      set(this, 'profilesResults', content);
    },

    async loadStorageNames() {
      set(this, 'storageNamesResults', null);

      const options = await this.requestOptions('storages', this.value.project);
      const content = this.mapPathOptionsToContent(options);

      set(this, 'storageNamesResults', content);
    },

    async loadNetworkNames() {
      set(this, 'networkNamesResults', null);

      const options = await this.requestOptions('networks', this.value.project);
      const content = this.mapPathOptionsToContent(options);

      set(this, 'networkNamesResults', content);
    },
  }
};

</script>

<template>
  <Loading v-if="$fetchState.pending" :delayed="true" />
  <div v-else-if="errors.length">
    <div v-for="(err, idx) in errors" :key="idx">
      <Banner color="error" :label="stringify(err)" />
    </div>
  </div>
  <div v-else>
    <Card class="m-0 mt-20" :show-highlight-border="false" :show-actions="false">
      <h4 slot="title" class="text-default-text mb-5">
        {{ t('cluster.machineConfig.incus.label') }}
        <p class="text-muted text-small">
          {{ t('cluster.machineConfig.incus.description') }}
        </p>
      </h4>
      <div slot="body">
        <div class="row" data-testid="project">
          <div class="col span-6">
            <LabeledSelect v-model="value.project" :loading="projectsLoading" :mode="mode" :options="projects"
              :label="t('cluster.machineConfig.incus.project')" :disabled="isDisabled" :tooltip="value.project" />
          </div>
          <div class="col span-6" data-testid="imageName">
            <LabeledSelect v-model="value.imageName" :loading="imageNamesLoading" :mode="mode" :options="imageNames"
              :label="t('cluster.machineConfig.incus.baseImage')" :disabled="isDisabled" :tooltip="value.imageName" />
          </div>
        </div>
        <div class="row mt-10">
          <div class="col span-6">
            <UnitInput v-model="cpuCount" :mode="mode" :label="t('cluster.machineConfig.incus.cpus')"
              :suffix="t('suffix.cores')" :disabled="isDisabled" />
          </div>
          <div class="col span-6">
            <UnitInput v-model="memorySize" :mode="mode" :label="t('cluster.machineConfig.incus.memory')"
              :suffix="t('suffix.mib')" :disabled="isDisabled" />
          </div>
        </div>
        <div class="row mt-10">
          <div class="col span-6">
            <UnitInput v-model="diskSize" :mode="mode" :label="t('cluster.machineConfig.incus.disk')"
              :suffix="t('suffix.mib')" :disabled="isDisabled" />
          </div>
          <div class="col span-6" data-testid="storageName">
            <LabeledSelect v-model="value.storageName" :loading="storageNamesLoading" :mode="mode"
              :options="storageNames" :label="t('cluster.machineConfig.incus.storagePool')" :disabled="isDisabled"
              :tooltip="value.storageName" />
          </div>
        </div>
        <div class="row mt-10">
          <div class="col span-6" data-testid="networkName">
            <LabeledSelect v-model="value.networkName" :loading="networkNamesLoading" :mode="mode"
              :options="networkNames" :label="t('cluster.machineConfig.incus.network')" :disabled="isDisabled"
              :tooltip="value.networkName" />
          </div>
          <div class="col span-6" data-testid="profile">
            <LabeledSelect v-model="value.profile" :loading="profilesLoading" :mode="mode" :options="profiles"
              :label="t('cluster.machineConfig.incus.profile')" :disabled="isDisabled" :tooltip="value.profile" />
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .labeled-tooltip .status-icon.icon-info {
  z-index: 0;
}
</style>
