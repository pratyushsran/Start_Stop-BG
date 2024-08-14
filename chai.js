//genrate a random color
//color has limit
function randomColor(){
    const colorRange="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        let random=Math.floor(Math.random()*16)
        color+=colorRange[random];
    }
    return color;
}
let stop;
function startChangingColor(){
    stop=setInterval(change,500)
    function change(){
        document.body.style.backgroundColor=randomColor();
    }
}

function stopChangingColor(){
    clearInterval(stop);
}

document.querySelector('.start').addEventListener('click',startChangingColor);
document.querySelector('.stop').addEventListener('click',stopChangingColor);