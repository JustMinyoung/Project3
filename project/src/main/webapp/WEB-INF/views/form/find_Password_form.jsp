<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<c:url var='home' value="/" />
<c:url var='img' value="resources/img/" />
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script	src="${pageContext.request.contextPath }/resources/js/bootstrap.js"></script>
<link href="${pageContext.request.contextPath }/resources/css/UFCMaina_Main.css" rel="stylesheet">
<link href="${pageContext.request.contextPath }/resources/css/findPw.css" rel="stylesheet">
<body class="at_log">
    <div class="container-fluid wrap">
      <div class="content_inner pw_find oh_sz">
        <section class="fb_row pwfind_contents">
          <div class="at_logo">
            <a href="${home }home">
              <img src="${img }UFC-Logo.png" class="fb_logo" id="ah_logo">
            </a>
            <div class="mj_header">비밀번호 찾기</div>
          </div>
          <div class="at pwfind_area">
              <div class="pwfind_main">
                <div class="pwfind_info">
                  <p>
         UFC MANIA는 회원님들의 개인정보 보호를 위해 비밀번호를 암호화하여 관리하고 있습니다.
                    따라서 회원님께서 비밀번호를 분실하신 경우, 기존 사용하시던 비밀번호를 찾아드리는 것은 불가능합니다.
                    가입하신 이메일 주소를 통해 이메일 인증을 거친 후, 새로운 비밀번호를 설정해주시기 바랍니다.
                  </p>  
                </div>
<form action="http://footballclub.co.kr/auth/password_find" class="form-horizontal" id="pw_find_action" method="post" accept-charset="utf-8">
<input type="hidden" name="csrf_test_name" value="48bf9357a94bbfc67675eca69f767f80" style="display:none;">
                  <div class="form-group">
                    <div class="tt_hd">이메일</div>
                    <div class="form_input">
                      <input type="email" class="form-control" id="pw_find_inputEmail" name="user_id" value="">
                      <div class="pf_email err_ic"><i class="fa fa-times"></i></div>
                      <div class="vd_err_msg" id="pfemail_alert_mj"></div>
                    </div>
                  </div>
                  <div class="pwfind_ve hidden" id="pwfind_ve">
                    <div class="pwfind_form_ve"></div>
                  </div>
                  <div class="pwfind_btn_ar">
                    <button type="button" class="btn pw_find_mail_btn" data-loading-text="인증 이메일 발송중" autocomplete="off">인증 이메일 발송 요청</button>
                  </div>
                </form>            
              </div>
            </div>
            <div class="at_footer">
              <div class="copyright">
                - Copyright <i class="fa fa-copyright"></i> <span class="name">UFC MANIA.</span> All rights reserved -
              </div>
            </div>
        </section>
      </div>
    </div>
</body>

