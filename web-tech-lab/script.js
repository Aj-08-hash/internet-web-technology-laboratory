window.onload = function () {

    function updateDateTime() {

        var now = new Date();

        var date = now.toDateString();

        var time = now.toLocaleTimeString();

        document.getElementById("datetime").innerHTML =
            "📅 " + date + " | 🕒 " + time;
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);

};