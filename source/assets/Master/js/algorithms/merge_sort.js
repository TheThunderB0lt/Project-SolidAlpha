function mergeSort(Arr){
    inPlaceSort(Arr,0,len-1)

    async function inPlaceSort(x, first, last){

        var left, mid, right, temp;

        if(first>=last)	return Promise.resolve();

        mid = Math.floor((first+last)/2);

        await inPlaceSort(x,first,mid);
        await inPlaceSort(x,mid+1,last);

        left = first;
        right = mid+1;

            if(x[mid] <= x[right])	return;
            
            while(left <= mid && right <= last){
                if(x[left] <= x[right]){
                    left++;
                }
                else{
                    temp = x[right];
                    await moveArr(x,left,right);
                    x[left] = temp;
                    await drawArr(x);
                    await sleep(time);
                     left++; right++; mid++;
                    }
                }
                return Promise.resolve();
            }

    function moveArr(x,left,right){ 
        var tempArr = [];
        for(var i=0, j=left; i<(right-left); i++,j++){
                tempArr[i] = x[j];
        }

        for(var i=0, j=left+1; i<(right-left); i++,j++){
                x[j] = tempArr[i];
        }
        return Promise.resolve(x);
    }
}
