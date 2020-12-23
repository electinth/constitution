<template>
  <div class="comparison-select">
    <multiselect
      v-model="version"
      class="text-black shadow-none outline-none"
      placeholder="เลือกฉบับรัฐธรรมนูญ"
      track-by="name"
      label="name"
      :options="versions"
      :searchable="false"
      :allow-empty="false"
      select-label=""
      deselect-label=""
      :style="
        sideL
          ? `margin-left: auto; margin-right: 0;`
          : `margin-left: 0; margin-right: auto;`
      "
      @select="selectVersion"
    >
    </multiselect>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import '@/assets/multiselect-override.css';
Vue.component('Multiselect', Multiselect);
export default Vue.extend({
  components: {
    Multiselect,
  },
  props: {
    versions: Array,
    sideL: {
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

<style scoped></style>
