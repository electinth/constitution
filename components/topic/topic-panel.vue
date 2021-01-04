<template>
  <div>
    <div class="flex flex-row bg-white space-x-1">
      <button
        v-for="(item, index) in sections"
        :key="index"
        class="flex-1 border-none focus:outline-none"
        @click="$emit('change', index)"
      >
        <Label1 class="flex py-4 justify-center">
          {{ item }}
        </Label1>

        <div
          class="h-1 w-full transition-opacity duration-100 ease-in-out"
          :class="index !== currentPanel ? 'opacity-25' : ''"
          :style="{ backgroundColor: bgColor }"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    bgColor: {
      type: String,
      default: '',
    },
    opinions: {
      type: Array,
      required: true,
    },
    currentPanel: {
      type: Number,
      required: true,
    },
  },
  computed: {
    sections() {
      // allow for 2-column panel, if no opinions available
      if (this.opinions.length === 0) {
        return ['สรุป', 'เปรียบเทียบ'];
      } else {
        return ['สรุป', 'เปรียบเทียบ', 'ข้อคิดเห็น'];
      }
    },
  },
});
</script>
