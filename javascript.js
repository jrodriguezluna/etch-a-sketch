
let numGridWidth = 75;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomHexColor() {
  
  let randomHex = ""
  for (let i = 0; i < 6; i++) {
    let numArbitrary = getRandomArbitrary(0, 15)
    randomHex += numArbitrary.toString(16)
  }
  return randomHex
}

function createGrid(gridWidth) {
  numPreviousGridWidth = gridWidth
  let gridHeight = Math.round(gridWidth * 0.8)
  const objDivBorder = document.querySelector(".border");
  const objDivGrid = document.createElement("div");
  objDivGrid.setAttribute("class", "border__grid");
  
  for (let i = 0; i < gridHeight; ++i) {
    const objDivRow = document.createElement("div");
    objDivRow.setAttribute("class", "grid__row")
    
    for (let i = 0; i < gridWidth; ++i) {
      const objDiv= document.createElement("div");
      objDiv.setAttribute("class", "row__element")
      objDiv.addEventListener("mouseover", () => {
        if (objCheckboxRandom.checked) {
          objDiv.style.backgroundColor = `#${getRandomHexColor()}`;
        }
        else {
          objDiv.style.backgroundColor = "#4F5151";
        }
        
        if (objCheckboxGradient.checked) {
          let newGradient = Number(objDiv.style.opacity) + 0.1;
          objDiv.style.opacity = newGradient;
        }
      })
      objDivRow.appendChild(objDiv);
    }
    objDivGrid.appendChild(objDivRow);
  }
  objDivBorder.appendChild(objDivGrid)
  return objDivGrid;
}

const objButtonShake = document.querySelector("button")
const objInput = document.querySelector("input")
const objCheckboxRandom = document.querySelector(".randomCheckbox")
const objCheckboxGradient = document.querySelector(".gradientCheckbox")
objButtonShake.addEventListener("click", () => {
  objDivGrid.remove()
  strInputValue = objInput.value;
  objInput.value = "";

  if (strInputValue) {
    let numNewGridWidth = Number(strInputValue)
    if (numNewGridWidth >= 10 && numNewGridWidth <= 100) {
      numGridWidth = numNewGridWidth
    }
  }
  objDivGrid = createGrid(numGridWidth)

})

/////////////////////////////////////////////////////////////////

let objDivGrid = createGrid(numGridWidth);







