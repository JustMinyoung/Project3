<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="EUC-KR"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:import url="/board"/>
<table>
<tr>
<td>
  <select name="selectOpt">
    <option value="all">��ü</option>
    <option value="title">����</option>
    <option value="id">�ۼ���</option>
  </select>
  <input type=text name='searchWord'/>
  <input class="searchBtn" type="submit" name='searchBtn' value='�˻�'/>  
</td>
</tr>
</table>
