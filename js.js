let isMouseClickDown = false;
const etchContainer = document.querySelector(".etch-container");
const numberOfBoxes = 16;

document.body.onmousedown = () => {
    isMouseClickDown = true;
}
document.body.onmouseup = () => {
    isMouseClickDown = false;
}

let button = document.querySelector("button");
createGrid(numberOfBoxes);


function onHover(e, box)
{
    box.classList.toggle("etch-box-hovered");
    if (isMouseClickDown)
    {
        box.style.backgroundColor = "black";
    }
}

function onUnhover(e,box)
{
    box.classList.toggle("etch-box-hovered");
    if (isMouseClickDown)
    {
        box.style.backgroundColor = "black";
    }
}

function onButtonClick()
{
    let response = parseInt(prompt("Write a grid size", "16"));
    if (response != NaN)
    {
        createGrid(response);
    }
}

function createGrid(numberOfBoxes)
{
    etchContainer.innerHTML = ' ';
    for(let i = 0; i < numberOfBoxes; i++)
    {
        let box = document.createElement("div");
        box.classList.add("etch-column");
        box.draggable = false;
        appendBoxes(box, numberOfBoxes);
        etchContainer.appendChild(box);
    }
}

function appendBoxes(div, numberOfBoxes)
{
    const numBoxes = parseInt(numberOfBoxes);

    for(let i = 0; i<numBoxes; i++)
    {
        let box = document.createElement("div");
        box.classList.add("etch-box");
        box.draggable = false;
        div.appendChild(box);
        box.addEventListener("mouseover", (e) => onHover(e,box));
        box.addEventListener("mouseleave", (e) => onUnhover(e,box));
        box.addEventListener("click", () => {
            box.style.backgroundColor = "black";
        })
    }
}
