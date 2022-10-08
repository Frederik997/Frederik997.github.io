/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputValue = document.querySelector("input");
const button = document.querySelector("button");
const length = document.querySelector(".length-para");
const volume = document.querySelector(".volume-para");
const mass = document.querySelector(".mass-para");

// Conversion Math Functions
function lengthConversion(num) {
  length.innerHTML = `${num} meters = ${(num * 3.281).toFixed(
    3
  )} feet | ${num} feet = ${(num / 3.281).toFixed(3)} meters`;
}
function volumeConversion(num) {
  volume.innerHTML = `${num} leters = ${(num * 0.264).toFixed(
    3
  )} gallons | ${num} gallons = ${(num / 0.264).toFixed(3)} leters`;
}
function massConversion(num) {
  mass.innerHTML = `${num} kilos = ${(num * 2.204).toFixed(
    3
  )} pounds | ${num} pounds = ${(num / 2.204).toFixed(3)} kilos`;
}

// Button Function
button.addEventListener("click", function () {
  lengthConversion(inputValue.value);
  volumeConversion(inputValue.value);
  massConversion(inputValue.value);
});
