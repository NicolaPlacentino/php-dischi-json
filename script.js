const { createApp } = Vue;

// const ApiUri = '/localhost/php-dischi-json/discs.php';
const ApiUri = '/php-dischi-json/discs.php';


const app = createApp({
    data() {
        return {
            discs: [],
        }
    },
    computed: {

    },
    methods: {

    },
    created() {
        axios.get(ApiUri).then(res => {
            this.discs = res.data;
        });
    }
});

app.mount('#root');