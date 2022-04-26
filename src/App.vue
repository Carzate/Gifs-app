<template>
  <div id="app" :class="isDark && 'bg-slate-900'">
    <div class="container mx-auto" :class="isDark === true && 'dark'">
      <header-nav :darkMode="isDark"></header-nav>
      <router-view/>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/NavHeader.vue'
import FooterNav from '@/components/NavFooter.vue'

export default {
  name: 'App',
  components: { HeaderNav, FooterNav },
  data() {
    return {
      isDark: true,
    }
  },
}
</script>

<style>
@import '@/assets/styles.css';

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
