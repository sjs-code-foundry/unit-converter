// Get Elements
inputConv = document.getElementById("input-convert")
inputNum = document.getElementById("input-field")
dispLength = document.getElementById("disp-length")
dispVolume = document.getElementById("disp-volume")
dispMass = document.getElementById("disp-mass")

// Conversion Functions
const units = [["Meters","Feet"], ["Liters","Gallons"], ["Kilos","Pounds"]]
const factors = [3.281, 0.264, 2.204] // ft/meter, gallons/liter, pounds/kilo
const elements = [dispLength, dispVolume, dispMass]

inputConv.addEventListener("click", function() {
    for (let i = 0; i < units.length; i++) {
        const text = display(inputNum.value, factors[i], units[i])
        storeUpload(text, units[i])
        elements[i].textContent = text
    }
})

function convert(amount, factor, flip) {
    if (flip === true) {
        return (amount / factor).toFixed(3)
    } else {
        return (amount * factor).toFixed(3)
    }
}

function display(input, conv, units) {
    return `${input} ${units[0]} = ${convert(input, conv, false)} ${units[1]} | ${input} ${units[1]} = ${convert(input, conv, true)} ${units[0]}`
}

function storeUpload(input, units) {
    JSON.stringify(input)
    localStorage.setItem(`convert${units[0]}${units[1]}`, JSON.stringify(input))
}

function storeRetrieve(units) {
    let data = localStorage.getItem(`convert${units[0]}${units[1]}`)
    if (data === null) {
        return `0 ${units[0]} = 0 ${units[1]} | 0 ${units[1]} = 0 ${units[0]}`
    } else {
        return JSON.parse(data)
    }

}

// Retrieve from localStorage
for (let i = 0; i < units.length; i++) {
    elements[i].textContent = storeRetrieve(units[i])
}
