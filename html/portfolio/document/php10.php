<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
        //1~12까지 출력해주세요~
        for(var i=1; i<=12; i++){
            document.write(i,"<br>");
        }
    </script>
</head>
<body>
    <select id="birthMonth" name="birthMonth">
        <!-- <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option> -->
        <?php
            for($i = 1; $i <= 12; $i++){ ?>
            <option value="<?=$i?>"><?=$i?></option>
        <?php } ?>

    </select>
    <label for="birthMonth">월</label>
</body>
</html>