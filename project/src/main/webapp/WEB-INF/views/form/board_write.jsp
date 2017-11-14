<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<script src="../ckeditor/ckeditor.js"></script>
<form action="" method="post">
	<div class="board_box">
		<div>
			<div class="bvb_title">
				<input type="text" id="title" class="text_title" />
			</div>
			<div class="bvb_info_hidden">
				<input type="hidden" id="writer" class="hidden_writer" /> <input
					type="hidden" id="write_date" class="hidden_date" />
			</div>
		</div>
		<div class="bvb_contents_write">
			<textarea name="content" id="content" rows="20"></textarea>
			<script>
                    ClassicEditor
                        .create(document.querySelector('#content'))
                        .destory(Autoformat)
                        .catch(error => {
                            console.error(error);
                        });
                </script>
		</div>
		<div class="bvb_button_box">
			<button type="submit">글쓰기</button>
			<button type="button">취소</button>
		</div>
	</div>
</form>