<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<c:url var="home" value="/" />
<c:url var='res' value="/resources/" />
<link href="${res }css/main.css"	rel="stylesheet">
<link href="${res }css/board.css" rel="stylesheet">
<link href="${res }css/login.css" rel="stylesheet">
<link href="${res }css/join.css" rel="stylesheet">
<link href="${res }css/UFCMaina_Main.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script	src="${res }js/bootstrap.min.js"></script>


<body class="at_log">
    <div class="container-fluid wrap">
      <div class="content_inner auth_join oh_sz">
        <section class="ufc_row join_contents">
          <div class="at_logo">
            <a href="${home }home">
              <img src="${res }img/UFC-Logo.png" class="ufc_logo" id="ah_logo" />
            </a>
            <div class="mj_header">UFC Mania 회원가입</div>
          </div>
          <div class="at mj_area">     
		<form class="form-horizontal" id="join" action="${home }member/memberProc" method="post" accept-charset="utf-8">
		<input type="hidden" name="csrf_test_name" style="display:none;">
              <div class="mj_main">
                <div class="form-group">
                  <div class="tt_hd">이메일</div>
                  <input type="text" class="form-control" id="join_inputEmail" name="email" value="${member.email }">
                  <div class="mj_email err_ic"><i class="fa fa-times"></i></div>
                  <div class="vd_err_msg" id="email_alert_mj"></div>
                </div>                
                <div class="form-group">
                  <div class="tt_hd">비밀번호</div>
                  <input type="password" class="form-control" id="join_inputPassword" name="password" value="${member.password }">
                  <div class="mj_pw err_ic"><i class="fa fa-times"></i></div>
                  <div class="vd_err_msg" id="pw_alert_mj"></div>
                </div>
                <div class="form-group">
                  <div class="tt_hd">비밀번호 확인</div>
                  <input type="password" class="form-control" id="join_inputPassword_check" name="passwordOk">
                  <div class="pw_check err_ic"><i class="fa fa-times"></i></div>
                  <div class="vd_err_msg" id="pwchk_alert_mj"></div>
                </div>
                <div class="form-group">
                  <div class="tt_hd">닉네임</div>
                  <input type="text" class="form-control" id="join_inputCallname" name="nickname" value="${member.nickname }">
                  <div class="cn err_ic"><i class="fa fa-times"></i></div>
                  <div class="vd_err_msg" id="cn_alert_mj"></div>
                </div>
                <div class="doc-group">
                  <div class="panel panel-default tos_doc">
                    <div class="tos err_ic"></div><!-- 원래 fa fa-times가 존재했음<i class="fa fa-times"></i> -->
                    <div class="vd_err_msg" id="tos_alert_mj"></div>
                    <div class="panel-heading" role="tab" id="tos_doc">
                      <div class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#tos_doc_main" aria-expanded="true" aria-controls="tos_doc_main">약관 보기<i class="fa fa-chevron-down"></i></a>
                      </div>
                    </div>
                    <div id="tos_doc_main" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                      <div class="panel-body">
		<p>
			본 약관은 UFC MANIA 커뮤니티 이용에 관련하여, 사이트와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다. 폿볼클럽은 축구를 사랑하는 모든 축구팬들과 소통을 하기 위해 만들어졌으며, 국내 축구 커뮤니티의 저변 확대를 위해 노력하고 있습니다.
		</p>
		<p>
			</p><div class="doc_title">제 1 조. 이용 계약의 성립</div>
			임시용 입니다.
		<p></p>
		</div>
                    </div>
                  </div>
                  <div class="checkbox">
                    <div class="checkbox_ufc"></div>
                    <label>
                      <input type="checkbox" id="tos_document" name="tos_check"/>약관 동의
                    </label>
                  </div>
                  <div class="panel panel-default personal_doc">
                    <div class="personal err_ic"></div><!-- 원래 fa fa-times가 존재했음<i class="fa fa-times"></i> -->
                    <div class="vd_err_msg" id="personal_alert_mj"></div>
                    <div class="panel-heading" role="tab" id="personal_doc">
                      <div class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#personal_doc_main" aria-expanded="true" aria-controls="personal_doc_main">개인정보취급방침 보기<i class="fa fa-chevron-down"></i></a>
                      </div>
                    </div>
                    <div id="personal_doc_main" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div class="panel-body">
		<p>
			본 정책은 UFC MANIA 커뮤니티가 서비스이용자 (이하 ‘회원’)에게 본 웹사이트의 서비스를 제공함과 동시에 온라인 상에서 회원이 제공한 개인정보가 보호받을 수 있도록 하는데 그 목적이 있습니다.<br>
		</p>
		<p>
			</p><div class="doc_title">제 1 조. 개인정보 수집 및 이용목적</div>
			임시용 입니다.
		<p></p>
		</div>
                    </div>
                  </div>
                  <div class="checkbox">
                    <div class="checkbox_ufc"></div>
                    <label>
                      <input type="checkbox" id="personal_document" name="personal_check"/>개인정보취급방침 확인
                    </label>
                  </div>
                </div>
                <div class="mj_ve hidden" id="mj_ve">
                  <div class="mj_form_ve"></div>
                </div>
                <div class="mj_btn_ar">
                  <button type="reset" class="btn mj_cancel_btn">작성취소</button>
                  <button type="submit" class="btn mj_confirm_btn" data-loading-text="인증 이메일 발송중" autocomplete="off">작성완료</button>
                </div>
              </div>
            </form>
          </div>
          <div class="at_footer">
            <div class="copyright">
              - Copyright  <span class="name">UFC MANIA.</span> All rights reserved -
            </div>
          </div>
        </section>
      </div>
    </div>

</body>