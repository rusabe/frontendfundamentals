function addBreak(){
    var breakField = document.getElementById("breakValue");
    console.log(breakField.innerHTML);
    breakField.innerHTML = Number(breakField.innerHTML)+1;
}

function subtractBreak(){
    var breakField = document.getElementById("breakValue");
    console.log(breakField.innerHTML);
    breakField.innerHTML = Number(breakField.innerHTML)-1;
}

function addSession(){
    var sessionField = document.getElementById("sessionValue");
    sessionField.innerHTML = Number(sessionField.innerHTML)+1;
}

function subtractSession(){
    var sessionField = document.getElementById("sessionValue");
    sessionField.innerHTML = Number(sessionField.innerHTML)-1;
}

var second = document.getElementById("second").innerHTML;
var interval;
function start(){
    second = 60;
    interval = setInterval(function(){
        if(second>0)
        {
            second--;
            if(second<10)
            {
                second = "0" + second;
            }
            document.getElementById("second").innerHTML = second;
        }
        else{
            clearInterval(interval);
        }
        console.log('I');
    }, 1000);
}

function stop(){
    clearInterval(interval);
    document.getElementById("second").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("hundredsofsecond").innerHTML = "00";

}