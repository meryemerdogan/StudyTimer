let time;
let h = 0;
let min = 0;
let s = 0;
let ms = 0;
let final = "";
function startTimer(){
    if(ms < 59){
        ms = ms + 1;
        final="";
        if(h < 10){
            final += "0"+h; 
        }
        else{
            final += h; 
        }
        if(min < 10){
            final += ":0"+min; 
        }
        else{
            final += ":"+min; 
        }
        if(s < 10){
            final += ":0"+s; 
        }
        else{
            final += ":"+s; 
        }
        if(ms < 10){
            final += ":0"+ms; 
        }
        else{
            final += ":"+ms; 
        }
        document.getElementById("timer").innerHTML = final;
    }
    else if(s < 59){
        s = s + 1; 
        ms = 0;
        final="";
        if(h < 10){
            final += "0"+h; 
        }
        else{
            final += h; 
        }
        if(min < 10){
            final += ":0"+min; 
        }
        else{
            final += ":"+min; 
        }
        if(s < 10){
            final += ":0"+s; 
        }
        else{
            final += ":"+s; 
        }
        if(ms < 10){
            final += ":0"+ms; 
        }
        else{
            final += ":"+ms; 
        }
        document.getElementById("timer").innerHTML = final;
    }
    else if(min < 59){
        min = min + 1;
        s = 0;
        final="";
        if(h < 10){
            final += "0"+h; 
        }
        else{
            final += h; 
        }
        if(min < 10){
            final += ":0"+min; 
        }
        else{
            final += ":"+min; 
        }
        if(s < 10){
            final += ":0"+s; 
        }
        else{
            final += ":"+s; 
        }
        if(ms < 10){
            final += ":0"+ms; 
        }
        else{
            final += ":"+ms; 
        }
        document.getElementById("timer").innerHTML = final;
    }else{
        hour = hour + 1;
        min = 0;
        final="";
        if(h < 10){
            final += "0"+h; 
        }
        else{
            final += h; 
        }
        if(min < 10){
            final += ":0"+min; 
        }
        else{
            final += ":"+min; 
        }
        if(s < 10){
            final += ":0"+s; 
        }
        else{
            final += ":"+s; 
        }
        if(ms < 10){
            final += ":0"+ms; 
        }
        else{
            final += ":"+ms; 
        }
        document.getElementById("timer").innerHTML = final;
    }

    time = setTimeout(() => startTimer(), 1);
}
function stopTimer(){
    clearTimeout(time);
}
function clearTimer(){
    clearTimeout(time);
    document.getElementById("timer").innerHTML = "00:00:00:00";
    document.getElementById("pastTimes").innerHTML += final + "\n";
    final ="";
    min=0;
    s=0;
    ms=0;
    h=0;
}