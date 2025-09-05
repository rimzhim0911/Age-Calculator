// 1. Select important elements from the HTML using their IDs
const dobInput = document.getElementById("dob");  // Input where user selects Date of Birth
const calcBtn = document.getElementById("btn");   // Button to trigger age calculation
const result = document.getElementById("result"); // Area where age will be displayed

// 2. Add a "click" event listener to the button
calcBtn.addEventListener("click", function () {

    // 3. Get the value (date) entered by the user
    let dobValue = dobInput.value;

    // 4. If user hasn’t selected a date, show a warning message
    if (dobValue === "") {
        result.innerText = "⚠️ Please select your date of birth!";
        result.classList.add("show"); 
        return; // Stop the function here
    }

    // 5. Convert the entered value into a Date object
    let dob = new Date(dobValue);

    // 6. Get today’s date
    let today = new Date();

    // 7. Calculate the difference in years
    let age = today.getFullYear() - dob.getFullYear();

    // 8. Adjust the age if the birthday hasn’t come yet this year
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--; // Birthday not reached yet → subtract 1
    }

    // 9. Display the result in the "result" paragraph
    result.innerText = `🎉 You are ${age} years old!`;
     result.classList.add("show");
});
