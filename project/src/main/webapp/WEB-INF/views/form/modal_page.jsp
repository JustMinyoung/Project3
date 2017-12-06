<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:url var="home" value="/" />
<c:url var='res' value="/resources/" />
<!DOCTYPE html>
<div class="modal fade" id="login_modal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<img src="${res }img/ufc_logo.png" class="ufc_logo" id="ufc_logo">
			</div>
			<div class="modal_import_div">
				<c:import url="/form/login_form" /> <!-- 이부분에 변수를 넣어 콘텐츠를 불러오자. -->
			</div>
		</div>
	</div>
</div>
