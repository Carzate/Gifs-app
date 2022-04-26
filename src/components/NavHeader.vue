<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <img class="mr-4" src="@/assets/img/logo.svg" width="40" />
        <span class="font-bold text-2xl text-slate-600 tracking-tight"
          >Perritos</span
        >
      </div>
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-200
            border-teal-400
            hover:text-white hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            v-for="(nav, index) in links"
            :key="index"
            :href="nav.link"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-slate-600
              hover:text-white
              mr-4
            "
          >
            {{ nav.text }}
          </a>
        </div>
        <div>
          <span class="text-black mr-3">|</span>
          <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "ejemplo", link: "/historial" },
        { text: "ejemplo 2", link: "/favoritos" },
      ],
    };
  },
};
</script>
