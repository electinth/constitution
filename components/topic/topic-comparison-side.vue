<template>
  <div class="justify-center text-center align-center w-full">
    <TopicComparisonSelect
      :versions="versions"
      :is-left="isLeft"
      @select-version="selectVersion"
    />
    <div v-for="(section, index) in sections" :key="index">
      <div
        class="flex flex-col text-left pt-2 md:pt-0"
        :class="{
          'section-l': isLeft,
          'section-r': !isLeft,
        }"
      >
        <div class="hidden md:flex justify-end w-full">
          <Paragraph2 class="text-left w-full" v-html="section.footer" />
        </div>
        <div class="flex md:hidden flex-col justify-end w-full">
          <Paragraph2
            class="text-left w-full"
            v-html="section.footer_chapter"
          />
          <Paragraph2 class="text-left w-full" v-html="section.footer_part" />
          <Paragraph2 class="text-left w-full" v-html="section.footer_id" />
        </div>
        <Paragraph1
          class="pt-4 md:pt-8 pb-6 md:pb-2"
          v-html="section.content"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import '@/node_modules/vue-multiselect/dist/vue-multiselect.min.css';
export default Vue.extend({
  props: {
    versions: Array,
    isLeft: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      version: null,
      sections: null,
      amendments: null,
    };
  },
  methods: {
    selectVersion(value: any): void {
      this.sections = value.sections;
      value.sections.forEach(function (section: any) {
        section.content = section.content.replaceAll('\\n', '<br/>');
        section.content = section.content.replaceAll('\n', '<br/>');
        section.content = section.content.replaceAll('\\r', '<br/>');
        section.content = section.content.replaceAll('\r', '<br/>');

        section.footer = '';

        if (section.chapter_id === '-' && section.chapter_name === '-') {
          section.footer_chapter = null;
        } else {
          if (section.chapter_id === '-') {
            section.footer_chapter = '<b>หมวด</b> ' + section.chapter_name;
          } else {
            section.footer_chapter =
              '<b>หมวด</b> ' + section.chapter_id + ' ' + section.chapter_name;
          }
          section.footer += section.footer_chapter;
        }

        section.footer_part = null;
        if (section.part_id && section.part_id !== '-') {
          section.footer_part =
            '<b>ส่วน</b> ' + section.part_id + ' ' + section.part_name;
          section.footer += ' ' + section.footer_part;
        }

        section.footer_id = '<b>มาตรา</b> ' + section.id;
        section.footer += ' ' + section.footer_id;

        // section.amendments = [];
        // section.amendmentIds.forEach(function (id: number) {
        //   const amendment = value.amendments.filter(function (a: any) {
        //     return a.id === id;
        //   })[0];
        //   amendment.header = '<b>' + amendment.affectedBy + '</b>';
        //   section.amendments.push(amendment);
        // });
      });
    },
  },
});
</script>

<style scoped>
.section-l,
.section-r {
  margin-top: 48px;
}
.section-l {
  padding-left: 10%;
  padding-right: 12px;
}
.section-r {
  padding-left: 12px;
  padding-right: 10%;
}

@media only screen and (max-width: 768px) {
  .section-l,
  .section-r {
    margin-top: 17px;
  }
  .section-l {
    padding-left: 8%;
    padding-right: 12px;
  }
  .section-r {
    padding-left: 12px;
    padding-right: 8%;
  }
  .section-label-mobile {
    margin-top: 15px;
    margin-bottom: 23px;
  }
}
</style>
