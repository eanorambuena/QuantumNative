codeConsoleLog = (text) => {
    console.log(text);
    $("#code-console").html(text.trim().replace(/\n/g, "<br>"));
}