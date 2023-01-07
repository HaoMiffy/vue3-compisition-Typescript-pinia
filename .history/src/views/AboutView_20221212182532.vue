<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ max }}</h2>
    <button @click="click()">count number:{{ counter.count }}</button>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data"  :key="index">
            <td>
              {{item.id}}
            </td>
            <td>
              {{item.name}}
            </td>
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
import { ref, reactive,computed } from 'vue'
import { PublicStore } from '@/store/index'
const store = PublicStore()

const max = ref("Miffy")
const counter = reactive({ count: 999 })


const data =  computed (() => store.$state.data)

function click() {
  counter.count++
}

function remove(index: number) {
  data.value.splice(index, 1);
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