const setup = () => {
    document.getElementById("btnGo").addEventListener("click", generateTable);
}
const generateTable = () => {
    var number = document.getElementById("nummer").value;
    var currentTime = new Date().toLocaleString();
    var table = "<table><thead><tr><th colspan='1'>Tafel van " + number + " aangemaakt op: "+ currentTime + "</th></tr></thead><tbody>";
    for (var i = 1; i <= 10; i++) {
        table += "<tr><td>" + number + " x " + i + " = " + (number * i) + "</td></tr>";
    }
    table += "</tbody></table>";


    var tableContainer = document.getElementById('tableContainer');
    var newTable = document.createElement('div');
    newTable.innerHTML = table;
    tableContainer.appendChild(newTable);
}
window.addEventListener("load", setup);