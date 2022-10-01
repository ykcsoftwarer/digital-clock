const hourEl = document.querySelector("#hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.querySelector("#seconds");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
}



setInterval(() => {
    updateClock()
}, 1000)


updateClock();