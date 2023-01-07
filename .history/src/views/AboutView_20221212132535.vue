<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ max }}</h2>
    <button @click="click()">count number:{{ counter.count }}</button>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th v-for="colum in colums" :key="colum">{{colum}}</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data"  :key="index">

            <td>
              <button @click="remove(index)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { PublicStore } from '@/store/index'


const store = PublicStore()

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