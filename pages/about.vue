<template>
  <div class="flex flex-col space-y-12 p-4 py-12 md:py-24 max-w-3xl m-auto">
    <Heading1 class="font-black text-center">เกี่ยวกับโครงการ</Heading1>

    <section class="space-y-6">
      <Heading2 class="font-black">เป้าหมาย</Heading2>
      <Paragraph1>
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Paragraph1>
    </section>

    <section class="space-y-6">
      <Heading2 class="font-black">ที่มาของข้อมูล &amp; ข้อจำกัด</Heading2>
      <Paragraph1>
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Paragraph1>
    </section>

    <section class="space-y-6">
      <Heading2 class="font-black">อาสาสมัครร่วมพัฒนา</Heading2>
      <Paragraph1>
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Paragraph1>
    </section>

    <section>
      <SocialSharer />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { generateHeadTags } from '~/utils/head';

export default Vue.extend({
  head: generateHeadTags({
    title: 'เกี่ยวกับโครงการ',
  }),
});
</script>
