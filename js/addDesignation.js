

function addDesignationForm()
{

var title=document.getElementById('title').value;
if(title.trim().length==0)
{
var titleErrorSection=document.getElementById("titleErrorSection");
titleErrorSection.innerHTML='required';
return;
}
//var dataToSend="title="+encodeURI(title);

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
heading.innerHTML="Designation (Add Module)";
var message=document.createElement("b");
message.innerHTML="Added SuccessFully Want To Add More?";
var buttonOne=document.createElement("BUTTON");
buttonOne.type='button';
buttonOneLink=document.createElement("a");
buttonOneLink.href="/stylethree/DesignationAddForm.jsp";
buttonOneLink.innerHTML='Yes';
buttonOneLink.style.color='black';
buttonOneLink.style.textDecoration='none';
var buttonTwo=document.createElement("BUTTON");
buttonTwo.type='button';
buttonTwoLink=document.createElement("a");
buttonTwoLink.href="/stylethree/Designations.jsp";
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
var errorSpan=document.getElementById("error");
errorSpan.innerHTML=responseData;
}
}
else
{
alert('some problem')
}
}
};
xmlHttpRequest.open('POST','addDesignation',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
var designation={
"title":title
};
xmlHttpRequest.send(JSON.stringify(designation));

}