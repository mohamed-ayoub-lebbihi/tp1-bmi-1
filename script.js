function validateForm() {
    var name = document.getElementById('name').value.trim();
    var weight = document.getElementById('weight').value.trim();
    var height = document.getElementById('height').value.trim();
  
    if (name === "" || weight === "" || height === "") {
      alert("All fields are required.");
      return false;
    }
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Weight and Height must be valid positive numbers.");
      return false;
    }
  
    return true;
  }
  
