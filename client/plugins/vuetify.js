import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { defineNuxtPlugin } from 'nuxt/app';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives
    });

    nuxtApp.vueApp.use(vuetify);
});
