/*
  feet = meters × 3.28084
  meters = feet ÷ 3.28084

  gallons = liters ÷ 3.78541
  liters = gallons × 3.78541

  pounds = kilograms × 2.20462
  kilograms = pounds ÷ 2.20462
*/
let unitInput = document.getElementById("unit-input")
let metersAndFeet = document.getElementById("meters-and-feet")
let litersAndGallons = document.getElementById("liters-and-gallons")
let kilogramsAndPounds = document.getElementById("kilograms-and-pounds")

const lengthUnit = 3.28084
const volumeUnit = 0.264172
const massUnit = 2.20462

const convertBtn = document.getElementById("convert-btn")

// convert to imperial
const convertToImperial = (metric, unitOfMeasure) => {
  
  const imperialValue = Number(metric * unitOfMeasure)

  return Number(imperialValue.toFixed(3))
}

// convert to metric
const convertToMetric = (imperial, unitOfMeasure) => {
  
  const metricValue = imperial / unitOfMeasure
  
  return Number(metricValue.toFixed(3))
}

// render conversions 
const renderConversions = (htmlEl, unitValue, metric, imperial, conversionMetric, conversionImperial) => {

  htmlEl.textContent = `${unitValue} ${metric} = ${conversionImperial} ${imperial} | ${unitValue} ${imperial} = ${conversionMetric} ${metric}`
  
}

convertBtn.addEventListener('click', () => {
  const unitInputValue = Number(unitInput.value)

  // length
  renderConversions(
                  metersAndFeet, 
                  unitInputValue, 
                  "meters", 
                  "feet", 
                  convertToMetric(unitInputValue, lengthUnit), 
                  convertToImperial(unitInputValue, lengthUnit)
                )

  // volume
  renderConversions(
                  litersAndGallons, 
                  unitInputValue, 
                  "liters", 
                  "gallons", 
                  convertToMetric(unitInputValue, volumeUnit), 
                  convertToImperial(unitInputValue, volumeUnit)
                )

  // mass
  renderConversions(
                  kilogramsAndPounds, 
                  unitInputValue, 
                  "kilograms", 
                  "pounds", 
                  convertToMetric(unitInputValue, massUnit), 
                  convertToImperial(unitInputValue, massUnit)
                )

})

