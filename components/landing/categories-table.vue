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
        v-for="category in categories"
        :key="category.id"
        class="flex flex-row"
        @mouseover="isMediumOrMore() && openDescription(category)"
        @mouseleave="isMediumOrMore() && closeDescription()"
      >
        <CategoryLabel
          is-semibold
          :category="category"
          :is-focusing="isMediumOrMore() && focusingCategoryId === category.id"
          @click="!isMediumOrMore() && openDescription(category)"
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
    } as {
      focusingCategoryId: string | null;
      isMediumOrMore: () => boolean;
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
