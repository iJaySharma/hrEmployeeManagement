<jsp:include page='/MasterPageTopSection.jsp' />
<script src='/stylethree/js/designationLeftPanelContents.js'></script>
<script src='/stylethree/js/addDesignation.js'></script>
<h2>Designation (Add Module)</h2>
<span class='error' id='error'>
</span>
<br>

Designation
<input type='text' id='title' name='title' maxlength='35' size='36'></input>
<span id='titleErrorSection' style='color:red;'></span>
<br><br>
<button type='submit' onClick='addDesignationForm()' style='float:left;' >Add</button>

<form method='post' action='/stylethree/Designations.jsp'>
<button type='submit'>Cancel</button>
</form>

<jsp:include page='/MasterPageBottomSection.jsp' />