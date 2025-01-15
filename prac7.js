function dupremove(arr)
{
    return [... new Set (arr)];
}
console.log(dupremove([1,1,2,3,4,4,5]));
console.log(dupremove(['a', 'b' , 'c' , 'c']));