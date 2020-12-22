<template>
  <div class="fixed z-10 inset-0 lg:relative flex">
    <div
      class="lg:absolute top-0 right-0 xl:left-0 bg-white text-black w-screen lg:max-w-xs mx-8 my-auto lg:m-0 shadow-md"
    >
      <div
        class="lg:hidden flex flex-row p-3"
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
        <Paragraph2>{{ category.shortDesc }}</Paragraph2>
        <NuxtLink :to="`/categories/${category.id}`">
          <ButtonNext compact>Explore</ButtonNext>
        </NuxtLink>
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
