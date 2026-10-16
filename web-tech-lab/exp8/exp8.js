function generateGreeting() {

    var name =
        document.getElementById("username").value.trim();

    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    var greetings = [

        "Welcome",

        "Good Morning",

        "Have a Nice Day",

        "Best Wishes"

    ];


    var index =
        Math.floor(Math.random() * greetings.length);


    var message =
        greetings[index] + ", " + name + "!";


    document.getElementById("result").textContent =
        message;


    alert(message);

}