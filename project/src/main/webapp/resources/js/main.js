$(function(){

	if(!Modernizr.svg)
	{
		$('img#header_logo').attr('src', '/include/imgs/fb_logo.png');
		$('img.fb_st_logo').attr('src', '/include/imgs/fb_logo.png');
	}

	$(".gnb.items").each(function(){

		var $gnb_item = $(this),
			$dropdown_menu = $(this).find(".dropdown_menu");
			
		$gnb_item.on('mouseenter', toggle_menu);
		$gnb_item.on('mouseleave', untoggle_menu);

		function toggle_menu(){

			var	$left = $(this).position().left;
			$dropdown_menu.css({
				top : '49px',
				left : $left
			}).animate({
				opacity : 1
			}, 100);
		}

		function untoggle_menu(){

			$dropdown_menu.css({
				top : '-1000px',
				left : '-1000px'
			}).animate({
				opacity : 0
			}, 100);
		}
	});

	$('.st_header').each(function(){

		var $window = $(window),
			$header = $('.header'),
			$st_header = $(this);

		threshold = $header.offset().top + $header.outerHeight();

		$window.on('scroll', $.throttle(1000 / 15, function(){

			var WX;
			if( window.innerWidth )
			{
			    WX = window.innerWidth;
			} else {
			    WX = document.body.clientWidth;
			}

			if(WX >= 1000){
				if($window.scrollTop() > threshold){
					$st_header.addClass('visible');
				}else{
					$st_header.removeClass('visible');
				}
			}
		}));
		$window.trigger('scroll');
	});

	$('.login_btn').on('click', function(){
		$('#login_modal').modal('show');
	});

	$('.login_confirm_btn').on('click', function(){

		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#inputEmail').val() == ''){
			$('#inputEmail').focus();
			$('#inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.email.modal_err').show();
			return false;
		}else if(!$('#inputEmail').val().match(email_regExp)){
			$('#inputEmail').focus();
			$('#inputEmail:focus').css({'border':'1px solid #e74c3c'});
			$('#email_alert').empty().text('이메일 주소를 형식에 맞게 입력해주세요.').show();
			$('.email.modal_err').show();
			return false;
		}else if($('#inputPassword').val() == ''){
			$('#inputPassword').focus();
			$('#inputPassword:focus').css({'border':'1px solid #e74c3c'});
			$('#password_alert').show();
			$('.pw.modal_err').show();
			return false;
		}else{
			$("#login_action").submit();
		}
	});

	$('#inputEmail').on('click keypress', function(){
		if($('#inputEmail').attr('style') !== undefined) $('#inputEmail').removeAttr("style");
		if($('#email_alert').css('display') == 'block') $('#email_alert').empty().hide();
		if($('.email.modal_err').css('display') == 'block') $('.email.modal_err').hide();
	});

	$('#inputPassword').on('click keypress', function(){
		if($('#inputPassword').attr('style') !== undefined) $('#inputPassword').removeAttr("style");
		if($('#password_alert').css('display') == 'block') $('#password_alert').hide();
		if($('.pw.modal_err').css('display') == 'block') $('.pw.modal_err').hide();
	});

	$("#inputEmail").add("#inputPassword").keypress(function(e) { 
		if (e.keyCode == 13){
			e.preventDefault();	
        	$('.login_confirm_btn').click();
    	}    
	});

	$("#MI_logcon").on('click', function(){
    	var checkbox_mi = $(this).parent().prev();
        if($(this).prop('checked'))
        {
            checkbox_mi.addClass('checked');
        }
        else
        {
            checkbox_mi.removeClass('checked');
        }
    });

    $('.naver_login_btn').on('click', function(){
		location.href="/auth/naver_transfer?returnURL="+location.href;
	});

	$('.alarm_btn').on('click', function(){

		if($('.alp').hasClass('open'))
		{
			$('.alp').removeClass('open').css({display:'none'});
			$('ul.alp_content').empty();
		}
		else
		{
			$.ajax({
				url: "/member/ajax_alarm",
				type: "POST",
				data : {
					"csrf_test_name" : getCookie('csrf_cookie_name'),
				},
				dataType : "json",
				success : function(data) {
					if(data['result'] == 'fail')
					{
						$('ul.alp_content').append('<li class="no_alp">새로운 알림이 없습니다.</li>');
					}
					else
					{
						jQuery.each(data, function(index, value) {
							$('ul.alp_content').append(value['alarm_content']);
						});
						
					}
					$('.alp').addClass('open').css({display:'block'});
					// var waypoints = $('.alp.open .alp_bottom').waypoint({
					// 	handler: function(direction) {
					// 		console.log(11);
					// 		if(direction == 'down')
					// 		{
					// 	 		$('.alarm_btn').click();
					// 	 		this.destroy();
					// 		}
					// 	}, offset: '-10%'
					// });
	            }
			});
		}
	});

	$('.info_section').on('click', '.al_delete', function(){
		
		var alarm_id = $(this).closest('li.al_list').attr('id');
		
		$.ajax({
			url: "/member/ajax_alarm_delete",
			type: "POST",
			data : {
				"csrf_test_name" : getCookie('csrf_cookie_name'),
				"alarm_id" : alarm_id
			},
			dataType : "json",
			success : function(data) {
				if(data['result'] != 'fail')
				{
					if($('li.al_list#'+alarm_id).hasClass('unread'))
					{
						var new_number = $('.new_alarm_badge').text() - 1;
						if(new_number < 1) var new_number = 0;
						$('.new_alarm_badge').text(new_number);
					}
					$('li.al_list#'+alarm_id).remove();

					if($('li.al_list').length < 1)
					{
						$('ul.alp_content').append('<li class="no_alp">새로운 알림이 없습니다.</li>');
					}
				}
            }
		});
	});

	$('.al_all_read').on('click', function(){
		
		$.ajax({
			url: "/member/ajax_alarm_control",
			type: "POST",
			data : {
				"csrf_test_name" : getCookie('csrf_cookie_name'),
				"type" : 'read'
			},
			dataType : "json",
			success : function(data) {
				if(data['result'] != 'fail')
				{
					$('li.al_list').removeClass('unread');
					$('li.al_list').find('.al_read').remove();
					$('.new_alarm_badge').remove();
				}
            }
		});
	});

	$('.info_section').on('click', '.alarm_link', function(event){
		event.preventDefault();
		var alarm_link = $(this).attr('href');
		var $alarm_item = $(this).parent();

		if($alarm_item.hasClass('unread'))
		{
			var alarm_id = $alarm_item.attr('id');
			$.when(update_alarm_read(alarm_id)).done(function(){
				location.href = alarm_link;
			});
		}
		else
		{
			location.href = alarm_link;
		}
	});

	$('.info_section').on('click', '.al_read', function(){
		var alarm_id = $(this).closest('li.al_list').attr('id');
		update_alarm_read(alarm_id);
	});

	function update_alarm_read(alarm_id)
	{
		$.ajax({
			url: "/member/ajax_alarm_read",
			type: "POST",
			async: false,
			data : {
				"csrf_test_name" : getCookie('csrf_cookie_name'),
				"alarm_id" : alarm_id
			},
			dataType : "json",
			success : function(data) {
				if(data['result'] != 'fail')
				{
					$('li.al_list#'+alarm_id).removeClass('unread');
					$('li.al_list#'+alarm_id).find('.al_read').remove();
					
					var new_number = $('.new_alarm_badge').text() - 1;
					if(new_number < 1)
					{
						$('.new_alarm_badge').remove();
					}
					else
					{
						$('.new_alarm_badge').text(new_number);
					}
				}
            }
		});
	}

	$('.alp_bottom').on('click', function(){
		location.href="/member/alarm";
	});

	$('.note_btn').on('click', function(){
		var url = '/note/rbox';
		window.open(url,'','width=450, height=500, menubar=no, status=yes, scrollbars=yes');
	});

	$('.logout_btn').on('click', function(){
		var url = location.href;
		location.href="/auth/logout?returnURL="+url;
	});

	$('.member_join_btn').on('click', function(){
		location.href="/auth/member_join"
	});

	$('.pw_find_btn').on('click', function(){
		location.href="/auth/password_find";
	});

	$('.member_profile_btn').on('click', function(){
		location.href="/member/profile"
	})

	$('.MI_log_btn').on('click', function(){

		var email_regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if($('#MIEmail').val() == ''){
			$('#MIEmail').focus();
			$('#MIEmail:focus').css({'border':'1px solid #e74c3c'});
			$('.MIvalidation_msg').empty().text('이메일(아이디)을 입력해주세요.').show();
			$('.email.err').show();
			return false;
		}else if(!$('#MIEmail').val().match(email_regExp)){
			$('#MIEmail').focus();
			$('#MIEmail:focus').css({'border':'1px solid #e74c3c'});
			$('.MIvalidation_msg').empty().text('이메일 주소를 형식에 맞게 입력해주세요.').show();
			$('.email.err').show();
			return false;
		}else if($('#MIPassword').val() == ''){
			$('#MIPassword').focus();
			$('#MIPassword').css({'border':'1px solid #e74c3c'});
			$('.MIvalidation_msg').empty().text('비밀번호를 입력해주세요.').show();
			$('.pw.err').show();
			return false;
		}else{
			$("#main_login_action").submit();
		}
	});

	$("#MIEmail").on('click keypress', function(){
		if($('#MIEmail').attr('style') !== undefined) $('#MIEmail').removeAttr("style");
		if($('.MIvalidation_msg').css('display') == 'block') $('.MIvalidation_msg').empty().hide();
		if($('.email.err').css('display') == 'block') $('.email.err').hide();
	});

	$("#MIPassword").on('click keypress', function(){
		if($('#MIPassword').attr('style') !== undefined) $('#MIPassword').removeAttr("style");
		if($('.MIvalidation_msg').css('display') == 'block') $('.MIvalidation_msg').empty().hide();
		if($('.pw.err').css('display') == 'block') $('.pw.err').hide();
	});

	$("#MIEmail").add("#MIPassword").keypress(function(e) { 
		if (e.keyCode == 13){
			e.preventDefault();	
        	$('.MI_log_btn').click();
    	}    
	});

	$('.MI_naver_log_btn').on('click', function(){
		location.href="/auth/naver_transfer";
	});

	$('.ma_note').on('click', function(){
		var url = '/note/rbox';
		window.open(url,'','width=450, height=500, menubar=no, status=yes, scrollbars=yes');
	});

	$('.ma_memer_info').on('click', function(){
		location.href="/member/profile"
	})

	$('.ma_log_out').on('click', function(){
		var url = location.href;
		location.href="/auth/logout?returnURL="+url;
	});

	$('.show_more').tooltip();

    $("#modal_logcon").on('click', function(){
    	var checkbox_modal = $(this).parent().prev();
        if($(this).prop('checked'))
        {
            checkbox_modal.addClass('checked');
        }
        else
        {
            checkbox_modal.removeClass('checked');
        }
    });

    if($('img.rc_photo').length > 0)
    {
    	$.when($('img.rc_photo').imageScale()).done(function(){
    		$('img.rc_photo').css({display:'block'}).animate({opacity:1},500);
    	});
    }

    if($('.mgm_sch').length > 0)
    {
    	var box = $('.game_box').length;
    	if(box < 5)
	    {
	    	var fill_box_count = 4 - box; 
	    }
	    else if( 4 < box && box < 9)
	    {
	    	var fill_box_count = 8 - box; 
	    }

	    var game_box_html='<div class="game_box no_sch"><a href="/fixture" class="fixture_link"><div class="game_info"></div><div class="game_league"></div><div class="game_datetime"><span class="game_date"></span><span class="game_time"></span></div></a></div>';
	    for (var i = 0; i < fill_box_count; i++)
	    {
	    	$('.mgm_sch').append(" ");
	    	$('.mgm_sch').append(game_box_html);
	    }
    }

    $('.scroll_top').each(function(){

    	var top_button = $(this),
			$window = $(window);

		$window.on('scroll', $.throttle(1000 / 15, function(){
			if($window.scrollTop() > 400){
				top_button.fadeIn(300);
			}else{
				top_button.fadeOut(300);
			}
		}));

		top_button.on('click', function(){
			$("html, body").animate({scrollTop: 0}, 300);
		})
	});

	$('.btype').on('click', function(){
		var url = location.href;
		location.href="/home/browser_switch?returnURL="+url;
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
