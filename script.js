// When the scheduler is open, the current day is at the top
// When user scrolls, they can see timeblocks for business hours

// When you click on a timeblock, you can enter an event

// When the page is refreshed, the info entered is still shown

// Variables for if else if statement
var currentTime = moment().hour();

// Use moment.js to show the date
var date = moment().format("MMMM Do YYYY");
// Line 29 is where the date goes.  #currentDay .lead
$("#currentDay").html(date);

function hourTracker() {
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
  });
  // Color code timeblocks (.past, .present, .future)
  // Change colors for past present and future in CSS
  if (timeBlock < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else if (timeBlock === currentTime) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else if (timeBlock > currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
}

// Create a save button that will save entered info into local storage
// Need to create an eventListener for .saveBtn
$(".saveBtn").click(function () {
  console.log($(this).prev().val());
  var text = $(this).prev().val();
  var time = $(this).parent().attr("id");
  console.log(text);
  localStorage.setItem(time, text);
  console.log(localStorage.getItem(time));
});

// Need to be able to get items that have been saved to local storage
// Create a loop
// Target specific
$("#0900").val(localStorage.getItem("0900"));
$("#1000").val(localStorage.getItem("1000"));
