<template>
    <div>
        <div class="grid grid-cols-4 gap-4 block">
            <div class="relative">
                <img src="https://picsum.photos/300/300" class="justify-self-center rounded-xl">
                <div class="absolute bottom-3 bg-black/50 left-3 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
    data() {
        return {
            
        }
    },
}
</script>
