/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let mid = ~~(s.length/2);
    
    for(let i=0; i<mid; i++)
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
};