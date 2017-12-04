<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<c:url var="home" value="/" />
<c:url var='res' value="/resources/" />
<!DOCTYPE html>
<section class="board2section">
	<article class="flbdform">
		<div class="mgm_sch_header">
		<div>주간 최신소식</div>
		<div class="more_button"><a href="${home }board/news_board">더보기</a></div>
		</div>
		<c:import url="/board/main_gellery_board" />
	</article>
	<article class="flbdform">
		<div class="mgm_sch_header">
		<div>주간 최신영상</div>
		<div class="more_button"><a href="${home }board/selectHiBoard">더보기</a></div>
		</div>
		<c:import url="/board/main_gellery_board" />
	</article>
</section> 
<div class="boxshadow">
<div class="mgm_sch_header2">
<div>주요 경기일정</div>
<div class="more_button"><a href="${home }board/schedule_form">더보기</a></div>
</div>
<div class="news_zone">
	<section class="news_zone1">
		<article class="news_img">
			<img src="${res }img/VS.jpg" />
			<h3>타이론 우들리 VS 김동현</h3>
		</article>
		<article class="news_img">
			<img src="${res }img/VS.jpg" />
			<h3>타이론 우들리 VS 김동현</h3>
		</article>
		<article class="news_img">
			<img src="${res }img/VS.jpg" />
			<h3>타이론 우들리 VS 김동현</h3>
		</article>
		<article class="news_img">
			<img src="${res }img/VS.jpg" />
			<h3>타이론 우들리 VS 김동현</h3>
		</article>
	</section>
</div>
</div>