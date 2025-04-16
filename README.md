<html>
<body>

<h1>CGPA Calculator</h1>
<table>
  <tr>
    <th>CGPA</th>
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
  <tr>
    <td>
      <input type="text" placeholder="Course Name">
    </td>
    <td>
      <input type="number" placeholder="0">
    </td>
    <td>
      <input type="number" value="3">
    </td>
    <td>
      <input type="number" value="0">
    </td>
  </tr>
</table>
<br>

<button type="button" onclick="myFunction()">Add Row</button>

<script>
function myFunction() {
  var table = document.getElementById("CurrentSem");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL3";
}
</script>


</body>
</html>
