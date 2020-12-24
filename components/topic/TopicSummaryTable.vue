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

<style scoped>
div >>> td {
  padding-top: 15px;
  padding-bottom: 15px;
  vertical-align: text-top;
}

div >>> tr:not(:last-child) {
  border-bottom: solid 1px #cecece;
}

div {
  text-align: center;
}

div >>> table {
  width: 100%;
  margin-top: 68px;
  margin-bottom: 16px;
}
div >>> tr {
  text-align: left;
}
div >>> td {
  line-height: 160%;
}

@media only screen and (max-width: 768px) {
  div >>> table {
    margin-top: 27px;
    margin-bottom: 26px;
  }
}
</style>
