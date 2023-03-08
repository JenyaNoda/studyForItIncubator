let width = 25;
let height = 25;

// Code here:
let result = "";

result += "<table>";
for (let i = 0; i < width; i++) {
    result += "<tr>";
    for (let j = 0; j < height; j++) {
        result += "<td></td>";
    }
    result += "</tr>";
}
result += "</table>";
let grid = document.getElementById("grid");
grid.innerHTML = result;

