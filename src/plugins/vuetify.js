import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'fa',
    treeShake: true,
    font: {
      family: 'Nunito Sans'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#fafafa', //background
                background: '#fafafa',
                secondary: '#ffffff', //input
                accent: '#111517', //text
                element: '#ffffff', //elements
                anchor: '#111517',
                text: '#111517'
            },
            dark: {
                primary: '#202c37',
                background: '#202c37',
                secondary: '#2b3945',
                tertiary: '#2b3945',
                accent: '#ffffff',
                element: '#202c37',
                anchor: '#ffffff',
                info: '#202c37',
                success:'#2b3945'
            },
        },
        options: {
            customProperties: true
        },
    },
});

