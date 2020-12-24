<template>
  <p
    class="font-body leading-1.6 text-15 md:text-16 lg:text-17"
    :style="{ textIndent: withIndent ? '3em' : 'none' }"
  >
    <slot />
  </p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    withIndent: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
