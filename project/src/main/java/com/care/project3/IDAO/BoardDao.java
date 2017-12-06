package com.care.project3.IDAO;

import java.util.List;
import java.util.Map;


import com.care.project3.DTO.FreeBoard;
import com.care.project3.DTO.Highlight;
import com.care.project3.DTO.News;

public interface BoardDao {
	public FreeBoard detailRead(int no);
	public Highlight detailHiView(int no);
	public List<FreeBoard> selectBoard(Map<String, Object> map);
	public List<Highlight> selectHiBoard(Map<String, Object> map);
	public int selectBoardCnt(Map<String, String> map);
	public void writeProc(FreeBoard freeboard);
	public void deleteBoard(int no);
	public void newsProc(News news);
	public void hiProc(Highlight highlight);
}
