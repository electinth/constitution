<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-col px-2 space-y-4">
      <Subtitle2 class="font-semibold">เปลี่ยนมาแล้ว 20 ฉบับ</Subtitle2>
      <div class="flex flex-col opacity-75 space-y-2">
        <div class="flex-1 flex flex-row space-x-2">
          <div class="white-fill w-8"></div>
          <Label2>ฉบับที่เกิดจากรัฐบาลปกติ</Label2>
        </div>
        <div class="flex-1 flex flex-row space-x-2">
          <div class="cross-fill w-8" />
          <Label2>ฉบับที่เกิดจากรัฐประหาร</Label2>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-8">
      <div
        v-for="constitution in constitutions"
        :key="constitution.id"
        class="flex flex-col space-y-4"
      >
        <div class="flex flex-row bg-gray-2 p-2 pb-1">
          <div class="flex flex-col w-full space-y-2">
            <div
              :class="
                constitution.isTemporaryEdition ? 'white-fill' : 'cross-fill'
              "
            ></div>
            <div class="flex flex-row">
              <div class="flex-1">
                <Heading2 class="font-black">{{ constitution.year }}</Heading2>
                <Label1 v-if="constitution.isTemporaryEdition">ชั่วคราว</Label1>
                <div v-else class="h-6"></div>
              </div>
              <div class="-mt-1">
                <Label1>{{ constitution.pageCount }} หน้า</Label1>
              </div>
            </div>
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

<style scoped>
.white-fill {
  @apply bg-white;
  @apply my-auto;
  height: 2px;
}

.cross-fill {
  @apply h-1;
  @apply my-auto;
  background-image: url(~assets/images/icon-cross.svg);
  background-repeat: repeat-x;
  background-position: left center;
}
</style>
