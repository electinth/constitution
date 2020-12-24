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
}
div >>> tr {
  text-align: left;
}
div >>> td {
  line-height: 160%;
}
</style>
