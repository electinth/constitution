<template>
  <div class="flex flex-col space-y-4">
    <!-- Constitution header -->
    <div
      class="flex flex-col bg-gray-2 hover:bg-gray-1 cursor-pointer p-2 pb-1 md:p-1 md:pb-0 w-full space-y-2 md:space-y-1"
      @click="$emit('header-click')"
    >
      <CoupIndicator :coup="constitution.isWrittenByCoup" />
      <div class="flex flex-row">
        <div class="flex-1 md:text-center">
          <h3 class="font-heading font-black text-21 md:text-16 leading-1.2">
            {{ constitution.year }}
          </h3>
          <p
            :class="`font-button text-12 md:text-10 ${
              constitution.isTemporaryEdition ? '' : 'opacity-0'
            }`"
          >
            ชั่วคราว
          </p>
        </div>
        <div class="md:hidden -mt-1">
          <Label1>{{ constitution.pageCount }} หน้า</Label1>
        </div>
      </div>
    </div>
    <!-- End of Constitution header -->

    <Label2 class="hidden md:block text-center"
      >{{ constitution.pageCount
      }}{{ constitution.id === 0 ? ' หน้า' : '' }}</Label2
    >

    <!-- Constitution pages -->
    <div class="flex flex-row md:flex-col flex-wrap">
      <div
        v-for="(page, pageIndex) in constitution.pages"
        :key="pageIndex"
        class="flex flex-col w-6 h-8 mr-2 mb-3 md:mx-auto md:mb-1"
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
    </div>
    <!-- End of Constitution pages -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CategoriesMap } from './constitutions-breakdown.vue';
import { Constitution } from '~/data/constitution-overview';

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
});
</script>
