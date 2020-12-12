<template>
  <div>
    <div
      id="header-tab"
      class="flex flex-row bg-black text-white justify-center"
    >
      <Heading3 class="text-center font-black">
        {{ d[0].category_name }}
      </Heading3>
    </div>

    <div
      id="title"
      class="flex flex-row pt-8 pb-4 bg-white text-black justify-center"
    >
      <Heading1 class="text-center font-black">
        {{ d[0].name }}
      </Heading1>
    </div>

    <TopicPanel id="topic-panel" @clicked="onClickPanel" />

    <TopicSummary id="topic-summary" :summary="d[0].summary" />

    <TopicComparison id="topic-comparison" :versions="d[0].constitutions" />

    <TopicOpinions id="topic-opinions" :opinions="d[0].opinions" />

    <SocialSharer id="social-sharer" />

    <hr id="hr-end" />

    <div id="related">
      <Heading7 id="related-title" class="text-center font-black">
        RELATED TOPICS
      </Heading7>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopicPanel from '@/components/topic/TopicPanel.vue';
import TopicSummary from '@/components/topic/TopicSummary.vue';
import TopicComparison from '@/components/topic/TopicComparison.vue';
import TopicOpinions from '@/components/topic/TopicOpinions.vue';
import SocialSharer from '@/components/social-sharer.vue';
import { getTopicsByCategoryId } from '@/utils/strapi';
export default Vue.extend({
  components: {
    TopicPanel,
    TopicSummary,
    TopicComparison,
    TopicOpinions,
    SocialSharer,
  },
  async asyncData(context) {
    const fetchedData = await Promise.all([
      getTopicsByCategoryId(parseInt(context.params.id)),
    ]);
    const d = fetchedData[0];
    return { d };
  },
  mounted() {
    this.onClickPanel(0);
    const panel = document.getElementById('topic-panel');
    if (panel) {
      const panels = panel.querySelectorAll('button');
      panels.forEach(function (item, i) {
        if (i !== 0) {
          item.style.opacity = '0.2';
        } else {
          item.style.opacity = '1.0';
        }
      });
    }
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
}
#related-title {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
