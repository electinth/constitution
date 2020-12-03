<template>
  <Nuxt />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    if (process.env.NODE_ENV === 'development') {
      const { worker } = require('../mocks/browser');

      worker.start();
    }
  },
});
</script>
