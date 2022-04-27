<template>
    <div>
        <div class="lg:columns-4 md:columns-3 sm:columns-2 gap-2 w-3/4 mx-auto space-y-3 pb-14">
            <div class="relative break-inside-avoid rounded-xl" v-for="(gif, index) in gifsInfo.info" :key="index" >
                <img :src="gif.url" class="rounded-xl">
                <div class="absolute top-3 bg-black/50 left-3 p-2 rounded-xl cursor-pointer">
                    <svg v-if="gif.favorite" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor" @click="deleteFavorite(gif)">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="gif.favorite = true, setFavorite(gif)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GifCard',
    props: ['gifsInfo'],
    methods: {
        deleteFavorite(gif){
            const result = this.$parent.gifs.info.findIndex(el => el.id === gif.id)
            this.$parent.gifs.info[result].favorite = false
            if(this.$route.name === 'buscar'){
                const resultLocal = this.$parent.favorites.findIndex(el => el.id === gif.id)
                this.$parent.favorites.splice(resultLocal, 1)
                localStorage.setItem('favorites', JSON.stringify(this.$parent.favorites))
            }else{
                this.$parent.gifs.info.splice(result, 1)
                localStorage.setItem('favorites', JSON.stringify(this.$parent.gifs.info))
            }
        },
        setFavorite(gif){
            this.$parent.favorites.push(gif)
            localStorage.setItem('favorites', JSON.stringify(this.$parent.favorites))
        }
    },
}
</script>
