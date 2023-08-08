const buttonsEl = document.querySelectorAll("button");
const resultEl = document.getElementById("output");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        let buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "AC") {
            clearScreen();
        }else if (buttonValue === "=") {
            calculateResult();
        }else if (buttonValue === "DE"){
            resultEl.value = resultEl.value.slice(0,-1)
        }else {
            appendValue(buttonValue);
        }
    })
};

function clearScreen() {
    resultEl.value = "";
}

function calculateResult() {
    resultEl.value = eval(resultEl.value);
}

function appendValue(buttonValue) {
    resultEl.value += buttonValue;
}
