<template>
  <div class="grid grid-cols-2 md:grid-cols-3 px-8 py-10 bg-black text-white">
    <div
      class="col-span-2 md:col-span-1 flex flex-row md:flex-col mb-8 md:mb-0"
    >
      <div class="flex-1">
        <img
          src="~/assets/images/logo-elect-footer.png"
          alt="ELECT"
          class="w-24 md:w-32 h-auto"
        />
      </div>
      <div class="flex-1 md:flex-grow-0 flex flex-row space-x-2">
        <a
          v-for="{ image, alt, url } in companyLinks"
          :key="alt"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="image" :alt="alt" class="h-5 md:h-6" />
        </a>
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-between md:text-center">
      <Heading6>VISUALIZATION</Heading6>
      <Heading6>TOOLS</Heading6>
      <Heading6>ARTICLE</Heading6>
      <Heading6>INFOGRAPHIC</Heading6>
      <Heading6>BRIEF</Heading6>
    </div>

    <div class="flex flex-col space-y-6 md:ml-auto">
      <div class="flex flex-col space-y-1">
        <Heading7 class="font-black">ABOUT US</Heading7>
        <Label2>เราคือใคร.. ทำไมต้อง Elect?</Label2>
      </div>
      <div class="flex flex-col space-y-1">
        <Heading7 class="font-black">CONTACT US</Heading7>
        <Label2>E-mail : contact@elect.in.th </Label2>
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

interface IconLink {
  image: string;
  alt: string;
  url: string;
}

export default Vue.extend({
  data() {
    return {
      companyLinks: [
        {
          image: require('~/assets/images/logo-punchup.svg'),
          alt: 'PunchUp',
          url: 'https://punchup.world/',
        },
        {
          image: require('~/assets/images/logo-boonmee.svg'),
          alt: 'BoonmeLab',
          url: 'https://www.boonmeelab.com/',
        },
        {
          image: require('~/assets/images/logo-ilaw.png'),
          alt: 'iLaw',
          url: 'https://ilaw.or.th',
        },
      ] as IconLink[],
      followLinks: [
        {
          image: require('~/assets/images/follow-facebook.svg'),
          alt: 'Facebook',
          url: '',
        },
        {
          image: require('~/assets/images/follow-twitter.svg'),
          alt: 'Twitter',
          url: '',
        },
      ] as IconLink[],
    };
  },
});
</script>
