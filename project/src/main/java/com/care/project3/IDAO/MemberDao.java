package com.care.project3.IDAO;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;

public interface MemberDao {
	public void insertMember(Member member);
	public int loginProc(Login login);
	public int isExistId(String id);
}
