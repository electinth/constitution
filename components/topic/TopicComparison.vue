<template>
  <div>
    <div
      id="comparison-container"
      class="flex flex-row justify-center align-center"
    >
      <TopicComparisonSide
        class="topic-comparison-side"
        :versions="versions"
        side-l
      />
      <span
        id="vs-icon"
        class="flex text-white justify-center text-center"
        :style="{ backgroundColor: bgColor }"
      >
        <Label1 class="text-center text-justify m-auto"> vs. </Label1>
      </span>
      <TopicComparisonSide class="topic-comparison-side" :versions="versions" />
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
    bgColor: String,
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
.topic-comparison-side {
  /* width: calc(50% - 62.5px); */
  width: 45%;
  min-width: 140px;
}

@media only screen and (max-width: 768px) {
  #comparison-container {
    padding-top: 35px;
  }
  #vs-icon {
    display: none;
  }
  .topic-comparison-side {
    width: 50%;
  }
}
</style>
