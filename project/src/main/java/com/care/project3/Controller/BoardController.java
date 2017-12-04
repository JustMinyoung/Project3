package com.care.project3.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.care.project3.DTO.FreeBoard;
import com.care.project3.DTO.Highlight;
import com.care.project3.DTO.Member;
import com.care.project3.DTO.News;
import com.care.project3.IService.BoardService;

/**
 * Board Controller
 */
@RequestMapping("board")
@Controller
@SessionAttributes("membersession")
public class BoardController {
	@Autowired
	private BoardService boardSer;

	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

	private static final Object FreeBoard = null;

	
	@RequestMapping("board")
	public String board() {
		return "form/board";
	}

	@RequestMapping("freeBoard")
	public String freeboard() {
		return "form/freeboard";
	}

	/*@RequestMapping("main_gellery_board")
	public String main_gellery_board() {
		return "form/main_gellery_board";
	}*/

	@RequestMapping("news_board")
	public String news_board() {
		logger.info("news_board");
		return "redirect:/news_gallery_board";
	}

	@RequestMapping("main_gellery_board")
	public String main_gellery_board(Model model, @RequestParam(value = "curPage", defaultValue = "1") String curPage,
			@RequestParam(value = "selectOpt", defaultValue = "all") String selectOpt,
			@RequestParam(value = "searchWord", defaultValue = "") String searchWord) throws Exception {

		System.out.println(selectOpt + " : " + searchWord);
		model.addAttribute("hiLst", boardSer.selectHiBoard(curPage, selectOpt, searchWord));
		return "form/main_gellery_board";
	}

	@RequestMapping("schedule_form")
	public String schedule_form() {
		logger.info("schedule_form");
		return "redirect:/schedule_form";
	}

	@RequestMapping("rank_form")
	public String rank_form() {
		logger.info("rank_form");
		return "redirect:/rank_form";
	}

	@RequestMapping("board_write")
	public String board_write() {
		logger.info("board_write");
		return "redirect:/board_write";
	}

	@RequestMapping("hi_write")
	public String hi_write() {
		return "redirect:/hi_write";
	}

	@RequestMapping("detailRead")
	public String detailRead(Model model, @RequestParam("writeNo") String no) {
		model.addAttribute("boardInfo", boardSer.detailRead(no));
		return "forward:/board_view";
	}

	@RequestMapping("selectBoard")
	public String selectBoard(Model model, @RequestParam(value = "curPage", defaultValue = "1") String curPage,
			@RequestParam(value = "selectOpt", defaultValue = "all") String selectOpt,
			@RequestParam(value = "searchWord", defaultValue = "") String searchWord) throws Exception {

		System.out.println(selectOpt + " : " + searchWord);
		model.addAttribute("boardLst", boardSer.selectBoard(curPage, selectOpt, searchWord));
		model.addAttribute("navi", boardSer.getNavi(curPage, selectOpt, searchWord));
		model.addAttribute("pathpath", "board/selectBoard");
		return "forward:/board";
	}

	@RequestMapping("selectHiBoard")
	public String selectHiBoard(Model model, @RequestParam(value = "curPage", defaultValue = "1") String curPage,
			@RequestParam(value = "selectOpt", defaultValue = "all") String selectOpt,
			@RequestParam(value = "searchWord", defaultValue = "") String searchWord) throws Exception {

		System.out.println(selectOpt + " : " + searchWord);
		model.addAttribute("hiLst", boardSer.selectHiBoard(curPage, selectOpt, searchWord));
		model.addAttribute("navi", boardSer.getNavi(curPage, selectOpt, searchWord));
		return "forward:/hi_gallery_board";
	}

	@RequestMapping("writeProc")
	public String writeProc(FreeBoard freeboard, Member member, Model model) {
		boardSer.writeProc(freeboard);
		return "forward:/board/selectBoard";
	}

	@RequestMapping("deleteBoard")
	public String deleteBoard(@RequestParam("no") int deleNo) {
		boardSer.deleteBoard(deleNo);
		return "redirect:/board/selectBoard";
	}

	@RequestMapping("detailHiView")
	public String detailHiView(Model model, @RequestParam("writeNo") String no) {
		model.addAttribute("hiInfo", boardSer.detailHiView(no));
		return "forward:/hi_view";
	}

	@RequestMapping("newsProc")
	public String newsProc(News news, Member member, Model model) {
		boardSer.newsProc(news);
		return "forward:/news_gallery_board";
	}

	@RequestMapping("hiProc")
	public String hiProc(Highlight highlight, Member member, Model model) {
		boardSer.hiProc(highlight);
		return "forward:/selectHiBoard";
	}

}
