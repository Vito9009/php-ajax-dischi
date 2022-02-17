const app = new Vue({
    el: '#app',
    data:{
        myApiUrl: 'http://localhost/php-ajax-dischi/milestone-2/mydatabase.php',
        mydatabase: []
    },
    methods: {
        getDischi(){
            axios.get(this.myApiUrl)
                .then(response => {
                    console.log(response.data);
                    this.mydatabase = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getDischi();
    }
})