/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var m15,m11,m12,m13,m14;
var m25,m21,m22,m23,m24;
var m35,m31,m32,m33,m34;
var m45,m41,m42,m43,m44;
var m55,m51,m52,m53,m54;
var m65,m61,m62,m63,m64;
var m75,m71,m72,m73,m74;
var m85,m81,m82,m83,m84;
var m95,m91,m92,m93,m94;
var m105,m101,m102,m103,m104;

var m115,m111,m112,m113,m114;
var m125,m121,m122,m123,m124;
var m135,m131,m132,m133,m134;
var m145,m141,m142,m143,m144;
var m155,m151,m152,m153,m154;
var m165,m161,m162,m163,m164;
var m175,m171,m172,m173,m174;
var m185,m181,m182,m183,m184;
var m195,m191,m192,m193,m194;
var m205,m201,m202,m203,m204;

var m215,m211,m212,m213,m214;
var m225,m221,m222,m223,m224;
var m235,m231,m232,m233,m234;
var m245,m241,m242,m243,m244;
var m255,m251,m252,m253,m254;
var m265,m261,m262,m263,m264;
var m275,m271,m272,m273,m274;
var m285,m281,m282,m283,m284;
var m295,m291,m292,m293,m294;
var m305,m301,m302,m303,m304;


function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}
function random(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

function random2(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

function random3(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}


var test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var test_array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var test_array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var seed;
//空の配列を用意
var main_array = [];

var num = [1,2,3,4,5,6,7,8,9];
let n = 9;


//配列に値をセット
for(var i = 0 ; i < 100 ; i++){
	main_array[i] = 0;
}
var txt ="JavaScript";
var count=0;

var count_step=0;

function syori1(){
input_message = document.getElementById("spin3").value;
count_func(input_message);

var count_step_seigen = document.getElementById("spin_seigen_kaisuu").value;

count_step++;
	
if(count_step==count_step_seigen)
{
   btn3.disabled = false;
   clearInterval(timer1);
count_step=0;
for(var i = 0 ; i < 100 ; i++){
	main_array[i] = 0;
}
}

}




  function func1() {
    var input_message = document.getElementById("spin3").value;
    input_message = "発生桁数は「" + input_message + "」です。";
    document.getElementById("output_message").innerHTML = input_message;
  hassei_ketasuu=input_message;
return hassei_ketasuu;
}



function count_func(ketasuu)
{

random(test_array, 9);
random2(test_array, 9);
random3(test_array, 9);

var c = document.getElementById("sample");
var ctx = c.getContext("2d");
ctx.font = "italic 40px Arial"; //フォントにArial,40px,斜体を指定
ctx.fillStyle = "green"; //塗り潰し色を緑に


var d = new Date();
var hh = d.getHours();
var mm = d.getMinutes();
var ss = d.getSeconds();
var dd = d.getMilliseconds();


var temp1 = intRandom(1, 9);
var temp2 = intRandom(1, 9);
//var seed2 = intRandom(0, 8);

var seed,seed2,seed3,seed4,seed5,seed6;
var seed7,seed8,seed9,seed10,seed11,seed12;
var seed13,seed14,seed15,seed16,seed17,seed18;
var seed19,seed20,seed21,seed22,seed23,seed24;

if(dd>=0 && dd<=100)seed=intRandom(0, 8);
if(dd>100 && dd<=200)seed=intRandom(0, 8);
if(dd>200 && dd<=300)seed=intRandom(0, 8);
if(dd>300 && dd<=400)seed=intRandom(0, 8);
if(dd>400 && dd<=500)seed=intRandom(0, 8);
if(dd>500 && dd<=600)seed=intRandom(0, 8);
if(dd>600 && dd<=700)seed=intRandom(0, 8);
if(dd>700 && dd<=800)seed=intRandom(0, 8);
if(dd>800 && dd<=900)seed=intRandom(0, 8);
if(dd>900 && dd<=1000)seed=intRandom(0, 8);

if(dd>=0 && dd<=100)seed2=intRandom(0, 8);
if(dd>100 && dd<=200)seed2=intRandom(0, 8);
if(dd>200 && dd<=300)seed2=intRandom(0, 8);
if(dd>300 && dd<=400)seed2=intRandom(0, 8);
if(dd>400 && dd<=500)seed2=intRandom(0, 8);
if(dd>500 && dd<=600)seed2=intRandom(0, 8);
if(dd>600 && dd<=700)seed2=intRandom(0, 8);
if(dd>700 && dd<=800)seed2=intRandom(0, 8);
if(dd>800 && dd<=900)seed2=intRandom(0, 8);
if(dd>900 && dd<=1000)seed2=intRandom(0, 8);

if(dd>=0 && dd<=100)seed3=intRandom(0, 8);
if(dd>100 && dd<=200)seed3intRandom(0, 8);
if(dd>200 && dd<=300)seed3=intRandom(0, 8);
if(dd>300 && dd<=400)seed3=intRandom(0, 8);
if(dd>400 && dd<=500)seed3=intRandom(0, 8);
if(dd>500 && dd<=600)seed3=intRandom(0, 8);
if(dd>600 && dd<=700)seed3=intRandom(0, 8);
if(dd>700 && dd<=800)seed3=intRandom(0, 8);
if(dd>800 && dd<=900)seed3=intRandom(0, 8);
if(dd>900 && dd<=1000)seed3=intRandom(0, 8);

if(dd>=0 && dd<=100)seed4=intRandom(0, 8);
if(dd>100 && dd<=200)seed4intRandom(0, 8);
if(dd>200 && dd<=300)seed4=intRandom(0, 8);
if(dd>300 && dd<=400)seed4=intRandom(0, 8);
if(dd>400 && dd<=500)seed4=intRandom(0, 8);
if(dd>500 && dd<=600)seed4=intRandom(0, 8);
if(dd>600 && dd<=700)seed4=intRandom(0, 8);
if(dd>700 && dd<=800)seed4=intRandom(0, 8);
if(dd>800 && dd<=900)seed4=intRandom(0, 8);
if(dd>900 && dd<=1000)seed4=intRandom(0, 8);

if(dd>=0 && dd<=100)seed5=intRandom(0, 8);
if(dd>100 && dd<=200)seed5intRandom(0, 8);
if(dd>200 && dd<=300)seed5=intRandom(0, 8);
if(dd>300 && dd<=400)seed5=intRandom(0, 8);
if(dd>400 && dd<=500)seed5=intRandom(0, 8);
if(dd>500 && dd<=600)seed5=intRandom(0, 8);
if(dd>600 && dd<=700)seed5=intRandom(0, 8);
if(dd>700 && dd<=800)seed5=intRandom(0, 8);
if(dd>800 && dd<=900)seed5=intRandom(0, 8);
if(dd>900 && dd<=1000)seed5=intRandom(0, 8);

if(dd>=0 && dd<=100)seed6=intRandom(0, 8);
if(dd>100 && dd<=200)seed6intRandom(0, 8);
if(dd>200 && dd<=300)seed6=intRandom(0, 8);
if(dd>300 && dd<=400)seed6=intRandom(0, 8);
if(dd>400 && dd<=500)seed6=intRandom(0, 8);
if(dd>500 && dd<=600)seed6=intRandom(0, 8);
if(dd>600 && dd<=700)seed6=intRandom(0, 8);
if(dd>700 && dd<=800)seed6=intRandom(0, 8);
if(dd>800 && dd<=900)seed6=intRandom(0, 8);
if(dd>900 && dd<=1000)seed6=intRandom(0, 8);

if(dd>=0 && dd<=100)seed7=intRandom(0, 8);
if(dd>100 && dd<=200)seed7=intRandom(0, 8);
if(dd>200 && dd<=300)seed7=intRandom(0, 8);
if(dd>300 && dd<=400)seed7=intRandom(0, 8);
if(dd>400 && dd<=500)seed7=intRandom(0, 8);
if(dd>500 && dd<=600)seed7=intRandom(0, 8);
if(dd>600 && dd<=700)seed7=intRandom(0, 8);
if(dd>700 && dd<=800)seed7=intRandom(0, 8);
if(dd>800 && dd<=900)seed7=intRandom(0, 8);
if(dd>900 && dd<=1000)seed7=intRandom(0, 8);

if(dd>=0 && dd<=100)seed8=intRandom(0, 8);
if(dd>100 && dd<=200)seed8intRandom(0, 8);
if(dd>200 && dd<=300)seed8=intRandom(0, 8);
if(dd>300 && dd<=400)seed8=intRandom(0, 8);
if(dd>400 && dd<=500)seed8=intRandom(0, 8);
if(dd>500 && dd<=600)seed8=intRandom(0, 8);
if(dd>600 && dd<=700)seed8=intRandom(0, 8);
if(dd>700 && dd<=800)seed8=intRandom(0, 8);
if(dd>800 && dd<=900)seed8=intRandom(0, 8);
if(dd>900 && dd<=1000)seed8=intRandom(0, 8);

if(dd>=0 && dd<=100)seed9=intRandom(0, 8);
if(dd>100 && dd<=200)seed9intRandom(0, 8);
if(dd>200 && dd<=300)seed9=intRandom(0, 8);
if(dd>300 && dd<=400)seed9=intRandom(0, 8);
if(dd>400 && dd<=500)seed9=intRandom(0, 8);
if(dd>500 && dd<=600)seed9=intRandom(0, 8);
if(dd>600 && dd<=700)seed9=intRandom(0, 8);
if(dd>700 && dd<=800)seed9=intRandom(0, 8);
if(dd>800 && dd<=900)seed9=intRandom(0, 8);
if(dd>900 && dd<=1000)seed9=intRandom(0, 8);

if(dd>=0 && dd<=100)seed10=intRandom(0, 8);
if(dd>100 && dd<=200)seed10=intRandom(0, 8);
if(dd>200 && dd<=300)seed10=intRandom(0, 8);
if(dd>300 && dd<=400)seed10=intRandom(0, 8);
if(dd>400 && dd<=500)seed10=intRandom(0, 8);
if(dd>500 && dd<=600)seed10=intRandom(0, 8);
if(dd>600 && dd<=700)seed10=intRandom(0, 8);
if(dd>700 && dd<=800)seed10=intRandom(0, 8);
if(dd>800 && dd<=900)seed10=intRandom(0, 8);
if(dd>900 && dd<=1000)seed10=intRandom(0, 8);

if(dd>=0 && dd<=100)seed11=intRandom(0, 8);
if(dd>100 && dd<=200)seed11intRandom(0, 8);
if(dd>200 && dd<=300)seed11=intRandom(0, 8);
if(dd>300 && dd<=400)seed11=intRandom(0, 8);
if(dd>400 && dd<=500)seed11=intRandom(0, 8);
if(dd>500 && dd<=600)seed11=intRandom(0, 8);
if(dd>600 && dd<=700)seed11=intRandom(0, 8);
if(dd>700 && dd<=800)seed11=intRandom(0, 8);
if(dd>800 && dd<=900)seed11=intRandom(0, 8);
if(dd>900 && dd<=1000)seed11=intRandom(0, 8);

if(dd>=0 && dd<=100)seed12=intRandom(0, 8);
if(dd>100 && dd<=200)seed12intRandom(0, 8);
if(dd>200 && dd<=300)seed12=intRandom(0, 8);
if(dd>300 && dd<=400)seed12=intRandom(0, 8);
if(dd>400 && dd<=500)seed12=intRandom(0, 8);
if(dd>500 && dd<=600)seed12=intRandom(0, 8);
if(dd>600 && dd<=700)seed12=intRandom(0, 8);
if(dd>700 && dd<=800)seed12=intRandom(0, 8);
if(dd>800 && dd<=900)seed12=intRandom(0, 8);
if(dd>900 && dd<=1000)seed12=intRandom(0, 8);

if(dd>=0 && dd<=100)seed13=intRandom(0, 8);
if(dd>100 && dd<=200)seed13intRandom(0, 8);
if(dd>200 && dd<=300)seed13=intRandom(0, 8);
if(dd>300 && dd<=400)seed13=intRandom(0, 8);
if(dd>400 && dd<=500)seed13=intRandom(0, 8);
if(dd>500 && dd<=600)seed13=intRandom(0, 8);
if(dd>600 && dd<=700)seed13=intRandom(0, 8);
if(dd>700 && dd<=800)seed13=intRandom(0, 8);
if(dd>800 && dd<=900)seed13=intRandom(0, 8);
if(dd>900 && dd<=1000)seed13=intRandom(0, 8);

if(dd>=0 && dd<=100)seed14=intRandom(0, 8);
if(dd>100 && dd<=200)seed14intRandom(0, 8);
if(dd>200 && dd<=300)seed14=intRandom(0, 8);
if(dd>300 && dd<=400)seed14=intRandom(0, 8);
if(dd>400 && dd<=500)seed14=intRandom(0, 8);
if(dd>500 && dd<=600)seed14=intRandom(0, 8);
if(dd>600 && dd<=700)seed14=intRandom(0, 8);
if(dd>700 && dd<=800)seed14=intRandom(0, 8);
if(dd>800 && dd<=900)seed14=intRandom(0, 8);
if(dd>900 && dd<=1000)seed14=intRandom(0, 8);

if(dd>=0 && dd<=100)seed15=intRandom(0, 8);
if(dd>100 && dd<=200)seed15intRandom(0, 8);
if(dd>200 && dd<=300)seed15=intRandom(0, 8);
if(dd>300 && dd<=400)seed15=intRandom(0, 8);
if(dd>400 && dd<=500)seed15=intRandom(0, 8);
if(dd>500 && dd<=600)seed15=intRandom(0, 8);
if(dd>600 && dd<=700)seed15=intRandom(0, 8);
if(dd>700 && dd<=800)seed15=intRandom(0, 8);
if(dd>800 && dd<=900)seed15=intRandom(0, 8);
if(dd>900 && dd<=1000)seed15=intRandom(0, 8);

if(dd>=0 && dd<=100)seed16=intRandom(0, 8);
if(dd>100 && dd<=200)seed16=intRandom(0, 8);
if(dd>200 && dd<=300)seed16=intRandom(0, 8);
if(dd>300 && dd<=400)seed16=intRandom(0, 8);
if(dd>400 && dd<=500)seed16=intRandom(0, 8);
if(dd>500 && dd<=600)seed16=intRandom(0, 8);
if(dd>600 && dd<=700)seed16=intRandom(0, 8);
if(dd>700 && dd<=800)seed16=intRandom(0, 8);
if(dd>800 && dd<=900)seed16=intRandom(0, 8);
if(dd>900 && dd<=1000)seed16=intRandom(0, 8);

if(dd>=0 && dd<=100)seed17=intRandom(0, 8);
if(dd>100 && dd<=200)seed17=intRandom(0, 8);
if(dd>200 && dd<=300)seed17=intRandom(0, 8);
if(dd>300 && dd<=400)seed17=intRandom(0, 8);
if(dd>400 && dd<=500)seed17=intRandom(0, 8);
if(dd>500 && dd<=600)seed17=intRandom(0, 8);
if(dd>600 && dd<=700)seed17=intRandom(0, 8);
if(dd>700 && dd<=800)seed17=intRandom(0, 8);
if(dd>800 && dd<=900)seed17=intRandom(0, 8);
if(dd>900 && dd<=1000)seed17=intRandom(0, 8);

if(dd>=0 && dd<=100)seed18=intRandom(0, 8);
if(dd>100 && dd<=200)seed18=intRandom(0, 8);
if(dd>200 && dd<=300)seed18=intRandom(0, 8);
if(dd>300 && dd<=400)seed18=intRandom(0, 8);
if(dd>400 && dd<=500)seed18=intRandom(0, 8);
if(dd>500 && dd<=600)seed18=intRandom(0, 8);
if(dd>600 && dd<=700)seed18=intRandom(0, 8);
if(dd>700 && dd<=800)seed18=intRandom(0, 8);
if(dd>800 && dd<=900)seed18=intRandom(0, 8);
if(dd>900 && dd<=1000)seed18=intRandom(0, 8);

if(dd>=0 && dd<=100)seed19=intRandom(0, 8);
if(dd>100 && dd<=200)seed19=intRandom(0, 8);
if(dd>200 && dd<=300)seed19=intRandom(0, 8);
if(dd>300 && dd<=400)seed19=intRandom(0, 8);
if(dd>400 && dd<=500)seed19=intRandom(0, 8);
if(dd>500 && dd<=600)seed19=intRandom(0, 8);
if(dd>600 && dd<=700)seed19=intRandom(0, 8);
if(dd>700 && dd<=800)seed19=intRandom(0, 8);
if(dd>800 && dd<=900)seed19=intRandom(0, 8);
if(dd>900 && dd<=1000)seed19=intRandom(0, 8);

if(dd>=0 && dd<=100)seed20=intRandom(0, 8);
if(dd>100 && dd<=200)seed20=intRandom(0, 8);
if(dd>200 && dd<=300)seed20=intRandom(0, 8);
if(dd>300 && dd<=400)seed20=intRandom(0, 8);
if(dd>400 && dd<=500)seed20=intRandom(0, 8);
if(dd>500 && dd<=600)seed20=intRandom(0, 8);
if(dd>600 && dd<=700)seed20=intRandom(0, 8);
if(dd>700 && dd<=800)seed20=intRandom(0, 8);
if(dd>800 && dd<=900)seed20=intRandom(0, 8);
if(dd>900 && dd<=1000)seed20=intRandom(0, 8);


if(ketasuu==1)
{

main_array[1]=main_array[1]+test_array[seed]
}

if(ketasuu==2)
{

main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
}

if(ketasuu==3)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
}

if(ketasuu==4)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
}

if(ketasuu==5)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
}

if(ketasuu==6)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
}

if(ketasuu==7)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
}

if(ketasuu==8)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
}

if(ketasuu==9)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
}

if(ketasuu==10)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
}

if(ketasuu==11)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
}

if(ketasuu==12)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
}

if(ketasuu==13)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
}

if(ketasuu==14)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
}

if(ketasuu==15)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
main_array[15]=main_array[15]+test_array2[seed15];
}

if(ketasuu==16)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
main_array[15]=main_array[15]+test_array2[seed15];
main_array[16]=main_array[16]+test_array2[seed16];
}

if(ketasuu==17)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
main_array[15]=main_array[15]+test_array2[seed15];
main_array[16]=main_array[16]+test_array2[seed16];
main_array[17]=main_array[17]+test_array2[seed17];
}

if(ketasuu==18)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
main_array[15]=main_array[15]+test_array2[seed15];
main_array[16]=main_array[16]+test_array2[seed16];
main_array[17]=main_array[17]+test_array2[seed17];
main_array[18]=main_array[18]+test_array2[seed18];
}

if(ketasuu==19)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
main_array[15]=main_array[15]+test_array2[seed15];
main_array[16]=main_array[16]+test_array2[seed16];
main_array[17]=main_array[17]+test_array2[seed17];
main_array[18]=main_array[18]+test_array2[seed18];
main_array[19]=main_array[19]+test_array2[seed19];
}

if(ketasuu==20)
{
main_array[1]=main_array[1]+test_array[seed];
main_array[2]=main_array[2]+test_array2[seed2];
main_array[3]=main_array[3]+test_array2[seed3];
main_array[4]=main_array[4]+test_array2[seed4];
main_array[5]=main_array[5]+test_array2[seed5];
main_array[6]=main_array[6]+test_array2[seed6];
main_array[7]=main_array[7]+test_array2[seed7];
main_array[8]=main_array[8]+test_array2[seed8];
main_array[9]=main_array[9]+test_array2[seed9];
main_array[10]=main_array[10]+test_array2[seed10];
main_array[11]=main_array[11]+test_array2[seed11];
main_array[12]=main_array[12]+test_array2[seed12];
main_array[13]=main_array[13]+test_array2[seed13];
main_array[14]=main_array[14]+test_array2[seed14];
main_array[15]=main_array[15]+test_array2[seed15];
main_array[16]=main_array[16]+test_array2[seed16];
main_array[17]=main_array[17]+test_array2[seed17];
main_array[18]=main_array[18]+test_array2[seed18];
main_array[19]=main_array[19]+test_array2[seed19];
main_array[20]=main_array[20]+test_array2[seed20];
}

if(main_array[1]>=10){
main_array[1]=0;
main_array[2]++;
} 

if(main_array[2]>=10){
main_array[2]=0;
main_array[3]++;
} 


if(main_array[3]>=10){
main_array[3]=0;
main_array[4]++;
} 

if(main_array[4]>=10){
main_array[4]=0;
main_array[5]++;
} 

if(main_array[5]>=10){
main_array[5]=0;
main_array[6]++;
} 

if(main_array[6]>=10){
main_array[6]=0;
main_array[7]++;
} 

if(main_array[7]>=10){
main_array[7]=0;
main_array[8]++;
} 

if(main_array[8]>=10){
main_array[8]=0;
main_array[9]++;
} 

if(main_array[9]>=10){
main_array[9]=0;
main_array[10]++;
} 

if(main_array[10]>=10){
main_array[10]=0;
main_array[11]++;
} 

if(main_array[11]>=10){
main_array[11]=0;
main_array[12]++;
} 

if(main_array[12]>=10){
main_array[12]=0;
main_array[13]++;
} 

if(main_array[13]>=10){
main_array[13]=0;
main_array[14]++;
} 

if(main_array[14]>=10){
main_array[14]=0;
main_array[15]++;
} 

if(main_array[15]>=10){
main_array[15]=0;
main_array[16]++;
} 

if(main_array[16]>=10){
main_array[16]=0;
main_array[17]++;
} 

if(main_array[17]>=10){
main_array[17]=0;
main_array[18]++;
} 

if(main_array[18]>=10){
main_array[18]=0;
main_array[19]++;
} 

if(main_array[19]>=10){
main_array[19]=0;
main_array[20]++;
} 

if(main_array[20]>=10){
main_array[20]=0;
main_array[21]++;
} 

if(main_array[21]>=10){
main_array[21]=0;
main_array[22]++;
} 

if(main_array[22]>=10){
main_array[22]=0;
main_array[23]++;
} 

if(main_array[23]>=10){
main_array[23]=0;
main_array[24]++;
} 

if(main_array[24]>=10){
main_array[24]=0;
main_array[25]++;
} 


count++;


if(main_array[1]==0)
{
	m15=0;m11=0;m12=0;m13=0;m14=0;
}

if(main_array[1]==1)
{
	m15=0;m11=1;m12=0;m13=0;m14=0;
}

if(main_array[1]==2)
{
	m15=0;m11=1;m12=1;m13=0;m14=0;
}

if(main_array[1]==3)
{
	m15=0;m11=1;m12=1;m13=1;m14=0;
}

if(main_array[1]==4)
{
	m15=0;m11=1;m12=1;m13=1;m14=1;
}

if(main_array[1]==5)
{
	m15=1;m11=0;m12=0;m13=0;m14=0;
}

if(main_array[1]==6)
{
	m15=1;m11=1;m12=0;m13=0;m14=0;
}

if(main_array[1]==7)
{
	m15=1;m11=1;m12=1;m13=0;m14=0;
}

if(main_array[1]==8)
{
	m15=1;m11=1;m12=1;m13=1;m14=0;
}

if(main_array[1]==9)
{
	m15=1;m11=1;m12=1;m13=1;m14=1;
}

///////////////////////////////////////

if(main_array[2]==0)
{
	m25=0;m21=0;m22=0;m23=0;m24=0;
}

if(main_array[2]==1)
{
	m25=0;m21=1;m22=0;m23=0;m24=0;
}

if(main_array[2]==2)
{
	m25=0;m21=1;m22=1;m23=0;m24=0;
}

if(main_array[2]==3)
{
	m25=0;m21=1;m22=1;m23=1;m24=0;
}

if(main_array[2]==4)
{
	m25=0;m21=1;m22=1;m23=1;m24=1;
}

if(main_array[2]==5)
{
	m25=1;m21=0;m22=0;m23=0;m24=0;
}

if(main_array[2]==6)
{
	m25=1;m21=1;m22=0;m23=0;m24=0;
}

if(main_array[2]==7)
{
	m25=1;m21=1;m22=1;m23=0;m24=0;
}

if(main_array[2]==8)
{
	m25=1;m21=1;m22=1;m23=1;m24=0;
}

if(main_array[2]==9)
{
	m25=1;m21=1;m22=1;m23=1;m24=1;
}

///////////////////////////////////////

if(main_array[3]==0)
{
	m35=0;m31=0;m32=0;m33=0;m34=0;
}

if(main_array[3]==1)
{
	m35=0;m31=1;m32=0;m33=0;m34=0;
}

if(main_array[3]==2)
{
	m35=0;m31=1;m32=1;m33=0;m34=0;
}

if(main_array[3]==3)
{
	m35=0;m31=1;m32=1;m33=1;m34=0;
}

if(main_array[3]==4)
{
	m35=0;m31=1;m32=1;m33=1;m34=1;
}

if(main_array[3]==5)
{
	m35=1;m31=0;m32=0;m33=0;m34=0;
}

if(main_array[3]==6)
{
	m35=1;m31=1;m32=0;m33=0;m34=0;
}

if(main_array[3]==7)
{
	m35=1;m31=1;m32=1;m33=0;m34=0;
}

if(main_array[3]==8)
{
	m35=1;m31=1;m32=1;m33=1;m34=0;
}

if(main_array[3]==9)
{
	m35=1;m31=1;m32=1;m33=1;m34=1;
}

///////////////////////////////////////

if(main_array[4]==0)
{
	m45=0;m41=0;m42=0;m43=0;m44=0;
}

if(main_array[4]==1)
{
	m45=0;m41=1;m42=0;m43=0;m44=0;
}

if(main_array[4]==2)
{
	m45=0;m41=1;m42=1;m43=0;m44=0;
}

if(main_array[4]==3)
{
	m45=0;m41=1;m42=1;m43=1;m44=0;
}

if(main_array[4]==4)
{
	m45=0;m41=1;m42=1;m43=1;m44=1;
}

if(main_array[4]==5)
{
	m45=1;m41=0;m42=0;m43=0;m44=0;
}

if(main_array[4]==6)
{
	m45=1;m41=1;m42=0;m43=0;m44=0;
}

if(main_array[4]==7)
{
	m45=1;m41=1;m42=1;m43=0;m44=0;
}

if(main_array[4]==8)
{
	m45=1;m41=1;m42=1;m43=1;m44=0;
}

if(main_array[4]==9)
{
	m45=1;m41=1;m42=1;m43=1;m44=1;
}


///////////////////////////////////////

if(main_array[5]==0)
{
	m55=0;m51=0;m52=0;m53=0;m54=0;
}

if(main_array[5]==1)
{
	m55=0;m51=1;m52=0;m53=0;m54=0;
}

if(main_array[5]==2)
{
	m55=0;m51=1;m52=1;m53=0;m54=0;
}

if(main_array[5]==3)
{
	m55=0;m51=1;m52=1;m53=1;m54=0;
}

if(main_array[5]==4)
{
	m55=0;m51=1;m52=1;m53=1;m54=1;
}

if(main_array[5]==5)
{
	m55=1;m51=0;m52=0;m53=0;m54=0;
}

if(main_array[5]==6)
{
	m55=1;m51=1;m52=0;m53=0;m54=0;
}

if(main_array[5]==7)
{
	m55=1;m51=1;m52=1;m53=0;m54=0;
}

if(main_array[5]==8)
{
	m55=1;m51=1;m52=1;m53=1;m54=0;
}

if(main_array[5]==9)
{
	m55=1;m51=1;m52=1;m53=1;m54=1;
}

///////////////////////////////////////

if(main_array[6]==0)
{
	m65=0;m61=0;m62=0;m63=0;m64=0;
}

if(main_array[6]==1)
{
	m65=0;m61=1;m62=0;m63=0;m64=0;
}

if(main_array[6]==2)
{
	m65=0;m61=1;m62=1;m63=0;m64=0;
}

if(main_array[6]==3)
{
	m65=0;m61=1;m62=1;m63=1;m64=0;
}

if(main_array[6]==4)
{
	m65=0;m61=1;m62=1;m63=1;m64=1;
}

if(main_array[6]==5)
{
	m65=1;m61=0;m62=0;m63=0;m64=0;
}

if(main_array[6]==6)
{
	m65=1;m61=1;m62=0;m63=0;m64=0;
}

if(main_array[6]==7)
{
	m65=1;m61=1;m62=1;m63=0;m64=0;
}

if(main_array[6]==8)
{
	m65=1;m61=1;m62=1;m63=1;m64=0;
}

if(main_array[6]==9)
{
	m65=1;m61=1;m62=1;m63=1;m64=1;
}

///////////////////////////////////////

if(main_array[7]==0)
{
	m75=0;m71=0;m72=0;m73=0;m74=0;
}

if(main_array[7]==1)
{
	m75=0;m71=1;m72=0;m73=0;m74=0;
}

if(main_array[7]==2)
{
	m75=0;m71=1;m72=1;m73=0;m74=0;
}

if(main_array[7]==3)
{
	m75=0;m71=1;m72=1;m73=1;m74=0;
}

if(main_array[7]==4)
{
	m75=0;m71=1;m72=1;m73=1;m74=1;
}

if(main_array[7]==5)
{
	m75=1;m71=0;m72=0;m73=0;m74=0;
}

if(main_array[7]==6)
{
	m75=1;m71=1;m72=0;m73=0;m74=0;
}

if(main_array[7]==7)
{
	m75=1;m71=1;m72=1;m73=0;m74=0;
}

if(main_array[7]==8)
{
	m75=1;m71=1;m72=1;m73=1;m74=0;
}

if(main_array[7]==9)
{
	m75=1;m71=1;m72=1;m73=1;m74=1;
}

///////////////////////////////////////

if(main_array[8]==0)
{
	m85=0;m81=0;m82=0;m83=0;m84=0;
}

if(main_array[8]==1)
{
	m85=0;m81=1;m82=0;m83=0;m84=0;
}

if(main_array[8]==2)
{
	m85=0;m81=1;m82=1;m83=0;m84=0;
}

if(main_array[8]==3)
{
	m85=0;m81=1;m82=1;m83=1;m84=0;
}

if(main_array[8]==4)
{
	m85=0;m81=1;m82=1;m83=1;m84=1;
}

if(main_array[8]==5)
{
	m85=1;m81=0;m82=0;m83=0;m84=0;
}

if(main_array[8]==6)
{
	m85=1;m81=1;m82=0;m83=0;m84=0;
}

if(main_array[8]==7)
{
	m85=1;m81=1;m82=1;m83=0;m84=0;
}

if(main_array[8]==8)
{
	m85=1;m81=1;m82=1;m83=1;m84=0;
}

if(main_array[8]==9)
{
	m85=1;m81=1;m82=1;m83=1;m84=1;
}

///////////////////////////////////////

if(main_array[9]==0)
{
	m95=0;m91=0;m92=0;m93=0;m94=0;
}

if(main_array[9]==1)
{
	m95=0;m91=1;m92=0;m93=0;m94=0;
}

if(main_array[9]==2)
{
	m95=0;m91=1;m92=1;m93=0;m94=0;
}

if(main_array[9]==3)
{
	m95=0;m91=1;m92=1;m93=1;m94=0;
}

if(main_array[9]==4)
{
	m95=0;m91=1;m92=1;m93=1;m94=1;
}

if(main_array[9]==5)
{
	m95=1;m91=0;m92=0;m93=0;m94=0;
}

if(main_array[9]==6)
{
	m95=1;m91=1;m92=0;m93=0;m94=0;
}

if(main_array[9]==7)
{
	m95=1;m91=1;m92=1;m93=0;m94=0;
}

if(main_array[9]==8)
{
	m95=1;m91=1;m92=1;m93=1;m94=0;
}

if(main_array[9]==9)
{
	m95=1;m91=1;m92=1;m93=1;m94=1;
}


///////////////////////////////////////

