import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { createPinia } from 'pinia';

import firebase from 'firebase/compat';
import { firebaseConfig } from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

loadFonts();

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(vuetify);
app.mount('#app');
