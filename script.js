// create a function [x]
// create some variables [x]
// special command for multipls of 3,5 and 3and5 [x]
// return array 

function count(){
    for(let i=0; i <=100; i++){
      if(i % 3 ==0 && i % 5 ==0){
        console.log("FizzBuzz")
      } 
      else if(i % 3 == 0){
        console.log("Fizz");
      }
      else if(i % 5 == 0){
        console.log("Buzz")
      }   
      else console.log(i)
    }
  }
  count()



// else(i % 3 && i % 5){
            // console.log("Fizz"+"Buzz")
            // }
            // Else is default 
            // and redundant 