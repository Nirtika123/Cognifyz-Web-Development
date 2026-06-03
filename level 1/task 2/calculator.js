<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>

    <h2>Add Two Numbers</h2>

    <input type="number" id="num1" placeholder="First Number">

    <input type="number" id="num2" placeholder="Second Number">

    <button onclick="calculate()">Add</button>

    <h3 id="result"></h3>

    <script>
        function calculate(){

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            let sum = num1 + num2;

            document.getElementById("result").innerHTML =
            "Result: " + sum;
        }
    </script>

</body>
</html>