<template>
  <div class="flex flex-col justify-center w-full">
    <div class="flex flex-row bg-white text-black justify-center mx-auto">
      <div class="flex justify-center w-full px-3 md:px-6">
        <vue-markdown class="mt-16 md:mt-20 w-full justify-center mx-auto">{{
          summary
        }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
export default Vue.extend({
  components: {
    'vue-markdown': VueMarkdown,
  },
  props: {
    summary: String,
  },
});
</script>

<style scoped>
div >>> h1,
div >>> h2,
div >>> h3,
div >>> h4,
div >>> h5,
div >>> h6,
div >>> table,
div >>> p {
  margin-bottom: 50px;
}
div >>> h1,
div >>> h2,
div >>> h3,
div >>> h4,
div >>> h5,
div >>> h6 {
  padding-left: 120px;
  padding-right: 120px;
}
div >>> h1,
div >>> h2 {
  @apply font-heading leading-1.2 text-36 font-normal;
}
div >>> h1 {
  @apply font-black;
}
div >>> h3,
div >>> h4 {
  @apply font-heading leading-1.2 text-24 font-normal;
}
div >>> h3 {
  @apply font-black;
}
div >>> h5,
div >>> h6 {
  @apply font-subtitle leading-1.5 text-24 font-normal;
}
div >>> h5 {
  @apply font-semibold;
}
div >>> p {
  padding: 0 12% 0px 12%;
  @apply font-body leading-1.6 text-17 font-normal;
}
div >>> p.thick {
  @apply font-bold;
}
div >>> td {
  padding-top: 15px;
  padding-bottom: 15px;
  vertical-align: text-top;
}
div >>> tr:not(:last-child) {
  border-bottom: solid 1px #cecece;
}
div >>> th:not(:last-child),
div >>> td:not(:last-child) {
  padding-right: 40px;
}
div >>> table {
  width: 100%;
}
div >>> tr {
  text-align: left;
}
div >>> td {
  line-height: 160%;
}

@media only screen and (max-width: 768px) {
  div >>> h1,
  div >>> h2 {
    @apply text-24;
  }
  div >>> h3,
  div >>> h4 {
    @apply text-21;
  }
  div >>> h5,
  div >>> h6 {
    @apply text-21;
  }
  div >>> p {
    padding: 0 8px 0 8px;
    @apply text-16;
  }
}

@media only screen and (max-width: 640px) {
  div >>> h1,
  div >>> h2,
  div >>> h3,
  div >>> h4,
  div >>> h5,
  div >>> h6,
  div >>> table,
  div >>> p {
    margin-bottom: 30px;
  }
  div >>> h1,
  div >>> h2,
  div >>> h3,
  div >>> h4,
  div >>> h5,
  div >>> h6,
  div >>> p {
    margin-left: 7px;
    margin-right: 7px;
  }
  div >>> h1,
  div >>> h2 {
    @apply text-21;
  }
  div >>> h3,
  div >>> h4 {
    @apply text-18;
  }
  div >>> h5,
  div >>> h6 {
    @apply text-18;
  }
  div >>> p {
    padding: 0 8px 0 8px;
    @apply text-14;
  }
}
</style>
