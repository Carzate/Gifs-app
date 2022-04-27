<template>
    <div class="h-screen">
        <h3 class="font-bold text-4xl lg:pl-8 dark:text-white flex my-10">Mis Gifs Favoritos
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
        </h3>
        <gif-card :gifsInfo="gifs" v-if="gifs && gifs.info.length > 0"></gif-card>
        <div v-else>
            <img src="@/assets/img/pug.svg" width="30%" class="mx-auto pt-8">
            <p class="dark:text-white lg:text-center text-6xl font-bold mt-8">Nada por aqui</p>
            <p class="dark:text-white lg:text-center text-xl mt-10">Intenta guardar tus gifs favoritos presionando el boton <br> de corazón en la parte superior derecha en la página de búsqueda.</p>
        </div>
    </div>
</template>

<script>
import GifCard from '@/components/GifCard.vue'

export default {
    components: { GifCard },
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
