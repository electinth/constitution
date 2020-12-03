<template>
  <div class="min-h-screen mx-auto">
    <div>
      {{ fetchedData }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  getAllCategories,
  getCategoryById,
  getTopicByCategoryId,
} from '../utils/strapi';

export default Vue.extend({
  async asyncData() {
    const fetchedData = await Promise.all([
      getAllCategories(),
      getCategoryById(2),
      getTopicByCategoryId(3),
    ]);

    return { fetchedData };
  },
});
</script>
