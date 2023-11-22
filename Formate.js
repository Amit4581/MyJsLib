function formatDate(inputDate) {
    // Parse the input date string
    var dateParts = inputDate.split('-');
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthIndex = monthNames.indexOf(dateParts[1]);
    var formattedDate = new Date(dateParts[2], monthIndex, dateParts[0]);
    var yyyy = formattedDate.getFullYear();
    var mm = String(formattedDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    var dd = String(formattedDate.getDate()).padStart(2, '0');
    return yyyy + '-' + mm + '-' + dd;
}


   
 function checkMaxValue(input,max) {
        // Get the entered value
        let enteredValue = parseInt(input.value, 10);

        // Check if the entered value is greater than 99
        if (enteredValue > max) {
            // If so, set the value to 99
            input.value = max;
        }
    }
