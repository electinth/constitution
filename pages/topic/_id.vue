<template>
  <div>
    <div
      id="header-tab"
      class="flex flex-row bg-black text-white"
      :style="{ backgroundColor: bgColor }"
    >
      <div id="header-tab-arrow">
        <a href="www.google.com" style="cursor: pointer; float: left">
          <img
            id="header-tab-arrow-img"
            src="@/assets/images/topic-back-arrow.png"
          />
        </a>
      </div>
      <div id="header-tab-text" class="flex justify-center">
        <Heading3 class="text-center font-black">
          {{ d[0][0].category_name }}
        </Heading3>
      </div>
    </div>

    <div id="title" class="flex flex-row bg-white text-black justify-center">
      <Heading1 class="text-center font-black">
        {{ d[0][0].name }}
      </Heading1>
    </div>

    <TopicPanel id="topic-panel" :bg-color="bgColor" @clicked="onClickPanel" />

    <TopicSummary id="topic-summary" :summary="d[0][0].summary" />

    <TopicComparison
      id="topic-comparison"
      :versions="d[0][0].constitutions"
      :bg-color="bgColor"
      style="display: none"
    />

    <TopicOpinions
      id="topic-opinions"
      :opinions="d[0][0].opinions"
      style="display: none"
    />

    <SocialSharer id="social-sharer" />

    <hr id="hr-end" />

    <TopicRelatedPanel
      id="related-panel"
      :subcategory_id="d[0][0].subcategory_id"
      :subcategories="d[1].subcategories"
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
import { getCategoryById, getTopicsByCategoryId } from '@/utils/strapi';
export default Vue.extend({
  components: {
    TopicPanel,
    TopicSummary,
    TopicComparison,
    TopicOpinions,
    SocialSharer,
    TopicRelatedPanel,
  },
  async asyncData(context) {
    const fetchedData = await Promise.all([
      getTopicsByCategoryId(parseInt(context.params.id)),
      getCategoryById(parseInt(context.params.id)),
    ]);
    const d = fetchedData;
    return { d };
  },
  computed: {
    bgColor(): String {
      const colormap = {
        คำปรารภ: '#575757',
        บททั่วไป: '#f9564a',
        'พระมหากษัตริย์/องคมนตรี': '#1f90ef',
        สิทธิและเสรีภาพของชนชาวไทย: '#ff9900',
        แนวนโยบายพื้นฐานแห่งรัฐ: '#ba83f7',
        การปฏิรูปต่างประเทศ: '#ff6bb2',
        อำนาจนิติบัญญัติ: '#0bb5ba',
        อำนาจบริหาร: '#ff6f34',
        อำนาจตุลาการ: '#ff9399',
        การขัดกันผลประโยชน์: '#be408c',
        ตุลาการรัฐธรรมนูญ: '#b26f1f',
        องค์กรอิสระ: '#b3b700',
        จริยธรรมของผู้ดำรงตำแหน่งทางการเมืองและเจ้าหน้าที่รัฐ: '#3fbae1',
        การปกครองส่วนท้องถิ่น: '#2ac68e',
        การแก้ไขเพิ่มเติมรัฐธรรมนูญ: '#fb4a76',
        อำนาจคณะรัฐประหาร: '#af9368',
        บทสุดท้าย: '#b77f74',
        บทเฉพาะกาล: '#87a491',
      };
      return colormap[this.d[0][0].category_name];
    },
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
