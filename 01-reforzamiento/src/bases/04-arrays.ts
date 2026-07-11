const myArray: number[] = [1, 2, 3, 4, 5];

const myArray2 = [...myArray];

myArray.push(6);
myArray.push(7);

myArray2.push(88);

console.log(myArray, myArray2);

for (const myNumber of myArray) {
    console.log(myNumber + 10);
}