if(main_array[10]==0)
{
	m105=0;m101=0;m102=0;m103=0;m104=0;
}

if(main_array[10]==1)
{
	m105=0;m101=1;m102=0;m103=0;m104=0;
}

if(main_array[10]==2)
{
	m105=0;m101=1;m102=1;m103=0;m104=0;
}

if(main_array[10]==3)
{
	m105=0;m101=1;m102=1;m103=1;m104=0;
}

if(main_array[10]==4)
{
	m105=0;m101=1;m102=1;m103=1;m104=1;
}

if(main_array[10]==5)
{
	m105=1;m101=0;m102=0;m103=0;m104=0;
}

if(main_array[10]==6)
{
	m105=1;m101=1;m102=0;m103=0;m104=0;
}

if(main_array[10]==7)
{
	m105=1;m101=1;m102=1;m103=0;m104=0;
}

if(main_array[10]==8)
{
	m105=1;m101=1;m102=1;m103=1;m104=0;
}

if(main_array[10]==9)
{
	m105=1;m101=1;m102=1;m103=1;m104=1;
}

///////////////////////////////////////

if(main_array[11]==0)
{
	m115=0;m111=0;m112=0;m113=0;m114=0;
}

if(main_array[11]==1)
{
	m115=0;m111=1;m112=0;m113=0;m114=0;
}

if(main_array[11]==2)
{
	m115=0;m111=1;m112=1;m113=0;m114=0;
}

if(main_array[11]==3)
{
	m115=0;m111=1;m112=1;m113=1;m114=0;
}

if(main_array[11]==4)
{
	m115=0;m111=1;m112=1;m113=1;m114=1;
}

if(main_array[11]==5)
{
	m115=1;m111=0;m112=0;m113=0;m114=0;
}

if(main_array[11]==6)
{
	m115=1;m111=1;m112=0;m113=0;m114=0;
}

if(main_array[11]==7)
{
	m115=1;m111=1;m112=1;m113=0;m114=0;
}

if(main_array[11]==8)
{
	m115=1;m111=1;m112=1;m113=1;m114=0;
}

if(main_array[11]==9)
{
	m115=1;m111=1;m112=1;m113=1;m114=1;
}

///////////////////////////////////////

if(main_array[12]==0)
{
	m125=0;m121=0;m122=0;m123=0;m124=0;
}

if(main_array[12]==1)
{
	m125=0;m121=1;m122=0;m123=0;m124=0;
}

if(main_array[12]==2)
{
	m125=0;m121=1;m122=1;m123=0;m124=0;
}

if(main_array[12]==3)
{
	m125=0;m121=1;m122=1;m123=1;m124=0;
}

if(main_array[12]==4)
{
	m125=0;m121=1;m122=1;m123=1;m124=1;
}

if(main_array[12]==5)
{
	m125=1;m121=0;m122=0;m123=0;m124=0;
}

if(main_array[12]==6)
{
	m125=1;m121=1;m122=0;m123=0;m124=0;
}

if(main_array[12]==7)
{
	m125=1;m121=1;m122=1;m123=0;m124=0;
}

if(main_array[12]==8)
{
	m125=1;m121=1;m122=1;m123=1;m124=0;
}

if(main_array[12]==9)
{
	m125=1;m121=1;m122=1;m123=1;m124=1;
}

///////////////////////////////////////

if(main_array[13]==0)
{
	m135=0;m131=0;m132=0;m133=0;m134=0;
}

if(main_array[13]==1)
{
	m135=0;m131=1;m132=0;m133=0;m134=0;
}

if(main_array[13]==2)
{
	m135=0;m131=1;m132=1;m133=0;m134=0;
}

if(main_array[13]==3)
{
	m135=0;m131=1;m132=1;m133=1;m134=0;
}

if(main_array[13]==4)
{
	m135=0;m131=1;m132=1;m133=1;m134=1;
}

if(main_array[13]==5)
{
	m135=1;m131=0;m132=0;m133=0;m134=0;
}

if(main_array[13]==6)
{
	m135=1;m131=1;m132=0;m133=0;m134=0;
}

if(main_array[13]==7)
{
	m135=1;m131=1;m132=1;m133=0;m134=0;
}

if(main_array[13]==8)
{
	m135=1;m131=1;m132=1;m133=1;m134=0;
}

if(main_array[13]==9)
{
	m135=1;m131=1;m132=1;m133=1;m134=1;
}

///////////////////////////////////////

if(main_array[14]==0)
{
	m145=0;m141=0;m142=0;m143=0;m144=0;
}

if(main_array[14]==1)
{
	m145=0;m141=1;m142=0;m143=0;m144=0;
}

if(main_array[14]==2)
{
	m145=0;m141=1;m142=1;m143=0;m144=0;
}

if(main_array[14]==3)
{
	m145=0;m141=1;m142=1;m143=1;m144=0;
}

if(main_array[14]==4)
{
	m145=0;m141=1;m142=1;m143=1;m144=1;
}

if(main_array[14]==5)
{
	m145=1;m141=0;m142=0;m143=0;m144=0;
}

if(main_array[14]==6)
{
	m145=1;m141=1;m142=0;m143=0;m144=0;
}

if(main_array[14]==7)
{
	m145=1;m141=1;m142=1;m143=0;m144=0;
}

if(main_array[14]==8)
{
	m145=1;m141=1;m142=1;m143=1;m144=0;
}

if(main_array[14]==9)
{
	m145=1;m141=1;m142=1;m143=1;m144=1;
}

///////////////////////////////////////

if(main_array[15]==0)
{
	m155=0;m151=0;m152=0;m153=0;m154=0;
}

if(main_array[15]==1)
{
	m155=0;m151=1;m152=0;m153=0;m154=0;
}

if(main_array[15]==2)
{
	m155=0;m151=1;m152=1;m153=0;m154=0;
}

if(main_array[15]==3)
{
	m155=0;m151=1;m152=1;m153=1;m154=0;
}

if(main_array[15]==4)
{
	m155=0;m151=1;m152=1;m153=1;m154=1;
}

if(main_array[15]==5)
{
	m155=1;m151=0;m152=0;m153=0;m154=0;
}

if(main_array[15]==6)
{
	m155=1;m151=1;m152=0;m153=0;m154=0;
}

if(main_array[15]==7)
{
	m155=1;m151=1;m152=1;m153=0;m154=0;
}

if(main_array[15]==8)
{
	m155=1;m151=1;m152=1;m153=1;m154=0;
}

if(main_array[15]==9)
{
	m155=1;m151=1;m152=1;m153=1;m154=1;
}

///////////////////////////////////////

if(main_array[16]==0)
{
	m165=0;m161=0;m162=0;m163=0;m164=0;
}

if(main_array[16]==1)
{
	m165=0;m161=1;m162=0;m163=0;m164=0;
}

if(main_array[16]==2)
{
	m165=0;m161=1;m162=1;m163=0;m164=0;
}

if(main_array[16]==3)
{
	m165=0;m161=1;m162=1;m163=1;m164=0;
}

if(main_array[16]==4)
{
	m165=0;m161=1;m162=1;m163=1;m164=1;
}

if(main_array[16]==5)
{
	m165=1;m161=0;m162=0;m163=0;m164=0;
}

if(main_array[16]==6)
{
	m165=1;m161=1;m162=0;m163=0;m164=0;
}

if(main_array[16]==7)
{
	m165=1;m161=1;m162=1;m163=0;m164=0;
}

if(main_array[16]==8)
{
	m165=1;m161=1;m162=1;m163=1;m164=0;
}

if(main_array[16]==9)
{
	m165=1;m161=1;m162=1;m163=1;m164=1;
}


///////////////////////////////////////

if(main_array[17]==0)
{
	m175=0;m171=0;m172=0;m173=0;m174=0;
}

if(main_array[17]==1)
{
	m175=0;m171=1;m172=0;m173=0;m174=0;
}

if(main_array[17]==2)
{
	m175=0;m171=1;m172=1;m173=0;m174=0;
}

if(main_array[17]==3)
{
	m175=0;m171=1;m172=1;m173=1;m174=0;
}

if(main_array[17]==4)
{
	m175=0;m171=1;m172=1;m173=1;m174=1;
}

if(main_array[17]==5)
{
	m175=1;m171=0;m172=0;m173=0;m174=0;
}

if(main_array[17]==6)
{
	m175=1;m171=1;m172=0;m173=0;m174=0;
}

if(main_array[17]==7)
{
	m175=1;m171=1;m172=1;m173=0;m174=0;
}

if(main_array[17]==8)
{
	m175=1;m171=1;m172=1;m173=1;m174=0;
}

if(main_array[17]==9)
{
	m175=1;m171=1;m172=1;m173=1;m174=1;
}


///////////////////////////////////////

if(main_array[18]==0)
{
	m185=0;m181=0;m182=0;m183=0;m184=0;
}

if(main_array[18]==1)
{
	m185=0;m181=1;m182=0;m183=0;m184=0;
}

if(main_array[18]==2)
{
	m185=0;m181=1;m182=1;m183=0;m184=0;
}

if(main_array[18]==3)
{
	m185=0;m181=1;m182=1;m183=1;m184=0;
}

if(main_array[18]==4)
{
	m185=0;m181=1;m182=1;m183=1;m184=1;
}

if(main_array[18]==5)
{
	m185=1;m181=0;m182=0;m183=0;m184=0;
}

if(main_array[18]==6)
{
	m185=1;m181=1;m182=0;m183=0;m184=0;
}

if(main_array[18]==7)
{
	m185=1;m181=1;m182=1;m183=0;m184=0;
}

if(main_array[18]==8)
{
	m185=1;m181=1;m182=1;m183=1;m184=0;
}

if(main_array[18]==9)
{
	m185=1;m181=1;m182=1;m183=1;m184=1;
}

///////////////////////////////////////

if(main_array[19]==0)
{
	m195=0;m191=0;m192=0;m193=0;m194=0;
}

if(main_array[19]==1)
{
	m195=0;m191=1;m192=0;m193=0;m194=0;
}

if(main_array[19]==2)
{
	m195=0;m191=1;m192=1;m193=0;m194=0;
}

if(main_array[19]==3)
{
	m195=0;m191=1;m192=1;m193=1;m194=0;
}

if(main_array[19]==4)
{
	m195=0;m191=1;m192=1;m193=1;m194=1;
}

if(main_array[19]==5)
{
	m195=1;m191=0;m192=0;m193=0;m194=0;
}

if(main_array[19]==6)
{
	m195=1;m191=1;m192=0;m193=0;m194=0;
}

if(main_array[19]==7)
{
	m195=1;m191=1;m192=1;m193=0;m194=0;
}

if(main_array[19]==8)
{
	m195=1;m191=1;m192=1;m193=1;m194=0;
}

if(main_array[19]==9)
{
	m195=1;m191=1;m192=1;m193=1;m194=1;
}

///////////////////////////////////////

if(main_array[20]==0)
{
	m205=0;m201=0;m202=0;m203=0;m204=0;
}

if(main_array[20]==1)
{
	m205=0;m201=1;m202=0;m203=0;m204=0;
}

if(main_array[20]==2)
{
	m205=0;m201=1;m202=1;m203=0;m204=0;
}

if(main_array[20]==3)
{
	m205=0;m201=1;m202=1;m203=1;m204=0;
}

if(main_array[20]==4)
{
	m205=0;m201=1;m202=1;m203=1;m204=1;
}

if(main_array[20]==5)
{
	m205=1;m201=0;m202=0;m203=0;m204=0;
}

if(main_array[20]==6)
{
	m205=1;m201=1;m202=0;m203=0;m204=0;
}

if(main_array[20]==7)
{
	m205=1;m201=1;m202=1;m203=0;m204=0;
}

if(main_array[20]==8)
{
	m205=1;m201=1;m202=1;m203=1;m204=0;
}

if(main_array[20]==9)
{
	m205=1;m201=1;m202=1;m203=1;m204=1;
}

///////////////////////////////////////

if(main_array[21]==0)
{
	m215=0;m211=0;m212=0;m213=0;m214=0;
}

if(main_array[21]==1)
{
	m215=0;m211=1;m212=0;m213=0;m214=0;
}

if(main_array[21]==2)
{
	m215=0;m211=1;m212=1;m213=0;m214=0;
}

if(main_array[21]==3)
{
	m215=0;m211=1;m212=1;m213=1;m214=0;
}

if(main_array[21]==4)
{
	m215=0;m211=1;m212=1;m213=1;m214=1;
}

if(main_array[21]==5)
{
	m215=1;m211=0;m212=0;m213=0;m214=0;
}

if(main_array[21]==6)
{
	m215=1;m211=1;m212=0;m213=0;m214=0;
}

if(main_array[21]==7)
{
	m215=1;m211=1;m212=1;m213=0;m214=0;
}

if(main_array[21]==8)
{
	m215=1;m211=1;m212=1;m213=1;m214=0;
}

if(main_array[21]==9)
{
	m215=1;m211=1;m212=1;m213=1;m214=1;
}

///////////////////////////////////////

if(main_array[22]==0)
{
	m225=0;m221=0;m222=0;m223=0;m224=0;
}

if(main_array[22]==1)
{
	m225=0;m221=1;m222=0;m223=0;m224=0;
}

if(main_array[22]==2)
{
	m225=0;m221=1;m222=1;m223=0;m224=0;
}

if(main_array[22]==3)
{
	m225=0;m221=1;m222=1;m223=1;m224=0;
}

if(main_array[22]==4)
{
	m225=0;m221=1;m222=1;m223=1;m224=1;
}

if(main_array[22]==5)
{
	m225=1;m221=0;m222=0;m223=0;m224=0;
}

if(main_array[22]==6)
{
	m225=1;m221=1;m222=0;m223=0;m224=0;
}

if(main_array[22]==7)
{
	m225=1;m221=1;m222=1;m223=0;m224=0;
}

if(main_array[22]==8)
{
	m225=1;m221=1;m222=1;m223=1;m224=0;
}

if(main_array[22]==9)
{
	m225=1;m221=1;m222=1;m223=1;m224=1;
}

///////////////////////////////////////

if(main_array[23]==0)
{
	m235=0;m231=0;m232=0;m233=0;m234=0;
}

if(main_array[23]==1)
{
	m235=0;m231=1;m232=0;m233=0;m234=0;
}

if(main_array[23]==2)
{
	m235=0;m231=1;m232=1;m233=0;m234=0;
}

if(main_array[23]==3)
{
	m235=0;m231=1;m232=1;m233=1;m234=0;
}

if(main_array[23]==4)
{
	m235=0;m231=1;m232=1;m233=1;m234=1;
}

if(main_array[23]==5)
{
	m235=1;m231=0;m232=0;m233=0;m234=0;
}

if(main_array[23]==6)
{
	m235=1;m231=1;m232=0;m233=0;m234=0;
}

if(main_array[23]==7)
{
	m235=1;m231=1;m232=1;m233=0;m234=0;
}

if(main_array[23]==8)
{
	m235=1;m231=1;m232=1;m233=1;m234=0;
}

if(main_array[23]==9)
{
	m235=1;m231=1;m232=1;m233=1;m234=1;
}

///////////////////////////////////////

if(main_array[23]==0)
{
	m235=0;m231=0;m232=0;m233=0;m234=0;
}

if(main_array[23]==1)
{
	m235=0;m231=1;m232=0;m233=0;m234=0;
}

if(main_array[23]==2)
{
	m235=0;m231=1;m232=1;m233=0;m234=0;
}

if(main_array[23]==3)
{
	m235=0;m231=1;m232=1;m233=1;m234=0;
}

if(main_array[23]==4)
{
	m235=0;m231=1;m232=1;m233=1;m234=1;
}

if(main_array[23]==5)
{
	m235=1;m231=0;m232=0;m233=0;m234=0;
}

if(main_array[23]==6)
{
	m235=1;m231=1;m232=0;m233=0;m234=0;
}

if(main_array[23]==7)
{
	m235=1;m231=1;m232=1;m233=0;m234=0;
}

if(main_array[23]==8)
{
	m235=1;m231=1;m232=1;m233=1;m234=0;
}

if(main_array[23]==9)
{
	m235=1;m231=1;m232=1;m233=1;m234=1;
}

///////////////////////////////////////

if(main_array[24]==0)
{
	m245=0;m241=0;m242=0;m243=0;m244=0;
}

if(main_array[24]==1)
{
	m245=0;m241=1;m242=0;m243=0;m244=0;
}

if(main_array[24]==2)
{
	m245=0;m241=1;m242=1;m243=0;m244=0;
}

if(main_array[24]==3)
{
	m245=0;m241=1;m242=1;m243=1;m244=0;
}

if(main_array[24]==4)
{
	m245=0;m241=1;m242=1;m243=1;m244=1;
}

if(main_array[24]==5)
{
	m245=1;m241=0;m242=0;m243=0;m244=0;
}

if(main_array[24]==6)
{
	m245=1;m241=1;m242=0;m243=0;m244=0;
}

if(main_array[24]==7)
{
	m245=1;m241=1;m242=1;m243=0;m244=0;
}

if(main_array[24]==8)
{
	m245=1;m241=1;m242=1;m243=1;m244=0;
}

if(main_array[24]==9)
{
	m245=1;m241=1;m242=1;m243=1;m244=1;
}

///////////////////////////////////////

if(main_array[25]==0)
{
	m255=0;m251=0;m252=0;m253=0;m254=0;
}

if(main_array[25]==1)
{
	m255=0;m251=1;m252=0;m253=0;m254=0;
}

if(main_array[25]==2)
{
	m255=0;m251=1;m252=1;m253=0;m254=0;
}

if(main_array[25]==3)
{
	m255=0;m251=1;m252=1;m253=1;m254=0;
}

if(main_array[25]==4)
{
	m255=0;m251=1;m252=1;m253=1;m254=1;
}

if(main_array[25]==5)
{
	m255=1;m251=0;m252=0;m253=0;m254=0;
}

if(main_array[25]==6)
{
	m255=1;m251=1;m252=0;m253=0;m254=0;
}

if(main_array[25]==7)
{
	m255=1;m251=1;m252=1;m253=0;m254=0;
}

if(main_array[25]==8)
{
	m255=1;m251=1;m252=1;m253=1;m254=0;
}

if(main_array[25]==9)
{
	m255=1;m251=1;m252=1;m253=1;m254=1;
}

///////////////////////////////////////

if(main_array[26]==0)
{
	m265=0;m261=0;m262=0;m263=0;m264=0;
}

if(main_array[26]==1)
{
	m265=0;m261=1;m262=0;m263=0;m264=0;
}

if(main_array[26]==2)
{
	m265=0;m261=1;m262=1;m263=0;m264=0;
}

if(main_array[26]==3)
{
	m265=0;m261=1;m262=1;m263=1;m264=0;
}

if(main_array[26]==4)
{
	m265=0;m261=1;m262=1;m263=1;m264=1;
}

if(main_array[26]==5)
{
	m265=1;m261=0;m262=0;m263=0;m264=0;
}

if(main_array[26]==6)
{
	m265=1;m261=1;m262=0;m263=0;m264=0;
}

if(main_array[26]==7)
{
	m265=1;m261=1;m262=1;m263=0;m264=0;
}

if(main_array[26]==8)
{
	m265=1;m261=1;m262=1;m263=1;m264=0;
}

if(main_array[26]==9)
{
	m265=1;m261=1;m262=1;m263=1;m264=1;
}


///////////////////////////////////////

if(main_array[27]==0)
{
	m275=0;m271=0;m272=0;m273=0;m274=0;
}

if(main_array[27]==1)
{
	m275=0;m271=1;m272=0;m273=0;m274=0;
}

if(main_array[27]==2)
{
	m275=0;m271=1;m272=1;m273=0;m274=0;
}

if(main_array[27]==3)
{
	m275=0;m271=1;m272=1;m273=1;m274=0;
}

if(main_array[27]==4)
{
	m275=0;m271=1;m272=1;m273=1;m274=1;
}

if(main_array[27]==5)
{
	m275=1;m271=0;m272=0;m273=0;m274=0;
}

if(main_array[27]==6)
{
	m275=1;m271=1;m272=0;m273=0;m274=0;
}

if(main_array[27]==7)
{
	m275=1;m271=1;m272=1;m273=0;m274=0;
}

if(main_array[27]==8)
{
	m275=1;m271=1;m272=1;m273=1;m274=0;
}

if(main_array[27]==9)
{
	m275=1;m271=1;m272=1;m273=1;m274=1;
}


///////////////////////////////////////

if(main_array[28]==0)
{
	m285=0;m281=0;m282=0;m283=0;m284=0;
}

if(main_array[28]==1)
{
	m285=0;m281=1;m282=0;m283=0;m284=0;
}

if(main_array[28]==2)
{
	m285=0;m281=1;m282=1;m283=0;m284=0;
}

if(main_array[28]==3)
{
	m285=0;m281=1;m282=1;m283=1;m284=0;
}

if(main_array[28]==4)
{
	m285=0;m281=1;m282=1;m283=1;m284=1;
}

if(main_array[28]==5)
{
	m285=1;m281=0;m282=0;m283=0;m284=0;
}

if(main_array[28]==6)
{
	m285=1;m281=1;m282=0;m283=0;m284=0;
}

if(main_array[28]==7)
{
	m285=1;m281=1;m282=1;m283=0;m284=0;
}

if(main_array[28]==8)
{
	m285=1;m281=1;m282=1;m283=1;m284=0;
}

if(main_array[28]==9)
{
	m285=1;m281=1;m282=1;m283=1;m284=1;
}

///////////////////////////////////////

if(main_array[29]==0)
{
	m295=0;m291=0;m292=0;m293=0;m294=0;
}

if(main_array[29]==1)
{
	m295=0;m291=1;m292=0;m293=0;m294=0;
}

if(main_array[29]==2)
{
	m295=0;m291=1;m292=1;m293=0;m294=0;
}

if(main_array[29]==3)
{
	m295=0;m291=1;m292=1;m293=1;m294=0;
}

if(main_array[29]==4)
{
	m295=0;m291=1;m292=1;m293=1;m294=1;
}

if(main_array[29]==5)
{
	m295=1;m291=0;m292=0;m293=0;m294=0;
}

if(main_array[29]==6)
{
	m295=1;m291=1;m292=0;m293=0;m294=0;
}

if(main_array[29]==7)
{
	m295=1;m291=1;m292=1;m293=0;m294=0;
}

if(main_array[29]==8)
{
	m295=1;m291=1;m292=1;m293=1;m294=0;
}

if(main_array[29]==9)
{
	m295=1;m291=1;m292=1;m293=1;m294=1;
}

///////////////////////////////////////

if(main_array[30]==0)
{
	m305=0;m301=0;m302=0;m303=0;m304=0;
}

if(main_array[30]==1)
{
	m305=0;m301=1;m302=0;m303=0;m304=0;
}

if(main_array[30]==2)
{
	m305=0;m301=1;m302=1;m303=0;m304=0;
}

if(main_array[30]==3)
{
	m305=0;m301=1;m302=1;m303=1;m304=0;
}

if(main_array[30]==4)
{
	m305=0;m301=1;m302=1;m303=1;m304=1;
}

if(main_array[30]==5)
{
	m305=1;m301=0;m302=0;m303=0;m304=0;
}

if(main_array[30]==6)
{
	m305=1;m301=1;m302=0;m303=0;m304=0;
}

if(main_array[30]==7)
{
	m305=1;m301=1;m302=1;m303=0;m304=0;
}

if(main_array[30]==8)
{
	m305=1;m301=1;m302=1;m303=1;m304=0;
}

if(main_array[30]==9)
{
	m305=1;m301=1;m302=1;m303=1;m304=1;
}




_1keta_func();

function _1keta_func()
{
var c = document.getElementById("sample");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 1000, 600);

ctx.fillStyle = 'rgb(00,00,00)';
ctx.fillRect(180,5,765,15);
ctx.fillRect(180,20+20*5+25+20,765,15);
ctx.fillRect(170,5,15,20+20*5+25+20+10);
ctx.fillRect(935,5,15,20+20*5+25+20+10);

ctx.fillRect(180,20+20+20,765,5);

ctx.fillRect(20+900,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*1,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*2,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*3,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*4,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*5,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*6,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*7,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*8,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*9,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*10,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*11,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*12,5,5,20+20*5+25+20+10)
ctx.fillRect(20+900-25*13,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*14,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*15,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*16,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*17,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*18,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*19,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*20,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*21,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*22,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*23,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*24,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*25,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*26,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*27,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*28,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*29,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*30,5,5,20+20*5+25+20+10);


