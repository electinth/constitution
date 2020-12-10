<template>
  <div class="flex flex-col md:flex-row bg-white space-x-2">
    <div class="md:w-2/3 flex flex-row">
      <div class="md:flex-1 p-3 md:p-4">
        <img
          src="~/assets/images/logo-elect-header.png"
          alt="ELECT"
          class="h-4 md:h-6 my-auto"
        />
      </div>
      <div class="flex-1 col-span-2 md:col-span-1 flex md:justify-center">
        <Heading4 class="my-auto">CONSTITUTION CHANGE</Heading4>
      </div>
    </div>

    <div class="md:w-1/3 flex bg-light-gray-2 md:bg-white md:pr-4">
      <div
        class="w-full flex flex-row my-auto justify-around md:justify-end space-x-2"
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
  </div>
</template>
