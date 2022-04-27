<template>
  <div class="dark:bg-slate-900 p-3 md:p-0">
    <span class="hidden lg:block bg-[#ef233c] w-72 h-72 rounded-full filter blur-3xl opacity-10 lg:h-20"></span>
    <div class="absolute inset-x-0 md:top-80 min-h-0 pl-20 py-10 flex overflow-hidden z-0">
      <span class="block bg-[#ef233c] w-72 h-72 rounded-full filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
      <span class="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
    </div>
    <div class="flex justify-between flex-wrap">
      <div class="dark:text-white lg:w-1/2 lg:pl-10 lg:pr-10 pb-20">
        <vue-typed-js class="font-bold text-4xl xl:text-6xl pb-8 min-h-[140px] md:min-h-[200px]" :loop="true" :strings="['y guarda', 'y guarda Gifs de Perritos 🐶']">
          <h1>Descubre <span class="typing"></span></h1>
        </vue-typed-js>
        <p class="text-base md:text-lg">Esta aplicación te ayuda a encontrar gifs de perritos, solo introduce cualquier texto en el campo de búsqueda</p>
      </div>
      <div class="grid grid-cols-2 gap-2 sm:w-full lg:w-2/5 pb-10">
        <div>
          <kinesis-container>
              <kinesis-element :strength="30">
                <img class="rounded" src="@/assets/img/dog.jpg" alt="dog" width="100%">
                <img class="mt-2 rounded" src="@/assets/img/dog2.jpg" alt="dog1" width="100%">
              </kinesis-element>
          </kinesis-container>
        </div>
        <div>
          <kinesis-container>
              <kinesis-element :strength="30">
                <img class="mt-7 rounded" src="@/assets/img/dog1.jpg" alt="dog1" width="100%">
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </div>
    <div class="py-6">
      <h3 class="font-bold text-4xl lg:pl-10 dark:text-white flex">Tendencias
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </h3>
      <div class="lg:pl-10">
        <vue-glide v-model="active" :autoplay="2500" :breakpoints="{ 800: { perView: 1 } }" class="py-3 lg:py-20 block">
          <vue-glide-slide v-for="(img, index) in slider" :key="index">
            <div style="width:100%;height:270px;padding-bottom:72%;position:relative;">
              <iframe :src="img.link" width="100%" height="270px" style="position:absolute; border-radius: 20px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
          </vue-glide-slide>
        </vue-glide>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/NavFooter.vue'

export default {
  components: { FooterNav },
  data() {
    return {
      active: 0,
      slider: [
        { link: 'https://giphy.com/embed/3o6ozzX4mAcwkkgzG8' },
        { link: 'https://giphy.com/embed/eYilisUwipOEM' },
        { link: 'https://giphy.com/embed/UkaZpqcieR38c' },
        { link: 'https://giphy.com/embed/FDhOyyupdPuwM' },
        { link: 'https://giphy.com/embed/xXxIj4rrbo92g' },
      ]
    }
  },
}
</script>
