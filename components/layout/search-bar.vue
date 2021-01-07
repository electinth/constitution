<template>
  <div
    v-click-outside="() => $emit('close')"
    class="flex flex-col w-full bg-light-gray-1 font-heading leading-1.2 text-18 md:text-21 lg:text-24"
  >
    <!-- Input row -->
    <div class="flex flex-row">
      <div class="w-3 md:w-4 m-2" />
      <input
        ref="searchInput"
        v-model.trim="searchQuery"
        type="text"
        class="flex-1 text-center bg-light-gray-1 focus:outline-none p-2"
        autofocus
      />
      <button
        class="text-gray-1 hover:text-gray-2 px-2 focus:outline-none"
        @click="$emit('close')"
      >
        <svg
          class="m-auto stroke-current w-3 md:w-4"
          viewBox="0 0 17 16"
          fill="none"
          stroke-width="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="15.8492" y1="0.707107" x2="1.70706" y2="14.8492" />
          <line x1="15.435" y1="14.8493" x2="1.29285" y2="0.707124" />
        </svg>
      </button>
    </div>
    <!-- End of Input row -->
    <div
      class="flex flex-col bg-gray-1 text-white text-center"
      @click="(searchQuery = '') || $emit('close')"
    >
      <NuxtLink
        v-for="{ category_id, id, name } in searchResult"
        :key="id"
        :to="`/categories/${category_id}/topics/${id}`"
        class="p-3 hover:bg-gray-2"
      >
        {{ name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAllTopics } from '~/utils/strapi';

interface TopicIndex {
  category_id: string;
  id: string;
  name: string;
}

export default Vue.extend({
  data() {
    return {
      searchQuery: '' as string,
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
  computed: {
    searchResult() {
      if (!this.searchQuery) {
        return [];
      }

      return this.topicsIndex.filter(
        // eslint-disable-next-line unicorn/prefer-includes
        ({ name }: TopicIndex) => name.indexOf(this.searchQuery) >= 0
      );
    },
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
});
</script>
