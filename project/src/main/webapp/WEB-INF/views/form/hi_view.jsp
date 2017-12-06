<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<script type="text/javascript">
<!--
function deleteFrm(home){
	var no = document.getElementById('no').value;
	document.getElementById('frm').action = home;
	document.getElementById('frm').submit();
}
//-->
</script>
<form id='frm' action="${home }selectBoard" method="get">
<input type="hidden" name="no" id="no" value="${hiInfo.no }"/>
<div class="board_box">
	<div>
		<div class="bvb_title">
			<p>${hiInfo.title }</p>
		</div>
		<div class="bvb_info">
			<p>${hiInfo.nickname }</p>
			<p>${hiInfo.write_date } / ${hiInfo.like } / ${hiInfo.hit }</p>
		</div>
	</div>
	<div class="bvb_contents">
		${hiInfo.contents }
	</div>
		<div class="boardOption">
			<input class="wbutton" type="button" onclick="deleteFrm('deleteBoard')" value='삭제' />
		</div>
</div>
</form>