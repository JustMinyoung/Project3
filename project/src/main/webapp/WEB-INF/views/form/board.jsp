<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<table class="mainTable">
	<thead>
		<tr class="textSize">
			<th class="title_td">제 목</th>
			<th>작성자</th>
			<th>작성일</th>
			<th>조회수</th>
		</tr>
	</thead>
	<!--  <c:forEach>반복문으로 tr 글의 개수 만큼 자동 생성// -->
	<tr>
		<td colspan="5"><hr></td>
	</tr>
	<tr class="board_title">
		<td>
			<div class="title" onclick="">자유게시판 글1</div>
		</td>
		<td>김대승</td>
		<td>2017.11.02</td>
		<td>55</td>
	</tr>
	<tr>
		<td colspan="5"><hr></td>
	</tr>
	<tr class="board_title">
		<td>
			<div class="title" onclick="">자유게시판 글2</div>
		</td>
		<td>김대승</td>
		<td>2017.11.02</td>
		<td>92</td>
	</tr>
	<!--   </c:forEach> -->
	<tr>
		<td colspan=5><hr /></td>
	</tr>
	<tr class="textSize">

		<td colspan=3 align="right"><input class="Button" type="button"
			onclick="" value='글쓰기' /></td>
	</tr>
	<tr>
		<td colspan=5><hr /></td>
	</tr>
</table>