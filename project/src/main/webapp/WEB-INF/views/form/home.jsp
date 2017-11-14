<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<c:url var='home' value="/" />
<c:url var='img' value="resources/img/" />
<!DOCTYPE html>
<section class="board2section">
	<article class="flbdform">
		<h1>주간인기소식</h1>
		<table class="board_table">
			<tr>
				<td style="height: 400px;"><c:import url="/board" /></td>
			</tr>
		</table>
	</article>
	<article class="flbdform">
		<h1>주간인기글</h1>
		<table class="board_table">
			<thead>
				<td>글번호</td>
				<td>제목</td>
				<td>작성자</td>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>주간인기글</td>
					<td>홍길동</td>
				</tr>
			</tbody>
		</table>
	</article>
</section>
<section class="news_zone">
	<article class="news_img">
		<img src="${img }VS.jpg" />
	</article>
	<article class="news_img">
		<img src="${img }VS.jpg" />
	</article>
	<article class="news_img">
		<img src="${img }VS.jpg" />
	</article>
	<article class="news_img">
		<img src="${img }VS.jpg" />
	</article>
</section>
