const container = document.querySelector('#game');
container.style.display = 'flex';
makeDivGrid();

function makeDivGrid() {
    //Make a 16x16 grid of square divs.
    const container = document.querySelector('#game');
    for(let i = 0; i < 16; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        for(let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.style.height = '36px';
            square.style.width = '36px';
            square.style.backgroundColor = 'red';
            square.style.borderStyle = 'solid';
            col.appendChild(square);
        }
        container.appendChild(col);
    }

}