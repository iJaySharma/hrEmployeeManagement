package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class ConfirmDeleteDesignation extends HttpServlet
{
public void doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
int code=Integer.parseInt(request.getParameter("code"));
try
{

DesignationDAO designationDAO=new DesignationDAO();
DesignationDTO designationDTO=designationDAO.getByCode(code);
String title=designationDTO.getTitle();
request.setAttribute("code",code);
request.setAttribute("title",title);
RequestDispatcher requestDispatcher=request.getRequestDispatcher("/ConfirmDeleteDesignationForm.jsp");

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