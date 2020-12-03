// using of "async" to use "await"
async function bubbelSort(Arr){

    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(Arr[j-1]>Arr[j]){
            swapIndex(Arr,j,j-1); // Animation Performs when swaping is done in array;
            await drawArr(Arr);	 //drawArr() animate the array
            await sleep(time); //await sleep() pause the function (act as a dealy time)
            }
        }
    }
}
