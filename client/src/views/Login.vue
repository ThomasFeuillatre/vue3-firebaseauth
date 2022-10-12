<template>
  <v-container class="d-flex align-center flex flex justify-center">
    <v-card
      class="flex-column card-login pa-8"
      style="max-width: 520px; min-width: 520px"
    >
      <v-text-field
        variant="outlined"
        label="Email"
        placeholder="Rentrez votre email"
        v-model="email"
        type="email"
      />
      <v-text-field
        variant="outlined"
        :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        label="Mot de passe"
        placeholder="Rentrez votre mot de passe"
        v-model="password"
        :type="show1 ? 'text' : 'password'"
        @click:append-inner="show1 = !show1"
      />
      <v-btn class="w-100" @click="onLogIn">Login</v-btn>
      <v-btn variant="text" class="text-blue-darken-4"
        >Mot de passe oublié ?</v-btn
      >
    </v-card>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@store/user.ts';
import { ref } from 'vue';

const email = ref('thomas.feuillatre.pro@gmail.com');
const password = ref('password');
const userStore = useUserStore();

let show1 = ref(false);
const onLogIn = () => {
  userStore.logIn(email.value, password.value);
};
</script>

<style scoped>
.card-login {
  min-width: 520px;
  max-width: 520px;
}
</style>
