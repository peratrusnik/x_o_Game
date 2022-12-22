let container = document.querySelector('.container');
let sign = "X";
let btn = document.querySelector('.btn');


btn.addEventListener('click', starGame);

starGame();
function starGame() {
    makeGrid();
    ///  make grid
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('click', insertSign));

    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function insertSign() {
        this.removeEventListener('click', insertSign);
        sign === 'X' ? sign = 'O' : sign = 'X';
        this.innerHTML = sign;
        checkWinner();
    }

    function checkWinner() {
        lines.forEach(line => {
            let box1 = boxes[line[0]];
            let box2 = boxes[line[1]];
            let box3 = boxes[line[2]];
            if (box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box1.innerHTML !== "") {
                box1.style.background = 'tomato';
                box2.style.background = 'tomato';
                box3.style.background = 'tomato';
                stopGame();
            }
        })
        function stopGame() {
            boxes.forEach(box => box.removeEventListener('click', insertSign));
            btn.style.display = 'block';
        }
    }

    function makeGrid() {
        let text = ``;
        for (let i = 0; i < 9; i++) {
            text += `<div class="box"></div>`
        }
        container.innerHTML = text;
    }
}