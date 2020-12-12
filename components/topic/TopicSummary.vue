<template>
  <div class="flex flex-col justify-center w-full">
    <div
      id="summary-intro"
      class="flex flex-row bg-white text-black justify-center"
    >
      <Paragraph1 class="flex text-center">
        {{ summary_intro }}
      </Paragraph1>
    </div>
    <div
      id="summary-table"
      class="flex flex-row bg-white text-black justify-center"
    >
      <Paragraph1 class="flex flex-row text-center" v-html="summary_table">
      </Paragraph1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    summary: String,
  },
  computed: {
    summary_intro(): string {
      return this.summary.split('|  |')[0];
    },
    summary_table(): string {
      let result = '';

      let ts = this.summary.slice(this.summary.indexOf('|  |') + 1);
      ts = ts.slice(0, ts.lastIndexOf('|') + 1);

      let i = 0;
      let endCol: number;
      let endLine: number;
      while (true) {
        // parse single row
        let row = '';
        endCol = ts.indexOf('|', i);
        endLine = ts.indexOf('\n', i);
        while (endCol !== -1 && (endCol < endLine || endLine === -1)) {
          // add next column to row
          // if image is present in cell
          const img = ts.indexOf('![]', i);
          if (img !== -1 && img < endCol) {
            const imgsrc = ts.slice(img + 4, ts.indexOf(')', img));
            row +=
              '<td>' +
              ts.slice(i, img) +
              '<br/><img src="' +
              imgsrc +
              '"/>' +
              '</td>';
          } else {
            row += '<td>' + ts.slice(i, endCol) + '</td>';
          }
          i = endCol + 1;

          // find next column & newline tokens
          endCol = ts.indexOf('|', i);
          endLine = ts.indexOf('\n', i);
        }
        i = Math.max(endCol, endLine) + 1;

        // add row to table
        result += '<tr>' + row + '</tr>';

        // no more columns or rows, break
        if (endCol === -1) {
          break;
        }
      }

      return '<table>' + result + '</table>';
    },
  },
});
</script>

<style scoped>
#summary-intro {
  width: 100%;
  padding-top: 100px;
  padding-left: 235px;
  padding-right: 245px;
}
#summary-table {
  margin-top: 68px;
  margin-left: 125px;
  margin-right: 125px;
}
#social-sharer {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
