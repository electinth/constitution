<template>
  <div>
    <div
      id="table-container"
      class="flex flex-row w-full justify-center"
      v-html="table"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    table: String,
  },
});
</script>

<style scoped>
#table-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

div >>> td {
  padding-top: 15px;
  padding-bottom: 15px;
  vertical-align: text-top;
}

div >>> tr:not(:last-child) {
  border-bottom: solid 1px #cecece;
}

div >>> tr:first-child {
  font-weight: 700;
}

div >>> td:first-child {
  font-weight: 700;
}

div >>> table {
  width: 100%;
}
</style>
