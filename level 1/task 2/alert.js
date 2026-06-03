<!DOCTYPE html>
<html>
<head>
    <title>Greeting Message</title>
</head>
<body>

<script>
    let hour = new Date().getHours();

    if(hour < 12){
        alert("Good Morning!");
    }
    else if(hour < 18){
        alert("Good Afternoon!");
    }
    else{
        alert("Good Evening!");
    }
</script>

</body>
</html>