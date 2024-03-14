const container = document.querySelector('#game');
container.style.display = 'flex';

makePixelGrid();
init();

const gridSizeBtn = document.querySelector('#grid-size');
gridSizeBtn.addEventListener('click', () => prompt('Enter the number of squares per side. (min: 1, max: 100)'));

function init() {
    const pixels = document.querySelectorAll('.pixel');
    console.log(pixels);
    for (const pixel of pixels) {
        // Note that arrow function can't be used because they do not have their own this.
        pixel.addEventListener('mouseover', function() {draw(this)}); 
    }   
}

//Todo next: make CSS file and move the styling to it.
//Todo: make the squares fill the total size.
function makePixelGrid(n = 16) {
    //Make a 16x16 grid of square divs.
    const container = document.querySelector('#game');
    container.replaceChildren();

    const edgeDim = 576; //The edge dimension of the drawing area.

    for(let i = 0; i < 16; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        for(let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('pixel');
            square.style.height = '36px';
            square.style.width = '36px';
            square.style.backgroundColor = 'rgb(0, 0, 0)';
            square.style.borderStyle = 'solid';
            // square.style.borderColor = 'white';
            col.appendChild(square);
        }
        container.appendChild(col);
    }
}

const myNode = document.getElementById("foo");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

function draw(square) {
    console.log(square);
    const currentColorRGB = stringToRGB(square.style.backgroundColor);
    for (let i = 0; i < currentColorRGB.length; i++) {
        console.log(currentColorRGB[i]);
        currentColorRGB[i] += 255/10; //check that this is indeed working in tens
    }
    console.log('number is');
    console.log(currentColorRGB);
    console.log('string is');
    console.log(rgbToString(currentColorRGB));
    square.style.backgroundColor = rgbToString(currentColorRGB);
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