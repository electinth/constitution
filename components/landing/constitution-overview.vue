<template>
  <div class="flex flex-col space-y-4">
    <!-- Constitution header -->
    <div
      class="flex flex-col bg-gray-2 hover:bg-gray-1 cursor-pointer p-2 pb-1 lg:p-1 lg:pb-0 w-full space-y-2 lg:space-y-1"
      @click="$emit('header-click')"
    >
      <CoupIndicator :coup="constitution.isWrittenByCoup" />
      <div class="flex flex-row">
        <div class="flex-1 lg:text-center">
          <h3 class="font-heading font-black text-21 lg:text-16 leading-1.2">
            {{ constitution.year }}
          </h3>
          <p
            :class="`font-button text-12 lg:text-10 ${
              constitution.isTemporaryEdition ? '' : 'opacity-0'
            }`"
          >
            ชั่วคราว
          </p>
        </div>
        <div class="lg:hidden -mt-1">
          <Label1>{{ constitution.pageCount }} หน้า</Label1>
        </div>
      </div>
    </div>
    <!-- End of Constitution header -->

    <Label2 class="hidden lg:block text-center"
      >{{ constitution.pageCount
      }}{{ constitution.id === 0 ? ' หน้า' : '' }}</Label2
    >

    <!-- Constitution pages -->
    <div class="flex flex-row lg:flex-col flex-wrap relative">
      <div
        v-for="(page, pageIndex) in constitution.pages"
        :key="pageIndex"
        class="flex flex-row"
      >
        <!-- Page ratio visualize -->
        <div
          :class="`flex flex-col w-6 h-8 mr-2 mb-3 lg:mx-auto lg:mb-1 border ${
            hoveringPageIndex === pageIndex ? 'border-white' : 'border-black'
          }`"
          @mouseover="isLargeOrMore() && (hoveringPageIndex = pageIndex)"
          @mouseleave="isLargeOrMore() && (hoveringPageIndex = null)"
          @click="isLargeOrMore() && (selectedPageIndex = pageIndex)"
        >
          <div
            v-for="{ categoryId, pageRatio } in page"
            :key="categoryId"
            :style="{
              height: `${Math.round(pageRatio * 100)}%`,
              backgroundColor: categoriesMap[categoryId].color,
            }"
          />
        </div>
        <!-- End of Page ratio visualize -->
        <!-- Page preview -->
        <div v-if="hoveringPageIndex === pageIndex" class="relative">
          <div class="absolute z-10 top-0 left-0 bg-white flex w-24">
            <img
              :src="
                require(`~/assets/images/constitutions/${constitution.id + 1}/${
                  pageIndex + 1
                }.png`)
              "
              :alt="`${constitution.title} หน้า ${pageIndex}`"
              class="hw-full shadow-md"
            />
          </div>
        </div>
        <!-- End of Page preview -->
        <!-- Page image dialog -->
        <div
          v-if="selectedPageIndex === pageIndex"
          class="fixed z-10 inset-0 flex"
        >
          <div class="flex max-h-screen h-full m-auto py-10 relative">
            <img
              :src="
                require(`~/assets/images/constitutions/${constitution.id + 1}/${
                  pageIndex + 1
                }.png`)
              "
              :alt="`${constitution.title} หน้า ${pageIndex}`"
              class="h-full w-auto m-auto"
            />
            <div
              class="absolute right-0 flex bg-black -m-3 w-8 h-8 rounded-full border"
              @click="selectedPageIndex = null"
            >
              <img
                src="~/assets/images/icon-cross.svg"
                alt="close"
                class="w-4 m-auto"
              />
            </div>
          </div>
        </div>
        <!-- End of Page image dialog -->
      </div>
    </div>
    <!-- End of Constitution pages -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CategoriesMap } from './constitutions-breakdown.vue';
import { Constitution } from '~/data/constitution-overview';
import { isLargeOrMore } from '~/utils/screen';

export default Vue.extend({
  props: {
    constitution: {
      type: Object as () => Constitution,
      required: true,
    },
    categoriesMap: {
      type: Object as () => CategoriesMap,
      required: true,
    },
  },
  data() {
    return {
      hoveringPageIndex: null,
      selectedPageIndex: null,
      isLargeOrMore,
    };
  },
});
</script>
