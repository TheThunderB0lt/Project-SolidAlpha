var Arr = [];
var len = Arr.length;
var time = 20;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var rangeTime = document.getElementById("rangeTime");
var rangeArr = document.getElementById("rangeArr");	

var showTime = document.getElementById("showTime");//use in range
var showLength = document.getElementById("showLength");//use in range

createArr(100)
randomArr()
drawArr(Arr);

function createArr(number){
    Arr = [];
    for(var i=1; i<=number; i++){
        Arr.push(i);
    }
    len = Arr.length;
    return Arr;
}
function randomArr(){
    var index = len, random;
    while(0!==index){
        random = Math.floor(Math.random() * index);
        index -= 1;
        swapIndex(Arr,index,random);
        }
    drawArr(Arr);
    return Arr;
}
function swapIndex(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function drawArr(arr){
    var x = 1;
    var wid = canvas.width/len;
    var grd = ctx.createLinearGradient(0, 0, 500, 0); //linear-gradient( 109.6deg,  rgba(0,182,255,1) 11.2%, rgba(102,51,153,1) 91.1% );
    grd.addColorStop(0, "rgba(0,182,255,1)");
    grd.addColorStop(1, "rgba(51,20,218,1)");
    // grd.addColorStop(0, "rgba(51,8,103,1)");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < len; i++) {
        ctx.fillStyle = grd;
        ctx.strokeStyle = "black";
        ctx.fillRect(x,(canvas.height)-arr[i]*(wid/2),wid, (canvas.height));
        x += wid;
    }
}

function sleep(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));	
}

rangeTime.oninput = function(){
    time = rangeTime.value;
    showTime.innerHTML = time;
}

rangeArr.oninput = function(){
    createArr(rangeArr.value);
    showLength.innerHTML = rangeArr.value;
    randomArr();
    drawArr(Arr);
}

//  function to refresh window or reset algorithm window
function reset_click() {
    window.location.reload();
}
