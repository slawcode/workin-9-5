// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// Tells the page to first load HTML and CSS 
$(document).ready(function () {
  console.log("Workin' nine to five...");

// Variable created to display current date and time with dayjs
// const currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

// // Variable created to display current date and time
// var displayTime = document.querySelector("#currentDay");

// displayTime.textContext = currentTime;

// Variable created to display current date and time in HTML element
var currentDay = $("#currentDay");

// Function created to display todays date
function showDateAndTime() {
  console.log("...what a way to make a livin'...");
  var currentDate = dayjs().format("dddd, MMMM D[th], h:mm a");
  currentDay.text(currentDate);
}

// Function call to display todays date
showDateAndTime();

// A listener for click events added to the saveBtn to save user inputs in the text area 
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  // Save items in local storage
  saveToLocalStorage(time, text);
});

// Apply past, present or future class to each time block
function hourTracker() {
  var currentHour = dayjs().hour();

// Loop over the time blocks  
$(".time-div").each(function () {
  var timeDiv = $(this).attr("id").split("-")[1];
  // console.log("Past, present and future!")

  if (currentHour == timeDiv) {
    $(this).addClass("present");
    // $(this).removeClass("future");
    $(this).children("description").addClass("present");
  }
  else if (currentHour < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
    // $(this).removeClass("future");
  } 
  else if (currentHour > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
    // $(this).addClass("future");
  }
 })
}
hourTracker();

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

//  Clear button function for clearing content and local storage
$("#clearFieldsBtn").click(function(event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});

// Function to display text 
// function displayText() {
//   $(".timeDiv").each(function () {
//     var currentHour = $(this).attr("id");
//     $(this).children(".description").val(localStorage.getItem(currentHour));
//   })
// }

// Function to display text from local storage
function displayText() {
  console.log("...barely gettin' by...");
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id");
    $(this).children("description").val(localStorage.getItem(timeDiv));
  });
}

displayText();

});

// Save data to local storage
  $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time,value);
  });
   
// //  Clear button function for clearing content and local storage
//    $("#clearFieldsBtn").click(function(event) {
//       event.preventDefault;
//       $("textArea").val("");
//       localStorage.clear();
//   });




