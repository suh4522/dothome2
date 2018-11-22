<?php

	class hello{

		protected function say($word){
			echo "$word";
		}

		public function say2($word){
			$this->say($word);
		}
	}

	$hello = new hello;
	$hello->say2("hello World");

?>