document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=918f9e04ba00dea705fdb93b318ffbc0&units=metric&lang=pt_br`;
    let results = await fetch(url);
    let json = await results.json();

    console.log(json)

    if(input !== ''){
        clearInfo();
        showWarning('Carregando...');     

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                tempDescription: json.weather[0].description,
                windSpeed: json.wind.speed,
                windAngle: json.wind
            })
            
        }else {
            clearInfo();
            showWarning('Não encontramos esta localização')
        }
    } else {
        clearInfo();
    }
});

function showInfo(json){
    showWarning('');
    
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.descricao').innerHTML = `${json.tempDescription}`

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

    document.querySelector('.resultado').style.display = 'block';
}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}





