var app = new Vue({
        // http://api.k780.com/?app=weather.today&weaId=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json 
        el:"#app",
        data:{
            city:"成都",
            weatherList:[]
        },
        methods: {
            searchWeather:function() {
                // console.log(this.city);
                // 调用接口
                var that = this;
                axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(function(response) {
                    // console.log(response);
                    console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function(err){})
            },
            changeCity:function(city) {
                this.city = city;
                this.searchWeather();
            }
        }
    })
