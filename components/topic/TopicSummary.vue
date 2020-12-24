<template>
  <div class="flex flex-col justify-center w-full">
    <div class="flex flex-row bg-white text-black justify-center mx-auto">
      <div class="justify-center w-full px-3 md:px-6">
        <TopicSummaryTable class="mt-16 md:mt-20 w-full" :table="summary_table">
        </TopicSummaryTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopicSummaryTable from '@/components/topic/TopicSummaryTable.vue';
export default Vue.extend({
  components: {
    TopicSummaryTable,
  },
  props: {
    summary: String,
  },
  computed: {
    // summary_intro(): string {
    //   return this.summary.split('|  |')[0];
    // },
    summary_table(): string {
      return this.summary;
      // let result = '';

      // let ts = this.summary.slice(this.summary.indexOf('|  |') + 1);
      // ts = ts.slice(0, ts.lastIndexOf('|') + 1);

      // let i = 0;
      // let endCol: number;
      // let endLine: number;
      // while (true) {
      //   // parse single row
      //   let row = '';
      //   endCol = ts.indexOf('|', i);
      //   endLine = ts.indexOf('\n', i);
      //   while (endCol !== -1 && (endCol < endLine || endLine === -1)) {
      //     // add next column to row
      //     // if image is present in cell
      //     const img = ts.indexOf('![]', i);
      //     if (img !== -1 && img < endCol) {
      //       const imgsrc = ts.slice(img + 4, ts.indexOf(')', img));
      //       row +=
      //         '<td>' +
      //         ts.slice(i, img) +
      //         '<br/><img src="' +
      //         imgsrc +
      //         '"/>' +
      //         '</td>';
      //     } else {
      //       row += '<td>' + ts.slice(i, endCol) + '</td>';
      //     }
      //     i = endCol + 1;

      //     // find next column & newline tokens
      //     endCol = ts.indexOf('|', i);
      //     endLine = ts.indexOf('\n', i);
      //   }
      //   i = Math.max(endCol, endLine) + 1;

      //   // add row to table
      //   result += '<tr>' + row + '</tr>';

      //   // no more columns or rows, break
      //   if (endCol === -1) {
      //     break;
      //   }
      // }

      // return '<table>' + result + '</table>';
    },
  },
});
</script>

<style scoped>
div >>> h1,
h2,
h3,
h4,
h5,
h6 {
  padding-left: 120px;
  padding-right: 120px;
}
div >>> h1,
h2 {
  @apply font-heading leading-1.2 text-48 font-normal;
}
div >>> h1 {
  @apply font-black;
}
div >>> h3,
h4 {
  @apply font-heading leading-1.2 text-36 font-normal;
}
div >>> h3 {
  @apply font-black;
}
div >>> h5,
h6 {
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

@media only screen and (max-width: 768px) {
  div >>> h1,
  h2 {
    @apply text-36;
  }
  div >>> h3,
  h4 {
    @apply text-24;
  }
  div >>> h5,
  h6 {
    @apply text-21;
  }
  div >>> p {
    padding: 0 8px 0 8px;
    @apply text-16;
  }
}

@media only screen and (max-width: 640px) {
  div >>> h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-left: 7px;
    margin-right: 7px;
  }
  div >>> h1,
  h2 {
    @apply text-24;
  }
  div >>> h3,
  h4 {
    @apply text-21;
  }
  div >>> h5,
  h6 {
    @apply text-18;
  }
  div >>> p {
    padding: 0 8px 0 8px;
    @apply text-14;
  }
}
</style>
