package com.care.project3.DTO;

public class Highlight_Reply {
	//게시물번호
	private int no;
	//부모번호
	private int Pno;
	//닉네임
	private String nickname;
	//작성일자
	private String write_date;
	//내용
	private String contents;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getPno() {
		return Pno;
	}
	public void setPno(int pno) {
		Pno = pno;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getWrite_date() {
		return write_date;
	}
	public void setWrite_date(String write_date) {
		this.write_date = write_date;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
}
