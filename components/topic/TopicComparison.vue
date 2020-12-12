<template>
  <div>
    <div
      id="comparison-container"
      class="flex flex-row justify-center align-center"
    >
      <TopicComparisonSide id="comparison-side-L" :versions="versions" />
      <span
        id="vs-icon"
        class="flex text-white bg-black justify-center text-center"
      >
        <Label1 class="text-center text-justify m-auto"> vs. </Label1>
      </span>
      <TopicComparisonSide :versions="versions" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopicComparisonSide from '@/components/topic/TopicComparisonSide.vue';
export default Vue.extend({
  components: {
    TopicComparisonSide,
  },
  props: {
    versions: Array,
  },
});
</script>

<style scoped>
#comparison-container {
  padding-top: 102.5px;
  width: 100%;
}
#vs-icon {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-left: 50px;
  margin-right: 50px;
}
#comparison-L {
  margin-left: 165px;
}
</style>
