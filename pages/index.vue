<template>
  <div
    class="bg-dark text-white p-4 md:p-12 flex flex-col space-y-8 sm:space-y-16"
  >
    <section
      class="text-center px-6 py-8 pt-16 flex flex-col space-y-8 md:space-y-16"
    >
      <img
        src="~/assets/images/logo-reconstitution.svg"
        alt="RE-CONSTITUTION"
        class="h-12 md:h-16 m-auto"
      />
      <Subtitle2 class="max-w-2xl mx-auto">
        ฐานข้อมูลรัฐธรรมนูญไทยทั้ง 20 ฉบับ นำเสนอในรูปแบบ INTERACTIVE WEBSITE
        เพื่อความเข้าใจในรัฐธรรมนูญที่ทุกคนเป็นเจ้าของร่วมกัน
      </Subtitle2>
    </section>

    <SectionDivider is-dark />

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

    <SectionDivider is-dark />

    <section
      class="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-8 mx-auto"
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
