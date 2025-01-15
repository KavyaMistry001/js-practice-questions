function longestword(str) {
    const words = str.split(' '); 
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word; 
        }
    }
    return longest;
}
console.log(longestword("My name is kavya and i work in whitestork solutions")); 
console.log(longestword("I love programming"));
