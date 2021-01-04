<template>
  <div class="comparison-select">
    <multiselect
      v-model="version"
      class="text-black shadow-none outline-none"
      :class="isLeft ? 'ml-auto mr-0' : 'ml-0 mr-auto'"
      placeholder="เลือกฉบับรัฐธรรมนูญ"
      track-by="name"
      label="name"
      :options="versions"
      :searchable="false"
      :allow-empty="false"
      open-direction="bottom"
      selected-label=""
      select-label=""
      deselect-label=""
      @select="selectVersion"
    >
    </multiselect>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import '@/assets/styles/multiselect-override.css';

Vue.component('Multiselect', Multiselect);

export default Vue.extend({
  components: {
    Multiselect,
  },
  props: {
    versions: {
      type: Array,
      required: true,
    },
    isLeft: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      version: null,
    };
  },
  methods: {
    selectVersion(value: any): void {
      this.$emit('select-version', value);
    },
  },
});
</script>