if(m15==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20); 
ctx.lineTo(25+900,20); 
ctx.lineTo(35+900,30); 
ctx.lineTo(25+900,40);
ctx.lineTo(20+900,40);
ctx.lineTo(10+900,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m15==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20); 
ctx.lineTo(25+900,20+20); 
ctx.lineTo(35+900,30+20); 
ctx.lineTo(25+900,40+20);
ctx.lineTo(20+900,40+20);
ctx.lineTo(10+900,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m11==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20+25); 
ctx.lineTo(25+900,20+20+25); 
ctx.lineTo(35+900,30+20+25); 
ctx.lineTo(25+900,40+20+25);
ctx.lineTo(20+900,40+20+25);
ctx.lineTo(10+900,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m11==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20+25+20); 
ctx.lineTo(25+900,20+20+25+20); 
ctx.lineTo(35+900,30+20+25+20); 
ctx.lineTo(25+900,40+20+25+20);
ctx.lineTo(20+900,40+20+25+20);
ctx.lineTo(10+900,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m12==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*2+25); 
ctx.lineTo(25+900,20+20*2+25); 
ctx.lineTo(35+900,30+20*2+25); 
ctx.lineTo(25+900,40+20*2+25);
ctx.lineTo(20+900,40+20*2+25);
ctx.lineTo(10+900,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m12==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*2+25+20); 
ctx.lineTo(25+900,20+20*2+25+20); 
ctx.lineTo(35+900,30+20*2+25+20); 
ctx.lineTo(25+900,40+20*2+25+20);
ctx.lineTo(20+900,40+20*2+25+20);
ctx.lineTo(10+900,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m13==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*3+25); 
ctx.lineTo(25+900,20+20*3+25); 
ctx.lineTo(35+900,30+20*3+25); 
ctx.lineTo(25+900,40+20*3+25);
ctx.lineTo(20+900,40+20*3+25);
ctx.lineTo(10+900,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m13==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*3+25+20); 
ctx.lineTo(25+900,20+20*3+25+20); 
ctx.lineTo(35+900,30+20*3+25+20); 
ctx.lineTo(25+900,40+20*3+25+20);
ctx.lineTo(20+900,40+20*3+25+20);
ctx.lineTo(10+900,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m14==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*4+25); 
ctx.lineTo(25+900,20+20*4+25); 
ctx.lineTo(35+900,30+20*4+25); 
ctx.lineTo(25+900,40+20*4+25);
ctx.lineTo(20+900,40+20*4+25);
ctx.lineTo(10+900,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m14==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*4+25+20); 
ctx.lineTo(25+900,20+20*4+25+20); 
ctx.lineTo(35+900,30+20*4+25+20); 
ctx.lineTo(25+900,40+20*4+25+20);
ctx.lineTo(20+900,40+20*4+25+20);
ctx.lineTo(10+900,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m25==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20); 
ctx.lineTo(25+900-25*1,20); 
ctx.lineTo(35+900-25*1,30); 
ctx.lineTo(25+900-25*1,40);
ctx.lineTo(20+900-25*1,40);
ctx.lineTo(10+900-25*1,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m25==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20); 
ctx.lineTo(25+900-25*1,20+20); 
ctx.lineTo(35+900-25*1,30+20); 
ctx.lineTo(25+900-25*1,40+20);
ctx.lineTo(20+900-25*1,40+20);
ctx.lineTo(10+900-25*1,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m21==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20+25); 
ctx.lineTo(25+900-25*1,20+20+25); 
ctx.lineTo(35+900-25*1,30+20+25); 
ctx.lineTo(25+900-25*1,40+20+25);
ctx.lineTo(20+900-25*1,40+20+25);
ctx.lineTo(10+900-25*1,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m21==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20+25+20); 
ctx.lineTo(25+900-25*1,20+20+25+20); 
ctx.lineTo(35+900-25*1,30+20+25+20); 
ctx.lineTo(25+900-25*1,40+20+25+20);
ctx.lineTo(20+900-25*1,40+20+25+20);
ctx.lineTo(10+900-25*1,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m22==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*2+25); 
ctx.lineTo(25+900-25*1,20+20*2+25); 
ctx.lineTo(35+900-25*1,30+20*2+25); 
ctx.lineTo(25+900-25*1,40+20*2+25);
ctx.lineTo(20+900-25*1,40+20*2+25);
ctx.lineTo(10+900-25*1,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m22==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*2+25+20); 
ctx.lineTo(25+900-25*1,20+20*2+25+20); 
ctx.lineTo(35+900-25*1,30+20*2+25+20); 
ctx.lineTo(25+900-25*1,40+20*2+25+20);
ctx.lineTo(20+900-25*1,40+20*2+25+20);
ctx.lineTo(10+900-25*1,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m23==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*3+25); 
ctx.lineTo(25+900-25*1,20+20*3+25); 
ctx.lineTo(35+900-25*1,30+20*3+25); 
ctx.lineTo(25+900-25*1,40+20*3+25);
ctx.lineTo(20+900-25*1,40+20*3+25);
ctx.lineTo(10+900-25*1,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m23==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*3+25+20); 
ctx.lineTo(25+900-25*1,20+20*3+25+20); 
ctx.lineTo(35+900-25*1,30+20*3+25+20); 
ctx.lineTo(25+900-25*1,40+20*3+25+20);
ctx.lineTo(20+900-25*1,40+20*3+25+20);
ctx.lineTo(10+900-25*1,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m24==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*4+25); 
ctx.lineTo(25+900-25*1,20+20*4+25); 
ctx.lineTo(35+900-25*1,30+20*4+25); 
ctx.lineTo(25+900-25*1,40+20*4+25);
ctx.lineTo(20+900-25*1,40+20*4+25);
ctx.lineTo(10+900-25*1,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m24==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*4+25+20); 
ctx.lineTo(25+900-25*1,20+20*4+25+20); 
ctx.lineTo(35+900-25*1,30+20*4+25+20); 
ctx.lineTo(25+900-25*1,40+20*4+25+20);
ctx.lineTo(20+900-25*1,40+20*4+25+20);
ctx.lineTo(10+900-25*1,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m35==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20); 
ctx.lineTo(25+900-25*2,20); 
ctx.lineTo(35+900-25*2,30); 
ctx.lineTo(25+900-25*2,40);
ctx.lineTo(20+900-25*2,40);
ctx.lineTo(10+900-25*2,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m35==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20); 
ctx.lineTo(25+900-25*2,20+20); 
ctx.lineTo(35+900-25*2,30+20); 
ctx.lineTo(25+900-25*2,40+20);
ctx.lineTo(20+900-25*2,40+20);
ctx.lineTo(10+900-25*2,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m31==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20+25); 
ctx.lineTo(25+900-25*2,20+20+25); 
ctx.lineTo(35+900-25*2,30+20+25); 
ctx.lineTo(25+900-25*2,40+20+25);
ctx.lineTo(20+900-25*2,40+20+25);
ctx.lineTo(10+900-25*2,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m31==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20+25+20); 
ctx.lineTo(25+900-25*2,20+20+25+20); 
ctx.lineTo(35+900-25*2,30+20+25+20); 
ctx.lineTo(25+900-25*2,40+20+25+20);
ctx.lineTo(20+900-25*2,40+20+25+20);
ctx.lineTo(10+900-25*2,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m32==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*2+25); 
ctx.lineTo(25+900-25*2,20+20*2+25); 
ctx.lineTo(35+900-25*2,30+20*2+25); 
ctx.lineTo(25+900-25*2,40+20*2+25);
ctx.lineTo(20+900-25*2,40+20*2+25);
ctx.lineTo(10+900-25*2,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m32==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*2+25+20); 
ctx.lineTo(25+900-25*2,20+20*2+25+20); 
ctx.lineTo(35+900-25*2,30+20*2+25+20); 
ctx.lineTo(25+900-25*2,40+20*2+25+20);
ctx.lineTo(20+900-25*2,40+20*2+25+20);
ctx.lineTo(10+900-25*2,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m33==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*3+25); 
ctx.lineTo(25+900-25*2,20+20*3+25); 
ctx.lineTo(35+900-25*2,30+20*3+25); 
ctx.lineTo(25+900-25*2,40+20*3+25);
ctx.lineTo(20+900-25*2,40+20*3+25);
ctx.lineTo(10+900-25*2,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m33==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*3+25+20); 
ctx.lineTo(25+900-25*2,20+20*3+25+20); 
ctx.lineTo(35+900-25*2,30+20*3+25+20); 
ctx.lineTo(25+900-25*2,40+20*3+25+20);
ctx.lineTo(20+900-25*2,40+20*3+25+20);
ctx.lineTo(10+900-25*2,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m34==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*4+25); 
ctx.lineTo(25+900-25*2,20+20*4+25); 
ctx.lineTo(35+900-25*2,30+20*4+25); 
ctx.lineTo(25+900-25*2,40+20*4+25);
ctx.lineTo(20+900-25*2,40+20*4+25);
ctx.lineTo(10+900-25*2,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m34==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*4+25+20); 
ctx.lineTo(25+900-25*2,20+20*4+25+20); 
ctx.lineTo(35+900-25*2,30+20*4+25+20); 
ctx.lineTo(25+900-25*2,40+20*4+25+20);
ctx.lineTo(20+900-25*2,40+20*4+25+20);
ctx.lineTo(10+900-25*2,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m45==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20); 
ctx.lineTo(25+900-25*3,20); 
ctx.lineTo(35+900-25*3,30); 
ctx.lineTo(25+900-25*3,40);
ctx.lineTo(20+900-25*3,40);
ctx.lineTo(10+900-25*3,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m45==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20); 
ctx.lineTo(25+900-25*3,20+20); 
ctx.lineTo(35+900-25*3,30+20); 
ctx.lineTo(25+900-25*3,40+20);
ctx.lineTo(20+900-25*3,40+20);
ctx.lineTo(10+900-25*3,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m41==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20+25); 
ctx.lineTo(25+900-25*3,20+20+25); 
ctx.lineTo(35+900-25*3,30+20+25); 
ctx.lineTo(25+900-25*3,40+20+25);
ctx.lineTo(20+900-25*3,40+20+25);
ctx.lineTo(10+900-25*3,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m41==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20+25+20); 
ctx.lineTo(25+900-25*3,20+20+25+20); 
ctx.lineTo(35+900-25*3,30+20+25+20); 
ctx.lineTo(25+900-25*3,40+20+25+20);
ctx.lineTo(20+900-25*3,40+20+25+20);
ctx.lineTo(10+900-25*3,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m42==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*2+25); 
ctx.lineTo(25+900-25*3,20+20*2+25); 
ctx.lineTo(35+900-25*3,30+20*2+25); 
ctx.lineTo(25+900-25*3,40+20*2+25);
ctx.lineTo(20+900-25*3,40+20*2+25);
ctx.lineTo(10+900-25*3,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m42==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*2+25+20); 
ctx.lineTo(25+900-25*3,20+20*2+25+20); 
ctx.lineTo(35+900-25*3,30+20*2+25+20); 
ctx.lineTo(25+900-25*3,40+20*2+25+20);
ctx.lineTo(20+900-25*3,40+20*2+25+20);
ctx.lineTo(10+900-25*3,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m43==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*3+25); 
ctx.lineTo(25+900-25*3,20+20*3+25); 
ctx.lineTo(35+900-25*3,30+20*3+25); 
ctx.lineTo(25+900-25*3,40+20*3+25);
ctx.lineTo(20+900-25*3,40+20*3+25);
ctx.lineTo(10+900-25*3,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m43==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*3+25+20); 
ctx.lineTo(25+900-25*3,20+20*3+25+20); 
ctx.lineTo(35+900-25*3,30+20*3+25+20); 
ctx.lineTo(25+900-25*3,40+20*3+25+20);
ctx.lineTo(20+900-25*3,40+20*3+25+20);
ctx.lineTo(10+900-25*3,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m44==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*4+25); 
ctx.lineTo(25+900-25*3,20+20*4+25); 
ctx.lineTo(35+900-25*3,30+20*4+25); 
ctx.lineTo(25+900-25*3,40+20*4+25);
ctx.lineTo(20+900-25*3,40+20*4+25);
ctx.lineTo(10+900-25*3,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m44==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*4+25+20); 
ctx.lineTo(25+900-25*3,20+20*4+25+20); 
ctx.lineTo(35+900-25*3,30+20*4+25+20); 
ctx.lineTo(25+900-25*3,40+20*4+25+20);
ctx.lineTo(20+900-25*3,40+20*4+25+20);
ctx.lineTo(10+900-25*3,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m55==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20); 
ctx.lineTo(25+900-25*4,20); 
ctx.lineTo(35+900-25*4,30); 
ctx.lineTo(25+900-25*4,40);
ctx.lineTo(20+900-25*4,40);
ctx.lineTo(10+900-25*4,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m55==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20); 
ctx.lineTo(25+900-25*4,20+20); 
ctx.lineTo(35+900-25*4,30+20); 
ctx.lineTo(25+900-25*4,40+20);
ctx.lineTo(20+900-25*4,40+20);
ctx.lineTo(10+900-25*4,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m51==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20+25); 
ctx.lineTo(25+900-25*4,20+20+25); 
ctx.lineTo(35+900-25*4,30+20+25); 
ctx.lineTo(25+900-25*4,40+20+25);
ctx.lineTo(20+900-25*4,40+20+25);
ctx.lineTo(10+900-25*4,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m51==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20+25+20); 
ctx.lineTo(25+900-25*4,20+20+25+20); 
ctx.lineTo(35+900-25*4,30+20+25+20); 
ctx.lineTo(25+900-25*4,40+20+25+20);
ctx.lineTo(20+900-25*4,40+20+25+20);
ctx.lineTo(10+900-25*4,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m52==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*2+25); 
ctx.lineTo(25+900-25*4,20+20*2+25); 
ctx.lineTo(35+900-25*4,30+20*2+25); 
ctx.lineTo(25+900-25*4,40+20*2+25);
ctx.lineTo(20+900-25*4,40+20*2+25);
ctx.lineTo(10+900-25*4,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m52==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*2+25+20); 
ctx.lineTo(25+900-25*4,20+20*2+25+20); 
ctx.lineTo(35+900-25*4,30+20*2+25+20); 
ctx.lineTo(25+900-25*4,40+20*2+25+20);
ctx.lineTo(20+900-25*4,40+20*2+25+20);
ctx.lineTo(10+900-25*4,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m53==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*3+25); 
ctx.lineTo(25+900-25*4,20+20*3+25); 
ctx.lineTo(35+900-25*4,30+20*3+25); 
ctx.lineTo(25+900-25*4,40+20*3+25);
ctx.lineTo(20+900-25*4,40+20*3+25);
ctx.lineTo(10+900-25*4,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m53==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*3+25+20); 
ctx.lineTo(25+900-25*4,20+20*3+25+20); 
ctx.lineTo(35+900-25*4,30+20*3+25+20); 
ctx.lineTo(25+900-25*4,40+20*3+25+20);
ctx.lineTo(20+900-25*4,40+20*3+25+20);
ctx.lineTo(10+900-25*4,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m54==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*4+25); 
ctx.lineTo(25+900-25*4,20+20*4+25); 
ctx.lineTo(35+900-25*4,30+20*4+25); 
ctx.lineTo(25+900-25*4,40+20*4+25);
ctx.lineTo(20+900-25*4,40+20*4+25);
ctx.lineTo(10+900-25*4,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m54==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*4+25+20); 
ctx.lineTo(25+900-25*4,20+20*4+25+20); 
ctx.lineTo(35+900-25*4,30+20*4+25+20); 
ctx.lineTo(25+900-25*4,40+20*4+25+20);
ctx.lineTo(20+900-25*4,40+20*4+25+20);
ctx.lineTo(10+900-25*4,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m65==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20); 
ctx.lineTo(25+900-25*5,20); 
ctx.lineTo(35+900-25*5,30); 
ctx.lineTo(25+900-25*5,40);
ctx.lineTo(20+900-25*5,40);
ctx.lineTo(10+900-25*5,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m65==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20); 
ctx.lineTo(25+900-25*5,20+20); 
ctx.lineTo(35+900-25*5,30+20); 
ctx.lineTo(25+900-25*5,40+20);
ctx.lineTo(20+900-25*5,40+20);
ctx.lineTo(10+900-25*5,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m61==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20+25); 
ctx.lineTo(25+900-25*5,20+20+25); 
ctx.lineTo(35+900-25*5,30+20+25); 
ctx.lineTo(25+900-25*5,40+20+25);
ctx.lineTo(20+900-25*5,40+20+25);
ctx.lineTo(10+900-25*5,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m61==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20+25+20); 
ctx.lineTo(25+900-25*5,20+20+25+20); 
ctx.lineTo(35+900-25*5,30+20+25+20); 
ctx.lineTo(25+900-25*5,40+20+25+20);
ctx.lineTo(20+900-25*5,40+20+25+20);
ctx.lineTo(10+900-25*5,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m62==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*2+25); 
ctx.lineTo(25+900-25*5,20+20*2+25); 
ctx.lineTo(35+900-25*5,30+20*2+25); 
ctx.lineTo(25+900-25*5,40+20*2+25);
ctx.lineTo(20+900-25*5,40+20*2+25);
ctx.lineTo(10+900-25*5,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m62==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*2+25+20); 
ctx.lineTo(25+900-25*5,20+20*2+25+20); 
ctx.lineTo(35+900-25*5,30+20*2+25+20); 
ctx.lineTo(25+900-25*5,40+20*2+25+20);
ctx.lineTo(20+900-25*5,40+20*2+25+20);
ctx.lineTo(10+900-25*5,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m63==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*3+25); 
ctx.lineTo(25+900-25*5,20+20*3+25); 
ctx.lineTo(35+900-25*5,30+20*3+25); 
ctx.lineTo(25+900-25*5,40+20*3+25);
ctx.lineTo(20+900-25*5,40+20*3+25);
ctx.lineTo(10+900-25*5,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m63==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*3+25+20); 
ctx.lineTo(25+900-25*5,20+20*3+25+20); 
ctx.lineTo(35+900-25*5,30+20*3+25+20); 
ctx.lineTo(25+900-25*5,40+20*3+25+20);
ctx.lineTo(20+900-25*5,40+20*3+25+20);
ctx.lineTo(10+900-25*5,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m64==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*4+25); 
ctx.lineTo(25+900-25*5,20+20*4+25); 
ctx.lineTo(35+900-25*5,30+20*4+25); 
ctx.lineTo(25+900-25*5,40+20*4+25);
ctx.lineTo(20+900-25*5,40+20*4+25);
ctx.lineTo(10+900-25*5,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m64==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*4+25+20); 
ctx.lineTo(25+900-25*5,20+20*4+25+20); 
ctx.lineTo(35+900-25*5,30+20*4+25+20); 
ctx.lineTo(25+900-25*5,40+20*4+25+20);
ctx.lineTo(20+900-25*5,40+20*4+25+20);
ctx.lineTo(10+900-25*5,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m75==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20); 
ctx.lineTo(25+900-25*6,20); 
ctx.lineTo(35+900-25*6,30); 
ctx.lineTo(25+900-25*6,40);
ctx.lineTo(20+900-25*6,40);
ctx.lineTo(10+900-25*6,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m75==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20); 
ctx.lineTo(25+900-25*6,20+20); 
ctx.lineTo(35+900-25*6,30+20); 
ctx.lineTo(25+900-25*6,40+20);
ctx.lineTo(20+900-25*6,40+20);
ctx.lineTo(10+900-25*6,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m71==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20+25); 
ctx.lineTo(25+900-25*6,20+20+25); 
ctx.lineTo(35+900-25*6,30+20+25); 
ctx.lineTo(25+900-25*6,40+20+25);
ctx.lineTo(20+900-25*6,40+20+25);
ctx.lineTo(10+900-25*6,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m71==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20+25+20); 
ctx.lineTo(25+900-25*6,20+20+25+20); 
ctx.lineTo(35+900-25*6,30+20+25+20); 
ctx.lineTo(25+900-25*6,40+20+25+20);
ctx.lineTo(20+900-25*6,40+20+25+20);
ctx.lineTo(10+900-25*6,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m72==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*2+25); 
ctx.lineTo(25+900-25*6,20+20*2+25); 
ctx.lineTo(35+900-25*6,30+20*2+25); 
ctx.lineTo(25+900-25*6,40+20*2+25);
ctx.lineTo(20+900-25*6,40+20*2+25);
ctx.lineTo(10+900-25*6,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m72==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*2+25+20); 
ctx.lineTo(25+900-25*6,20+20*2+25+20); 
ctx.lineTo(35+900-25*6,30+20*2+25+20); 
ctx.lineTo(25+900-25*6,40+20*2+25+20);
ctx.lineTo(20+900-25*6,40+20*2+25+20);
ctx.lineTo(10+900-25*6,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m73==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*3+25); 
ctx.lineTo(25+900-25*6,20+20*3+25); 
ctx.lineTo(35+900-25*6,30+20*3+25); 
ctx.lineTo(25+900-25*6,40+20*3+25);
ctx.lineTo(20+900-25*6,40+20*3+25);
ctx.lineTo(10+900-25*6,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m73==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*3+25+20); 
ctx.lineTo(25+900-25*6,20+20*3+25+20); 
ctx.lineTo(35+900-25*6,30+20*3+25+20); 
ctx.lineTo(25+900-25*6,40+20*3+25+20);
ctx.lineTo(20+900-25*6,40+20*3+25+20);
ctx.lineTo(10+900-25*6,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m74==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*4+25); 
ctx.lineTo(25+900-25*6,20+20*4+25); 
ctx.lineTo(35+900-25*6,30+20*4+25); 
ctx.lineTo(25+900-25*6,40+20*4+25);
ctx.lineTo(20+900-25*6,40+20*4+25);
ctx.lineTo(10+900-25*6,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m74==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*4+25+20); 
ctx.lineTo(25+900-25*6,20+20*4+25+20); 
ctx.lineTo(35+900-25*6,30+20*4+25+20); 
ctx.lineTo(25+900-25*6,40+20*4+25+20);
ctx.lineTo(20+900-25*6,40+20*4+25+20);
ctx.lineTo(10+900-25*6,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m85==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20); 
ctx.lineTo(25+900-25*7,20); 
ctx.lineTo(35+900-25*7,30); 
ctx.lineTo(25+900-25*7,40);
ctx.lineTo(20+900-25*7,40);
ctx.lineTo(10+900-25*7,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m85==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20); 
ctx.lineTo(25+900-25*7,20+20); 
ctx.lineTo(35+900-25*7,30+20); 
ctx.lineTo(25+900-25*7,40+20);
ctx.lineTo(20+900-25*7,40+20);
ctx.lineTo(10+900-25*7,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m81==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20+25); 
ctx.lineTo(25+900-25*7,20+20+25); 
ctx.lineTo(35+900-25*7,30+20+25); 
ctx.lineTo(25+900-25*7,40+20+25);
ctx.lineTo(20+900-25*7,40+20+25);
ctx.lineTo(10+900-25*7,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m81==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20+25+20); 
ctx.lineTo(25+900-25*7,20+20+25+20); 
ctx.lineTo(35+900-25*7,30+20+25+20); 
ctx.lineTo(25+900-25*7,40+20+25+20);
ctx.lineTo(20+900-25*7,40+20+25+20);
ctx.lineTo(10+900-25*7,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m82==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*2+25); 
ctx.lineTo(25+900-25*7,20+20*2+25); 
ctx.lineTo(35+900-25*7,30+20*2+25); 
ctx.lineTo(25+900-25*7,40+20*2+25);
ctx.lineTo(20+900-25*7,40+20*2+25);
ctx.lineTo(10+900-25*7,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m82==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*2+25+20); 
ctx.lineTo(25+900-25*7,20+20*2+25+20); 
ctx.lineTo(35+900-25*7,30+20*2+25+20); 
ctx.lineTo(25+900-25*7,40+20*2+25+20);
ctx.lineTo(20+900-25*7,40+20*2+25+20);
ctx.lineTo(10+900-25*7,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m83==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*3+25); 
ctx.lineTo(25+900-25*7,20+20*3+25); 
ctx.lineTo(35+900-25*7,30+20*3+25); 
ctx.lineTo(25+900-25*7,40+20*3+25);
ctx.lineTo(20+900-25*7,40+20*3+25);
ctx.lineTo(10+900-25*7,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m83==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*3+25+20); 
ctx.lineTo(25+900-25*7,20+20*3+25+20); 
ctx.lineTo(35+900-25*7,30+20*3+25+20); 
ctx.lineTo(25+900-25*7,40+20*3+25+20);
ctx.lineTo(20+900-25*7,40+20*3+25+20);
ctx.lineTo(10+900-25*7,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m84==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*4+25); 
ctx.lineTo(25+900-25*7,20+20*4+25); 
ctx.lineTo(35+900-25*7,30+20*4+25); 
ctx.lineTo(25+900-25*7,40+20*4+25);
ctx.lineTo(20+900-25*7,40+20*4+25);
ctx.lineTo(10+900-25*7,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m84==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*4+25+20); 
ctx.lineTo(25+900-25*7,20+20*4+25+20); 
ctx.lineTo(35+900-25*7,30+20*4+25+20); 
ctx.lineTo(25+900-25*7,40+20*4+25+20);
ctx.lineTo(20+900-25*7,40+20*4+25+20);
ctx.lineTo(10+900-25*7,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m95==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20); 
ctx.lineTo(25+900-25*8,20); 
ctx.lineTo(35+900-25*8,30); 
ctx.lineTo(25+900-25*8,40);
ctx.lineTo(20+900-25*8,40);
ctx.lineTo(10+900-25*8,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m95==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20); 
ctx.lineTo(25+900-25*8,20+20); 
ctx.lineTo(35+900-25*8,30+20); 
ctx.lineTo(25+900-25*8,40+20);
ctx.lineTo(20+900-25*8,40+20);
ctx.lineTo(10+900-25*8,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m91==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20+25); 
ctx.lineTo(25+900-25*8,20+20+25); 
ctx.lineTo(35+900-25*8,30+20+25); 
ctx.lineTo(25+900-25*8,40+20+25);
ctx.lineTo(20+900-25*8,40+20+25);
ctx.lineTo(10+900-25*8,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m91==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20+25+20); 
ctx.lineTo(25+900-25*8,20+20+25+20); 
ctx.lineTo(35+900-25*8,30+20+25+20); 
ctx.lineTo(25+900-25*8,40+20+25+20);
ctx.lineTo(20+900-25*8,40+20+25+20);
ctx.lineTo(10+900-25*8,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m92==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*2+25); 
ctx.lineTo(25+900-25*8,20+20*2+25); 
ctx.lineTo(35+900-25*8,30+20*2+25); 
ctx.lineTo(25+900-25*8,40+20*2+25);
ctx.lineTo(20+900-25*8,40+20*2+25);
ctx.lineTo(10+900-25*8,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m92==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*2+25+20); 
ctx.lineTo(25+900-25*8,20+20*2+25+20); 
ctx.lineTo(35+900-25*8,30+20*2+25+20); 
ctx.lineTo(25+900-25*8,40+20*2+25+20);
ctx.lineTo(20+900-25*8,40+20*2+25+20);
ctx.lineTo(10+900-25*8,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m93==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*3+25); 
ctx.lineTo(25+900-25*8,20+20*3+25); 
ctx.lineTo(35+900-25*8,30+20*3+25); 
ctx.lineTo(25+900-25*8,40+20*3+25);
ctx.lineTo(20+900-25*8,40+20*3+25);
ctx.lineTo(10+900-25*8,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m93==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*3+25+20); 
ctx.lineTo(25+900-25*8,20+20*3+25+20); 
ctx.lineTo(35+900-25*8,30+20*3+25+20); 
ctx.lineTo(25+900-25*8,40+20*3+25+20);
ctx.lineTo(20+900-25*8,40+20*3+25+20);
ctx.lineTo(10+900-25*8,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m94==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*4+25); 
ctx.lineTo(25+900-25*8,20+20*4+25); 
ctx.lineTo(35+900-25*8,30+20*4+25); 
ctx.lineTo(25+900-25*8,40+20*4+25);
ctx.lineTo(20+900-25*8,40+20*4+25);
ctx.lineTo(10+900-25*8,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m94==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*4+25+20); 
ctx.lineTo(25+900-25*8,20+20*4+25+20); 
ctx.lineTo(35+900-25*8,30+20*4+25+20); 
ctx.lineTo(25+900-25*8,40+20*4+25+20);
ctx.lineTo(20+900-25*8,40+20*4+25+20);
ctx.lineTo(10+900-25*8,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m105==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20); 
ctx.lineTo(25+900-25*9,20); 
ctx.lineTo(35+900-25*9,30); 
ctx.lineTo(25+900-25*9,40);
ctx.lineTo(20+900-25*9,40);
ctx.lineTo(10+900-25*9,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m105==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20); 
ctx.lineTo(25+900-25*9,20+20); 
ctx.lineTo(35+900-25*9,30+20); 
ctx.lineTo(25+900-25*9,40+20);
ctx.lineTo(20+900-25*9,40+20);
ctx.lineTo(10+900-25*9,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m101==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20+25); 
ctx.lineTo(25+900-25*9,20+20+25); 
ctx.lineTo(35+900-25*9,30+20+25); 
ctx.lineTo(25+900-25*9,40+20+25);
ctx.lineTo(20+900-25*9,40+20+25);
ctx.lineTo(10+900-25*9,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m101==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20+25+20); 
ctx.lineTo(25+900-25*9,20+20+25+20); 
ctx.lineTo(35+900-25*9,30+20+25+20); 
ctx.lineTo(25+900-25*9,40+20+25+20);
ctx.lineTo(20+900-25*9,40+20+25+20);
ctx.lineTo(10+900-25*9,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m102==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*2+25); 
ctx.lineTo(25+900-25*9,20+20*2+25); 
ctx.lineTo(35+900-25*9,30+20*2+25); 
ctx.lineTo(25+900-25*9,40+20*2+25);
ctx.lineTo(20+900-25*9,40+20*2+25);
ctx.lineTo(10+900-25*9,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m102==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*2+25+20); 
ctx.lineTo(25+900-25*9,20+20*2+25+20); 
ctx.lineTo(35+900-25*9,30+20*2+25+20); 
ctx.lineTo(25+900-25*9,40+20*2+25+20);
ctx.lineTo(20+900-25*9,40+20*2+25+20);
ctx.lineTo(10+900-25*9,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m103==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*3+25); 
ctx.lineTo(25+900-25*9,20+20*3+25); 
ctx.lineTo(35+900-25*9,30+20*3+25); 
ctx.lineTo(25+900-25*9,40+20*3+25);
ctx.lineTo(20+900-25*9,40+20*3+25);
ctx.lineTo(10+900-25*9,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m103==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*3+25+20); 
ctx.lineTo(25+900-25*9,20+20*3+25+20); 
ctx.lineTo(35+900-25*9,30+20*3+25+20); 
ctx.lineTo(25+900-25*9,40+20*3+25+20);
ctx.lineTo(20+900-25*9,40+20*3+25+20);
ctx.lineTo(10+900-25*9,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m104==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*4+25); 
ctx.lineTo(25+900-25*9,20+20*4+25); 
ctx.lineTo(35+900-25*9,30+20*4+25); 
ctx.lineTo(25+900-25*9,40+20*4+25);
ctx.lineTo(20+900-25*9,40+20*4+25);
ctx.lineTo(10+900-25*9,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m104==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*4+25+20); 
ctx.lineTo(25+900-25*9,20+20*4+25+20); 
ctx.lineTo(35+900-25*9,30+20*4+25+20); 
ctx.lineTo(25+900-25*9,40+20*4+25+20);
ctx.lineTo(20+900-25*9,40+20*4+25+20);
ctx.lineTo(10+900-25*9,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m115==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20); 
ctx.lineTo(25+900-25*10,20); 
ctx.lineTo(35+900-25*10,30); 
ctx.lineTo(25+900-25*10,40);
ctx.lineTo(20+900-25*10,40);
ctx.lineTo(10+900-25*10,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m115==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20); 
ctx.lineTo(25+900-25*10,20+20); 
ctx.lineTo(35+900-25*10,30+20); 
ctx.lineTo(25+900-25*10,40+20);
ctx.lineTo(20+900-25*10,40+20);
ctx.lineTo(10+900-25*10,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m111==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20+25); 
ctx.lineTo(25+900-25*10,20+20+25); 
ctx.lineTo(35+900-25*10,30+20+25); 
ctx.lineTo(25+900-25*10,40+20+25);
ctx.lineTo(20+900-25*10,40+20+25);
ctx.lineTo(10+900-25*10,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m111==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20+25+20); 
ctx.lineTo(25+900-25*10,20+20+25+20); 
ctx.lineTo(35+900-25*10,30+20+25+20); 
ctx.lineTo(25+900-25*10,40+20+25+20);
ctx.lineTo(20+900-25*10,40+20+25+20);
ctx.lineTo(10+900-25*10,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m112==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*2+25); 
ctx.lineTo(25+900-25*10,20+20*2+25); 
ctx.lineTo(35+900-25*10,30+20*2+25); 
ctx.lineTo(25+900-25*10,40+20*2+25);
ctx.lineTo(20+900-25*10,40+20*2+25);
ctx.lineTo(10+900-25*10,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m112==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*2+25+20); 
ctx.lineTo(25+900-25*10,20+20*2+25+20); 
ctx.lineTo(35+900-25*10,30+20*2+25+20); 
ctx.lineTo(25+900-25*10,40+20*2+25+20);
ctx.lineTo(20+900-25*10,40+20*2+25+20);
ctx.lineTo(10+900-25*10,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m113==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*3+25); 
ctx.lineTo(25+900-25*10,20+20*3+25); 
ctx.lineTo(35+900-25*10,30+20*3+25); 
ctx.lineTo(25+900-25*10,40+20*3+25);
ctx.lineTo(20+900-25*10,40+20*3+25);
ctx.lineTo(10+900-25*10,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m113==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*3+25+20); 
ctx.lineTo(25+900-25*10,20+20*3+25+20); 
ctx.lineTo(35+900-25*10,30+20*3+25+20); 
ctx.lineTo(25+900-25*10,40+20*3+25+20);
ctx.lineTo(20+900-25*10,40+20*3+25+20);
ctx.lineTo(10+900-25*10,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m114==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*4+25); 
ctx.lineTo(25+900-25*10,20+20*4+25); 
ctx.lineTo(35+900-25*10,30+20*4+25); 
ctx.lineTo(25+900-25*10,40+20*4+25);
ctx.lineTo(20+900-25*10,40+20*4+25);
ctx.lineTo(10+900-25*10,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m114==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*4+25+20); 
ctx.lineTo(25+900-25*10,20+20*4+25+20); 
ctx.lineTo(35+900-25*10,30+20*4+25+20); 
ctx.lineTo(25+900-25*10,40+20*4+25+20);
ctx.lineTo(20+900-25*10,40+20*4+25+20);
ctx.lineTo(10+900-25*10,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m125==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20); 
ctx.lineTo(25+900-25*11,20); 
ctx.lineTo(35+900-25*11,30); 
ctx.lineTo(25+900-25*11,40);
ctx.lineTo(20+900-25*11,40);
ctx.lineTo(10+900-25*11,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m125==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20); 
ctx.lineTo(25+900-25*11,20+20); 
ctx.lineTo(35+900-25*11,30+20); 
ctx.lineTo(25+900-25*11,40+20);
ctx.lineTo(20+900-25*11,40+20);
ctx.lineTo(10+900-25*11,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m121==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20+25); 
ctx.lineTo(25+900-25*11,20+20+25); 
ctx.lineTo(35+900-25*11,30+20+25); 
ctx.lineTo(25+900-25*11,40+20+25);
ctx.lineTo(20+900-25*11,40+20+25);
ctx.lineTo(10+900-25*11,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m121==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20+25+20); 
ctx.lineTo(25+900-25*11,20+20+25+20); 
ctx.lineTo(35+900-25*11,30+20+25+20); 
ctx.lineTo(25+900-25*11,40+20+25+20);
ctx.lineTo(20+900-25*11,40+20+25+20);
ctx.lineTo(10+900-25*11,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m122==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*2+25); 
ctx.lineTo(25+900-25*11,20+20*2+25); 
ctx.lineTo(35+900-25*11,30+20*2+25); 
ctx.lineTo(25+900-25*11,40+20*2+25);
ctx.lineTo(20+900-25*11,40+20*2+25);
ctx.lineTo(10+900-25*11,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m122==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*2+25+20); 
ctx.lineTo(25+900-25*11,20+20*2+25+20); 
ctx.lineTo(35+900-25*11,30+20*2+25+20); 
ctx.lineTo(25+900-25*11,40+20*2+25+20);
ctx.lineTo(20+900-25*11,40+20*2+25+20);
ctx.lineTo(10+900-25*11,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m123==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*3+25); 
ctx.lineTo(25+900-25*11,20+20*3+25); 
ctx.lineTo(35+900-25*11,30+20*3+25); 
ctx.lineTo(25+900-25*11,40+20*3+25);
ctx.lineTo(20+900-25*11,40+20*3+25);
ctx.lineTo(10+900-25*11,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m123==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*3+25+20); 
ctx.lineTo(25+900-25*11,20+20*3+25+20); 
ctx.lineTo(35+900-25*11,30+20*3+25+20); 
ctx.lineTo(25+900-25*11,40+20*3+25+20);
ctx.lineTo(20+900-25*11,40+20*3+25+20);
ctx.lineTo(10+900-25*11,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m124==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*4+25); 
ctx.lineTo(25+900-25*11,20+20*4+25); 
ctx.lineTo(35+900-25*11,30+20*4+25); 
ctx.lineTo(25+900-25*11,40+20*4+25);
ctx.lineTo(20+900-25*11,40+20*4+25);
ctx.lineTo(10+900-25*11,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m124==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*4+25+20); 
ctx.lineTo(25+900-25*11,20+20*4+25+20); 
ctx.lineTo(35+900-25*11,30+20*4+25+20); 
ctx.lineTo(25+900-25*11,40+20*4+25+20);
ctx.lineTo(20+900-25*11,40+20*4+25+20);
ctx.lineTo(10+900-25*11,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m135==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20); 
ctx.lineTo(25+900-25*12,20); 
ctx.lineTo(35+900-25*12,30); 
ctx.lineTo(25+900-25*12,40);
ctx.lineTo(20+900-25*12,40);
ctx.lineTo(10+900-25*12,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m135==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20); 
ctx.lineTo(25+900-25*12,20+20); 
ctx.lineTo(35+900-25*12,30+20); 
ctx.lineTo(25+900-25*12,40+20);
ctx.lineTo(20+900-25*12,40+20);
ctx.lineTo(10+900-25*12,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m131==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20+25); 
ctx.lineTo(25+900-25*12,20+20+25); 
ctx.lineTo(35+900-25*12,30+20+25); 
ctx.lineTo(25+900-25*12,40+20+25);
ctx.lineTo(20+900-25*12,40+20+25);
ctx.lineTo(10+900-25*12,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m131==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20+25+20); 
ctx.lineTo(25+900-25*12,20+20+25+20); 
ctx.lineTo(35+900-25*12,30+20+25+20); 
ctx.lineTo(25+900-25*12,40+20+25+20);
ctx.lineTo(20+900-25*12,40+20+25+20);
ctx.lineTo(10+900-25*12,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m132==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*2+25); 
ctx.lineTo(25+900-25*12,20+20*2+25); 
ctx.lineTo(35+900-25*12,30+20*2+25); 
ctx.lineTo(25+900-25*12,40+20*2+25);
ctx.lineTo(20+900-25*12,40+20*2+25);
ctx.lineTo(10+900-25*12,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m132==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*2+25+20); 
ctx.lineTo(25+900-25*12,20+20*2+25+20); 
ctx.lineTo(35+900-25*12,30+20*2+25+20); 
ctx.lineTo(25+900-25*12,40+20*2+25+20);
ctx.lineTo(20+900-25*12,40+20*2+25+20);
ctx.lineTo(10+900-25*12,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m133==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*3+25); 
ctx.lineTo(25+900-25*12,20+20*3+25); 
ctx.lineTo(35+900-25*12,30+20*3+25); 
ctx.lineTo(25+900-25*12,40+20*3+25);
ctx.lineTo(20+900-25*12,40+20*3+25);
ctx.lineTo(10+900-25*12,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m133==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*3+25+20); 
ctx.lineTo(25+900-25*12,20+20*3+25+20); 
ctx.lineTo(35+900-25*12,30+20*3+25+20); 
ctx.lineTo(25+900-25*12,40+20*3+25+20);
ctx.lineTo(20+900-25*12,40+20*3+25+20);
ctx.lineTo(10+900-25*12,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m134==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*4+25); 
ctx.lineTo(25+900-25*12,20+20*4+25); 
ctx.lineTo(35+900-25*12,30+20*4+25); 
ctx.lineTo(25+900-25*12,40+20*4+25);
ctx.lineTo(20+900-25*12,40+20*4+25);
ctx.lineTo(10+900-25*12,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m134==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*4+25+20); 
ctx.lineTo(25+900-25*12,20+20*4+25+20); 
ctx.lineTo(35+900-25*12,30+20*4+25+20); 
ctx.lineTo(25+900-25*12,40+20*4+25+20);
ctx.lineTo(20+900-25*12,40+20*4+25+20);
ctx.lineTo(10+900-25*12,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m145==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20); 
ctx.lineTo(25+900-25*13,20); 
ctx.lineTo(35+900-25*13,30); 
ctx.lineTo(25+900-25*13,40);
ctx.lineTo(20+900-25*13,40);
ctx.lineTo(10+900-25*13,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m145==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20); 
ctx.lineTo(25+900-25*13,20+20); 
ctx.lineTo(35+900-25*13,30+20); 
ctx.lineTo(25+900-25*13,40+20);
ctx.lineTo(20+900-25*13,40+20);
ctx.lineTo(10+900-25*13,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m141==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20+25); 
ctx.lineTo(25+900-25*13,20+20+25); 
ctx.lineTo(35+900-25*13,30+20+25); 
ctx.lineTo(25+900-25*13,40+20+25);
ctx.lineTo(20+900-25*13,40+20+25);
ctx.lineTo(10+900-25*13,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m141==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20+25+20); 
ctx.lineTo(25+900-25*13,20+20+25+20); 
ctx.lineTo(35+900-25*13,30+20+25+20); 
ctx.lineTo(25+900-25*13,40+20+25+20);
ctx.lineTo(20+900-25*13,40+20+25+20);
ctx.lineTo(10+900-25*13,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m142==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*2+25); 
ctx.lineTo(25+900-25*13,20+20*2+25); 
ctx.lineTo(35+900-25*13,30+20*2+25); 
ctx.lineTo(25+900-25*13,40+20*2+25);
ctx.lineTo(20+900-25*13,40+20*2+25);
ctx.lineTo(10+900-25*13,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m142==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*2+25+20); 
ctx.lineTo(25+900-25*13,20+20*2+25+20); 
ctx.lineTo(35+900-25*13,30+20*2+25+20); 
ctx.lineTo(25+900-25*13,40+20*2+25+20);
ctx.lineTo(20+900-25*13,40+20*2+25+20);
ctx.lineTo(10+900-25*13,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m143==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*3+25); 
ctx.lineTo(25+900-25*13,20+20*3+25); 
ctx.lineTo(35+900-25*13,30+20*3+25); 
ctx.lineTo(25+900-25*13,40+20*3+25);
ctx.lineTo(20+900-25*13,40+20*3+25);
ctx.lineTo(10+900-25*13,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m143==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*3+25+20); 
ctx.lineTo(25+900-25*13,20+20*3+25+20); 
ctx.lineTo(35+900-25*13,30+20*3+25+20); 
ctx.lineTo(25+900-25*13,40+20*3+25+20);
ctx.lineTo(20+900-25*13,40+20*3+25+20);
ctx.lineTo(10+900-25*13,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m144==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*4+25); 
ctx.lineTo(25+900-25*13,20+20*4+25); 
ctx.lineTo(35+900-25*13,30+20*4+25); 
ctx.lineTo(25+900-25*13,40+20*4+25);
ctx.lineTo(20+900-25*13,40+20*4+25);
ctx.lineTo(10+900-25*13,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m144==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*4+25+20); 
ctx.lineTo(25+900-25*13,20+20*4+25+20); 
ctx.lineTo(35+900-25*13,30+20*4+25+20); 
ctx.lineTo(25+900-25*13,40+20*4+25+20);
ctx.lineTo(20+900-25*13,40+20*4+25+20);
ctx.lineTo(10+900-25*13,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m155==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20); 
ctx.lineTo(25+900-25*14,20); 
ctx.lineTo(35+900-25*14,30); 
ctx.lineTo(25+900-25*14,40);
ctx.lineTo(20+900-25*14,40);
ctx.lineTo(10+900-25*14,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m155==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20); 
ctx.lineTo(25+900-25*14,20+20); 
ctx.lineTo(35+900-25*14,30+20); 
ctx.lineTo(25+900-25*14,40+20);
ctx.lineTo(20+900-25*14,40+20);
ctx.lineTo(10+900-25*14,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m151==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20+25); 
ctx.lineTo(25+900-25*14,20+20+25); 
ctx.lineTo(35+900-25*14,30+20+25); 
ctx.lineTo(25+900-25*14,40+20+25);
ctx.lineTo(20+900-25*14,40+20+25);
ctx.lineTo(10+900-25*14,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m151==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20+25+20); 
ctx.lineTo(25+900-25*14,20+20+25+20); 
ctx.lineTo(35+900-25*14,30+20+25+20); 
ctx.lineTo(25+900-25*14,40+20+25+20);
ctx.lineTo(20+900-25*14,40+20+25+20);
ctx.lineTo(10+900-25*14,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m152==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*2+25); 
ctx.lineTo(25+900-25*14,20+20*2+25); 
ctx.lineTo(35+900-25*14,30+20*2+25); 
ctx.lineTo(25+900-25*14,40+20*2+25);
ctx.lineTo(20+900-25*14,40+20*2+25);
ctx.lineTo(10+900-25*14,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m152==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*2+25+20); 
ctx.lineTo(25+900-25*14,20+20*2+25+20); 
ctx.lineTo(35+900-25*14,30+20*2+25+20); 
ctx.lineTo(25+900-25*14,40+20*2+25+20);
ctx.lineTo(20+900-25*14,40+20*2+25+20);
ctx.lineTo(10+900-25*14,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m153==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*3+25); 
ctx.lineTo(25+900-25*14,20+20*3+25); 
ctx.lineTo(35+900-25*14,30+20*3+25); 
ctx.lineTo(25+900-25*14,40+20*3+25);
ctx.lineTo(20+900-25*14,40+20*3+25);
ctx.lineTo(10+900-25*14,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m153==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*3+25+20); 
ctx.lineTo(25+900-25*14,20+20*3+25+20); 
ctx.lineTo(35+900-25*14,30+20*3+25+20); 
ctx.lineTo(25+900-25*14,40+20*3+25+20);
ctx.lineTo(20+900-25*14,40+20*3+25+20);
ctx.lineTo(10+900-25*14,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m154==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*4+25); 
ctx.lineTo(25+900-25*14,20+20*4+25); 
ctx.lineTo(35+900-25*14,30+20*4+25); 
ctx.lineTo(25+900-25*14,40+20*4+25);
ctx.lineTo(20+900-25*14,40+20*4+25);
ctx.lineTo(10+900-25*14,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m154==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*4+25+20); 
ctx.lineTo(25+900-25*14,20+20*4+25+20); 
ctx.lineTo(35+900-25*14,30+20*4+25+20); 
ctx.lineTo(25+900-25*14,40+20*4+25+20);
ctx.lineTo(20+900-25*14,40+20*4+25+20);
ctx.lineTo(10+900-25*14,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m165==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20); 
ctx.lineTo(25+900-25*15,20); 
ctx.lineTo(35+900-25*15,30); 
ctx.lineTo(25+900-25*15,40);
ctx.lineTo(20+900-25*15,40);
ctx.lineTo(10+900-25*15,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m165==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20); 
ctx.lineTo(25+900-25*15,20+20); 
ctx.lineTo(35+900-25*15,30+20); 
ctx.lineTo(25+900-25*15,40+20);
ctx.lineTo(20+900-25*15,40+20);
ctx.lineTo(10+900-25*15,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m161==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20+25); 
ctx.lineTo(25+900-25*15,20+20+25); 
ctx.lineTo(35+900-25*15,30+20+25); 
ctx.lineTo(25+900-25*15,40+20+25);
ctx.lineTo(20+900-25*15,40+20+25);
ctx.lineTo(10+900-25*15,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m161==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20+25+20); 
ctx.lineTo(25+900-25*15,20+20+25+20); 
ctx.lineTo(35+900-25*15,30+20+25+20); 
ctx.lineTo(25+900-25*15,40+20+25+20);
ctx.lineTo(20+900-25*15,40+20+25+20);
ctx.lineTo(10+900-25*15,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m162==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*2+25); 
ctx.lineTo(25+900-25*15,20+20*2+25); 
ctx.lineTo(35+900-25*15,30+20*2+25); 
ctx.lineTo(25+900-25*15,40+20*2+25);
ctx.lineTo(20+900-25*15,40+20*2+25);
ctx.lineTo(10+900-25*15,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m162==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*2+25+20); 
ctx.lineTo(25+900-25*15,20+20*2+25+20); 
ctx.lineTo(35+900-25*15,30+20*2+25+20); 
ctx.lineTo(25+900-25*15,40+20*2+25+20);
ctx.lineTo(20+900-25*15,40+20*2+25+20);
ctx.lineTo(10+900-25*15,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m163==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*3+25); 
ctx.lineTo(25+900-25*15,20+20*3+25); 
ctx.lineTo(35+900-25*15,30+20*3+25); 
ctx.lineTo(25+900-25*15,40+20*3+25);
ctx.lineTo(20+900-25*15,40+20*3+25);
ctx.lineTo(10+900-25*15,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m163==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*3+25+20); 
ctx.lineTo(25+900-25*15,20+20*3+25+20); 
ctx.lineTo(35+900-25*15,30+20*3+25+20); 
ctx.lineTo(25+900-25*15,40+20*3+25+20);
ctx.lineTo(20+900-25*15,40+20*3+25+20);
ctx.lineTo(10+900-25*15,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m164==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*4+25); 
ctx.lineTo(25+900-25*15,20+20*4+25); 
ctx.lineTo(35+900-25*15,30+20*4+25); 
ctx.lineTo(25+900-25*15,40+20*4+25);
ctx.lineTo(20+900-25*15,40+20*4+25);
ctx.lineTo(10+900-25*15,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m164==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*4+25+20); 
ctx.lineTo(25+900-25*15,20+20*4+25+20); 
ctx.lineTo(35+900-25*15,30+20*4+25+20); 
ctx.lineTo(25+900-25*15,40+20*4+25+20);
ctx.lineTo(20+900-25*15,40+20*4+25+20);
ctx.lineTo(10+900-25*15,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m175==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20); 
ctx.lineTo(25+900-25*16,20); 
ctx.lineTo(35+900-25*16,30); 
ctx.lineTo(25+900-25*16,40);
ctx.lineTo(20+900-25*16,40);
ctx.lineTo(10+900-25*16,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m175==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20); 
ctx.lineTo(25+900-25*16,20+20); 
ctx.lineTo(35+900-25*16,30+20); 
ctx.lineTo(25+900-25*16,40+20);
ctx.lineTo(20+900-25*16,40+20);
ctx.lineTo(10+900-25*16,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m171==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20+25); 
ctx.lineTo(25+900-25*16,20+20+25); 
ctx.lineTo(35+900-25*16,30+20+25); 
ctx.lineTo(25+900-25*16,40+20+25);
ctx.lineTo(20+900-25*16,40+20+25);
ctx.lineTo(10+900-25*16,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m171==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20+25+20); 
ctx.lineTo(25+900-25*16,20+20+25+20); 
ctx.lineTo(35+900-25*16,30+20+25+20); 
ctx.lineTo(25+900-25*16,40+20+25+20);
ctx.lineTo(20+900-25*16,40+20+25+20);
ctx.lineTo(10+900-25*16,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m172==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*2+25); 
ctx.lineTo(25+900-25*16,20+20*2+25); 
ctx.lineTo(35+900-25*16,30+20*2+25); 
ctx.lineTo(25+900-25*16,40+20*2+25);
ctx.lineTo(20+900-25*16,40+20*2+25);
ctx.lineTo(10+900-25*16,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m172==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*2+25+20); 
ctx.lineTo(25+900-25*16,20+20*2+25+20); 
ctx.lineTo(35+900-25*16,30+20*2+25+20); 
ctx.lineTo(25+900-25*16,40+20*2+25+20);
ctx.lineTo(20+900-25*16,40+20*2+25+20);
ctx.lineTo(10+900-25*16,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m173==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*3+25); 
ctx.lineTo(25+900-25*16,20+20*3+25); 
ctx.lineTo(35+900-25*16,30+20*3+25); 
ctx.lineTo(25+900-25*16,40+20*3+25);
ctx.lineTo(20+900-25*16,40+20*3+25);
ctx.lineTo(10+900-25*16,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m173==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*3+25+20); 
ctx.lineTo(25+900-25*16,20+20*3+25+20); 
ctx.lineTo(35+900-25*16,30+20*3+25+20); 
ctx.lineTo(25+900-25*16,40+20*3+25+20);
ctx.lineTo(20+900-25*16,40+20*3+25+20);
ctx.lineTo(10+900-25*16,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m174==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*4+25); 
ctx.lineTo(25+900-25*16,20+20*4+25); 
ctx.lineTo(35+900-25*16,30+20*4+25); 
ctx.lineTo(25+900-25*16,40+20*4+25);
ctx.lineTo(20+900-25*16,40+20*4+25);
ctx.lineTo(10+900-25*16,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m174==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*4+25+20); 
ctx.lineTo(25+900-25*16,20+20*4+25+20); 
ctx.lineTo(35+900-25*16,30+20*4+25+20); 
ctx.lineTo(25+900-25*16,40+20*4+25+20);
ctx.lineTo(20+900-25*16,40+20*4+25+20);
ctx.lineTo(10+900-25*16,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m185==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20); 
ctx.lineTo(25+900-25*17,20); 
ctx.lineTo(35+900-25*17,30); 
ctx.lineTo(25+900-25*17,40);
ctx.lineTo(20+900-25*17,40);
ctx.lineTo(10+900-25*17,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m185==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20); 
ctx.lineTo(25+900-25*17,20+20); 
ctx.lineTo(35+900-25*17,30+20); 
ctx.lineTo(25+900-25*17,40+20);
ctx.lineTo(20+900-25*17,40+20);
ctx.lineTo(10+900-25*17,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m181==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20+25); 
ctx.lineTo(25+900-25*17,20+20+25); 
ctx.lineTo(35+900-25*17,30+20+25); 
ctx.lineTo(25+900-25*17,40+20+25);
ctx.lineTo(20+900-25*17,40+20+25);
ctx.lineTo(10+900-25*17,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m181==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20+25+20); 
ctx.lineTo(25+900-25*17,20+20+25+20); 
ctx.lineTo(35+900-25*17,30+20+25+20); 
ctx.lineTo(25+900-25*17,40+20+25+20);
ctx.lineTo(20+900-25*17,40+20+25+20);
ctx.lineTo(10+900-25*17,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m182==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*2+25); 
ctx.lineTo(25+900-25*17,20+20*2+25); 
ctx.lineTo(35+900-25*17,30+20*2+25); 
ctx.lineTo(25+900-25*17,40+20*2+25);
ctx.lineTo(20+900-25*17,40+20*2+25);
ctx.lineTo(10+900-25*17,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m182==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*2+25+20); 
ctx.lineTo(25+900-25*17,20+20*2+25+20); 
ctx.lineTo(35+900-25*17,30+20*2+25+20); 
ctx.lineTo(25+900-25*17,40+20*2+25+20);
ctx.lineTo(20+900-25*17,40+20*2+25+20);
ctx.lineTo(10+900-25*17,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m183==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*3+25); 
ctx.lineTo(25+900-25*17,20+20*3+25); 
ctx.lineTo(35+900-25*17,30+20*3+25); 
ctx.lineTo(25+900-25*17,40+20*3+25);
ctx.lineTo(20+900-25*17,40+20*3+25);
ctx.lineTo(10+900-25*17,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m183==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*3+25+20); 
ctx.lineTo(25+900-25*17,20+20*3+25+20); 
ctx.lineTo(35+900-25*17,30+20*3+25+20); 
ctx.lineTo(25+900-25*17,40+20*3+25+20);
ctx.lineTo(20+900-25*17,40+20*3+25+20);
ctx.lineTo(10+900-25*17,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m184==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*4+25); 
ctx.lineTo(25+900-25*17,20+20*4+25); 
ctx.lineTo(35+900-25*17,30+20*4+25); 
ctx.lineTo(25+900-25*17,40+20*4+25);
ctx.lineTo(20+900-25*17,40+20*4+25);
ctx.lineTo(10+900-25*17,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m184==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*4+25+20); 
ctx.lineTo(25+900-25*17,20+20*4+25+20); 
ctx.lineTo(35+900-25*17,30+20*4+25+20); 
ctx.lineTo(25+900-25*17,40+20*4+25+20);
ctx.lineTo(20+900-25*17,40+20*4+25+20);
ctx.lineTo(10+900-25*17,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m195==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20); 
ctx.lineTo(25+900-25*18,20); 
ctx.lineTo(35+900-25*18,30); 
ctx.lineTo(25+900-25*18,40);
ctx.lineTo(20+900-25*18,40);
ctx.lineTo(10+900-25*18,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m195==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20); 
ctx.lineTo(25+900-25*18,20+20); 
ctx.lineTo(35+900-25*18,30+20); 
ctx.lineTo(25+900-25*18,40+20);
ctx.lineTo(20+900-25*18,40+20);
ctx.lineTo(10+900-25*18,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m191==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20+25); 
ctx.lineTo(25+900-25*18,20+20+25); 
ctx.lineTo(35+900-25*18,30+20+25); 
ctx.lineTo(25+900-25*18,40+20+25);
ctx.lineTo(20+900-25*18,40+20+25);
ctx.lineTo(10+900-25*18,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m191==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20+25+20); 
ctx.lineTo(25+900-25*18,20+20+25+20); 
ctx.lineTo(35+900-25*18,30+20+25+20); 
ctx.lineTo(25+900-25*18,40+20+25+20);
ctx.lineTo(20+900-25*18,40+20+25+20);
ctx.lineTo(10+900-25*18,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m192==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*2+25); 
ctx.lineTo(25+900-25*18,20+20*2+25); 
ctx.lineTo(35+900-25*18,30+20*2+25); 
ctx.lineTo(25+900-25*18,40+20*2+25);
ctx.lineTo(20+900-25*18,40+20*2+25);
ctx.lineTo(10+900-25*18,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m192==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*2+25+20); 
ctx.lineTo(25+900-25*18,20+20*2+25+20); 
ctx.lineTo(35+900-25*18,30+20*2+25+20); 
ctx.lineTo(25+900-25*18,40+20*2+25+20);
ctx.lineTo(20+900-25*18,40+20*2+25+20);
ctx.lineTo(10+900-25*18,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m193==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*3+25); 
ctx.lineTo(25+900-25*18,20+20*3+25); 
ctx.lineTo(35+900-25*18,30+20*3+25); 
ctx.lineTo(25+900-25*18,40+20*3+25);
ctx.lineTo(20+900-25*18,40+20*3+25);
ctx.lineTo(10+900-25*18,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m193==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*3+25+20); 
ctx.lineTo(25+900-25*18,20+20*3+25+20); 
ctx.lineTo(35+900-25*18,30+20*3+25+20); 
ctx.lineTo(25+900-25*18,40+20*3+25+20);
ctx.lineTo(20+900-25*18,40+20*3+25+20);
ctx.lineTo(10+900-25*18,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m194==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*4+25); 
ctx.lineTo(25+900-25*18,20+20*4+25); 
ctx.lineTo(35+900-25*18,30+20*4+25); 
ctx.lineTo(25+900-25*18,40+20*4+25);
ctx.lineTo(20+900-25*18,40+20*4+25);
ctx.lineTo(10+900-25*18,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m194==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*4+25+20); 
ctx.lineTo(25+900-25*18,20+20*4+25+20); 
ctx.lineTo(35+900-25*18,30+20*4+25+20); 
ctx.lineTo(25+900-25*18,40+20*4+25+20);
ctx.lineTo(20+900-25*18,40+20*4+25+20);
ctx.lineTo(10+900-25*18,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m205==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20); 
ctx.lineTo(25+900-25*19,20); 
ctx.lineTo(35+900-25*19,30); 
ctx.lineTo(25+900-25*19,40);
ctx.lineTo(20+900-25*19,40);
ctx.lineTo(10+900-25*19,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m205==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20); 
ctx.lineTo(25+900-25*19,20+20); 
ctx.lineTo(35+900-25*19,30+20); 
ctx.lineTo(25+900-25*19,40+20);
ctx.lineTo(20+900-25*19,40+20);
ctx.lineTo(10+900-25*19,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m201==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20+25); 
ctx.lineTo(25+900-25*19,20+20+25); 
ctx.lineTo(35+900-25*19,30+20+25); 
ctx.lineTo(25+900-25*19,40+20+25);
ctx.lineTo(20+900-25*19,40+20+25);
ctx.lineTo(10+900-25*19,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m201==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20+25+20); 
ctx.lineTo(25+900-25*19,20+20+25+20); 
ctx.lineTo(35+900-25*19,30+20+25+20); 
ctx.lineTo(25+900-25*19,40+20+25+20);
ctx.lineTo(20+900-25*19,40+20+25+20);
ctx.lineTo(10+900-25*19,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m202==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*2+25); 
ctx.lineTo(25+900-25*19,20+20*2+25); 
ctx.lineTo(35+900-25*19,30+20*2+25); 
ctx.lineTo(25+900-25*19,40+20*2+25);
ctx.lineTo(20+900-25*19,40+20*2+25);
ctx.lineTo(10+900-25*19,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m202==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*2+25+20); 
ctx.lineTo(25+900-25*19,20+20*2+25+20); 
ctx.lineTo(35+900-25*19,30+20*2+25+20); 
ctx.lineTo(25+900-25*19,40+20*2+25+20);
ctx.lineTo(20+900-25*19,40+20*2+25+20);
ctx.lineTo(10+900-25*19,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m203==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*3+25); 
ctx.lineTo(25+900-25*19,20+20*3+25); 
ctx.lineTo(35+900-25*19,30+20*3+25); 
ctx.lineTo(25+900-25*19,40+20*3+25);
ctx.lineTo(20+900-25*19,40+20*3+25);
ctx.lineTo(10+900-25*19,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m203==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*3+25+20); 
ctx.lineTo(25+900-25*19,20+20*3+25+20); 
ctx.lineTo(35+900-25*19,30+20*3+25+20); 
ctx.lineTo(25+900-25*19,40+20*3+25+20);
ctx.lineTo(20+900-25*19,40+20*3+25+20);
ctx.lineTo(10+900-25*19,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m204==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*4+25); 
ctx.lineTo(25+900-25*19,20+20*4+25); 
ctx.lineTo(35+900-25*19,30+20*4+25); 
ctx.lineTo(25+900-25*19,40+20*4+25);
ctx.lineTo(20+900-25*19,40+20*4+25);
ctx.lineTo(10+900-25*19,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m204==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*4+25+20); 
ctx.lineTo(25+900-25*19,20+20*4+25+20); 
ctx.lineTo(35+900-25*19,30+20*4+25+20); 
ctx.lineTo(25+900-25*19,40+20*4+25+20);
ctx.lineTo(20+900-25*19,40+20*4+25+20);
ctx.lineTo(10+900-25*19,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m215==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20); 
ctx.lineTo(25+900-25*20,20); 
ctx.lineTo(35+900-25*20,30); 
ctx.lineTo(25+900-25*20,40);
ctx.lineTo(20+900-25*20,40);
ctx.lineTo(10+900-25*20,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m215==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20); 
ctx.lineTo(25+900-25*20,20+20); 
ctx.lineTo(35+900-25*20,30+20); 
ctx.lineTo(25+900-25*20,40+20);
ctx.lineTo(20+900-25*20,40+20);
ctx.lineTo(10+900-25*20,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m211==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20+25); 
ctx.lineTo(25+900-25*20,20+20+25); 
ctx.lineTo(35+900-25*20,30+20+25); 
ctx.lineTo(25+900-25*20,40+20+25);
ctx.lineTo(20+900-25*20,40+20+25);
ctx.lineTo(10+900-25*20,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m211==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20+25+20); 
ctx.lineTo(25+900-25*20,20+20+25+20); 
ctx.lineTo(35+900-25*20,30+20+25+20); 
ctx.lineTo(25+900-25*20,40+20+25+20);
ctx.lineTo(20+900-25*20,40+20+25+20);
ctx.lineTo(10+900-25*20,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m212==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*2+25); 
ctx.lineTo(25+900-25*20,20+20*2+25); 
ctx.lineTo(35+900-25*20,30+20*2+25); 
ctx.lineTo(25+900-25*20,40+20*2+25);
ctx.lineTo(20+900-25*20,40+20*2+25);
ctx.lineTo(10+900-25*20,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m212==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*2+25+20); 
ctx.lineTo(25+900-25*20,20+20*2+25+20); 
ctx.lineTo(35+900-25*20,30+20*2+25+20); 
ctx.lineTo(25+900-25*20,40+20*2+25+20);
ctx.lineTo(20+900-25*20,40+20*2+25+20);
ctx.lineTo(10+900-25*20,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m213==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*3+25); 
ctx.lineTo(25+900-25*20,20+20*3+25); 
ctx.lineTo(35+900-25*20,30+20*3+25); 
ctx.lineTo(25+900-25*20,40+20*3+25);
ctx.lineTo(20+900-25*20,40+20*3+25);
ctx.lineTo(10+900-25*20,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m213==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*3+25+20); 
ctx.lineTo(25+900-25*20,20+20*3+25+20); 
ctx.lineTo(35+900-25*20,30+20*3+25+20); 
ctx.lineTo(25+900-25*20,40+20*3+25+20);
ctx.lineTo(20+900-25*20,40+20*3+25+20);
ctx.lineTo(10+900-25*20,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m214==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*4+25); 
ctx.lineTo(25+900-25*20,20+20*4+25); 
ctx.lineTo(35+900-25*20,30+20*4+25); 
ctx.lineTo(25+900-25*20,40+20*4+25);
ctx.lineTo(20+900-25*20,40+20*4+25);
ctx.lineTo(10+900-25*20,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m214==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*4+25+20); 
ctx.lineTo(25+900-25*20,20+20*4+25+20); 
ctx.lineTo(35+900-25*20,30+20*4+25+20); 
ctx.lineTo(25+900-25*20,40+20*4+25+20);
ctx.lineTo(20+900-25*20,40+20*4+25+20);
ctx.lineTo(10+900-25*20,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m225==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20); 
ctx.lineTo(25+900-25*21,20); 
ctx.lineTo(35+900-25*21,30); 
ctx.lineTo(25+900-25*21,40);
ctx.lineTo(20+900-25*21,40);
ctx.lineTo(10+900-25*21,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m225==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20); 
ctx.lineTo(25+900-25*21,20+20); 
ctx.lineTo(35+900-25*21,30+20); 
ctx.lineTo(25+900-25*21,40+20);
ctx.lineTo(20+900-25*21,40+20);
ctx.lineTo(10+900-25*21,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m221==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20+25); 
ctx.lineTo(25+900-25*21,20+20+25); 
ctx.lineTo(35+900-25*21,30+20+25); 
ctx.lineTo(25+900-25*21,40+20+25);
ctx.lineTo(20+900-25*21,40+20+25);
ctx.lineTo(10+900-25*21,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m221==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20+25+20); 
ctx.lineTo(25+900-25*21,20+20+25+20); 
ctx.lineTo(35+900-25*21,30+20+25+20); 
ctx.lineTo(25+900-25*21,40+20+25+20);
ctx.lineTo(20+900-25*21,40+20+25+20);
ctx.lineTo(10+900-25*21,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m222==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*2+25); 
ctx.lineTo(25+900-25*21,20+20*2+25); 
ctx.lineTo(35+900-25*21,30+20*2+25); 
ctx.lineTo(25+900-25*21,40+20*2+25);
ctx.lineTo(20+900-25*21,40+20*2+25);
ctx.lineTo(10+900-25*21,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m222==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*2+25+20); 
ctx.lineTo(25+900-25*21,20+20*2+25+20); 
ctx.lineTo(35+900-25*21,30+20*2+25+20); 
ctx.lineTo(25+900-25*21,40+20*2+25+20);
ctx.lineTo(20+900-25*21,40+20*2+25+20);
ctx.lineTo(10+900-25*21,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m223==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*3+25); 
ctx.lineTo(25+900-25*21,20+20*3+25); 
ctx.lineTo(35+900-25*21,30+20*3+25); 
ctx.lineTo(25+900-25*21,40+20*3+25);
ctx.lineTo(20+900-25*21,40+20*3+25);
ctx.lineTo(10+900-25*21,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m223==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*3+25+20); 
ctx.lineTo(25+900-25*21,20+20*3+25+20); 
ctx.lineTo(35+900-25*21,30+20*3+25+20); 
ctx.lineTo(25+900-25*21,40+20*3+25+20);
ctx.lineTo(20+900-25*21,40+20*3+25+20);
ctx.lineTo(10+900-25*21,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m224==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*4+25); 
ctx.lineTo(25+900-25*21,20+20*4+25); 
ctx.lineTo(35+900-25*21,30+20*4+25); 
ctx.lineTo(25+900-25*21,40+20*4+25);
ctx.lineTo(20+900-25*21,40+20*4+25);
ctx.lineTo(10+900-25*21,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m224==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*4+25+20); 
ctx.lineTo(25+900-25*21,20+20*4+25+20); 
ctx.lineTo(35+900-25*21,30+20*4+25+20); 
ctx.lineTo(25+900-25*21,40+20*4+25+20);
ctx.lineTo(20+900-25*21,40+20*4+25+20);
ctx.lineTo(10+900-25*21,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m235==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20); 
ctx.lineTo(25+900-25*22,20); 
ctx.lineTo(35+900-25*22,30); 
ctx.lineTo(25+900-25*22,40);
ctx.lineTo(20+900-25*22,40);
ctx.lineTo(10+900-25*22,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m235==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20); 
ctx.lineTo(25+900-25*22,20+20); 
ctx.lineTo(35+900-25*22,30+20); 
ctx.lineTo(25+900-25*22,40+20);
ctx.lineTo(20+900-25*22,40+20);
ctx.lineTo(10+900-25*22,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m231==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20+25); 
ctx.lineTo(25+900-25*22,20+20+25); 
ctx.lineTo(35+900-25*22,30+20+25); 
ctx.lineTo(25+900-25*22,40+20+25);
ctx.lineTo(20+900-25*22,40+20+25);
ctx.lineTo(10+900-25*22,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m231==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20+25+20); 
ctx.lineTo(25+900-25*22,20+20+25+20); 
ctx.lineTo(35+900-25*22,30+20+25+20); 
ctx.lineTo(25+900-25*22,40+20+25+20);
ctx.lineTo(20+900-25*22,40+20+25+20);
ctx.lineTo(10+900-25*22,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m232==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*2+25); 
ctx.lineTo(25+900-25*22,20+20*2+25); 
ctx.lineTo(35+900-25*22,30+20*2+25); 
ctx.lineTo(25+900-25*22,40+20*2+25);
ctx.lineTo(20+900-25*22,40+20*2+25);
ctx.lineTo(10+900-25*22,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m232==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*2+25+20); 
ctx.lineTo(25+900-25*22,20+20*2+25+20); 
ctx.lineTo(35+900-25*22,30+20*2+25+20); 
ctx.lineTo(25+900-25*22,40+20*2+25+20);
ctx.lineTo(20+900-25*22,40+20*2+25+20);
ctx.lineTo(10+900-25*22,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m233==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*3+25); 
ctx.lineTo(25+900-25*22,20+20*3+25); 
ctx.lineTo(35+900-25*22,30+20*3+25); 
ctx.lineTo(25+900-25*22,40+20*3+25);
ctx.lineTo(20+900-25*22,40+20*3+25);
ctx.lineTo(10+900-25*22,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m233==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*3+25+20); 
ctx.lineTo(25+900-25*22,20+20*3+25+20); 
ctx.lineTo(35+900-25*22,30+20*3+25+20); 
ctx.lineTo(25+900-25*22,40+20*3+25+20);
ctx.lineTo(20+900-25*22,40+20*3+25+20);
ctx.lineTo(10+900-25*22,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m234==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*4+25); 
ctx.lineTo(25+900-25*22,20+20*4+25); 
ctx.lineTo(35+900-25*22,30+20*4+25); 
ctx.lineTo(25+900-25*22,40+20*4+25);
ctx.lineTo(20+900-25*22,40+20*4+25);
ctx.lineTo(10+900-25*22,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m234==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*4+25+20); 
ctx.lineTo(25+900-25*22,20+20*4+25+20); 
ctx.lineTo(35+900-25*22,30+20*4+25+20); 
ctx.lineTo(25+900-25*22,40+20*4+25+20);
ctx.lineTo(20+900-25*22,40+20*4+25+20);
ctx.lineTo(10+900-25*22,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m245==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20); 
ctx.lineTo(25+900-25*23,20); 
ctx.lineTo(35+900-25*23,30); 
ctx.lineTo(25+900-25*23,40);
ctx.lineTo(20+900-25*23,40);
ctx.lineTo(10+900-25*23,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m245==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20); 
ctx.lineTo(25+900-25*23,20+20); 
ctx.lineTo(35+900-25*23,30+20); 
ctx.lineTo(25+900-25*23,40+20);
ctx.lineTo(20+900-25*23,40+20);
ctx.lineTo(10+900-25*23,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m241==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20+25); 
ctx.lineTo(25+900-25*23,20+20+25); 
ctx.lineTo(35+900-25*23,30+20+25); 
ctx.lineTo(25+900-25*23,40+20+25);
ctx.lineTo(20+900-25*23,40+20+25);
ctx.lineTo(10+900-25*23,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m241==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20+25+20); 
ctx.lineTo(25+900-25*23,20+20+25+20); 
ctx.lineTo(35+900-25*23,30+20+25+20); 
ctx.lineTo(25+900-25*23,40+20+25+20);
ctx.lineTo(20+900-25*23,40+20+25+20);
ctx.lineTo(10+900-25*23,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m242==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*2+25); 
ctx.lineTo(25+900-25*23,20+20*2+25); 
ctx.lineTo(35+900-25*23,30+20*2+25); 
ctx.lineTo(25+900-25*23,40+20*2+25);
ctx.lineTo(20+900-25*23,40+20*2+25);
ctx.lineTo(10+900-25*23,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m242==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*2+25+20); 
ctx.lineTo(25+900-25*23,20+20*2+25+20); 
ctx.lineTo(35+900-25*23,30+20*2+25+20); 
ctx.lineTo(25+900-25*23,40+20*2+25+20);
ctx.lineTo(20+900-25*23,40+20*2+25+20);
ctx.lineTo(10+900-25*23,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m243==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*3+25); 
ctx.lineTo(25+900-25*23,20+20*3+25); 
ctx.lineTo(35+900-25*23,30+20*3+25); 
ctx.lineTo(25+900-25*23,40+20*3+25);
ctx.lineTo(20+900-25*23,40+20*3+25);
ctx.lineTo(10+900-25*23,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m243==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*3+25+20); 
ctx.lineTo(25+900-25*23,20+20*3+25+20); 
ctx.lineTo(35+900-25*23,30+20*3+25+20); 
ctx.lineTo(25+900-25*23,40+20*3+25+20);
ctx.lineTo(20+900-25*23,40+20*3+25+20);
ctx.lineTo(10+900-25*23,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m244==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*4+25); 
ctx.lineTo(25+900-25*23,20+20*4+25); 
ctx.lineTo(35+900-25*23,30+20*4+25); 
ctx.lineTo(25+900-25*23,40+20*4+25);
ctx.lineTo(20+900-25*23,40+20*4+25);
ctx.lineTo(10+900-25*23,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m244==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*4+25+20); 
ctx.lineTo(25+900-25*23,20+20*4+25+20); 
ctx.lineTo(35+900-25*23,30+20*4+25+20); 
ctx.lineTo(25+900-25*23,40+20*4+25+20);
ctx.lineTo(20+900-25*23,40+20*4+25+20);
ctx.lineTo(10+900-25*23,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m255==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20); 
ctx.lineTo(25+900-25*24,20); 
ctx.lineTo(35+900-25*24,30); 
ctx.lineTo(25+900-25*24,40);
ctx.lineTo(20+900-25*24,40);
ctx.lineTo(10+900-25*24,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m255==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20); 
ctx.lineTo(25+900-25*24,20+20); 
ctx.lineTo(35+900-25*24,30+20); 
ctx.lineTo(25+900-25*24,40+20);
ctx.lineTo(20+900-25*24,40+20);
ctx.lineTo(10+900-25*24,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m251==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20+25); 
ctx.lineTo(25+900-25*24,20+20+25); 
ctx.lineTo(35+900-25*24,30+20+25); 
ctx.lineTo(25+900-25*24,40+20+25);
ctx.lineTo(20+900-25*24,40+20+25);
ctx.lineTo(10+900-25*24,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m251==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20+25+20); 
ctx.lineTo(25+900-25*24,20+20+25+20); 
ctx.lineTo(35+900-25*24,30+20+25+20); 
ctx.lineTo(25+900-25*24,40+20+25+20);
ctx.lineTo(20+900-25*24,40+20+25+20);
ctx.lineTo(10+900-25*24,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m252==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*2+25); 
ctx.lineTo(25+900-25*24,20+20*2+25); 
ctx.lineTo(35+900-25*24,30+20*2+25); 
ctx.lineTo(25+900-25*24,40+20*2+25);
ctx.lineTo(20+900-25*24,40+20*2+25);
ctx.lineTo(10+900-25*24,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m252==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*2+25+20); 
ctx.lineTo(25+900-25*24,20+20*2+25+20); 
ctx.lineTo(35+900-25*24,30+20*2+25+20); 
ctx.lineTo(25+900-25*24,40+20*2+25+20);
ctx.lineTo(20+900-25*24,40+20*2+25+20);
ctx.lineTo(10+900-25*24,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m253==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*3+25); 
ctx.lineTo(25+900-25*24,20+20*3+25); 
ctx.lineTo(35+900-25*24,30+20*3+25); 
ctx.lineTo(25+900-25*24,40+20*3+25);
ctx.lineTo(20+900-25*24,40+20*3+25);
ctx.lineTo(10+900-25*24,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m253==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*3+25+20); 
ctx.lineTo(25+900-25*24,20+20*3+25+20); 
ctx.lineTo(35+900-25*24,30+20*3+25+20); 
ctx.lineTo(25+900-25*24,40+20*3+25+20);
ctx.lineTo(20+900-25*24,40+20*3+25+20);
ctx.lineTo(10+900-25*24,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m254==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*4+25); 
ctx.lineTo(25+900-25*24,20+20*4+25); 
ctx.lineTo(35+900-25*24,30+20*4+25); 
ctx.lineTo(25+900-25*24,40+20*4+25);
ctx.lineTo(20+900-25*24,40+20*4+25);
ctx.lineTo(10+900-25*24,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m254==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*4+25+20); 
ctx.lineTo(25+900-25*24,20+20*4+25+20); 
ctx.lineTo(35+900-25*24,30+20*4+25+20); 
ctx.lineTo(25+900-25*24,40+20*4+25+20);
ctx.lineTo(20+900-25*24,40+20*4+25+20);
ctx.lineTo(10+900-25*24,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m265==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20); 
ctx.lineTo(25+900-25*25,20); 
ctx.lineTo(35+900-25*25,30); 
ctx.lineTo(25+900-25*25,40);
ctx.lineTo(20+900-25*25,40);
ctx.lineTo(10+900-25*25,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m265==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20); 
ctx.lineTo(25+900-25*25,20+20); 
ctx.lineTo(35+900-25*25,30+20); 
ctx.lineTo(25+900-25*25,40+20);
ctx.lineTo(20+900-25*25,40+20);
ctx.lineTo(10+900-25*25,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m261==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20+25); 
ctx.lineTo(25+900-25*25,20+20+25); 
ctx.lineTo(35+900-25*25,30+20+25); 
ctx.lineTo(25+900-25*25,40+20+25);
ctx.lineTo(20+900-25*25,40+20+25);
ctx.lineTo(10+900-25*25,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m261==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20+25+20); 
ctx.lineTo(25+900-25*25,20+20+25+20); 
ctx.lineTo(35+900-25*25,30+20+25+20); 
ctx.lineTo(25+900-25*25,40+20+25+20);
ctx.lineTo(20+900-25*25,40+20+25+20);
ctx.lineTo(10+900-25*25,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m262==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*2+25); 
ctx.lineTo(25+900-25*25,20+20*2+25); 
ctx.lineTo(35+900-25*25,30+20*2+25); 
ctx.lineTo(25+900-25*25,40+20*2+25);
ctx.lineTo(20+900-25*25,40+20*2+25);
ctx.lineTo(10+900-25*25,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m262==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*2+25+20); 
ctx.lineTo(25+900-25*25,20+20*2+25+20); 
ctx.lineTo(35+900-25*25,30+20*2+25+20); 
ctx.lineTo(25+900-25*25,40+20*2+25+20);
ctx.lineTo(20+900-25*25,40+20*2+25+20);
ctx.lineTo(10+900-25*25,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m263==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*3+25); 
ctx.lineTo(25+900-25*25,20+20*3+25); 
ctx.lineTo(35+900-25*25,30+20*3+25); 
ctx.lineTo(25+900-25*25,40+20*3+25);
ctx.lineTo(20+900-25*25,40+20*3+25);
ctx.lineTo(10+900-25*25,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m263==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*3+25+20); 
ctx.lineTo(25+900-25*25,20+20*3+25+20); 
ctx.lineTo(35+900-25*25,30+20*3+25+20); 
ctx.lineTo(25+900-25*25,40+20*3+25+20);
ctx.lineTo(20+900-25*25,40+20*3+25+20);
ctx.lineTo(10+900-25*25,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m264==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*4+25); 
ctx.lineTo(25+900-25*25,20+20*4+25); 
ctx.lineTo(35+900-25*25,30+20*4+25); 
ctx.lineTo(25+900-25*25,40+20*4+25);
ctx.lineTo(20+900-25*25,40+20*4+25);
ctx.lineTo(10+900-25*25,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m264==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*4+25+20); 
ctx.lineTo(25+900-25*25,20+20*4+25+20); 
ctx.lineTo(35+900-25*25,30+20*4+25+20); 
ctx.lineTo(25+900-25*25,40+20*4+25+20);
ctx.lineTo(20+900-25*25,40+20*4+25+20);
ctx.lineTo(10+900-25*25,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m275==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20); 
ctx.lineTo(25+900-25*26,20); 
ctx.lineTo(35+900-25*26,30); 
ctx.lineTo(25+900-25*26,40);
ctx.lineTo(20+900-25*26,40);
ctx.lineTo(10+900-25*26,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m275==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20); 
ctx.lineTo(25+900-25*26,20+20); 
ctx.lineTo(35+900-25*26,30+20); 
ctx.lineTo(25+900-25*26,40+20);
ctx.lineTo(20+900-25*26,40+20);
ctx.lineTo(10+900-25*26,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m271==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20+25); 
ctx.lineTo(25+900-25*26,20+20+25); 
ctx.lineTo(35+900-25*26,30+20+25); 
ctx.lineTo(25+900-25*26,40+20+25);
ctx.lineTo(20+900-25*26,40+20+25);
ctx.lineTo(10+900-25*26,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m271==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20+25+20); 
ctx.lineTo(25+900-25*26,20+20+25+20); 
ctx.lineTo(35+900-25*26,30+20+25+20); 
ctx.lineTo(25+900-25*26,40+20+25+20);
ctx.lineTo(20+900-25*26,40+20+25+20);
ctx.lineTo(10+900-25*26,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m272==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*2+25); 
ctx.lineTo(25+900-25*26,20+20*2+25); 
ctx.lineTo(35+900-25*26,30+20*2+25); 
ctx.lineTo(25+900-25*26,40+20*2+25);
ctx.lineTo(20+900-25*26,40+20*2+25);
ctx.lineTo(10+900-25*26,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m272==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*2+25+20); 
ctx.lineTo(25+900-25*26,20+20*2+25+20); 
ctx.lineTo(35+900-25*26,30+20*2+25+20); 
ctx.lineTo(25+900-25*26,40+20*2+25+20);
ctx.lineTo(20+900-25*26,40+20*2+25+20);
ctx.lineTo(10+900-25*26,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m273==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*3+25); 
ctx.lineTo(25+900-25*26,20+20*3+25); 
ctx.lineTo(35+900-25*26,30+20*3+25); 
ctx.lineTo(25+900-25*26,40+20*3+25);
ctx.lineTo(20+900-25*26,40+20*3+25);
ctx.lineTo(10+900-25*26,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m273==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*3+25+20); 
ctx.lineTo(25+900-25*26,20+20*3+25+20); 
ctx.lineTo(35+900-25*26,30+20*3+25+20); 
ctx.lineTo(25+900-25*26,40+20*3+25+20);
ctx.lineTo(20+900-25*26,40+20*3+25+20);
ctx.lineTo(10+900-25*26,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m274==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*4+25); 
ctx.lineTo(25+900-25*26,20+20*4+25); 
ctx.lineTo(35+900-25*26,30+20*4+25); 
ctx.lineTo(25+900-25*26,40+20*4+25);
ctx.lineTo(20+900-25*26,40+20*4+25);
ctx.lineTo(10+900-25*26,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m274==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*4+25+20); 
ctx.lineTo(25+900-25*26,20+20*4+25+20); 
ctx.lineTo(35+900-25*26,30+20*4+25+20); 
ctx.lineTo(25+900-25*26,40+20*4+25+20);
ctx.lineTo(20+900-25*26,40+20*4+25+20);
ctx.lineTo(10+900-25*26,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m285==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20); 
ctx.lineTo(25+900-25*27,20); 
ctx.lineTo(35+900-25*27,30); 
ctx.lineTo(25+900-25*27,40);
ctx.lineTo(20+900-25*27,40);
ctx.lineTo(10+900-25*27,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m285==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20); 
ctx.lineTo(25+900-25*27,20+20); 
ctx.lineTo(35+900-25*27,30+20); 
ctx.lineTo(25+900-25*27,40+20);
ctx.lineTo(20+900-25*27,40+20);
ctx.lineTo(10+900-25*27,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m281==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20+25); 
ctx.lineTo(25+900-25*27,20+20+25); 
ctx.lineTo(35+900-25*27,30+20+25); 
ctx.lineTo(25+900-25*27,40+20+25);
ctx.lineTo(20+900-25*27,40+20+25);
ctx.lineTo(10+900-25*27,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m281==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20+25+20); 
ctx.lineTo(25+900-25*27,20+20+25+20); 
ctx.lineTo(35+900-25*27,30+20+25+20); 
ctx.lineTo(25+900-25*27,40+20+25+20);
ctx.lineTo(20+900-25*27,40+20+25+20);
ctx.lineTo(10+900-25*27,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m282==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*2+25); 
ctx.lineTo(25+900-25*27,20+20*2+25); 
ctx.lineTo(35+900-25*27,30+20*2+25); 
ctx.lineTo(25+900-25*27,40+20*2+25);
ctx.lineTo(20+900-25*27,40+20*2+25);
ctx.lineTo(10+900-25*27,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m282==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*2+25+20); 
ctx.lineTo(25+900-25*27,20+20*2+25+20); 
ctx.lineTo(35+900-25*27,30+20*2+25+20); 
ctx.lineTo(25+900-25*27,40+20*2+25+20);
ctx.lineTo(20+900-25*27,40+20*2+25+20);
ctx.lineTo(10+900-25*27,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m283==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*3+25); 
ctx.lineTo(25+900-25*27,20+20*3+25); 
ctx.lineTo(35+900-25*27,30+20*3+25); 
ctx.lineTo(25+900-25*27,40+20*3+25);
ctx.lineTo(20+900-25*27,40+20*3+25);
ctx.lineTo(10+900-25*27,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m283==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*3+25+20); 
ctx.lineTo(25+900-25*27,20+20*3+25+20); 
ctx.lineTo(35+900-25*27,30+20*3+25+20); 
ctx.lineTo(25+900-25*27,40+20*3+25+20);
ctx.lineTo(20+900-25*27,40+20*3+25+20);
ctx.lineTo(10+900-25*27,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m284==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*4+25); 
ctx.lineTo(25+900-25*27,20+20*4+25); 
ctx.lineTo(35+900-25*27,30+20*4+25); 
ctx.lineTo(25+900-25*27,40+20*4+25);
ctx.lineTo(20+900-25*27,40+20*4+25);
ctx.lineTo(10+900-25*27,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m284==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*4+25+20); 
ctx.lineTo(25+900-25*27,20+20*4+25+20); 
ctx.lineTo(35+900-25*27,30+20*4+25+20); 
ctx.lineTo(25+900-25*27,40+20*4+25+20);
ctx.lineTo(20+900-25*27,40+20*4+25+20);
ctx.lineTo(10+900-25*27,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m295==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20); 
ctx.lineTo(25+900-25*28,20); 
ctx.lineTo(35+900-25*28,30); 
ctx.lineTo(25+900-25*28,40);
ctx.lineTo(20+900-25*28,40);
ctx.lineTo(10+900-25*28,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m295==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20); 
ctx.lineTo(25+900-25*28,20+20); 
ctx.lineTo(35+900-25*28,30+20); 
ctx.lineTo(25+900-25*28,40+20);
ctx.lineTo(20+900-25*28,40+20);
ctx.lineTo(10+900-25*28,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m291==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20+25); 
ctx.lineTo(25+900-25*28,20+20+25); 
ctx.lineTo(35+900-25*28,30+20+25); 
ctx.lineTo(25+900-25*28,40+20+25);
ctx.lineTo(20+900-25*28,40+20+25);
ctx.lineTo(10+900-25*28,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m291==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20+25+20); 
ctx.lineTo(25+900-25*28,20+20+25+20); 
ctx.lineTo(35+900-25*28,30+20+25+20); 
ctx.lineTo(25+900-25*28,40+20+25+20);
ctx.lineTo(20+900-25*28,40+20+25+20);
ctx.lineTo(10+900-25*28,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m292==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*2+25); 
ctx.lineTo(25+900-25*28,20+20*2+25); 
ctx.lineTo(35+900-25*28,30+20*2+25); 
ctx.lineTo(25+900-25*28,40+20*2+25);
ctx.lineTo(20+900-25*28,40+20*2+25);
ctx.lineTo(10+900-25*28,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m292==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*2+25+20); 
ctx.lineTo(25+900-25*28,20+20*2+25+20); 
ctx.lineTo(35+900-25*28,30+20*2+25+20); 
ctx.lineTo(25+900-25*28,40+20*2+25+20);
ctx.lineTo(20+900-25*28,40+20*2+25+20);
ctx.lineTo(10+900-25*28,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m293==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*3+25); 
ctx.lineTo(25+900-25*28,20+20*3+25); 
ctx.lineTo(35+900-25*28,30+20*3+25); 
ctx.lineTo(25+900-25*28,40+20*3+25);
ctx.lineTo(20+900-25*28,40+20*3+25);
ctx.lineTo(10+900-25*28,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m293==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*3+25+20); 
ctx.lineTo(25+900-25*28,20+20*3+25+20); 
ctx.lineTo(35+900-25*28,30+20*3+25+20); 
ctx.lineTo(25+900-25*28,40+20*3+25+20);
ctx.lineTo(20+900-25*28,40+20*3+25+20);
ctx.lineTo(10+900-25*28,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m294==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*4+25); 
ctx.lineTo(25+900-25*28,20+20*4+25); 
ctx.lineTo(35+900-25*28,30+20*4+25); 
ctx.lineTo(25+900-25*28,40+20*4+25);
ctx.lineTo(20+900-25*28,40+20*4+25);
ctx.lineTo(10+900-25*28,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m294==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*4+25+20); 
ctx.lineTo(25+900-25*28,20+20*4+25+20); 
ctx.lineTo(35+900-25*28,30+20*4+25+20); 
ctx.lineTo(25+900-25*28,40+20*4+25+20);
ctx.lineTo(20+900-25*28,40+20*4+25+20);
ctx.lineTo(10+900-25*28,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m305==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20); 
ctx.lineTo(25+900-25*29,20); 
ctx.lineTo(35+900-25*29,30); 
ctx.lineTo(25+900-25*29,40);
ctx.lineTo(20+900-25*29,40);
ctx.lineTo(10+900-25*29,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m305==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20); 
ctx.lineTo(25+900-25*29,20+20); 
ctx.lineTo(35+900-25*29,30+20); 
ctx.lineTo(25+900-25*29,40+20);
ctx.lineTo(20+900-25*29,40+20);
ctx.lineTo(10+900-25*29,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m301==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20+25); 
ctx.lineTo(25+900-25*29,20+20+25); 
ctx.lineTo(35+900-25*29,30+20+25); 
ctx.lineTo(25+900-25*29,40+20+25);
ctx.lineTo(20+900-25*29,40+20+25);
ctx.lineTo(10+900-25*29,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m301==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20+25+20); 
ctx.lineTo(25+900-25*29,20+20+25+20); 
ctx.lineTo(35+900-25*29,30+20+25+20); 
ctx.lineTo(25+900-25*29,40+20+25+20);
ctx.lineTo(20+900-25*29,40+20+25+20);
ctx.lineTo(10+900-25*29,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m302==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*2+25); 
ctx.lineTo(25+900-25*29,20+20*2+25); 
ctx.lineTo(35+900-25*29,30+20*2+25); 
ctx.lineTo(25+900-25*29,40+20*2+25);
ctx.lineTo(20+900-25*29,40+20*2+25);
ctx.lineTo(10+900-25*29,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m302==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*2+25+20); 
ctx.lineTo(25+900-25*29,20+20*2+25+20); 
ctx.lineTo(35+900-25*29,30+20*2+25+20); 
ctx.lineTo(25+900-25*29,40+20*2+25+20);
ctx.lineTo(20+900-25*29,40+20*2+25+20);
ctx.lineTo(10+900-25*29,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m303==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*3+25); 
ctx.lineTo(25+900-25*29,20+20*3+25); 
ctx.lineTo(35+900-25*29,30+20*3+25); 
ctx.lineTo(25+900-25*29,40+20*3+25);
ctx.lineTo(20+900-25*29,40+20*3+25);
ctx.lineTo(10+900-25*29,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m303==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*3+25+20); 
ctx.lineTo(25+900-25*29,20+20*3+25+20); 
ctx.lineTo(35+900-25*29,30+20*3+25+20); 
ctx.lineTo(25+900-25*29,40+20*3+25+20);
ctx.lineTo(20+900-25*29,40+20*3+25+20);
ctx.lineTo(10+900-25*29,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m304==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*4+25); 
ctx.lineTo(25+900-25*29,20+20*4+25); 
ctx.lineTo(35+900-25*29,30+20*4+25); 
ctx.lineTo(25+900-25*29,40+20*4+25);
ctx.lineTo(20+900-25*29,40+20*4+25);
ctx.lineTo(10+900-25*29,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m304==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*4+25+20); 
ctx.lineTo(25+900-25*29,20+20*4+25+20); 
ctx.lineTo(35+900-25*29,30+20*4+25+20); 
ctx.lineTo(25+900-25*29,40+20*4+25+20);
ctx.lineTo(20+900-25*29,40+20*4+25+20);
ctx.lineTo(10+900-25*29,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



function clearCanvas() {
    c.height = 300;
}
}


