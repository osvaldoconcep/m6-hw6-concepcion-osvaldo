function highlightBoxes() {
    document.getElementById("boxOne").style.backgroundColor = 'blue';
    document.getElementById("boxTwo").style.backgroundColor = 'red';
    document.getElementById("boxThree").style.backgroundColor = 'black';
}

function resetBoxes() {
    document.getElementById("boxOne").style.backgroundColor = 'yellow';
    document.getElementById("boxTwo").style.backgroundColor = 'lightseagreen';
    document.getElementById("boxThree").style.backgroundColor = 'greenyellow';
}

function appendMessage(message) {
    // append message only if there is none
    if (!document.getElementById("resultMessage")) {
        const p = document.createElement("p");
        p.setAttribute("id", "resultMessage");
        const node = document.createTextNode(message);
        p.appendChild(node);
        const element = document.getElementById("resultBox");
        element.appendChild(p);
        // show the reset button
        showResetButton();
    }
}

function showResetButton() {
    const element = document.getElementById("resetButton");
    element.classList.remove("hidden");
}
