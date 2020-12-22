<template>
  <div class="flex flex-col md:flex-row bg-white">
    <div class="md:flex-1 p-3 md:p-4 mx-auto">
      <img
        src="~/assets/images/logo-elect-header.svg"
        alt="ELECT"
        class="h-4 md:h-6 my-auto"
      />
    </div>

    <div class="hidden md:flex col-span-2 md:col-span-1 md:justify-center">
      <Heading4 class="my-auto">RE-CONSTITUTION</Heading4>
    </div>

    <div
      class="flex-1 flex flex-row my-auto justify-around md:justify-end space-x-2 bg-light-gray-2 md:bg-white md:pr-4"
    >
      <NuxtLink to="/">
        <NavigationItem>ภาพรวม</NavigationItem>
      </NuxtLink>
      <CategoriesDropdown />
      <NuxtLink to="/about">
        <NavigationItem>เกี่ยวกับโครงการ</NavigationItem>
      </NuxtLink>
    </div>
  </div>
</template>
