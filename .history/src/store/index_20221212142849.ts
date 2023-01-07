import { defineStore } from 'pinia'
export const PublicStore = defineStore('Public', { // Public项目唯一id
  state: () => ({
    data: [
      {
        name: 'Chuck Norris',
        id: Infinity
      },
      {
        name: 'Bruce Lee',
        id: 9000
      },
      {
        name: 'Jackie Chan',
        id: 7000
      },
      {
        name: 'Jet Li',
        id: 8000
      }
    ]
  }),
  getters: {

  },
  actions: {

  },
})