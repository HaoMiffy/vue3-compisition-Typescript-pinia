import { defineStore } from 'pinia'
export const PublicStore = defineStore('Public', { // Public项目唯一id
  state: () => ({
    data: [
      {
        name: 'Miffy',
        id: 123
      },
      {
        name: 'Miffy',
        id: 456
      },
      {
        name: 'Miffy',
        id: 789
      },
      {
        name: 'Miffy',
        id: 101112
      }
    ]
  }),
  getters: {

  },
  actions: {

  },
})