let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

function fixZero(time){
    return time < 10 ? `0${time}` : time;
    
    // if(time < 10){
    //     return "0" + time;
    // } else {
    //     return time;
    // }
}

//Funcionalidade acrescentada

let nameDay = [
    "Domingo", 
    "Segunda-feira", 
    "Terça-feira", 
    "Quarta-feira", 
    "Quinta-feira", 
    "Sexta-feira", 
    "Sábado"
]

let nameMonth = [
    "janeiro",
    "fevereiro",
    "março",
    "abriu",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
]

let now = new Date();
let day = now.getDate();
let year = now.getFullYear();
let dayWeek = nameDay[now.getDay()];
let monthYear = nameMonth[now.getMonth()];

let dayElement = document.querySelector('.calendario')

dayElement.innerHTML = `${dayWeek}, ${day} de ${monthYear} de ${year}.`;





