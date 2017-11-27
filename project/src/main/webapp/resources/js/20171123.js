$(function(){

	if(!Modernizr.svg)
	{
		$('img#ah_logo').attr('src', '/include/imgs/fb_logo.png');
	}

	//로그인 페이지
	$('.at_login_confirm_btn').on('click', function(){

		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#inputEmail_atlg').val() == ''){
			$('#inputEmail_atlg').focus();
			$('#inputEmail_atlg:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_atlg').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.email.err_ic').show();
			return false;
		}else if(!$('#inputEmail_atlg').val().match(email_regExp)){
			$('#inputEmail_atlg').focus();
			$('#inputEmail_atlg:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_atlg').empty().text('이메일 주소를 형식에 맞게 입력해주세요.').show();
			$('.email.err_ic').show();
			return false;
		}else if($('#inputPassword_atlg').val() == ''){
			$('#inputPassword_atlg').focus();
			$('#inputPassword_atlg:focus').css({'border':'1px solid #e74c3c'});
			$('#password_alert_atlg').empty().text('비밀번호를 입력해주세요.').show();
			$('.pw.err_ic').show();
			return false;
		}else{
			$("#login_page_action").submit();
		}	
	});

	if($('.form_ve').length>0)
	{
		if($('.form_ve').html().indexOf('이메일') > -1)
		{
			$('#inputEmail_atlg').focus();
			$('#inputEmail_atlg:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_atlg').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.email.err_ic').show();
			return false;
		}
		else if($('.form_ve').html().indexOf('비밀번호') > -1)
		{
			$('#inputPassword_atlg').focus();
			$('#inputPassword_atlg:focus').css({'border':'1px solid #e74c3c'});
			$('#password_alert_atlg').empty().text('비밀번호를 입력해주세요.').show();
			$('.pw.err_ic').show();
			return false;
		}
	}

	if($('.msg.email').length>0)
	{
		$('#inputEmail_atlg').focus();
		$('#inputEmail_atlg:focus').css({'border':'1px solid #e74c3c'});
		$('#email_alert_atlg').empty().text($('.msg.email').text()).show();
		$('.email.err_ic').show();
	}

	if($('.msg.pw').length>0)
	{
		$('#inputPassword_atlg').focus();
		$('#inputPassword_atlg:focus').css({'border':'1px solid #e74c3c'});
		$('#password_alert_atlg').empty().text($('.msg.pw').text()).show();
		$('.pw.err_ic').show();
	}

	$('#inputEmail_atlg').on('click keypress', function(){
		if($('#inputEmail_atlg').attr('style') !== undefined) $('#inputEmail_atlg').removeAttr("style");
		if($('#email_alert_atlg').css('display') == 'block') $('#email_alert_atlg').empty().hide();
		if($('.email.err_ic').css('display') == 'block') $('.email.err_ic').hide();
	});

	$('#inputPassword_atlg').on('click keypress', function(){
		if($('#inputPassword_atlg').attr('style') !== undefined) $('#inputPassword_atlg').removeAttr("style");
		if($('#password_alert_atlg').css('display') == 'block') $('#password_alert_atlg').hide();
		if($('.pw.err_ic').css('display') == 'block') $('.pw.err_ic').hide();
	});

	$("#inputEmail_atlg").add("#inputPassword_atlg").keypress(function(e) { 
		if (e.keyCode == 13){
			e.preventDefault();	
        	$('.at_login_confirm_btn').click();
    	}    
	});

	$("#at_logcon").on('click', function(){
    	var fb_checkbox = $('.checkbox_fb_atlg');
        if($(this).prop('checked'))
        {
            fb_checkbox.addClass('checked');
        }
        else
        {
            fb_checkbox.removeClass('checked');
        }
    });

	$('.at_member_join_btn').on('click', function(){
		location.href="/auth/member_join"
	})

	$('.at_pw_find_btn').on('click', function(){
		location.href="/auth/password_find";
	});

	$('.naver_login_btn').on('click', function(){
		if($(this).attr('return'))
		{
			location.href="/auth/naver_transfer?returnURL="+$(this).attr('return');
		}
		else
		{
			location.href="/auth/naver_transfer"
		}
	});

	//회원가입 페이지
    $('#tos_document').add('#personal_document').on('click', function(){
    	var checkbox_fb = $(this).parent().prev();
        if($(this).prop('checked'))
        {
            checkbox_fb.addClass('checked');
        }
        else
        {
            checkbox_fb.removeClass('checked');
        }
    });

	$('.mj_cancel_btn').on('click', function(){

		if(ie_old_check() == 'IE_OLD')
		{
			if(confirm('작성을 취소하시겠습니까?')) history.go(-1);
		}
		else
		{
			$.confirm({
				animation: 'rotateXR',
				theme: 'material',
			    title: false,
			    content: '작성을 취소하시겠습니까?',
			    confirmButton: '예',
			    cancelButton: '아니요',
			    confirmButtonClass: 'cmt_delete',
			    backgroundDismiss: true,
			    autoClose: 'cancel|5000',
			    confirm: function(){
			       history.go(-1);
			    }
			});
		}
	});

	if($('.mj_form_ve').length>0)
	{
		if($('.mj_form_ve').html().indexOf('이메일') > -1)
		{
			$('#join_inputEmail').focus();
			$('#join_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			
			var alert_text = '이메일(아이디)을 입력해주세요.';
			if($('.mj_form_ve').html().indexOf('가입된') > -1) alert_text = '이미 가입되어 있는 이메일 주소입니다.';
			if($('.mj_form_ve').html().indexOf('사용할') > -1) alert_text = '사용할 수 없는 이메일 주소입니다.(사유: 회원탈퇴 또는 강퇴)';

			$('#email_alert_mj').empty().text(alert_text).show();
			$('.mj_email.err_ic').show();
			return false;
		}
		else if($('.mj_form_ve').html().indexOf('비밀번호') > -1)
		{
			$('#join_inputPassword').focus();
			$('#join_inputPassword:focus').css({'border':'1px solid #e74c3c'});

			var alert_text = '비밀번호를 입력해주세요.';
			if($('.mj_form_ve').html().indexOf('8자') > -1)
			{
				alert_text = '최소 8자 이상이어야 합니다.';
			}
			else if($('.mj_form_ve').html().indexOf('일치') > -1)
			{
				alert_text = '입력하신 비밀번호가 서로 일치하지 않습니다.';
			}

			if($('.mj_form_ve').html().indexOf('대문자') > -1) alert_text = '1개 이상의 대문자와 숫자를 포함해야 합니다.';

			$('#pw_alert_mj').empty().text(alert_text).show();
			$('.mj_pw.err_ic').show();
			return false;
		}
		else if($('.mj_form_ve').html().indexOf('닉네임') > -1)
		{
			$('#join_inputCallname').focus();
			$('#join_inputCallname:focus').css({'border':'1px solid #e74c3c'});

			var alert_text = '닉네임을 입력해주세요!';
			if($('.mj_form_ve').html().indexOf('다른 회원') > -1)
			{
				alert_text = '다른 회원이 이미 사용하고 있는 닉네임입니다.';
			}
			else if($('.mj_form_ve').html().indexOf('최소') > -1 || $('.mj_form_ve').html().indexOf('최대') > -1)
			{
				alert_text = '최소 2자 이상/최대 10자 이하이어야 합니다.';
			}
			else if($('.mj_form_ve').html().indexOf('공백') > -1)
			{
				alert_text = '공백없이 한글, 영문, 숫자, [ ] ( ) _ 만 입력이 가능합니다.';
			}

			$('#cn_alert_mj').empty().text(alert_text).show();
			$('.cn.err_ic').show();
			return false;
		}
		else if($('.mj_form_ve').html().indexOf('이름') > -1)
		{
			$('#join_inputName').focus();
			$('#join_inputName:focus').css({'border':'1px solid #e74c3c'});

			var alert_text = '이름을 입력해주세요.';
			if($('.mj_form_ve').html().indexOf('최소') > -1 || $('.mj_form_ve').html().indexOf('최대') > -1)
			{
				alert_text = '최소 2자 이상/최대 10자 이하이어야 합니다.';
			}
			else if($('.mj_form_ve').html().indexOf('공백') > -1)
			{
				alert_text = '공백없이 한글만 입력이 가능합니다.';
			}

			$('#name_alert_mj').empty().text(alert_text).show();
			$('.name.err_ic').show();
			return false;
		}
		else if($('.mj_form_ve').html().indexOf('약관') > -1)
		{
			$('#tos_doc').css({'border':'1px solid #e74c3c'});
			$('#tos_alert_mj').empty().text('약관에 동의해주세요.').show();
			$('.tos.err_ic').show();
			return false;
		}
		else if($('.mj_form_ve').html().indexOf('정보') > -1)
		{
			$('#personal_doc').css({'border':'1px solid #e74c3c'});
			$('#personal_alert_mj').empty().text('개인정보취급방침을 확인해주세요.').show();
			$('.personal.err_ic').show();
			return false;
		}
	}

	/*회원가입 완료 페이지*/
	$('.jfin_login_btn').on('click', function(){
		location.href="/auth/login";
	});

	$('.jfin_go_main_btn').on('click', function(){
		location.href="/";
	});

	$('.jfin_auth_mail_btn').on('click', function(){
		var $btn = $(this).button('loading'),
			user_no = $(this).attr('value'),
			response = '';
		
		$.ajax({
			url: "/auth/cert_mail_request",
			type: "POST",
			data:{
				"user_no" : user_no,
				"csrf_test_name" : getCookie('csrf_cookie_name'),
				},
			dataType : "text",
			complete : function(xhr, textStatus){
				if(textStatus == 'success'){
					if(xhr.responseText == 1000){
						response = '인증 이메일 발송해 실패했습니다. 다시 시도해주세요.';
					}else if(xhr.responseText == 2000){
						response = '이메일 주소 확인에 실패했습니다. 다시 시도해주세요.';
					}else{
						response = '인증 이메일이 재발송 되었습니다. 메일함을 확인해주세요.';
					}

					if(ie_old_check() == 'IE_OLD')
					{
						alert(response);
					}
					else
					{
						$.confirm({
							animation: 'rotateXR',
							theme: 'material',
						    title: false,
						    content: response,
						    confirmButton: '확인',
						    cancelButton: false,
						    backgroundDismiss: true
						});
					}
				}
				$btn.button('reset');
			}
		});
	});

	/*비밀번호 찾기 페이지*/
	if($('.pwfind_ve').length>0)
	{
		if($('.pwfind_ve').html().indexOf('이메일') > -1)
		{
			$('#pw_find_inputEmail').focus();
			$('#pw_find_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			
			var alert_text = '이메일(아이디)을 입력해주세요.';
			if($('.pwfind_ve').html().indexOf('가입되어') > -1) alert_text = '가입되어 있지 않은 이메일 주소입니다.';
			if($('.pwfind_ve').html().indexOf('사용할') > -1) alert_text = '사용할 수 없는 이메일 주소입니다.(사유: 회원탈퇴 또는 강퇴)';

			$('#pfemail_alert_mj').empty().text(alert_text).show();
			$('.pf_email.err_ic').show();
			return false;
		}
	}

	$('.pfin_go_main_btn').on('click', function(){
		location.href="/";
	});

	/*비밀번호 변경 페이지*/
	$('.cm_pw_modify_cancel').on('click', function(){

		if(ie_old_check() == 'IE_OLD')
		{
			if(confirm('비밀번호 변경을 취소하시겠습니까?')) location.href="/";
		}
		else
		{
			$.confirm({
				animation: 'rotateXR',
				theme: 'material',
			    title: false,
			    content: '비밀번호 변경을 취소하시겠습니까?',
			    confirmButton: '예',
			    cancelButton: '아니요',
			    confirmButtonClass: 'cmt_delete',
			    backgroundDismiss: true,
			    autoClose: 'cancel|5000',
			    confirm: function(){
			       location.href="/";
			    }
			});
		}
	});

	if($('.cm_ve').length>0)
	{
		if($('.cm_ve').html().indexOf('비밀번호') > -1)
		{
			$('#c_modify_inputPassword').focus();
			$('#c_modify_inputPassword:focus').css({'border':'1px solid #e74c3c'});

			var alert_text = '비밀번호를 입력해주세요.';
			if($('.cm_ve').html().indexOf('8자') > -1)
			{
				alert_text = '최소 8자 이상이어야 합니다.';
			}
			else if($('.cm_ve').html().indexOf('일치') > -1)
			{
				alert_text = '입력하신 비밀번호가 서로 일치하지 않습니다.';
			}

			if($('.cm_ve').html().indexOf('대문자') > -1) alert_text = '1개 이상의 대문자와 숫자를 포함해야 합니다.';

			$('#cm_alert_mj').empty().text(alert_text).show();
			$('.cm_pw.err_ic').show();
			return false;
		}
	}

	$('.c_pw_auth_mail_btn').on('click', function(){
		var $btn = $(this).button('loading'),
			user_no = $(this).attr('value'),
			response = '';
		
		$.ajax({
			url: "/auth/pw_cert_mail_request",
			type: "POST",
			data:{
				"user_no" : user_no,
				"csrf_test_name" : getCookie('csrf_cookie_name'),
				},
			dataType : "text",
			complete : function(xhr, textStatus){
				if(textStatus == 'success'){
					if(xhr.responseText == 1000){
						response = '인증 이메일 발송해 실패했습니다. 다시 시도해주세요.';
					}else if(xhr.responseText == 2000){
						response = '이메일 주소 확인에 실패했습니다. 다시 시도해주세요.';
					}else{
						response = '인증 이메일이 재발송 되었습니다. 메일함을 확인해주세요.';
					}

					if(ie_old_check() == 'IE_OLD')
					{
						alert(response);
					}
					else
					{
						$.confirm({
							animation: 'rotateXR',
							theme: 'material',
						    title: false,
						    content: response,
						    confirmButton: '확인',
						    cancelButton: false,
						    backgroundDismiss: true
						});
					}
				}
				$btn.button('reset');
			}
		});
	});

	/*징계 안내 페이지*/
	$('.dp_go_main_btn').on('click', function(){
		location.href="/";
	});

	$('.dp_go_back_btn').on('click', function(){
		history.back();
	});

	/*탈퇴 완료 페이지*/
	$('.deact_go_main_btn').on('click', function(){
		location.href="/";
	});

	/*소셜 로그인 관련*/
	if($('#join_naverId').length > 0)
	{
		var txt_fail = '네이버 토큰 값 인증에 실패했습니다. 다시 한 번 네이버 아이디로 로그인 하신 후, 회원 가입 절차를 진행해주세요.';
		if(!$('#join_naverId').attr('value'))
		{
			$('.sc_info').addClass('fail').text(txt_fail);
			$('button.sj_confirm_btn').attr('disabled', 'disabled');
		}		 
	}

	$('.social_interlock_btn').on('click', function(){
		location.href="/member/modify_member_data";
	});

	function ie_old_check()
	{
		//익스플로러9 이하에서 TRUE
		if (window.ActiveXObject === undefined) return false; //익스플로러X;
	    if (!document.querySelector) return 'IE_OLD'; //IE7
	    if (!document.addEventListener) return 'IE_OLD'; //IE8
	    if (!window.atob) return 'IE_OLD'; //IE9
	    // if (!document.__proto__) return 10;
	    // return 11;
	    return 'IE';
	}

	function getCookie( name ){
		var nameOfCookie = name + "=";
		var x = 0;

		while ( x <= document.cookie.length )
		{
			var y = (x+nameOfCookie.length);

			if ( document.cookie.substring( x, y ) == nameOfCookie ) {
				if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
					endOfCookie = document.cookie.length;

				return unescape( document.cookie.substring( y, endOfCookie ) );
			}

			x = document.cookie.indexOf( " ", x ) + 1;
			if ( x == 0 )
			break;
		}
		return "";
	}
});

$(window).load(function() {

	//이유는 알수 없으나 document.ready에 들어가 있을때는 작동하지 않음. 그래서 window.load로 뺌.
	$('.mj_confirm_btn').on('click', function(){

		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#join_inputEmail').val() == ''){
			$('#join_inputEmail').focus();
			$('#join_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_mj').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.mj_email.err_ic').show();
			return false;
		}else if(!$('#join_inputEmail').val().match(email_regExp)){
			$('#join_inputEmail').focus();
			$('#join_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_mj').empty().text('이메일 주소를 형식에 맞게 입력해주세요.').show();
			$('.mj_email.err_ic').show();
			return false;
		}else if($('#join_inputPassword').val().length < 8){
			$('#join_inputPassword').focus();
			$('#join_inputPassword:focus').css({'border':'1px solid #e74c3c'});
			$('#pw_alert_mj').empty().text('최소 8자 이상이어야 합니다.').show();
			$('.mj_pw.err_ic').show();
			return false;
		}else if($('#join_inputPassword_check').val() != $('#join_inputPassword').val()){
			$('#join_inputPassword').focus();
			$('#join_inputPassword:focus').css({'border':'1px solid #e74c3c'});
			$('#pw_alert_mj').empty().text('입력하신 비밀번호가 서로 일치하지 않습니다.').show();
			$('.mj_pw.err_ic').show();
			return false;
		}else if($('#join_inputCallname').val() == ''){
			$('#join_inputCallname').focus();
			$('#join_inputCallname:focus').css({'border':'1px solid #e74c3c'});
			$('#cn_alert_mj').empty().text('닉네임을 입력해주세요').show();
			$('.cn.err_ic').show();
			return false;
		}else if($('#join_inputCallname').val().length > 11){
			$('#join_inputCallname').focus();
			$('#join_inputCallname:focus').css({'border':'1px solid #e74c3c'});
			$('#cn_alert_mj').empty().text('최소 2자 이상/최대 10자 이하이어야 합니다.').show();
			$('.cn.err_ic').show();
			return false;
		}else if($('#join_inputName').val() == ''){
			$('#join_inputName').focus();
			$('#join_inputName:focus').css({'border':'1px solid #e74c3c'});
			$('#name_alert_mj').empty().text('이름을 입력해주세요.').show();
			$('.name.err_ic').show();
			return false;
		}else if($('#join_inputName').val().length > 11){
			$('#join_inputName').focus();
			$('#join_inputName:focus').css({'border':'1px solid #e74c3c'});
			$('#name_alert_mj').empty().text('최소 2자 이상/최대 10자 이하이어야 합니다.').show();
			$('.name.err_ic').show();
			return false;
		}else if(!$("#tos_document").prop("checked")){
			$('#tos_doc').css({'border':'1px solid #e74c3c'});
			$('#tos_alert_mj').empty().text('약관에 동의해주세요.').show();
			$('.tos.err_ic').show();
			return false;
		}else if(!$("#personal_document").prop("checked")){
			$('#personal_doc').css({'border':'1px solid #e74c3c'});
			$('#personal_alert_mj').empty().text('개인정보취급방침을 확인해주세요.').show();
			$('.personal.err_ic').show();
			return false;
		}else{
			$(this).button('loading');
			setTimeout('$("#member_join_action").submit()',100);
		}
	});

	$('.sj_confirm_btn').on('click', function(){

		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#join_inputEmail').val() == ''){
			$('#join_inputEmail').focus();
			$('#join_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_mj').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.mj_email.err_ic').show();
			return false;
		}else if(!$('#join_inputEmail').val().match(email_regExp)){
			$('#join_inputEmail').focus();
			$('#join_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert_mj').empty().text('이메일 주소를 형식에 맞게 입력해주세요.').show();
			$('.mj_email.err_ic').show();
			return false;
		}else if($('#join_inputCallname').val() == ''){
			$('#join_inputCallname').focus();
			$('#join_inputCallname:focus').css({'border':'1px solid #e74c3c'});
			$('#cn_alert_mj').empty().text('닉네임을 입력해주세요').show();
			$('.cn.err_ic').show();
			return false;
		}else if($('#join_inputCallname').val().length > 11){
			$('#join_inputCallname').focus();
			$('#join_inputCallname:focus').css({'border':'1px solid #e74c3c'});
			$('#cn_alert_mj').empty().text('최소 2자 이상/최대 10자 이하이어야 합니다.').show();
			$('.cn.err_ic').show();
			return false;
		}else if($('#join_inputName').val() == ''){
			$('#join_inputName').focus();
			$('#join_inputName:focus').css({'border':'1px solid #e74c3c'});
			$('#name_alert_mj').empty().text('이름을 입력해주세요.').show();
			$('.name.err_ic').show();
			return false;
		}else if($('#join_inputName').val().length > 11){
			$('#join_inputName').focus();
			$('#join_inputName:focus').css({'border':'1px solid #e74c3c'});
			$('#name_alert_mj').empty().text('최소 2자 이상/최대 10자 이하이어야 합니다.').show();
			$('.name.err_ic').show();
			return false;
		}else if(!$("#tos_document").prop("checked")){
			$('#tos_doc').css({'border':'1px solid #e74c3c'});
			$('#tos_alert_mj').empty().text('약관에 동의해주세요.').show();
			$('.tos.err_ic').show();
			return false;
		}else if(!$("#personal_document").prop("checked")){
			$('#personal_doc').css({'border':'1px solid #e74c3c'});
			$('#personal_alert_mj').empty().text('개인정보취급방침을 확인해주세요.').show();
			$('.personal.err_ic').show();
			return false;
		}else{
			$(this).button('loading');
			setTimeout('$("#social_member_join_action").submit()',100);
		}
	});

	$('#join_inputEmail').on('blur', function(){
		var response='';
		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#join_inputEmail').val().length > 0){

			if(!$('#join_inputEmail').val().match(email_regExp)){
				response = '이메일 주소를 형식에 맞게 입력해주세요.';
				$('#join_inputEmail').css({'border':'1px solid #e74c3c'});
				$('#email_alert_mj').empty().text(response).show();
				$('.mj_email.err_ic').show();
			}else{
				$.ajax({
					url: "/auth/aj_userid_check",
					type: "POST",
					data : {
						"csrf_test_name" : getCookie('csrf_cookie_name'),
						"user_id" : $('#join_inputEmail').val()
					},
					dataType : "text",
					complete : function(xhr, textStatus) {
						if(textStatus == 'success'){
							if(xhr.responseText != 9000){
								if(xhr.responseText == 1000){
									response = '이미 가입되어 있는 이메일 주소입니다.';
								}else{
									response = '사용할 수 없는 이메일 주소입니다.(사유: 회원탈퇴 또는 강퇴)';
								}
								
								$('#join_inputEmail').css({'border':'1px solid #e74c3c'});
								$('#email_alert_mj').empty().text(response).show();
								$('.mj_email.err_ic').show();
							}
							else {
								$('#join_inputEmail').css({'border':'1px solid #8cc152'});
							}
						}
					}
				});
			}
		}
	});

	$('#join_inputPassword').on('blur', function(){

		if($('#join_inputPassword').val().length > 0)
		{
			var response='';
			if($('#join_inputPassword').val().length > 7)
			{
				$.ajax({
					url: "/auth/aj_password_check",
					type: "POST",
					data : {
						"csrf_test_name" : getCookie('csrf_cookie_name'),
						"password" : $('#join_inputPassword').val()
					},
					dataType : "text",
					complete : function(xhr, textStatus) {
						if(textStatus == 'success'){
							if(xhr.responseText == 1000){
								response = '1개 이상의 대문자와 숫자를 포함해야 합니다.';
								$('#join_inputPassword').css({'border':'1px solid #e74c3c'});
								$('#pw_alert_mj').empty().text(response).show();
								$('.mj_pw.err_ic').show();
							}
							else
							{
								$('#join_inputPassword').css({'border':'1px solid #8cc152'});
							}
						}
					}
				});
			}
			else
			{
				response = '최소 8자 이상이여야 합니다.';
				$('#join_inputPassword').css({'border':'1px solid #e74c3c'});
				$('#pw_alert_mj').empty().text(response).show();
				$('.mj_pw.err_ic').show();
			}
		}
	});

	$('#join_inputCallname').on('blur', function(){

		if($('#join_inputCallname').val().length > 0)
		{
			var response='';
			if($('#join_inputCallname').val().length > 1 && $('#join_inputCallname').val().length < 11)
			{
				$.ajax({
					url: "/auth/aj_usercallname_check",
					type: "POST",
					data : {
						"csrf_test_name" : getCookie('csrf_cookie_name'),
						"user_callname" : $('#join_inputCallname').val()
					},
					dataType : "text",
					complete : function(xhr, textStatus) {
						if(textStatus == 'success'){
							if(xhr.responseText == 1000){
								response = '다른 회원이 이미 사용하고 있는 닉네임입니다.';
								$('#join_inputCallname').css({'border':'1px solid #e74c3c'});
								$('#cn_alert_mj').empty().text(response).show();
								$('.cn.err_ic').show();
							}else if(xhr.responseText == 2000){
								response = '공백없이 한글, 영문, 숫자, [ ] ( ) _ 만 입력이 가능합니다.';
								$('#join_inputCallname').css({'border':'1px solid #e74c3c'});
								$('#cn_alert_mj').empty().text(response).show();
								$('.cn.err_ic').show();
							}
							else
							{
								$('#join_inputCallname').css({'border':'1px solid #8cc152'});
							}
						}
					}
				});
			}
			else
			{
				response = '최소 2자 이상/최대 10자 이하이어야 합니다.';
				$('#join_inputCallname').css({'border':'1px solid #e74c3c'});
				$('#cn_alert_mj').empty().text(response).show();
				$('.cn.err_ic').show();
			}
		}
	});

	$('#join_inputName').on('blur', function(){

		if($('#join_inputName').val().length > 0)
		{
			var response='';
			if($('#join_inputName').val().length > 1 && $('#join_inputName').val().length < 11)
			{
				$.ajax({
					url: "/auth/aj_username_check",
					type: "POST",
					data : {
						"csrf_test_name" : getCookie('csrf_cookie_name'),
						"user_name" : $('#join_inputName').val()
					},
					dataType : "text",
					complete : function(xhr, textStatus) {
						if(textStatus == 'success'){
							if(xhr.responseText == 1000){
								response = '공백없이 한글만 입력이 가능합니다.';
								$('#join_inputName').css({'border':'1px solid #e74c3c'});
								$('#name_alert_mj').empty().text(response).show();
								$('.name.err_ic').show();
							}
							else
							{
								$('#join_inputName').css({'border':'1px solid #8cc152'});
							}
						}
					}
				});
			}
			else
			{
				response = '최소 2자 이상/최대 10자 이하이어야 합니다.';
				$('#join_inputName').css({'border':'1px solid #e74c3c'});
				$('#name_alert_mj').empty().text(response).show();
				$('.name.err_ic').show();
			}
		}
	});

	$('#join_inputEmail').on('click keypress', function(){
		if($('#join_inputEmail').attr('style') !== undefined) $('#join_inputEmail').removeAttr("style");
		if($('#email_alert_mj').css('display') == 'block') $('#email_alert_mj').empty().hide();
		if($('.mj_email.err_ic').css('display') == 'block') $('.mj_email.err_ic').hide();
	});

	$('#join_inputPassword').on('click keypress', function(){
		if($('#join_inputPassword').attr('style') !== undefined) $('#join_inputPassword').removeAttr("style");
		if($('#pw_alert_mj').css('display') == 'block') $('#pw_alert_mj').empty().hide();
		if($('.mj_pw.err_ic').css('display') == 'block') $('.mj_pw.err_ic').hide();
	});

	$('#join_inputCallname').on('click keypress', function(){
		if($('#join_inputCallname').attr('style') !== undefined) $('#join_inputCallname').removeAttr("style");
		if($('#cn_alert_mj').css('display') == 'block') $('#cn_alert_mj').empty().hide();
		if($('.cn.err_ic').css('display') == 'block') $('.cn.err_ic').hide();
	});

	$('#join_inputName').on('click keypress', function(){
		if($('#join_inputName').attr('style') !== undefined) $('#join_inputName').removeAttr("style");
		if($('#name_alert_mj').css('display') == 'block') $('#name_alert_mj').empty().hide();
		if($('.name.err_ic').css('display') == 'block') $('.name.err_ic').hide();
	});

	$('#tos_document').on('click', function(){
		if($('#tos_doc').attr('style') !== undefined) $('#tos_doc').removeAttr("style");
		if($('#tos_alert_mj').css('display') == 'block') $('#tos_alert_mj').empty().hide();
		if($('.tos.err_ic').css('display') == 'block') $('.tos.err_ic').hide();
	});

	$('#personal_document').on('click', function(){
		if($('#personal_doc').attr('style') !== undefined) $('#personal_doc').removeAttr("style");
		if($('#personal_alert_mj').css('display') == 'block') $('#personal_alert_mj').empty().hide();
		if($('.personal.err_ic').css('display') == 'block') $('.personal.err_ic').hide();
	});

	/*비밀번호 찾기 페이지*/
	$('.pw_find_mail_btn').on('click', function(){

		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#pw_find_inputEmail').val() == ''){
			$('#pw_find_inputEmail').focus();
			$('#pw_find_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#pfemail_alert_mj').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.pf_email.err_ic').show();
			return false;
		}else if(!$('#pw_find_inputEmail').val().match(email_regExp)){
			$('#pw_find_inputEmail').focus();
			$('#pw_find_inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#pfemail_alert_mj').empty().text('이메일 주소를 형식에 맞게 입력해주세요.').show();
			$('.pf_email.err_ic').show();
			return false;
		}else{
			$(this).button('loading');
			setTimeout('$("#pw_find_action").submit()',100);
		}
	});

	$('#pw_find_inputEmail').on('blur', function(){
		var response='';
		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#pw_find_inputEmail').val().length > 0)
		{
			if(!$('#pw_find_inputEmail').val().match(email_regExp)){
				response = '이메일 주소를 형식에 맞게 입력해주세요.';
				$('#pw_find_inputEmail').css({'border':'1px solid #e74c3c'});
				$('#pfemail_alert_mj').empty().text(response).show();
				$('.pf_email.err_ic').show();
			}else{
				$.ajax({
					url: "/auth/aj_userid_check",
					type: "POST",
					data : {
						"csrf_test_name" : getCookie('csrf_cookie_name'),
						"user_id" : $('#pw_find_inputEmail').val()
					},
					dataType : "text",
					complete : function(xhr, textStatus) {
						if(textStatus == 'success'){
							if(xhr.responseText == 1000){
								$('#pw_find_inputEmail').css({'border':'1px solid #8cc152'});
							}else{
								if(xhr.responseText == 9000){
									response = '가입되어 있지 않은 이메일 주소입니다.';
								}else{
									response = '사용할 수 없는 이메일 주소입니다.(사유: 회원탈퇴 또는 강퇴)';
								}
								$('#pw_find_inputEmail').css({'border':'1px solid #e74c3c'});
								$('#pfemail_alert_mj').empty().text(response).show();
								$('.pf_email.err_ic').show();
							}
						}
					}
				});
			}
		}
	});

	$('#pw_find_inputEmail').on('click keypress', function(){
		if($('#pw_find_inputEmail').attr('style') !== undefined) $('#pw_find_inputEmail').removeAttr("style");
		if($('#pfemail_alert_mj').css('display') == 'block') $('#pfemail_alert_mj').empty().hide();
		if($('.pf_email.err_ic').css('display') == 'block') $('.pf_email.err_ic').hide();
	});

	/*비밀번호 변경 페이지*/
	$('.cm_pw_button').on('click', function(){
		if($('#c_modify_inputPassword').val().length < 8){
			$('#c_modify_inputPassword').focus();
			$('#c_modify_inputPassword:focus').css({'border':'1px solid #e74c3c'});
			$('#cm_alert_mj').empty().text('최소 8자 이상이어야 합니다.').show();
			$('.cm_pw.err_ic').show();
			return false;
		}else if($('#c_modify_inputPassword_check').val() != $('#c_modify_inputPassword').val()){
			$('#c_modify_inputPassword').focus();
			$('#c_modify_inputPassword:focus').css({'border':'1px solid #e74c3c'});
			$('#cm_alert_mj').empty().text('입력하신 비밀번호가 서로 일치하지 않습니다.').show();
			$('.cm_pw.err_ic').show();
			return false;
		}else{
			$("#c_modify_password_action").submit();
		}
	});

	$('#c_modify_inputPassword').on('blur', function(){

		if($('#c_modify_inputPassword').val().length > 0)
		{
			if($('#c_modify_inputPassword').val().length > 7)
			{
				var response='';

				$.ajax({
					url: "/auth/aj_password_check",
					type: "POST",
					data : {
						"csrf_test_name" : getCookie('csrf_cookie_name'),
						"password" : $('#c_modify_inputPassword').val()
					},
					dataType : "text",
					complete : function(xhr, textStatus) {
						if(textStatus == 'success'){
							if(xhr.responseText == 1000){
								response = '1개 이상의 대문자와 숫자를 포함해야 합니다.';
								$('#c_modify_inputPassword').css({'border':'1px solid #e74c3c'});
								$('#cm_alert_mj').empty().text(response).show();
								$('.cm_pw.err_ic').show();
							}
							else
							{
								$('#c_modify_inputPassword').css({'border':'1px solid #8cc152'});
							}
						}
					}
				});
			}
			else
			{
				response = '최소 8자 이상이여야 합니다.';
				$('#c_modify_inputPassword').css({'border':'1px solid #e74c3c'});
				$('#cm_alert_mj').empty().text(response).show();
				$('.cm_pw.err_ic').show();
			}
		}
	});

	$('#c_modify_inputPassword').on('click keypress', function(){
		if($('#c_modify_inputPassword').attr('style') !== undefined) $('#c_modify_inputPassword').removeAttr("style");
		if($('#cm_alert_mj').css('display') == 'block') $('#cm_alert_mj').empty().hide();
		if($('.cm_pw.err_ic').css('display') == 'block') $('.cm_pw.err_ic').hide();
	});

	function getCookie( name ){
		var nameOfCookie = name + "=";
		var x = 0;

		while ( x <= document.cookie.length )
		{
			var y = (x+nameOfCookie.length);

			if ( document.cookie.substring( x, y ) == nameOfCookie ) {
				if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
					endOfCookie = document.cookie.length;

				return unescape( document.cookie.substring( y, endOfCookie ) );
			}

			x = document.cookie.indexOf( " ", x ) + 1;
			if ( x == 0 )
			break;
		}
		return "";
	}
});