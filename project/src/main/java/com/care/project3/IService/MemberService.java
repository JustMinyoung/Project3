package com.care.project3.IService;

import java.util.Map;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;

public interface MemberService {
	public boolean memberProc(Member member, Map<String, Object> sInfo);
	public boolean loginProc(Login login);
	public String isExistId(Member member,Map<String, Object> sInfo);
}
