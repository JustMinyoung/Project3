package com.care.project3.Service;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.care.project3.DTO.FreeBoard;
import com.care.project3.DTO.Highlight;
import com.care.project3.DTO.News;
import com.care.project3.IDAO.BoardDao;
import com.care.project3.IService.BoardService;
import com.care.project3.common.BoardTools;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	private BoardDao boardDao;

	private final int BLOCKSIZE = 5;
	private final String NAVIURL = "/project3/board/selectBoard";
	private final String CURRENTPAGE = "curPage=";
	private final String SEARCHOPT = "searchOpt=";
	private final String SEARCHWORD = "searchWord=";

	@Override
	public FreeBoard detailRead(String no) {
		return boardDao.detailRead(Integer.parseInt(no));
	}

	@Override
	public List<FreeBoard> selectBoard(String curPage, String searchOpt, String searchWord) {
		Map<String, Object> map = new HashMap<String, Object>();
		int pageNum = 0;
		if (curPage != null)
			pageNum = Integer.parseInt(curPage) - 1;
		map.put("start", pageNum * BLOCKSIZE);
		map.put("end", (pageNum + 1) * BLOCKSIZE);
		map.put("searchOpt", searchOpt);
		map.put("searchWord", searchWord);

		return boardDao.selectBoard(map);
	}

	@Override
	public String getNavi(String curPage, String searchOpt, String searchWord) throws Exception {
		int pageNum = Integer.parseInt(curPage);
		Map<String, String> map = new HashMap<String, String>();
		map.put("searchOpt", searchOpt);
		map.put("searchWord", searchWord);

		return BoardTools.getNavi(pageNum, BLOCKSIZE, boardDao.selectBoardCnt(map), NAVIURL + "?" + SEARCHOPT
				+ searchOpt + "&" + SEARCHWORD + URLEncoder.encode(searchWord, "UTF-8") + "&" + CURRENTPAGE);
	}

	@Override
	public void writeProc(FreeBoard freeboard) {
		boardDao.writeProc(freeboard);
	}

	public void deleteBoard(int deleNo) {
		boardDao.deleteBoard(deleNo);
	}

	@Override
	public void newsProc(News news) {
		boardDao.newsProc(news);

	}

	@Override
	public void hiProc(Highlight highlight) {
		boardDao.hiProc(highlight);

	}

	@Override
	public Highlight detailHiView(String no) {
		return boardDao.detailHiView(Integer.parseInt(no));
	}

	@Override
	public List<Highlight> selectHiBoard(String curPage, String searchOpt, String searchWord) {
			Map<String, Object> map = new HashMap<String, Object>();
			int pageNum=0;
			if(curPage!=null)
			pageNum = Integer.parseInt(curPage)-1;
			map.put("start", pageNum * BLOCKSIZE);
			map.put("end", (pageNum+1) * BLOCKSIZE);
			map.put("searchOpt", searchOpt);
			map.put("searchWord", searchWord);
			
			return boardDao.selectHiBoard(map);
	}

}
