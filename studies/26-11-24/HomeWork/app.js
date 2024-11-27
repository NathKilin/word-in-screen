// Exercises

// For Arrays
const array1 = [1, 2];
const array2 = [3, 4];
const array6 = [5, 6];

// 1. Copy an array of numbers into a new array.
const array3 = [...array1];
// console.log(array3);

// 2. Combine `[1, 2]` and `[3, 4]` into a single array.
const array4 = [...array1, ...array2]
// console.log(array4);

// 3. Add `0` to the start of `[1, 2, 3]` using the spread operator.
const array5 = [0, ...array1, array2[0]]
// console.log(array5);

// 4. Extract the last three elements of `[1, 2, 3, 4, 5]` into a new array.
const array7 = [1, 2, 3, 4, 5]
const last3elements = array7.slice(-3);
// console.log(array7);    

// 5. Flatten a nested array like `[[1, 2], [3, 4]]` into `[1, 2, 3, 4]`.
const array8 = [[1,2], [3,4]];
const array9 = array8.flat();
// console.log(array9);


// For Objects

// 1. Copy the object `{ name: "Alice", age: 25 }` into a new object.
const object1 = { name: "Alice", age: 25 }
const object2 = {...object1}
// console.log(object2);

// 2. Merge `{ name: "Alice" }` and `{ age: 25 }` into a single object.
const object3 = { name: "Alice" }
const object4 = { age: 25 }
const object5 = {...object3, ...object4}
// console.log(object5);

// 3. Update the `age` property of `{ name: "Alice", age: 25 }` to `30` using the spread operator.
const object6 = {...object5, age: 30}
// console.log(object6);

// 4. Remove the `age` property from `{ name: "Alice", age: 25 }` using destructuring and the spread operator.
const {age, ...rest} = object6
// console.log(rest);

// 5. Create a configuration object by merging a `defaultSettings` object with a `userSettings` object.

const defaultSettings = {
    theme: "light",
    notifications: true,
    location: "US",
};

const userSettings = {
    theme: "dark",
    location: "UK", 
};

const config = { ...defaultSettings, ...userSettings };

// console.log(config);
