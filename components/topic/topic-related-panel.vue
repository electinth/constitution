<template>
  <div v-if="related_topics">
    <Heading7 class="text-center font-black my-12"> RELATED TOPICS </Heading7>
    <TopicsCarousal
      :category-id="categoryId"
      :topics="related_topics"
      class="flex max-w-5xl mx-auto w-full mb-10 md:mb-24"
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
    },
  },
});
</script>
