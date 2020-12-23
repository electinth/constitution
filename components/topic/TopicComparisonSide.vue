<template>
  <div>
    <div
      id="comparison-side-container"
      class="justify-center text-center align-center"
    >
      <TopicComparisonSelect
        :versions="versions"
        :side-l="sideL"
        @select-version="selectVersion"
      />

      <div
        v-for="(section, index) in sections"
        :key="index"
        class="section-container"
      >
        <div v-if="sideL" class="section-container-l">
          <Paragraph1 v-html="section.content" />
          <div class="section-label">
            <Label1 class="section-label-text" v-html="section.footer" />
          </div>
          <div class="section-label-mobile">
            <Label1 class="section-label-text" v-html="section.footer_id" />
            <Label1 class="section-label-text" v-html="section.footer_part" />
            <Label1
              class="section-label-text"
              v-html="section.footer_chapter"
            />
          </div>
        </div>
        <div v-if="!sideL" class="section-container-r">
          <Paragraph1 v-html="section.content" />
          <div class="section-label">
            <Label1 class="section-label-text" v-html="section.footer" />
          </div>
          <div class="section-label-mobile">
            <Label1 class="section-label-text" v-html="section.footer_id" />
            <Label1 class="section-label-text" v-html="section.footer_part" />
            <Label1
              class="section-label-text"
              v-html="section.footer_chapter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import Multiselect from 'vue-multiselect';
// Vue.component('Multiselect', Multiselect);
import '@/assets/_vue-multiselect.min.css';
// import '@/node_modules/vue-multiselect/dist/vue-multiselect.min.css';
export default Vue.extend({
  // components: {
  //   Multiselect,
  // },
  props: {
    versions: Array,
    sideL: {
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
#comparison-side-container {
  width: 100%;
}
.section-container {
  margin-top: 64px;
}
.section-container-l,
.section-container-r {
  text-align: left;
}
.section-container-l {
  display: flex;
  flex-direction: column;
  padding-left: 30%;
  padding-right: 12px;
}
.section-container-r {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 30%;
}
.section-text {
  display: flex;
  flex-direction: row;
}
.section-label,
.section-label-mobile {
  justify-content: end;
  margin-top: 30px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.section-label-mobile {
  display: none;
}
.section-label-text {
  text-align: right;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .section-container {
    margin-top: 17px;
  }
  .section-container-l {
    padding-left: 9%;
    padding-right: 0px;
  }
  .section-container-r {
    padding-left: 0px;
    padding-right: 9%;
  }
  .section-label {
    display: none;
  }
  .section-label-mobile {
    margin-top: 15px;
    margin-bottom: 23px;
    flex-direction: column;
    display: flex;
  }
}
</style>
