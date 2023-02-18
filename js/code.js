const codeConsoleLog = (text) => {
    console.log(text);
    $("#code-console").html(text.trim().replace(/\n/g, "<br>"));
}

const execute = () => {
    Q( $("#code").val() )
        .setName$( Q.getRandomName$ )
        .evaluate$();
}

const themes = {
    default: "linear-gradient(180deg, #784398 0, #55317a 25%, #321f59 50%, #130d39 75%, #00001f 100%)",
    avocado: "linear-gradient(180deg, #847757 0, #786d45 16.67%, #696332 33.33%, #59591f 50%, #484f09 66.67%, #364600 83.33%, #253e00 100%)",
    ocean: "linear-gradient(180deg, #505467 0, #1f3259 50%, #00154b 100%)",
    darkmode: "linear-gradient(180deg, #121212 0, #000 100%)"
}

var currentTheme = "default";

const setTheme = (theme = "") => {
    if (!(theme in themes)) {
        theme = "default";
    }
    $("body").css("background-image", themes[theme]);
    $("#theme-toggle").css("background-image", themes[theme]);
}

const toggleTheme = () => {
    let themesArray = Object.keys(themes);
    let currentThemeIndex = themesArray.indexOf(currentTheme);
    let nextThemeIndex = (currentThemeIndex + 1) % themesArray.length;
    let nextTheme = themesArray[nextThemeIndex];
    setTheme(nextTheme);
    currentTheme = nextTheme;  
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    let $goUpBtn = document.getElementById("go-up-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $goUpBtn.style.display = "block";
    } else {
        $goUpBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
