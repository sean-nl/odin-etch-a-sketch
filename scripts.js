const EDGE_DIM = 576; //The edge dimension of the drawing area.

const container = document.querySelector('#game');
container.style.display = 'flex';
container.style.flex = 'auto';
container.style.width = EDGE_DIM + 'px';
container.style.height = EDGE_DIM + 'px';

const gridSizeBtn = document.querySelector('#grid-size');
gridSizeBtn.addEventListener('click', updateResolution);

makePixelGrid();
init();

//Could make an external CSS and link to it instead of setting this in the loop.
//But for this exercise, leaving it this way.
function makePixelGrid(n = 16) {
    //Make an n x n grid of square divs.
    const container = document.querySelector('#game');
    container.replaceChildren();

    for(let i = 0; i < n; i++) {
        const col = document.createElement('div');
        col.style.flex = '1 0 auto';
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        col.classList.add('col');

        for(let j = 0; j < n; j++) {
            const pixel = document.createElement('div');
            pixel.style.flex = '1 0 auto';
            pixel.classList.add('pixel');
            pixel.style.backgroundColor = 'rgb(0, 0, 0)';
            pixel.style.borderStyle = 'solid';
            col.appendChild(pixel);
        }
        container.appendChild(col);
    }
}

function init() {
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
        // Note that arrow function can't be used because they do not have their own 'this'.
        pixel.addEventListener('mouseover', function() {draw(this)}); 
    }   
}

function draw(square) {
    const currentColorRGB = stringToRGB(square.style.backgroundColor);
    for (let i = 0; i < currentColorRGB.length; i++) {
        if (currentColorRGB[i] <= 255) currentColorRGB[i] += 255/10;
    }
    square.style.backgroundColor = rgbToString(currentColorRGB);
}

function updateResolution() {
    const res = prompt('Enter the number of squares per size (min: 1, max: 100');
    if (isNaN(parseInt(res))) {
        alert('Invalid number! Using default resolution 16x16');
        makePixelGrid();
    }
    else if (res < 1) {
        alert('Numbers less than zero not permitted! Using resolution 1x1');
        makePixelGrid(1);
    }
    else if (res > 100) {
        alert('Numbers more than 100 not permitted! Using resolution 100x100');
        makePixelGrid(100);
    }
    else {
        makePixelGrid(res);
    }

    init();
}

function stringToRGB(stringColor) {
    //parse string 'rgb(1,2,3)' to array [1,2,3]
    const rgbColor = stringColor.split('(')[1].split(')')[0].split(', ');
    for(let i = 0; i < rgbColor.length; i++) {
        rgbColor[i] = Number(rgbColor[i]);
    }
    return rgbColor;
}

function rgbToString(rgbColor) {
    const r = rgbColor[0];
    const g = rgbColor[1];
    const b = rgbColor[2];
    return `rgb(${r},${g},${b})`
}