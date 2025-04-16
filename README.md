<!DOCTYPE html>
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
        <input type="number" placeholder="0">
      </td>
    </tr>
  </table>
</div>

<!-- Original Semester Section to Clone -->
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

<!-- Add Semester Button -->
<button onclick="newSemester()">Add Semester</button>

<script>
  // Add 6 more rows to the first table
  const baseTable = document.querySelector(".semester-table");
  const templateRow = document.querySelector(".clone-row");

  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    baseTable.appendChild(clone);
  }

  function newSemester() {
    // Clone the whole semester section (heading + table + container)
    const originalSection = document.querySelector(".clone-this");
    const clonedSection = originalSection.cloneNode(true);

    // Update heading inside the clone
    const heading = clonedSection.querySelector("h3");
    heading.innerText = "Future Semester";
    heading.contentEditable = true;

    // Append it after the button
    document.body.appendChild(clonedSection);
  }
</script>

</body>
</html>
