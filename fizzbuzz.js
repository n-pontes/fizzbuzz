
        //1. First subproblem - get input from the user with prompt method
        let answer = parseInt(prompt('Please enter a number you would like to FizzBuzz up to: '));
        
        //2. Second subproblem - Loop from 1 to the entered number

        for (let i = 1; i <= answer; i++) {
            //3. Third problem - if our number is divisible by 3 print Fizz
            if (i % 5 === 0 && i % 3 === 0) {
                console.log("FizzBuzz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            }else if (i % 3 === 0) {
                console.log("Fizz");
            } else {
                console.log(i);
            }
        }