var str1=
String(main_array[24])+String(main_array[23])+
String(main_array[22])+String(main_array[21])+
String(main_array[20])+String(main_array[19])+
String(main_array[18])+String(main_array[17])+
String(main_array[16])+String(main_array[15])+
String(main_array[14])+String(main_array[13])+
String(main_array[12])+String(main_array[11])+
String(main_array[10])+String(main_array[9])+
String(main_array[8])+String(main_array[7])+
String(main_array[6])+String(main_array[5])+
String(main_array[4])+String(main_array[3])+
String(main_array[2])+String(main_array[1]);

if(ketasuu==1)
{
var str2=String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==2)
{
var str2=String(test_array2[seed2])+String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==3)
{
var str2=String(test_array2[seed3])+String(test_array2[seed2])+String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==4)
{
var str2=String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==5)
{
var str2=String(test_array2[seed5])+String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==6)
{
var str2=String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==7)
{
var str2=String(test_array2[seed7])+String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==8)
{
var str2=String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==9)
{
var str2=String(test_array2[seed9])+String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==10)
{
var str2=String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==11)
{
var str2=String(test_array2[seed11])+String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==12)
{
var str2=String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==13)
{
var str2=String(test_array2[seed13])+String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==14)
{
var str2=String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==15)
{
var str2=String(test_array2[seed15])+String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==16)
{
var str2=String(test_array2[seed16])+String(test_array2[seed15])+
String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==17)
{
var str2=String(test_array2[seed17])+String(test_array2[seed16])+String(test_array2[seed15])+
String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==18)
{
var str2=String(test_array2[seed18])+String(test_array2[seed17])+
String(test_array2[seed16])+String(test_array2[seed15])+
String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==19)
{
var str2=String(test_array2[seed19])+String(test_array2[seed18])+String(test_array2[seed17])+
String(test_array2[seed16])+String(test_array2[seed15])+
String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

if(ketasuu==20)
{
var str2=String(test_array2[seed20])+String(test_array2[seed19])+
String(test_array2[seed18])+String(test_array2[seed17])+
String(test_array2[seed16])+String(test_array2[seed15])+
String(test_array2[seed14])+String(test_array2[seed13])+
String(test_array2[seed12])+String(test_array2[seed11])+
String(test_array2[seed10])+String(test_array2[seed9])+
String(test_array2[seed8])+String(test_array2[seed7])+
String(test_array2[seed6])+String(test_array2[seed5])+
String(test_array2[seed4])+String(test_array2[seed3])+
String(test_array2[seed2])+
String(test_array[seed]);
ctx.fillText(str2,400,210);
}

ctx.fillText(str2,400,210); 
ctx.fillText(str1,400,280); 

}

