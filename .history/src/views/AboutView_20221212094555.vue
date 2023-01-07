<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{max}}</h2>
    <button @click="click()">count  number:{{counter.count}}</button>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive} from 'vue'

const max=ref("Miffy")
const counter = reactive({ count: 999 })

function click(){
  counter.count++
}

</script>
