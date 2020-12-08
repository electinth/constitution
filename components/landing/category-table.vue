<template>
  <div class="flex flex-col space-y-3">
    <div class="px-2">
      <Subtitle2 class="font-semibold"
        >เนื้อหาแบ่งออกเป็น {{ categories.length }} หมวด</Subtitle2
      >
    </div>
    <ol class="flex flex-col border border-gray-1 divide-y divide-gray-1">
      <li
        v-for="{ title, id, color, description } in categories"
        :key="id"
        class="flex flex-row py-2 md:p-0"
        :style="{
          backgroundColor: hoveringCategoryId === id ? color : 'unset',
        }"
        @mouseover="hoveringCategoryId = id"
        @mouseleave="hoveringCategoryId = null"
      >
        <div class="flex">
          <div
            class="rounded-full w-3 h-3 md:w-4 md:h-4 m-2 md:m-3 my-auto"
            :style="{ backgroundColor: color }"
          ></div>
        </div>
        <div class="flex flex-1 cursor-default">
          <Label1 class="font-semibold my-auto">{{ title }}</Label1>
        </div>
        <div v-if="hoveringCategoryId === id" class="relative">
          <div
            class="absolute top-0 left-0 bg-white text-black w-screen max-w-xs px-6 py-4 space-y-4"
          >
            <Paragraph2>{{ description }}</Paragraph2>
            <ButtonNext compact>Explore</ButtonNext>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '~/data/constitution-overview.ts';
export default Vue.extend({
  props: {
    categories: {
      type: Array as () => Category[],
      required: true,
    },
  },
  data() {
    return {
      hoveringCategoryId: null,
    };
  },
});
</script>
