export function displayCurrentDate() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get day, month, date, and year
    var day = currentDate.toLocaleString('en-US', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  
    // Display the result
    return (`Current Date: ${day}, ${month} ${date}, ${year}`);
  }
  
  // Call the function to display the current date
//   displayCurrentDate();
  