<template>
  <div>
    <div
      id="comparison-container"
      class="flex flex-row justify-center align-center w-full pt-10 md:pt-16"
    >
      <TopicComparisonSide
        class="w-1/2 md:w-5/12"
        style="min-width: 120px"
        :versions="versions"
        is-left
      />
      <span
        id="vs-icon"
        class="flex text-white justify-center text-center rounded-full hidden md:flex w-12 h-12 mx-12"
        :style="{ backgroundColor: bgColor }"
      >
        <Label1 class="text-center text-justify m-auto"> vs. </Label1>
      </span>
      <span id="vs-padding" class="flex md:hidden w-4" />
      <TopicComparisonSide
        class="w-1/2 md:w-5/12"
        style="min-width: 120px"
        :versions="versions"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopicComparisonSide from '@/components/topic/topic-comparison-side.vue';
export default Vue.extend({
  components: {
    TopicComparisonSide,
  },
  props: {
    bgColor: {
      type: String,
      default: '',
    },
    versions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    // change dropdown colors
    const bgColor = this.bgColor;
    const tags = document.querySelectorAll<HTMLElement>('.multiselect__tags');
    tags.forEach(function (tag) {
      tag.style.borderColor = bgColor;
    });
  },
});
</script>
