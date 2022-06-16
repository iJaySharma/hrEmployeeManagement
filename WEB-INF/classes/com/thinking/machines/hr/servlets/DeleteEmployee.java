package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.math.*;
import java.util.*;
import java.text.*;
import java.io.*;
public class DeleteEmployee extends HttpServlet
{
public void doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
String employeeId=request.getParameter("employeeId");
try
{
EmployeeDAO employeeDAO=new EmployeeDAO();
EmployeeDTO employeeDTO=employeeDAO.getByEmployeeId(employeeId);
String name=employeeDTO.getName();
String designation=employeeDTO.getDesignation();
//SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
Date dateOfBirth=employeeDTO.getDateOfBirth();
String gender=employeeDTO.getGender();
boolean isIndian=employeeDTO.getisIndian();
BigDecimal basicSalary=employeeDTO.getBasicSalary();
String panNumber=employeeDTO.getPANNumber();
String aadharCardNumber=employeeDTO.getAadharCardNumber();

request.setAttribute("id",employeeId);
request.setAttribute("name",name);
request.setAttribute("designation",designation);
request.setAttribute("dateOfBirth",dateOfBirth);
request.setAttribute("gender",gender);
request.setAttribute("isIndian",isIndian);
request.setAttribute("basicSalary",basicSalary);
request.setAttribute("panNumber",panNumber);
request.setAttribute("aadharCardNumber",aadharCardNumber);
System.out.println("EmployeeId"+employeeId);

RequestDispatcher requestDispatcher=request.getRequestDispatcher("/ConfirmDeleteEmployee.jsp");
requestDispatcher.forward(request,response);
}catch(DAOException daoException)
{

}
}catch(Exception exception)
{
//do nothing
}
}
}