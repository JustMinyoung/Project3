<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="boardMainfont">최신소식</div>
<c:import url="/board/main_gellery_board" />
<!-- 	세션정보가 있으면 글쓰기 버튼활성화.
	자유게시판으로 링크를 타고들어가면 글쓰기버튼 활성화.  메인화면에는 글쓰기버튼 비활서화 -->
	
<script type="text/javascript">
<!--
function writeFrm(home) {
	document.getElementById('frm').action = home + "news_write";
	document.getElementById('frm').submit();
	}
//-->
</script>
<form id='frm' action="${home }detailNews" method="post">
	<input type="hidden" name="writeNo" id="writeNo">
	<c:if test='${membersession.nickname ne null }'>
		<div class="boardOption">
			<input class="wbutton" type="button" onclick="writeFrm('${home }')"
				value='글쓰기' />
		</div>
		<tr>
			<td>
			<select name="selectOpt">
					<option value="all">전체</option>
					<option value="title">제목</option>
					<option value="id">작성자</option>
			</select> 
			<input type=text name='searchWord' /> 
			<input class="searchBtn" type="button" onclick="search('${home}')" name='searchBtn'	value='검색' />
			</td>
		</tr>
		</c:if>
	<div class="brdnavi">${navi }</div>
</form>