// comment
/*
  JS comment writing is identical to that of C(++) or Java
*/

// Hello World!
console.log("Hello World!");

//document.write("반갑습니다, 여러분");


// Literal is the value of data that appears in program.
// The value that should be interpreted as it's defined.

// 1. Integer Literal

console.log(parseInt(Number.MAX_SAFE_INTEGER, 10)); // 9007199254740991
console.log(parseInt(Number.MAX_SAFE_INTEGER + 1000000, 10)); // 9007199255740992
console.log(parseInt(-9007199254740992 - 1, 10));


// 2. Float Literal

console.log(3.14);
console.log(.33333333333333);
console.log(6.02e23); // 6.02 * 10^23
console.log(1.4738223E-32); // 1.4738223 * 10^(-32)
console.log(1.4738223e-32);
var a = 1.4738223E-2;
console.log(a+1);

// 3. String Literal

console.log("");
console.log('string with single quotes');
console.log("string with double quotes");
console.log("3.14");
console.log("single quotes in string shold be 'this'");
console.log('double quote in string should be written like "this"');
console.log('using special characters\nthis is second line.');
console.log('\u00E9 unicode escape sequence');

// 4. Functional Literal

var myFunc = function(n) {return n;};
var myFunc2 = new Function("n", "return n;"); // anti pattern
function myFunc3(n) {
  return n;
}

console.log(myFunc(1));
console.log(myFunc2(2));
console.log(myFunc3(3));

// 5. Object Literal

var myComputer = {
  name: "iMac",
  type: "Desktop"
};

console.log(myComputer);
console.log(myComputer['name']);
console.log(myComputer.type);

// 6. Array Literal
var a= [1, 2];
var b = [function(){ return 1; }, function() {return 2; }];
console.log(a[0]); // 1
console.log(b[1]()); // 2 (be sure to use "()")

// conditional statements

function f(a){
  switch(a){
    case 1:
      console.log("1st condition");
      break;
    case 2:
      console.log("2nd condition");
      break;
    default:
      console.log("default condition");
      break;
  }
  return ;
}

f(1); // "1st condition"
f(2); // "2nd condition"
f(3); // "default condition"


// Try - Catch Syntax

function isEqual(a, b){
  try{
    if(a-b==0) throw "equal";
  }
  catch(e){
    return 1;
  }
  finally{
    return 0;
  }
}

console.log(isEqual(3,3));

// Date Object

var date = new Date();
console.log(date.getMonth());


// Array Object

var a = new Array(3);
for(var i = 0 ; i < a.length ; i++){
  a[i] = i+3;
  console.log(a[i]);
}
console.log(a);

// testing

console.log(type("1" + 2)); // concatenation
console.log(type("1" - 2)); // just subtraction
