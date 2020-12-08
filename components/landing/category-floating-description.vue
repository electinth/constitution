<template>
  <div class="fixed z-10 inset-0 md:relative flex">
    <div
      class="md:absolute top-0 left-0 bg-white text-black w-screen md:max-w-xs mx-8 my-auto md:m-0 shadow-md"
    >
      <div
        class="md:hidden flex flex-row p-3"
        :style="{ backgroundColor: category.color }"
      >
        <Heading4 class="font-black flex-1">
          {{ category.title }}
        </Heading4>
        <button @click.stop="$emit('close')">
          <img
            src="~/assets/images/icon-cross.svg"
            alt="close"
            class="w-3"
            style="filter: brightness(0)"
          />
        </button>
      </div>
      <div class="p-4 space-y-4">
        <Paragraph2>{{ category.description }}</Paragraph2>
        <ButtonNext compact>Explore</ButtonNext>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '~/utils/strapi';

export default Vue.extend({
  props: {
    category: {
      type: Object as () => Category,
      required: true,
    },
  },
});
</script>
