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

<script>
import Table from './table.vue'
export default {
  components: {
    Table
  },
  data() {
    return {
      Columns: ['name', 'power'],
      Data: this.$store.state.data,
      searchQuery: ''
    }
  },
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