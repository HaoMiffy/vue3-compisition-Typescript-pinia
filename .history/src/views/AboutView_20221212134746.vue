<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ max }}</h2>
    <button @click="click()">count number:{{ counter.count }}</button>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <div class="table">
      <table :data="data" :columns="colums" :filter-key="searchQuery"></table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { PublicStore } from '@/store/index'
import table from './table.vue'


const store = PublicStore()

const searchQuery = ref("")


const max = ref("Miffy")
const counter = reactive({ count: 999 })

const colums = reactive(['id', 'name'])


const data = reactive([
  store.$state.data
])

function click() {
  counter.count++
}

function remove(index: number) {
  data.splice(index, 1);
  console.log(data)
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