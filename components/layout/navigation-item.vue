<template>
  <div
    class="group p-2 flex rounded-full"
    :class="active ? 'bg-black text-white' : 'hover:bg-light-gray-1'"
    @click="$emit('click')"
  >
    <Label2 class="m-auto"><slot /></Label2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
