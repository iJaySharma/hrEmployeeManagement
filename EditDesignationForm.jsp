<jsp:include page='/MasterPageTopSection.jsp'/>
<script src='/stylethree/js/designationLeftPanelContents.js'></script>
<script src='/stylethree/js/editDesignation.js'></script>

<h2>Designation (Edit Module)</h2>
<span class='error' id='error'>
</span>
<br>
Designation
<input type='text' id='title' name='title' maxlength='35' size='36' value='${title}'></input>
<input type='hidden' id='code' name='code'  value='${code}'></input>

<span id='titleErrorSection' style='color:red;'></span>
<br><br>
<button type='submit' onClick='updateDesignation()' style='float:left;' >Update</button>

<form method='post' action='/stylethree/Designations.jsp'>
<button type='submit'>Cancel</button>
</form>


<jsp:include page='/MasterPageBottomSection.jsp'/>