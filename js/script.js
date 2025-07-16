const clearSquare = (square) => {
    square.classList.remove("hover");
}

const clearGrid = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        clearSquare(square);
    });
}

const fillSquare = (square) => {
    square.classList.add("hover");
}

const buildGrid = (num) => {
    const container = document.querySelector("#container");
    container.replaceChildren();
    const gridSize = num * num;
    const width = container.offsetWidth;
    const flexBasis = Math.round((width / num) * 100) / 100;
    const height = Math.round((width / num) * 100) / 100;

    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.flexBasis = `${flexBasis.toString()}px`;
        square.style.height = `${height.toString()}px`;

        container.appendChild(square);
    }
};

const getGridSize = () => {
    let numberOfSquares = prompt("Enter number of squares per row:");  
    const MAX_SQUARES = 100;

    if (numberOfSquares > MAX_SQUARES) {
        alert("Enter a number less than or equal to 100");
    } else {
        buildGrid(numberOfSquares);
    }
};

const toggleSettingsModal = () => {
    const settings = document.querySelector("#settings");
    settings.classList.toggle("show");
};

const init = () => {
    let currentGridSize = 32;
    const MAX_SQUARES = 100;
    const saveButton = document.querySelector("#save-btn");

    let isMouseDown = false;
    document.addEventListener("mousedown", (ev) => {
        isMouseDown = true;
    });
    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    const header = document.querySelector("#header");
    header.addEventListener("click", (ev) => {
        const id = ev.target.id;
        switch(id) {
            case "edit-btn":
                toggleSettingsModal();
                break;
            case "clear-btn":
                clearGrid();
                break;
            }
    });

    saveButton.addEventListener("click", () => {
        let newGridSize = document.querySelector("#grid-size-input").value;
        if (newGridSize !== currentGridSize && Number(newGridSize) && newGridSize > 0) {
            newGridSize = newGridSize <= 100 ? newGridSize : 100;
            buildGrid(newGridSize);
            currentGridSize = newGridSize;
        }
        toggleSettingsModal();
    });

    buildGrid(currentGridSize);

    const squares = document.querySelector("#container");
    container.addEventListener("mousedown", (ev) => {
        fillSquare(ev.target);
    })
    container.addEventListener("mouseover", (ev) => {
        if (isMouseDown) fillSquare(ev.target);
    });
    container.addEventListener("click", (ev) => {
        clearSquare(ev.target);
    });
}

init();