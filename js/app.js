// Get the modal
var modal = $("#contactModal");

// Get the button that opens the modal
var btn = $("#openModalBtn");

// When the user clicks the button, open the modal
btn.on("click", function () {
  modal.modal("show");
});

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function () {
  modal.modal("hide");
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function (event) {
  if ($(event.target).is(modal)) {
    modal.modal("hide");
  }
});

$(document).ready(function () {
  $(".info-box").click(function () {
    // Remove the 'highlighted' class from all elements
    $(".info-box").removeClass("highlighted");

    // Add the 'highlighted' class to the clicked element
    $(this).addClass("highlighted");
  });
});

document.getElementById("1").addEventListener("click", function () {
  document.getElementById("image-display").src = "pictures/pro2.png";
});

document.getElementById("2").addEventListener("click", function () {
  document.getElementById("image-display").src = "pictures/pro1.jpg";
});
document.getElementById("3").addEventListener("click", function () {
  document.getElementById("image-display").src = "pictures/pro3.jpg";
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const serviceItems = document.querySelectorAll(".service-item");
  const dots = document.querySelectorAll(".indicator .dot");
  let activeIndex = dots.length - 1; // Start from the rightmost dot
  let dotInterval;

  function changeDot() {
    // Remove 'active' class from the current red dot
    dots[activeIndex].classList.remove("active");
    dots[activeIndex].src = "pictures/2.png";

    // Calculate the next index
    activeIndex = (activeIndex - 1 + dots.length) % dots.length;

    // Add 'active' class to the new red dot
    dots[activeIndex].classList.add("active");
    dots[activeIndex].src = "pictures/1.png";
  }

  function startDotAnimation() {
    dotInterval = setInterval(changeDot, 5000);
  }

  function stopDotAnimation() {
    clearInterval(dotInterval);
  }

  // Start the dot animation initially
  startDotAnimation();

  // Add hover event listeners to service items
  serviceItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      slider.classList.add("paused");
      stopDotAnimation();
    });

    item.addEventListener("mouseout", () => {
      slider.classList.remove("paused");
      startDotAnimation();
    });
  });
});
