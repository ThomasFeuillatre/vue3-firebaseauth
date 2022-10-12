<template>
  <v-app>
    <v-main>
      <router-view class="h-100" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  data() {
    return {
      //
    };
  },
});
</script>
