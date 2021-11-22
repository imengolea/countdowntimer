
function countDown(){
    //days
    const currentDay = new Date();
    const newYear = new Date('january 1, 2022 00:00:00');
    const daysLeft = Math.abs(currentDay-newYear);
    const days = Math.floor(daysLeft/(1000 * 3600 * 24));
   document.getElementById('days').innerHTML = days;

    //hours
    const hours = Math.floor(daysLeft/(1000 * 3600));
    document.getElementById('hours').innerHTML = hours;

const min = Math.floor(hours * 60);
document.getElementById('min').innerHTML = min;

//seconds
    const sec = Math.floor(daysLeft/(1000));
    document.getElementById('sec').innerHTML = sec;
}
countDown();

setInterval(countDown, 1000);