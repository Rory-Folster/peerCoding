//10/03/2020 OPERATORS
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

    let a = 10
    let b = 5
//== Equal (is a equal to b ?)
console.log( a == b );
//Identical /Check equality of data type
console.log( a === b );
//Not equal (Does a NOT equal same as b?)
console.log( a != b );
//Not identical /Check inequality of data type
console.log( a !== b );
//Less Than (Is a less than b)
console.log( a < b );
//Greater Than (is a greater than b)
console.log( a > b );
//Greater Than or Equal To
console.log( a >= b );
//Less Than or Equal To
console.log( a <= b );
//With numbers in a string, still works
console.log (10 == '10');
//With letters
console.log( "A" == "a" );
console.log( "A" == "A" );
console.log( "Z" > "A" );
//with TRUE and FALSE (True is equal to 1, False is equal to 0)
//The normal equality operator “==” converts different Data Types to a number
console.log( true == 1 );
console.log( false == 0 );
//To show how === doesnt convert 'true' to a data number
console.log( true === 1 )

//Null is not converted to a number, treated as 'null' /nothing
console.log( null == 0 ); 
//null and 0 are different data types, so not the same
console.log ( null === 0 );
//Null is converted to 0, 0 is not greater than 0
console.log ( null > 0 );
//Null converted to 0, 0 isnt greather than 0, but IT IS equal to 0, so true
console.log( null >= 0 );

if (a == b) {
    console.log('same numbers')
}

console.log(true == 1); //equal to
console.log(true == '1');
console.log(true == 0);
console.log(false == 1); //equal to
console.log(true == 0);
console.log(true == '0');

console.log(" ");

console.log(true != 1); //not equal to
console.log(true != '1');
console.log(true != 0);
console.log(false != 1); //not equal to
console.log(true != 0);
console.log(true != '0');
console.log("Raise" > "Race")
console.log("A" == "a")

//learning between == and ===
console.log(1 == '1');
console.log(1 === '1');
console.log(" ");

console.log(1 == true);
console.log(1 === true);
console.log(" ");

console.log(0 == false);
console.log(0 === false);


