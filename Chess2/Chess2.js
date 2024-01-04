var box1 = [];
var s1 = document.querySelectorAll("#c1");
    for(var i=0;i<s1.length;i++){
        box1[i] = (s1[i]);
    }
var box2 = [];
    var s2 = document.querySelectorAll("#c2");
        for(var i=0;i<s2.length;i++){
            box2[i] = (s2[i]);
        }
var box3 = [];
    var s3 = document.querySelectorAll("#c3");
        for(var i=0;i<s3.length;i++){
            box3[i] = (s3[i]);
        }
        var box4 = [];
        var s4 = document.querySelectorAll("#c4");
            for(var i=0;i<s4.length;i++){
                box4[i] = (s4[i]);
            }
        var box5 = [];
            var s5 = document.querySelectorAll("#c5");
                for(var i=0;i<s5.length;i++){
                    box5[i] = (s5[i]);
                }
        var box6 = [];
            var s6 = document.querySelectorAll("#c6");
                for(var i=0;i<s6.length;i++){
                    box6[i] = (s6[i]);
                }
                var box7 = [];
                var s7 = document.querySelectorAll("#c7");
                    for(var i=0;i<s7.length;i++){
                        box7[i] = (s7[i]);
                    }
                var box8 = [];
                    var s8 = document.querySelectorAll("#c8");
                        for(var i=0;i<s8.length;i++){
                            box8[i] = (s8[i]);
                        }
var box = [box1,box2,box3,box4,box5,box6,box7,box8];
for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
        if(i%2 == 0 && j%2 == 0){
            box[i][j].style.backgroundColor="#ffffc0"
        }
        if(i%2 == 1 && j%2 == 1){
            box[i][j].style.backgroundColor="#ffffc0"
            
        }
    }
}
let iv = 0,jv = 0;
for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
       /* if(box[i][j].addEventListener('click',true)==true){
            function a(){
                alert(box[i][j].innerHTML)
            }
            a();
           
        }*/
        var click = box[i][j].style.onclick = () => {
            iv = i;
            jv = j;
            return i,j;
        }
        
    }
}
let pic = "";
document.querySelectorAll("#board").forEach(item =>{
    item.querySelectorAll("#r1").forEach(r1 =>{
        if(r1.id == "c1"){
            alert(r1.innerText)
        }
    })
    item.querySelectorAll("#r2").forEach(r2 =>{
        r2.addEventListener('click',function(){
            pic = r2.innerText
            if(pic != ""){
                alert(pic)
            }
        })
    })
    item.querySelectorAll("#r3").forEach(r3 =>{
        r3.addEventListener('click',function(){
            pic = r3.innerText
            if(pic != ""){
                alert(pic)
            }
        })
    })
})
