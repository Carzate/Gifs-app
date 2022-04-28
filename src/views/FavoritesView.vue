<template>
    <div>
        <h3 class="font-bold text-4xl pl-3 lg:pl-8 dark:text-white flex my-10">Mis Gifs Favoritos
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
        </h3>
        <gif-card :gifsInfo="gifs" v-if="gifs && gifs.info.length > 0"></gif-card>
        <no-data v-else text="Intenta guardar tus gifs favoritos presionando el boton de corazón en la parte superior derecha en la página de búsqueda."></no-data>
    </div>
</template>

<script>
import GifCard from '@/components/GifCard.vue'
import NoData from '@/components/NoData.vue'

export default {
    components: { GifCard, NoData },
    data() {
        return {
            gifs: {
                info: []
            }
        }
    },
    methods: {
        getFavoritelist(){
            const fav = localStorage.getItem('favorites')
            if(fav) { 
                const favoriteList = JSON.parse(fav)
                this.gifs.info = favoriteList
            }
        }
    },
    created() {
        this.getFavoritelist()
    },
}
</script>
