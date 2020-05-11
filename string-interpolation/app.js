// Temperature forecast in Kelvin
const kelvin = 0;

// Temperature forecast in Celcius
let celcius = kelvin - 273;

// Convert Celcius to Fahrenheit. Rounds down when a decimal is present.
let fahrenheit = Math.floor(celcius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);