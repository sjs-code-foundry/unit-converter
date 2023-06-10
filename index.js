// Get Elements
inputConv = document.getElementById("input-convert")
inputNum = document.getElementById("input-field")

// Conversion Functions
const lenFactor = 3.281 // ft in 1 meter
const volFactor = 0.264 // gallons in 1 liter
const massFactor = 2.204 // pounds in 1 kilo

inputConv.addEventListener("click", function() {
    console.log(`Button Clicked: ${inputNum.value} converted.`)
})
