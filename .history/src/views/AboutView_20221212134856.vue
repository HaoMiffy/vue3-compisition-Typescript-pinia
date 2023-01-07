<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ max }}</h2>
    <button @click="click()">count number:{{ counter.count }}</button>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
      <table :data="Data" :columns="Columns" :filter-key="searchQuery"></table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { PublicStore } from '@/store/index'
import table from './table.vue'


const store = PublicStore()



const max = ref("Miffy")
const counter = reactive({ count: 999 })

const searchQuery = ref('')
const Columns = ['name', 'power']
const Data = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

function click() {
  counter.count++
}

function remove(index: number) {
  Data.splice(index, 1);
  console.log(Data)
}



</script>

<style>
.table {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>