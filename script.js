var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "javascript",
    lineNumbers: true,
});

function runCode() {
    var code = editor.getValue();
    try {
        var result = eval(code);
        document.getElementById("output").innerHTML = result;
    } catch (error) {
        document.getElementById("output").innerHTML = "Erro: " + error.message;
    }
}
