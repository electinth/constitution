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
          <div class="white-fill w-8" />
          <Label2>ฉบับที่เกิดจากรัฐบาลปกติ</Label2>
        </div>
        <div class="flex flex-row space-x-1">
          <div class="cross-fill w-8" />
          <Label2>ฉบับที่เกิดจากรัฐประหาร</Label2>
        </div>
      </div>
      <!-- End of Labels -->
    </div>

    <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-1">
      <!-- Constitution -->
      <div v-for="constitution in constitutions" :key="constitution.id">
        <div class="flex flex-col space-y-4">
          <!-- Constitution header -->
          <div
            class="flex flex-col bg-gray-2 hover:bg-gray-1 cursor-pointer p-2 pb-1 md:p-1 md:pb-0 w-full space-y-2 md:space-y-1"
            @click="selectedConstitutionId = constitution.id"
          >
            <div class="h-1">
              <div
                :class="
                  constitution.isTemporaryEdition ? 'white-fill' : 'cross-fill'
                "
              />
            </div>
            <div class="flex flex-row">
              <div class="flex-1 md:text-center">
                <h3
                  class="font-heading font-black text-21 md:text-16 leading-1.2"
                >
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

        <!-- Consitution context dialog -->
        <div
          v-if="selectedConstitutionId === constitution.id"
          class="fixed z-10 inset-0 flex"
        >
          <div
            class="flex flex-col w-full h-full min-h-screen md:min-h-0 md:h-auto bg-white text-black m-auto md:max-w-lg p-2 md:p-1 shadow-md space-y-4 overflow-y-auto"
          >
            <div class="flex justify-end">
              <button @click="selectedConstitutionId = null">
                <img
                  src="~/assets/images/icon-cross.svg"
                  alt="close"
                  class="w-4"
                  style="filter: brightness(0)"
                />
              </button>
            </div>
            <div class="flex flex-col p-2 md:p-6 pt-0 space-y-6">
              <Heading3 class="font-black text-center">
                {{ constitution.name }}
              </Heading3>
              <Paragraph1>{{ constitution.context }}</Paragraph1>
              <ButtonNext class="m-auto">อ่านฉบับเต็ม</ButtonNext>
            </div>
          </div>
        </div>
        <!-- End of Consitution context dialog -->
      </div>
      <!-- End of Constitution -->
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
  data() {
    return {
      selectedConstitutionId: null,
    };
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
