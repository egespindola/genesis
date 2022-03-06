let order = []
let clickedOrder = []
let score = []

// 0,1,2,3 | b,g,r,y

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

//creates random color  order 
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//turn colors on
lightColor = (element, num) => {
    num = num * 580;
    setTimeout(() => {
        element.classList.add('selected');
    }, num - 250);

    setTimeout(() => {
       element.classList.remove('selected');
    });
}

// check if clicked buttons are equal to the correct order
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//function for user click
let click = (color)  => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    console.log(`color:${color}`); /*debb*/
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250);

}

//function tha return color
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if(color == 1) {
        return green;
    } else if(color == 2) {
        return red;
    } else if(color == 3) {
        return yellow;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//game over function
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu!\nClique OK para iniciar novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao jogo Genius')
    score = 0;

    nextLevel();
}

// blue.addEventListener('click', click(0));
// green.addEventListener('click', click(1));
// red.addEventListener('click', click(2));
// yellow.addEventListener('click', click(3));

blue.onclick = () => click(0);
green.onclick = () => click(1);
red.onclick = () => click(2);
yellow.onclick = () => click(3);

playGame();

// let lose = () => {
//     return null;
// }