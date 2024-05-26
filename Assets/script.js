// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// Tells the page to first load HTML and CSS 
$(document).ready(function () {
  console.log("Workin' nine to five...");

// Variable created to display current date and time
var displayTime = document.querySelector("#currentDay");

// Variable created to display current date and time with dayjs
var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

displayTime.textContext = currentTime;

// A listener for click events added to the saveBtn
// To save user inputs in the text area 
$(".saveBtn").on("click", function () {

  var text = $(this).siblings("description").val();
  var time = $(this).parent().attr("id");
  // Save items in local storage
  localStorage.setItem(time, text);
});

// Retrieve data from local storage for each hour
$("#hour-09 .description").val(localStorage.getItem("09));"));
$("#hour-10 .description").val(localStorage.getItem("10));"));
$("#hour-11 .description").val(localStorage.getItem("11));"));
$("#hour-12 .description").val(localStorage.getItem("12));"));
$("#hour-13 .description").val(localStorage.getItem("13));"));
$("#hour-14 .description").val(localStorage.getItem("14));"));
$("#hour-15 .description").val(localStorage.getItem("15));"));
$("#hour-16 .description").val(localStorage.getItem("16));"));
$("#hour-17 .description").val(localStorage.getItem("17));"));
``
// Apply past, present or future class to each time block
function hourTracker() {
  var currentHour = dayjs().hour();

// Loop over the time blocks  
$(".time-div").each(function () {
  var timeDiv = $(this).attr("id").split("hour")[1];
  console.log("Past, present and future!")

  if (currentHour < timeDiv) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } 
  else if (currentHour === timeDiv) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future")
  } 
  else {
    $(this).removeClass("present");
    $(this).addClass("past");
    $(this).addClass("future");
  }
 })
}
hourTracker();

// Function to display text from local storage
function displayText() {
  console.log("What a way to make a livin'!");
  $(".time-div").each(function () {
    var hourBlock = $(this).attr("id");
    $(this).children("description").val(localStorage.getItem(timeDiv));
  });
}

displayText();

});


// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
// HINT: What does `this` reference in the click listener function? 
// How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
// How might the id be useful when saving the description in local storage?
// Assigned saveBtn click listener for user input in text area

// $(".saveBtn").on("click", function () {
//   // console.log("Save this text!");
//   let text = $(this).siblings("description").val();
//   let time = $(this).parent().attr("id");
//   // Save items in local storage
//   localStorage.setItem(time, text);
// })


// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
// How can Day.js be used to get the current hour in 24-hour time?
  

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  



// TODO: Add code to display the current date in the header of the page.

// var currentDate = dayjs();
  // var formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');

// });
