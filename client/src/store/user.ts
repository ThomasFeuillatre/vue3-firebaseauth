import { defineStore } from 'pinia';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat';
import router from '../router';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null as User | null,
      isLogged: false,
    };
  },
  actions: {
    setName(name: string) {
      this.user!!.firstname = name;
    },
    async logIn(email: string, password: string) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          //todo make call to api to fetch user information
          router.push('/');
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async register(email: string, password: string) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          console.log('Successfully registered!');
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => router.push({ name: 'Login' }));
    },
  },
});

interface User {
  email: String;
  firstname: String;
  lastname: String;
}
