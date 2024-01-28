const dateDisplay = document.getElementById("date");
const timeDisplay = document.getElementById("time");

const oneSecond = 1000;

function updateDisplay() {
    const time = new Date();

    const d = time.toLocaleDateString('en-us',
        { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    let t = time.toLocaleString();
    t = t.substring(t.lastIndexOf(",")+1);

    dateDisplay.innerHTML = d;
    timeDisplay.innerHTML = t;

    setTimeout(updateDisplay, oneSecond);
}

setTimeout(updateDisplay, oneSecond);