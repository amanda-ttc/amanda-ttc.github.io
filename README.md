<html>
<head>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 20px;
      background: #f9f9f9;
    }

    .semester-section {
      width: 100%;
      max-width: 900px;
      margin: 30px auto;
      background-color: white;
      padding: 20px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      border-radius: 8px;
      position: relative;
    }

    table.semester-table {
      border-collapse: collapse;
      width: 100%;
    }

    table.semester-table th,
    table.semester-table td {
      border: 1px solid #999;
      padding: 8px;
      text-align: left;
    }

    table input[type="text"],
    table input[type="number"] {
      width: 100%;
      box-sizing: border-box;
      padding: 5px;
    }

    h3[contenteditable="true"] {
      margin-bottom: 10px;
      color: #333;
     display: inline-block;
     max-width: 75%; 
     word-break: break-word;
    }

    button {
      margin: 20px 0;
      padding: 10px 20px;
      font-size: 14px;
      border: 1px solid #611b3f;
      background-color: white;
      color: #611b3f;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #f7e6ee;
    }

    .remove-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: #ffdddd;
      color: #900;
      border: 1px solid #c00;
      border-radius: 5px;
      font-size: 12px;
      padding: 5px 10px;
    }

    .remove-btn:hover {
      background-color: #ffcfcf;
    }
  </style>
</head>
<body>

<h1>CGPA Calculator</h1>

<!-- Current CGPA Section -->
<div class="semester-section">
  <table>
    <tr>
      <th>Current CGPA</th>
      <td>
        <input type="number" placeholder="0" max="10" min="0">
      </td>
    </tr>
  </table>
</div>

<!-- Wrapper for all semester sections -->
<div id="semester-wrapper">
  <!-- Original Semester Section -->
  <div class="semester-section clone-this" data-removable="false">
    <h3 contenteditable="true">Current Semester</h3>
    <table class="semester-table">
      <tr>
        <th>Course</th>
        <th>GPA</th> 
        <th>Course Credit</th>
        <th>Previous Grade</th>
      </tr>
      <tr class="clone-row">
        <td><input type="text" placeholder="Course Name"></td>
        <td><input type="number" placeholder="0" max="10" min="0"></td>
        <td><input type="number" value="3" max="9" min="0"></td>
        <td><input type="number" value="0" max="10" min="0"></td>
      </tr>
    </table>
  </div>
</div>

<!-- Add Semester Button -->
<button id="addSemesterBtn" onclick="newSemester()">Add Semester</button>

<script>
  const baseTable = document.querySelector(".semester-table");
  const templateRow = document.querySelector(".clone-row");

  // Add 6 more rows to the initial table
  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    baseTable.appendChild(clone);
  }

  let semesterCount = 1;
  const MAX_SEMESTERS = 20;

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
  const futureNum = semesterCount; // Since first semester is already present
  heading.innerText = `Future Semester ${futureNum}`;
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

  // Remove existing Remove button (if any, from clone)
  const oldRemove = clonedSection.querySelector(".remove-btn");
  if (oldRemove) oldRemove.remove();

  // Add new Remove button
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
</script>

</body>
</html>
