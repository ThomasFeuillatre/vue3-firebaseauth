<script setup lang="ts">
import { useDummyStore } from '@store/dummy';

const dummyStore = useDummyStore();
</script>

<template>
  <div>
    <p>{{ dummyStore.name }}</p>
  </div>
</template>

<style lang="scss"></style>
