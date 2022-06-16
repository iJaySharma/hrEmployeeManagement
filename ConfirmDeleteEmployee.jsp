<jsp:include page='/MasterPageTopSection.jsp'/>
<script src='/stylethree/js/employeeLeftPanelContents.js'></script>
<script src='/stylethree/js/deleteEmployee.js'></script>

<h2>Employee (Edit Module)</h2>
<span class='error' id='error'>
</span>
<br>
Name : ${name}
<input type='hidden' id='employeeId' name='employeeid'  value='${id}'></input>
<br>
Designation : ${designation}
<br>
Date of birth : ${dateOfBirth}
<br>
Gender : ${gender}
<br>
Indian : ${isIndian}
<br>
Basic Salary : ${basicSalary}
<br>
PAN Number : ${panNumber}
<br>
Aadhar Card Number : ${aadharCardNumber}
<br>

<button type='submit' onClick='deleteEmployee()' style='float:left;' >delete</button>

<form method='post' action='/stylethree/Designations.jsp'>
<button type='submit'>Cancel</button>
</form>


<jsp:include page='/MasterPageBottomSection.jsp'/>