<template>
    <div class="py-10">
        <div class="flex">
            <h3 class="font-bold text-4xl pl-3 md:pl-8 dark:text-white">Mis búsquedas</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <p class="text-sm pl-3 md:pl-8 pt-4 dark:text-white">Últimas 10 búsquedas, puedes hacer click en cada una para volver a buscar</p>
        <div class="pt-8 px-3 md:px-8" v-if="record.length > 0">
            <ul class="w-full md:w-1/2 text-sm font-medium border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full px-4 py-2 dark:border-gray-600 cursor-pointer" :class="index != record.length - 1 ? 'border-b border-gray-200' : ''" v-for="(list, index) in record.slice().reverse()" :key="index" @click="search(list)">{{list.text}}</li>
            </ul>
        </div>
        <no-data v-else text="Intenta hacer una nueva búsqueda."></no-data>
    </div>
</template>

<script>
import NoData from '@/components/NoData.vue'

export default {
    components: { NoData },
    data() {
        return {
            record:[]
        }
    },
    created() {
        this.getRecord()
    },
    methods: {
        getRecord(){
            const list = localStorage.getItem('record')
            if(list) { 
                const recordList = JSON.parse(list)
                recordList.map(element => {
                    this.record.push({text: element})
                })
            }
        },
        search(list){
            this.$router.push({ name: 'buscar', query: { searchText: list.text }})
        }
    },
}
</script>
