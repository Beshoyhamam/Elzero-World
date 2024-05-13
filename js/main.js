let ourSkills = document.querySelector(".our-skills");
let allSkills = document.querySelectorAll(".our-skills .the-progress span");

window.onscroll = () => {
    if (window.scrollY >= ourSkills.offsetTop - 300) {

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });

        
    } 
}

// The End Of The Year Data To Countdown To
let countDownData = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownData - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);


    document.querySelector(".count-days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".count-hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".count-minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".count-seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }

}, 1000)

let section = document.querySelector(".state");
let stateNum = document.querySelectorAll(".box .number");
let started = false;


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 10 / goal)
}

stateNum.forEach((num) => startCount(num))