<template>
    <div>
        <img src="@/assets/img/pug.svg" width="30%" class="mx-auto pt-8">
        <p class="dark:text-white text-center text-4xl md:text-6xl font-bold mt-8">Nada por aqui</p>
        <div class="flex justify-center w-full px-3 md:px-0">
            <p class="dark:text-white lg:text-xl mt-10 w-full md:w-1/2 text-center">{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoData',
    props: ['text']
}
</script>
