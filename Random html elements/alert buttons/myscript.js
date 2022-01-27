function dochange(){
   var r=confirm("Press a button!");
   var txt;
   if(r==true){
       txt="You pressed OK!";
   }else{
      txt="Are you sure you want to cancel?";
   }
   alert(txt);
}

function changeColor(){
   var d1element=document.getElementById("d1");
   var d2element=document.getElementById("d2");
   d1element.className="blueback";
   d2element.className="orangeback";
}

function changeText(){
   var d1element=document.getElementById("div1");
   var d2element=document.getElementById("div2");
   d1element.innerHTML="Changed version";
   d2element.innerHTML="Changed version";
}