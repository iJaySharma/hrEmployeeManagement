package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;

import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.google.gson.*;
import java.io.*;
public class Employees extends HttpServlet
{
public void doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
PrintWriter pw=response.getWriter();
response.setContentType("application/json");

EmployeeDAO employeeDAO=new EmployeeDAO();
List<EmployeeDTO> employees=employeeDAO.getAll();
Gson gson=new Gson();
String employeeString=gson.toJson(employees);
pw.print(employeeString);
pw.flush();
}catch(Exception e)
{
try
{
response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
}catch(Exception e1)
{

}
}
}
public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(Exception e)
{

}
}

}