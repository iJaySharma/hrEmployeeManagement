
<!Doctype html>
<html lang='en'>
<head>
<title>HR Application</title>
<link rel='stylesheet' type='text/css' href='/stylethree/css/styles.css'>
<script src='/stylethree/js/masterPageTopSection.js'></script>
<script>
function setUserName()
{
//check if userName in session exist or not 
//if not then redirect to login page
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
//this xmlHttpRequest jisko point kr rha hai
if(this.readyState==4)
{
if(this.status==200)
{
responseData=this.responseText;
//if responseData is true that means userName in session exist

if(responseData=='false')
{
//redirect to Login page
window.location.href = "/stylethree/LoginPage.jsp";
}
}else
{
alert('some problem')
}
}
};
xmlHttpRequest.open('GET','sessionExist',true);
xmlHttpRequest.send();
}
window.addEventListener('load',setUserName);

</script>
</head>
<body>
<!-- Main starts here-->
<div class='main-container'>

<!-- header starts here-->
<div class='header'>
<img src='/stylethree/images/logo.png' class='logo' height='60'>
<div class='brand-name'> HR Application</div>
<div class='username'>
<img src='/stylethree/images/user.png' class='logo' height='40'>
<a href='/stylethree/Logout.jsp'>Log Out</a>

</div>
</div>
<!-- header ends here-->

<!-- content starts here-->
<div class='content-section'>

<!-- left panel starts here-->
<div id='leftPanel' class='content-left-panel'>
<h4 id='homeText'></h3>
<h4 id='designationText'></h3>
<h4 id='employeeText'></h3>

</div>
<!-- left panel ends here-->

<!-- right panel starts here-->
<div class='content-right-panel' id='rightPanel'>
