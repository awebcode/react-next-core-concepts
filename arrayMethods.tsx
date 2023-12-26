const arr1= [7, 7, 44, 4, 3, 2, 53, 2, 2, 3, 1, 1];

const set = new Set(arr1);

const arr= Array.from(set);


console.log("set",set)
console.log("arr", arr);

// const hundredArray = Array.from({ length:3 }, (_, index) => index+1);
// console.log(hundredArray); // Output: [1, 2, 3, ..., 98, 99, 100]

// // Example array
// const numbers = [1, 2, 3, 4, 5];

// // 1. map() - Creates a new array by transforming each element
// const doubledNumbers = numbers.map((num) => num == 2 && 5);
// console.log("map:", doubledNumbers); // Output: [2, 4, 6, 8, 10]

// // 2. filter() - Creates a new array with elements passing a condition
// const evenNumbers = numbers.filter((num) => console.log("x", num));
// console.log("filter:", evenNumbers); // Output: [2, 4]

// // 3. reduce() - Executes a reducer function on each element, resulting in a single output
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("reduce:", sum); // Output: 15

// // 4. forEach() - Executes a provided function once for each array element

// numbers.forEach((num) => {
//   console.log("forEach:", num); // Output: 1, 2, 3, 4, 5 (each on a new line)
// });

// // 5. find() - Returns the first element that satisfies a condition
// const found = numbers.find((num) => num > 3);
// console.log("find:", found); // Output: 4

// // 6. some() - Checks if at least one element satisfies a condition
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log("some:", hasEven); // Output: true

// // 7. every() - Checks if all elements satisfy a condition
// const allEven = numbers.every((num) => num % 2 === 0);
// console.log("every:", allEven); // Output: false

// // 8. slice() - Returns a shallow copy of a portion of an array into a new array
// const slicedNumbers = numbers.slice(1, 4);
// console.log("slice Current main array:", numbers); // Output: [2, 3,]
// console.log("slice:", slicedNumbers); // Output: [2, 3, 4]

// // 8.1. splice() - Returns a shallow copy of a portion of an array into a new array
// const splicedNumbers = numbers.splice(1, 2, 9987);

// console.log("splice Current main array:", numbers); // Output: [2, 3,]
// console.log("splice:", splicedNumbers); // Output: [2, 3]
// // 9. concat() - Merges arrays and returns a new concatenated array
// const mergedArray = numbers.concat([6, 7, 8]);
// console.log("concat:", mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// // 10. includes() - Checks if an array includes a certain element
// const includesFive = numbers.includes(5);
// console.log("includes:", includesFive); // Output: true

// // 11. indexOf() - Returns the index of the first occurrence of an element (-1 if not found)
// const index = numbers.indexOf(4);
// console.log("indexOf:", index); // Output: 2

// // 12. findIndex() - Returns the index of the first element that satisfies a condition (-1 if not found)
// const foundIndex = numbers.findIndex((num) => num === 4);
// console.log("findIndex:", foundIndex); // Output: 3

// // 13. sort() | toSorted - sort values by decending order
// const sortedNumber = numbers.sort((a, b) => b - a);
// console.log("SortedNumbers:", sortedNumber); // Output: 3

// // 14. reverse() | toReversed - sort values by decending order
// const revrsedNumber = numbers.reverse();
// console.log("reversedNumbers:", revrsedNumber); // Output: 3
