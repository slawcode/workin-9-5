// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// Tells the page to first load HTML and CSS 
$(document).ready(function () {
  console.log("Workin' nine to five...");

var displayTime = document.querySelector("#currentDay");

var currentTime = dayjs().format("dddd, MMMM D, YYY, h:mm:ss a");

displayTime.textContext = currentTime;

$(".saveBtn").on("click", function () {
  // console.log("Save this text!");
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

$(".time-div").each(function() {
  var timeDiv = $(this).attr("id").split("hour")[1]);

  if (currentHour) == timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");
  } else if (currentHour < timeDiv) {
    $(this)
  }
})

// displayText();

})


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
