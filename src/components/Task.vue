<script setup>
import { defineProps } from 'vue';

const props = defineProps([
  'task',
  'toggleFavorite',
  'removeTask',
  'toggleSelect',
]);
</script>

<template>
  <div
    class="d-flex items-center justify-between border p-2 bg-white shadow rounded-lg"
  >
    <input
      type="checkbox"
      class="form-check-input me-2"
      @change="toggleSelect(task.id)"
      :checked="task.selected"
    />
    <span
      :class="{ 'text-decoration-line-through': task.selected }"
      class="flex-grow"
      >{{ task.text }}</span
    >
    <div>
      <button
        @click="toggleFavorite(task.id)"
        class="btn btn-outline-warning btn-sm me-2"
      >
        <i class="bi" :class="task.favorite ? 'bi-star-fill' : 'bi-star'"></i>
      </button>
      <button
        @click="removeTask(task.id)"
        class="btn btn-outline-danger btn-sm"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</template>
