# HR Employee Management
<b>Application Overview </b> 
<ul> 
 <li>This product is basically manages onboarding of the employees and tag them with thier respective roles/designations.</li> 
<li> It allows management of designations across the firm for Human Resource peoples one can authenticate oneself product have login and logout facilities for secured connection  </li>  
<li> Apart from this one can manage employees by changing and manipulating the information contained in his/her webapplicaion (this are the CRUD operationns HR make Create|Read|Update|Delete)  </li>
</ul>
<b> Application startup process </b><br></br>
<ul>
<li>For creating build use the follwing command to compile this code : <br>
 C:\tomcat9\webapps\stylethree\WEB-INF\classes\com\thinking\machines\hr\dl>javac -classpath c:\tomcat9\lib\*;c:\tomcat9\webapps\stylethree\WEB-INF\lib\*;c:\tomcat9\webapps\stylethree\WEB-INF\classes;. *.java
<li> Clone this project in your work space. </li>
<li> Navigate to bin folder and execute the startup.bat. </li>
<li> This will launch your application in tomcat9 on port 8080. </li>
<li> Once tomcat server is up and running , hit localhost 8080 from your browser. </li>
</ul>
<b>Application DB Setup</b><br></br>
<ul>
 <li> <b>NOTE : </b> You need to setup database work space of choice and create employees/designations tables. Update db properties accordingly </li>
<li> below are the sql query for the same :</li>
 <li>
 CREATE TABLE `administrator` (
  `username` char(15) NOT NULL,
  `password` char(15) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 </li>
 <li>
 CREATE TABLE `designation` (
  `code` int NOT NULL AUTO_INCREMENT,
  `title` char(35) NOT NULL,
  PRIMARY KEY (`code`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 </li>
 <li>
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `designation_code` int DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `is_indian` tinyint(1) DEFAULT NULL,
  `basic_salary` decimal(10,2) DEFAULT NULL,
  `pan_number` char(15) NOT NULL,
  `aadhar_card_number` char(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pan_number` (`pan_number`),
  UNIQUE KEY `aadhar_card_number` (`aadhar_card_number`),
  KEY `designation_code` (`designation_code`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`designation_code`) REFERENCES `designation` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=100019 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 </li>
 </ul>
 <b>
 
 <b>


