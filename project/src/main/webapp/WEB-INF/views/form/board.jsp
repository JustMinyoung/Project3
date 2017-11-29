<%@page import="org.eclipse.jdt.internal.compiler.ast.ReturnStatement"%>
<%@page import="org.springframework.web.bind.annotation.RequestMapping"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script type="text/javascript">
<!--
function search(home){
	document.getElementById('frm').action=home+"selectBoard";
	document.getElementById('frm').submit();
}

function detailView(no){
	document.getElementById('writeNo').value=no;
	document.getElementById('frm').submit();
}
function writeFrm(home) {
	document.getElementById('frm').action = home + "board_write";
	document.getElementById('frm').submit();
	}
//-->
</script>
<form id='frm' action="${home }detailRead" method="post">
	<input type="hidden" name="writeNo" id="writeNo">
	<table class="mainTable">
		<thead>
			<tr class="textSize">
				<th class="title_td">제 목</th>
				<th>작성자</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>
		</thead>
		<c:forEach var="freeboard" items="${boardLst }">
			<tr>
				<td colspan="4"><hr></td>
			</tr>
			<tr class="board_title">
				<td>
					<div class="title" onclick="detailView('${freeboard.no}')">${freeboard.title }</div>
				</td>
				<td>${freeboard.nickname }</td>
				<td>${freeboard.write_date }</td>
				<td>${freeboard.hit }</td>
			</tr>
			<tr>
				<td colspan="4"><hr></td>
			</tr>
		</c:forEach>
	</table>
	<c:if test='${pathpath eq "board/selectBoard"}'>
		<div class="boardOption">
			<input class="wbutton" type="button" onclick="writeFrm('${home }')"
				value='글쓰기' />
		</div>
		<tr>
			<td><select name="selectOpt">
					<option value="all">전체</option>
					<option value="title">제목</option>
					<option value="id">작성자</option>
			</select> <input type=text name='searchWord' /> <input class="searchBtn"
				type="button" onclick="search('${home}')" name='searchBtn'
				value='검색' /></td>
		</tr>
	</c:if>
	<div class="brdnavi">${navi }</div>
</form>