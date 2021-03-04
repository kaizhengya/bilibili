import { createApp,getCurrentInstance } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import { Icon,Button ,Tab, Tabs} from 'vant';
import 'vant/lib/index.css';

createApp(App).use(Icon).use(Button).use(store).use(router).use(Tab).use(Tabs).mount('#app')
