function calculateBMI() {
  // Get input values
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  // Calculate BMI
  var bmi = weight / Math.pow(height, 2);

  // Display result
  document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
