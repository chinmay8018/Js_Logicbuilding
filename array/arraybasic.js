const arr=[1,2,3,4,"hello",{name:"vishal"},[1,2,3,4]];


console.log(arr) 

//how to acsess the first and the last element of the array 
const firstElement = arr[0];
const arrLength = arr.length;
const lastElement =arr[arrLength- 1];
console.log(firstElement,arrLength,lastElement)

//how do you remove the  last element from an array
const lastElement1 = arr.pop();
console.log(arr,lastElement1);

//how to insert data to the  an array
arr.push(5)
console.log(arr)



