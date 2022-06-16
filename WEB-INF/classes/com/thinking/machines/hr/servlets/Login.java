package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
public class Login extends HttpServlet
{
public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
String userName=request.getParameter("userName");
String password=request.getParameter("password");
PrintWriter pw=response.getWriter();
response.setContentType("text/plain");
try
{
AdministratorDAO administratorDAO=new AdministratorDAO();
AdministratorDTO administratorDTO=administratorDAO.getByUsername(userName);
if(!(administratorDTO.getUsername().equals(userName) && administratorDTO.getPassword().equals(password)))
{
throw new DAOException("UserName/pswd dont match");
}
HttpSession session=request.getSession();
session.setAttribute("userName",userName);
pw.print("success");
}catch(DAOException daoException)
{
pw.print(daoException.getMessage());
}
}catch(Exception e)
{
//response code have to learn more by yourself
System.out.println(e.getMessage());
try
{
response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
}catch(Exception e1)
{

}
}
}
public void doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
                                       
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(Exception p)
{

}
}

}