function updateClock() {

    var now = new Date();


    var hours = now.getHours();

    var minutes = now.getMinutes();

    var seconds = now.getSeconds();


    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");


    var time =
        hours + ":" + minutes + ":" + seconds;


    document.getElementById("clock").textContent =
        time;


    document.getElementById("date").textContent =
        now.toDateString();

}


updateClock();

setInterval(updateClock, 1000);