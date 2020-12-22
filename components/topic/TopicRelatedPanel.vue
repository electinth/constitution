<template>
  <div id="related-container">
    <Heading7 id="related-title" class="text-center font-black">
      RELATED TOPICS
    </Heading7>
    <TopicsCarousal
      :category-id="categoryId"
      :topics="related_topics"
      class="flex max-w-5xl mx-auto"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SubCategory } from '~/utils/strapi';

export default Vue.extend({
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    subcategories: {
      type: Array as () => SubCategory[],
      required: true,
    },
    subcategoryId: {
      type: String,
      required: true,
    },
  },
  computed: {
    related_topics() {
      const subcategory = this.subcategories.find(
        ({ id }) => id === this.subcategoryId
      );
      return subcategory?.topics;
      //   const other_topics = subcategory.topics.filter(function (x: any) {
      //       x.id !==
      //   })
      //   return subcategory;
    },
  },
});
</script>

<style scoped>
#related-container {
  overflow: hidden;
}
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

@media only screen and (max-width: 768px) {
  #related-container {
    overflow: hidden;
  }
  .topic-image {
    width: 280px;
    padding-right: 15px;
  }
  #topic-image-container {
    margin-left: 0px;
    margin-bottom: 30px;
  }
}
</style>
