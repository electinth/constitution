<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 px-8 py-16 bg-black text-white"
  >
    <div
      class="col-span-2 lg:col-span-1 flex flex-row md:flex-col mb-8 md:mb-0"
    >
      <div class="flex-1">
        <img
          src="~/assets/images/logo-elect-footer.png"
          alt="ELECT"
          class="w-24 md:w-32 lg:w-40 h-auto"
        />
      </div>
      <div class="flex-1 md:flex-grow-0 flex flex-row space-x-4">
        <a
          v-for="{ image, imageMd, alt, url } in companyLinks"
          :key="alt"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="image" :alt="alt" class="md:hidden h-5 md:h-6" />
          <img :src="imageMd" :alt="alt" class="hidden md:block h-4 lg:h-6" />
        </a>
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-between md:text-center">
      <div
        v-for="{ text, link } in internalLinks"
        :key="text"
        class="flex justify-start lg:justify-center"
      >
        <a :href="link" class="block hover:bg-white p-1 hover:text-black"
          ><Heading6>{{ text }}</Heading6></a
        >
      </div>
    </div>

    <div class="flex flex-col space-y-6 md:ml-auto">
      <div class="flex flex-col space-y-1">
        <Heading7 class="font-black">ABOUT US</Heading7>
        <a href="https://elect.in.th/about/" class="hover:underline"
          ><Label2>เราคือใคร.. ทำไมต้อง Elect?</Label2></a
        >
      </div>
      <div class="flex flex-col space-y-1">
        <Heading7 class="font-black">CONTACT US</Heading7>
        <a href="mailto:contact@elect.in.th" class="hover:underline"
          ><Label2>E-mail : contact@elect.in.th</Label2></a
        >
      </div>
      <div class="flex flex-col space-y-1">
        <Heading7 class="font-black">FOLLOW US</Heading7>
        <div class="flex flex-row">
          <a
            v-for="{ image, alt, url } in followLinks"
            :key="alt"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="image" :alt="alt" class="h-4 m-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      internalLinks: [
        { text: 'VISUALIZATION', link: 'https://elect.in.th/visualization/' },
        { text: 'TOOLS', link: 'https://elect.in.th/tool/' },
        { text: 'ARTICLE', link: 'https://elect.in.th/article/' },
        { text: 'INFOGRAPHIC', link: 'https://elect.in.th/infographic/' },
        { text: 'DOWNLOAD DATA', link: 'https://elect.in.th/download-data/' },
      ],
      companyLinks: [
        {
          image: require('~/assets/images/logo-punchup.svg'),
          imageMd: require('~/assets/images/logo-punchup-full.svg'),
          alt: 'PunchUp',
          url: 'https://punchup.world/',
        },
        {
          image: require('~/assets/images/logo-boonmee.svg'),
          imageMd: require('~/assets/images/logo-boonme-full.svg'),
          alt: 'BoonmeLab',
          url: 'https://www.boonmeelab.com/',
        },
        {
          image: require('~/assets/images/logo-ilaw.png'),
          imageMd: require('~/assets/images/logo-ilaw.png'),
          alt: 'iLaw',
          url: 'https://ilaw.or.th',
        },
      ],
      followLinks: [
        {
          image: require('~/assets/images/follow-facebook.svg'),
          alt: 'Facebook',
          url: 'https://www.facebook.com/electinth/',
        },
        {
          image: require('~/assets/images/follow-twitter.svg'),
          alt: 'Twitter',
          url: 'https://twitter.com/electinth/',
        },
      ],
    };
  },
});
</script>
