<template>
  <div>
    <div
      class="flex flex-row bg-black text-white py-2 md:py-4"
      :style="{ backgroundColor: category.color }"
    >
      <div class="absolute pl-4">
        <NuxtLink
          :to="`/categories/${category.category_id}`"
          class="curser-pointer float-left"
        >
          <img
            id="header-tab-arrow-img"
            src="@/assets/images/topic-back-arrow.png"
          />
        </NuxtLink>
      </div>
      <div class="flex justify-center w-full">
        <Heading3 class="text-center font-black">
          {{ topic.category_name }}
        </Heading3>
      </div>
    </div>

    <div id="topic-page-bound" class="mx-auto">
      <div
        class="flex flex-row bg-white text-black justify-center pt-8 md:pt-20"
      >
        <Heading1 class="text-center font-black">
          {{ topic.name }}
        </Heading1>
      </div>

      <TopicPanel
        class="pt-8 md:pt-12"
        :bg-color="category.color"
        :opinions="topic.opinions"
        @clicked="onClickPanel"
      />

      <TopicSummary id="topic-summary" :summary="topic.summary" />

      <TopicComparison
        id="topic-comparison"
        :versions="topic.constitutions"
        :bg-color="category.color"
        style="display: none"
      />

      <TopicOpinions
        id="topic-opinions"
        :opinions="topic.opinions"
        style="display: none"
      />

      <SocialSharer class="my-6 md:my-12" />

      <hr
        class="border-0 h-px my-1 outline-none"
        style="background-color: #929191"
      />
      <TopicRelatedPanel
        class="mx-auto"
        style="width: 90%; height: auto"
        :category-id="topic.category_id"
        :subcategory-id="topic.subcategory_id"
        :subcategories="category.sub_categories"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopicPanel from '@/components/topic/topic-panel.vue';
import TopicSummary from '@/components/topic/topic-summary.vue';
import TopicComparison from '@/components/topic/topic-comparison.vue';
import TopicOpinions from '@/components/topic/topic-opinions.vue';
import TopicRelatedPanel from '@/components/topic/topic-related-panel.vue';
import SocialSharer from '@/components/social-sharer.vue';
import { getCategoryById, Topic, Category, getTopicById } from '@/utils/strapi';
import { generateHeadTags } from '~/utils/head';

export default Vue.extend({
  components: {
    TopicPanel,
    TopicSummary,
    TopicComparison,
    TopicOpinions,
    SocialSharer,
    TopicRelatedPanel,
  },
  async asyncData({ params: { category_id, topic_id }, payload }) {
    if (payload?.topic && payload?.category) {
      return payload;
    } else {
      const [topic, category] = await Promise.all([
        getTopicById(topic_id),
        getCategoryById(category_id),
      ]);
      return { topic, category };
    }
  },
  data() {
    return {
      topic: null as Topic | null,
      category: null as Category | null,
    };
  },
  head() {
    const { name, og_image } = this.topic as Topic;

    return generateHeadTags({
      title: name,
      image: og_image,
    });
  },
  mounted() {
    this.onClickPanel(0);
  },
  methods: {
    onClickPanel(index: number): void {
      const summary = document.getElementById('topic-summary');
      if (summary) {
        summary.style.display = index === 0 ? 'flex' : 'none';
      }
      const comparison = document.getElementById('topic-comparison');
      if (comparison) {
        comparison.style.display = index === 1 ? 'flex' : 'none';
      }
      const opinions = document.getElementById('topic-opinions');
      if (opinions) {
        opinions.style.display = index === 2 ? 'flex' : 'none';
      }
    },
  },
});
</script>

<style scoped>
#topic-page-bound {
  width: 80%;
  max-width: 1000px;
}

#header-tab-arrow {
  margin-left: 35px;
  position: absolute;
}

#header-tab-arrow-img {
  width: 31px;
}

@media only screen and (max-width: 768px) {
  .topic-page-bound {
    width: 96%;
    max-width: none;
  }
  #header-tab-arrow {
    margin-left: 10px;
  }
  #header-tab-arrow-img {
    width: 22px;
    margin-top: 3px;
  }
}
</style>
