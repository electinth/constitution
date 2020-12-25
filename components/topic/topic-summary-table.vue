<template>
  <div>
    <div
      id="table-container"
      class="flex flex-row w-full mx-auto justify-center"
    >
      <vue-markdown id="table-md">{{ table }}</vue-markdown>
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
    table: String,
  },
});
</script>

<style scoped></style>
