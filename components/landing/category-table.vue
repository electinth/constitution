<template>
  <div class="flex flex-col space-y-3">
    <div class="px-2">
      <Subtitle2 class="font-semibold"
        >เนื้อหาแบ่งออกเป็น {{ categories.length }} หมวด</Subtitle2
      >
    </div>
    <div class="flex flex-col border border-gray-1 divide-y divide-gray-1">
      <div
        v-for="{ title, id, color } in categories"
        :key="id"
        class="flex flex-row p-2 md:p-3 space-x-2 md:space-x-3"
      >
        <div class="flex">
          <div
            class="rounded-full w-3 h-3 md:w-4 md:h-4 my-auto"
            :style="{ backgroundColor: color }"
          ></div>
        </div>
        <div class="flex flex-1">
          <Label1 class="font-semibold my-auto">{{ title }}</Label1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '~/data/constitution-overview.ts';
export default Vue.extend({
  props: {
    categories: {
      type: Array as () => Category[],
      required: true,
    },
  },
});
</script>
