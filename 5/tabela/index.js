var students = [
    {
        index: "201/2014",
        firstName: "Miloš",
        lastName: "Perić",
        dob: new Date(1995, 0, 20),
        birthplace: "Beograd",
        dateOfEnrollment: new Date(2014, 6, 6)
    },
    {
        index: "202/2014",
        firstName: "Marijana",
        lastName: "Šavković",
        dob: new Date(1995, 2, 11),
        birthplace: "Kragujevac",
        dateOfEnrollment: new Date(2014, 6, 3)
    },
    {
        index: "203/2013",
        firstName: "Sanja",
        lastName: "Terzić",
        dob: new Date(1994, 10, 9),
        birthplace: "Novi Sad",
        dateOfEnrollment: new Date(2013, 6, 4)
    }
];

function toFullName(students){
    for(var i in students){
        students[i].fullName = `${students[i].firstName} ${students[i].lastName}`;
        delete students[i].firstName;
        delete students[i].lastName;
    }
}

function generateHTML(students){
    var table = "<table class=\"\">";

    table += "<tr>"
    for(let i in students[0]){
        table += "<td>";
        table += i.toUpperCase();
        table += "</td>";
    }
    table += "</tr>"

    for(let i in students){
        table += "<tr>";
        for(let j in students[i]){
            table += "<td>"
            if(j == "dob") table += formatDate(students[i][j]);
            else table += students[i][j];
            table += "</td>"
        }
        table += "</tr>"

    }
    table += "</table>";
    return table;
}

function formatDate(date){
    const months = [
        "Januar",
        "Februar",
        "Mart",
        "April",
        "Jun",
        "Jul",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar"
    ]
    return typeof date == undefined ? 'Nije Poznato' : `${date.getDate()}. ${months[date.getMonth()]} ${date.getYear()}.`
}

toFullName(students);
document.getElementById("table").innerHTML = generateHTML(students);
console.log(students);