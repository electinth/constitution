<template>
  <div class="flex flex-col space-y-3">
    <div class="px-2">
      <Subtitle2 class="font-semibold"
        >เนื้อหาแบ่งออกเป็น {{ categories.length }} หมวด</Subtitle2
      >
    </div>
    <ol class="flex flex-col border border-gray-1 divide-y divide-gray-1">
      <!-- Category item -->
      <li
        v-for="{ title, id, color, description } in categories"
        :key="id"
        class="flex flex-row"
      >
        <!-- Category color and label -->
        <div
          class="flex flex-row py-2 md:p-0 w-full"
          :style="{
            backgroundColor:
              isMediumOrMore() && focusingCategoryId === id ? color : 'unset',
          }"
          @mouseover="isMediumOrMore() && (focusingCategoryId = id)"
          @mouseleave="isMediumOrMore() && (focusingCategoryId = null)"
          @click="!isMediumOrMore() && (focusingCategoryId = id)"
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
        </div>
        <!-- End of Category color and label -->
        <!-- Category floating description -->
        <div
          v-if="focusingCategoryId === id"
          class="fixed z-10 inset-0 md:relative flex"
        >
          <div
            class="md:absolute top-0 left-0 bg-white text-black w-screen md:max-w-xs mx-8 my-auto md:m-0"
          >
            <div
              class="md:hidden flex flex-row p-3"
              :style="{ backgroundColor: color }"
            >
              <Heading4 class="font-black flex-1">
                {{ title }}
              </Heading4>
              <img
                src="~/assets/images/icon-cross.svg"
                alt="close"
                class="w-3"
                style="filter: brightness(0)"
                @click.stop="focusingCategoryId = null"
              />
            </div>
            <div class="p-4 space-y-4">
              <Paragraph2>{{ description }}</Paragraph2>
              <ButtonNext compact>Explore</ButtonNext>
            </div>
          </div>
        </div>
        <!-- End of Category floating description -->
      </li>
      <!-- End of Category item -->
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '~/data/constitution-overview.ts';
import { isMediumOrMore } from '~/utils/screen';

export default Vue.extend({
  props: {
    categories: {
      type: Array as () => Category[],
      required: true,
    },
  },
  data() {
    return {
      focusingCategoryId: null,
      isMediumOrMore,
    };
  },
});
</script>
