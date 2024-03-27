document.getElementById('run-button').addEventListener('click', function() {
    var code = document.getElementById('code-editor').value;
    var output = document.getElementById('output');
    try {
        output.innerText = eval(code);
    } catch (error) {
        output.innerText = "Error: " + error.message;
    }
});
