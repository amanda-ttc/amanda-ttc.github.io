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


<h3>Current Semester</h3>

<table id="CurrentSem">
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
  const table = document.getElementById("CurrentSem");
  const templateRow = document.querySelector(".clone-row");

  for (let i = 0; i < 7; i++) {
    const clone = templateRow.cloneNode(true);
    table.appendChild(clone);
  }
</script>
<br>

<button type="button" onclick="newSemester()">Add Semester</button>

<script>
function newSemester() {
  var table = document.getElementById("CurrentSem");
}
</script>


</body>
</html>
