<template>
  <div class="fixed z-10 inset-0 flex">
    <div
      class="flex flex-col w-full h-full min-h-screen md:min-h-0 md:h-auto bg-white text-black m-auto md:max-w-lg p-2 md:p-1 shadow-md overflow-y-auto"
    >
      <CoupIndicator is-dark :coup="constitution.isInvolvedWithCoup" />
      <div class="flex justify-end">
        <button @click="$emit('close')">
          <img
            src="~/assets/images/icon-cross.svg"
            alt="close"
            class="w-4"
            style="filter: brightness(0)"
          />
        </button>
      </div>
      <div class="flex flex-col p-2 md:p-6 space-y-4 mb-4">
        <Heading3 class="font-black text-center">
          {{ constitution.name }}
        </Heading3>
        <Paragraph1>{{ constitution.context }}</Paragraph1>
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
  },
});
</script>
