        
var b1Ary = Array()
document.querySelectorAll("#b1").forEach(a => {
    b1Ary.push(a)
})

var b2Ary = Array()
document.querySelectorAll("#b2").forEach(a => {
    b2Ary.push(a)
})

var b3Ary = Array()
document.querySelectorAll("#b3").forEach(a => {
    b3Ary.push(a)
})

var b4Ary = Array()
document.querySelectorAll("#b4").forEach(a => {
    b4Ary.push(a)
})

var b5Ary = Array()
document.querySelectorAll("#b5").forEach(a => {
    b5Ary.push(a)
})

var b6Ary = Array()
document.querySelectorAll("#b6").forEach(a => {
    b6Ary.push(a)
})

var b7Ary = Array()
document.querySelectorAll("#b7").forEach(a => {
    b7Ary.push(a)
})

var b8Ary = Array()
document.querySelectorAll("#b8").forEach(a => {
    b8Ary.push(a)
})

var box = Array(b1Ary,b2Ary,b3Ary,b4Ary,b5Ary,b6Ary,b7Ary,b8Ary)

for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
        if(i%2==0 && j%2 == 0){
            box[i][j].style.backgroundColor = "rgba(0,255,0,.6)" 
        }
        if(i%2 != 0 && j%2 !=0){
            box[i][j].style.backgroundColor = "rgba(0,255,0,.6)" 
        }
    }
}

