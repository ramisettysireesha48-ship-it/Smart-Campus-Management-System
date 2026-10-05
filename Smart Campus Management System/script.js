// Student data

let students = [];


// Add Student

function addStudent() {

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("studentRoll").value;

    if (name === "" || roll === "") {
        alert("Please enter student name and roll number.");
        return;
    }

    let student = {
        name: name,
        roll: roll
    };

    students.push(student);

    displayStudents();

    document.getElementById("studentName").value = "";
    document.getElementById("studentRoll").value = "";
}


// Display Students

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student, index) {

        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>
                    <button class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                    </button>
                </td>
            </tr>
        `;

    });

    document.getElementById("studentCount").innerText = students.length;
}


// Delete Student

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


// Attendance

function markAttendance() {

    let present =
        document.getElementById("presentCount");

    let absent =
        document.getElementById("absentCount");

    let presentValue = Number(present.innerText);
    let absentValue = Number(absent.innerText);

    present.innerText = presentValue + 1;

    if (absentValue > 0) {
        absent.innerText = absentValue - 1;
    }

    alert("Attendance marked successfully!");
}


// Event Registration

function registerEvent(eventName) {

    alert(
        "You have successfully registered for " +
        eventName
    );
}


// Get Started Button

function showMessage() {

    alert(
        "Welcome to Smart Campus Management System!"
    );

}