<template>
  <div class="flex flex-row">
    <div class="flex">
      <div
        class="flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer"
        @click="swiper.slidePrev()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="m-auto"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
    </div>

    <swiper ref="swiper" class="swiper" :options="swiperOptions">
      <swiper-slide v-for="{ id, name, thumbnail_image } in topics" :key="id">
        <NuxtLink :to="`/categories/${categoryId}/topics/${id}`">
          <img
            :src="thumbnail_image"
            :alt="name"
            class="h-32 md:h-56 cursor-pointer"
          />
        </NuxtLink>
      </swiper-slide>
    </swiper>

    <div class="flex">
      <div
        class="flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer"
        @click="swiper.slideNext()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="m-auto"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SwiperClass, { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

import { TopicOverview } from '~/utils/strapi';

interface SwiperElement extends HTMLElement {
  $swiper: typeof SwiperClass;
}

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    topics: {
      type: Array as () => TopicOverview[],
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
    };
  },
  computed: {
    swiper() {
      const swipe = this.$refs.swiper as SwiperElement;
      return swipe.$swiper;
    },
  },
});
</script>

<style scoped>
.swiper-slide {
  width: auto;
}
</style>
