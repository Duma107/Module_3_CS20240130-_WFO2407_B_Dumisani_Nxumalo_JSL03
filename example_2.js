// DECLARATIVE APPROACH (where the focus is on what needs to be done rather than how it’s done)
// Implicit Coercion (programming language automatically converts one data type to another without explicit instructions from the programmer.)
function cookSteak(steakWeight, desiredDoneness) {
  const grillTemperatureCelsius = 204; 
  const seasoning = 'Salt and Pepper';
}
const cookingProcess = [
  // Defining the intention to preheat the grill to a specific temperature
  { action: 'Preheat grill', temperature: 204 }, 
  
  // Describing the action of seasoning the steak, without detailing how it's done
  { action: 'Season steak', seasoning: 'Salt and Pepper' }, 
  
  // Stating the goal of cooking the steak to the desired doneness
  { action: 'Cook steak until desired doneness', desiredDoneness: 63 }, 
  
  // Indicating the final step of serving the steak
  { action: 'Serve steak' }
];

// Declarative execution: Using a loop to iterate over steps without altering the original process
for (const step of cookingProcess) {
  // Declarative handling: Each case describes what should happen, not how to perform the task in detail
  switch (step.action) { // control flow statement that allows a variable to be tested for equality against a list of values.
    case 'Preheat grill':
      console.log(`Preheating grill to ${step.temperature}°C`);
      break;
    case 'Season steak':
      console.log(`Seasoning the steak with ${step.seasoning}`);
      break;
    case 'Cook steak until desired doneness':
      console.log(`Cooking steak to ${step.desiredDoneness}°C`);
      break;
    case 'Serve steak':
      console.log('Steak is ready to serve!');
      break;
    default:
      // Declarative error handling: Simply states that an invalid step was encountered
      console.log('Invalid step in the cooking process.');
  }
}

// Declarative invocation: The function call specifies what is desired without detailing how it works
cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)


  