package com.care.project3.Controller;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 공통 컨트롤러
 */
@Controller
public class CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class); 
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/")
	public String index() {
		return "redirect:home";
	}
 

	@RequestMapping(value = "/{formPath}")
	public String indexForm(@PathVariable("formPath") String formPath, Model model) {
		model.addAttribute("formPath", formPath);
		return "index";
	}

	@RequestMapping(value = "/form/{formPath}")
	public String moveForm(@PathVariable("formPath") String formPath) {
		return "/form/" + formPath;
	}

	@RequestMapping(value = "/footer")
	public String footer() {
		return "common/footer";
	}

	@RequestMapping(value = "/top")
	public String top() {
		return "common/top";
	}
	@RequestMapping("login_form")
	public String login_form() {
		logger.info("login_form");
		return "form/login_form";
	}
	
	@RequestMapping("join_form")
	public String join_form() {
		logger.info("join_form");
		return "form/join_form";
	}
	
	@RequestMapping("find_Password_form")
	public String find_Password_form() {
		logger.info("find_Password_form");
		return "form/find_Password_form";
	}
	
	

}
