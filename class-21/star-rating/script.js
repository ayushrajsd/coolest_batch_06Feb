/***
 *
 * 1. Get all the stars
 * 2. add a click event on each star
 * 3. when the star is clicked
 *  a. get the data-attribute of the star
 *  b. update the rating based on the data-attribute
 * c. update the stars based on the rating - change the colors of the stars
 */

const stars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("rating");

// add a click event listener on each star

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    // get the value from the data-value attribute
    const value = parseInt(star.getAttribute("data-value"));
    updateRating(value);
  });
});

// function to update the rating and change the filled stars
function updateRating(value) {
  stars.forEach(function (star) {
    const starValue = parseInt(star.getAttribute("data-value"));
    star.classList.toggle("filled", starValue <= value);
  });
  ratingDisplay.textContent = value;
}
