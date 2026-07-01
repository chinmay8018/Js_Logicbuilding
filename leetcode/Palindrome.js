var ispalindrome = function(num){
let original = Math.abs(num);
let temp = original;

let reverse =0;

 while (temp>0){
    let digit = temp%10;
    reverse= reverse*10 + digit;

    temp =Math.floor(temp/10);


}
return original === reverse;

    
}
console.log(ispalindrome(121));