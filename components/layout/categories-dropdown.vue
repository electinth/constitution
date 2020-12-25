<template>
  <div class="flex flex-col">
    <NavigationItem
      v-click-outside="() => (isOpen = false)"
      @click="isOpen = !isOpen"
    >
      <div class="flex flex-row space-x-1 cursor-pointer">
        <span>ดูตามหมวด</span>
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          xmlns="http://www.w3.org/2000/svg"
          class="my-auto text-light-gray-3 group-hover:text-gray-2 transform transition-transform ease-out duration-200"
          :class="{ 'rotate-180': isOpen }"
        >
          <path
            d="M5.28307 8L0.707571 0.500001L9.85857 0.5L5.28307 8Z"
            class="fill-current"
          />
        </svg>
      </div>
    </NavigationItem>
    <div v-if="isOpen" class="relative z-20">
      <ul
        class="absolute top-0 left:0 md:right-0 flex flex-col bg-white mt-2 w-48 md:w-56 shadow-md border border-light-gray-2 rounded overflow-auto divide-y divide-light-gray-1"
      >
        <li
          v-for="category in categories"
          :key="category.id"
          class="flex flex-row"
          @mouseenter="focusingCategoryId = category.id"
          @mouseleave="focusingCategoryId = null"
          @click="isOpen = false"
        >
          <NuxtLink :to="`/categories/${category.id}`" class="w-full">
            <CategoryLabel
              :category="category"
              :is-focusing="focusingCategoryId === category.id"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import constitutionOverview, {
  CategoryOverview,
} from '~/data/constitution-overview.ts';
import { getAllTopics } from '~/utils/strapi';

export default Vue.extend({
  data() {
    return {
      categories: [],
      isOpen: false,
      focusingCategoryId: null,
    } as {
      categories: never | CategoryOverview[];
      isOpen: boolean;
      focusingCategoryId: null | string;
    };
  },
  async fetch() {
    const topics = await getAllTopics();

    const catagoryIdsHavingTopics = new Set(
      topics.map(({ category_id }) => category_id)
    );

    this.categories = constitutionOverview.categories.filter(({ id }) =>
      catagoryIdsHavingTopics.has(id)
    );
  },
});
</script>
