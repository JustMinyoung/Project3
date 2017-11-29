package com.care.project3.IService;

import java.util.Map;

import org.springframework.ui.Model;
import com.care.project3.DTO.Member;


public interface MemberService {
	public boolean loginProc(Member member, Model model);
	public boolean memberProc(Member member, Model model);
}
