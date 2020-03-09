let firstName = "Rory";

let lastName = "Folster";

console.log(firstName + " " + lastName);
//Setting a constant
const firstname = "Jamie";

// var firstname = "Rory"; (Wont work here, because firstname is set to constant)
console.log(firstname);

//Let will LET you set a VAR that can be changed later in the code
let lastname = "Crowther";
console.log(firstname + " " + lastname);

//Now with Let changed, it will show the old Let above, and the new Let below
lastname = "Changes";

console.log(lastname);

//Combined together
console.log(firstname + " " + lastname);


//Scope and nesdter functions example 1:
//Accessing local variable in outer function from inner function
// Outer function
function myFunc() {
    //local variable
    var myLocalVariable = 'I am local'
    let myLocalLetVariable = 'i am also local' //Inner function function myInnerFunc() {
        //Try to access the value of myLocalVariable
        //From function inside the myFunc function myLocalVariable
        // 'I am local'   My localLetVariable
        // 'I am also local'
    }