function _1keta_func_init(
m15,m11,m12,m13,m14,
m25,m21,m22,m23,m24,
m35,m31,m32,m33,m34,
m45,m41,m42,m43,m44,
m55,m51,m52,m53,m54,
m65,m61,m62,m63,m64,
m75,m71,m72,m73,m74,
m85,m81,m82,m83,m84,
m95,m91,m92,m93,m94,
m105,m101,m102,m103,m104,
m115,m111,m112,m113,m114,
m125,m121,m122,m123,m124,
m135,m131,m132,m133,m134,
m145,m141,m142,m143,m144,
m155,m151,m152,m153,m154,
m165,m161,m162,m163,m164,
m175,m171,m172,m173,m174,
m185,m181,m182,m183,m184,
m195,m191,m192,m193,m194,
m205,m201,m202,m203,m204,
m215,m211,m212,m213,m214,
m225,m221,m222,m223,m224,
m235,m231,m232,m233,m234,
m245,m241,m242,m243,m244,
m255,m251,m252,m253,m254,
m265,m261,m262,m263,m264,
m275,m271,m272,m273,m274,
m285,m281,m282,m283,m284,
m295,m291,m292,m293,m294,
m305,m301,m302,m303,m304
)
{
var c = document.getElementById("sample");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, 1000, 600);

ctx.fillStyle = 'rgb(00,00,00)';
ctx.fillRect(180,5,765,15);
ctx.fillRect(180,20+20*5+25+20,765,15);
ctx.fillRect(170,5,15,20+20*5+25+20+10);
ctx.fillRect(935,5,15,20+20*5+25+20+10);

ctx.fillRect(180,20+20+20,765,5);

ctx.fillRect(20+900,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*1,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*2,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*3,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*4,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*5,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*6,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*7,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*8,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*9,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*10,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*11,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*12,5,5,20+20*5+25+20+10)
ctx.fillRect(20+900-25*13,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*14,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*15,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*16,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*17,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*18,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*19,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*20,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*21,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*22,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*23,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*24,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*25,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*26,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*27,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*28,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*29,5,5,20+20*5+25+20+10);
ctx.fillRect(20+900-25*30,5,5,20+20*5+25+20+10);


