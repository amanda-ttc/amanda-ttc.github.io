
  const baseTable = document.querySelector(".semester-table");
  const templateRow = document.querySelector(".clone-row");

  // Add 6 more rows to the initial table
  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    baseTable.appendChild(clone);
  }

  let semesterCount = 1;
  const MAX_SEMESTERS = 19;

  // Enforce max and min in real time
  function enforceValueLimits() {
    const allInputs = document.querySelectorAll('input[type="number"]');
    allInputs.forEach(input => {
      input.addEventListener('input', () => {
        const max = parseFloat(input.max);
        const min = parseFloat(input.min || "0");
        const value = parseFloat(input.value);

        if (value > max) {
          input.value = max;
        } else if (value < min) {
          input.value = min;
        }
      });
    });
  }

  enforceValueLimits(); // On page load

  function newSemester() {
    if (semesterCount >= MAX_SEMESTERS) {
      alert("Maximum of 19 semesters reached.");
      return;
    }

    const originalSection = document.querySelector(".clone-this");
    const clonedSection = originalSection.cloneNode(true);
    clonedSection.setAttribute("data-removable", "true");

    const heading = clonedSection.querySelector("h3");
    heading.innerText = "Future Semester";
    heading.contentEditable = true;

    const inputs = clonedSection.querySelectorAll("input");
    inputs.forEach(input => {
      if (input.type === "text") input.value = "";
      if (input.type === "number") {
        input.value = (input.max === "9") ? "3" : "0";
        input.setAttribute("max", input.max);
        input.setAttribute("min", input.min || "0");
      }
    });

    // Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Semester";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => {
      if (clonedSection.getAttribute("data-removable") === "true") {
        clonedSection.remove();
        semesterCount--;
      }
    };
    clonedSection.appendChild(removeBtn);

    const wrapper = document.getElementById("semester-wrapper");
    wrapper.appendChild(clonedSection);
    semesterCount++;

    enforceValueLimits();
    clonedSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
