let randomnumberArray = new Array();
let sumtozero = new Array();

randomnumberArray = [-1, 0, 1, 5, -5, 2, -2, 7];

let length = randomnumberArray.length;
randomnumberArray.sort();
findtriplets();

function findtriplets() {
    for (var i = 0; i < length - 2; i++) {
        for (var j = i + 1; j < length - 1; j++) {
            for (var k = j + 1; k < length; k++) {
                if (randomnumberArray[i] + randomnumberArray[j] + randomnumberArray[k] == 0) {
                    let values = new Array();
                    values.push(randomnumberArray[i], randomnumberArray[j], randomnumberArray[k]);
                    sumtozero.push(values);
                }
            }
        }
    }
    sumtozero.forEach((values) => {
        console.log("The sum of integer is equal to zero is " + values);
    });
}