<template>
  <div class="opinions-container">
    <div
      v-for="(opinion, index) in opinions"
      :key="index"
      class="flex bg-white justify-center"
    >
      <div class="opinion-container">
        <div v-if="index % 2 == 0" class="flex flex-row">
          <img :src="opinion['speaker_image']" class="opinion-image" />
          <div class="opinion-credentials-left">
            <Heading2 class="font-semibold" style="padding-top: 8px">
              {{ opinion['speaker_name'] }}
            </Heading2>
            <Subtitle2>
              {{ opinion['speaker_position'] }}
            </Subtitle2>
          </div>
        </div>

        <div v-if="index % 2 == 1" class="flex flex-row">
          <div class="opinion-credentials-right">
            <Heading2 class="font-semibold" style="padding-top: 8px">
              {{ opinion['speaker_name'] }}
            </Heading2>
            <Subtitle2>
              {{ opinion['speaker_position'] }}
            </Subtitle2>
          </div>
          <img :src="opinion['speaker_image']" class="opinion-image" />
        </div>

        <Paragraph1 class="opinion-content">
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
.opinions-container {
  flex-direction: column;
  padding-bottom: 157px;
}
.opinion-container {
  padding-top: 124px;
  padding-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 750px;
  width: 85%;
}
.opinion-image {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
.opinion-credentials-left {
  flex-direction: column;
  margin-left: 30px;
}
.opinion-credentials-right {
  flex-direction: column;
  margin-right: 30px;
  text-align: right;
}
.opinion-content {
  text-align: center;
  margin-top: 80px;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .opinions-container {
    padding-bottom: 28px;
  }
  .opinion-container {
    padding-top: 49px;
    padding-bottom: 0px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .opinion-image {
    width: 60px;
    height: 60px;
  }
  .opinion-credentials-left {
    margin-left: 15px;
  }
  .opinion-credentials-right {
    margin-right: 15px;
  }
  .opinion-content {
    margin-top: 20px;
  }
}
</style>
