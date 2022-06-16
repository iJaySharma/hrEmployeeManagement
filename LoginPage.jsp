<!Doctype html>
<html lang='en'>
<head>
<title>Login</title>
<link rel='stylesheet' type='text/css' href='/styletwo/css/styles.css'>
<script>
function login()
{

//validate userName
var userNameId=document.getElementById("userName")
var userName=userNameId.value.trim();
var userNameErrorSection=document.getElementById('userNameErrorSection');
userNameErrorSection.innerHTML='';
if(userName.length==0)
{
userNameErrorSection.innerHTML='required';
userNameId.focus();
return;
}
//validate password
var passwordId=document.getElementById("password");
var password=passwordId.value.trim();
var passwordErrorSection=document.getElementById('passwordErrorSection');
passwordErrorSection.innerHTML='';
if(password.length==0)
{
passwordErrorSection.innerHTML='required';
passwordId.focus();
return;
}
//
var dataToSend="userName="+encodeURI(userName);
dataToSend=dataToSend+"&password="+encodeURI(password);
xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
responseData=this.responseText;

if(responseData=="success")window.location.href = "/stylethree/index.jsp";
else
{
var error=document.getElementById("error");
error.innerHTML=responseData;
}
}
else
{
alert("Problem");
}
}

};
xmlHttpRequest.open('POST','login',true);
xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlHttpRequest.send(dataToSend);
}
</script>
</head>
<body>
<div class='main-container'>
<div class='header'>
<img src='/stylethree/images/logo.png' class='logo' height='60'>
<div class='brand-name'> HR Application</div>
</div>

<div style='height:400px;margin-top:20px; margin-left:80px; margin-right:120px; margin-bottom:10px;padding-left:100px;padding-top:40px;padding-right:100px'>

<div style='border:1px solid black;width:250px; height:300px;margin-left:100px;padding:20px'>

<span  class='error' id='error'>

</span>

<h2>Login</h2><br>
<label for="userName">User Name:</label>
<input type='text' id='userName' name='userName' maxlength='15' size='26'></input>
<span id='userNameErrorSection' style='color:red;'></span>
<br><br>
<label for="password">Password:</label>
<input type='password' id='password' name='password' maxlength='15' size='26'></input>
<span id='passwordErrorSection' style='color:red;'></span>
<br><br>
<button type='submit' onClick='login()' style='float:left;'>Login</button>

</div>
</div>

<div class='footer'>&copy; JS 2021
</div>
</div>
</body>
</html>