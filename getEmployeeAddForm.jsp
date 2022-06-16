<jsp:include page='/MasterPageTopSection.jsp' />
<script src='/stylethree/js/employeeLeftPanelContents.js'></script>
<script src='/stylethree/js/addEmployee.js'></script>
<h2>Employee (Add Module)</h2>
<table>
<span id='error' style='color:red'></span></td>
<tr>
<td>Name</td>
<td><input type='text' id='name' name='name' maxlength='35' size='51'>
<span id='nameErrorSection' style='color:red'></span></td>
</tr>
<tr>
<td>Designation</td>
<td>
<select id='designationCode' name='designationCode'>
<option value='-1'>&lt;Select Designation&gt;</option>
</select>
<span id='designationCodeErrorSection' style='color:red'></span>
</td>
<script src='/stylethree/js/employeeAddForm.js'></script>


</tr>

<tr>
<td>Date of birth</td>
<td><input type='date' id='dateOfBirth' name='dateOfBirth'>
<span id='dateOfBirthErrorSection' style='color:red'></span>
</td>
</tr>
<tr>
<td>Gender</td>
<td><input type='radio' id='male' name='gender' value='M'>Male
&nbsp;&nbsp;&nbsp;&nbsp;
<input type='radio' id='female' name='gender' value='F'>Female
<span id='genderErrorSection' style='color:red'></span>
</td>
</tr>
<tr>
<td>Indian?</td>
<td><input type='checkbox' name='isIndian' id='isIndian'>
</td>
</tr>
<tr>
<td>Basic Salary</td>
<td>
<input type='text' style='text-align:right'name='basicSalary' id='basicSalary' maxlength='12' size='13'>
<span id ='basicSalaryErrorSection' style='color:red'></span>
</td>
</tr>
<tr>
<tr>
<td>PAN Number</td>
<td>
<input type='text' id='panNumber' name='panNumber' maxlength='15' size='16'>
<span id='panNumberErrorSection' style='color:red'></span>
</td>
</tr>
<tr>
<td>Aadhar Card Number</td>
<td>
<input type='text' id='aadharCardNumber' name='aadharCardNumber' maxlength='15' size='16'>
<span id='aadharCardNumberErrorSection' style='color:red'></span>
</td>
</tr>
</table>
<button type='submit' onClick='addEmployee()' style='float:left;' >Add</button>
<form method='post' action='/stylethree/Employees.jsp'>
<button type='submit'>Cancel</button>
</form>
<jsp:include page='/MasterPageBottomSection.jsp' />