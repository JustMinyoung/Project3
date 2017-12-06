package com.care.project3.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.care.project3.DTO.Member;
import com.care.project3.IDAO.MemberDao;
import com.care.project3.IService.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	private MemberDao memberDao;
		
	@Override
	public boolean memberProc(Member member, @ModelAttribute("membersession") Model model) {
		
		if(memberDao.isExistId(member.getEmail())==0){
			memberDao.insertMember(member);
			model.addAttribute("membersession", memberDao.getInfo(member));
			return true;
		}
		return false;
	}


	
	@Override
	public boolean loginProc(Member member, @ModelAttribute("membersession") Model model) {
		if(memberDao.loginProc(member)==0)
			return false;
		model.addAttribute("membersession", 
				memberDao.getInfo(member));
		/*System.out.println(memberDao.getInfo(member));*/
		return true;
		
	}

}
