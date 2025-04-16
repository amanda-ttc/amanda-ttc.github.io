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
<div class="semester-section">
  <h3 contenteditable="true">Current Semester</h3>
  <table id="CurrentSem" class="semester-table">
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

<!-- Button -->
<button onclick="newSemester()">Add Semester</button>

<script>
  const templateRow = document.querySelector(".clone-row");
  const table = document.getElementById("CurrentSem");

  // Add 6 more rows on load
  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    table.appendChild(clone);
  }

  function newSemester() {
    // Clone the table and heading
    const originalTable = document.querySelector(".semester-table");
    const clonedTable = originalTable.cloneNode(true);

    // Create a new container section
    const container = document.createElement("div");
    container.className = "semester-section";

    // Create a new editable heading
    const heading = document.createElement("h3");
    heading.contentEditable = true;
    heading.innerText = "Future Semester";

    // Append heading and table to the container
    container.appendChild(heading);
    container.appendChild(clonedTable);

    // Append container to the body
    document.body.appendChild(container);
  }
</script>

</body>
</html>
