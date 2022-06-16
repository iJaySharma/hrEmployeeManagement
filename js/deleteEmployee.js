function deleteEmployee()
{
var dataToSend;
var employeeId=document.getElementById('employeeId').value.trim();
console.log(employeeId);
dataToSend="employeeId="+encodeURI(employeeId);

var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
responseData=this.responseText;
var condition=responseData.substring(0,2);
if(condition=="ok")
{
var rightPanel=document.getElementById("rightPanel");
rightPanel.innerHTML="";
var heading=document.createElement("h2");
heading.innerHTML="Employee (Delete Module)";
var message=document.createElement("b");
message.innerHTML="Employee deleted successfully";
var buttonOne=document.createElement("BUTTON");
buttonOne.type='button';
buttonOneLink=document.createElement("a");
buttonOneLink.href="/stylethree/Employees.jsp";
buttonOneLink.innerHTML='Ok';
buttonOneLink.style.color='black';
buttonOneLink.style.textDecoration='none';
var br=document.createElement("br");
rightPanel.appendChild(heading);
rightPanel.appendChild(message);
rightPanel.appendChild(br);
rightPanel.appendChild(buttonOne);
buttonOne.appendChild(buttonOneLink);
}
else
{
responseData=responseData.substring(11);
var splits=responseData.split('!$');
for(var i=0;i<splits.length;i+=2)
{
if(splits[i]=="panNumber")
{
var pan=document.getElementById('panNumberErrorSection');
pan.innerHTML=splits[i+1];
}
if(splits[i]=="aadharCardNumber")
{
var aadhar=document.getElementById('aadharCardNumberErrorSection');
aadhar.innerHTML=splits[i+1];
}
if(splits[i]=="designationCode")
{
var desig=document.getElementById('designationCodeErrorSection');
desig.innerHTML=splits[i+1];
}
}
}
}
else
{
alert('oops! some problem occured');
}
}
};
xmlHttpRequest.open('POST','confirmDeleteEmployee?employeeId='+employeeId,true);
xmlHttpRequest.setRequestHeader('content-Type','application/x-www-form-urlencoded');
xmlHttpRequest.send(dataToSend); 
}