<template>
  <div class="h-1">
    <div
      :class="coup ? 'cross-fill' : 'white-fill'"
      :style="{ filter: `brightness(${isDark ? 0 : 1})` }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    coup: {
      type: Boolean,
      default: false,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.white-fill {
  @apply bg-white;
  @apply my-auto;
  height: 3px;
}

.cross-fill {
  @apply h-1;
  @apply my-auto;
  background-image: url(~assets/images/icon-cross.svg);
  background-repeat: repeat-x;
  background-position: left center;
}
</style>
