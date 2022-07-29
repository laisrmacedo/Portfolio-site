// var i = 0;
// var txt = "Lais Macedo"
// var vel = 100;

// function digitacao(){
//     if(i<txt.length){
//         document.getElementById("texto").innerHTML = "funcionou"
//         // i++
//         // setTimeout(digitacao,vel);
//     }    
// }

// document.getElementById("texto").innerHTML = "funcionou"

var i = 0;
// var A = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
        //console.log(document.getElementById("text").innerHTML);
    }

typeWriter();