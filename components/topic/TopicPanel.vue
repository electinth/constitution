<template>
  <div>
    <div id="panel-container" class="flex flex-box bg-white justify-center">
      <button
        v-for="(item, index) in sections"
        :key="index"
        class="flex bg-white h-full border-black border-solid border-b-4 justify-center"
        style="width: 33%; margin-left: 5px"
        @click="clickPanel(index)"
      >
        <Label1>
          {{ item }}
        </Label1>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      sections: ['สรุป', 'เปรียบเทียบ', 'ข้อคิดเห็น'],
    };
  },
  methods: {
    clickPanel(index: number): void {
      const panels = document.querySelectorAll('button');
      panels.forEach(function (item, i) {
        if (i !== index) {
          item.style.opacity = '0.2';
        } else {
          item.style.opacity = '1.0';
        }
      });
      this.$emit('clicked', index);
    },
  },
});
</script>

<style scoped>
#panel-container {
  height: 50px;
  padding-left: 110px;
  padding-right: 105px;
}
</style>
