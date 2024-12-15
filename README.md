# Division by Zero Bug
This repository contains a simple JavaScript calculator with a division by zero bug. The `div` function does not handle the case where the second argument (the divisor) is zero, which leads to an error. The solution demonstrates how to handle this scenario gracefully.
## Bug
The bug is in the `div` function. When the divisor is zero, it throws an unhandled exception resulting in the program crashing. 
## Solution
The solution adds error handling to the `div` function. Now, when the divisor is zero, an error message is displayed. The program continues execution instead of crashing.
## How to reproduce
1. Clone the repository.
2. Open `bug.js` in a browser's developer console or a Node.js environment.
3. Execute the code. Observe the error.
4. Open `bugSolution.js`, and execute the code. Observe the improved error handling.