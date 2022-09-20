<template>
  <div>
    <v-layout>
      <NuxtLayout />
      <v-main>
        <v-container fluid>
          <NuxtPage />
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script lang="ts" setup>
  import "@/assets/css/tailwind.css";
</script>
