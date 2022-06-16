function validateEmployee()
{
var valid=true;
var firstInvalidComponent=null;

var name=document.getElementById('name').value.trim();
var nameErrorSection=document.getElementById('nameErrorSection');
nameErrorSection.innerHTML='';
if(name.length==0)
{
nameErrorSection.innerHTML='Name Requried';
valid=false;
firstInvalidComponent=document.getElementById('name');
}

var designationCode=document.getElementById('designationCode').value;
var designationCodeErrorSection=document.getElementById('designationCodeErrorSection');
designationCodeErrorSection.innerHTML='';
if(designationCode==-1)
{
designationCodeErrorSection.innerHTML='Designation Required';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=document.getElementById('designationCode');
}

var dateOfBirth=document.getElementById('dateOfBirth').value;
var dateOfBirthErrorSection=document.getElementById('dateOfBirthErrorSection');
dateOfBirthErrorSection.innerHTML='';
if(dateOfBirth.length==0)
{
dateOfBirthErrorSection.innerHTML='Date Of Birth Required';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=document.getElementById('dateOfBirth');
}

var genderErrorSection=document.getElementById('genderErrorSection');
genderErrorSection.innerHTML='';
var male=document.getElementById('male');
var female=document.getElementById('female');
if(male.checked==false && female.checked==false)
{
genderErrorSection.innerHTML='Gender Required';
valid=false;
}

var basicSalary=document.getElementById('basicSalary').value.trim();
var basicSalaryErrorSection=document.getElementById('basicSalaryErrorSection');
basicSalaryErrorSection.innerHTML='';
if(basicSalary.length==0)
{
basicSalaryErrorSection.innerHTML='basic Salary Required';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=document.getElementById('basicSalary');
}
else
{
var v='0123456789.';
var e;
var isBasicSalaryValid=true;
for(e=0;e<basicSalary.length;e++)
{
if(v.indexOf(basicSalary.charAt(e))==-1)
{
basicSalaryErrorSection.innerHTML=' Invalid Basic Salary';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=document.getElementById('basicSalary');
isBasicSalaryValid=false;
break;
}
}
if(isBasicSalaryValid==true)
{
var dot=basicSalary.indexOf('.');
if(dot!=-1)
{
if((basicSalary.length-(dot+1))>2)
{
basicSalaryErrorSection.innerHTML='Invalid Basic Salary';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=document.getElementById('basicSalary');
}
else
{
var d=basicSalary.indexOf('.',dot+1);
if(d!=-1)
{
basicSalaryErrorSection.innerHTML='Invalid Basic Salary';
valid=false;
if(firstInvalidComponent==null) firstInvalidComponent=document.getElementById('basicSalary');
}
}
}
}
}

var panNumber=document.getElementById('panNumber').value.trim();
var panNumberErrorSection=document.getElementById('panNumberErrorSection');
panNumberErrorSection.innerHTML='';
if(panNumber.length==0)
{
panNumberErrorSection.innerHTML='PAN Number Requried';
valid=false;
if(firstInvalidComponent==null)firstInvalidComponent=document.getElementById('panNumber');
}

var aadharCardNumber=document.getElementById('aadharCardNumber').value.trim();
var aadharCardNumberErrorSection=document.getElementById('aadharCardNumberErrorSection');
aadharCardNumberErrorSection.innerHTML='';
if(aadharCardNumber.length==0)
{
aadharCardNumberErrorSection.innerHTML='Aadhar Card Number Required';
valid=false;
if(firstInvalidComponent==null)firstInvalidComponent=document.getElementById('aadharCardNumber');
}

if(!valid && firstInvalidComponent!=null) firstInvalidComponent.focus();
return valid;
}

function addEmployee()
{
var valid=validateEmployee();
if(valid==false) return;
var dataToSend;
var name=document.getElementById('name').value.trim();
dataToSend="name="+encodeURI(name);
var designationCode=document.getElementById('designationCode').value;
dataToSend+="&designationCode="+encodeURI(designationCode);
var dateOfBirth=document.getElementById('dateOfBirth').value;
dataToSend+="&dateOfBirth="+encodeURI(dateOfBirth);
var male=document.getElementById('male');
if(male.checked==true) dataToSend+="&gender="+encodeURI('M');
else dataToSend+="&gender="+encodeURI('F');
var isIndian=document.getElementById('isIndian');
if(isIndian.checked==true) dataToSend+="&isIndian="+encodeURI('true');
var basicSalary=document.getElementById('basicSalary').value.trim();
dataToSend+="&basicSalary="+encodeURI(basicSalary);
var panNumber=document.getElementById('panNumber').value.trim();
dataToSend+="&panNumber="+encodeURI(panNumber);
var aadharCardNumber=document.getElementById('aadharCardNumber').value.trim();
dataToSend+="&aadharCardNumber="+encodeURI(aadharCardNumber);

var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
responseData=this.responseText;
if(responseData=="success")
{
var rightPanel=document.getElementById("rightPanel");
rightPanel.innerHTML="";
var heading=document.createElement("h2");
heading.innerHTML="Employee (Add Module)";
var message=document.createElement("b");
message.innerHTML="Added SuccessFully Want To Add More?";
var buttonOne=document.createElement("BUTTON");
buttonOne.type='button';
buttonOneLink=document.createElement("a");
buttonOneLink.href="/stylethree/getEmployeeAddForm.jsp";
buttonOneLink.innerHTML='Yes';
buttonOneLink.style.color='black';
buttonOneLink.style.textDecoration='none';
var buttonTwo=document.createElement("BUTTON");
buttonTwo.type='button';
buttonTwoLink=document.createElement("a");
buttonTwoLink.href="/stylethree/Employees.jsp";
buttonTwoLink.innerHTML='No';
buttonTwoLink.style.color='black';
buttonTwoLink.style.textDecoration='none';
var br=document.createElement("br");
rightPanel.appendChild(heading);
rightPanel.appendChild(message);
rightPanel.appendChild(br);
rightPanel.appendChild(buttonOne);
buttonOne.appendChild(buttonOneLink);
rightPanel.appendChild(buttonTwo);
buttonTwo.appendChild(buttonTwoLink);
}
else
{
	
var errorSpan=document.getElementById('error');
//console.log(errorSpan,responseData);
errorSpan.innerHTML=responseData;
}
}
else
{
alert('some problem')
}
}
};
xmlHttpRequest.open('POST','addEmployee',true);
xmlHttpRequest.setRequestHeader('content-Type','application/x-www-form-urlencoded');
xmlHttpRequest.send(dataToSend); 
}