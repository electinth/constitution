<template>
  <div class="flex flex-col space-y-3 xl:max-w-xs w-100">
    <div class="px-2">
      <Subtitle2 class="font-semibold"
        >เนื้อหาแบ่งออกเป็น {{ categories.length }} หมวด</Subtitle2
      >
    </div>
    <ol
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 border border-gray-2"
    >
      <!-- Category item -->
      <li
        v-for="category in categories"
        :key="category.id"
        class="flex flex-col xl:flex-row border border-gray-2"
        @mouseover="isLargeOrMore() && openDescription(category)"
        @mouseleave="isLargeOrMore() && closeDescription()"
      >
        <CategoryLabel
          is-semibold
          :category="category"
          :is-focusing="isLargeOrMore() && focusingCategoryId === category.id"
          @click="!isLargeOrMore() && openDescription(category)"
        />
        <CategoryFloatingDescription
          v-if="focusingCategoryId === category.id"
          :category="category"
          @close="closeDescription"
        />
      </li>
      <!-- End of Category item -->
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '~/data/constitution-overview.ts';
import { isLargeOrMore } from '~/utils/screen';

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
      isLargeOrMore,
    } as {
      focusingCategoryId: string | null;
      isLargeOrMore: () => boolean;
    };
  },
  methods: {
    openDescription(category: Category) {
      this.focusingCategoryId = category.id;
    },
    closeDescription() {
      this.focusingCategoryId = null;
    },
  },
});
</script>
