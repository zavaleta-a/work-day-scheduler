// When the scheduler is open, the current day is at the top
// When user scrolls, they can see timeblocks for business hours

// When you click on a timeblock, you can enter an event

// When the page is refreshed, the info entered is still shown

// Use moment.js to show the date
var date = moment().format('MMMM Do YYYY');
// Line 29 is where the date goes.  #currentDay .lead
$('#currentDay').html(date);

// Color code timeblocks (.past, .present, .future)
// Change colors for past present and future in CSS
if (timeBlock < currentTime) {
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
}

else if (timeBlock === currentTime) {
    $(this).removeClass('past');
    $(this).addClass('present');
    $(this).removeClass('future');
}

else if (timeBlock > currentTime) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
}

// Create a save button that will save entered info into local storage
// Need to create an eventListener for .saveBtn
$('.saveBtn').click(function() {
    console.log($(this).prev().val());
});

localStorage.setItem(time, text);

var timeBlock
var currentTime