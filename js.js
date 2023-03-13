function drawGrid() {
    let width = Math.floor((window.innerWidth - 16 - 1) / 22);
    let height = Math.floor((window.innerHeight - 16 - 1) / 22);

    width = width > 1 ? width : 1;
    height = height > 1 ? height : 1;

    // Code here:
    let result = "";

    result += "<table>";
    for (let i = 0; i < height; i++) {
        result += "<tr>";
        for (let j = 0; j < width; j++) {
            result += "<td></td>";
        }
        result += "</tr>";
    }
    result += "</table>";
    let grid = document.getElementById("grid");
    grid.innerHTML = result;
}

function draw2() {
    let startField = [
        [1, 1, 1, 0, 0], 
        [1, 0, 0, 0, 0], 
        [1, 1, 1, 0, 0], 
        [0, 0, 1, 0, 0], 
        [1, 1, 1, 0, 0] 
    ];
    
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
                    output.innerHTML = '[' + startField  + ']'
                   
                    
                    
                }
            }
        }
        showArrayField();
    }
    
    function showArrayField() {
        const viewer = document.getElementById("arrayViewer");
        
        let result = "";
        for (let i = 0; i < arrayField.length; i++) {
            for (let j = 0; j < arrayField.length; j++) {
                result += arrayField[i][j] + " ";
            }
            result += '\n';
            
        }
        
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
    
    /*
    for (let i = 0; i < startField.length; i++) {
        for (let j = 0; j < startField[i].length; j++) {
            if (startField[i][j]) {
                document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].click();
            }
        }
    }
    */  
   
}

window.addEventListener("load", () => {
    drawGrid();
    draw2();
    
});

window.addEventListener("resize", () => {
    drawGrid();
});
