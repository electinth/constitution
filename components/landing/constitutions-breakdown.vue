<template>
  <div class="flex flex-col space-y-6">
    <div class="flex flex-col px-2">
      <Subtitle2 class="font-semibold">เปลี่ยนมาแล้ว 20 ฉบับ</Subtitle2>
      <div class="flex flex-row">
        <div class="flex-1"><Label2>ฉบับที่เกิดจากรัฐบาลปกติ</Label2></div>
        <div class="flex-1"><Label2>ฉบับที่เกิดจากรัฐประหาร</Label2></div>
      </div>
    </div>

    <div class="flex flex-col space-y-8">
      <div
        v-for="constitution in constitutions"
        :key="constitution.id"
        class="flex flex-col space-y-4"
      >
        <div class="flex flex-row bg-gray-2 py-1 px-2">
          <div class="flex-1">
            <Heading2 class="font-black">{{ constitution.year }}</Heading2>
            <Label1 v-if="constitution.isTemporaryEdition">ชั่วคราว</Label1>
            <div v-else class="h-6"></div>
          </div>
          <div>
            <Label1>{{ constitution.pageCount }} หน้า</Label1>
          </div>
        </div>

        <div class="flex flex-row flex-wrap">
          <div
            v-for="(page, pageIndex) in constitution.pages"
            :key="pageIndex"
            class="flex flex-col w-6 h-8 mr-2 mb-3"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category, Constitution } from '~/data/constitution-overview';

type CategoriesMap = Map<string, Omit<Category, 'id'>>;

export default Vue.extend({
  props: {
    categories: {
      type: Array as () => Category[],
      required: true,
    },
    constitutions: {
      type: Array as () => Constitution[],
      required: true,
    },
  },
  computed: {
    categoriesMap() {
      if (this.categories) {
        return this.categories.reduce(
          (obj: CategoriesMap, { id, ...props }: Category) => ({
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
