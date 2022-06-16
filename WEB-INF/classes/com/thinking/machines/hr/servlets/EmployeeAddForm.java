package com.thinking.machines.hr.servlets;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import com.thinking.machines.hr.dl.*;

public class EmployeeAddForm extends HttpServlet
{
public void doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
PrintWriter pw=response.getWriter();
response.setContentType("text/plain");
DesignationDAO designationDAO=new DesignationDAO();
List<DesignationDTO> list=designationDAO.getAll();
int i=0;
pw.print("ok!$");
for(DesignationDTO designationDTO:list)
{
pw.print(designationDTO.getCode()+"!$"+designationDTO.getTitle());
i++;
if(i<list.size())
{
pw.print("!$");
}
}
}catch(Exception exception)
{
try
{
response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
}catch(Exception exc)
{
// do nothing
}
}
}

public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
                                       
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(Exception p)
{

}
}

}
