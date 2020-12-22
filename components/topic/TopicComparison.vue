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
      <span id="vs-padding" />
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
  mounted() {
    // change dropdown colors
    const bgColor = this.bgColor;
    const tags = document.querySelectorAll('.multiselect__tags');
    tags.forEach(function (tag) {
      tag.style.borderColor = bgColor;
    });
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
#vs-padding {
  display: none;
}
.topic-comparison-side {
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
  #vs-padding {
    display: flex;
    width: 10px;
  }
  .topic-comparison-side {
    width: 50%;
  }
}
</style>
