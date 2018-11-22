<?php
		//체크할 디렉터리를 대입
		$dir = "./images/";

		//폴더가 있는지 확인
		if(is_dir($dir)){				                   //디렉터리 존재 유무를 확인
				$opendir = opendir($dir);     //디렉터릴 사용하기 위해서 opne;

				if($opendir == true){
					while(($file == readdir($opendir)) != false) {
						echo $file."<br/>";
					}
				}
				//폴더를 열지 못했을 때
				else {
					echo "해당 폴더를 열지 못했습니다.";
					exit;
					}
				}
				//폴더를 없는 경우
				else {
					echo "해당 폴더가 없습니다.";
					exit;
				}
?>