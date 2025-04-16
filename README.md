<html>
<body>

<h1>CGPA Calculator</h1>
<table>
  <tr>
    <th>Current CGPA</th>
     <td>
      <input type="number" placeholder="0">
    </td>
  </tr>
</table>


<h3 contenteditable="true">Current Semester</h3>

<!-- Current Semester Table -->
<table id="CurrentSem" class="semester-table" border="1">
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

<script>
  // Duplicate the row 6 times on load
  const table = document.getElementById("CurrentSem");
  const templateRow = document.querySelector(".clone-row");
  for (let i = 0; i < 6; i++) {
    const clone = templateRow.cloneNode(true);
    table.appendChild(clone);
  }

  function newSemester() {
    // Clone the entire table
    const originalTable = document.querySelector(".semester-table");
    const clonedTable = originalTable.cloneNode(true);
    
    // Create a new editable heading
    const heading = document.createElement("h3");
    heading.contentEditable = true;
    heading.innerText = "Future Semester";

    // Append heading and table to body
    document.body.appendChild(heading);
    document.body.appendChild(clonedTable);
  }
</script>

<!-- Button to add new semester section -->
<br>
<button type="button" onclick="newSemester()">Add Semester</button>

</body>
</html>
