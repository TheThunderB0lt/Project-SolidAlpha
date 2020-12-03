async function quickSort(arr){
    await QS(0,len-1);
    async function partition(pivot,left,right){
        const pivotValue = arr[pivot];
        var	partitionIndex = left;
        var i = left;

        for(var i = left; i < right; i++){
               if(arr[i] < pivotValue){
                     await swapIndex(arr, i, partitionIndex);
                     await drawArr(arr);
                    await sleep(time);
                      partitionIndex++;
                }
          }
        await swapIndex(arr, right, partitionIndex);
        await drawArr(arr);
        await sleep(time);
        return Promise.resolve(partitionIndex);
    }
    async function QS(left,right){
        if(left < right){
            const pivot = right;
            const partitionIndex =  await partition(pivot,left,right);
            await QS(left,partitionIndex-1);
            await QS(partitionIndex+1,right);
            }
        return Promise.resolve();	
    }
}
