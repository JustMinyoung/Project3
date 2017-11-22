package com.care.project3.Controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;
import com.care.project3.IService.MemberService;

/**
 * �α���,ȸ������ ó��
 */
@RequestMapping("member")
@Controller
public class MemberController {
	@Autowired
	private MemberService memberSer;

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "home")
	public String member_home() {
		return "redirect:/";
	}

	@RequestMapping("memberProc")
	public String memberProc(Member member, Model model) {
		memberSer.memberProc(member);
		model.addAttribute("member", member);
		return "forward:home";
	}
	@RequestMapping("loginProc")
	public String loginProc(Model model,
			Login login) {
		if(memberSer.loginProc(login))
			return "redirect:/home";
		model.addAttribute("msg", "������ ��");
		return "forward:/home";
	}
}
