<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ max }}</h2>
    <button @click="click()">count number:{{ counter.count }}</button>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <Table :data="Data" :columns="Columns" :filter-key="searchQuery"></Table>
  </div>
</template>

<script setup>
import { ref, reactive,computed } from 'vue'
import Table from './table.vue'





const max = ref("Miffy")
const counter = reactive({ count: 999 })

const searchQuery = ref('')
const Columns = ['id', 'name']
const Data = [
  this.store.$state.data
]

function click() {
  counter.count++
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