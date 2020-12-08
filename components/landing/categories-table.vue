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
      >
        <CategoryLabel
          :category="category"
          :is-focusing="focusingCategoryId === category.id"
          @open="focusingCategoryId = category.id"
          @close="focusingCategoryId = null"
        />
        <CategoryFloatingDescription
          v-if="focusingCategoryId === category.id"
          :category="category"
          @close="focusingCategoryId = null"
        />
      </li>
      <!-- End of Category item -->
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
      focusingCategoryId: null,
    };
  },
});
</script>
