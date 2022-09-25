const rateings = document.querySelector(".rating-container");
const thankYou = document.querySelector(".thanks-container");
const form = document.querySelector(".rating-form");

form.addEventListener("submit", function(e){
    const selector = "input[name=ratings]:checked";
    const checkedInput = document.querySelector(selector);

    if(checkedInput !== null){
        const selectedRating = document.querySelector(".selection");
        selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
        rateings.classList.add("hidden");
        thankYou.classList.remove("hidden");
    }
        e.preventDefault();
})