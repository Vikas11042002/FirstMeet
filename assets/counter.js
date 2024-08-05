// Set start and target date
const TARGETDATE = new Date('15 Aug 2024').getTime();
const STARTDATE = new Date('05 Aug 2024').getTime();

// Update countdown every second
var countdown = setInterval(() => {
    
    // Get current date
    var now = new Date().getTime();

    // Get time difference
    var difference = TARGETDATE - now;

    console.log(difference < 0)

    // Get progress percentage
    var progress = (now - STARTDATE) / (TARGETDATE - STARTDATE) * 100;

    // Time calculations
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display result
    document.getElementById('days').innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    
    // Display progress bar
    progress = Math.min(100, progress);
    document.documentElement.style.setProperty('--width-max', `${progress}%`);
    document.getElementById('progress-percentage').innerHTML = `${progress.toFixed(1)}%`;

    // Countdown finished
    if (difference < 0) {
        document.getElementById('countdown').style.display = 'none';
        clearInterval(countdown);
    }

}, 1_000);
