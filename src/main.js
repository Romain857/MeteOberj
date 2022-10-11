import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(
    createAuth0({
      domain: "dev-x7kq79lr.us.auth0.com",
      client_id: "7ndlOFkdZMYtX1mVOnNGJzvI8sfypHVa",
      redirect_uri: window.location.origin
    })
  );
  
app.use(router)

app.mount('#app')
