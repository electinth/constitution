<template>
  <div v-if="isOpen" class="flex flex-row bg-teal text-white p-2 md:p-4">
    <div class="flex-1 flex flex-row max-w-4xl space-x-2 p-1 md:p-2 m-auto">
      <div class="w-4 md:w-8 mt-1">
        <img
          src="~/assets/images/icon-warning.svg"
          alt="คำเตือน"
          class="w-full"
        />
      </div>
      <Paragraph2 class="flex-1">
        <span class="font-semibold"> Update Announcement</span><br />
        Re-constitution เพิ่มเติมเนื้อหาบทบัญญัติรัฐธรรมนูญอีก 7 หมวดหลัก พร้อม
        Function ค้นหาหมวดรัฐธรรมนูญ (อัพเดตรายละเอียด ณ วันที่ 06/05/2564)
      </Paragraph2>
    </div>
    <div class="w-3 md:w-4">
      <img
        src="~/assets/images/icon-cross.svg"
        alt="ปิด"
        class="w-full cursor-pointer"
        @click="isOpen = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isOpen: true,
    };
  },
});
</script>
