<?php
		
		echo "<pre>";
		var_dump($)

		//$_FILES['myImage']['name'];
		//$_FILES['myImage']['type'];
		//$_FILES['myImage']['tmp_name'];
	
		//임시저장된 정보
		$myTemFile = $_FILES['myIamge']['tmp_name'];

		//파일  타입 및 확장자 구하기
		$fileTypeExtension = explode("", $_FILES['myIamge']['type']);

		//파일 타입
		$fileType = $fileTypeExtension[0];

		//파일 확장자
		$extension = $fileTypeExtension[1];

		//이미지 파일이 맞는지 확인
		if($fileType == 'image'){
			//허용할 확장자를 jpg, bmp, gif, png로 정함, 그 외에 파일은 업로드 불가
			if($extension == 'jpeg' || $extension == 'bmp' || $extension == 'gif' || $extension == 'png'){
				//임시 파일 옮길 저장 및 파일명
				$myFile = './images/web.{$extension}';
			}
		}

?>