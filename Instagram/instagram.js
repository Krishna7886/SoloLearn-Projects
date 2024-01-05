function back(){
    alert("It's under construction");
}
function video_call(){
    alert("It's under construction");
}
function edit(){
    alert("It's under construction");
}
function remove(){
    var main = document.getElementById("search")
    var remove = document.getElementById("sIn");

    var inv = document.getElementById("in");
    if(inv != ""){
        main.removeChild(remove);
    }
}
function requests(){
    alert("It's under Construction");
}
function add_notes(){
    alert("It's under Construction");
}
function open1(){
    alert("it's under Constriction")
}
let tog = 0;
let seen = document.getElementById("msgSent")
setInterval( ()=>{seen.innerText = "Seen just now"},10000)
seen.addEventListener("click",function(){
    //seen.innerText = "Seen just now"
    if(tog % 2 == 0){
        seen.innerText = "Seen just now";
    }if (tog % 2 != 0) {
        seen.innerText = "Sent just now";
    }
    tog++;
});
