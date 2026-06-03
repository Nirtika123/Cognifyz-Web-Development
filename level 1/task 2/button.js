<!DOCTYPE html>
<html>
<head>
    <title>Color Change Button</title>
</head>
<body>

    <button id="btn" onclick="changeColor()">
        Click Me
    </button>

    <script>
        function changeColor(){
            document.getElementById("btn").style.backgroundColor = "green";
        }
    </script>

</body>
</html>