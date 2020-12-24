<template>
  <div class="justify-center text-center align-center w-full">
    <TopicComparisonSelect
      :versions="versions"
      :is-left="isLeft"
      @select-version="selectVersion"
    />
    <div v-for="(section, index) in sections" :key="index">
      <div
        class="flex flex-col text-left"
        :class="{
          'section-l': isLeft,
          'section-r': !isLeft,
        }"
      >
        <div class="hidden md:flex justify-end w-full">
          <Label1 class="text-left w-full" v-html="section.footer" />
        </div>
        <div class="flex md:hidden flex-col justify-end w-full">
          <Label1 class="text-left w-full" v-html="section.footer_id" />
          <Label1 class="text-left w-full" v-html="section.footer_part" />
          <Label1 class="text-left w-full" v-html="section.footer_chapter" />
        </div>
        <Paragraph1 class="pt-4 md:pt-8" v-html="section.content" />
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
        section.content = section.content.replace('\\n', '<br/>');
        section.content = section.content.replace('\n', '<br/>');

        section.footer_id = '<b>มาตรา</b> ' + section.id;
        section.footer_part = null;
        if (section.partId) {
          section.footer_part =
            '<b>ส่วน</b> ' + section.partId + ' ' + section.partName;
        }
        section.footer_chapter = null;
        if (section.chapterId) {
          section.footer_chapter =
            '<b>หมวด</b> ' + section.chapterId + ' ' + section.chapterName;
        }

        section.footer = '<b>มาตรา</b> ' + section.id;
        if (section.partId) {
          section.footer +=
            ' <b>ส่วน</b> ' + section.partId + ' ' + section.partName;
        }
        if (section.chapterId) {
          section.footer +=
            ' <b>หมวด</b> ' + section.chapterId + ' ' + section.chapterName;
        }

        section.amendments = [];
        section.amendmentIds.forEach(function (id: number) {
          const amendment = value.amendments.filter(function (a: any) {
            return a.id === id;
          })[0];
          amendment.header = '<b>' + amendment.affectedBy + '</b>';
          section.amendments.push(amendment);
        });
      });
    },
  },
});
</script>

<style scoped>
.section-l,
.section-r {
  margin-top: 64px;
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
    padding-left: 9%;
    padding-right: 0px;
  }
  .section-r {
    padding-left: 0px;
    padding-right: 9%;
  }
  .section-label-mobile {
    margin-top: 15px;
    margin-bottom: 23px;
  }
}
</style>
