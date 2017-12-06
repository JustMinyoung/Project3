<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<script type="text/javascript">
<!--
function detailHiView(no){
	document.getElementById('writeNo').value=no;
	document.getElementById('frm').submit();
}
//-->
</script>
<form id='frm' action="${home }board/detailHiView" method="post">
	<input type="hidden" name="writeNo" id="writeNo">
<c:url var='res' value="/resources/" />
<table class="gallery">
	<tbody>
	<c:forEach var="highlight" items="${hiLst }">
		<tr class="board_border_table">
			<td><%-- <img src="${pageContext.request.contextPath}/image/${imageFile.id}"> --%></td>
			<td>
			<div class="title" onclick="detailHiView('${highlight.no}')">${highlight.title }</div>
				<p class="gallery_brd_desc"></p>
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
</form>
