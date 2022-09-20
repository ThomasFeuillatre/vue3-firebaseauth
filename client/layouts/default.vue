<template>
  <v-navigation-drawer v-model="drawer" bottom expand-on-hover rail color="green darken">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";

  let drawer = ref(false);
  const group = null;
  const items = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Gestion employée",
      link: "/employee",
    },
  ];
</script>
