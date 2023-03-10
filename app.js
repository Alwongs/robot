const eyeLeft = document.getElementById('pupil-left');
const eyeRight = document.getElementById('pupil-right');
const textArea = document.getElementById('textArea');
const display = document.getElementById('display');

let position = '';
let count = 1;
let delay = 500;
let messageIn = '';

textArea.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        sendMessage(e.target.value);
        e.preventDefault();
    }
});

function sendMessage(text) {
    let rows = Math.ceil(text.length / 40);
    count = rows * 2 + 1;
    display.textContent = text;
    messageIn = text;
    textArea.value = '';
    animateReading();
}

function moveLeft() { 
    eyeLeft.style.marginLeft = `-15px`;    
    eyeRight.style.marginLeft = `-25px`; 
}
function moveRight() {
    eyeLeft.style.marginLeft = `25px`;    
    eyeRight.style.marginLeft = `15px`;    
}
function moveHome() {
    eyeLeft.style.marginLeft = `0`;    
    eyeRight.style.marginLeft = `0`;  
    moveUp(); 
    changeEyes(12, 20);  
}
function moveDown() {
    eyeLeft.style.marginTop = `6px`;    
    eyeRight.style.marginTop = `6px`;     
}
function moveUp() {
    eyeLeft.style.marginTop = `0px`;    
    eyeRight.style.marginTop = `0px`;     
}
function setTransition(size) {
    eyeLeft.style.transition = `${size}s`; 
    eyeRight.style.transition = `${size}s`;    
}
function changeEyes(size, mt) {
    eyeLeft.style.fontSize = `${size}px`;    
    eyeRight.style.fontSize = `${size}px`;  
    
    eyeLeft.style.lineHeight = `${mt}px`;    
    eyeRight.style.lineHeight = `${mt}px`;  
}

function animateReading() { 
    setTimeout(() => {
        if(position === '') {
            changeEyes(18, 24); 
            moveDown(); 
        }
        if (position === 'left') {
            delay = 1500;
            setTransition(1.5); 
            moveRight();
            position = 'right';
        } else {
            delay = 500;            
            setTransition(0.4); 
            moveLeft();
            position = 'left';
        }
        count--;
        if (count > 0) {
            animateReading();
        } else {
            moveHome();
            answer();
            position = '';
            count = 7;
            delay = 500;
        }    
    }, delay)
}

function answer() {
    console.log(messageIn)
    // newText = display.textContent + ', ' + text;
    display.textContent = '';
    display.textContent = 'new \r\n ';
    display.textContent += messageIn;
}
