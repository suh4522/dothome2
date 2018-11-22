<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>   </title>
</head>
<body>
   <?php

      session_start();

      //세션 생성
      $_SESSION['mySession7'] = 'KIM';

      echo "세션 생성후 존재 여부 확인 <br>";
      if(isset($_SESSION['mySession7'])){
         echo "mySession7 세션이 존재 합니다. <br>";
      }else {
         echo "mySession7 세션이 존재하지 않습니다. <br>";
      }

      //세션 삭제
      unset($_SESSION['mySession7']);

      echo "세션 삭제 후 존재 여부 확인 <br>";
      if(isset($_SESSION['mySession7'])){
         echo "mySession7 세션이 존재 합니다. <br>";
      }else {
         echo "mySession7 세션이 존재하지 않습니다. <br>";
      }

?>
</body>
</html>