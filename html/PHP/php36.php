<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Document</title>
</head>
<body>
   <h1>파일 업로드</h1>
   <form name="fileUpload" method="post" action="php36_file.php" enctype="multipart/form-data">
      <input type="file" name="myImage" />
      <input type="submit" value="파일 등록" />
   </form>
</body>
</html>