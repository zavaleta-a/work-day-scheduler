// When the scheduler is open, the current day is at the top
// When user scrolls, they can see timeblocks for business hours
// Color code timeblocks for past, present, or future
// When you click on a timeblock, you can enter an event
// Create a save button that will save entered info into local storage
// When the page is refreshed, the info entered is still shown
// Use moment.js to show the date

var date = moment().format('dddd');
$('#currentDay').html(date);

// Line 29 is where the date goes.  #currentDay .lead




