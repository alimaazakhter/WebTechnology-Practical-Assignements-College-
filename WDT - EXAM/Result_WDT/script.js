let data = JSON.parse(localStorage.getItem("data")) || [];

function calculateResult(){

    let roll = document.getElementById("roll").value;

    let wdt = Number(document.getElementById("wdt").value);
    let py  = Number(document.getElementById("python").value);
    let java = Number(document.getElementById("java").value);

    let totalMarks = wdt + py + java;
    let percentage = totalMarks / 3;

    let result;
    if(percentage >= 40)
        result = "Pass";
    else
        result = "Fail";

    let grade;
    if(percentage >= 90)
        grade = "A+";
    else if(percentage >= 80)
        grade = "A";
    else if(percentage >= 70)
        grade = "B";
    else if(percentage >= 60)
        grade = "C";
    else
        grade = "F";

    let student = {
        roll: roll,
        wdt: wdt,
        py: py,
        java: java,
        total: totalMarks,
        per: percentage,
        grade: grade,
        result: result
    };

    data.push(student);
    localStorage.setItem("data", JSON.stringify(data));

    showResult();
}

function showResult(){

    let rows = "";

    for(let i=0; i<data.length; i++){
        rows +=
        "<tr>" +
        "<td>" + data[i].roll + "</td>" +
        "<td>" + data[i].wdt + "</td>" +
        "<td>" + data[i].py + "</td>" +
        "<td>" + data[i].java + "</td>" +
        "<td>" + data[i].total + "</td>" +
        "<td>" + data[i].per.toFixed(2) + "</td>" +
        "<td>" + data[i].grade + "</td>" +
        "<td>" + data[i].result + "</td>" +
        "<td><button onclick='deleteResult("+i+")'>Delete</button></td>" +
        "</tr>";
    }

    document.getElementById("tableBody").innerHTML = rows;
}

function deleteResult(index){
    data.splice(index,1);
    localStorage.setItem("data", JSON.stringify(data));
    showResult();
}

function clearAll(){
    localStorage.clear();
    data = [];
    showResult();
}

function printPage(){
    window.print();
}

showResult();   // page load par old data show