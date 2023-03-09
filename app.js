const eyeLeft = document.getElementById('pupil-left');
const eyeRight = document.getElementById('pupil-right');

function slideLeft() {
    eyeLeft.style.marginLeft = `-20px`;    
    eyeRight.style.marginLeft = `-20px`;    
}
function slideRight() {
    eyeLeft.style.marginLeft = `20px`;    
    eyeRight.style.marginLeft = `20px`;    
}
function slideHome() {
    eyeLeft.style.marginLeft = `0`;    
    eyeRight.style.marginLeft = `0`;    
}


function shake() {
    let delay = 1500;
    slideLeft();
    setTimeout(() => {
        slideRight();
        setTimeout(() => {
            slideLeft();
            setTimeout(() => {
                slideRight();
                setTimeout(() => {
                    slideHome();
                }, delay)                 
            }, delay)             
        }, delay)          
    }, delay)    
}



