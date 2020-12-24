<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="text-blue hover:underline"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
});
</script>
