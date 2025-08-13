import { dom, toggleSettingsModal, clearGrid, buildGrid } from "./dom";
import '../css/styles.css';

let isMouseDown = false;
document.addEventListener("mousedown", (ev) => { 
    if (ev.button === 0) isMouseDown = true;
});
document.addEventListener("mouseup", () => isMouseDown = false );


dom.header.addEventListener("click", (ev) => {
    const id = ev.target.id;
    if (id === "edit-btn") toggleSettingsModal();
    else if (id === "clear-btn") clearGrid();
});

dom.saveButton.addEventListener("click", () => saveSettings());

buildGrid();

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