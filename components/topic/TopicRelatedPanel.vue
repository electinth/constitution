<template>
  <div id="related-container">
    <Heading7 id="related-title" class="text-center font-black">
      RELATED TOPICS
    </Heading7>
    <TopicsCarousal
      id="related-topics"
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
        ({ sub_category_id }) => sub_category_id === this.subcategoryId
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
#related-topics {
  margin-bottom: 96.5px;
  max-width: 90%;
}
@media only screen and (max-width: 768px) {
  #related-container {
    overflow: hidden;
  }
  #related-topics {
    margin-bottom: 30px;
    margin-left: 5%;
    width: 90%;
  }
}
</style>
