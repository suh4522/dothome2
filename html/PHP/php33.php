<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
    
    $pattern = '/^[가-힣]+$/';

    $myName = '드루킹';

    if(preg_match($pattern, $myName, $matches)){
        echo "값 {$myName}은 정규식 표현에 적합합니다.";
        echo "<pre>";
        var_dump($matches);
    } else {
        echo "이름에 특수문자, 영문, 숫자를 사용할 수 없습니다. ";
    }

?>
</body>
</html>