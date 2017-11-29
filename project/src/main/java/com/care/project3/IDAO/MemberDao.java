package com.care.project3.IDAO;

import com.care.project3.DTO.Member;

public interface MemberDao {
	public void insertMember(Member member);
	public int loginProc(Member member);
	public int isExistId(String id);
	public Member getInfo(Member member);
}
