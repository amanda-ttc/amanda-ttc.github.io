<!DOCTYPE html>
<html>
<head>
  <style>
    table.semester-table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
    }

    table.semester-table th,
    table.semester-table td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }

    h3[contenteditable="true"] {
      margin-top: 30px;
      color: #333;
    }
  </style>
</head>
<body>

<h1>CGPA Calculator</h1>

<!-- Current CGPA -->
<table>
  <tr>
    <th>Current CGPA</th>
    <td>
      <input type="number" placeholder="0">
    </td>
  </tr>
</table>

<!-- Current Semester Heading -->
<h3 contenteditable="true">Current Semester</h3>

<!-- Current Semester Table -->
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

<!-- Script: Duplicate 6 rows initially -->
<script>
  const table = document.getElementById("CurrentSem");
  const templateRow = document.querySelector(".clone-row");
  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    table.appendChild(clone);
  }

  function newSemester() {
    // Clone the semester table
    const originalTable = document.querySelector(".semester-table");
    const clonedTable = originalTable.cloneNode(true);

    // Create a new editable heading
    const heading = document.createElement("h3");
    heading.contentEditable = true;
    heading.innerText = "Future Semester";

    // Append the heading and cloned table to the page
    document.body.appendChild(heading);
    document.body.appendChild(clonedTable);
  }
</script>

<!-- Button to add new semester -->
<br>
<button type="button" onclick="newSemester()">Add Semester</button>

</body>
</html>
