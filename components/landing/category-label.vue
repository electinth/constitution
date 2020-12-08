<template>
  <div
    class="flex flex-row py-2 md:p-0 w-full"
    :style="{
      backgroundColor:
        isFocusing && isMediumOrMore() ? category.color : 'unset',
    }"
    @mouseover="isMediumOrMore() && $emit('open')"
    @mouseleave="isMediumOrMore() && $emit('close')"
    @click="!isMediumOrMore() && $emit('open')"
  >
    <div class="flex">
      <div
        class="rounded-full w-3 h-3 md:w-4 md:h-4 m-2 md:m-3 my-auto"
        :style="{ backgroundColor: category.color }"
      ></div>
    </div>
    <div class="flex flex-1 cursor-default">
      <Label1 class="font-semibold my-auto">{{ category.title }}</Label1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '~/utils/strapi';
import { isMediumOrMore } from '~/utils/screen';

export default Vue.extend({
  props: {
    category: {
      type: Object as () => Category,
      required: true,
    },
    isFocusing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMediumOrMore,
    };
  },
});
</script>
