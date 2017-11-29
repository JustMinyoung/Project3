package com.care.project3.IService;

import java.util.List;
import java.util.Map;

import com.care.project3.DTO.FreeBoard;

public interface BoardService {
	public FreeBoard detailRead(String no);
	public List<FreeBoard> selectBoard(String curPage, 
			String searchOpt, String searchWord);
	public String getNavi(String curPage, String searchOpt, String searchWord) throws Exception;
	public void writeProc(FreeBoard freeboard);
}
