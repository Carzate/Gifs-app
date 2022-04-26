<template>
  <div>
    <div class="p-10">
      <gif-card></gif-card>
    </div>
  </div>
</template>

<script>
import GifCard from '@/components/GifCard.vue'

export default {
  components: { GifCard },
  data() {
    return {
      
    }
  },
  methods: {
    getInfoFromGiphy(){

    }
  },
  created() {
    this.getInfoFromGiphy()
  },
}
</script>
