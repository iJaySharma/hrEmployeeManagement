function employeeAddForm()
{
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=this.responseText;
var condition=responseData.substring(0,2);
if(condition=="ok") responseData=responseData.substring(4);
var select=document.getElementById('designationCode');
if(condition=="ok")
{
console.log(responseData);	
var splits=responseData.split('!$');
for(var i=0;i<splits.length;i+=2)
{
var option=document.createElement('option');
option.value=splits[i];
option.text=splits[i+1];
select.appendChild(option);
}
}
var span=document.createElement('span');
span.id='designationCodeErrorSection';
span.classList.add('error');
}
else
{
alert('oops! some problem occured');
}
}
};
xmlHttpRequest.open('GET','employeeAddForm',true);
xmlHttpRequest.send();
}
window.addEventListener('load',employeeAddForm);