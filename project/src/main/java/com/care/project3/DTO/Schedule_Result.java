package com.care.project3.DTO;

public class Schedule_Result {
	private int no;
	//(경기일정)
	private String schedule;
	//(경기시간)
	private String schedule2;
	//(선수번호(좌))
	private int L_FNo;
	//(전적(좌))
	private int L_Record;
	//(선수번호(우))
	private int R_FNo;
	//(전적(우))
	private int R_Record;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getSchedule() {
		return schedule;
	}
	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}
	public String getSchedule2() {
		return schedule2;
	}
	public void setSchedule2(String schedule2) {
		this.schedule2 = schedule2;
	}
	public int getL_FNo() {
		return L_FNo;
	}
	public void setL_FNo(int l_FNo) {
		L_FNo = l_FNo;
	}
	public int getL_Record() {
		return L_Record;
	}
	public void setL_Record(int l_Record) {
		L_Record = l_Record;
	}
	public int getR_FNo() {
		return R_FNo;
	}
	public void setR_FNo(int r_FNo) {
		R_FNo = r_FNo;
	}
	public int getR_Record() {
		return R_Record;
	}
	public void setR_Record(int r_Record) {
		R_Record = r_Record;
	}
	
	
}
