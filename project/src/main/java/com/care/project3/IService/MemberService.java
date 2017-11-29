package com.care.project3.IService;

import java.util.Map;

import javax.servlet.http.HttpSession;

import com.care.project3.DTO.Member;


public interface MemberService {
	public boolean loginProc(Member member);
	public boolean memberProc(Member member);
	public String isExistId(Member member,Map<String, Object> sInfo);
	
}
