<template>
  <div class="flex flex-col space-y-4">
    <!-- Constitution header -->
    <div
      class="flex flex-col bg-gray-2 hover:bg-gray-1 cursor-pointer p-2 pb-1 lg:p-1 lg:pb-0 w-full space-y-2 lg:space-y-1"
      @click="$emit('header-click')"
    >
      <CoupIndicator :coup="constitution.isInvolvedWithCoup" />
      <div class="flex flex-row">
        <div class="flex-1 lg:text-center">
          <h3 class="font-heading font-black text-21 lg:text-16 leading-1.2">
            {{ constitution.year }}
          </h3>
          <p
            :class="`font-button text-12 lg:text-10 ${
              constitution.isInterim ? '' : 'opacity-0'
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
      >{{ constitution.pageCount }}{{ showPageLabel ? ' หน้า' : '' }}</Label2
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
          class="`flex flex-col w-6 mr-2 lg:mx-auto transition-size-spacing duration-500 ease-in-out cursor-pointer"
          :class="[
            hoveringPageIndex === pageIndex ? 'border-white' : 'border-dark',
            isExpanded ? 'h-8 mb-3 lg:mb-1 border' : 'h-1',
          ]"
          @mouseover="isLargeOrMore() && (hoveringPageIndex = pageIndex)"
          @mouseleave="isLargeOrMore() && (hoveringPageIndex = null)"
          @click="isLargeOrMore() && (selectedPageIndex = pageIndex)"
        >
          <div
            v-for="({ categoryId, pageRatio }, categoryIndex) in page"
            :key="categoryIndex"
            :style="{
              height: `${Math.round(pageRatio * 100)}%`,
              backgroundColor: categoriesMap[categoryId].color,
            }"
          />
        </div>
        <!-- End of Page ratio visualize -->
        <!-- Page preview -->
        <div v-if="hoveringPageIndex === pageIndex" class="relative">
          <div class="absolute z-10 top-0 left-0 bg-white shadow-md">
            <img
              :src="
                require(`~/assets/images/constitutions/${constitution.id}/${
                  pageIndex + 1
                }.png`)
              "
              :alt="`${constitution.name} หน้า ${pageIndex}`"
              class="w-24 h-auto max-w-none max-h-none"
            />
          </div>
        </div>
        <!-- End of Page preview -->
      </div>
    </div>
    <!-- End of Constitution pages -->
    <!-- Page image dialog -->
    <ConstitutionPageDialog
      v-if="selectedPageIndex !== null"
      :constitution="constitution"
      :page-index="selectedPageIndex"
      @close="selectedPageIndex = null"
      @change="(newPageIndex) => (selectedPageIndex = newPageIndex)"
    />
    <!-- End of Page image dialog -->
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
    isExpanded: {
      type: Boolean,
      default: true,
    },
    showPageLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hoveringPageIndex: null,
      selectedPageIndex: null,
    };
  },
  methods: {
    isLargeOrMore,
  },
});
</script>
