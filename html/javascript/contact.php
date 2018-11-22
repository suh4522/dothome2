<?php
    
    //mysql 접속 소스를 include
    include_once "../connectDB.php";

    //post 방식으로 전달 받은 값 확인
    echo "<pre>";
    var_dump($_POST);

    //이름 검증
    if($_POST['name'] == '' || $_POST['name'] == null){
        echo "해당 값을 사용할 수 없습니다. 1.name";
        exit;
    }
    $name = $_POST['name'];
    //앞 뒤 공백제거
    $name = trim($name);
    //쿼리문의 따옴표 처리를 위해 real_escape_string 메소드 사용
    $name = $dbConnect->real_escape_string($name);


    //아이디 검증
    if($_POST['phone'] == '' || $_POST['phone'] == null){
        echo "해당 값을 사용할 수 없습니다. 2.id";
        exit;
    }
    $phone = $_POST['phone'];
    $phone = trim($phone);
    $phone = $dbConnect->real_escape_string($phone);


    //이메일 유효성 검사
    $emailCheck = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    if($emailCheck == false){
        echo "해당 값을 사용할 수 없습니다. 5";
        exit;
    }
    
    $email = $_POST['email'];

     //메세지
    if($_POST['message'] == '' || $_POST['message'] == null){
        echo "해당 값을 사용할 수 없습니다. 6";
        exit;
    }
    $message = $_POST['message'];
    $message = $dbConnect->real_escape_string($message);


    //쿼리문 작성
    $sql = "INSERT INTO contact(uname, phone, email, message) VALUES";
    $sql .= "('{$name}', '{$phone}', '{$email}', '{$message}')";

    //쿼리문 전송 및 전송값을 result 변수에 대입
    $result = $dbConnect->query($sql);

    if($result){
        echo "회원 가입 정보 입력 완료 (OK)";
    } else {
        echo "회원 가입 정보 입력 실패 (No)";
    }
?>