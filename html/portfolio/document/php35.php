<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <?php 

  $pattern = '/^[a-zA-z0-9_\-\.]+@[a-zA-z\-]+\.[\.a-zA-Z]+$/';

  $myEmail = 'ioio2034@naver.com';

  if(preg_match($pattern, $myEmail, $matches)){
    echo "입력한 이메일 주소 {$myEmail}은 사용 가능한 이메일 주소입니다.";
    echo "<pre>";
    var_dump($matches);
  } else {
    echo "사용불가한 이메일주소입니다.";
  }
  
?>
</body>
</html>