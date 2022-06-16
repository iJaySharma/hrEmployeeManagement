function createDynamicRowClickHandler(rowAddress,employeeId,employees)
{
return function()
{
selectEmployee(rowAddress,employeeId,employees);	
};	
}

function populateEmployee()
{
var xmlHttpRequest=new XMLHttpRequest();
//jab bhi state change ho tb ye function chale 4=Done 0=unsent
xmlHttpRequest.onreadystatechange=function(){
//this xmlHttpRequest jisko point kr rha hai
if(this.readyState==4)
{
if(this.status==200)
{
responseData=this.responseText;
//alert(responseData);
//response data is of string type
var employees=JSON.parse(responseData);
var employeesGridTable=document.getElementById("employeesGridTable");	
var employeesGridTableBody=employeesGridTable.getElementsByTagName("tbody")[0];
var employeesGridTableBodyRowTemplate=employeesGridTableBody.getElementsByTagName("tr")[0];
//remove the ROW from DOM (Document object model)
employeesGridTableBodyRowTemplate.remove();
var employeesGridTableBodyColumnsTemplateCollection=employeesGridTableBodyRowTemplate.getElementsByTagName("td")[0];
var cellTemplate;
var k;
var dynamicRow;
var dynamicRowCells;
var placeHolderFor;
console.log(employees);
for(k=0;k<employees.length;k++)
{
dynamicRow=employeesGridTableBodyRowTemplate.cloneNode(true);
employeesGridTableBody.appendChild(dynamicRow);	
dynamicRowCells=dynamicRow.getElementsByTagName("td");
for(var i=0;i<dynamicRowCells.length;i++)
{
cellTemplate=dynamicRowCells[i];
placeHolderFor=cellTemplate.getAttribute("placeHolderId");
if(placeHolderFor==null)continue;
if(placeHolderFor=="serialNumber")cellTemplate.innerHTML=(k+1);
if(placeHolderFor=="employeeId")cellTemplate.innerHTML=employees[k].employeeId;	
if(placeHolderFor=="name")cellTemplate.innerHTML=employees[k].name;
if(placeHolderFor=="designationCode")cellTemplate.innerHTML=employees[k].designationCode;
if(placeHolderFor=="designation")cellTemplate.innerHTML=employees[k].designation;
if(placeHolderFor=="dateOfBirth")cellTemplate.innerHTML=employees[k].dateOfBirth;
if(placeHolderFor=="gender")cellTemplate.innerHTML=employees[k].gender;
if(placeHolderFor=="isIndian")cellTemplate.innerHTML=employees[k].isIndian;
if(placeHolderFor=="basicSalary")cellTemplate.innerHTML=employees[k].basicSalary;
if(placeHolderFor=="panNumber")cellTemplate.innerHTML=employees[k].panNumber;
if(placeHolderFor=="aadharCardNumber")cellTemplate.innerHTML=employees[k].aadharCardNumber;
if(placeHolderFor=="editOption")cellTemplate.innerHTML="<a href='/stylethree/editEmployee?employeeId="+employees[k].employeeId+"'>Edit</a>";
if(placeHolderFor=="deleteOption")cellTemplate.innerHTML="<a href='/stylethree/deleteEmployee?employeeId="+employees[k].employeeId+"'>Delete</a>";
}
dynamicRow.onclick=createDynamicRowClickHandler(dynamicRow,employees[k].employeeId,employees);
//add click event to dynamicRow
}//employeePopulation loop ends
}else
{
alert('some problem')
}
}
};
xmlHttpRequest.open('GET','employees',true);
xmlHttpRequest.send();
}
window.addEventListener('load',populateEmployee);

function Employee()
{
this.employeeId="";
this.name="";
this.designationCode=0;
this.designation="";
this.dateOfBirth="";
this.gender="";
this.isIndian=true;
this.basicSalary=0;
this.panNumber="";
this.aadharCardNumber="";
}
var selectedRow=null;
//var employees=[];
function selectEmployee(row,employeeId,employees)
{
if(row==selectedRow) return;
if(selectedRow!=null)
{
selectedRow.style.background="white";
selectedRow.style.color="black";
}
row.style.background="#7C7B7B";
row.style.color="white";
selectedRow=row;
var i=0;
for(i=0;i<employees.length;i++)
{
if(employees[i].employeeId==employeeId)
{
break;
}
}
var emp=employees[i];
console.log(emp,employees,i,employeeId);
document.getElementById("detailPanel_employeeId").innerHTML=emp.employeeId;
document.getElementById("detailPanel_name").innerHTML=emp.name;
document.getElementById("detailPanel_designation").innerHTML=emp.designation;
document.getElementById("detailPanel_dateOfBirth").innerHTML=emp.dateOfBirth;
document.getElementById("detailPanel_gender").innerHTML=emp.gender;
document.getElementById("detailPanel_isIndian").innerHTML=emp.isIndian;
if(emp.isIndian)
{
document.getElementById("detailPanel_gender").innerHTML="Yes";
}
else
{
document.getElementById("detailPanel_gender").innerHTML="No";
}
document.getElementById("detailPanel_basicSalary").innerHTML=emp.basicSalary;
document.getElementById("detailPanel_panNumber").innerHTML=emp.panNumber;
document.getElementById("detailPanel_aadharCardNumber").innerHTML=emp.aadharCardNumber;
}