if(m15==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20); 
ctx.lineTo(25+900,20); 
ctx.lineTo(35+900,30); 
ctx.lineTo(25+900,40);
ctx.lineTo(20+900,40);
ctx.lineTo(10+900,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m15==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20); 
ctx.lineTo(25+900,20+20); 
ctx.lineTo(35+900,30+20); 
ctx.lineTo(25+900,40+20);
ctx.lineTo(20+900,40+20);
ctx.lineTo(10+900,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m11==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20+25); 
ctx.lineTo(25+900,20+20+25); 
ctx.lineTo(35+900,30+20+25); 
ctx.lineTo(25+900,40+20+25);
ctx.lineTo(20+900,40+20+25);
ctx.lineTo(10+900,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m11==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20+25+20); 
ctx.lineTo(25+900,20+20+25+20); 
ctx.lineTo(35+900,30+20+25+20); 
ctx.lineTo(25+900,40+20+25+20);
ctx.lineTo(20+900,40+20+25+20);
ctx.lineTo(10+900,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m12==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*2+25); 
ctx.lineTo(25+900,20+20*2+25); 
ctx.lineTo(35+900,30+20*2+25); 
ctx.lineTo(25+900,40+20*2+25);
ctx.lineTo(20+900,40+20*2+25);
ctx.lineTo(10+900,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m12==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*2+25+20); 
ctx.lineTo(25+900,20+20*2+25+20); 
ctx.lineTo(35+900,30+20*2+25+20); 
ctx.lineTo(25+900,40+20*2+25+20);
ctx.lineTo(20+900,40+20*2+25+20);
ctx.lineTo(10+900,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m13==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*3+25); 
ctx.lineTo(25+900,20+20*3+25); 
ctx.lineTo(35+900,30+20*3+25); 
ctx.lineTo(25+900,40+20*3+25);
ctx.lineTo(20+900,40+20*3+25);
ctx.lineTo(10+900,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m13==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*3+25+20); 
ctx.lineTo(25+900,20+20*3+25+20); 
ctx.lineTo(35+900,30+20*3+25+20); 
ctx.lineTo(25+900,40+20*3+25+20);
ctx.lineTo(20+900,40+20*3+25+20);
ctx.lineTo(10+900,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m14==1)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*4+25); 
ctx.lineTo(25+900,20+20*4+25); 
ctx.lineTo(35+900,30+20*4+25); 
ctx.lineTo(25+900,40+20*4+25);
ctx.lineTo(20+900,40+20*4+25);
ctx.lineTo(10+900,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m14==0)
{

ctx.beginPath();
ctx.moveTo(20+900,20+20*4+25+20); 
ctx.lineTo(25+900,20+20*4+25+20); 
ctx.lineTo(35+900,30+20*4+25+20); 
ctx.lineTo(25+900,40+20*4+25+20);
ctx.lineTo(20+900,40+20*4+25+20);
ctx.lineTo(10+900,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m25==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20); 
ctx.lineTo(25+900-25*1,20); 
ctx.lineTo(35+900-25*1,30); 
ctx.lineTo(25+900-25*1,40);
ctx.lineTo(20+900-25*1,40);
ctx.lineTo(10+900-25*1,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m25==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20); 
ctx.lineTo(25+900-25*1,20+20); 
ctx.lineTo(35+900-25*1,30+20); 
ctx.lineTo(25+900-25*1,40+20);
ctx.lineTo(20+900-25*1,40+20);
ctx.lineTo(10+900-25*1,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m21==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20+25); 
ctx.lineTo(25+900-25*1,20+20+25); 
ctx.lineTo(35+900-25*1,30+20+25); 
ctx.lineTo(25+900-25*1,40+20+25);
ctx.lineTo(20+900-25*1,40+20+25);
ctx.lineTo(10+900-25*1,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m21==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20+25+20); 
ctx.lineTo(25+900-25*1,20+20+25+20); 
ctx.lineTo(35+900-25*1,30+20+25+20); 
ctx.lineTo(25+900-25*1,40+20+25+20);
ctx.lineTo(20+900-25*1,40+20+25+20);
ctx.lineTo(10+900-25*1,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m22==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*2+25); 
ctx.lineTo(25+900-25*1,20+20*2+25); 
ctx.lineTo(35+900-25*1,30+20*2+25); 
ctx.lineTo(25+900-25*1,40+20*2+25);
ctx.lineTo(20+900-25*1,40+20*2+25);
ctx.lineTo(10+900-25*1,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m22==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*2+25+20); 
ctx.lineTo(25+900-25*1,20+20*2+25+20); 
ctx.lineTo(35+900-25*1,30+20*2+25+20); 
ctx.lineTo(25+900-25*1,40+20*2+25+20);
ctx.lineTo(20+900-25*1,40+20*2+25+20);
ctx.lineTo(10+900-25*1,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m23==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*3+25); 
ctx.lineTo(25+900-25*1,20+20*3+25); 
ctx.lineTo(35+900-25*1,30+20*3+25); 
ctx.lineTo(25+900-25*1,40+20*3+25);
ctx.lineTo(20+900-25*1,40+20*3+25);
ctx.lineTo(10+900-25*1,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m23==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*3+25+20); 
ctx.lineTo(25+900-25*1,20+20*3+25+20); 
ctx.lineTo(35+900-25*1,30+20*3+25+20); 
ctx.lineTo(25+900-25*1,40+20*3+25+20);
ctx.lineTo(20+900-25*1,40+20*3+25+20);
ctx.lineTo(10+900-25*1,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m24==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*4+25); 
ctx.lineTo(25+900-25*1,20+20*4+25); 
ctx.lineTo(35+900-25*1,30+20*4+25); 
ctx.lineTo(25+900-25*1,40+20*4+25);
ctx.lineTo(20+900-25*1,40+20*4+25);
ctx.lineTo(10+900-25*1,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m24==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*1,20+20*4+25+20); 
ctx.lineTo(25+900-25*1,20+20*4+25+20); 
ctx.lineTo(35+900-25*1,30+20*4+25+20); 
ctx.lineTo(25+900-25*1,40+20*4+25+20);
ctx.lineTo(20+900-25*1,40+20*4+25+20);
ctx.lineTo(10+900-25*1,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m35==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20); 
ctx.lineTo(25+900-25*2,20); 
ctx.lineTo(35+900-25*2,30); 
ctx.lineTo(25+900-25*2,40);
ctx.lineTo(20+900-25*2,40);
ctx.lineTo(10+900-25*2,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m35==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20); 
ctx.lineTo(25+900-25*2,20+20); 
ctx.lineTo(35+900-25*2,30+20); 
ctx.lineTo(25+900-25*2,40+20);
ctx.lineTo(20+900-25*2,40+20);
ctx.lineTo(10+900-25*2,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m31==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20+25); 
ctx.lineTo(25+900-25*2,20+20+25); 
ctx.lineTo(35+900-25*2,30+20+25); 
ctx.lineTo(25+900-25*2,40+20+25);
ctx.lineTo(20+900-25*2,40+20+25);
ctx.lineTo(10+900-25*2,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m31==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20+25+20); 
ctx.lineTo(25+900-25*2,20+20+25+20); 
ctx.lineTo(35+900-25*2,30+20+25+20); 
ctx.lineTo(25+900-25*2,40+20+25+20);
ctx.lineTo(20+900-25*2,40+20+25+20);
ctx.lineTo(10+900-25*2,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m32==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*2+25); 
ctx.lineTo(25+900-25*2,20+20*2+25); 
ctx.lineTo(35+900-25*2,30+20*2+25); 
ctx.lineTo(25+900-25*2,40+20*2+25);
ctx.lineTo(20+900-25*2,40+20*2+25);
ctx.lineTo(10+900-25*2,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m32==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*2+25+20); 
ctx.lineTo(25+900-25*2,20+20*2+25+20); 
ctx.lineTo(35+900-25*2,30+20*2+25+20); 
ctx.lineTo(25+900-25*2,40+20*2+25+20);
ctx.lineTo(20+900-25*2,40+20*2+25+20);
ctx.lineTo(10+900-25*2,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m33==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*3+25); 
ctx.lineTo(25+900-25*2,20+20*3+25); 
ctx.lineTo(35+900-25*2,30+20*3+25); 
ctx.lineTo(25+900-25*2,40+20*3+25);
ctx.lineTo(20+900-25*2,40+20*3+25);
ctx.lineTo(10+900-25*2,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m33==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*3+25+20); 
ctx.lineTo(25+900-25*2,20+20*3+25+20); 
ctx.lineTo(35+900-25*2,30+20*3+25+20); 
ctx.lineTo(25+900-25*2,40+20*3+25+20);
ctx.lineTo(20+900-25*2,40+20*3+25+20);
ctx.lineTo(10+900-25*2,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m34==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*4+25); 
ctx.lineTo(25+900-25*2,20+20*4+25); 
ctx.lineTo(35+900-25*2,30+20*4+25); 
ctx.lineTo(25+900-25*2,40+20*4+25);
ctx.lineTo(20+900-25*2,40+20*4+25);
ctx.lineTo(10+900-25*2,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m34==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*2,20+20*4+25+20); 
ctx.lineTo(25+900-25*2,20+20*4+25+20); 
ctx.lineTo(35+900-25*2,30+20*4+25+20); 
ctx.lineTo(25+900-25*2,40+20*4+25+20);
ctx.lineTo(20+900-25*2,40+20*4+25+20);
ctx.lineTo(10+900-25*2,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m45==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20); 
ctx.lineTo(25+900-25*3,20); 
ctx.lineTo(35+900-25*3,30); 
ctx.lineTo(25+900-25*3,40);
ctx.lineTo(20+900-25*3,40);
ctx.lineTo(10+900-25*3,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m45==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20); 
ctx.lineTo(25+900-25*3,20+20); 
ctx.lineTo(35+900-25*3,30+20); 
ctx.lineTo(25+900-25*3,40+20);
ctx.lineTo(20+900-25*3,40+20);
ctx.lineTo(10+900-25*3,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m41==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20+25); 
ctx.lineTo(25+900-25*3,20+20+25); 
ctx.lineTo(35+900-25*3,30+20+25); 
ctx.lineTo(25+900-25*3,40+20+25);
ctx.lineTo(20+900-25*3,40+20+25);
ctx.lineTo(10+900-25*3,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m41==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20+25+20); 
ctx.lineTo(25+900-25*3,20+20+25+20); 
ctx.lineTo(35+900-25*3,30+20+25+20); 
ctx.lineTo(25+900-25*3,40+20+25+20);
ctx.lineTo(20+900-25*3,40+20+25+20);
ctx.lineTo(10+900-25*3,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m42==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*2+25); 
ctx.lineTo(25+900-25*3,20+20*2+25); 
ctx.lineTo(35+900-25*3,30+20*2+25); 
ctx.lineTo(25+900-25*3,40+20*2+25);
ctx.lineTo(20+900-25*3,40+20*2+25);
ctx.lineTo(10+900-25*3,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m42==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*2+25+20); 
ctx.lineTo(25+900-25*3,20+20*2+25+20); 
ctx.lineTo(35+900-25*3,30+20*2+25+20); 
ctx.lineTo(25+900-25*3,40+20*2+25+20);
ctx.lineTo(20+900-25*3,40+20*2+25+20);
ctx.lineTo(10+900-25*3,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m43==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*3+25); 
ctx.lineTo(25+900-25*3,20+20*3+25); 
ctx.lineTo(35+900-25*3,30+20*3+25); 
ctx.lineTo(25+900-25*3,40+20*3+25);
ctx.lineTo(20+900-25*3,40+20*3+25);
ctx.lineTo(10+900-25*3,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m43==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*3+25+20); 
ctx.lineTo(25+900-25*3,20+20*3+25+20); 
ctx.lineTo(35+900-25*3,30+20*3+25+20); 
ctx.lineTo(25+900-25*3,40+20*3+25+20);
ctx.lineTo(20+900-25*3,40+20*3+25+20);
ctx.lineTo(10+900-25*3,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m44==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*4+25); 
ctx.lineTo(25+900-25*3,20+20*4+25); 
ctx.lineTo(35+900-25*3,30+20*4+25); 
ctx.lineTo(25+900-25*3,40+20*4+25);
ctx.lineTo(20+900-25*3,40+20*4+25);
ctx.lineTo(10+900-25*3,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m44==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*3,20+20*4+25+20); 
ctx.lineTo(25+900-25*3,20+20*4+25+20); 
ctx.lineTo(35+900-25*3,30+20*4+25+20); 
ctx.lineTo(25+900-25*3,40+20*4+25+20);
ctx.lineTo(20+900-25*3,40+20*4+25+20);
ctx.lineTo(10+900-25*3,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m55==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20); 
ctx.lineTo(25+900-25*4,20); 
ctx.lineTo(35+900-25*4,30); 
ctx.lineTo(25+900-25*4,40);
ctx.lineTo(20+900-25*4,40);
ctx.lineTo(10+900-25*4,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m55==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20); 
ctx.lineTo(25+900-25*4,20+20); 
ctx.lineTo(35+900-25*4,30+20); 
ctx.lineTo(25+900-25*4,40+20);
ctx.lineTo(20+900-25*4,40+20);
ctx.lineTo(10+900-25*4,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m51==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20+25); 
ctx.lineTo(25+900-25*4,20+20+25); 
ctx.lineTo(35+900-25*4,30+20+25); 
ctx.lineTo(25+900-25*4,40+20+25);
ctx.lineTo(20+900-25*4,40+20+25);
ctx.lineTo(10+900-25*4,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m51==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20+25+20); 
ctx.lineTo(25+900-25*4,20+20+25+20); 
ctx.lineTo(35+900-25*4,30+20+25+20); 
ctx.lineTo(25+900-25*4,40+20+25+20);
ctx.lineTo(20+900-25*4,40+20+25+20);
ctx.lineTo(10+900-25*4,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m52==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*2+25); 
ctx.lineTo(25+900-25*4,20+20*2+25); 
ctx.lineTo(35+900-25*4,30+20*2+25); 
ctx.lineTo(25+900-25*4,40+20*2+25);
ctx.lineTo(20+900-25*4,40+20*2+25);
ctx.lineTo(10+900-25*4,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m52==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*2+25+20); 
ctx.lineTo(25+900-25*4,20+20*2+25+20); 
ctx.lineTo(35+900-25*4,30+20*2+25+20); 
ctx.lineTo(25+900-25*4,40+20*2+25+20);
ctx.lineTo(20+900-25*4,40+20*2+25+20);
ctx.lineTo(10+900-25*4,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m53==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*3+25); 
ctx.lineTo(25+900-25*4,20+20*3+25); 
ctx.lineTo(35+900-25*4,30+20*3+25); 
ctx.lineTo(25+900-25*4,40+20*3+25);
ctx.lineTo(20+900-25*4,40+20*3+25);
ctx.lineTo(10+900-25*4,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m53==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*3+25+20); 
ctx.lineTo(25+900-25*4,20+20*3+25+20); 
ctx.lineTo(35+900-25*4,30+20*3+25+20); 
ctx.lineTo(25+900-25*4,40+20*3+25+20);
ctx.lineTo(20+900-25*4,40+20*3+25+20);
ctx.lineTo(10+900-25*4,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m54==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*4+25); 
ctx.lineTo(25+900-25*4,20+20*4+25); 
ctx.lineTo(35+900-25*4,30+20*4+25); 
ctx.lineTo(25+900-25*4,40+20*4+25);
ctx.lineTo(20+900-25*4,40+20*4+25);
ctx.lineTo(10+900-25*4,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m54==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*4,20+20*4+25+20); 
ctx.lineTo(25+900-25*4,20+20*4+25+20); 
ctx.lineTo(35+900-25*4,30+20*4+25+20); 
ctx.lineTo(25+900-25*4,40+20*4+25+20);
ctx.lineTo(20+900-25*4,40+20*4+25+20);
ctx.lineTo(10+900-25*4,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m65==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20); 
ctx.lineTo(25+900-25*5,20); 
ctx.lineTo(35+900-25*5,30); 
ctx.lineTo(25+900-25*5,40);
ctx.lineTo(20+900-25*5,40);
ctx.lineTo(10+900-25*5,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m65==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20); 
ctx.lineTo(25+900-25*5,20+20); 
ctx.lineTo(35+900-25*5,30+20); 
ctx.lineTo(25+900-25*5,40+20);
ctx.lineTo(20+900-25*5,40+20);
ctx.lineTo(10+900-25*5,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m61==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20+25); 
ctx.lineTo(25+900-25*5,20+20+25); 
ctx.lineTo(35+900-25*5,30+20+25); 
ctx.lineTo(25+900-25*5,40+20+25);
ctx.lineTo(20+900-25*5,40+20+25);
ctx.lineTo(10+900-25*5,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m61==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20+25+20); 
ctx.lineTo(25+900-25*5,20+20+25+20); 
ctx.lineTo(35+900-25*5,30+20+25+20); 
ctx.lineTo(25+900-25*5,40+20+25+20);
ctx.lineTo(20+900-25*5,40+20+25+20);
ctx.lineTo(10+900-25*5,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m62==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*2+25); 
ctx.lineTo(25+900-25*5,20+20*2+25); 
ctx.lineTo(35+900-25*5,30+20*2+25); 
ctx.lineTo(25+900-25*5,40+20*2+25);
ctx.lineTo(20+900-25*5,40+20*2+25);
ctx.lineTo(10+900-25*5,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m62==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*2+25+20); 
ctx.lineTo(25+900-25*5,20+20*2+25+20); 
ctx.lineTo(35+900-25*5,30+20*2+25+20); 
ctx.lineTo(25+900-25*5,40+20*2+25+20);
ctx.lineTo(20+900-25*5,40+20*2+25+20);
ctx.lineTo(10+900-25*5,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m63==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*3+25); 
ctx.lineTo(25+900-25*5,20+20*3+25); 
ctx.lineTo(35+900-25*5,30+20*3+25); 
ctx.lineTo(25+900-25*5,40+20*3+25);
ctx.lineTo(20+900-25*5,40+20*3+25);
ctx.lineTo(10+900-25*5,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m63==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*3+25+20); 
ctx.lineTo(25+900-25*5,20+20*3+25+20); 
ctx.lineTo(35+900-25*5,30+20*3+25+20); 
ctx.lineTo(25+900-25*5,40+20*3+25+20);
ctx.lineTo(20+900-25*5,40+20*3+25+20);
ctx.lineTo(10+900-25*5,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m64==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*4+25); 
ctx.lineTo(25+900-25*5,20+20*4+25); 
ctx.lineTo(35+900-25*5,30+20*4+25); 
ctx.lineTo(25+900-25*5,40+20*4+25);
ctx.lineTo(20+900-25*5,40+20*4+25);
ctx.lineTo(10+900-25*5,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m64==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*5,20+20*4+25+20); 
ctx.lineTo(25+900-25*5,20+20*4+25+20); 
ctx.lineTo(35+900-25*5,30+20*4+25+20); 
ctx.lineTo(25+900-25*5,40+20*4+25+20);
ctx.lineTo(20+900-25*5,40+20*4+25+20);
ctx.lineTo(10+900-25*5,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m75==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20); 
ctx.lineTo(25+900-25*6,20); 
ctx.lineTo(35+900-25*6,30); 
ctx.lineTo(25+900-25*6,40);
ctx.lineTo(20+900-25*6,40);
ctx.lineTo(10+900-25*6,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m75==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20); 
ctx.lineTo(25+900-25*6,20+20); 
ctx.lineTo(35+900-25*6,30+20); 
ctx.lineTo(25+900-25*6,40+20);
ctx.lineTo(20+900-25*6,40+20);
ctx.lineTo(10+900-25*6,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m71==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20+25); 
ctx.lineTo(25+900-25*6,20+20+25); 
ctx.lineTo(35+900-25*6,30+20+25); 
ctx.lineTo(25+900-25*6,40+20+25);
ctx.lineTo(20+900-25*6,40+20+25);
ctx.lineTo(10+900-25*6,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m71==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20+25+20); 
ctx.lineTo(25+900-25*6,20+20+25+20); 
ctx.lineTo(35+900-25*6,30+20+25+20); 
ctx.lineTo(25+900-25*6,40+20+25+20);
ctx.lineTo(20+900-25*6,40+20+25+20);
ctx.lineTo(10+900-25*6,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m72==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*2+25); 
ctx.lineTo(25+900-25*6,20+20*2+25); 
ctx.lineTo(35+900-25*6,30+20*2+25); 
ctx.lineTo(25+900-25*6,40+20*2+25);
ctx.lineTo(20+900-25*6,40+20*2+25);
ctx.lineTo(10+900-25*6,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m72==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*2+25+20); 
ctx.lineTo(25+900-25*6,20+20*2+25+20); 
ctx.lineTo(35+900-25*6,30+20*2+25+20); 
ctx.lineTo(25+900-25*6,40+20*2+25+20);
ctx.lineTo(20+900-25*6,40+20*2+25+20);
ctx.lineTo(10+900-25*6,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m73==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*3+25); 
ctx.lineTo(25+900-25*6,20+20*3+25); 
ctx.lineTo(35+900-25*6,30+20*3+25); 
ctx.lineTo(25+900-25*6,40+20*3+25);
ctx.lineTo(20+900-25*6,40+20*3+25);
ctx.lineTo(10+900-25*6,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m73==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*3+25+20); 
ctx.lineTo(25+900-25*6,20+20*3+25+20); 
ctx.lineTo(35+900-25*6,30+20*3+25+20); 
ctx.lineTo(25+900-25*6,40+20*3+25+20);
ctx.lineTo(20+900-25*6,40+20*3+25+20);
ctx.lineTo(10+900-25*6,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m74==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*4+25); 
ctx.lineTo(25+900-25*6,20+20*4+25); 
ctx.lineTo(35+900-25*6,30+20*4+25); 
ctx.lineTo(25+900-25*6,40+20*4+25);
ctx.lineTo(20+900-25*6,40+20*4+25);
ctx.lineTo(10+900-25*6,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m74==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*6,20+20*4+25+20); 
ctx.lineTo(25+900-25*6,20+20*4+25+20); 
ctx.lineTo(35+900-25*6,30+20*4+25+20); 
ctx.lineTo(25+900-25*6,40+20*4+25+20);
ctx.lineTo(20+900-25*6,40+20*4+25+20);
ctx.lineTo(10+900-25*6,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m85==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20); 
ctx.lineTo(25+900-25*7,20); 
ctx.lineTo(35+900-25*7,30); 
ctx.lineTo(25+900-25*7,40);
ctx.lineTo(20+900-25*7,40);
ctx.lineTo(10+900-25*7,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m85==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20); 
ctx.lineTo(25+900-25*7,20+20); 
ctx.lineTo(35+900-25*7,30+20); 
ctx.lineTo(25+900-25*7,40+20);
ctx.lineTo(20+900-25*7,40+20);
ctx.lineTo(10+900-25*7,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m81==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20+25); 
ctx.lineTo(25+900-25*7,20+20+25); 
ctx.lineTo(35+900-25*7,30+20+25); 
ctx.lineTo(25+900-25*7,40+20+25);
ctx.lineTo(20+900-25*7,40+20+25);
ctx.lineTo(10+900-25*7,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m81==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20+25+20); 
ctx.lineTo(25+900-25*7,20+20+25+20); 
ctx.lineTo(35+900-25*7,30+20+25+20); 
ctx.lineTo(25+900-25*7,40+20+25+20);
ctx.lineTo(20+900-25*7,40+20+25+20);
ctx.lineTo(10+900-25*7,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m82==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*2+25); 
ctx.lineTo(25+900-25*7,20+20*2+25); 
ctx.lineTo(35+900-25*7,30+20*2+25); 
ctx.lineTo(25+900-25*7,40+20*2+25);
ctx.lineTo(20+900-25*7,40+20*2+25);
ctx.lineTo(10+900-25*7,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m82==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*2+25+20); 
ctx.lineTo(25+900-25*7,20+20*2+25+20); 
ctx.lineTo(35+900-25*7,30+20*2+25+20); 
ctx.lineTo(25+900-25*7,40+20*2+25+20);
ctx.lineTo(20+900-25*7,40+20*2+25+20);
ctx.lineTo(10+900-25*7,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m83==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*3+25); 
ctx.lineTo(25+900-25*7,20+20*3+25); 
ctx.lineTo(35+900-25*7,30+20*3+25); 
ctx.lineTo(25+900-25*7,40+20*3+25);
ctx.lineTo(20+900-25*7,40+20*3+25);
ctx.lineTo(10+900-25*7,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m83==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*3+25+20); 
ctx.lineTo(25+900-25*7,20+20*3+25+20); 
ctx.lineTo(35+900-25*7,30+20*3+25+20); 
ctx.lineTo(25+900-25*7,40+20*3+25+20);
ctx.lineTo(20+900-25*7,40+20*3+25+20);
ctx.lineTo(10+900-25*7,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m84==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*4+25); 
ctx.lineTo(25+900-25*7,20+20*4+25); 
ctx.lineTo(35+900-25*7,30+20*4+25); 
ctx.lineTo(25+900-25*7,40+20*4+25);
ctx.lineTo(20+900-25*7,40+20*4+25);
ctx.lineTo(10+900-25*7,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m84==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*7,20+20*4+25+20); 
ctx.lineTo(25+900-25*7,20+20*4+25+20); 
ctx.lineTo(35+900-25*7,30+20*4+25+20); 
ctx.lineTo(25+900-25*7,40+20*4+25+20);
ctx.lineTo(20+900-25*7,40+20*4+25+20);
ctx.lineTo(10+900-25*7,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m95==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20); 
ctx.lineTo(25+900-25*8,20); 
ctx.lineTo(35+900-25*8,30); 
ctx.lineTo(25+900-25*8,40);
ctx.lineTo(20+900-25*8,40);
ctx.lineTo(10+900-25*8,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m95==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20); 
ctx.lineTo(25+900-25*8,20+20); 
ctx.lineTo(35+900-25*8,30+20); 
ctx.lineTo(25+900-25*8,40+20);
ctx.lineTo(20+900-25*8,40+20);
ctx.lineTo(10+900-25*8,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m91==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20+25); 
ctx.lineTo(25+900-25*8,20+20+25); 
ctx.lineTo(35+900-25*8,30+20+25); 
ctx.lineTo(25+900-25*8,40+20+25);
ctx.lineTo(20+900-25*8,40+20+25);
ctx.lineTo(10+900-25*8,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m91==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20+25+20); 
ctx.lineTo(25+900-25*8,20+20+25+20); 
ctx.lineTo(35+900-25*8,30+20+25+20); 
ctx.lineTo(25+900-25*8,40+20+25+20);
ctx.lineTo(20+900-25*8,40+20+25+20);
ctx.lineTo(10+900-25*8,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m92==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*2+25); 
ctx.lineTo(25+900-25*8,20+20*2+25); 
ctx.lineTo(35+900-25*8,30+20*2+25); 
ctx.lineTo(25+900-25*8,40+20*2+25);
ctx.lineTo(20+900-25*8,40+20*2+25);
ctx.lineTo(10+900-25*8,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m92==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*2+25+20); 
ctx.lineTo(25+900-25*8,20+20*2+25+20); 
ctx.lineTo(35+900-25*8,30+20*2+25+20); 
ctx.lineTo(25+900-25*8,40+20*2+25+20);
ctx.lineTo(20+900-25*8,40+20*2+25+20);
ctx.lineTo(10+900-25*8,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m93==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*3+25); 
ctx.lineTo(25+900-25*8,20+20*3+25); 
ctx.lineTo(35+900-25*8,30+20*3+25); 
ctx.lineTo(25+900-25*8,40+20*3+25);
ctx.lineTo(20+900-25*8,40+20*3+25);
ctx.lineTo(10+900-25*8,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m93==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*3+25+20); 
ctx.lineTo(25+900-25*8,20+20*3+25+20); 
ctx.lineTo(35+900-25*8,30+20*3+25+20); 
ctx.lineTo(25+900-25*8,40+20*3+25+20);
ctx.lineTo(20+900-25*8,40+20*3+25+20);
ctx.lineTo(10+900-25*8,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m94==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*4+25); 
ctx.lineTo(25+900-25*8,20+20*4+25); 
ctx.lineTo(35+900-25*8,30+20*4+25); 
ctx.lineTo(25+900-25*8,40+20*4+25);
ctx.lineTo(20+900-25*8,40+20*4+25);
ctx.lineTo(10+900-25*8,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m94==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*8,20+20*4+25+20); 
ctx.lineTo(25+900-25*8,20+20*4+25+20); 
ctx.lineTo(35+900-25*8,30+20*4+25+20); 
ctx.lineTo(25+900-25*8,40+20*4+25+20);
ctx.lineTo(20+900-25*8,40+20*4+25+20);
ctx.lineTo(10+900-25*8,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m105==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20); 
ctx.lineTo(25+900-25*9,20); 
ctx.lineTo(35+900-25*9,30); 
ctx.lineTo(25+900-25*9,40);
ctx.lineTo(20+900-25*9,40);
ctx.lineTo(10+900-25*9,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m105==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20); 
ctx.lineTo(25+900-25*9,20+20); 
ctx.lineTo(35+900-25*9,30+20); 
ctx.lineTo(25+900-25*9,40+20);
ctx.lineTo(20+900-25*9,40+20);
ctx.lineTo(10+900-25*9,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m101==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20+25); 
ctx.lineTo(25+900-25*9,20+20+25); 
ctx.lineTo(35+900-25*9,30+20+25); 
ctx.lineTo(25+900-25*9,40+20+25);
ctx.lineTo(20+900-25*9,40+20+25);
ctx.lineTo(10+900-25*9,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m101==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20+25+20); 
ctx.lineTo(25+900-25*9,20+20+25+20); 
ctx.lineTo(35+900-25*9,30+20+25+20); 
ctx.lineTo(25+900-25*9,40+20+25+20);
ctx.lineTo(20+900-25*9,40+20+25+20);
ctx.lineTo(10+900-25*9,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m102==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*2+25); 
ctx.lineTo(25+900-25*9,20+20*2+25); 
ctx.lineTo(35+900-25*9,30+20*2+25); 
ctx.lineTo(25+900-25*9,40+20*2+25);
ctx.lineTo(20+900-25*9,40+20*2+25);
ctx.lineTo(10+900-25*9,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m102==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*2+25+20); 
ctx.lineTo(25+900-25*9,20+20*2+25+20); 
ctx.lineTo(35+900-25*9,30+20*2+25+20); 
ctx.lineTo(25+900-25*9,40+20*2+25+20);
ctx.lineTo(20+900-25*9,40+20*2+25+20);
ctx.lineTo(10+900-25*9,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m103==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*3+25); 
ctx.lineTo(25+900-25*9,20+20*3+25); 
ctx.lineTo(35+900-25*9,30+20*3+25); 
ctx.lineTo(25+900-25*9,40+20*3+25);
ctx.lineTo(20+900-25*9,40+20*3+25);
ctx.lineTo(10+900-25*9,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m103==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*3+25+20); 
ctx.lineTo(25+900-25*9,20+20*3+25+20); 
ctx.lineTo(35+900-25*9,30+20*3+25+20); 
ctx.lineTo(25+900-25*9,40+20*3+25+20);
ctx.lineTo(20+900-25*9,40+20*3+25+20);
ctx.lineTo(10+900-25*9,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m104==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*4+25); 
ctx.lineTo(25+900-25*9,20+20*4+25); 
ctx.lineTo(35+900-25*9,30+20*4+25); 
ctx.lineTo(25+900-25*9,40+20*4+25);
ctx.lineTo(20+900-25*9,40+20*4+25);
ctx.lineTo(10+900-25*9,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m104==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*9,20+20*4+25+20); 
ctx.lineTo(25+900-25*9,20+20*4+25+20); 
ctx.lineTo(35+900-25*9,30+20*4+25+20); 
ctx.lineTo(25+900-25*9,40+20*4+25+20);
ctx.lineTo(20+900-25*9,40+20*4+25+20);
ctx.lineTo(10+900-25*9,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m115==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20); 
ctx.lineTo(25+900-25*10,20); 
ctx.lineTo(35+900-25*10,30); 
ctx.lineTo(25+900-25*10,40);
ctx.lineTo(20+900-25*10,40);
ctx.lineTo(10+900-25*10,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m115==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20); 
ctx.lineTo(25+900-25*10,20+20); 
ctx.lineTo(35+900-25*10,30+20); 
ctx.lineTo(25+900-25*10,40+20);
ctx.lineTo(20+900-25*10,40+20);
ctx.lineTo(10+900-25*10,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m111==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20+25); 
ctx.lineTo(25+900-25*10,20+20+25); 
ctx.lineTo(35+900-25*10,30+20+25); 
ctx.lineTo(25+900-25*10,40+20+25);
ctx.lineTo(20+900-25*10,40+20+25);
ctx.lineTo(10+900-25*10,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m111==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20+25+20); 
ctx.lineTo(25+900-25*10,20+20+25+20); 
ctx.lineTo(35+900-25*10,30+20+25+20); 
ctx.lineTo(25+900-25*10,40+20+25+20);
ctx.lineTo(20+900-25*10,40+20+25+20);
ctx.lineTo(10+900-25*10,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m112==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*2+25); 
ctx.lineTo(25+900-25*10,20+20*2+25); 
ctx.lineTo(35+900-25*10,30+20*2+25); 
ctx.lineTo(25+900-25*10,40+20*2+25);
ctx.lineTo(20+900-25*10,40+20*2+25);
ctx.lineTo(10+900-25*10,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m112==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*2+25+20); 
ctx.lineTo(25+900-25*10,20+20*2+25+20); 
ctx.lineTo(35+900-25*10,30+20*2+25+20); 
ctx.lineTo(25+900-25*10,40+20*2+25+20);
ctx.lineTo(20+900-25*10,40+20*2+25+20);
ctx.lineTo(10+900-25*10,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m113==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*3+25); 
ctx.lineTo(25+900-25*10,20+20*3+25); 
ctx.lineTo(35+900-25*10,30+20*3+25); 
ctx.lineTo(25+900-25*10,40+20*3+25);
ctx.lineTo(20+900-25*10,40+20*3+25);
ctx.lineTo(10+900-25*10,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m113==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*3+25+20); 
ctx.lineTo(25+900-25*10,20+20*3+25+20); 
ctx.lineTo(35+900-25*10,30+20*3+25+20); 
ctx.lineTo(25+900-25*10,40+20*3+25+20);
ctx.lineTo(20+900-25*10,40+20*3+25+20);
ctx.lineTo(10+900-25*10,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m114==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*4+25); 
ctx.lineTo(25+900-25*10,20+20*4+25); 
ctx.lineTo(35+900-25*10,30+20*4+25); 
ctx.lineTo(25+900-25*10,40+20*4+25);
ctx.lineTo(20+900-25*10,40+20*4+25);
ctx.lineTo(10+900-25*10,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m114==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*10,20+20*4+25+20); 
ctx.lineTo(25+900-25*10,20+20*4+25+20); 
ctx.lineTo(35+900-25*10,30+20*4+25+20); 
ctx.lineTo(25+900-25*10,40+20*4+25+20);
ctx.lineTo(20+900-25*10,40+20*4+25+20);
ctx.lineTo(10+900-25*10,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m125==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20); 
ctx.lineTo(25+900-25*11,20); 
ctx.lineTo(35+900-25*11,30); 
ctx.lineTo(25+900-25*11,40);
ctx.lineTo(20+900-25*11,40);
ctx.lineTo(10+900-25*11,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m125==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20); 
ctx.lineTo(25+900-25*11,20+20); 
ctx.lineTo(35+900-25*11,30+20); 
ctx.lineTo(25+900-25*11,40+20);
ctx.lineTo(20+900-25*11,40+20);
ctx.lineTo(10+900-25*11,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m121==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20+25); 
ctx.lineTo(25+900-25*11,20+20+25); 
ctx.lineTo(35+900-25*11,30+20+25); 
ctx.lineTo(25+900-25*11,40+20+25);
ctx.lineTo(20+900-25*11,40+20+25);
ctx.lineTo(10+900-25*11,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m121==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20+25+20); 
ctx.lineTo(25+900-25*11,20+20+25+20); 
ctx.lineTo(35+900-25*11,30+20+25+20); 
ctx.lineTo(25+900-25*11,40+20+25+20);
ctx.lineTo(20+900-25*11,40+20+25+20);
ctx.lineTo(10+900-25*11,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m122==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*2+25); 
ctx.lineTo(25+900-25*11,20+20*2+25); 
ctx.lineTo(35+900-25*11,30+20*2+25); 
ctx.lineTo(25+900-25*11,40+20*2+25);
ctx.lineTo(20+900-25*11,40+20*2+25);
ctx.lineTo(10+900-25*11,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m122==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*2+25+20); 
ctx.lineTo(25+900-25*11,20+20*2+25+20); 
ctx.lineTo(35+900-25*11,30+20*2+25+20); 
ctx.lineTo(25+900-25*11,40+20*2+25+20);
ctx.lineTo(20+900-25*11,40+20*2+25+20);
ctx.lineTo(10+900-25*11,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m123==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*3+25); 
ctx.lineTo(25+900-25*11,20+20*3+25); 
ctx.lineTo(35+900-25*11,30+20*3+25); 
ctx.lineTo(25+900-25*11,40+20*3+25);
ctx.lineTo(20+900-25*11,40+20*3+25);
ctx.lineTo(10+900-25*11,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m123==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*3+25+20); 
ctx.lineTo(25+900-25*11,20+20*3+25+20); 
ctx.lineTo(35+900-25*11,30+20*3+25+20); 
ctx.lineTo(25+900-25*11,40+20*3+25+20);
ctx.lineTo(20+900-25*11,40+20*3+25+20);
ctx.lineTo(10+900-25*11,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m124==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*4+25); 
ctx.lineTo(25+900-25*11,20+20*4+25); 
ctx.lineTo(35+900-25*11,30+20*4+25); 
ctx.lineTo(25+900-25*11,40+20*4+25);
ctx.lineTo(20+900-25*11,40+20*4+25);
ctx.lineTo(10+900-25*11,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m124==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*11,20+20*4+25+20); 
ctx.lineTo(25+900-25*11,20+20*4+25+20); 
ctx.lineTo(35+900-25*11,30+20*4+25+20); 
ctx.lineTo(25+900-25*11,40+20*4+25+20);
ctx.lineTo(20+900-25*11,40+20*4+25+20);
ctx.lineTo(10+900-25*11,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m135==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20); 
ctx.lineTo(25+900-25*12,20); 
ctx.lineTo(35+900-25*12,30); 
ctx.lineTo(25+900-25*12,40);
ctx.lineTo(20+900-25*12,40);
ctx.lineTo(10+900-25*12,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m135==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20); 
ctx.lineTo(25+900-25*12,20+20); 
ctx.lineTo(35+900-25*12,30+20); 
ctx.lineTo(25+900-25*12,40+20);
ctx.lineTo(20+900-25*12,40+20);
ctx.lineTo(10+900-25*12,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m131==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20+25); 
ctx.lineTo(25+900-25*12,20+20+25); 
ctx.lineTo(35+900-25*12,30+20+25); 
ctx.lineTo(25+900-25*12,40+20+25);
ctx.lineTo(20+900-25*12,40+20+25);
ctx.lineTo(10+900-25*12,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m131==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20+25+20); 
ctx.lineTo(25+900-25*12,20+20+25+20); 
ctx.lineTo(35+900-25*12,30+20+25+20); 
ctx.lineTo(25+900-25*12,40+20+25+20);
ctx.lineTo(20+900-25*12,40+20+25+20);
ctx.lineTo(10+900-25*12,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m132==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*2+25); 
ctx.lineTo(25+900-25*12,20+20*2+25); 
ctx.lineTo(35+900-25*12,30+20*2+25); 
ctx.lineTo(25+900-25*12,40+20*2+25);
ctx.lineTo(20+900-25*12,40+20*2+25);
ctx.lineTo(10+900-25*12,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m132==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*2+25+20); 
ctx.lineTo(25+900-25*12,20+20*2+25+20); 
ctx.lineTo(35+900-25*12,30+20*2+25+20); 
ctx.lineTo(25+900-25*12,40+20*2+25+20);
ctx.lineTo(20+900-25*12,40+20*2+25+20);
ctx.lineTo(10+900-25*12,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m133==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*3+25); 
ctx.lineTo(25+900-25*12,20+20*3+25); 
ctx.lineTo(35+900-25*12,30+20*3+25); 
ctx.lineTo(25+900-25*12,40+20*3+25);
ctx.lineTo(20+900-25*12,40+20*3+25);
ctx.lineTo(10+900-25*12,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m133==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*3+25+20); 
ctx.lineTo(25+900-25*12,20+20*3+25+20); 
ctx.lineTo(35+900-25*12,30+20*3+25+20); 
ctx.lineTo(25+900-25*12,40+20*3+25+20);
ctx.lineTo(20+900-25*12,40+20*3+25+20);
ctx.lineTo(10+900-25*12,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m134==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*4+25); 
ctx.lineTo(25+900-25*12,20+20*4+25); 
ctx.lineTo(35+900-25*12,30+20*4+25); 
ctx.lineTo(25+900-25*12,40+20*4+25);
ctx.lineTo(20+900-25*12,40+20*4+25);
ctx.lineTo(10+900-25*12,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m134==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*12,20+20*4+25+20); 
ctx.lineTo(25+900-25*12,20+20*4+25+20); 
ctx.lineTo(35+900-25*12,30+20*4+25+20); 
ctx.lineTo(25+900-25*12,40+20*4+25+20);
ctx.lineTo(20+900-25*12,40+20*4+25+20);
ctx.lineTo(10+900-25*12,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m145==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20); 
ctx.lineTo(25+900-25*13,20); 
ctx.lineTo(35+900-25*13,30); 
ctx.lineTo(25+900-25*13,40);
ctx.lineTo(20+900-25*13,40);
ctx.lineTo(10+900-25*13,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m145==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20); 
ctx.lineTo(25+900-25*13,20+20); 
ctx.lineTo(35+900-25*13,30+20); 
ctx.lineTo(25+900-25*13,40+20);
ctx.lineTo(20+900-25*13,40+20);
ctx.lineTo(10+900-25*13,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m141==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20+25); 
ctx.lineTo(25+900-25*13,20+20+25); 
ctx.lineTo(35+900-25*13,30+20+25); 
ctx.lineTo(25+900-25*13,40+20+25);
ctx.lineTo(20+900-25*13,40+20+25);
ctx.lineTo(10+900-25*13,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m141==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20+25+20); 
ctx.lineTo(25+900-25*13,20+20+25+20); 
ctx.lineTo(35+900-25*13,30+20+25+20); 
ctx.lineTo(25+900-25*13,40+20+25+20);
ctx.lineTo(20+900-25*13,40+20+25+20);
ctx.lineTo(10+900-25*13,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m142==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*2+25); 
ctx.lineTo(25+900-25*13,20+20*2+25); 
ctx.lineTo(35+900-25*13,30+20*2+25); 
ctx.lineTo(25+900-25*13,40+20*2+25);
ctx.lineTo(20+900-25*13,40+20*2+25);
ctx.lineTo(10+900-25*13,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m142==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*2+25+20); 
ctx.lineTo(25+900-25*13,20+20*2+25+20); 
ctx.lineTo(35+900-25*13,30+20*2+25+20); 
ctx.lineTo(25+900-25*13,40+20*2+25+20);
ctx.lineTo(20+900-25*13,40+20*2+25+20);
ctx.lineTo(10+900-25*13,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m143==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*3+25); 
ctx.lineTo(25+900-25*13,20+20*3+25); 
ctx.lineTo(35+900-25*13,30+20*3+25); 
ctx.lineTo(25+900-25*13,40+20*3+25);
ctx.lineTo(20+900-25*13,40+20*3+25);
ctx.lineTo(10+900-25*13,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m143==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*3+25+20); 
ctx.lineTo(25+900-25*13,20+20*3+25+20); 
ctx.lineTo(35+900-25*13,30+20*3+25+20); 
ctx.lineTo(25+900-25*13,40+20*3+25+20);
ctx.lineTo(20+900-25*13,40+20*3+25+20);
ctx.lineTo(10+900-25*13,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m144==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*4+25); 
ctx.lineTo(25+900-25*13,20+20*4+25); 
ctx.lineTo(35+900-25*13,30+20*4+25); 
ctx.lineTo(25+900-25*13,40+20*4+25);
ctx.lineTo(20+900-25*13,40+20*4+25);
ctx.lineTo(10+900-25*13,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m144==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*13,20+20*4+25+20); 
ctx.lineTo(25+900-25*13,20+20*4+25+20); 
ctx.lineTo(35+900-25*13,30+20*4+25+20); 
ctx.lineTo(25+900-25*13,40+20*4+25+20);
ctx.lineTo(20+900-25*13,40+20*4+25+20);
ctx.lineTo(10+900-25*13,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m155==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20); 
ctx.lineTo(25+900-25*14,20); 
ctx.lineTo(35+900-25*14,30); 
ctx.lineTo(25+900-25*14,40);
ctx.lineTo(20+900-25*14,40);
ctx.lineTo(10+900-25*14,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m155==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20); 
ctx.lineTo(25+900-25*14,20+20); 
ctx.lineTo(35+900-25*14,30+20); 
ctx.lineTo(25+900-25*14,40+20);
ctx.lineTo(20+900-25*14,40+20);
ctx.lineTo(10+900-25*14,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m151==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20+25); 
ctx.lineTo(25+900-25*14,20+20+25); 
ctx.lineTo(35+900-25*14,30+20+25); 
ctx.lineTo(25+900-25*14,40+20+25);
ctx.lineTo(20+900-25*14,40+20+25);
ctx.lineTo(10+900-25*14,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m151==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20+25+20); 
ctx.lineTo(25+900-25*14,20+20+25+20); 
ctx.lineTo(35+900-25*14,30+20+25+20); 
ctx.lineTo(25+900-25*14,40+20+25+20);
ctx.lineTo(20+900-25*14,40+20+25+20);
ctx.lineTo(10+900-25*14,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m152==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*2+25); 
ctx.lineTo(25+900-25*14,20+20*2+25); 
ctx.lineTo(35+900-25*14,30+20*2+25); 
ctx.lineTo(25+900-25*14,40+20*2+25);
ctx.lineTo(20+900-25*14,40+20*2+25);
ctx.lineTo(10+900-25*14,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m152==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*2+25+20); 
ctx.lineTo(25+900-25*14,20+20*2+25+20); 
ctx.lineTo(35+900-25*14,30+20*2+25+20); 
ctx.lineTo(25+900-25*14,40+20*2+25+20);
ctx.lineTo(20+900-25*14,40+20*2+25+20);
ctx.lineTo(10+900-25*14,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m153==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*3+25); 
ctx.lineTo(25+900-25*14,20+20*3+25); 
ctx.lineTo(35+900-25*14,30+20*3+25); 
ctx.lineTo(25+900-25*14,40+20*3+25);
ctx.lineTo(20+900-25*14,40+20*3+25);
ctx.lineTo(10+900-25*14,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m153==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*3+25+20); 
ctx.lineTo(25+900-25*14,20+20*3+25+20); 
ctx.lineTo(35+900-25*14,30+20*3+25+20); 
ctx.lineTo(25+900-25*14,40+20*3+25+20);
ctx.lineTo(20+900-25*14,40+20*3+25+20);
ctx.lineTo(10+900-25*14,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m154==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*4+25); 
ctx.lineTo(25+900-25*14,20+20*4+25); 
ctx.lineTo(35+900-25*14,30+20*4+25); 
ctx.lineTo(25+900-25*14,40+20*4+25);
ctx.lineTo(20+900-25*14,40+20*4+25);
ctx.lineTo(10+900-25*14,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m154==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*14,20+20*4+25+20); 
ctx.lineTo(25+900-25*14,20+20*4+25+20); 
ctx.lineTo(35+900-25*14,30+20*4+25+20); 
ctx.lineTo(25+900-25*14,40+20*4+25+20);
ctx.lineTo(20+900-25*14,40+20*4+25+20);
ctx.lineTo(10+900-25*14,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m165==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20); 
ctx.lineTo(25+900-25*15,20); 
ctx.lineTo(35+900-25*15,30); 
ctx.lineTo(25+900-25*15,40);
ctx.lineTo(20+900-25*15,40);
ctx.lineTo(10+900-25*15,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m165==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20); 
ctx.lineTo(25+900-25*15,20+20); 
ctx.lineTo(35+900-25*15,30+20); 
ctx.lineTo(25+900-25*15,40+20);
ctx.lineTo(20+900-25*15,40+20);
ctx.lineTo(10+900-25*15,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m161==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20+25); 
ctx.lineTo(25+900-25*15,20+20+25); 
ctx.lineTo(35+900-25*15,30+20+25); 
ctx.lineTo(25+900-25*15,40+20+25);
ctx.lineTo(20+900-25*15,40+20+25);
ctx.lineTo(10+900-25*15,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m161==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20+25+20); 
ctx.lineTo(25+900-25*15,20+20+25+20); 
ctx.lineTo(35+900-25*15,30+20+25+20); 
ctx.lineTo(25+900-25*15,40+20+25+20);
ctx.lineTo(20+900-25*15,40+20+25+20);
ctx.lineTo(10+900-25*15,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m162==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*2+25); 
ctx.lineTo(25+900-25*15,20+20*2+25); 
ctx.lineTo(35+900-25*15,30+20*2+25); 
ctx.lineTo(25+900-25*15,40+20*2+25);
ctx.lineTo(20+900-25*15,40+20*2+25);
ctx.lineTo(10+900-25*15,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m162==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*2+25+20); 
ctx.lineTo(25+900-25*15,20+20*2+25+20); 
ctx.lineTo(35+900-25*15,30+20*2+25+20); 
ctx.lineTo(25+900-25*15,40+20*2+25+20);
ctx.lineTo(20+900-25*15,40+20*2+25+20);
ctx.lineTo(10+900-25*15,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m163==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*3+25); 
ctx.lineTo(25+900-25*15,20+20*3+25); 
ctx.lineTo(35+900-25*15,30+20*3+25); 
ctx.lineTo(25+900-25*15,40+20*3+25);
ctx.lineTo(20+900-25*15,40+20*3+25);
ctx.lineTo(10+900-25*15,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m163==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*3+25+20); 
ctx.lineTo(25+900-25*15,20+20*3+25+20); 
ctx.lineTo(35+900-25*15,30+20*3+25+20); 
ctx.lineTo(25+900-25*15,40+20*3+25+20);
ctx.lineTo(20+900-25*15,40+20*3+25+20);
ctx.lineTo(10+900-25*15,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m164==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*4+25); 
ctx.lineTo(25+900-25*15,20+20*4+25); 
ctx.lineTo(35+900-25*15,30+20*4+25); 
ctx.lineTo(25+900-25*15,40+20*4+25);
ctx.lineTo(20+900-25*15,40+20*4+25);
ctx.lineTo(10+900-25*15,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m164==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*15,20+20*4+25+20); 
ctx.lineTo(25+900-25*15,20+20*4+25+20); 
ctx.lineTo(35+900-25*15,30+20*4+25+20); 
ctx.lineTo(25+900-25*15,40+20*4+25+20);
ctx.lineTo(20+900-25*15,40+20*4+25+20);
ctx.lineTo(10+900-25*15,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m175==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20); 
ctx.lineTo(25+900-25*16,20); 
ctx.lineTo(35+900-25*16,30); 
ctx.lineTo(25+900-25*16,40);
ctx.lineTo(20+900-25*16,40);
ctx.lineTo(10+900-25*16,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m175==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20); 
ctx.lineTo(25+900-25*16,20+20); 
ctx.lineTo(35+900-25*16,30+20); 
ctx.lineTo(25+900-25*16,40+20);
ctx.lineTo(20+900-25*16,40+20);
ctx.lineTo(10+900-25*16,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m171==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20+25); 
ctx.lineTo(25+900-25*16,20+20+25); 
ctx.lineTo(35+900-25*16,30+20+25); 
ctx.lineTo(25+900-25*16,40+20+25);
ctx.lineTo(20+900-25*16,40+20+25);
ctx.lineTo(10+900-25*16,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m171==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20+25+20); 
ctx.lineTo(25+900-25*16,20+20+25+20); 
ctx.lineTo(35+900-25*16,30+20+25+20); 
ctx.lineTo(25+900-25*16,40+20+25+20);
ctx.lineTo(20+900-25*16,40+20+25+20);
ctx.lineTo(10+900-25*16,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m172==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*2+25); 
ctx.lineTo(25+900-25*16,20+20*2+25); 
ctx.lineTo(35+900-25*16,30+20*2+25); 
ctx.lineTo(25+900-25*16,40+20*2+25);
ctx.lineTo(20+900-25*16,40+20*2+25);
ctx.lineTo(10+900-25*16,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m172==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*2+25+20); 
ctx.lineTo(25+900-25*16,20+20*2+25+20); 
ctx.lineTo(35+900-25*16,30+20*2+25+20); 
ctx.lineTo(25+900-25*16,40+20*2+25+20);
ctx.lineTo(20+900-25*16,40+20*2+25+20);
ctx.lineTo(10+900-25*16,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m173==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*3+25); 
ctx.lineTo(25+900-25*16,20+20*3+25); 
ctx.lineTo(35+900-25*16,30+20*3+25); 
ctx.lineTo(25+900-25*16,40+20*3+25);
ctx.lineTo(20+900-25*16,40+20*3+25);
ctx.lineTo(10+900-25*16,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m173==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*3+25+20); 
ctx.lineTo(25+900-25*16,20+20*3+25+20); 
ctx.lineTo(35+900-25*16,30+20*3+25+20); 
ctx.lineTo(25+900-25*16,40+20*3+25+20);
ctx.lineTo(20+900-25*16,40+20*3+25+20);
ctx.lineTo(10+900-25*16,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m174==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*4+25); 
ctx.lineTo(25+900-25*16,20+20*4+25); 
ctx.lineTo(35+900-25*16,30+20*4+25); 
ctx.lineTo(25+900-25*16,40+20*4+25);
ctx.lineTo(20+900-25*16,40+20*4+25);
ctx.lineTo(10+900-25*16,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m174==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*16,20+20*4+25+20); 
ctx.lineTo(25+900-25*16,20+20*4+25+20); 
ctx.lineTo(35+900-25*16,30+20*4+25+20); 
ctx.lineTo(25+900-25*16,40+20*4+25+20);
ctx.lineTo(20+900-25*16,40+20*4+25+20);
ctx.lineTo(10+900-25*16,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m185==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20); 
ctx.lineTo(25+900-25*17,20); 
ctx.lineTo(35+900-25*17,30); 
ctx.lineTo(25+900-25*17,40);
ctx.lineTo(20+900-25*17,40);
ctx.lineTo(10+900-25*17,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m185==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20); 
ctx.lineTo(25+900-25*17,20+20); 
ctx.lineTo(35+900-25*17,30+20); 
ctx.lineTo(25+900-25*17,40+20);
ctx.lineTo(20+900-25*17,40+20);
ctx.lineTo(10+900-25*17,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m181==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20+25); 
ctx.lineTo(25+900-25*17,20+20+25); 
ctx.lineTo(35+900-25*17,30+20+25); 
ctx.lineTo(25+900-25*17,40+20+25);
ctx.lineTo(20+900-25*17,40+20+25);
ctx.lineTo(10+900-25*17,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m181==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20+25+20); 
ctx.lineTo(25+900-25*17,20+20+25+20); 
ctx.lineTo(35+900-25*17,30+20+25+20); 
ctx.lineTo(25+900-25*17,40+20+25+20);
ctx.lineTo(20+900-25*17,40+20+25+20);
ctx.lineTo(10+900-25*17,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m182==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*2+25); 
ctx.lineTo(25+900-25*17,20+20*2+25); 
ctx.lineTo(35+900-25*17,30+20*2+25); 
ctx.lineTo(25+900-25*17,40+20*2+25);
ctx.lineTo(20+900-25*17,40+20*2+25);
ctx.lineTo(10+900-25*17,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m182==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*2+25+20); 
ctx.lineTo(25+900-25*17,20+20*2+25+20); 
ctx.lineTo(35+900-25*17,30+20*2+25+20); 
ctx.lineTo(25+900-25*17,40+20*2+25+20);
ctx.lineTo(20+900-25*17,40+20*2+25+20);
ctx.lineTo(10+900-25*17,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m183==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*3+25); 
ctx.lineTo(25+900-25*17,20+20*3+25); 
ctx.lineTo(35+900-25*17,30+20*3+25); 
ctx.lineTo(25+900-25*17,40+20*3+25);
ctx.lineTo(20+900-25*17,40+20*3+25);
ctx.lineTo(10+900-25*17,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m183==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*3+25+20); 
ctx.lineTo(25+900-25*17,20+20*3+25+20); 
ctx.lineTo(35+900-25*17,30+20*3+25+20); 
ctx.lineTo(25+900-25*17,40+20*3+25+20);
ctx.lineTo(20+900-25*17,40+20*3+25+20);
ctx.lineTo(10+900-25*17,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m184==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*4+25); 
ctx.lineTo(25+900-25*17,20+20*4+25); 
ctx.lineTo(35+900-25*17,30+20*4+25); 
ctx.lineTo(25+900-25*17,40+20*4+25);
ctx.lineTo(20+900-25*17,40+20*4+25);
ctx.lineTo(10+900-25*17,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m184==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*17,20+20*4+25+20); 
ctx.lineTo(25+900-25*17,20+20*4+25+20); 
ctx.lineTo(35+900-25*17,30+20*4+25+20); 
ctx.lineTo(25+900-25*17,40+20*4+25+20);
ctx.lineTo(20+900-25*17,40+20*4+25+20);
ctx.lineTo(10+900-25*17,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m195==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20); 
ctx.lineTo(25+900-25*18,20); 
ctx.lineTo(35+900-25*18,30); 
ctx.lineTo(25+900-25*18,40);
ctx.lineTo(20+900-25*18,40);
ctx.lineTo(10+900-25*18,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m195==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20); 
ctx.lineTo(25+900-25*18,20+20); 
ctx.lineTo(35+900-25*18,30+20); 
ctx.lineTo(25+900-25*18,40+20);
ctx.lineTo(20+900-25*18,40+20);
ctx.lineTo(10+900-25*18,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m191==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20+25); 
ctx.lineTo(25+900-25*18,20+20+25); 
ctx.lineTo(35+900-25*18,30+20+25); 
ctx.lineTo(25+900-25*18,40+20+25);
ctx.lineTo(20+900-25*18,40+20+25);
ctx.lineTo(10+900-25*18,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m191==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20+25+20); 
ctx.lineTo(25+900-25*18,20+20+25+20); 
ctx.lineTo(35+900-25*18,30+20+25+20); 
ctx.lineTo(25+900-25*18,40+20+25+20);
ctx.lineTo(20+900-25*18,40+20+25+20);
ctx.lineTo(10+900-25*18,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m192==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*2+25); 
ctx.lineTo(25+900-25*18,20+20*2+25); 
ctx.lineTo(35+900-25*18,30+20*2+25); 
ctx.lineTo(25+900-25*18,40+20*2+25);
ctx.lineTo(20+900-25*18,40+20*2+25);
ctx.lineTo(10+900-25*18,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m192==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*2+25+20); 
ctx.lineTo(25+900-25*18,20+20*2+25+20); 
ctx.lineTo(35+900-25*18,30+20*2+25+20); 
ctx.lineTo(25+900-25*18,40+20*2+25+20);
ctx.lineTo(20+900-25*18,40+20*2+25+20);
ctx.lineTo(10+900-25*18,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m193==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*3+25); 
ctx.lineTo(25+900-25*18,20+20*3+25); 
ctx.lineTo(35+900-25*18,30+20*3+25); 
ctx.lineTo(25+900-25*18,40+20*3+25);
ctx.lineTo(20+900-25*18,40+20*3+25);
ctx.lineTo(10+900-25*18,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m193==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*3+25+20); 
ctx.lineTo(25+900-25*18,20+20*3+25+20); 
ctx.lineTo(35+900-25*18,30+20*3+25+20); 
ctx.lineTo(25+900-25*18,40+20*3+25+20);
ctx.lineTo(20+900-25*18,40+20*3+25+20);
ctx.lineTo(10+900-25*18,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m194==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*4+25); 
ctx.lineTo(25+900-25*18,20+20*4+25); 
ctx.lineTo(35+900-25*18,30+20*4+25); 
ctx.lineTo(25+900-25*18,40+20*4+25);
ctx.lineTo(20+900-25*18,40+20*4+25);
ctx.lineTo(10+900-25*18,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m194==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*18,20+20*4+25+20); 
ctx.lineTo(25+900-25*18,20+20*4+25+20); 
ctx.lineTo(35+900-25*18,30+20*4+25+20); 
ctx.lineTo(25+900-25*18,40+20*4+25+20);
ctx.lineTo(20+900-25*18,40+20*4+25+20);
ctx.lineTo(10+900-25*18,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m205==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20); 
ctx.lineTo(25+900-25*19,20); 
ctx.lineTo(35+900-25*19,30); 
ctx.lineTo(25+900-25*19,40);
ctx.lineTo(20+900-25*19,40);
ctx.lineTo(10+900-25*19,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m205==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20); 
ctx.lineTo(25+900-25*19,20+20); 
ctx.lineTo(35+900-25*19,30+20); 
ctx.lineTo(25+900-25*19,40+20);
ctx.lineTo(20+900-25*19,40+20);
ctx.lineTo(10+900-25*19,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m201==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20+25); 
ctx.lineTo(25+900-25*19,20+20+25); 
ctx.lineTo(35+900-25*19,30+20+25); 
ctx.lineTo(25+900-25*19,40+20+25);
ctx.lineTo(20+900-25*19,40+20+25);
ctx.lineTo(10+900-25*19,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m201==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20+25+20); 
ctx.lineTo(25+900-25*19,20+20+25+20); 
ctx.lineTo(35+900-25*19,30+20+25+20); 
ctx.lineTo(25+900-25*19,40+20+25+20);
ctx.lineTo(20+900-25*19,40+20+25+20);
ctx.lineTo(10+900-25*19,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m202==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*2+25); 
ctx.lineTo(25+900-25*19,20+20*2+25); 
ctx.lineTo(35+900-25*19,30+20*2+25); 
ctx.lineTo(25+900-25*19,40+20*2+25);
ctx.lineTo(20+900-25*19,40+20*2+25);
ctx.lineTo(10+900-25*19,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m202==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*2+25+20); 
ctx.lineTo(25+900-25*19,20+20*2+25+20); 
ctx.lineTo(35+900-25*19,30+20*2+25+20); 
ctx.lineTo(25+900-25*19,40+20*2+25+20);
ctx.lineTo(20+900-25*19,40+20*2+25+20);
ctx.lineTo(10+900-25*19,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m203==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*3+25); 
ctx.lineTo(25+900-25*19,20+20*3+25); 
ctx.lineTo(35+900-25*19,30+20*3+25); 
ctx.lineTo(25+900-25*19,40+20*3+25);
ctx.lineTo(20+900-25*19,40+20*3+25);
ctx.lineTo(10+900-25*19,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m203==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*3+25+20); 
ctx.lineTo(25+900-25*19,20+20*3+25+20); 
ctx.lineTo(35+900-25*19,30+20*3+25+20); 
ctx.lineTo(25+900-25*19,40+20*3+25+20);
ctx.lineTo(20+900-25*19,40+20*3+25+20);
ctx.lineTo(10+900-25*19,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m204==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*4+25); 
ctx.lineTo(25+900-25*19,20+20*4+25); 
ctx.lineTo(35+900-25*19,30+20*4+25); 
ctx.lineTo(25+900-25*19,40+20*4+25);
ctx.lineTo(20+900-25*19,40+20*4+25);
ctx.lineTo(10+900-25*19,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m204==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*19,20+20*4+25+20); 
ctx.lineTo(25+900-25*19,20+20*4+25+20); 
ctx.lineTo(35+900-25*19,30+20*4+25+20); 
ctx.lineTo(25+900-25*19,40+20*4+25+20);
ctx.lineTo(20+900-25*19,40+20*4+25+20);
ctx.lineTo(10+900-25*19,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m215==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20); 
ctx.lineTo(25+900-25*20,20); 
ctx.lineTo(35+900-25*20,30); 
ctx.lineTo(25+900-25*20,40);
ctx.lineTo(20+900-25*20,40);
ctx.lineTo(10+900-25*20,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m215==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20); 
ctx.lineTo(25+900-25*20,20+20); 
ctx.lineTo(35+900-25*20,30+20); 
ctx.lineTo(25+900-25*20,40+20);
ctx.lineTo(20+900-25*20,40+20);
ctx.lineTo(10+900-25*20,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m211==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20+25); 
ctx.lineTo(25+900-25*20,20+20+25); 
ctx.lineTo(35+900-25*20,30+20+25); 
ctx.lineTo(25+900-25*20,40+20+25);
ctx.lineTo(20+900-25*20,40+20+25);
ctx.lineTo(10+900-25*20,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m211==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20+25+20); 
ctx.lineTo(25+900-25*20,20+20+25+20); 
ctx.lineTo(35+900-25*20,30+20+25+20); 
ctx.lineTo(25+900-25*20,40+20+25+20);
ctx.lineTo(20+900-25*20,40+20+25+20);
ctx.lineTo(10+900-25*20,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m212==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*2+25); 
ctx.lineTo(25+900-25*20,20+20*2+25); 
ctx.lineTo(35+900-25*20,30+20*2+25); 
ctx.lineTo(25+900-25*20,40+20*2+25);
ctx.lineTo(20+900-25*20,40+20*2+25);
ctx.lineTo(10+900-25*20,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m212==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*2+25+20); 
ctx.lineTo(25+900-25*20,20+20*2+25+20); 
ctx.lineTo(35+900-25*20,30+20*2+25+20); 
ctx.lineTo(25+900-25*20,40+20*2+25+20);
ctx.lineTo(20+900-25*20,40+20*2+25+20);
ctx.lineTo(10+900-25*20,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m213==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*3+25); 
ctx.lineTo(25+900-25*20,20+20*3+25); 
ctx.lineTo(35+900-25*20,30+20*3+25); 
ctx.lineTo(25+900-25*20,40+20*3+25);
ctx.lineTo(20+900-25*20,40+20*3+25);
ctx.lineTo(10+900-25*20,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m213==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*3+25+20); 
ctx.lineTo(25+900-25*20,20+20*3+25+20); 
ctx.lineTo(35+900-25*20,30+20*3+25+20); 
ctx.lineTo(25+900-25*20,40+20*3+25+20);
ctx.lineTo(20+900-25*20,40+20*3+25+20);
ctx.lineTo(10+900-25*20,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m214==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*4+25); 
ctx.lineTo(25+900-25*20,20+20*4+25); 
ctx.lineTo(35+900-25*20,30+20*4+25); 
ctx.lineTo(25+900-25*20,40+20*4+25);
ctx.lineTo(20+900-25*20,40+20*4+25);
ctx.lineTo(10+900-25*20,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m214==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*20,20+20*4+25+20); 
ctx.lineTo(25+900-25*20,20+20*4+25+20); 
ctx.lineTo(35+900-25*20,30+20*4+25+20); 
ctx.lineTo(25+900-25*20,40+20*4+25+20);
ctx.lineTo(20+900-25*20,40+20*4+25+20);
ctx.lineTo(10+900-25*20,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m225==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20); 
ctx.lineTo(25+900-25*21,20); 
ctx.lineTo(35+900-25*21,30); 
ctx.lineTo(25+900-25*21,40);
ctx.lineTo(20+900-25*21,40);
ctx.lineTo(10+900-25*21,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m225==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20); 
ctx.lineTo(25+900-25*21,20+20); 
ctx.lineTo(35+900-25*21,30+20); 
ctx.lineTo(25+900-25*21,40+20);
ctx.lineTo(20+900-25*21,40+20);
ctx.lineTo(10+900-25*21,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m221==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20+25); 
ctx.lineTo(25+900-25*21,20+20+25); 
ctx.lineTo(35+900-25*21,30+20+25); 
ctx.lineTo(25+900-25*21,40+20+25);
ctx.lineTo(20+900-25*21,40+20+25);
ctx.lineTo(10+900-25*21,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m221==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20+25+20); 
ctx.lineTo(25+900-25*21,20+20+25+20); 
ctx.lineTo(35+900-25*21,30+20+25+20); 
ctx.lineTo(25+900-25*21,40+20+25+20);
ctx.lineTo(20+900-25*21,40+20+25+20);
ctx.lineTo(10+900-25*21,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m222==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*2+25); 
ctx.lineTo(25+900-25*21,20+20*2+25); 
ctx.lineTo(35+900-25*21,30+20*2+25); 
ctx.lineTo(25+900-25*21,40+20*2+25);
ctx.lineTo(20+900-25*21,40+20*2+25);
ctx.lineTo(10+900-25*21,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m222==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*2+25+20); 
ctx.lineTo(25+900-25*21,20+20*2+25+20); 
ctx.lineTo(35+900-25*21,30+20*2+25+20); 
ctx.lineTo(25+900-25*21,40+20*2+25+20);
ctx.lineTo(20+900-25*21,40+20*2+25+20);
ctx.lineTo(10+900-25*21,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m223==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*3+25); 
ctx.lineTo(25+900-25*21,20+20*3+25); 
ctx.lineTo(35+900-25*21,30+20*3+25); 
ctx.lineTo(25+900-25*21,40+20*3+25);
ctx.lineTo(20+900-25*21,40+20*3+25);
ctx.lineTo(10+900-25*21,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m223==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*3+25+20); 
ctx.lineTo(25+900-25*21,20+20*3+25+20); 
ctx.lineTo(35+900-25*21,30+20*3+25+20); 
ctx.lineTo(25+900-25*21,40+20*3+25+20);
ctx.lineTo(20+900-25*21,40+20*3+25+20);
ctx.lineTo(10+900-25*21,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m224==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*4+25); 
ctx.lineTo(25+900-25*21,20+20*4+25); 
ctx.lineTo(35+900-25*21,30+20*4+25); 
ctx.lineTo(25+900-25*21,40+20*4+25);
ctx.lineTo(20+900-25*21,40+20*4+25);
ctx.lineTo(10+900-25*21,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m224==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*21,20+20*4+25+20); 
ctx.lineTo(25+900-25*21,20+20*4+25+20); 
ctx.lineTo(35+900-25*21,30+20*4+25+20); 
ctx.lineTo(25+900-25*21,40+20*4+25+20);
ctx.lineTo(20+900-25*21,40+20*4+25+20);
ctx.lineTo(10+900-25*21,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m235==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20); 
ctx.lineTo(25+900-25*22,20); 
ctx.lineTo(35+900-25*22,30); 
ctx.lineTo(25+900-25*22,40);
ctx.lineTo(20+900-25*22,40);
ctx.lineTo(10+900-25*22,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m235==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20); 
ctx.lineTo(25+900-25*22,20+20); 
ctx.lineTo(35+900-25*22,30+20); 
ctx.lineTo(25+900-25*22,40+20);
ctx.lineTo(20+900-25*22,40+20);
ctx.lineTo(10+900-25*22,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m231==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20+25); 
ctx.lineTo(25+900-25*22,20+20+25); 
ctx.lineTo(35+900-25*22,30+20+25); 
ctx.lineTo(25+900-25*22,40+20+25);
ctx.lineTo(20+900-25*22,40+20+25);
ctx.lineTo(10+900-25*22,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m231==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20+25+20); 
ctx.lineTo(25+900-25*22,20+20+25+20); 
ctx.lineTo(35+900-25*22,30+20+25+20); 
ctx.lineTo(25+900-25*22,40+20+25+20);
ctx.lineTo(20+900-25*22,40+20+25+20);
ctx.lineTo(10+900-25*22,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m232==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*2+25); 
ctx.lineTo(25+900-25*22,20+20*2+25); 
ctx.lineTo(35+900-25*22,30+20*2+25); 
ctx.lineTo(25+900-25*22,40+20*2+25);
ctx.lineTo(20+900-25*22,40+20*2+25);
ctx.lineTo(10+900-25*22,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m232==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*2+25+20); 
ctx.lineTo(25+900-25*22,20+20*2+25+20); 
ctx.lineTo(35+900-25*22,30+20*2+25+20); 
ctx.lineTo(25+900-25*22,40+20*2+25+20);
ctx.lineTo(20+900-25*22,40+20*2+25+20);
ctx.lineTo(10+900-25*22,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m233==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*3+25); 
ctx.lineTo(25+900-25*22,20+20*3+25); 
ctx.lineTo(35+900-25*22,30+20*3+25); 
ctx.lineTo(25+900-25*22,40+20*3+25);
ctx.lineTo(20+900-25*22,40+20*3+25);
ctx.lineTo(10+900-25*22,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m233==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*3+25+20); 
ctx.lineTo(25+900-25*22,20+20*3+25+20); 
ctx.lineTo(35+900-25*22,30+20*3+25+20); 
ctx.lineTo(25+900-25*22,40+20*3+25+20);
ctx.lineTo(20+900-25*22,40+20*3+25+20);
ctx.lineTo(10+900-25*22,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m234==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*4+25); 
ctx.lineTo(25+900-25*22,20+20*4+25); 
ctx.lineTo(35+900-25*22,30+20*4+25); 
ctx.lineTo(25+900-25*22,40+20*4+25);
ctx.lineTo(20+900-25*22,40+20*4+25);
ctx.lineTo(10+900-25*22,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m234==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*22,20+20*4+25+20); 
ctx.lineTo(25+900-25*22,20+20*4+25+20); 
ctx.lineTo(35+900-25*22,30+20*4+25+20); 
ctx.lineTo(25+900-25*22,40+20*4+25+20);
ctx.lineTo(20+900-25*22,40+20*4+25+20);
ctx.lineTo(10+900-25*22,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m245==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20); 
ctx.lineTo(25+900-25*23,20); 
ctx.lineTo(35+900-25*23,30); 
ctx.lineTo(25+900-25*23,40);
ctx.lineTo(20+900-25*23,40);
ctx.lineTo(10+900-25*23,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m245==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20); 
ctx.lineTo(25+900-25*23,20+20); 
ctx.lineTo(35+900-25*23,30+20); 
ctx.lineTo(25+900-25*23,40+20);
ctx.lineTo(20+900-25*23,40+20);
ctx.lineTo(10+900-25*23,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m241==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20+25); 
ctx.lineTo(25+900-25*23,20+20+25); 
ctx.lineTo(35+900-25*23,30+20+25); 
ctx.lineTo(25+900-25*23,40+20+25);
ctx.lineTo(20+900-25*23,40+20+25);
ctx.lineTo(10+900-25*23,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m241==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20+25+20); 
ctx.lineTo(25+900-25*23,20+20+25+20); 
ctx.lineTo(35+900-25*23,30+20+25+20); 
ctx.lineTo(25+900-25*23,40+20+25+20);
ctx.lineTo(20+900-25*23,40+20+25+20);
ctx.lineTo(10+900-25*23,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m242==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*2+25); 
ctx.lineTo(25+900-25*23,20+20*2+25); 
ctx.lineTo(35+900-25*23,30+20*2+25); 
ctx.lineTo(25+900-25*23,40+20*2+25);
ctx.lineTo(20+900-25*23,40+20*2+25);
ctx.lineTo(10+900-25*23,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m242==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*2+25+20); 
ctx.lineTo(25+900-25*23,20+20*2+25+20); 
ctx.lineTo(35+900-25*23,30+20*2+25+20); 
ctx.lineTo(25+900-25*23,40+20*2+25+20);
ctx.lineTo(20+900-25*23,40+20*2+25+20);
ctx.lineTo(10+900-25*23,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m243==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*3+25); 
ctx.lineTo(25+900-25*23,20+20*3+25); 
ctx.lineTo(35+900-25*23,30+20*3+25); 
ctx.lineTo(25+900-25*23,40+20*3+25);
ctx.lineTo(20+900-25*23,40+20*3+25);
ctx.lineTo(10+900-25*23,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m243==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*3+25+20); 
ctx.lineTo(25+900-25*23,20+20*3+25+20); 
ctx.lineTo(35+900-25*23,30+20*3+25+20); 
ctx.lineTo(25+900-25*23,40+20*3+25+20);
ctx.lineTo(20+900-25*23,40+20*3+25+20);
ctx.lineTo(10+900-25*23,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m244==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*4+25); 
ctx.lineTo(25+900-25*23,20+20*4+25); 
ctx.lineTo(35+900-25*23,30+20*4+25); 
ctx.lineTo(25+900-25*23,40+20*4+25);
ctx.lineTo(20+900-25*23,40+20*4+25);
ctx.lineTo(10+900-25*23,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m244==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*23,20+20*4+25+20); 
ctx.lineTo(25+900-25*23,20+20*4+25+20); 
ctx.lineTo(35+900-25*23,30+20*4+25+20); 
ctx.lineTo(25+900-25*23,40+20*4+25+20);
ctx.lineTo(20+900-25*23,40+20*4+25+20);
ctx.lineTo(10+900-25*23,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m255==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20); 
ctx.lineTo(25+900-25*24,20); 
ctx.lineTo(35+900-25*24,30); 
ctx.lineTo(25+900-25*24,40);
ctx.lineTo(20+900-25*24,40);
ctx.lineTo(10+900-25*24,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m255==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20); 
ctx.lineTo(25+900-25*24,20+20); 
ctx.lineTo(35+900-25*24,30+20); 
ctx.lineTo(25+900-25*24,40+20);
ctx.lineTo(20+900-25*24,40+20);
ctx.lineTo(10+900-25*24,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m251==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20+25); 
ctx.lineTo(25+900-25*24,20+20+25); 
ctx.lineTo(35+900-25*24,30+20+25); 
ctx.lineTo(25+900-25*24,40+20+25);
ctx.lineTo(20+900-25*24,40+20+25);
ctx.lineTo(10+900-25*24,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m251==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20+25+20); 
ctx.lineTo(25+900-25*24,20+20+25+20); 
ctx.lineTo(35+900-25*24,30+20+25+20); 
ctx.lineTo(25+900-25*24,40+20+25+20);
ctx.lineTo(20+900-25*24,40+20+25+20);
ctx.lineTo(10+900-25*24,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m252==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*2+25); 
ctx.lineTo(25+900-25*24,20+20*2+25); 
ctx.lineTo(35+900-25*24,30+20*2+25); 
ctx.lineTo(25+900-25*24,40+20*2+25);
ctx.lineTo(20+900-25*24,40+20*2+25);
ctx.lineTo(10+900-25*24,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m252==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*2+25+20); 
ctx.lineTo(25+900-25*24,20+20*2+25+20); 
ctx.lineTo(35+900-25*24,30+20*2+25+20); 
ctx.lineTo(25+900-25*24,40+20*2+25+20);
ctx.lineTo(20+900-25*24,40+20*2+25+20);
ctx.lineTo(10+900-25*24,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m253==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*3+25); 
ctx.lineTo(25+900-25*24,20+20*3+25); 
ctx.lineTo(35+900-25*24,30+20*3+25); 
ctx.lineTo(25+900-25*24,40+20*3+25);
ctx.lineTo(20+900-25*24,40+20*3+25);
ctx.lineTo(10+900-25*24,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m253==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*3+25+20); 
ctx.lineTo(25+900-25*24,20+20*3+25+20); 
ctx.lineTo(35+900-25*24,30+20*3+25+20); 
ctx.lineTo(25+900-25*24,40+20*3+25+20);
ctx.lineTo(20+900-25*24,40+20*3+25+20);
ctx.lineTo(10+900-25*24,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m254==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*4+25); 
ctx.lineTo(25+900-25*24,20+20*4+25); 
ctx.lineTo(35+900-25*24,30+20*4+25); 
ctx.lineTo(25+900-25*24,40+20*4+25);
ctx.lineTo(20+900-25*24,40+20*4+25);
ctx.lineTo(10+900-25*24,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m254==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*24,20+20*4+25+20); 
ctx.lineTo(25+900-25*24,20+20*4+25+20); 
ctx.lineTo(35+900-25*24,30+20*4+25+20); 
ctx.lineTo(25+900-25*24,40+20*4+25+20);
ctx.lineTo(20+900-25*24,40+20*4+25+20);
ctx.lineTo(10+900-25*24,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m265==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20); 
ctx.lineTo(25+900-25*25,20); 
ctx.lineTo(35+900-25*25,30); 
ctx.lineTo(25+900-25*25,40);
ctx.lineTo(20+900-25*25,40);
ctx.lineTo(10+900-25*25,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m265==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20); 
ctx.lineTo(25+900-25*25,20+20); 
ctx.lineTo(35+900-25*25,30+20); 
ctx.lineTo(25+900-25*25,40+20);
ctx.lineTo(20+900-25*25,40+20);
ctx.lineTo(10+900-25*25,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m261==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20+25); 
ctx.lineTo(25+900-25*25,20+20+25); 
ctx.lineTo(35+900-25*25,30+20+25); 
ctx.lineTo(25+900-25*25,40+20+25);
ctx.lineTo(20+900-25*25,40+20+25);
ctx.lineTo(10+900-25*25,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m261==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20+25+20); 
ctx.lineTo(25+900-25*25,20+20+25+20); 
ctx.lineTo(35+900-25*25,30+20+25+20); 
ctx.lineTo(25+900-25*25,40+20+25+20);
ctx.lineTo(20+900-25*25,40+20+25+20);
ctx.lineTo(10+900-25*25,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m262==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*2+25); 
ctx.lineTo(25+900-25*25,20+20*2+25); 
ctx.lineTo(35+900-25*25,30+20*2+25); 
ctx.lineTo(25+900-25*25,40+20*2+25);
ctx.lineTo(20+900-25*25,40+20*2+25);
ctx.lineTo(10+900-25*25,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m262==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*2+25+20); 
ctx.lineTo(25+900-25*25,20+20*2+25+20); 
ctx.lineTo(35+900-25*25,30+20*2+25+20); 
ctx.lineTo(25+900-25*25,40+20*2+25+20);
ctx.lineTo(20+900-25*25,40+20*2+25+20);
ctx.lineTo(10+900-25*25,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m263==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*3+25); 
ctx.lineTo(25+900-25*25,20+20*3+25); 
ctx.lineTo(35+900-25*25,30+20*3+25); 
ctx.lineTo(25+900-25*25,40+20*3+25);
ctx.lineTo(20+900-25*25,40+20*3+25);
ctx.lineTo(10+900-25*25,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m263==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*3+25+20); 
ctx.lineTo(25+900-25*25,20+20*3+25+20); 
ctx.lineTo(35+900-25*25,30+20*3+25+20); 
ctx.lineTo(25+900-25*25,40+20*3+25+20);
ctx.lineTo(20+900-25*25,40+20*3+25+20);
ctx.lineTo(10+900-25*25,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m264==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*4+25); 
ctx.lineTo(25+900-25*25,20+20*4+25); 
ctx.lineTo(35+900-25*25,30+20*4+25); 
ctx.lineTo(25+900-25*25,40+20*4+25);
ctx.lineTo(20+900-25*25,40+20*4+25);
ctx.lineTo(10+900-25*25,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m264==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*25,20+20*4+25+20); 
ctx.lineTo(25+900-25*25,20+20*4+25+20); 
ctx.lineTo(35+900-25*25,30+20*4+25+20); 
ctx.lineTo(25+900-25*25,40+20*4+25+20);
ctx.lineTo(20+900-25*25,40+20*4+25+20);
ctx.lineTo(10+900-25*25,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m275==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20); 
ctx.lineTo(25+900-25*26,20); 
ctx.lineTo(35+900-25*26,30); 
ctx.lineTo(25+900-25*26,40);
ctx.lineTo(20+900-25*26,40);
ctx.lineTo(10+900-25*26,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m275==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20); 
ctx.lineTo(25+900-25*26,20+20); 
ctx.lineTo(35+900-25*26,30+20); 
ctx.lineTo(25+900-25*26,40+20);
ctx.lineTo(20+900-25*26,40+20);
ctx.lineTo(10+900-25*26,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m271==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20+25); 
ctx.lineTo(25+900-25*26,20+20+25); 
ctx.lineTo(35+900-25*26,30+20+25); 
ctx.lineTo(25+900-25*26,40+20+25);
ctx.lineTo(20+900-25*26,40+20+25);
ctx.lineTo(10+900-25*26,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m271==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20+25+20); 
ctx.lineTo(25+900-25*26,20+20+25+20); 
ctx.lineTo(35+900-25*26,30+20+25+20); 
ctx.lineTo(25+900-25*26,40+20+25+20);
ctx.lineTo(20+900-25*26,40+20+25+20);
ctx.lineTo(10+900-25*26,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m272==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*2+25); 
ctx.lineTo(25+900-25*26,20+20*2+25); 
ctx.lineTo(35+900-25*26,30+20*2+25); 
ctx.lineTo(25+900-25*26,40+20*2+25);
ctx.lineTo(20+900-25*26,40+20*2+25);
ctx.lineTo(10+900-25*26,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m272==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*2+25+20); 
ctx.lineTo(25+900-25*26,20+20*2+25+20); 
ctx.lineTo(35+900-25*26,30+20*2+25+20); 
ctx.lineTo(25+900-25*26,40+20*2+25+20);
ctx.lineTo(20+900-25*26,40+20*2+25+20);
ctx.lineTo(10+900-25*26,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m273==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*3+25); 
ctx.lineTo(25+900-25*26,20+20*3+25); 
ctx.lineTo(35+900-25*26,30+20*3+25); 
ctx.lineTo(25+900-25*26,40+20*3+25);
ctx.lineTo(20+900-25*26,40+20*3+25);
ctx.lineTo(10+900-25*26,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m273==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*3+25+20); 
ctx.lineTo(25+900-25*26,20+20*3+25+20); 
ctx.lineTo(35+900-25*26,30+20*3+25+20); 
ctx.lineTo(25+900-25*26,40+20*3+25+20);
ctx.lineTo(20+900-25*26,40+20*3+25+20);
ctx.lineTo(10+900-25*26,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m274==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*4+25); 
ctx.lineTo(25+900-25*26,20+20*4+25); 
ctx.lineTo(35+900-25*26,30+20*4+25); 
ctx.lineTo(25+900-25*26,40+20*4+25);
ctx.lineTo(20+900-25*26,40+20*4+25);
ctx.lineTo(10+900-25*26,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m274==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*26,20+20*4+25+20); 
ctx.lineTo(25+900-25*26,20+20*4+25+20); 
ctx.lineTo(35+900-25*26,30+20*4+25+20); 
ctx.lineTo(25+900-25*26,40+20*4+25+20);
ctx.lineTo(20+900-25*26,40+20*4+25+20);
ctx.lineTo(10+900-25*26,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m285==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20); 
ctx.lineTo(25+900-25*27,20); 
ctx.lineTo(35+900-25*27,30); 
ctx.lineTo(25+900-25*27,40);
ctx.lineTo(20+900-25*27,40);
ctx.lineTo(10+900-25*27,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m285==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20); 
ctx.lineTo(25+900-25*27,20+20); 
ctx.lineTo(35+900-25*27,30+20); 
ctx.lineTo(25+900-25*27,40+20);
ctx.lineTo(20+900-25*27,40+20);
ctx.lineTo(10+900-25*27,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m281==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20+25); 
ctx.lineTo(25+900-25*27,20+20+25); 
ctx.lineTo(35+900-25*27,30+20+25); 
ctx.lineTo(25+900-25*27,40+20+25);
ctx.lineTo(20+900-25*27,40+20+25);
ctx.lineTo(10+900-25*27,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m281==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20+25+20); 
ctx.lineTo(25+900-25*27,20+20+25+20); 
ctx.lineTo(35+900-25*27,30+20+25+20); 
ctx.lineTo(25+900-25*27,40+20+25+20);
ctx.lineTo(20+900-25*27,40+20+25+20);
ctx.lineTo(10+900-25*27,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m282==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*2+25); 
ctx.lineTo(25+900-25*27,20+20*2+25); 
ctx.lineTo(35+900-25*27,30+20*2+25); 
ctx.lineTo(25+900-25*27,40+20*2+25);
ctx.lineTo(20+900-25*27,40+20*2+25);
ctx.lineTo(10+900-25*27,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m282==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*2+25+20); 
ctx.lineTo(25+900-25*27,20+20*2+25+20); 
ctx.lineTo(35+900-25*27,30+20*2+25+20); 
ctx.lineTo(25+900-25*27,40+20*2+25+20);
ctx.lineTo(20+900-25*27,40+20*2+25+20);
ctx.lineTo(10+900-25*27,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m283==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*3+25); 
ctx.lineTo(25+900-25*27,20+20*3+25); 
ctx.lineTo(35+900-25*27,30+20*3+25); 
ctx.lineTo(25+900-25*27,40+20*3+25);
ctx.lineTo(20+900-25*27,40+20*3+25);
ctx.lineTo(10+900-25*27,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m283==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*3+25+20); 
ctx.lineTo(25+900-25*27,20+20*3+25+20); 
ctx.lineTo(35+900-25*27,30+20*3+25+20); 
ctx.lineTo(25+900-25*27,40+20*3+25+20);
ctx.lineTo(20+900-25*27,40+20*3+25+20);
ctx.lineTo(10+900-25*27,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m284==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*4+25); 
ctx.lineTo(25+900-25*27,20+20*4+25); 
ctx.lineTo(35+900-25*27,30+20*4+25); 
ctx.lineTo(25+900-25*27,40+20*4+25);
ctx.lineTo(20+900-25*27,40+20*4+25);
ctx.lineTo(10+900-25*27,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m284==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*27,20+20*4+25+20); 
ctx.lineTo(25+900-25*27,20+20*4+25+20); 
ctx.lineTo(35+900-25*27,30+20*4+25+20); 
ctx.lineTo(25+900-25*27,40+20*4+25+20);
ctx.lineTo(20+900-25*27,40+20*4+25+20);
ctx.lineTo(10+900-25*27,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m295==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20); 
ctx.lineTo(25+900-25*28,20); 
ctx.lineTo(35+900-25*28,30); 
ctx.lineTo(25+900-25*28,40);
ctx.lineTo(20+900-25*28,40);
ctx.lineTo(10+900-25*28,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m295==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20); 
ctx.lineTo(25+900-25*28,20+20); 
ctx.lineTo(35+900-25*28,30+20); 
ctx.lineTo(25+900-25*28,40+20);
ctx.lineTo(20+900-25*28,40+20);
ctx.lineTo(10+900-25*28,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m291==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20+25); 
ctx.lineTo(25+900-25*28,20+20+25); 
ctx.lineTo(35+900-25*28,30+20+25); 
ctx.lineTo(25+900-25*28,40+20+25);
ctx.lineTo(20+900-25*28,40+20+25);
ctx.lineTo(10+900-25*28,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m291==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20+25+20); 
ctx.lineTo(25+900-25*28,20+20+25+20); 
ctx.lineTo(35+900-25*28,30+20+25+20); 
ctx.lineTo(25+900-25*28,40+20+25+20);
ctx.lineTo(20+900-25*28,40+20+25+20);
ctx.lineTo(10+900-25*28,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m292==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*2+25); 
ctx.lineTo(25+900-25*28,20+20*2+25); 
ctx.lineTo(35+900-25*28,30+20*2+25); 
ctx.lineTo(25+900-25*28,40+20*2+25);
ctx.lineTo(20+900-25*28,40+20*2+25);
ctx.lineTo(10+900-25*28,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m292==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*2+25+20); 
ctx.lineTo(25+900-25*28,20+20*2+25+20); 
ctx.lineTo(35+900-25*28,30+20*2+25+20); 
ctx.lineTo(25+900-25*28,40+20*2+25+20);
ctx.lineTo(20+900-25*28,40+20*2+25+20);
ctx.lineTo(10+900-25*28,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m293==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*3+25); 
ctx.lineTo(25+900-25*28,20+20*3+25); 
ctx.lineTo(35+900-25*28,30+20*3+25); 
ctx.lineTo(25+900-25*28,40+20*3+25);
ctx.lineTo(20+900-25*28,40+20*3+25);
ctx.lineTo(10+900-25*28,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m293==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*3+25+20); 
ctx.lineTo(25+900-25*28,20+20*3+25+20); 
ctx.lineTo(35+900-25*28,30+20*3+25+20); 
ctx.lineTo(25+900-25*28,40+20*3+25+20);
ctx.lineTo(20+900-25*28,40+20*3+25+20);
ctx.lineTo(10+900-25*28,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m294==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*4+25); 
ctx.lineTo(25+900-25*28,20+20*4+25); 
ctx.lineTo(35+900-25*28,30+20*4+25); 
ctx.lineTo(25+900-25*28,40+20*4+25);
ctx.lineTo(20+900-25*28,40+20*4+25);
ctx.lineTo(10+900-25*28,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m294==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*28,20+20*4+25+20); 
ctx.lineTo(25+900-25*28,20+20*4+25+20); 
ctx.lineTo(35+900-25*28,30+20*4+25+20); 
ctx.lineTo(25+900-25*28,40+20*4+25+20);
ctx.lineTo(20+900-25*28,40+20*4+25+20);
ctx.lineTo(10+900-25*28,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m305==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20); 
ctx.lineTo(25+900-25*29,20); 
ctx.lineTo(35+900-25*29,30); 
ctx.lineTo(25+900-25*29,40);
ctx.lineTo(20+900-25*29,40);
ctx.lineTo(10+900-25*29,30);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m305==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20); 
ctx.lineTo(25+900-25*29,20+20); 
ctx.lineTo(35+900-25*29,30+20); 
ctx.lineTo(25+900-25*29,40+20);
ctx.lineTo(20+900-25*29,40+20);
ctx.lineTo(10+900-25*29,30+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m301==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20+25); 
ctx.lineTo(25+900-25*29,20+20+25); 
ctx.lineTo(35+900-25*29,30+20+25); 
ctx.lineTo(25+900-25*29,40+20+25);
ctx.lineTo(20+900-25*29,40+20+25);
ctx.lineTo(10+900-25*29,30+20+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m301==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20+25+20); 
ctx.lineTo(25+900-25*29,20+20+25+20); 
ctx.lineTo(35+900-25*29,30+20+25+20); 
ctx.lineTo(25+900-25*29,40+20+25+20);
ctx.lineTo(20+900-25*29,40+20+25+20);
ctx.lineTo(10+900-25*29,30+20+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m302==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*2+25); 
ctx.lineTo(25+900-25*29,20+20*2+25); 
ctx.lineTo(35+900-25*29,30+20*2+25); 
ctx.lineTo(25+900-25*29,40+20*2+25);
ctx.lineTo(20+900-25*29,40+20*2+25);
ctx.lineTo(10+900-25*29,30+20*2+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m302==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*2+25+20); 
ctx.lineTo(25+900-25*29,20+20*2+25+20); 
ctx.lineTo(35+900-25*29,30+20*2+25+20); 
ctx.lineTo(25+900-25*29,40+20*2+25+20);
ctx.lineTo(20+900-25*29,40+20*2+25+20);
ctx.lineTo(10+900-25*29,30+20*2+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}

