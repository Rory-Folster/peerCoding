//10/03/2020
console.log( +true );  // 1, true is converted to 1 using unary plus

console.log( +false ); // 0, false is converted to 0

console.log( +"" );   // 0, empty string converted to 0

console.log(10 + 5 * 3); // 25, First Multiplication then Addition

let x = 10;
//Assign
console.log( "=" )
//Add and Assign (adds x and then assigns original value of x)
console.log( x += 10);
//Subtract and Assign
console.log( x -= 10);
//Multiply and Assign
console.log( x *= 10);
//Divide and Assign
console.log( x /= 10);
//Divide and Assign Modulus
//The modulus assignment operator divides the value stored in the left variable by the right value.
//If value is a string, an attempt is made to convert the string to a number before performing the modulus and assignment.
console.log( x %= 9);

// Operator       Name        
//   ==           Equal
//   ===          Identical    // check equality of data type
//   !=           Not equal
//   !==          Not identical //check inequality of data type
//   <           Less than
//   >           Greater than
//   >=          Greater than or equal to
//   <=          Less than or equal to

    let a = 10
    let b = 2
if (a == b) {
    console.log('same numbers')
}