<jsp:include page='/MasterPageTopSection.jsp'/>
<script src='/stylethree/js/employeeLeftPanelContents.js'></script>
<script src='/stylethree/js/editEmployee.js'></script>

<h2>Employee (Edit Module)</h2>
<span class='error' id='error'>
</span>
<br>
Name
<input type='text' id='name' name='name' maxlength='35' size='51' value='${name}'></input>
<span id='nameErrorSection' style='color:red'></span></td>
<input type='hidden' id='employeeId' name='employeeid'  value='${id}'></input>
<br>
Designation
<select id='designationCode' name='designationCode'>
<option value='-1'>&lt;Select Designation&gt;</option>
</select>
<span id='designationCodeErrorSection' style='color:red'></span>
<script src='/stylethree/js/employeeAddForm.js'></script>
<br>
Date of birth
<input type='date' id='dateOfBirth' name='dateOfBirth' value='${dateOfBirth}'></input>
<span id='dateOfBirthErrorSection' style='color:red'></span>
<br>
Gender
<td><input type='radio' id='male' name='gender' value='M'>Male
&nbsp;&nbsp;&nbsp;&nbsp;
<input type='radio' id='female' name='gender' value='F'>Female
<span id='genderErrorSection' style='color:red'></span>
<br>
Indian?
<input type='checkbox' name='isIndian' id='isIndian'>
<br>
Basic Salary
<input type='text' style='text-align:right'name='basicSalary' id='basicSalary' maxlength='12' size='13' value='${basicSalary}'>
<span id ='basicSalaryErrorSection' style='color:red'></span>
<br>
PAN Number
<input type='text' id='panNumber' name='panNumber' maxlength='15' size='16' value='${panNumber}'>
<span id='panNumberErrorSection' style='color:red'></span>
<br>
Aadhar Card Number
<input type='text' id='aadharCardNumber' name='aadharCardNumber' maxlength='15' size='16' value='${aadharCardNumber}'>
<span id='aadharCardNumberErrorSection' style='color:red'></span>
<br>

<button type='submit' onClick='updateEmployee()' style='float:left;' >Update</button>

<form method='post' action='/stylethree/Designations.jsp'>
<button type='submit'>Cancel</button>
</form>


<jsp:include page='/MasterPageBottomSection.jsp'/>