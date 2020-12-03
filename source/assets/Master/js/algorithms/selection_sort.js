async function selectionSort(arr){
    var minIdx;
      for(var i = 0; i < len; i++){
        minIdx = i;
        for(var  j = i+1; j<len; j++){
              if(arr[j]<arr[minIdx]){
                   minIdx = j;
               }
        }
        await swapIndex(arr,i,minIdx);
        await drawArr(arr);
        await sleep(time)
      }
      return arr;
}