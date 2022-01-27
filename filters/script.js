var originalImage=null;
var redImage=null;
var grayImage=null;

function upload(){
    var canvas=document.getElementById("can");
    var uploaded=document.getElementById("upload1");
     originalImage=new SimpleImage(uploaded);
     redImage=new SimpleImage(uploaded);
     grayImage=new SimpleImage(uploaded);
    originalImage.drawTo(canvas);
}

function filterRed(){
    var canvas=document.getElementById("can");
    if(isLoaded(originalImage)){
      turnRed();
      redImage.drawTo(canvas);
    }else{
      alert("image not loaded");
}
}

function turnRed(){
   for(var pixel of redImage.values()){
       var red=pixel.getRed();
       var green=pixel.getGreen();
       var blue=pixel.getBlue();
       var average=(red+green+blue)/3;
       if(average<128){
           pixel.setRed(2*average);
           pixel.setGreen(0);
           pixel.setBlue(0);
       }else{
           pixel.setRed(255);
           pixel.setGreen(2*average-255);
           pixel.setBlue(2*average-255);
       }
   }
}

function filterGray(){
 var canvas=document.getElementById("can");
  if(isLoaded(originalImage)){
    turnGray();
    grayImage.drawTo(canvas);
  }else{
    alert("image not loaded");
  }

}

function turnGray(){
    for(var pixel of grayImage.values()){
    var red=pixel.getRed();
    var blue=pixel.getBlue();
    var green=pixel.getGreen();
    var average=(red+blue+green)/3;
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
    }
}

function isLoaded(img){
    if(img==null||!img.complete()){
        alert("image not loaded");
        return false;
    }else{
        return true;
    }
}
function reset(){
    var canvas=document.getElementById("can");
    originalImage.drawTo(canvas);
    redImage=new SimpleImage(originalImage);
    grayImage=new SimpleImage(originalImage);
}
