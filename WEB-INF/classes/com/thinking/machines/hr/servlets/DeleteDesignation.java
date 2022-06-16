package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import com.google.gson.*;
public class DeleteDesignation extends HttpServlet
{
public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
//int code=Integer.parseInt(request.getParameter("code"));
BufferedReader bufferedReader=request.getReader();
StringBuffer stringBuffer=new StringBuffer();
String tmp;
while(true)
{
tmp=bufferedReader.readLine();
if(tmp==null)break;
stringBuffer.append(tmp);
}
String rawData=stringBuffer.toString();

PrintWriter pw=response.getWriter();
response.setContentType("text/plain");
try
{
DesignationDAO designationDAO=new DesignationDAO();
Gson gson=new Gson();
DesignationDTO designationDTO=gson.fromJson(rawData,DesignationDTO.class);

designationDAO.deleteByCode(designationDTO.getCode());
//send notification page designation added want to add more
pw.print("success");

}catch(DAOException daoException)
{
//send error page
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