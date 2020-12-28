// Vue.filter ('capatilize', function(value){
//     if (!value) return ''
//     value = value.toString()
//     return value.replace(/\b\w/g, function(l) { return l.toUpperCase() })
// });

Vue.component ('app-car', {
    data: function() {
        return {
            cars: [
                {model: "Lada", speed: 150.5},
                {model: "Ferrari", speed: 300},
                {model: "Mersedes", speed: 250.3},
                {model: "Toyota", speed: 200.21},
            ]
        }
        
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});

new Vue ({
    el: '#app',
    components: {
        'soska': {
            data: function() {
                return {
                    cars: [
                        {model: "Lada", speed: 150.5},
                        {model: "Ferrari", speed: 300},
                        {model: "Mersedes", speed: 250.3},
                        {model: "Toyota", speed: 200.21},
                    ]
                }

            
            }, 
            template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>' 
        }
    }
});
new Vue ({
    el: '#app2',
});