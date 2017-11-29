package com.care.project3.IDAO;

import java.util.List;
import java.util.Map;


import com.care.project3.DTO.FreeBoard;

public interface BoardDao {
	public FreeBoard detailRead(int no);
	public List<FreeBoard> selectBoard(Map<String, Object> map);
	public int selectBoardCnt(Map<String, String> map);
	public void writeProc(FreeBoard freeboard);
}
