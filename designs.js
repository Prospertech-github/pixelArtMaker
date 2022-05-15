// Select color input
const color = document.getElementById("colorPicker");

//Select DOM Elements
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");
const sizeInput = document.getElementById("sizePicker");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const startDrawing = document.querySelector(".random-color");

let isErase = false;
let hoverEvent = false;

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", function (event) {
  event.preventDefault()
  makeGrid(gridWidth.value, gridHeight.value);

})

function draw(e) {
  //Checks if hoverevent is true of false
  if (hoverEvent) {
    //Checks isErase value and starts drawing
    if (isErase) {
      e.target.style.backgroundColor = "#fff";
    } else {
      e.target.style.backgroundColor = color.value
    }
  } else {
    //alerts user to click the button to start drawing
    alert('Please click the Start drawing button')
  }
}

table.addEventListener('mouseover', draw)

clear.addEventListener('click', function () {
  table.innerHTML = '';
})

eraser.addEventListener('click', function(){
  //Resets the isErase value
  isErase = true;
})

startDrawing.addEventListener('click', function () {
  //Resets the isErase and hoverEvent value to enable drawing  
  isErase = false;
  hoverEvent = true;
})

function makeGrid(gridWidth, gridHeight) {
  // Resets table DOM
  table.innerHTML = "";
  
  //Checks if gridHeight or gridWidth is 1
  if (gridHeight > 1 || gridWidth > 1) {
    
    //Sets new table grids
    for (w = 0; w < gridHeight; w++){
      var rows = document.createElement('tr')
      table.appendChild(rows);
      
      //Sets the cells for the table
      for (h = 0; h < gridWidth; h++){
        var columns = document.createElement('td')
        rows.appendChild(columns)
      }
    }
  } else {
    //Alerts user to put a number greater than 1
    alert('Please input a number greater than 1 in the Grid Height and Grid Width inputs')
  }

}
