import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        text: 'Add images to the product gallery',
        favorite: false,
        selected: false,
      },
      {
        id: 2,
        text: 'Update user profile page',
        favorite: false,
        selected: false,
      },
      {
        id: 3,
        text: 'Support tickets list doesnt support commas',
        favorite: false,
        selected: false,
      },
      {
        id: 4,
        text: 'Changing title text on single locations pages',
        favorite: false,
        selected: false,
      },
      {
        id: 5,
        text: 'Registration Confirmation! Email is missing some information',
        favorite: false,
        selected: false,
      },
      {
        id: 6,
        text: 'Login page not redirecting wrong',
        favorite: false,
        selected: false,
      },
      {
        id: 7,
        text: 'Custom Field for Registration',
        favorite: false,
        selected: false,
      },
    ],
  }),
  actions: {
    addTask(text) {
      if (text.trim()) {
        this.tasks.push({
          id: Date.now(),
          text,
          favorite: false,
          selected: false,
        });
      }
    },
    toggleFavorite(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.favorite = !task.favorite;
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
    toggleSelect(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.selected = !task.selected;
    },
  },
});
