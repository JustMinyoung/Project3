<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:url var="home" value="/"/>
	<link href="<c:url value="/resources/css/main.css"/>" rel="stylesheet">
	<link href="<c:url value="/resources/css/board.css"/>" rel="stylesheet">
<!--     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> -->
<!--     <script src="js/bootstrap.min.js"></script> -->
	<header>
		<div class="service_box">
			<div class="service_box_inner">
				<ul class="service_ul">
					<li>
						<a href="#">로그인</a>
					</li>
					<li>
						<a href="#">회원가입</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="header_warp">
			<div class="main_banner">
				<p class="logo_cap">국내 유일 UFC 커뮤니티</p>
				<h1><a href="${home }home">UFC MANIA</a></h1>
			</div>

			<nav class="gnb_nav">

				<ul class="gnb_nav_ul">
					<li>
						<a href="#">최신소식</a>
					</li>
					<li>
						<a href="#">하이라이트</a>
					</li>
					<li>
						<a href="#">일정/결과</a>
					</li>
					<li>
						<a href="#">순위/기록</a>
					</li>
					<li>
						<a href="freeboard">자유게시판</a>
					</li>
				</ul>

			</nav>
		</div>
	</header>
