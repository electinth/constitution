<template>
  <button
    :class="`border flex flex-row space-x-1 hover:bg-black hover:text-white ${
      compact ? 'px-2 py-1' : 'px-3 py-2'
    }`"
  >
    <Label2 v-if="compact"><slot /></Label2>
    <Label3 v-else><slot /></Label3>
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="my-auto stroke-current"
    >
      <path
        d="M7 0.5L12 5L7 9.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line x1="12" y1="5" y2="5" />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
