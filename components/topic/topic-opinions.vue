<template>
  <div
    class="flex flex-col pb-4 md:pb-8 space-y-12 md:space-y-24 pt-12 md:pt-24"
  >
    <div
      v-for="(opinion, index) in computed_opinions"
      :key="index"
      class="flex"
    >
      <div class="mx-auto max-w-3xl">
        <div
          class="flex w-full"
          :class="index % 2 == 0 ? `flex-row` : `flex-row-reverse`"
        >
          <img
            :src="opinion['speaker_image']"
            class="rounded-full w-16 md:w-20 h-16 md:h-20 object-cover my-auto"
          />
          <div
            :class="
              index % 2 == 0
                ? 'flex flex-col text-left ml-4 md:ml-8'
                : 'flex flex-col text-right mr-4 md:mr-8'
            "
          >
            <Heading2 class="font-semibold">
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
        </div>
        <Paragraph1 style="max-width: 100%">
          <vue-markdown class="w-full mt-5 md:mt-20 mx-auto">{{
            opinion.content
          }}</vue-markdown>
        </Paragraph1>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
export default Vue.extend({
  components: {
    'vue-markdown': VueMarkdown,
  },
  props: {
    opinions: {
      type: Array,
      required: true,
    },
  },
  computed: {
    computed_opinions() {
      return this.opinions.map((opinion) => ({
        ...opinion,
        thai_date: this.get_thai_datestring(opinion.date),
      }));
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

<style scoped></style>