if(m303==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*3+25); 
ctx.lineTo(25+900-25*29,20+20*3+25); 
ctx.lineTo(35+900-25*29,30+20*3+25); 
ctx.lineTo(25+900-25*29,40+20*3+25);
ctx.lineTo(20+900-25*29,40+20*3+25);
ctx.lineTo(10+900-25*29,30+20*3+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m303==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*3+25+20); 
ctx.lineTo(25+900-25*29,20+20*3+25+20); 
ctx.lineTo(35+900-25*29,30+20*3+25+20); 
ctx.lineTo(25+900-25*29,40+20*3+25+20);
ctx.lineTo(20+900-25*29,40+20*3+25+20);
ctx.lineTo(10+900-25*29,30+20*3+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



if(m304==1)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*4+25); 
ctx.lineTo(25+900-25*29,20+20*4+25); 
ctx.lineTo(35+900-25*29,30+20*4+25); 
ctx.lineTo(25+900-25*29,40+20*4+25);
ctx.lineTo(20+900-25*29,40+20*4+25);
ctx.lineTo(10+900-25*29,30+20*4+25);
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}


if(m304==0)
{

ctx.beginPath();
ctx.moveTo(20+900-25*29,20+20*4+25+20); 
ctx.lineTo(25+900-25*29,20+20*4+25+20); 
ctx.lineTo(35+900-25*29,30+20*4+25+20); 
ctx.lineTo(25+900-25*29,40+20*4+25+20);
ctx.lineTo(20+900-25*29,40+20*4+25+20);
ctx.lineTo(10+900-25*29,30+20*4+25+20)
ctx.closePath();	
ctx.strokeStyle = "rgb(255,146,36)"; //枠線の色
ctx.stroke();

ctx.fillStyle="rgba(255,146,36,1)";//塗りつぶしの色
ctx.fill();

}



function clearCanvas() {
    c.height = 300;
}
}




