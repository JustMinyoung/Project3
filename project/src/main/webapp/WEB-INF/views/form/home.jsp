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
		<div class="mgm_sch_header">주간 최신소식</div>
		<c:import url="/board/main_gellery_board" />
	</article>
	<article class="flbdform">
		<div class="mgm_sch_header">주간 최신영상</div>
		<c:import url="/board/main_gellery_board" />
	</article>
</section> 

<div class="mgm_sch_header">주요 경기일정</div>

<section class="news_zone">
	<article class="news_img">
		<img src="${img }VS.jpg" />
		<h3>타이론 우들리 VS 김동현</h3>
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
