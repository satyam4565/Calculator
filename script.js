const display = document.getElementById('display');

        function appendValue(value) {
            if (display.value === '0') {
                display.value = value;
            } else {
                display.value += value;
            }
        }

        function clearDisplay() {
            display.value = '0';
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1) || '0';
        }

        function calculate() {
            try {
                display.value = eval(display.value.replace('%', '/100'));
            } catch {
                display.value = 'Error';
            }
        }