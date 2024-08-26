import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

const app = createApp(App)

// Use the router instance
app.use(router)

// Mount the app
app.mount('#app')
