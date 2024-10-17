<script>
import CreateEditView from '@shell/mixins/create-edit-view';
import { LabeledInput } from '@components/Form/LabeledInput';
import { NORMAN } from '@shell/config/types';

export default {
  components: { LabeledInput },
  mixins: [CreateEditView],

  watch: {
    value: {
      deep: true,
      handler(neu) {
        this.$emit('validationChanged', !!neu);
      }
    }
  },

  methods: {
    async test() {
      // The incus apis require that an existing cloudCredentialId be passed in order to use the API.
      // We create a temporary credential and attempt to invoke one of the basic APIs to authenticate the user.
      // We then delete the temporary credential since the existing system will create one after we authenticate.
      const temporaryCredential = await this.$store.dispatch('rancher/create', {
        type: NORMAN.CLOUD_CREDENTIAL,
        incuscredentialConfig: this.value.decodedData
      });

      try {
        await temporaryCredential.save();

        await this.$store.dispatch('management/request', {
          url: `/meta/incus/ping?cloudCredentialId=${temporaryCredential.id}`,
          redirectUnauthorized: false,
        }, { root: true });
      } catch (ex) {
        return false;
      } finally {
        await temporaryCredential.remove();
      }

      return true;
    }
  }
};
</script>

<template>
  <div>
    <div class="row mb-10">
      <div class="col span-6">
        <LabeledInput :value="value.decodedData.url" label-key="cluster.credential.incus.url.label"
          placeholder-key="cluster.credential.incus.url.placeholder" :required="true" :mode="mode"
          @input="value.setData('url', $event);" />
      </div>
    </div>
    <div class="row mb-10">
      <div class="col span-6">
        <LabeledInput :value="value.decodedData.tlsClientCert" label-key="cluster.credential.incus.tlsClientCert.label"
          :required="true" type="multiline" :mode="mode" @input="value.setData('tlsClientCert', $event);" />
      </div>
      <div class="col span-6">
        <LabeledInput :value="value.decodedData.tlsClientKey" label-key="cluster.credential.incus.tlsClientKey.label"
          :required="true" type="multiline-password" :mode="mode" @input="value.setData('tlsClientKey', $event);" />
      </div>
    </div>
    <p v-clean-html="t('cluster.credential.incus.note1', {}, true)" class="text-muted mt-10" />
    <p v-clean-html="t('cluster.credential.incus.note2', {}, true)" class="text-muted mt-10" />
  </div>
</template>
