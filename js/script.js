const container = document.querySelector("#container");
console.log(container);
for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}