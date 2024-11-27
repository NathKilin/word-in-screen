// Exercises

// For Arrays
// const array1 = [1, 2];
// const array2 = [3, 4];
// const array6 = [5, 6];

// 1. Copy an array of numbers into a new array.
// const array3 = [...array1];
// console.log(array3);

// 2. Combine `[1, 2]` and `[3, 4]` into a single array.
// const array4 = [...array1, ...array2]
// console.log(array4);

// 3. Add `0` to the start of `[1, 2, 3]` using the spread operator.
// const array5 = [0, ...array1, array2[0]]
// console.log(array5);

// 4. Extract the last three elements of `[1, 2, 3, 4, 5]` into a new array.
// const array7 = [1, 2, 3, 4, 5]
// const last3elements = array7.slice(-3);
// console.log(array7);    

// 5. Flatten a nested array like `[[1, 2], [3, 4]]` into `[1, 2, 3, 4]`.
// const array8 = [[1,2], [3,4]];
// const array9 = array8.flat();
// console.log(array9);


// For Objects

// 1. Copy the object `{ name: "Alice", age: 25 }` into a new object.
// const object1 = { name: "Alice", age: 25 }
// const object2 = {...object1}
// console.log(object2);

// 2. Merge `{ name: "Alice" }` and `{ age: 25 }` into a single object.
// const object3 = { name: "Alice" }
// const object4 = { age: 25 }
// const object5 = {...object3, ...object4}
// console.log(object5);

// 3. Update the `age` property of `{ name: "Alice", age: 25 }` to `30` using the spread operator.
// const object6 = {...object5, age: 30}
// console.log(object6);

// 4. Remove the `age` property from `{ name: "Alice", age: 25 }` using destructuring and the spread operator.
// const {age, ...rest} = object6
// console.log(rest);

// 5. Create a configuration object by merging a `defaultSettings` object with a `userSettings` object.

// const defaultSettings = {
//     theme: "light",
//     notifications: true,
//     location: "US",
// };

// const userSettings = {
//     theme: "dark",
//     location: "UK", 
// };

// const config = { ...defaultSettings, ...userSettings };

// console.log(config);

//---------------------------------------------------------------------------

// Exercises

// Spread Operator with Arrays

// Basic Array Operations (Beginner)**

// 1. Create a new array by copying an existing array using the spread operator.
const array1 = [1, 2];
const array2 = [3, 4];
const array6 = [5, 6];
const array3 = [...array1];


// 2. Combine two arrays into one using the spread operator.
const array4 = [...array1, ...array2]


// 3. Add new elements to the beginning of an array using the spread operator.
const newArray4 = [ -1, 0, ...array4]


// 4. Add new elements to the end of an array using the spread operator.
const newNewArray4 = [...newArray4, 5, 6]


// 5. Merge three arrays into a single array using the spread operator.
const array7 = [...array1, ...array2, ...array6]

    
// 6. Copy an array and add a single element to it.
const array5 = [...array7, 7]
    
    
// 7. Remove the first element of an array and create a new array with the rest using the spread operator.
const array8 = [...array7.slice(1)]


// 8. Create a new array by copying only the last three elements of an array.
const array9 = [...array8.slice(-3)]


// 9. Reverse an array without mutating the original array using the spread operator.
const array10 = [...array9.reverse()]


// 10. Replace the second element of an array with a new value while keeping the rest unchanged.
const array11 = [array10[0], 5.5, ...array10.slice(1)]


//                         *****

//  Practical Scenarios (Intermediate)

// 1. Spread the characters of a string into an array of individual letters.
const string1 = "McFly"
const stringArray1 = [...string1]
// console.log(stringArray1);


// 2. Flatten a nested array (one level deep) using the spread operator.
const inception = [['dream']]
const reality = [...inception.flat()]
// console.log(reality);


// 3. Create a new array that contains all elements from an array except for the last one.
const theFellowshipOfTheRing = ["Frodo", "Sam", "Merry", "Pippin", "Aragorn", "Legolas", "Gimli", "Boromir", "Gandalf" ]
const afterMoriah = [...theFellowshipOfTheRing.slice(0, -1)]
// console.log(afterMoriah);


// 4. Insert an element at the third position of an array without mutating the original array.
const withoutMarry = ["Frodo", "Sam", "Pippin"]
const withMarry = [...withoutMarry.slice(0, 2), "Marry", ...withoutMarry.slice(2)]
// console.log(withMarry);


// 5. Use the spread operator to de-duplicate an array.
const rings = [ "three for the", "elves", "elves", "elves","seven for the", "dwarves", "dwarves", "dwarves", "dwarves", "dwarves", "dwarves", "dwarves", "nine for the", "men", "men", "men", "men", "men", "men", "men", "men", "men"]
const whoHasRings = [...new Set(rings)]
// console.log(whoHasRings);


