const clearGrid = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.classList.remove("fill"));
}

const buildGrid = (num) => {
    const container = document.querySelector("#container");
    container.replaceChildren();
    const gridSize = num * num;
    const squareSize = Math.round((container.offsetWidth / num) * 100) / 100;

    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.setAttribute("tabindex", "0");
        container.appendChild(square);
    }
};

const toggleSettingsModal = () => {
    const settings = document.querySelector("#settings");
    settings.classList.toggle("show");
};

const saveSettings = (currentGridSize) => {
    const sizeInput = document.querySelector("#grid-size-input");
    let newGridSize = parseInt(sizeInput.value, 10);
    if (newGridSize !== currentGridSize && Number(newGridSize) && newGridSize > 0) {
        newGridSize = newGridSize <= 100 ? newGridSize : 100;
        buildGrid(newGridSize);
        currentGridSize = newGridSize;
    }

    toggleSettingsModal();
}

const init = () => {
    let currentGridSize = 32;
    const MAX_SQUARES = 100;
    const saveButton = document.querySelector("#save-btn");

    let isMouseDown = false;
    document.addEventListener("mousedown", (ev) => { 
        if (ev.button === 0) isMouseDown = true;
    });
    document.addEventListener("mouseup", () => isMouseDown = false );

    const header = document.querySelector("#header");
    header.addEventListener("click", (ev) => {
        const id = ev.target.id;
        if (id === "edit-btn") toggleSettingsModal();
        else if (id === "clear-btn") clearGrid();
    });

    saveButton.addEventListener("click", () => saveSettings(currentGridSize));

    buildGrid(currentGridSize);

    container.addEventListener("mousedown", (ev) => {
        if (ev.button === 0) ev.target.classList.toggle("fill")
    });
    container.addEventListener("mouseover", (ev) => {
        if (isMouseDown) ev.target.classList.add("fill");
    });
    container.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" || ev.key === " ") {
        ev.target.classList.toggle("fill");
    }
});
}

init();