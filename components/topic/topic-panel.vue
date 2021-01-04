<template>
  <div>
    <div class="flex flex-row bg-white justify-center h-10 space-x-1">
      <button
        v-for="(item, index) in sections"
        :key="index"
        class="flex flex-1 flex-col justify-center w-full border-none focus:outline-none"
        @click="$emit('change', index)"
      >
        <Label1 class="flex-1 m-auto">
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
