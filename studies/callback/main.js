// 1. Simple Callback Execution
// function activeHyperDrive(Callback){
//     console.log('R2-D2 is activating the hyperdrive...');
//     Callback()
// }

// function r2Notification(){
//     console.log('Hyperdrive activated');
// }
// activeHyperDrive(r2Notification)

///////////////////////////////////////////////////

//2. Callback with Parameters

// function greeting (name, cb){
//     console.log(`nice to have you here ${name}`);
//     cb(name)
// }

// function welcoming (){
//     console.log(`Welcome!`);
// }
// greeting("Peter", welcoming)

///////////////////////////////////////////////////

// 3. Callback with Anonymous Function

// function givingOrder (order, cb){
//     console.log(`Jack Sparrow: ${order}`);
    
//     cb()
// }
// givingOrder ('Set the sail!', function(){
//     console.log('Yes, sir!');
    
// })


///////////////////////////////////////////////////

// 4. Math Operation Callback
// function performOperation(num1, num2, cb) {
//     const result = cb(num1, num2)
//     console.log('the result is ', result);
// }
// function addition(a, b){
//     return a + b
// }
// function multiplication(a, b){
//     return a * b
// }
// performOperation(10, 5, addition)
// performOperation(2, 5, multiplication)

///////////////////////////////////////////////////

// 5. Array Iteration with Callback

// function readNames(members, cb) {
//     for (let i = 0; i < members.length; i++) {
//         cb(members[i]);  
//     }
// }

// function greeting(member) {
//     console.log(`Welcome, ${member}`);
// }

// const members = ["Frodo", "Sam", "Gandalf", "Legolas", "Aragorn"];

// readNames(members, greeting);
