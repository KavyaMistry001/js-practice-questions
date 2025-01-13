function largestnumber(arr){
    if(arr.length===0){
        return null;
    }
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const numbers = [5,8,7,3,1,90,45];
console.log(largestnumber(numbers));