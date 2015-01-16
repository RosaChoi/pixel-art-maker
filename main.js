var colors = {
  0: "#FFFFFF",
  1: "#FF0000",
  2: "#400000",
  3: "#800000",
  4: "#C00000",
  5: "#FF4040",
  6: "#FF8080",
  7: "#FFC0C0",
  8: "#FFFF00",
  9: "#404000",
  10: "#808000",
  11: "#C0C000",
  12: "#FFFF40",
  13: "#FFFF80",
  14: "#FFFFC0",
  15: "#00FF00",
  16: "#004000",
  17: "#008000",
  18: "#00C000",
  19: "#40SF40",
  20: "#80FF80",
  21: "#C0FFC0",
  22: "#00FFFF",
  23: "#004040",
  24: "#008080",
  25: "#00C0C0",
  26: "#40FFFF",
  27: "#80FFFF",
  28: "#C0FFFF",
  29: "#0000FF",
  30: "#000040",
  31: "#000080",
  32: "#0000C0",
  33: "#4040FF",
  34: "#8080FF",
  35: "#C0C0FF",
  36: "#FF00FF",
  37: "#800080",
  38: "#C000C0",
  39: "#FF40FF",
  40: "#FF80FF",
  41: "#FFC0FF",
};

var colorChoice = ""
var grid = document.getElementById('space');

function createTable (xAxis, yAxis) {
  var grid = document.getElementById('space');

  // createing table adn inserting into document
  tab = document.createElement('table');
  grid.appendChild(tab);

  tab.border = '2';

  for (var i = 0; i < xAxis; i++){
    // creating row and inserting into document
    var row = tab.insertRow(i);

    for(var j = 0; j < yAxis; j++){
      // creating cells and fill with data (numbers)
      var cell = row.insertCell(j);
      cell.style.backgroundColor = 'white';
      cell.style.color = 'white';
      cell.style.height = '30px';
      cell.style.width = '30px';
      paint(cell);
    };
  };

}

function paint(cell) {
  cell.addEventListener('click', function() {
    this.style.backgroundColor = colorChoice;
  });
}

function createColorMenu () {
  var grid = document.getElementById('color_menu');

  // createing table adn inserting into document
  tab = document.createElement('table');
  grid.appendChild(tab);

  tab.border = '2';

  for (var i = 0; i < 1; i++){
    // creating row and inserting into document
    var row = tab.insertRow(i);

    for(var j = 0; j < 40; j++){
      // creating cells and fill with data (numbers)
      var cell = row.insertCell(j);
      cell.style.backgroundColor = 'white';
      cell.style.color = 'white';
      cell.style.height = '30px';
      cell.style.width = '30px';
      createPallet(cell);

    };
  };
}

function createPallet(cell) {
  var menuNodes = document.querySelectorAll('#color_menu td');

  for (var i = 0; i < menuNodes.length; i++) {
    menuNodes[i].style.backgroundColor = colors[i];
    menuNodes[i].addEventListener('click', function(){
      colorChoice = this.style.backgroundColor;
    });
  }
}

function reset() {
  var resetButton = document.getElementsByClassName('btn')[0];
  resetButton.onclick = function() {
    grid.innerHTML = "";
    createTable(20, 40);
  }
}


function init () {
  createTable(20, 40);
  createColorMenu ();
  reset();
}

window.onload = init;
