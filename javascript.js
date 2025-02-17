
let numGridWidth = 100;

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
        objDiv.style.backgroundColor = "#4F5151";
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
objButtonShake.addEventListener("click", () => {
  objDivGrid.remove()
  strInputValue = objInput.value;
  objInput.value = "";

  if (strInputValue) {
    let numNewGridWidth = Number(strInputValue)
    if (numNewGridWidth >= 10 && numNewGridWidth <= 150) {
      numGridWidth = numNewGridWidth
    }
  }
  objDivGrid = createGrid(numGridWidth)

})

/////////////////////////////////////////////////////////////////

let objDivGrid = createGrid(100);







