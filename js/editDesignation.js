function updateDesignation()
{
var title=document.getElementById('title').value;
if(title.trim().length==0)
{
var titleErrorSection=document.getElementById("titleErrorSection");
titleErrorSection.innerHTML='required';
return;
}
var code=document.getElementById('code').value;


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
heading.innerHTML="Designation (Update Module)";
var message=document.createElement("b");
message.innerHTML="Updated SuccessFully";
var buttonOne=document.createElement("BUTTON");
buttonOne.type='button';
buttonOneLink=document.createElement("a");
buttonOneLink.href="/stylethree/Designations.jsp";
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
xmlHttpRequest.open('POST','updateDesignation',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
var xyz={
"code": code,
"title": title
};
xmlHttpRequest.send(JSON.stringify(xyz));
                  
}

