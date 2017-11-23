package com.care.project3.IService;

import java.util.Map;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;

public interface MemberService {
	public void memberProc(Member member);
	public boolean loginProc(Member member);
}
