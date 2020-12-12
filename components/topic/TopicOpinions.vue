<template>
  <div class="flex flex-col">
    <div
      v-for="(opinion, index) in opinions"
      :key="index"
      class="flex bg-white justify-center"
    >
      <div class="opinion-container">
        <div v-if="index % 2 == 0" class="flex flex-row">
          <img
            :src="opinion['speaker_image']"
            style="border-radius: 50%; width: 80px; height: 80px"
          />
          <div class="flex flex-col" style="margin-left: 30px">
            <Heading2 class="font-semibold" style="padding-top: 8px">
              {{ opinion['speaker_name'] }}
            </Heading2>
            <Subtitle2>
              {{ opinion['speaker_position'] }}
            </Subtitle2>
          </div>
        </div>

        <div v-if="index % 2 == 1" class="flex flex-row">
          <div
            class="flex flex-col"
            style="margin-right: 30px; margin-left: auto"
          >
            <Heading2
              class="font-semibold"
              style="padding-top: 8px; margin-right: 0; margin-left: auto"
            >
              {{ opinion['speaker_name'] }}
            </Heading2>
            <Subtitle2 style="margin-right: 0; margin-left: auto">
              {{ opinion['speaker_position'] }}
            </Subtitle2>
          </div>
          <img
            :src="opinion['speaker_image']"
            style="
              border-radius: 50%;
              width: 80px;
              height: 80px;
              margin-right: 0;
              margin-left: 0;
            "
          />
        </div>

        <Paragraph1 class="text-center" style="margin-top: 80px; width: 100%">
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
});
</script>

<style scoped>
.opinion-container {
  padding-top: 124px;
  padding-bottom: 60px;
  margin-left: 265px;
  margin-right: 265px;
}
</style>
