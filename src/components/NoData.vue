<template>
    <div>
        <img src="@/assets/img/pug.svg" width="30%" class="mx-auto pt-8">
        <p class="dark:text-white text-center text-6xl font-bold mt-8">Nada por aqui</p>
        <div class="flex justify-center w-full">
            <p class="dark:text-white text-xl mt-10 w-1/2 text-center">{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoData',
    props: ['text']
}
</script>
