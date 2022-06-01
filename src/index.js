import "./styles.css";

let metersAndFeet = document.getElementById("meters-and-feet");
let litersAndGallons = document.getElementById("liters-and-gallons");
let kilogramsAndPounds = document.getElementById("kilograms-and-pounds");

let output = 0;
let unit = document.getElementById("unit");

// Meters to feet | Feet to meters
function calcMetersAndFeet() {
  let meterFeetUnit = Number(unit.textContent);
  let feetFormula = 3.28;
  let feetCalc = (meterFeetUnit / feetFormula).toFixed(3);
  let meterCalc = Math.round(meterFeetUnit * feetFormula);
  output = metersAndFeet.textContent = `${meterFeetUnit} meters = ${feetCalc} feet | ${meterFeetUnit} feet = ${meterCalc} meters`;

  return output;
}

// Liters to gallons | Gallons to liters
function calcLitersAndGallons() {
  let litersGallonsUnits = Number(unit.textContent);
  let gallonsFormula = 0.26;
  let litersFormula = 3.78;
  let litersCalc = Math.round(litersGallonsUnits * litersFormula);
  let gallonCalc = (litersGallonsUnits / gallonsFormula).toFixed(3);
  output = litersAndGallons.textContent = `${litersGallonsUnits} liters = ${gallonCalc} gallons | ${litersGallonsUnits} gallons = ${litersCalc} liters`;

  return output;
}

// Kilograms to pounds | Pounds to kilogram
function calcKilogramsAndGallons() {
  let kilogramsPoundsUnits = Number(unit.textContent);
  let poundFormula = 2.2;
  let kilogramFormula = 0.45;
  let kilogramCalc = Math.round(kilogramsPoundsUnits * poundFormula);
  let poundCalc = Math.round(kilogramsPoundsUnits * kilogramFormula);
  output = kilogramsAndPounds.textContent = `${kilogramsPoundsUnits} kilos = ${kilogramCalc} pounds | ${kilogramsPoundsUnits} pounds = ${poundCalc} kilos`;
}

calcMetersAndFeet();
calcLitersAndGallons();
calcKilogramsAndGallons();
