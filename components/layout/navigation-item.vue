<template>
  <div
    class="group p-2 flex rounded-full hover:bg-light-gray-1"
    @click="$emit('click')"
  >
    <Label2 class="m-auto"><slot /></Label2>
  </div>
</template>
