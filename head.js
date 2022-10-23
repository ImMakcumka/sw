const watch = document.querySelector('#watch');
let ms = 0;
let timer;

const startW = () => {
    watch.classList.remove('pause')
    clearInterval(timer);
    timer = setInterval(() => {
        ms += 10;
        let dateTimer = new Date(ms);
        watch.innerHTML = 
            ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0'+dateTimer.getUTCMilliseconds()).slice(-3, -1)
    }, 10)};


const pauseW = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

const resetW = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    ms = 0;
    watch.innerHTML = '00:00:00:00';
}

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.id === 'start') startW();
    if (element.id === 'pause') pauseW();
    if (element.id === 'reset') resetW();
});