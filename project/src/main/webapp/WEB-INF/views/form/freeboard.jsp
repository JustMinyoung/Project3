<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<script type="text/javascript"> 
<!--
function writeFrm(home){
	document.getElementById('frm').action=home+"board/board_write";
	document.getElementById('frm').submit();
}
//-->
</script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:import url="/board" />
<div class="boardOption">
<input class="wbutton" type="button" onclick="writeFrm('${home }')" value='글쓰기' />
</div>
<table>
	<tr>
		<td><select name="selectOpt">
				<option value="all">전체</option>
				<option value="title">제목</option>
				<option value="id">작성자</option>
		</select> <input type=text name='searchWord' /> <input class="searchBtn"
			type="submit" name='searchBtn' value='검색' /></td>
	</tr>
</table>
