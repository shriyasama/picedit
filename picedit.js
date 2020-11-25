var image=null;
var image1;
var image2;
function yes()
{
  var x=document.getElementById("third");
  x.className="result1";
  x.innerHTML="Thankyou";
}
function no()
{
  var x=document.getElementById("third");
  x.className="result2";
   x.innerHTML="Itsokay!";
}
function reset()
{
  var x=document.getElementById("third")
  x.className="po"
  x.innerHTML="Are you excited?"
}
function changecolor(){
  var x=document.getElementById("one");
  x.style.backgroundColor="orange";
  var y=document.getElementById("two");
  y.style.backgroundColor="blue";
}
function reset2(){
  var x=document.getElementById("one");
  var y=document.getElementById("two");
  var cta=x.getContext("2d")
  var ctb=y.getContext("2d")
  cta.clearRect(0,0,x.width,x.height)
  ctb.clearRect(0,0,y.width,y.height)
  x.style.backgroundColor="white"
  y.style.backgroundColor="white"
}
function message()
{
  var x=document.getElementById("one");
  var y=document.getElementById("two");
  var cta=x.getContext("2d")
  var ctb=y.getContext("2d")
  cta.fillStyle="Blue";
  cta.fillRect(20,35,120,60);
  ctb.fillStyle="Orange";
  ctb.fillRect(20,35,120,60);
  cta.fillStyle="Blue";
  cta.fillRect(150,35,120,60);
  ctb.fillStyle="Orange";
  ctb.fillRect(150,35,120,60);
  cta.fillStyle="black";
  cta.font = "40px Arial";
  cta.fillText("Hello",30,75);
  cta.fillStyle="black";
  cta.font = "45px Arial";
  cta.fillText("Hi",180,75);
  ctb.fillStyle="black";
  ctb.font = "40px Arial";
  ctb.fillText("Good",30,75);
  ctb.fillStyle="black";
  ctb.font = "45px Arial";
  ctb.fillText("Bye",180,75);
  
}
function changecolor2(){
  var x=document.getElementById("one");
  var y=document.getElementById("two");
  var colorinput=document.getElementById("three");
  x.style.backgroundColor=colorinput.value
  y.style.backgroundColor=colorinput.value
   
}
function dosquare(){
  var x=document.getElementById("one");
  var y=document.getElementById("two");
  var rangeinput=document.getElementById("sldr");
  var cta=x.getContext("2d")
  var ctb=y.getContext("2d")
  cta.clearRect(0,0,x.width,x.height)
  ctb.clearRect(0,0,y.width,y.height)
  cta.fillStyle="Blue";
cta.fillRect(0,0,rangeinput.value,rangeinput.value);
ctb.fillStyle="Orange";
ctb.fillRect(0,0,rangeinput.value,rangeinput.value);  
}
function upload()
{
  var x=document.getElementById("img");
  var imginput=x.value
  alert("You chose "+imginput)
}
function imgreset()
{
  var x=document.getElementById("can2");
   var ct=x.getContext("2d")
   ct.clearRect(0,0,x.width,x.height)
}
function upload2()
{
  var x=document.getElementById("can2");
  var imginput=document.getElementById("uplimg2");
  image=new SimpleImage(imginput);
  
  image.drawTo(x);
}
function greyscale()
{
  
  for(var pixel of image.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
  var x=document.getElementById("can2");
  image.drawTo(x)
}
function uploadf()
{
  var x=document.getElementById("can3");
  var imginput=document.getElementById("uplimgf");
  var image1=new SimpleImage(imginput);
   image1.drawTo(x);
}
function uploadb()
{
  var x=document.getElementById("can4");
  var imginput=document.getElementById("uplimgb");
  var image2=new SimpleImage(imginput);
   image2.drawTo(x);
}
function ccomposite(){
  var output=new SimpleImage(image1.getWidth(),image1.getHeight())
  var a=document.getElementById("can3");
  var b=document.getElementById("can4");
  var ctb=b.getContext("2d")
  ctb.clearRect(0,0,b.width,b.height)
  for(var pixel of image1.values()){
    if(pixel.getGreen()>=250)
    {
      var x=pixel.getX()
      var y=pixel.getY()
      var z=image2.getPixel(x,y)
      output.setPixel(x,y,z)
    }
    else
      {
        output.setPixel(x,y,pixel)
      }
  }
  output.drawTo(a)
}
function canvasesreset(){
  var x=document.getElementById("can3");
  var y=document.getElementById("can4");
  var cta=x.getContext("2d")
  var ctb=y.getContext("2d")
  cta.clearRect(0,0,x.width,x.height)
  ctb.clearRect(0,0,y.width,y.height)
}