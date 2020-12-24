<template>
  <div>
    <div
      id="panel-container"
      class="flex flex-box bg-white justify-center h-10"
    >
      <div
        v-for="(item, index) in sections"
        :key="index"
        class="h-full w-full ml-1"
      >
        <button
          class="flex justify-center w-full border-none"
          style="height: calc(100% - 5px); outline: none"
          @click="clickPanel(index)"
        >
          <Label1>
            {{ item }}
          </Label1>
        </button>
        <button
          class="panel-button-border"
          :style="
            index === current_panel
              ? { borderColor: bgColor, opacity: 1.0 }
              : { borderColor: bgColor, opacity: 0.2 }
          "
          @click="clickPanel(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    bgColor: {
      type: String,
      default: '',
    },
    opinions: {
      type: Array,
    },
  },
  data() {
    return {
      current_panel: 0,
    };
  },
  computed: {
    sections() {
      // allow for 2-column panel, if no opinions available
      if (this.opinions.length === 0) {
        return ['สรุป', 'เปรียบเทียบ'];
      } else {
        return ['สรุป', 'เปรียบเทียบ', 'ข้อคิดเห็น'];
      }
    },
  },
  methods: {
    // change panel & notify parent to display correct section
    clickPanel(index: number): void {
      this.current_panel = index;
      this.$emit('clicked', index);
    },
  },
});
</script>

<style scoped>
.panel-button-border {
  display: flex;
  justify-content: center;
  height: 0px;
  border-bottom: 5px solid;
  width: 100%;
  outline: none;
  -webkit-transition: opacity 0.1s ease-in-out;
  -moz-transition: opacity 0.1s ease-in-out;
  -ms-transition: opacity 0.1s ease-in-out;
  -o-transition: opacity 0.1s ease-in-out;
  transition: opacity 0.1s ease-in-out;
}
</style>
