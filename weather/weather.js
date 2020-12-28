var time = () => {
    var date = new Date();
    document.querySelector('.time').innerHTML = (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
  }

time();
setInterval(time,1000);

let cityId = 498817;

function spb() {
    cityId = 498817;    
    var element = document.querySelector('.changed-city');
    element.classList.remove('changed-city');
    var element = document.querySelector('.saint-petersburg');
    element.classList.add('changed-city');
    changeCity(cityId);
}

function msk() {
    cityId = 524894;    
    var element = document.querySelector('.changed-city');
    element.classList.remove('changed-city');
    var element = document.querySelector('.moscow');
    element.classList.add('changed-city');
    changeCity(cityId);
}

function skt() {
    cityId = 485239;    
    var element = document.querySelector('.changed-city');
    element.classList.remove('changed-city');
    var element = document.querySelector('.syktyvkar');
    element.classList.add('changed-city');
    changeCity(cityId);
}

function srk() {
    cityId = 498698;    
    var element = document.querySelector('.changed-city');
    element.classList.remove('changed-city');
    var element = document.querySelector('.saransk');
    element.classList.add('changed-city');
    changeCity(cityId);
}

function tgn() {   
    var element = document.querySelector('.changed-city');
    element.classList.remove('changed-city');
    var element = document.querySelector('.taganskaya');
    element.classList.add('changed-city');
    changeCity2();
}

function tet(){
    document.location.href = 'tetris/index.html';
}

function snk(){
    document.location.href = 'zmeika/index.html';
}

let tetris = document.querySelector('.tetris');
tetris.addEventListener('click', tet) ;

let zmeika = document.querySelector('.zmeika');
zmeika.addEventListener('click', snk) ;


var element = document.querySelector('.saint-petersburg');
element.addEventListener('click', spb);
var element = document.querySelector('.moscow');
element.addEventListener('click', msk);
var element = document.querySelector('.syktyvkar');
element.addEventListener('click', skt);
var element = document.querySelector('.saransk');
element.addEventListener('click', srk);
var element = document.querySelector('.taganskaya');
element.addEventListener('click', tgn);

function changeCity2() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=55.739610&lon=37.656117&appid=5a8b65c0e13440f5fe1a809787cf47d1`)
    .then(function(resp) { return resp.json() })
    .then(function(data){
        document.querySelector('.humidity').textContent = data.main.humidity;
        document.querySelector('.pressure').textContent = Math.round((data.main.pressure)/1.33);
        document.querySelector('.temp-today').innerHTML = (Math.round((data.main.temp - 273.15)*10))/10 + ' &deg;';
        document.querySelector('.feels-like').innerHTML = (Math.round((data.main.feels_like - 273.15)*10))/10 + ' &deg;';
        document.querySelector('.image-today').innerHTML = `<img class='image1' src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
    })
    .catch(function(){

    })
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=55.739610&lon=37.656117&appid=5a8b65c0e13440f5fe1a809787cf47d1`)
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            document.querySelector('.temp3').innerHTML = (Math.round((data.list[1].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image3').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[1].weather[0]['icon']}@2x.png'>`;
            let stroka = data.list[1].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data3').innerHTML = stroka;


            document.querySelector('.temp6').innerHTML = (Math.round((data.list[2].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image6').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[2].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[2].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data6').innerHTML = stroka;


            document.querySelector('.temp9').innerHTML = (Math.round((data.list[3].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image9').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[3].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[3].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data9').innerHTML = stroka;


            document.querySelector('.temp12').innerHTML = (Math.round((data.list[4].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image12').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[4].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[4].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data12').innerHTML = stroka;


            document.querySelector('.temp15').innerHTML = (Math.round((data.list[5].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image15').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[5].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[5].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data15').innerHTML = stroka;


            document.querySelector('.temp18').innerHTML = (Math.round((data.list[6].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image18').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[6].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[6].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data18').innerHTML = stroka;


            document.querySelector('.temp21').innerHTML = (Math.round((data.list[7].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image21').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[7].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[7].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data21').innerHTML = stroka;


            document.querySelector('.temp24').innerHTML = (Math.round((data.list[8].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image24').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[8].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[8].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data24').innerHTML = stroka;
        })
        .catch(function(){

        })
}

function changeCity(i) {
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${i}&appid=5a8b65c0e13440f5fe1a809787cf47d1`)
        .then(function(resp) { return resp.json() })
        .then(function(data){
            console.log(data);
            // document.querySelector('.city-name').textContent = data.name;
            document.querySelector('.humidity').textContent = data.main.humidity;
            document.querySelector('.pressure').textContent = Math.round((data.main.pressure)/1.33);
            document.querySelector('.temp-today').innerHTML = (Math.round((data.main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.feels-like').innerHTML = (Math.round((data.main.feels_like - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image-today').innerHTML = `<img class='image1' src='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;

        })
        .catch(function () {

        });

    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${i}&appid=784fec98a81f58833ae33b58af475b6e`)
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            console.log(data);
            document.querySelector('.temp3').innerHTML = (Math.round((data.list[1].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image3').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[1].weather[0]['icon']}@2x.png'>`;
            let stroka = data.list[1].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data3').innerHTML = stroka;


            document.querySelector('.temp6').innerHTML = (Math.round((data.list[2].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image6').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[2].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[2].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data6').innerHTML = stroka;


            document.querySelector('.temp9').innerHTML = (Math.round((data.list[3].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image9').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[3].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[3].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data9').innerHTML = stroka;


            document.querySelector('.temp12').innerHTML = (Math.round((data.list[4].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image12').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[4].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[4].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data12').innerHTML = stroka;


            document.querySelector('.temp15').innerHTML = (Math.round((data.list[5].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image15').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[5].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[5].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data15').innerHTML = stroka;


            document.querySelector('.temp18').innerHTML = (Math.round((data.list[6].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image18').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[6].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[6].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data18').innerHTML = stroka;


            document.querySelector('.temp21').innerHTML = (Math.round((data.list[7].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image21').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[7].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[7].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data21').innerHTML = stroka;


            document.querySelector('.temp24').innerHTML = (Math.round((data.list[8].main.temp - 273.15)*10))/10 + ' &deg;';
            document.querySelector('.image24').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.list[8].weather[0]['icon']}@2x.png'>`;
            stroka = data.list[8].dt_txt;
            stroka = stroka.substr(11,5);
            if (stroka[0] === '0'){
                stroka = stroka.substr(1,4);
            }
            document.querySelector('.data24').innerHTML = stroka;
        })
        .catch(function(){

        })
}

changeCity(cityId);

