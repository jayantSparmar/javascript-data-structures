let array = new Array();
for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 899) + 100;
}
console.log(array);
let max = Math.max.apply(null, array)
array.splice(array.indexOf(max), 1)
max = Math.max.apply(null, array);
console.log("Second Largest number  : " + max);
let min = Math.min.apply(null, array)
array.splice(array.indexOf(min), 1)
min = Math.min.apply(null, array);
console.log("Second Smallest number : " + min);
