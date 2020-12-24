<template>
  <div
    class="flex flex-row rounded-md border border-gray-1 overflow-hidden"
    @click="$emit('toggle')"
  >
    <div
      class="flex rounded-tr-md rounded-br-md px-2"
      :class="
        isExpanded ? 'text-dark bg-light-gray-3' : 'text-light-gray-3 bg-dark'
      "
    >
      <svg
        width="9"
        height="17"
        viewBox="0 0 9 17"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current m-auto"
        stroke-width="2"
        fill="none"
      >
        <path d="M8.23793 5.36891L4.70239 1.83337L1.16686 5.36891" />
        <path d="M1.16686 11.063L4.70239 14.5985L8.23793 11.063" />
      </svg>
    </div>
    <div
      class="flex rounded-tl-md rounded-bl-md px-2"
      :class="
        !isExpanded ? 'text-dark bg-light-gray-3' : 'text-light-gray-3 bg-dark'
      "
    >
      <svg
        width="11"
        height="22"
        viewBox="0 0 11 22"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current m-auto"
        stroke-width="2"
        fill="none"
      >
        <line x1="0.500183" y1="10.4727" x2="10.5002" y2="10.4727" />
        <path d="M8.75172 17.5082L5.21619 13.9727L1.68065 17.5082" />
        <path d="M1.68065 4.03551L5.21619 7.57104L8.75172 4.03551" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isExpanded: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
