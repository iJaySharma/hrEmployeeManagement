function populateDesignation()
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
//response data is of string type
var designations=JSON.parse(responseData);
var designationTable=document.getElementById("designationTable");
var designationTableBody=designationTable.getElementsByTagName("tbody")[0];
var designationTableBodyRowTemplate=designationTableBody.getElementsByTagName("tr")[0];
designationTableBodyRowTemplate.remove();
var designationTableBodyColumnsTemplateCollection=designationTableBodyRowTemplate.getElementsByTagName("td");
var cellTemplate;
var k=0;
var dynamicRow;
var dynamicRowCells;
var placeHolderFor;
var index=0;
for(k=0;k<designations.length;k++)
{

dynamicRow=designationTableBodyRowTemplate.cloneNode(true);
designationTableBody.appendChild(dynamicRow);
dynamicRowCells=dynamicRow.getElementsByTagName("td");
for(var i=0;i<dynamicRowCells.length;i++)
{
cellTemplate=dynamicRowCells[i];
placeHolderFor=cellTemplate.getAttribute("placeHolderId");
if(placeHolderFor==null)continue;
if(placeHolderFor=="serialNumber")cellTemplate.innerHTML=(index+1);
if(placeHolderFor=="title")cellTemplate.innerHTML=designations[k].title;
if(placeHolderFor=="editDesignation")cellTemplate.innerHTML="<a href='/stylethree/editDesignation?code="+designations[k].code+"'>Edit</a>";
if(placeHolderFor=="deleteDesignation")cellTemplate.innerHTML="<a href='/stylethree/confirmDeleteDesignation?code="+designations[k].code+"'>Delete</a>";

}
index++;
}

}else
{
alert('some problem')
}
}
};
xmlHttpRequest.open('GET','designations',true);
xmlHttpRequest.send();

}

window.addEventListener('load',populateDesignation);
