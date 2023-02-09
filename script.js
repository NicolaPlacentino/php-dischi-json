const app = Vue.createApp({
    data(){
        return{

        }
    },
    computed:{

    },
    methods:{

    },

    // todo DA ELIMINARE
    mounted(){
        axios.get()
        .then(() => {})
    }
});

// todo DA AGGIUNGERE ID ROOT

app.mount('#root');