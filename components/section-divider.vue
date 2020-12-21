<template>
  <div
    class="border-0 border-t"
    :class="isDark ? 'border-gray-1' : 'border-light-gray-1'"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
