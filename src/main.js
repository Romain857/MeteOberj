import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'
import router from './router'
import header from './components/header.vue'
import footer from './components/footer.vue'
import './assets/style.css'
import PrimeVue from 'primevue/config';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';  
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'

const app = createApp(App)

app.component('Header', header)
app.component('Footer', footer)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Button', Button)
app.component('Dropdown', Dropdown)

app.use(
    createAuth0({
        domain: "dev-x7kq79lr.us.auth0.com",
        client_id: "7ndlOFkdZMYtX1mVOnNGJzvI8sfypHVa",
        redirect_uri: window.location.origin
    })
);

app.use(PrimeVue);

app.use(router)

app.mount('#app')