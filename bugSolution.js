function add(a, b) {return a + b;} function sub(a, b) {return a - b;} function mul(a, b) {return a * b;} function div(a, b) {if (b === 0) {console.error("Division by zero"); return null;} return a / b;} let result = div(10, 0); console.log(result); //Output: null and the error message in the console