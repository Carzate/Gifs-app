<template>
    <div class="py-10">
        <h3 class="font-bold text-4xl lg:pl-8 dark:text-white">Mis búsquedas</h3>
        <p class="text-sm pl-8 pt-4 dark:text-white">Últimas 10 búsquedas, puedes hacer click en cada una para volver a buscar</p>
        <div class="pt-8 pl-8" v-if="record.length > 0">
            <ul class="w-1/2 text-sm font-medium border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
