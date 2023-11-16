"use Strict";

const toggleSwitch = document.getElementById("switch");
const monthlyToggle = document.querySelector(".toggle-monthly");
const annualToggle = document.querySelector(".toggle-annual");
const starterPrice = document.querySelector(".price-start");
const proPrice = document.querySelector(".price-pro");
const enterprisePrice = document.querySelector(".price-enterprise");
const btnChoosePlan = document.querySelectorAll(".btn");
const chosenPlanHeading = document.querySelector(".heading-primary");
const chosenPlanBox = document.querySelector(".current-plan-container");
const chosenPlantxt = document.querySelector(".chosen-plan");
const chosenPlanBilling = document.querySelector(".chosen-billing");
const cards = document.querySelectorAll(".card");

const monthlyArr = [19, 59, 99];

const toggleFunction = function () {
  monthlyToggle.classList.toggle("active-toggle");
  annualToggle.classList.toggle("active-toggle");
};

const billingSwitch = function () {
  if (monthlyToggle.classList.contains("active-toggle")) {
    chosenPlanBilling.textContent = "/ Monthly";
    chosenPlanBilling.style.color = "rgb(62, 255, 127)";
    chosenPlantxt.style.color = "rgb(62, 255, 127)";
  } else {
    chosenPlanBilling.textContent = "/ Yearly";
    chosenPlanBilling.style.color = "#ffbc42";
    chosenPlantxt.style.color = "#ffbc42";
  }
};

toggleSwitch.addEventListener("click", function () {
  toggleFunction();

  // Add a class to trigger the transition
  starterPrice.classList.add("smooth-transition");
  proPrice.classList.add("smooth-transition");
  enterprisePrice.classList.add("smooth-transition");

  billingSwitch();

  // Wait for the transition to complete and then update innerHTML
  setTimeout(() => {
    if (toggleSwitch.checked) {
      const annualArr = monthlyArr.map((n) => n * 12);
      starterPrice.innerHTML = `£${annualArr[0]}<span>/ Year</span>`;
      proPrice.innerHTML = `£${annualArr[1]}<span>/ Year</span>`;
      enterprisePrice.innerHTML = `£${annualArr[2]}<span>/ Year</span>`;
    } else {
      starterPrice.innerHTML = `£${monthlyArr[0]}<span>/ month</span>`;
      proPrice.innerHTML = `£${monthlyArr[1]}<span>/ month</span>`;
      enterprisePrice.innerHTML = `£${monthlyArr[2]}<span>/ month</span>`;
    }
  }, 200); // Set the timeout to the same duration as the transition
});

// 2. CHOOSE PLAN BUTTON
btnChoosePlan.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const currentPlan = btn.closest(".card").querySelector(".heading-secondary").textContent;

    const currentCard = btn.closest(".card");

    cards.forEach((card) => card.classList.remove("card-active"));
    currentCard.classList.add("card-active");

    chosenPlanBox.classList.add("fade-in");

    chosenPlantxt.textContent = currentPlan;

    billingSwitch();
  });
});
