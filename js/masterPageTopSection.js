function leftPanelSetUp(pageName)
{
var leftPanel=document.getElementById("leftPanel");
if(pageName=="HOME")
{
var home=document.getElementById("homeText");
home.innerHTML="Home";
var designation=document.getElementById("designationText");
var designationText=document.createElement("a");
designationText.href="/stylethree/Designations.jsp";
designationText.innerHTML="Designation";
designation.appendChild(designationText);
var employee=document.getElementById("employeeText");
var employeeText=document.createElement("a");
employeeText.href="/stylethree/Employees.jsp";
employeeText.innerHTML="Employee";
employee.appendChild(employeeText);
}
else if(pageName=="DESIGNATION")
{
var home=document.getElementById("homeText");
var homeText=document.createElement("a");
homeText.href="/stylethree/index.jsp";
homeText.innerHTML="Home";
home.appendChild(homeText);
var designation=document.getElementById("designationText");
designation.innerHTML="Designation";
var employee=document.getElementById("employeeText");
var employeeText=document.createElement("a");
employeeText.href="/stylethree/Employees.jsp";
employeeText.innerHTML="Employee";
employee.appendChild(employeeText);
}
else if(pageName=="EMPLOYEE")
{
var home=document.getElementById("homeText");
var homeText=document.createElement("a");
homeText.href="/stylethree/index.jsp";
homeText.innerHTML="Home";
home.appendChild(homeText);
var designation=document.getElementById("designationText");
var designationText=document.createElement("a");
designationText.href="/stylethree/Designations.jsp";
designationText.innerHTML="Designation";
designation.appendChild(designationText);
var employee=document.getElementById("employeeText");
employee.innerHTML="Employee";
}
}

