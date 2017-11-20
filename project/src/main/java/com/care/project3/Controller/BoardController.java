package com.care.project3.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * test1
 * 게시판 처리 컨트롤러
 */
@RequestMapping("board")
@Controller
public class BoardController {

	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */

	@RequestMapping("board")
	public String board() {
		return "form/board";
	}
	
	@RequestMapping("news_board")
	public String news_board() {
		logger.info("news_board");
		return "forward:/gallery_board";
	}
	 
	 @RequestMapping("hi_board")
		public String hi_board() {
			logger.info("hi_board");
			return "forward:/gallery_board";
	}
	 
	 @RequestMapping("schedule_form")
		public String schedule_form() {
			logger.info("schedule_form");
			return "forward:/schedule_form";
	}
	 
	 @RequestMapping("rank_form")
		public String rank_form() {
			logger.info("rank_form");
			return "forward:/rank_form";
	}
	 
	 @RequestMapping("board_write")
		public String board_write() {
			logger.info("board_write");
			return "forward:/board_write";
	}
	 

}
