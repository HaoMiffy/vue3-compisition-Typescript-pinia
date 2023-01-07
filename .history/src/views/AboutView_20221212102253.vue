<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ max }}</h2>
    <button @click="click()">count number:{{ counter.count }}</button>
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>
              {{ item.id }}
            </td>
            <td>
              {{ item.name }}
            </td>
            <td>
              <button @click="remove()">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const max = ref("Miffy")
const counter = reactive({ count: 999 })

const data = [
  {
    id: 123,
    name: "Miffy"
  },
  {
    id: 456,
    name: "Miffy"
  },
  {
    id: 789,
    name: "Miffy"
  }
]

function click() {
  counter.count++
}

function remove() {
  let len = data.length - 1;
  data.slice(len, 1);
}



</script>
