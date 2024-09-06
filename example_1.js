//IMPERATIVE PROGRAMMING (Explicit Coercion, where control and predictability are key)
//START OF PROCEDURAL APPROACH-The entire process is encapsulated within a function that can be reused.
  //START OF CONTROL FLOW-The code defines a clear sequence of operations that must be performed to achieve the desired outcome (cooking the steak)
    function cookSteak(steakWeight, desiredDoneness) {
      //START OF STATE MODIFICATION
        let grillTemperature = 0;
        let steakTemperature = 0;
          
        //START OF SEQUENTIAL EXECUTION
          // Step 1: Preheat the grill
          grillTemperature = 204; // This line is executed first // Modifying grill temperature.
            
          // Step 2: Season the steak
          const seasoning = 'Salt and Pepper'; // This line is executed next.
            
          // Step 3: Cook the steak
          while (steakTemperature < desiredDoneness) {  // This loop is executed after the previous steps.
          }//The loop executes as long as the specified condition evaluates to true.
       
          //START OF DECISION-MAKING WITH CONDITIONS           
           // Step 4: Serve the steak
           // Decision-making based on steak temperature
           if (steakTemperature >= desiredDoneness) { // this condition is checked and a value is returned.
           return 'Steak is ready to serve!'; 
           } else {
           return 'Steak needs more cooking.';
           }
          //END OF DECISION-MAKING WITH CONDITIONALS
        //END OF SEQUENTIAL EXECUTION   
      //END OF STATE MODIFICATION        
    } 
  //END OF EXPLICIT CONTROL FLOW           
//END OF PROCEDURAL APPROACH-All steps are contained within this function, following a procedure.

        
// Usage example:
const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
console.log(result);
      