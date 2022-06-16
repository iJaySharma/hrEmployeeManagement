package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import java.math.*;
import java.text.*;
import com.google.gson.*;
public class AddEmployee extends HttpServlet
{
public void doPost(HttpServletRequest request,HttpServletResponse response)
{


PrintWriter pw=null;
try
{
pw=response.getWriter();
response.setContentType("text/plain");
String name=request.getParameter("name");
int designationCode=Integer.parseInt(request.getParameter("designationCode"));
SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
Date d=simpleDateFormat.parse(request.getParameter("dateOfBirth"));
String gender=request.getParameter("gender");
String m=request.getParameter("isIndian");
boolean isIndian;
if(m!=null) isIndian=true;
else isIndian=false;
BigDecimal basicSalary=new BigDecimal(request.getParameter("basicSalary"));
String panNumber=request.getParameter("panNumber");
String aadharCardNumber=request.getParameter("aadharCardNumber");

EmployeeDTO employeeDTO=new EmployeeDTO();
employeeDTO.setName(name);
employeeDTO.setDesignationCode(designationCode);
employeeDTO.setDateOfBirth(new Date(d.getYear(),d.getMonth(),d.getDate()));
employeeDTO.setGender(gender);
employeeDTO.setIsIndian(isIndian);
employeeDTO.setBasicSalary(basicSalary);
employeeDTO.setPANNumber(panNumber);
employeeDTO.setAadharCardNumber(aadharCardNumber);
EmployeeDAO employeeDAO=new EmployeeDAO();
boolean panNumberExists=false;
boolean aadharCardNumberExists=false;
boolean designationCodeExists=false;
panNumberExists=employeeDAO.panNumberExists(employeeDTO.getPANNumber());
aadharCardNumberExists=employeeDAO.aadharCardNumberExists(employeeDTO.getAadharCardNumber());
designationCodeExists=employeeDAO.designationCodeExists(employeeDTO.getDesignationCode());
if(panNumberExists || aadharCardNumberExists || designationCodeExists==false)
{
int counter=0;
pw.print("Exception!");
if(panNumberExists) 
{
pw.print("panNumber! PAN Number Already Exists");
counter++;
}

if(aadharCardNumberExists)
{
if(counter!=0)
pw.print("aadharCardNumber! Aadhar Card Number Aleady Exists");
counter++;
}
if(designationCodeExists==false)
{
if(counter!=0)
pw.print("designationCode! Invalid Designation Code");
}
return;
}
employeeDAO.add(employeeDTO);
pw.print("success");
}catch(Exception e)
{
	e.printStackTrace();
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