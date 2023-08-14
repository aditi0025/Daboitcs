
<script>
        let displayValue = "";

        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById("display").value = displayValue;
        }

        function clearDisplay() {
            displayValue = "";
            document.getElementById("display").value = displayValue;
        }

        function calculate() {
            try {
                const result = eval(displayValue); // Use eval with caution
                document.getElementById("display").value = result;
                displayValue = result.toString();
            } catch (error) {
                document.getElementById("display").value = "Error";
                displayValue = "";
            }
        }
    </script>





