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

var second;
var minute;
var hundredsofsecond;
var interval;
var isSession = true;
var totalSeconds;
function start(){
    hundredsofsecond = 100;
    second = 60;
    minute = Number(document.getElementById("sessionValue").innerHTML);
    totalSeconds = Number(minute)*60;

    interval = setInterval(function(){
        if(Number(hundredsofsecond) == 0 && Number(second) == 0 && minute == 0){
            isSession = !isSession;
            if(isSession)
            {
                minute = Number(document.getElementById("sessionValue").innerHTML);
                document.getElementById("isBreak").innerHTML = 'SESSION';
            }
            else
            {
                minute = Number(document.getElementById("breakValue").innerHTML);
                document.getElementById("isBreak").innerHTML = 'BREAK';
            }
            totalSeconds = Number(minute)*60;
            second = 60;
            hundredsofsecond = 100;
        } 
        else
        {
            if(hundredsofsecond == 0)
            {
                hundredsofsecond = 100;
            }
            hundredsofsecond--;
            if(Number(hundredsofsecond)<10)
            {
                document.getElementById("hundredsofsecond").innerHTML = "0" + hundredsofsecond;
            }
            else
            {
                document.getElementById("hundredsofsecond").innerHTML = hundredsofsecond;
            }

            if(Number(hundredsofsecond) == 99)
            {
                if(second==0)
                {
                    second = 60;
                }
                second--;
                if(Number(second)<10)
                {
                    document.getElementById("second").innerHTML = "0" + second;
                }
                else
                {
                    document.getElementById("second").innerHTML = second;
                }
                
            }
            console.log(Number(second) + ':' + Number(hundredsofsecond));
            if(Number(second) == 59 && Number(hundredsofsecond) == 99)
            {
                minute--;
                if(Number(minute)<10)
                {
                    document.getElementById("minute").innerHTML = "0" + minute;
                }
                else
                {
                    document.getElementById("minute").innerHTML = minute;
                }
            }
        }     

        var actualSeconds = minute*60 + second;
        var percentage_current = actualSeconds / totalSeconds * 100;
        document.getElementById("progressBar").style.background = 'linear-gradient(yellow '+percentage_current+'%,#a0c884 '+percentage_current+'%)';
    }, 10);
}

function stop(){
    clearInterval(interval);
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("hundredsofsecond").innerHTML = "00";
    document.getElementById("isBreak").innerHTML = 'SESSION';
    document.getElementById("progressBar").style.background = 'yellow';

}