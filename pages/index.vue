<template>
  <div
    class="bg-dark text-white p-4 md:p-12 flex flex-col space-y-8 sm:space-y-16"
  >
    <section
      class="text-center px-6 py-8 sm:pt-16 flex flex-col space-y-4 max-w-4xl mx-auto"
    >
      <div class="flex flex-col space-y-1">
        <Heading1 class="font-black">CONSTITUTION CHANGE</Heading1>
        <Heading2>เพราะรัฐธรรมนูญเปลี่ยนแปลงบ่อย</Heading2>
      </div>
      <div>
        <Subtitle2
          >ฐานข้อมูลรัฐธรรมนูญไทยทั้ง 20 ฉบับ นำเสนอในรูปแบบ Interactive website
          เพื่อความเข้าใจในรัฐธรรมนูญที่ทุกคนเป็นเจ้าของร่วมกัน</Subtitle2
        >
      </div>
    </section>

    <SectionDivider />

    <section class="text-center flex flex-col max-w-5xl mx-auto">
      <Heading3 class="font-black">วิธีใช้งาน</Heading3>
      <div class="grid grid-cols-2 sm:grid-cols-4">
        <div
          v-for="{ image, text } in howtoSteps"
          :key="text"
          class="p-2 sm:px-4"
        >
          <img :src="image" :alt="text" class="m-auto w-32 sm:w-28" />
          <Paragraph2>{{ text }}</Paragraph2>
        </div>
      </div>
    </section>

    <SectionDivider />

    <section
      class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4"
    >
      <CategoriesTable :categories="constitutionOverview.categories" />
      <ConstitutionsBreakdown
        :categories="constitutionOverview.categories"
        :constitutions="constitutionOverview.constitutions"
        class="flex-1"
      />
    </section>
    <section>
      <SocialSharer is-dark />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import constitutionOverview from '~/data/constitution-overview.ts';

interface HowtoStep {
  image: string;
  text: string;
}

const howtoSteps: HowtoStep[] = [
  {
    image: require('~/assets/images/landing-howto-1.svg'),
    text: 'ดูภาพรวมโครงสร้างและการจัดหมวดหมู่',
  },
  {
    image: require('~/assets/images/landing-howto-2.svg'),
    text: 'เลือกหมวดหมู่ ตามประเด็นที่สนใจ',
  },
  {
    image: require('~/assets/images/landing-howto-3.svg'),
    text: 'อ่านเนื้อหาและเปรียบเทียบรัฐธรรมนูญรายมาตรา',
  },
  {
    image: require('~/assets/images/landing-howto-4.svg'),
    text: 'อ่านข้อถกเถียงและข้อคิดเห็นเกี่ยวกับรัฐธรรมนูญ',
  },
];

export default Vue.extend({
  data() {
    return {
      howtoSteps,
      constitutionOverview,
    };
  },
});
</script>
