const container = document.querySelector('main .container');

let size = 16;
let color = "";
drawSquare();

container.addEventListener("mouseover", function (e) {
    if (color == "") {
        let colorR = Math.floor(Math.random() * 256);
        let colorG = Math.floor(Math.random() * 256);
        let colorB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    } else {
        e.target.style.backgroundColor = color;
    }
})

let colorBtn = document.querySelector('#color');
colorBtn.addEventListener("input", function () {
    color = colorBtn.value;
})

let sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener("click", changeSize);

function changeSize() {
    let newSize = prompt("Please enter new size between 1-64");
    if (newSize > 0 && newSize < 65) {
        size = newSize;
        remove();
        drawSquare();
    }
}

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener("click", remove);

function remove() {
    const divs = document.querySelectorAll('.container > div');
    divs.forEach((item) => {
        item.style.backgroundColor = "white";
    })
}

function drawSquare() {
    container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr) `
    let square = size * size;
    for (let i = 1; i <= square; i++) {
        let div = document.createElement('div');
        let className = "box" + i;
        div.setAttribute('class', className);
        container.appendChild(div);
    }
}