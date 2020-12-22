<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-col px-2 space-y-4">
      <Subtitle2 class="md:hidden font-semibold"
        >เปลี่ยนมาแล้ว 20 ฉบับ</Subtitle2
      >
      <!-- Labels -->
      <div
        class="flex flex-col md:flex-row opacity-75 space-y-2 md:space-y-0 md:space-x-4"
      >
        <div class="flex flex-row space-x-1">
          <CoupIndicator class="w-8 my-auto" />
          <Label2>ฉบับที่เกิดจากรัฐบาลปกติ</Label2>
        </div>
        <div class="flex flex-row space-x-1">
          <CoupIndicator coup class="w-8 my-auto" />
          <Label2>ฉบับที่เกิดจากรัฐประหาร</Label2>
        </div>
      </div>
      <!-- End of Labels -->
    </div>

    <div class="flex flex-col lg:flex-row space-y-8 md:space-y-0 md:space-x-1">
      <!-- Constitution -->
      <div v-for="constitution in constitutions" :key="constitution.id">
        <ConstitutionOverview
          :constitution="constitution"
          :categories-map="categoriesMap"
          @header-click="selectedConstitutionId = constitution.id"
        />
        <ConstitutionContextDialog
          v-if="selectedConstitutionId === constitution.id"
          :constitution="constitution"
          @close="selectedConstitutionId = null"
        />
      </div>
      <!-- End of Constitution -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CategoryOverview, Constitution } from '~/data/constitution-overview';

export type CategoriesMap = Map<string, Omit<CategoryOverview, 'id'>>;

export default Vue.extend({
  props: {
    categories: {
      type: Array as () => CategoryOverview[],
      required: true,
    },
    constitutions: {
      type: Array as () => Constitution[],
      required: true,
    },
  },
  data() {
    return {
      selectedConstitutionId: null,
    };
  },
  computed: {
    categoriesMap() {
      if (this.categories) {
        return this.categories.reduce(
          (obj: CategoriesMap, { id, ...props }: CategoryOverview) => ({
            ...obj,
            [id]: props,
          }),
          {} as CategoriesMap
        );
      } else {
        return null;
      }
    },
  },
});
</script>
