const sechand = document.querySelector('.sec-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sechand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minutesDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minhand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourhand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();