<?php

	class hello {

		function say($word){
			echo "$word";
		}
	}

	//인스턴스 생성(변수화)
	$hello = new hello;
	$hello->say("Hello World");

?>