<template>
  <div>
    <h1>Mes employées</h1>
  </div>
</template>

<script setup lang="ts">
  import { employeeStore } from "~/stores/employeeStore";

  const store = employeeStore();
</script>

<style scoped></style>
