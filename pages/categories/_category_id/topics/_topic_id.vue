<template>
  <div>
    <div
      id="header-tab"
      class="flex flex-row bg-black text-white"
      :style="{ backgroundColor: category.color }"
    >
      <div id="header-tab-arrow">
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
      <div id="header-tab-text" class="flex justify-center">
        <Heading3 class="text-center font-black">
          {{ topic.category_name }}
        </Heading3>
      </div>
    </div>

    <div id="title" class="flex flex-row bg-white text-black justify-center">
      <Heading1 class="text-center font-black">
        {{ topic.name }}
      </Heading1>
    </div>

    <TopicPanel
      id="topic-panel"
      :bg-color="category.color"
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

    <SocialSharer id="social-sharer" />

    <hr id="hr-end" />

    <TopicRelatedPanel
      id="related-panel"
      :category-id="topic.category_id"
      :subcategory-id="topic.subcategory_id"
      :subcategories="category.sub_categories"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopicPanel from '@/components/topic/TopicPanel.vue';
import TopicSummary from '@/components/topic/TopicSummary.vue';
import TopicComparison from '@/components/topic/TopicComparison.vue';
import TopicOpinions from '@/components/topic/TopicOpinions.vue';
import TopicRelatedPanel from '@/components/topic/TopicRelatedPanel.vue';
import SocialSharer from '@/components/social-sharer.vue';
import { getCategoryById, Topic, Category, getTopicById } from '@/utils/strapi';

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
#header-tab {
  padding-top: 16px;
  padding-bottom: 15px;
}

#header-tab-arrow {
  margin-left: 35px;
  position: absolute;
}

#header-tab-arrow-img {
  width: 31px;
}

#header-tab-text {
  width: 100%;
}

#title {
  padding-top: 95px;
}

#topic-panel {
  padding-top: 52px;
}

#social-sharer {
  margin-top: 60px;
  margin-bottom: 60px;
}

#hr-end {
  border: 1px solid #929191;
  margin-left: 85px;
  margin-right: 85px;
  margin-top: 1px;
  margin-bottom: 1px;
  outline: none;
}

@media only screen and (max-width: 768px) {
  #header-tab {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  #header-tab-arrow {
    margin-left: 10px;
  }
  #header-tab-arrow-img {
    width: 22px;
  }
  #title {
    padding-top: 29px;
  }
  #topic-panel {
    padding-top: 25px;
  }
  #social-sharer {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  #hr-end {
    border: 1px solid #929191;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 1px;
    margin-bottom: 1px;
    outline: none;
  }
}
</style>
