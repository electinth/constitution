<template>
  <div>
    <Heading7 id="related-title" class="text-center font-black">
      RELATED TOPICS
    </Heading7>
    <div id="topic-image-container" class="flex flex-row">
      <div v-for="(topic, index) in related_topics" :key="index" class="flex">
        <img :src="topic.thumbnail_image" class="topic-image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    subcategories: Array,
    subcategory_id: Number,
  },
  computed: {
    related_topics() {
      const subcategory_id: any = this.subcategory_id;
      const subcategory: any = this.subcategories.filter(function (x: any) {
        return x.id === subcategory_id;
      })[0];
      return subcategory.topics;
      //   const other_topics = subcategory.topics.filter(function (x: any) {
      //       x.id !==
      //   })
      //   return subcategory;
    },
  },
});
</script>

<style scoped>
#related-title {
  margin-top: 50px;
  margin-bottom: 50px;
}
.topic-image {
  width: 500px;
  padding-right: 15px;
}
#topic-image-container {
  margin-left: 85px;
  margin-bottom: 96.5px;
}
</style>
