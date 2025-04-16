<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .semester-section {
      width: 80%;
      max-width: 900px;
      margin: 30px auto;
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

    h3[contenteditable="true"] {
      margin-bottom: 10px;
    }

    button {
      margin: 20px 0;
      padding: 8px 16px;
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
  </style>
</head>
<body>

<h1>CGPA Calculator</h1>

<!-- Current CGPA -->
<div class="semester-section">
  <table>
    <tr>
      <th>Current CGPA</th>
      <td>
        <input type="number" placeholder="0">
      </td>
    </tr>
  </table>
</div>

<!-- Current Semester Section -->
<div class="semester-section clone-this">
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
      <td><input type="number" placeholder="0"></td>
      <td><input type="number" value="3"></td>
      <td><input type="number" value="0"></td>
    </tr>
  </table>
</div>

<!-- Button to add a new semester -->
<button onclick="newSemester()">Add Semester</button>

<script>
  // Add 6 extra rows to the original semester table
  const baseTable = document.querySelector(".semester-table");
  const templateRow = document.querySelector(".clone-row");
  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    baseTable.appendChild(clone);
  }

  function newSemester() {
    // Clone the entire semester section (heading + table)
    const originalSection = document.querySelector(".clone-this");
    const clonedSection = originalSection.cloneNode(true);

    // Update the heading inside the clone
    const heading = clonedSection.querySelector("h3");
    heading.innerText = "Future Semester";
    heading.contentEditable = true;

    // Append the new section to the page
    document.body.appendChild(clonedSection);
  }
</script>

</body>
</html>
