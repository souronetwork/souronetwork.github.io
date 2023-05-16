const targetDate = new Date("May 19, 2023 22:00:00 GMT+6").getTime();
let timer = setInterval(function () {
    const today = new Date().getTime();
    let diff = targetDate - today;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
          <div class="days"> \
            <div class="numbers">${days}</div>days</div> \
          <div class="hours"> \
            <div class="numbers">${hours}</div>hours</div> \
          <div class="minutes"> \
            <div class="numbers">${minutes}</div>minutes</div> \
          <div class="seconds"> \
            <div class="numbers">${seconds}</div>seconds</div> \
          </div>
        `;

    if (diff < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = `
          <div class="days"> \
            <div class="numbers">0</div>days</div> \
          <div class="hours"> \
            <div class="numbers">0</div>hours</div> \
          <div class="minutes"> \
            <div class="numbers">0</div>minutes</div> \
          <div class="seconds"> \
            <div class="numbers">0</div>seconds</div> \
          </div>
        `;
    }
}, 1000);