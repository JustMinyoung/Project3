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
	
	static void Msg(){
		
	}
	
	final String NOEXISTID = "<script>alert(사용가능한 이메일 입니다.);</script>";
	final String EXISTID = "<script>alert(중복된 이메일 입니다.);</script>";
	
	@Override
	public boolean memberProc(Member member, Map<String, Object> sInfo) {
		String sId = (String)sInfo.get("checkedID");
		
		if(memberDao.isExistId(member.getEmail())==0){
			memberDao.insertMember(member);
			return true;
		}
		return false;
	}

	@Override
	public String isExistId(Member member, 
			Map<String, Object> sInfo) {
		if(memberDao.isExistId(member.getEmail())==0){
			sInfo.put("checkedID", member.getEmail());
			return NOEXISTID;
		}
		return EXISTID;
	}
	
	@Override
	public boolean loginProc(Member member) {
		if(memberDao.loginProc(member)==0)
			return false;
		return true;
	}
}
