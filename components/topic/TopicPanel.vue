<template>
  <div>
    <div id="panel-container" class="flex flex-box bg-white justify-center">
      <div v-for="(item, index) in sections" :key="index" class="panel-button">
        <button class="panel-button-text" @click="clickPanel(index)">
          <Label1>
            {{ item }}
          </Label1>
        </button>
        <button
          class="panel-button-border"
          :style="
            index === 0
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
  computed: {
    sections() {
      if (this.opinions.length === 0) {
        return ['สรุป', 'เปรียบเทียบ'];
      } else {
        return ['สรุป', 'เปรียบเทียบ', 'ข้อคิดเห็น'];
      }
    },
  },
  methods: {
    clickPanel(index: number): void {
      const panels = document.querySelectorAll<HTMLElement>(
        '.panel-button-border'
      );
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
.panel-button {
  height: 100%;
  margin-left: 5px;
  width: 100%;
}
.panel-button-text {
  display: flex;
  justify-content: center;
  height: calc(100% - 5px);
  border: none;
  width: 100%;
  outline: none;
}
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

@media only screen and (max-width: 768px) {
  #panel-container {
    height: 35px;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
