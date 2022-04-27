<template>
  <div>
    <div class="px-6 pt-6 mb-4 bg-blue-50 dark:bg-slate-900 sticky top-0 z-50">
      <form class="flex items-center mx-auto pb-6 w-1/2" @submit.prevent="clearAndSearch">   
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
                </path>
              </svg>
            </div>
            <input v-model="text" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Perritos">
          </div>
          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
      </form>
    </div>
    <gif-card class="lg:min-h-[800px]" :gifsInfo="gifs"></gif-card>
  </div>
</template>

<script>
import GifCard from '@/components/GifCard.vue'

export default {
  components: { GifCard },
  data() {
    return {
      text: '',
      page: 0,
      gifs: {
        info: [],
      },
      favorites: []
    }
  },
  methods: {
    clearAndSearch(){
      this.gifs = {
        info: []
      },
      this.getInfoFromGiphy()
    },
    getInfoFromGiphy(){
      this.axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ji8jX4TuV5K1R6OHaSA0tCWVzRld2YTR&q=${'perritos ' + this.text}&lang=es&limit=25&offset=${this.page + '0'}`)
      .then(response => {
        this.gifs.info = response.data.data.map(element => {
          return {
            id: element.id,
            url: element.images.original.url,
            title: element.title,
            favorite: false
          }
        })
        this.gifs.pagination = response.data.pagination
        const fav = localStorage.getItem('favorites')
        if(fav) { 
          const favoriteList = JSON.parse(fav)
          this.favorites = favoriteList
          let result = this.favorites.map(obj => this.gifs.info.findIndex(o => o.id === obj.id))
          result.map(element => {
            if(element >= 0)this.gifs.info[element].favorite = true
          })
        }
      })
    }
  },
  created() {
    this.getInfoFromGiphy()
  },
}
</script>
