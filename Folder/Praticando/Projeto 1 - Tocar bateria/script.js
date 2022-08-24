document.body.addEventListener('keyup', event => {    
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function meuClick(event){
    playSound(event.target.dataset.key)
}

function playSound(x){
    let audioElement = document.querySelector(`#s_${x}`);
    let keyElement = document.querySelector(`div[data-key = "${x}"]`);
    
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}