<template>
  <div class="min-h-screen flex flex-col">
    <ConstructionWarning />
    <staging-banner
      v-if="showStagingBanner"
      production-url="https://recon.elect.in.th/"
    />
    <Navbar />
    <Nuxt class="flex-1" />
    <elect-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      showStagingBanner: false,
    };
  },
  mounted() {
    this.showStagingBanner = window.location.hostname.includes('github');
  },
});
</script>
