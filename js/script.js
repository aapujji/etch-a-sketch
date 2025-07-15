const clearGrid = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.classList.remove("hover");
    });
}

const clearSquare = (square) => {
    square.classList.remove("hover");
}

const addSquare = (square) => {
    square.classList.add("hover");
}

const buildGrid = (num = 32) => {
    console.log(num);
    const container = document.querySelector("#container");
    container.replaceChildren();
    const gridSize = num * num;
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        const flexBasis = Math.round((600 / num) * 100) / 100;
        const height = Math.round((600 / num) * 100) / 100;

        square.style.flexBasis = `${flexBasis.toString()}px`;
        square.style.height = `${height.toString()}px`;

        square.addEventListener("mouseenter", (ev) => addSquare(ev.target));
        square.addEventListener("click", (ev) => clearSquare(ev.target));

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

const showSettings = () => {
    const settings = document.querySelector("#settings");
    settings.classList.toggle("show");
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    showSettings();
});

buildGrid();