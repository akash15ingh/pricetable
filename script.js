document.addEventListener("DOMContentLoaded", function () {
  const userSlider = document.getElementById("userSlider");
  const selectedRange = document.getElementById("selectedRange");
  const plan1 = document.getElementById("plan1");
  const plan2 = document.getElementById("plan2");
  const plan3 = document.getElementById("plan3");

  // Initialize the slider and selected range text
  userSlider.value = 0;
  selectedRange.textContent = "0 - 10";

  // Initialize highlighting
  plan1.classList.add("highlighted-plan");

  // Add an event listener to track changes in the slider value
  userSlider.addEventListener("input", function () {
    const selectedValue = parseInt(userSlider.value);
    let rangeText = "";

    // Remove highlighting from all plans
    plan1.classList.remove("highlighted-plan");
    plan2.classList.remove("highlighted-plan");
    plan3.classList.remove("highlighted-plan");

    if (selectedValue <= 10) {
      rangeText = "0 - 10";
      plan1.classList.add("highlighted-plan");
    } else if (selectedValue <= 20) {
      rangeText = "11 - 20";
      plan2.classList.add("highlighted-plan");
    } else {
      rangeText = "21 - 30";
      plan3.classList.add("highlighted-plan");
    }

    selectedRange.textContent = rangeText;
  });
});




