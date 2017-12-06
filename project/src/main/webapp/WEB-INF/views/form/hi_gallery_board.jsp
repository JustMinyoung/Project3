<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="boardMainfont">하이라이트</div>
<!-- 	세션정보가 있으면 글쓰기 버튼활성화.
	자유게시판으로 링크를 타고들어가면 글쓰기버튼 활성화.  메인화면에는 글쓰기버튼 비활서화 -->
	
<script type="text/javascript">
<!--
function writeFrm(home) {
	document.getElementById('frm').action = home + "hi_write";
	document.getElementById('frm').submit();
	}
	
function detailHiView(no){
	document.getElementById('writeNo').value=no;
	document.getElementById('frm').submit();
}
//-->
</script>
<form id='frm' action="${home }detailHiView" method="post">
	<input type="hidden" name="writeNo" id="writeNo">
	<table class="gallery">
	<tbody>
	<c:forEach var="highlight" items="${hiLst }">
		<tr class="board_border_table">
			<td><%-- <img src="${pageContext.request.contextPath}/image/${imageFile.id}"> --%></td>
			<td>
			<div class="title" onclick="detailHiView('${highlight.no}')">${highlight.title }</div>
				<p class="gallery_brd_desc">${highlight.contents }</p>
				<div class="date_and_like">
					<div class="gallery_brd_date" oldtitle="올린시간">
						<i class="fa fa-clock-o" style="margin-bottom: 3px;"></i>
						${highlight.write_date }
					</div>
					<div class="gallery_brd_hit" oldtitle="조회 수">
						<i class="fa fa-eye"></i>
						9999
					</div>
					<div class="gallery_brd_like" oldtitle="추천 수">
						<i class="fa fa-thumbs-o-up" style="margin-bottom: 1px;"></i>
						1
					</div>
				</div>
			</td>
		</tr>
		</c:forEach>
	</tbody>
</table>
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