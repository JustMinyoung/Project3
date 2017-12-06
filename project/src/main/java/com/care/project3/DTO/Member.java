package com.care.project3.DTO;

public class Member extends Login {
	//ȸ����ȣ
	private int no;
	//�г���
	private String nickname;
	//��������
	private String regist_date;
	//�ֱٹ湮��
	private String recent_visit_date;
	//�湮Ƚ��
	private String visit_num;
	//�����ʻ���
	private String photo;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getRegist_date() {
		return regist_date;
	}
	public void setRegist_date(String regist_date) {
		this.regist_date = regist_date;
	}
	public String getRecent_visit_date() {
		return recent_visit_date;
	}
	public void setRecent_visit_date(String recent_visit_date) {
		this.recent_visit_date = recent_visit_date;
	}
	public String getVisit_num() {
		return visit_num;
	}
	public void setVisit_num(String visit_num) {
		this.visit_num = visit_num;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	} 
	
	
}
