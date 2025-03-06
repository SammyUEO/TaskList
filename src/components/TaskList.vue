<script setup>
import { useTaskStore } from '../store';
import Task from './Task.vue';
import { ref } from 'vue';

const store = useTaskStore();
const newTaskText = ref('');

const addNewTask = () => {
  if (newTaskText.value.trim()) {
    store.addTask(newTaskText.value);
    newTaskText.value = '';
  }
};
</script>

<template>
  <div class="container mt-3">
    <div class="list-group">
      <Task
        v-for="task in store.tasks"
        :key="task.id"
        :task="task"
        :toggleFavorite="store.toggleFavorite"
        :removeTask="store.removeTask"
        :toggleSelect="store.toggleSelect"
      />
    </div>
    <div class="mt-3 d-flex">
      <input
        v-model="newTaskText"
        type="text"
        class="form-control me-2"
        placeholder="Enter new task"
        @keyup.enter="addNewTask"
      />
      <button @click="addNewTask" class="btn btn-primary">+ Add Task</button>
    </div>
  </div>
</template>
