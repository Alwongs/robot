const eyeLeft = document.getElementById('pupil-left');
const eyeRight = document.getElementById('pupil-right');

function moveLeft() { 
    eyeLeft.style.marginLeft = `-20px`;    
    eyeRight.style.marginLeft = `-20px`;    
}
function moveRight() {
    eyeLeft.style.marginLeft = `20px`;    
    eyeRight.style.marginLeft = `20px`;    
}
function moveHome() {
    eyeLeft.style.marginLeft = `0`;    
    eyeRight.style.marginLeft = `0`;    
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

function shake() {  
    setTransition(0.4);   
    moveLeft();
    moveDown();
    setTimeout(() => {
        setTransition(1.5);        
        moveRight();
        setTimeout(() => {
            setTransition(0.4); 
            moveLeft();
            setTimeout(() => {
                setTransition(1.5);                 
                moveRight();
                setTimeout(() => {
                    setTransition(0.4);                    
                    moveHome();
                    moveUp(); 
                }, 1500)                 
            }, 500)             
        }, 1500)          
    }, 500)
   
}



