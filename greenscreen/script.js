var fgImage=null;
var bgImage=null;
var fgCanvas;
var bgCanvas;

function upload(){
    var imgcanvas=document.getElementById("can");
    var fileInput=document.getElementById("finput");
    var image=new SimpleImage(fileInput);
    image.drawTo(imgcanvas);
}

function loadForegroundImage(){
    var imgFile=document.getElementById("fgfile");
    fgImage=new SimpleImage(imgFile);
     fgCanvas=document.getElementById("fgcan");
    fgImage.drawTo(fgCanvas);
}

function loadBackgroundImage(){
    var imgFile=document.getElementById("bgfile");
    bgImage=new SimpleImage(imgFile);
     bgCanvas=document.getElementById("bgcan");
    bgImage.drawTo(bgCanvas);
}

function doGreenScreen(){
    if(fgImage==null||!fgImage.complete()){
        alert("foreground not loaded");
        return;
    }
    if(bgImage==null||!bgImage.complete()){
        alert("background not loaded");
        return;
    }
    clearCanvas();
    var finalImage=createComposite();
    finalImage.drawTo(fgCanvas);
    
}

function createComposite(){
   var output=new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
   var greenThreshold=240;
   for(var pixel of fgImage.values()){
       var x=pixel.getX();
       var y=pixel.getY();
       if(pixel.getGreen()>greenThreshold){
           var pix=bgImage.getPixel(x,y);
           output.setPixel(x,y,pix);
       }else{
           output.setPixel(x,y,pixel);
       }
   }
   return output;
}

function clearCanvas(){
var paintcanvas = document.getElementById("fgcan");
var paintcanvas2 = document.getElementById("bgcan");
 var context = paintcanvas.getContext("2d");
 var context2 = paintcanvas2.getContext("2d");
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
  context2.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}