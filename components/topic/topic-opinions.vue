<template>
  <div class="flex flex-col pb-4 md:pb-8">
    <div
      v-for="(opinion, index) in computed_opinions"
      :key="index"
      class="flex bg-white justify-center"
    >
      <div
        class="mx-auto pt-12 md:pt-32 pb-0 md:pb-16"
        style="width: 90%; max-width: 750px"
      >
        <div
          class="flex flex-row w-full"
          :style="index % 2 == 0 ? `` : `justify-content: flex-end;`"
        >
          <img
            v-if="index % 2 == 0"
            :src="opinion['speaker_image']"
            class="rounded-full w-16 md:w-20 h-16 md:h-20"
          />
          <div
            :class="{
              'opinion-credentials-left': index % 2 == 0,
              'opinion-credentials-right': index % 2 == 1,
            }"
          >
            <Heading2 class="font-semibold" style="padding-top: 8px">
              {{ opinion['speaker_name'] }}
            </Heading2>
            <Subtitle2>
              {{ opinion['speaker_position'] }}
            </Subtitle2>
            <div
              class="font-subtitle leading-1.3 text-12 md:text-13 lg:text-14"
              style="color: #888"
            >
              {{ opinion['thai_date'] }}
            </div>
          </div>
          <img
            v-if="index % 2 == 1"
            :src="opinion['speaker_image']"
            class="rounded-full w-16 md:w-20 h-16 md:h-20"
          />
        </div>
        <Paragraph1 class="text-center w-full mt-5 md:mt-20">
          {{ opinion['content'] }}
        </Paragraph1>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  props: {
    opinions: Array,
  },
  computed: {
    computed_opinions() {
      for (const opinion of this.opinions) {
        opinion.thai_date = this.get_thai_datestring(opinion.date);
      }
      return this.opinions;
    },
  },
  methods: {
    get_thai_datestring(date) {
      // date: format YYYY-MM-DD
      const Y = parseInt(date.split('-')[0]) + 543;
      const M = parseInt(date.split('-')[1]);
      const D = parseInt(date.split('-')[2]);
      const thai_month_names = {
        1: 'มกราคม',
        2: 'กุมภาพันธุ์',
        3: 'มีนาคม',
        4: 'เมษายน',
        5: 'พฤษภาคม',
        6: 'มิถุนายน',
        7: 'กรกฎาคม',
        8: 'สิงหาคม',
        9: 'กันยายน',
        10: 'ตุลาคม',
        11: 'พฤศจิกายน',
        12: 'ธันวาคม',
      };
      return D.toString() + ' ' + thai_month_names[M] + ' ' + Y.toString();
    },
  },
});
</script>

<style scoped>
.opinion-credentials-left {
  flex-direction: column;
  margin-left: 30px;
  text-align: left;
}
.opinion-credentials-right {
  flex-direction: column;
  margin-right: 30px;
  text-align: right;
}

@media only screen and (max-width: 768px) {
  .opinion-credentials-left {
    margin-left: 15px;
  }
  .opinion-credentials-right {
    margin-right: 15px;
  }
}
</style>
