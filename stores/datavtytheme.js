import { defineStore } from 'pinia';
import { ref } from 'vue'
export const datavtytheme = defineStore({
    id: 'iddata',
    state: () => ({
        env: {
            themeChoisi: ref(localStorage.getItem('themeChoisi') || 'dark'),
        },
    }),
})