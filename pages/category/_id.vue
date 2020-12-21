<template>
  <div class="flex flex-col px-4 md:px-8 py-8 space-y-8">
    <!-- Heading -->
    <section class="text-center mb-12 max-w-2xl m-auto">
      <Heading1 class="font-black my-12">{{ category.name }}</Heading1>
      <Subtitle2 class="font-semibold">{{ category.content }}</Subtitle2>
    </section>
    <!-- End of Heading -->
    <SectionDivider />
    <!-- Sub-categories -->
    <section
      v-for="subcategory in category.subcategories"
      :key="subcategory.id"
      class="flex flex-col space-y-8"
    >
      <div class="px-4 md:px-6 space-y-6">
        <Heading4 class="font-black">{{ subcategory.name }}</Heading4>
        <Paragraph2>{{ subcategory.content }}</Paragraph2>
        <Label2 class="font-semibold">
          {{ subcategory.topics.length }} posts
        </Label2>
      </div>
      <SectionDivider />
    </section>
    <!-- End of Sub-categories -->

    <section>
      <SocialSharer />
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { getCategoryById } from '~/utils/strapi';

export default Vue.extend({
  async asyncData() {
    const category = await getCategoryById(1);

    return { category };
  },
});
</script>
