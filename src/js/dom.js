import Grid from "./components/Grid";
import Cell from "./components/Cell";

const header = document.querySelector("#header");
const gridContainer =document.querySelector("#container");
const squares = document.querySelectorAll(".cell");
const settings = document.querySelector(".settings");
const sizeInput = document.querySelector("#grid-size-input");
const saveButton = document.querySelector("#save-btn");

const clearGrid = () => {
    squares.forEach((square) => {
        square.classList.remove("fill");
    })
}

const buildGrid = (rowCellCount = 32) => {
    gridContainer.replaceChildren();

    const gridContainerWidth = gridContainer.offsetWidth;

    const grid = Grid(rowCellCount);
    const cell = Cell();
    const cells = grid.cellCount;
    const cellSize = cell.size(gridContainerWidth, rowCellCount);

    for (let i = 0; i < cells; i++) {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.style.flexBasis = `${cellSize}px`;
        cellButton.style.height = `${cellSize}px`;
        cellButton.setAttribute("tabindex", 0);
        gridContainer.appendChild(cellButton);
    }
}

const toggleSettingsModal = () => {
    settings.classList.toggle("show");
};

const saveSettings = () => {
    let newGridSize = parseInt(sizeInput.value, 10);
    if (Number(newGridSize) && newGridSize > 1) {
        newGridSize = newGridSize <= 100 ? newGridSize : 100;
        buildGrid(newGridSize);
    }
    toggleSettingsModal();
}

const dom = {
    header,
    saveButton,
};

export {
    dom,
    clearGrid,
    buildGrid,
    toggleSettingsModal,
    saveSettings,
}