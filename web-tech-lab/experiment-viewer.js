const experiments = {

    1: {
        title: "Experiment 01: XHTML Basics & External CSS",
        html: "exp1/experiment1.html",
        css: "exp1/style.css",
        js: null
    },

    2: {
        title: "Experiment 02: JavaScript Basics",
        html: "exp2/experiment2.html",
        css: null,
        js: null
    },

    3: {
        title: "Experiment 03: Functions & String Processing",
        html: "exp3/experiment3.html",
        css: "exp3/exp3.css",
        js: "exp3/exp3.js"
    },

    4: {
        title: "Experiment 04: Form Validation",
        html: "exp4/experiment4.html",
        css:"exp4/exp4.css",
        js: "exp4/exp4.js"
    },

    5: {
        title: "Experiment 05: Dynamic Paragraph Layering",
        html: "exp5/experiment5.html",
        css:"exp5/exp5.css",
        js: "exp5/exp5.js"
    },

    6: {
        title: "Experiment 06: XML & CSS Styling",
        html: "exp6/experiment6.xml",
        css: "exp6/style.css",
        js: null
    },

    7: {
        title: "experiment 07: Server information ",
        html:"exp7/experiments7.html",
        css:"exp7/exp7.css",
        js:"exp7/exp7.js"
    },
    8: {
        title: "experiment 08: Random greeting generator ",
        html:"exp8/experiment8.html",
        css:"exp8/exp8.css",
        js:"exp8/exp8.js"
    },
    9:{
        title: "experiment 09: Digital Clock ",
        html:"exp9/experiment9.html",
        css:"exp9/exp9.css",
        js:"exp9/exp9.js"
    },
    10:{
        title: "experiment 10: student name and age Database ",
        html:"exp10/experiment10.html",
        css:"exp10/exp10.css",
        js:"exp10/exp10.js"
    }

};


const params =
    new URLSearchParams(window.location.search);

const experimentNumber =
    params.get("exp") || "1";

const experiment =
    experiments[experimentNumber];


const title =
    document.getElementById("experiment-title");

const sourceCode =
    document.getElementById("source-code");

const sourceElement =
    sourceCode.querySelector("code");

const output =
    document.getElementById("experiment-output");

const runButton =
    document.getElementById("run-button");

const resetButton =
    document.getElementById("reset-button");

const backButton =
    document.getElementById("back-button");


/*    LOAD TITLE  */

if (experiment) {

    title.textContent =
        experiment.title;

} else {

    title.textContent =
        "Experiment Not Found";

}


/*
   LOAD SOURCE  */

async function loadSource(file) {

    if (!file) {

        sourceElement.textContent =
            "No source file available.";

        return;
    }


    try {

        const response =
            await fetch(file);


        if (!response.ok) {

            throw new Error(
                "Unable to load source file."
            );

        }


        const code =
            await response.text();


        sourceElement.textContent =
            code;

    }

    catch (error) {

        sourceElement.textContent =
            "Error loading source code:\n\n" +
            error.message;

    }

}


/* 
   TABS    */

const tabs =
    document.querySelectorAll(".file-tab");


tabs.forEach(function(tab) {

    tab.addEventListener("click", async function() {

        tabs.forEach(function(item) {

            item.classList.remove("active");

        });


        tab.classList.add("active");


        const fileType =
            tab.dataset.file;


        let file = null;


        if (fileType === "html") {

            file = experiment.html;

        }

        else if (fileType === "css") {

            file = experiment.css;

        }

        else if (fileType === "js") {

            file = experiment.js;

        }


        await loadSource(file);

    });

});


/* 
   TAB VISIBILITY    */

function updateTabs() {

    const cssTab =
        document.getElementById("css-tab");

    const jsTab =
        document.getElementById("js-tab");


    cssTab.style.display =
        experiment.css ? "block" : "none";


    jsTab.style.display =
        experiment.js ? "block" : "none";

}


updateTabs();


/*  INITIAL SOURCE    */

loadSource(experiment.html);


/*   RUN */

runButton.addEventListener("click", function() {

    output.src =
        experiment.html;

});


/* 
   RESET     */

resetButton.addEventListener("click", function() {

    output.src = "";

});


/* BACK     */

backButton.addEventListener("click", function() {

    window.location.href =
        "index.html";

});