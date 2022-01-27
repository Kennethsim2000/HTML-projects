function dolime(){
    var dd1=document.getElementById("d1");
    dd1.style.backgroundColor="lime";
}

function doyellow(){
    var dd1=document.getElementById("d1");
    dd1.style.backgroundColor="white";
    var ctx=dd1.getContext("2d");
    ctx.fillStyle="yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillRect(60,10,40,40);
    ctx.fillStyle="black";
    ctx.font="30px Arial";
    ctx.fillText("Hello",10,80);
}

function doBlue(){
    var dd1=document.getElementById("can");
    dd1.style.backgroundColor="blue";
}

function doColor(){
    var dd1=document.getElementById("can");
    var input=document.getElementById("clr");
    dd1.style.backgroundColor=input.value;
}

function doColor2(){
    var dd1=document.getElementById("can2");
    var input=document.getElementById("clr2");
    dd1.style.backgroundColor=input.value;
}

function doSquare(){
    var sliderInput=document.getElementById("slr");
    var len=sliderInput.value;
    var canvas=document.getElementById("can2");
    var context=canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
   context.fillStyle = "yellow";
   context.fillRect(10,10,len,len);
   context.fillRect(parseInt(len)+20,10,len,len);
   context.fillRect(len*3,10,len,len);
}



