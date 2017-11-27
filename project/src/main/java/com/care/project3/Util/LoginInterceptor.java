/*package com.care.project3.Util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.care.project3.DTO.Member;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


public class LoginInterceptor extends HandlerInterceptorAdapter {
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

		HttpSession session  = request.getSession(false);

		if(session == null) {
			response.sendRedirect(request.getContextPath()+"/member/login.jsp");
			return false;
		}

		Member member = (Member)session.getAttribute("member");

		if (member == null) {
			response.sendRedirect(request.getContextPath()+"/member/login.jsp");
			return false;			
		}
		
		return true;
	}
}
*/