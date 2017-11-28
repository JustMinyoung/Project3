<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="board_box">
	<div>
		<div class="bvb_title">
			<p>${boardInfo.title }</p>
		</div>
		<div class="bvb_info">
			<p>${boardInfo.nickname }</p>
			<p>${boardInfo.writedate } / ${boardInfo.Likes } / ${boardInfo.hit }</p>
		</div>
	</div>
	<div class="bvb_contents">
		<p>${boardInfo.contents }</p>
	</div>
</div>