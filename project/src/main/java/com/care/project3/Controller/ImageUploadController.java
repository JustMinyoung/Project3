/*package com.care.project3.Controller;

import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.care.project3.DTO.ImageFile;
import com.care.project3.ImageService.ImageService;
import com.care.project3.ImageService.ImageView;

@Controller
public class ImageUploadController {
	
	 * * ImageView�� ���� �ý��ۿ� �ִ� �̹��� ������ �������� �����ִ� ������ �մϴ�. * �� �κп��� ImageView
	 * Ŭ������ �ۼ��ϰ� �˴ϴ�.
	  @Resource(name = "imageView")
	ImageView imageView;
	*//**
	 * * �̹����� �����ϴ� ���� ���� Ŭ�����Դϴ�. ���������� ��� ����ϱ� ���ſ����Ƿ� * ���� Ŭ������ �����ϴ� ��縸 ������
	 * Ŭ�����Դϴ�.
	 *//*
	@Autowired
	ImageService imageService;

	*//** * �̹��� ���ε带 ���� ������ ���� *//*
	@RequestMapping("/uploadPage")
	private String uploadView() {
		return "upload";
	}

	*//** * �̹��� ���ε� �������� ������ ���� �� �ް� �Ǵ� �޼��� *//*
	@RequestMapping(value = "board/upload", method = RequestMethod.POST)
	private String upload(@RequestParam MultipartFile imageFile, ModelMap modelMap) {
		ImageFile fileInfo = imageService.save(imageFile);
		modelMap.put("imageFile", fileInfo);
		return "forward:/main_gellery_board";
	}

	@RequestMapping("/image/{imageId}")
	private ImageView getImage(@PathVariable String imageId, ModelMap modelMap) {
		ImageFile imageFile = imageService.get(imageId);
		modelMap.put("imageFile", imageFile);
		return imageView;
	}
}
*/