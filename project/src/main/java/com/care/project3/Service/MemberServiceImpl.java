package com.care.project3.Service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.care.project3.DTO.Login;
import com.care.project3.DTO.Member;
import com.care.project3.IDAO.MemberDao;
import com.care.project3.IService.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	private MemberDao memberDao;
	
	@Override
	public void memberProc(Member member) {

		 memberDao.insertMember(member);				
			 
	}
	@Override
	public boolean loginProc(Login login) {
		if(memberDao.loginProc(login)==0)
			return false;
		return true;
	}
}
