package com.thinking.machines.hr.servlets;
import com.thinking.machines.hr.dl.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import com.google.gson.*;
public class UpdateDesignation extends HttpServlet
{
public void doPost(HttpServletRequest request,HttpServletResponse response)
{
try
{
//String title=request.getParameter("title");
//int code=Integer.parseInt(request.getParameter("code"));
PrintWriter pw=response.getWriter();
response.setContentType("application/json");

BufferedReader br=request.getReader();
StringBuffer stringBuffer=new StringBuffer();
String tmp;
while(true)
{
tmp=br.readLine();



if(tmp==null)break;
stringBuffer.append(tmp);
}


String rawData=stringBuffer.toString();

try
{


DesignationDAO designationDAO=new DesignationDAO();
Gson gson=new Gson();


DesignationDTO designationDTO=gson.fromJson(rawData,DesignationDTO.class);


designationDAO.update(designationDTO);

//send notification page designation added want to add more
pw.print("success");
pw.flush();
}catch(DAOException daoException)
{
//send error page
pw.print(daoException.getMessage());
pw.flush();

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