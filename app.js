Vue.filter('format-thousands', function(value) {
    // https://stackoverflow.com/a/2901298
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

new Vue({
    el: "#app",

    data: {
        imageDay: []
    },
    created: function() {
        var that = this;
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(function(response) {
                that.imageDay = response.data;
                console.log(imageDay);
            })
            .catch(function(error) {
                console.log(error);
            });
    },

});


new Vue({
    el: "#app2",
    data: {
        textSearch: "",
        images: []
    },
    /* filtramos todo el contenido del array según el nombre del autor.
    Si contiene el valor de textSearch obtendremos un nuevo array con las imagenes que contengan en su autor el valor de la propiedad textSearch */
    computed: {
        imagesFilter: function() {
            var textSearch = this.textSearch;
            return this.images.filter(function(el) {
                return el.author.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    },

    /*  como queremos inicializar la propiedad images con la lista de imagenes extraída de la API, 
    vamos a añadir el hook created y añadir la petición a la API hecha con Axios:*/

    created: function() {
        var that = this;
        axios.get('https://picsum.photos/v2/list?page=2&limit=100')
            .then(function(response) {
                that.images = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    },


});



new Vue({
    el: "#app3",

    data: {
        quotes: []
    },

    created() {
        axios({
                "method": "GET",
                "url": "https://quote-garden.herokuapp.com/quotes/all",
            })
            .then((response) => {
                console.log(response)
                this.quotes = response.data.results;

            })
            .catch((error) => {
                console.log(error)
            })

    }

});

new Vue({
    el: "#app4",

    data: {
        quoteRandom: []
    },

    created() {
        axios({
                "method": "GET",
                "url": "https://quote-garden.herokuapp.com/quotes/random",
            })
            .then((response) => {
                console.log(response)
                this.quoteRandom = response.data;

            })
            .catch((error) => {
                console.log(error)
            })

    }

});