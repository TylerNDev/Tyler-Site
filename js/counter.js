let count = 0;
const num = document.getElementById("count");

function increase(){
    count += 1;
    document.getElementById("count").innerHTML = count;
    if(count > 0){
        num.style.color = "Green"
    };
}

function reset(){
    count = 0;
    document.getElementById("count").innerHTML = count;
    if(count == 0){
        num.style.color = "white"
    };
}

function decrease(){
    count -= 1;
    document.getElementById("count").innerHTML = count;
    if(count < 0){
        num.style.color = "Red"
    };
}
