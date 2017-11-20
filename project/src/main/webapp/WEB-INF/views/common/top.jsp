<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:url var="home" value="/" />
<c:url var='img' value="resources/img/" />
<link href="${pageContext.request.contextPath }/resources/css/main.css"	rel="stylesheet">
<link href="${pageContext.request.contextPath }/resources/css/board.css" rel="stylesheet">
<link href="${pageContext.request.contextPath }/resources/css/login.css" rel="stylesheet">
<link href="${pageContext.request.contextPath }/resources/css/UFCMaina_Main.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script	src="${pageContext.request.contextPath }/resources/js/bootstrap.min.js"></script>

<header>
	<div class="service_box">
		<div class="service_box_inner">
			<ul class="service_ul">
				<li><a href="" class="login_btn" data-target="#login_modal"
					data-toggle="modal">로그인</a></li>
				<li><a href="${home }join_form">회원가입</a></li>
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
				<li><a href="${home }freeboard">자유게시판</a></li>
			</ul>

		</nav>
	</div>
</header>
<div class="modal fade" id="login_modal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<img src="${img }ufc_logo.png" class="fb_logo" id="ufc_logo">
			</div>
			<div class="modal-body">
				<div class="form-group md_email">
					<div class="fb_label email">
						<i class="fa fa-envelope"></i>
					</div>
					<input class="form-control" id="inputEmail" name="user_id" value=""
						placeholder="이메일 주소" type="email">
					<div class="email modal_err">
						<i class="fa fa-times"></i>
					</div>
					<div class="vd_err_msg" id="email_alert"></div>
				</div>
				<div class="form-group md_pw">
					<div class="fb_label pw">
						<i class="fa fa-lock"></i>
					</div>
					<input class="form-control" id="inputPassword" name="user_password"
						placeholder="비밀번호" type="password">
					<div class="pw modal_err">
						<i class="fa fa-times"></i>
					</div>
					<div class="vd_err_msg" id="password_alert">비밀번호를 입력해주세요.</div>
				</div>
				<div class="modal_log_control">
					<div class="checkbox">
						<div class="checkbox_fb_modal"></div>
						<label> <input type="checkbox" name="remember_me"
							id="modal_logcon">로그인 유지
						</label>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<div class="ot_main">
					<button type="button" class="btn btn-primary login_confirm_btn">로그인</button>
				</div>
				<div class="ot_log">
					<a href="${home }join_form">	
						<button type="button" class="btn btn-default member_join_btn">회원가입</button>
					</a>
					<a href="${home }find_Password_form">
						<button type="button" class="btn btn-default pw_find_btn">비밀번호 찾기</button>
					</a>
				</div>
				<div class="sc_log">
					<div class="sc_devider">
						<span>또는</span>
					</div>
					<div class="sc_btn_ar">
						<button type="button" class="btn naver_login_btn">
							<div class="naver_icon">
								<img src="${img }naver_icon.png" class="n_ico"><span>|</span>
							</div>
							네이버 아이디로 로그인
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
