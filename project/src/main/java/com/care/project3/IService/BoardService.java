package com.care.project3.IService;

import java.util.List;
import com.care.project3.DTO.FreeBoard;
import com.care.project3.DTO.Highlight;
import com.care.project3.DTO.News;

public interface BoardService {
	public FreeBoard detailRead(String no);
	public Highlight detailHiView(String no);
	public List<FreeBoard> selectBoard(String curPage, 
			String searchOpt, String searchWord);
	public List<Highlight> selectHiBoard(String curPage, 
			String searchOpt, String searchWord);
	public String getNavi(String curPage, String searchOpt, String searchWord) throws Exception;
	public void writeProc(FreeBoard freeboard);
	public void newsProc(News news);
	public void deleteBoard(int deleNo);
	public void hiProc(Highlight highlight);
}
