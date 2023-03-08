let startField = 
[[0, 1, 1, 0, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[0, 0, 1, 0, 0],
[1, 1, 0, 0, 0]];

let arrayField = [];

function arrayFieldObserver() {
    let trElements = document.getElementsByTagName("tr");
    for (let i = 0; i < trElements.length; i++) {
        let tdElements = trElements[i].getElementsByTagName("td");
        arrayField[i] = [];
        for (let j = 0; j < tdElements.length; j++) {
            if (tdElements[j].style.backgroundColor == ''){
                arrayField[i][j] = 0;
            } else {
                arrayField[i][j] = 1;
            }
        }
    }
    showArrayField();
}

function showArrayField() {
    const viewer = document.getElementById("arrayViewer");
    
    let result = [];
    for (let i = 0; i < arrayField.length; i++) {
        result.push('[' + arrayField[i].join(", ") + ']');
    }

    result = '[' + result.join(",\n") + ']';

    viewer.innerHTML = result;
}

function buttonColor() {
    if (this.style.backgroundColor == "") {
        this.style.backgroundColor="#8382cf";
    } else {
        this.style.backgroundColor="";
    }

    arrayFieldObserver();
}

const tdElements = document.getElementsByTagName("td");
  
for (let i = 0; i < tdElements.length;i++) {
    tdElements[i].onclick = buttonColor;
}

// her
// startField
for (let i = 0; i < startField.length; i++) {
    for (let j = 0; j < startField[i].length; j++) {
        if (startField[i][j]) {
            document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].click();
        }
    }
}
