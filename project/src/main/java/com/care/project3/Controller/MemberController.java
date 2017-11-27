package com.care.project3.Controller;

import java.util.HashMap;
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
import org.springframework.web.bind.annotation.SessionAttributes;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;
import com.care.project3.IService.MemberService;

/**
 * 회원가입,로그인 처리
 */
@RequestMapping("member")
@Controller
//@SessionAttributes("sessionInfo")
public class MemberController {
	@Autowired
	private MemberService memberSer;

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@ModelAttribute("sessionInfo")
	/**
	 * Simply selects the home view to render by returning its name.
	 */

	@RequestMapping(value = "home")
	public String member_home() {
		return "redirect:/";
	}
	
	@RequestMapping("isExistId")
	public String isExistId(Member member, 
			//@ModelAttribute("sessionInfo") 
			Map<String, Object> sInfo,
			Model model) {
		model.addAttribute("msg", memberSer.isExistId(member, sInfo));
		model.addAttribute("member", member);
		return "forward:/join_form";
	}
	
	@RequestMapping("memberProc")
	public String memberProc(
			Member member,
			Model model,
			//@ModelAttribute("sessionInfo")
			Map<String, Object> sInfo) {
		if(memberSer.memberProc(member,sInfo)){
			return "forward:/home";
		}
		else 
		model.addAttribute("alert", "<script>alert('가입정보가 잘못 되었습니다.');</script>");
		model.addAttribute("member", member);
		return "forward:/join_form";
	}
	
	@RequestMapping("loginProc")
	public String loginProc(Model model,
			Login login) {
		if(memberSer.loginProc(login))
			return "redirect:/home";
		model.addAttribute("msg", "누구냐");
		return "forward:/home";
	}
}
