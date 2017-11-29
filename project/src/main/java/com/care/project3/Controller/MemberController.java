package com.care.project3.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.care.project3.DTO.Member;
import com.care.project3.IService.MemberService;

/**
 * member controller
 */
@RequestMapping("member")
@Controller
@SessionAttributes("membersession")

public class MemberController {
	final String EXISTED = "<script>alert('잘못된 정보 입니다.');</script>";
	@Autowired
	private MemberService memberSer;

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@RequestMapping("memberProc")
	public String memberProc(Member member, Model model) {
		if (memberSer.memberProc(member, model)) {
			return "forward:/home";
		} else {
			model.addAttribute("msg", EXISTED);
			return "forward:/join_form";
		}
	}

	@RequestMapping("loginProc")
	public String loginProc(Model model, Member member) {
		if (memberSer.loginProc(member, model)) {
			return "forward:/home"; // sucess.

		} else {
			model.addAttribute("msg", "EXISTED");
			return "redirect:/home";

		}
	}

	@RequestMapping("logout")
	public String logout(SessionStatus sessionStatus) {
		
		sessionStatus.setComplete();
		
		return "redirect:/home";
	}
}
