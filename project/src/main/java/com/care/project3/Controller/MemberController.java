package com.care.project3.Controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;
import com.care.project3.IService.MemberService;

/**
 * member controller
 */
@RequestMapping("member")
@Controller

//@SessionAttributes("sessionInfo")
public class MemberController {
	final String EXISTED = "<script>alert('잘못된 정보 입니다.');</script>";
	@Autowired
	private MemberService memberSer;

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("memberProc")
	public String memberProc(
			Member member,
			Model model,
			//@ModelAttribute("sessionInfo")
			Map<String, Object> sInfo) {
		if(memberSer.memberProc(member)){
			model.addAttribute("member", member);
			return "forward:/home";
		} else { 
			model.addAttribute("msg", EXISTED);
			return "forward:/join_form";
		}
	}
	
	@RequestMapping("loginProc")
	public String loginProc(Model model, Member member, HttpSession session) {
		if (memberSer.loginProc(member)) {
			session.setAttribute("member", member);
			return "redirect:/home";
		} else {
			model.addAttribute("msg", "EXISTED");
			return "redirect:/home";
		}
	}

	@RequestMapping("logout")
	public String logout(HttpSession session, HttpServletRequest request) {

		session = request.getSession(false);
		request.getSession(true).invalidate();

		return "redirect:/home";
	}

}
