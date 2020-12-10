<template>
  <div class="flex flex-row h-10 p-1 justify-center space-x-4">
    <Label1 :class="`my-auto ${isDark ? 'text-white' : 'text-black'}`"
      >Share</Label1
    >
    <div class="flex flex-row">
      <a
        v-for="{ service, icon, href } in socialLinks"
        :key="service"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="icon"
          :alt="service"
          class="h-full"
          :style="isDark ? {} : { filter: `brightness(0)` }"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface SocialLink {
  service: string;
  icon: string;
  href: string;
}

export default Vue.extend({
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      socialLinks: [] as SocialLink[],
    };
  },
  mounted() {
    const encodedUrl = encodeURI(window.location.href);

    this.socialLinks = [
      {
        service: 'Facebook',
        icon: require('../assets/images/social-facebook.svg'),
        href: `http://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      },
      {
        service: 'Twitter',
        icon: require('../assets/images/social-twitter.svg'),
        href: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      },
      {
        service: 'Line',
        icon: require('../assets/images/social-line.svg'),
        href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      },
    ];
  },
});
</script>
