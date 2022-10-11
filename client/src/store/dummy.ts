import { defineStore } from 'pinia';

export const useDummyStore = defineStore('dummy', {
  state: () => ({ name: 'dummy' }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
  },
});
