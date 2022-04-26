<template>
  <div class="dark:bg-slate-900">
    <span class="block bg-[#ef233c] w-72 h-72 rounded-full filter blur-3xl opacity-10 lg:h-40"></span>
    <div class="absolute inset-x-0 md:top-80 min-h-0 pl-20 py-10 flex overflow-hidden z-0">
      <span class="block bg-[#ef233c] w-72 h-72 rounded-full filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
      <span class="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
    </div>
    <div class="flex justify-between flex-wrap">
      <div class="dark:text-white lg:w-1/2 lg:pl-10 lg:pr-10 pb-20">
        <vue-typed-js class="font-bold text-4xl xl:text-6xl pb-8 min-h-[200px]" :loop="true" :strings="['y guarda', 'y guarda Gifs de Perritos 🐶']">
          <h1>Descubre <span class="typing"></span></h1>
        </vue-typed-js>
        <p class="text-base md:text-lg">Esta aplicación te ayuda a encontrar gifs de perritos, solo introduce cualquier texto en el campo de búsqueda</p>
      </div>
      <div class="grid grid-cols-2 gap-1 sm:w-full lg:w-2/5 pb-10">
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
  </div>
  
</template>

<script>
export default {
  
}
</script>
