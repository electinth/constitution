<template>
  <div class="flex flex-col w-full space-y-12">
    <TopicComparisonSelect
      :versions="versions"
      :is-left="isLeft"
      @select-version="selectVersion"
    />
    <div v-for="section in sections" :key="section.id">
      <div class="flex flex-col text-left space-y-6">
        <div class="flex justify-end w-full">
          <Paragraph2 class="flex flex-col md:inline text-left w-full">
            <span
              v-if="section.chapter_id !== '-' || section.chapter_name !== '-'"
            >
              <span class="font-semibold">หมวด</span>
              <span v-if="section.chapter_id !== '-'">
                {{ section.chapter_id }}
              </span>
              {{ section.chapter_name }}
            </span>
            <span v-if="section.part_id && section.part_id !== '-'">
              <span class="font-semibold">ส่วน</span> {{ section.part_id }}
              {{ section.part_name }}
            </span>
            <span>
              <span class="font-semibold">มาตรา</span> {{ section.id }}
            </span>
          </Paragraph2>
        </div>
        <Paragraph1
          v-for="(paragraph, paragraphIndex) in section.content
            .split('\n')
            .filter((p) => p.length > 0)"
          :key="paragraphIndex"
        >
          {{ paragraph }}
        </Paragraph1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Amendment, Constitution, Section } from '~/utils/strapi';
import '@/node_modules/vue-multiselect/dist/vue-multiselect.min.css';

export default Vue.extend({
  props: {
    versions: {
      type: Array,
      required: true,
    },
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
    } as {
      version: string | null;
      sections: Section[] | null;
      amendments: Amendment[] | null;
    };
  },
  methods: {
    selectVersion({ sections }: Constitution): void {
      this.sections = sections;
    },
  },
});
</script>
