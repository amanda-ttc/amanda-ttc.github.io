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

<button type="button" onclick="newSemester()">Add Semester</button>

<script>
function newSemester() {
  var table = document.getElementById("CurrentSem");
}
</script>


</body>
</html>
