<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:url var="home" value="/" />
<c:url var='res' value="/resources/" />
<link href="${res }css/main.css" rel="stylesheet">
<link href="${res }css/board.css" rel="stylesheet">
<link href="${res }css/login.css" rel="stylesheet">
<link href="${res }css/UFCMaina_Main.css" rel="stylesheet">
<link href="${res }font-awesome/css/font-awesome.min.css" rel="stylesheet">
<script src="${res }js/jquery-confirm.min.js"></script>
<script src="${res }js/jquery.js"></script>
<script src="${res }js/20171123.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="${res }js/bootstrap.min.js"></script>
<div class="service_box">
	<div class="service_box_inner">
		<ul class="service_ul">
			<%
				if (session.getAttribute("member") != null) {
			%>
			<li>${member.email }</li>
			<li><a href="${home }member/logout">로그아웃</a></li>
			<%
				} else {
			%>
			<li><a href="" class="login_btn" data-target="#login_modal"
				data-toggle="modal">로그인</a></li>
			<li><a href="${home }join_form">회원가입</a></li>
			<%
				}
			%>
		</ul>
	</div>
</div>
<div class="header_warp">
	<div class="main_banner">
		<p class="logo_cap">국내 유일 UFC 커뮤니티</p>
		<h1>
			<a href="${home }home">UFC MANIA</a>
		</h1>
	</div>

	<nav class="gnb_nav">

		<ul class="gnb_nav_ul">
			<li><a href="${home }board/news_board">최신소식</a></li>
			<li><a href="${home }board/hi_board">하이라이트</a></li>
			<li><a href="${home }board/schedule_form">일정/결과</a></li>
			<li><a href="${home }board/rank_form">순위/기록</a></li>
			<li><a href="${home }board/selectBoard">자유게시판</a></li>
		</ul>
	</nav>
</div>
