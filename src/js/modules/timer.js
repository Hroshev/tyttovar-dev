document.addEventListener("DOMContentLoaded", () => {
    const timers = document.querySelectorAll('.timer');
    timers.forEach(startTimer);

    const timeBlocks = document.querySelectorAll(".timer-block");
    if (timeBlocks.length > 0) {
        updateTimers();
        setInterval(updateTimers, 1000);
    }
});

function startTimer(timer) {
    const hoursEl = timer.querySelector('.hours .number');
    const minEl = timer.querySelector('.minutes .number');
    const secEl = timer.querySelector('.seconds .number');

    const circleMove = timer.querySelector('.move');
    if (circleMove) {
        const circleTotalLength = circleMove.getTotalLength();

        function updateCircle() {
            const now = new Date();
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
            const distance = endOfDay - now;

            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            hoursEl.textContent = hours.toString().padStart(2, "0");
            minEl.textContent = minutes.toString().padStart(2, "0");
            secEl.textContent = seconds.toString().padStart(2, "0");

            const hoursPercentage = (hours / 24) * 100;
            const minutesPercentage = (minutes / 60) * 100;
            const secondsPercentage = (seconds / 60) * 100;

            circleMove.style.strokeDashoffset = circleTotalLength - (circleTotalLength * hoursPercentage) / 100;
            timer.querySelector('.minutes .move').style.strokeDashoffset =
                circleTotalLength - (circleTotalLength * minutesPercentage) / 100;
            timer.querySelector('.seconds .move').style.strokeDashoffset =
                circleTotalLength - (circleTotalLength * secondsPercentage) / 100;

            requestAnimationFrame(updateCircle);
        }

        updateCircle();
    }
}

function updateTimers() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const timeRemaining = endOfDay - now;

    const timeBlocks = document.querySelectorAll(".timer-block");
    timeBlocks.forEach(block => {
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        block.querySelector(".hours").textContent = hours.toString().padStart(2, "0");
        block.querySelector(".minutes").textContent = minutes.toString().padStart(2, "0");
        block.querySelector(".seconds").textContent = seconds.toString().padStart(2, "0");
    });
}