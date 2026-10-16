function getStudents() {

    var data =
        localStorage.getItem("students");

    if (data === null) {

        return [];

    }

    return JSON.parse(data);

}


function insertData() {

    var name =
        document.getElementById("name").value.trim();

    var age =
        document.getElementById("age").value;


    if (name === "" || age === "") {

        alert("Please enter name and age.");

        return;

    }


    var students = getStudents();


    var student = {

        name: name,

        age: age

    };


    students.push(student);


    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    document.getElementById("name").value = "";

    document.getElementById("age").value = "";


    displayData();

    alert("Student data inserted successfully.");

}


function displayData() {

    var students = getStudents();

    var table =
        document.getElementById("studentTable");


    table.innerHTML = "";


    for (var i = 0; i < students.length; i++) {

        var row =
            document.createElement("tr");


        row.innerHTML =

            "<td>" + (i + 1) + "</td>" +

            "<td>" + students[i].name + "</td>" +

            "<td>" + students[i].age + "</td>";


        table.appendChild(row);

    }

}


function clearData() {

    localStorage.removeItem("students");

    displayData();

    alert("Table cleared.");

}


displayData();