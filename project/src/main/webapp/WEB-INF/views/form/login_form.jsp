<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:url var="home" value="/" />
<c:url var='res' value="/resources/" />
<!DOCTYPE html>
<form action="${home }member/loginProc" method="post">
<div class="modal-body">
	<div class="form-group md_email">
		<div class="ufc_label email">
			<i class="fa fa-envelope"></i>
		</div>
		<input class="form-control" id="inputEmail" name="email" 
			placeholder="이메일 주소" type="email">
		<div class="email modal_err">
			<i class="fa fa-times"></i>
		</div>
		<div class="vd_err_msg" id="email_alert"></div>
	</div>
	<div class="form-group md_pw">
		<div class="ufc_label pw">
			<i class="fa fa-lock"></i>
		</div>
		<input class="form-control" id="inputPassword" name="password"
			placeholder="비밀번호" type="password" >
		<div class="pw modal_err">
			<i class="fa fa-times"></i>
		</div>
		<div class="vd_err_msg" id="password_alert">비밀번호를 입력해주세요.</div>
	</div>
	<div class="modal_log_control">
		<div class="checkbox">
			<div class="checkbox_ufc_modal"></div>
			<label> <input type="checkbox" name="remember_me"
				id="modal_logcon">로그인 유지
			</label>
		</div>
	</div>
</div>
<div class="modal-footer">
	<div class="ot_main">
		<button type="submit" class="btn btn-primary login_confirm_btn">로그인</button>
	</div>
	<div class="ot_log">
		<a href="${home }join_form">
			<button type="button" class="btn btn-default member_join_btn">회원가입</button>
		</a> <a href="${home }find_Password_form">
			<button type="button" class="btn btn-default pw_find_btn">비밀번호
				찾기</button>
		</a>
	</div>
	<div class="sc_log">
		<div class="sc_devider">
			<span>또는</span>
		</div>
		<div class="sc_btn_ar">
			<button type="button" class="btn naver_login_btn">
				<div class="naver_icon">
					<img src="${res }img/naver_icon.png" class="n_ico"><span>|</span>
				</div>
				네이버 아이디로 로그인
			</button>
		</div>
	</div>
</div>
</form>

