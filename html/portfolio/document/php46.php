<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <title>Document</title>
</head>
<body>
   <?php
   
   setcookie('myCookie',null, time()-3600, "/");
   if(isset($_COOKIE['myCookie'])){
      echo "쿠키가 존재합니다.";
   }else{
      echo "쿠키가 삭제 되었습니다.";
   }

?>
</body>
</html>