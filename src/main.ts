import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import {IonicVue} from '@ionic/vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import {AVPlugin} from 'vue-audio-visual'
import {supabase} from "@/lib/supabase/supabaseClient";

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(AVPlugin)
    .use(pinia);

router.isReady().then(() => {
    app.mount('#app');
});
