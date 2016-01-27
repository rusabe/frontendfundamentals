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
var minute;
var hundredsofsecond;
var interval;
function start(){
    hundredsofsecond = 100;
    second = 60;

    interval = setInterval(function(){
        hundredsofsecond--;
        if(hundredsofsecond<10)
        {
            hundredsofsecond = "0" + hundredsofsecond;
        }

        document.getElementById("hundredsofsecond").innerHTML = hundredsofsecond;
        if(hundredsofsecond == 99)
        {
            if(second>0)
            {
                second--;
                if(second<10)
                {
                    second = "0" + second;
                }
                document.getElementById("second").innerHTML = second;
            }
        }
        


        if(hundredsofsecond == 0 && second == 0){
            clearInterval(interval);
        }        
    }, 10);
}

function stop(){
    clearInterval(interval);
    document.getElementById("second").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("hundredsofsecond").innerHTML = "00";

}