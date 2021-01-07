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
        <button
          class="my-auto focus:outline-none rounded-full p-2"
          :class="showSearchBar ? 'bg-black' : ''"
          @click="showSearchBar = !showSearchBar"
        >
          <img
            src="~/assets/images/icon-search.svg"
            alt="search"
            :style="showSearchBar ? 'filter: brightness(100)' : ''"
          />
        </button>
      </div>
    </div>
    <div v-if="showSearchBar" class="relative">
      <div class="absolute inset-0 z-10">
        <SearchBar @close="showSearchBar && (showSearchBar = false)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      showSearchBar: false,
    };
  },
});
</script>
