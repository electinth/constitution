<template>
  <div class="flex flex-col">
    <div class="flex flex-col md:flex-row bg-white">
      <div class="flex md:flex-1 p-3 md:p-4 mx-auto justify-start">
        <NuxtLink to="/">
          <img
            src="~/assets/images/logo-elect-header.svg"
            alt="ELECT"
            class="h-4 md:h-6 my-auto"
          />
        </NuxtLink>
      </div>

      <div class="hidden md:flex col-span-2 md:col-span-1 md:justify-center">
        <NuxtLink to="/" class="my-auto">
          <Heading4>RE-CONSTITUTION</Heading4>
        </NuxtLink>
      </div>

      <div
        class="flex-1 flex flex-row my-auto justify-around md:justify-end space-x-2 bg-light-gray-2 md:bg-white md:pr-4"
      >
        <NuxtLink to="/">
          <NavigationItem>ภาพรวม</NavigationItem>
        </NuxtLink>
        <CategoriesDropdown />
        <NuxtLink to="/about">
          <NavigationItem>เกี่ยวกับโครงการ</NavigationItem>
        </NuxtLink>
        <NavigationItem
          :active="showSearchBar"
          class="my-auto focus:outline-none rounded-full p-2 cursor-pointer"
          @click="showSearchBar = !showSearchBar"
        >
          <img
            src="~/assets/images/icon-search.svg"
            alt="search"
            :style="showSearchBar ? 'filter: brightness(100)' : ''"
          />
        </NavigationItem>
      </div>
    </div>
    <div v-if="showSearchBar" class="relative">
      <div class="absolute inset-0 z-10">
        <SearchBar
          :topics-index="topicsIndex"
          @close="showSearchBar && (showSearchBar = false)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TopicIndex } from './search-bar.vue';
import { getAllTopics } from '~/utils/strapi';

export default Vue.extend({
  data() {
    return {
      showSearchBar: false,
      topicsIndex: [] as TopicIndex[],
    };
  },
  async fetch() {
    const topics = await getAllTopics();

    this.topicsIndex = topics.map(({ category_id, id, name }) => ({
      category_id,
      id,
      name,
    }));
  },
});
</script>
