<template>
  <div id="app" :class="isDark && 'bg-slate-900'" class="min-h-screen">
    <div class="container mx-auto" :class="isDark === true && 'dark'">
      <header-nav :darkMode="isDark"></header-nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/NavHeader.vue'

export default {
  name: 'App',
  components: { HeaderNav },
  data() {
    return {
      isDark: true,
    }
  },
}
</script>

<style>

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
