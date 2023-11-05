
//compare function 
function compare(arr, x, y) {
    //set color and compare
    arr[x].compare = true;
    arr[y].compare = true;
    return arr[x].val > arr[y].val;
}

//swap values in an array
function swap(arr, x, y) {
    //set color and swap
    arr[x].swap = true;
    arr[y].swap = true;

    temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

//bubbleSort
function* bubbleSort(arr){
    var swapped = false;

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(compare(arr, j, j+1)){
                swap(arr, j, j+1);
                swapped = true;
            }
            yield;
        }
    }

    if(swapped == false){
        return;
    }

}