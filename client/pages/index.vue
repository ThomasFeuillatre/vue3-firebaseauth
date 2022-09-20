<template>
  <div>Mes employee</div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nom de famille</th>
        <th class="text-left">Prénom</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.lastname }}</td>
        <td>{{ employee.firstname }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
  import { employeeStore } from "~/stores/employeeStore";

  const store = employeeStore();
  await store.fetchEmployees();
  const employees = store.getListOfEmployees;
</script>

<style scoped></style>
