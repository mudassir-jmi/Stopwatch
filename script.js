
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;   // for timer is start or not

function start() {
    timer = true;
    stopwatch();
}

function stop() {
   timer = false;
}

function reset() {
    timer = false;

     hr = 0;
     min = 0;
     sec = 0;
     count = 0;

     // Add double zero in Stopwatch
     document.getElementById("hr").innerHTML = "00";
     document.getElementById("min").innerHTML = "00";
     document.getElementById("sec").innerHTML = "00";
     document.getElementById("count").innerHTML = "00";
}

// for Stop
function stopwatch() {
   if(timer == true) {
       count = count + 1;

        // for Milli Sec
       if(count == 100) {
           sec = sec + 1;
           count = 0;
       }

       // for Sec
       if(sec == 60) {
           min = min + 1;
           sec = 0;
       }
       // for Minute
       if(min == 60) {
           hr = hr + 1;
           min = 0;
           sec = 0;
       }

       // for add double zero in stopwatch

       var hrString = hr;
       var minString = min;
       var secString = sec;
       var countString = count;

        if(hr < 10) {
           hrString = "0" + hrString;
        }

        if(min < 10) {
           minString = "0" + minString;
        }

        if(sec < 10) {
           secString = "0" + secString;
        }

        if(count < 10) {
           countString = "0" + countString;
        }

       // for show output
       document.getElementById("hr").innerHTML = hrString;
       document.getElementById("min").innerHTML = minString;
       document.getElementById("sec").innerHTML = secString;
       document.getElementById("count").innerHTML = countString;

       setTimeout("stopwatch()",10);
   }
}