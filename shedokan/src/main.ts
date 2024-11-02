import * as devalue from 'devalue';
import { createPinia } from "pinia";
import { createSSRApp, createApp as createClientApp } from 'vue'
import type { App as VueApp } from '@vue/runtime-core';

import App from './App.vue'
import createRouter from './router'

import './assets/main.css'

const createApp = () => {
    const store = createPinia();
    let app: VueApp;
    if (import.meta.env.DEV && !import.meta.env.SSR) {
        app = createClientApp(App);
    } else {
        app = createSSRApp(App);
    }
    app.use(store);
    const router = createRouter();
    app.use(router);
    return { app, store, router }
}
export default createApp;