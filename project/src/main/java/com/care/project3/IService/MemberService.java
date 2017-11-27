package com.care.project3.IService;

import java.util.Map;

import com.care.project3.DTO.Member;

public interface MemberService {
	public boolean loginProc(Member member);
	public boolean memberProc(Member member, Map<String, Object> sInfo);
	public String isExistId(Member member,Map<String, Object> sInfo);
}
