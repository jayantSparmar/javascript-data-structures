let array = new Array();

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 100;
}
console.log(array);
{
 let sortArray = array.sort();
console.log(sortArray);
    console.log("The Second Largest Number is: " + array[array.length-2]);
    console.log("The Second Smallest Number is: " + array[1]);
}