// 6. Extract the middle elements of an array into a new array using the spread operator.
const toMordor = ["Frodo", "Sam", "Smeagol"];
const samCrying = [...toMordor.slice(1, 2)];
console.log(samCrying, "<;("); 



//     **Hint**: Use `slice` to select the middle range, e.g., `array.slice(1, -1)`.
    
// 7. **Exercise**: Rotate an array (move the first element to the last position).
    
//     **Hint**: Use `[...array.slice(1), array[0]]`.
    
// 8. **Exercise**: Combine elements of an array with a string as the first element (e.g., `["Hello", ...array]`).
    
//     **Hint**: Use `[string, ...array]`.
    
// 9. **Exercise**: Create a function `mergeArrays` that accepts multiple arrays as arguments and returns one combined array.
    
//     **Hint**: Use `...args` in the function signature and `[].concat(...args)` inside.
    
// 10. **Exercise**: Create a copy of an array and shuffle its elements randomly.
    
//     **Hint**: Copy the array with `[...array]` and use `.sort(() => Math.random() - 0.5)`.
    

// ---

// ### **Spread Operator with Objects**

// ### **Basic Object Operations (Beginner)**

// 1. **Exercise**: Create a new object by copying an existing object using the spread operator.
    
//     **Hint**: Use `{...object}` to spread the properties into a new object.
    
// 2. **Exercise**: Merge two objects into a single object using the spread operator.
    
//     **Hint**: Use `{...object1, ...object2}` to combine them.
    
// 3. **Exercise**: Create a copy of an object and update one of its properties.
    
//     **Hint**: Use `{...object, property: newValue}`.
    
// 4. **Exercise**: Add a new property to an object copy while leaving the original unchanged.
    
//     **Hint**: Use `{...object, newProperty: value}`.
    
// 5. **Exercise**: Merge three objects into a single object using the spread operator.
    
//     **Hint**: Use `{...object1, ...object2, ...object3}`.
    
// 6. **Exercise**: Create a shallow copy of an object using the spread operator.
    
//     **Hint**: Use `{...object}`.
    
// 7. **Exercise**: Remove a property from an object by creating a new object without that property.
    
//     **Hint**: Use destructuring and the rest operator: `const {prop, ...rest} = object`.
    
// 8. **Exercise**: Swap the values of two properties in an object using the spread operator.
    
//     **Hint**: Use destructuring and the spread operator to create a new object with swapped values.
    
// 9. **Exercise**: Extract one property from an object into a new object using destructuring and the spread operator.
    
//     **Hint**: Use `const {prop, ...rest} = object` and return `{...rest}`.
    
// 10. **Exercise**: Replace a nested object's property while keeping the rest unchanged.
    
//     **Hint**: Use `{...object, nestedObj: {...object.nestedObj, key: value}}`.
    

// ---

// ### **Practical Scenarios (Intermediate)**

// 1. **Exercise**: Create a function `mergeObjects` that accepts multiple objects as arguments and returns one combined object.
    
//     **Hint**: Use `...args` and `Object.assign({}, ...args)`.
    
// 2. **Exercise**: Create a new object from two objects, giving precedence to the second object's properties.
    
//     **Hint**: Use `{...object1, ...object2}` to overwrite conflicts.
    
// 3. **Exercise**: Copy an object and add a new nested object to it without mutating the original.
    
//     **Hint**: Use `{...object, nested: {key: value}}`.
    
// 4. **Exercise**: Extract all but one property from an object into a new object using the spread operator.
    
//     **Hint**: Use `const {excluded, ...rest} = object`.
    
// 5. **Exercise**: Create a copy of an object and remove all properties with `null` or `undefined` values.
    
//     **Hint**: Use `Object.entries` with `filter` and `reduce`.
    
// 6. **Exercise**: Merge a configuration object into a default settings object to create a new object.
    
//     **Hint**: Use `{...defaultSettings, ...config}`.
    
// 7. **Exercise**: Spread properties from multiple objects into a new object, but skip specific properties.
    
//     **Hint**: Use `const {key, ...rest} = {...object1, ...object2}`.
    
// 8. **Exercise**: Update a nested property in an object using the spread operator.
    
//     **Hint**: Use `{...object, nestedObj: {...object.nestedObj, key: newValue}}`.
    
// 9. **Exercise**: Convert an array of key-value pairs into an object using the spread operator.
    
//     **Hint**: Use `Object.fromEntries(array)`.
    
// 10. **Exercise**: Combine user details and preferences objects while overriding specific values.
    
//     **Hint**: Use `{...user, ...preferences, specificKey: newValue}`.