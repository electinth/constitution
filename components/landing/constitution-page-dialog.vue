<template>
  <div class="fixed z-10 inset-0 flex">
    <div
      v-click-outside="() => $emit('close')"
      class="flex flex-row max-h-screen h-full m-auto py-10"
    >
      <div class="flex w-16">
        <svg
          v-if="pageIndex !== 0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="m-auto w-full opacity-75 hover:opacity-100 cursor-pointer"
          @click="$emit('change', pageIndex - 1)"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      <img
        :src="
          require(`~/assets/images/constitutions/${constitution.id}/${
            pageIndex + 1
          }.png`)
        "
        :alt="`${constitution.name} หน้า ${pageIndex}`"
        class="h-full w-auto"
      />
      <div class="relative">
        <div
          class="absolute right-0 flex bg-black -m-4 w-8 h-8 rounded-full border cursor-pointer"
          @click="$emit('close')"
        >
          <img
            src="~/assets/images/icon-cross.svg"
            alt="close"
            class="w-4 m-auto"
          />
        </div>
      </div>
      <div class="flex w-16">
        <svg
          v-if="pageIndex !== constitution.pageCount - 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="m-auto w-full opacity-75 hover:opacity-100 cursor-pointer"
          @click="$emit('change', pageIndex + 1)"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Constitution } from '~/data/constitution-overview';

export default Vue.extend({
  props: {
    constitution: {
      type: Object as () => Constitution,
      required: true,
    },
    pageIndex: {
      type: Number,
      required: true,
    },
  },
});
</script>
