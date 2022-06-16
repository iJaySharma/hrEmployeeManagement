<jsp:include page='/MasterPageTopSection.jsp' />
<script src='/stylethree/js/designationLeftPanelContents.js'></script>
<script src='/stylethree/js/designations.js'></script>
<h2>Designation (View Module)</h2>
<table border='1' id='designationTable' style='width: 100%; overflow: scroll;'>
<thead>
<tr>
<th colspan='4' style='text-align:right; padding:4px'>
<a href='/stylethree/DesignationAddForm.jsp'>Add new Designation</a>
</th>
</tr>
<tr>
<th style='width:60px; text-align:center'>S.NO</th>
<th style='width:200px; text-align:center'>Designation</th>
<th style='width:100px; text-align:center'>Edit</th>
<th style='width:100px; text-align:center'>Delete</th>
</tr>
</thead>
<tbody >



<tr>
<td placeHolderId='serialNumber' style='text-align:right'></td>
<td placeHolderId='title' style='text-align:left'></td>
<td placeHolderId='editDesignation' style='text-align:center'></td>
<td placeHolderId='deleteDesignation' style='text-align:center'></td>
</tr>


</tbody>
</table>
<jsp:include page='/MasterPageBottomSection.jsp' />
 