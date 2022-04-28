<template>
  <div class="dark:bg-slate-900">
    <nav class="flex items-center justify-between flex-wrap py-6 px-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <img
          class="mr-4 cursor-pointer"
          src="@/assets/img/logo.svg"
          width="40"
          @click="$router.push('/')"
        />
        <span class="font-bold text-2xl text-slate-600 tracking-tight dark:text-white"
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
            dark:text-white
            dark:border-white
          "
          @click="menu = !menu"
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
      <div class="hidden w-full block lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <p
            v-for="(nav, index) in links"
            :key="index"
            @click="$router.push(nav.link)"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-slate-600
              hover:text-slate-900
              mr-4
              font-bold
              dark:text-white
              cursor-pointer
            "
            :class="nav.link == $route.path && 'text-blue-400 dark:text-blue-400'"
          >
            {{ nav.text }}
          </p>
        </div>
        <div
          class="
            hidden
            sm:block
            h-6
            border-l border-neutral-300
            dark:border-neutral-6000
            mr-3
          "
        ></div>
        <div class="flex items-center">
          <button
            class="rounded-full mr-3"
            @click="$parent.isDark = !$parent.isDark"
          >
            <svg
              v-if="darkMode"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="menu" class="w-screen block lg:hidden bg-blue-50/50 rounded-lg flex pb-4 justify-between mt-3">
        <div class="text-sm">
          <p
            v-for="(nav, index) in links"
            :key="index"
            @click="$router.push(nav.link)"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-slate-600
              hover:text-slate-900
              mr-4
              font-bold
              dark:text-white
              cursor-pointer
            "
            :class="nav.link == $route.path && 'text-blue-400 dark:text-sky-900'"
          >
            <span class="mx-5">🐶</span> {{ nav.text }}
          </p>
        </div>
        <div class="mt-3">
          <button
            class="rounded-full mr-3"
            @click="$parent.isDark = !$parent.isDark"
          >
            <svg
              v-if="darkMode"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  props: ["darkMode"],
  data() {
    return {
      links: [
        { text: "Inicio", link: "/"},
        { text: "Buscar", link: "/buscar" },
        { text: "Mis búsquedas", link: "/historial" },
        { text: "Mis favoritos", link: "/favoritos" },
      ],
      menu: false
    };
  },
};
</script>
