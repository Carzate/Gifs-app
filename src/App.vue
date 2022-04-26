<template>
  <div id="app" class="mx-8" :class="isDark === true ? 'dark' : ''">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/NavHeader.vue'

export default {
  name: 'App',
  components: { Header },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
