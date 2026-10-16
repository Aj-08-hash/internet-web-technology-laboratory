function showServerInfo() {

    var browser = navigator.userAgent;

    var platform = navigator.platform;

    var language = navigator.language;

    var protocol = window.location.protocol;

    var host = window.location.hostname;

    var html = "";

    html += "<div class='info'>";
    html += "<b>Server Name:</b> ";
    html += host || "Localhost";
    html += "</div>";

    html += "<div class='info'>";
    html += "<b>Server Software:</b> ";
    html += "Browser-based Web Environment";
    html += "</div>";

    html += "<div class='info'>";
    html += "<b>Protocol:</b> ";
    html += protocol;
    html += "</div>";

    html += "<div class='info'>";
    html += "<b>Browser:</b> ";
    html += browser;
    html += "</div>";

    html += "<div class='info'>";
    html += "<b>Platform:</b> ";
    html += platform;
    html += "</div>";

    html += "<div class='info'>";
    html += "<b>Language:</b> ";
    html += language;
    html += "</div>";

    document.getElementById("serverInfo").innerHTML = html;

}


function executeCommand() {

    var command =
        document.getElementById("command").value.trim();

    var output =
        document.getElementById("commandOutput");

    if (command === "") {

        output.textContent =
            "Please enter a command.";

        return;

    }


    if (command === "date") {

        output.textContent =
            new Date().toString();

    }

    else if (command === "pwd") {

        output.textContent =
            window.location.href;

    }

    else if (command === "whoami") {

        output.textContent =
            "Ashish Jaiswal";

    }

    else if (command === "hostname") {

        output.textContent =
            window.location.hostname ||
            "localhost";

    }

    else if (command.startsWith("echo ")) {

        output.textContent =
            command.substring(5);

    }

    else {

        output.textContent =
            "Command not supported in browser.\n" +
            "Try: date, pwd, whoami, hostname, echo";

    }

}