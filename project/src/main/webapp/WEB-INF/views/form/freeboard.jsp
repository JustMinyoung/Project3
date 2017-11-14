<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:import url="/board" />
<table>
	<tr>
		<td><select name="selectOpt">
				<option value="all">전체</option>
				<option value="title">제목</option>
				<option value="id">작성자</option>
		</select> <input type=text name='searchWord' /> <input class="searchBtn"
			type="submit" name='searchBtn' value='검색' /></td>
	</tr>
</table>
