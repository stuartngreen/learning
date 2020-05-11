// Generates HTML output in the following format:
// Student ID: xxxx
// Student name: xxxxx
// Total marks: xx
// Overall percentage: xx.xx
// Mark 1: x/x
// Mark 2: x/x
// Mark 3: x/x
// The student has [failed/passed/passed with distinction].

let studentDetails = {};

// Get all the values from the user interface
function getUserInput() {
    return new Object({
        studentId: document.getElementById('studentId').value,
        studentName: document.getElementById('studentName').value,
        marks: [
            parseInt(document.getElementById('mark1').value),
            parseInt(document.getElementById('mark2').value),
            parseInt(document.getElementById('mark3').value)
        ],
        totals: [
            parseInt(document.getElementById('total1').value),
            parseInt(document.getElementById('total2').value),
            parseInt(document.getElementById('total3').value)
        ]
    });
}

// Sum reducer for arrays
function sum(acc, currentVal) {
    return acc += currentVal;
}

// Get sum of student marks
function getTotalMarks() {
    return studentDetails.marks.reduce(sum);
}

// Get overall percentage
function calculatePercentage(marks, totals) {
    return marks / totals.reduce(sum) * 100;
}

// Generate the HTML for appending to DOM
function generateHTML(marks, percentage) {
    let html = document.createElement('div');
    let resultSpan = document.createElement('span');
    let resultAttr = document.createAttribute('class');

    html.appendChild(document.createTextNode(`Student ID: ${ studentDetails.studentId }`));
    html.appendChild(document.createElement('br'));
    html.appendChild(document.createTextNode(`Student name: ${ studentDetails.studentName }`));
    html.appendChild(document.createElement('br'));
    html.appendChild(document.createTextNode(`Total marks: ${ marks }`));
    html.appendChild(document.createElement('br'));
    html.appendChild(document.createTextNode(`Overall percentage: ${ percentage.toFixed(2) }`));
    html.appendChild(document.createElement('br'));
    html.appendChild(document.createElement('br'));

    for (let i in studentDetails.marks) {
        html.appendChild(document.createTextNode(`Mark ${ parseInt(i) + 1 }: ${ studentDetails.marks[i]}/${ studentDetails.totals[i]}`));
        html.appendChild(document.createElement('br'));
    }
    
    html.appendChild(document.createElement('br'));

    if (percentage < 50) {
        resultAttr.value = 'failed';
        resultSpan.appendChild(document.createTextNode('The student has failed.'));
    }
    else if (percentage >= 50 && percentage < 80) {
        resultAttr.value = 'passed';
        resultSpan.appendChild(document.createTextNode('The student has passed.'));
    }
    else {
        resultAttr.value = 'distinction';
        resultSpan.appendChild(document.createTextNode('The student has passed with distinction.'));
    }
    resultSpan.setAttributeNode(resultAttr);

    html.appendChild(resultSpan);

    return html;
}

// Call this function from the UI to get the results
function getResults() {
    studentDetails = getUserInput();
    let marks = getTotalMarks();
    let overallPercentage = calculatePercentage(marks, studentDetails.totals);
    let resultsDiv = document.getElementById('resultsBlock');

    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(generateHTML(marks, overallPercentage));
}
