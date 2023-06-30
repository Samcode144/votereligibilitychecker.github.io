function submitForm() {
  const nameInput = document.getElementById("name");
  const placeOfBirthInput = document.getElementById("placeOfBirth");
  const currentAddressInput = document.getElementById("currentAddress");
  const ageInput = document.getElementById("age");
  const citizenshipInput = document.getElementById("citizenship");

  const name = nameInput.value;
  const placeOfBirth = placeOfBirthInput.value;
  const currentAddress = currentAddressInput.value;
  const age = parseInt(ageInput.value);
  const isCitizen = citizenshipInput.checked;

  if (isNaN(age) || age < 18) {
    alert("You must be at least 18 years old to vote.");
    return;
  }

  let eligibilityStatus = "Not eligible to vote";
  if (isCitizen) {
    eligibilityStatus = "Eligible to vote";
  }

  // Prepare the data to be passed to the result page
  const data = {
    name: name,
    placeOfBirth: placeOfBirth,
    currentAddress: currentAddress,
    eligibilityStatus: eligibilityStatus
  };

  // Convert the data to a query string
  const queryString = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  // If the user is eligible, redirect to the result page with the data as a query string
  window.location.href = "result.html?" + queryString;
}
