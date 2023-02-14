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

const setTheme = (theme = "") => {
    if (!(theme in themes)) {
        theme = "default";
    }
    $("body").css("background-image", themes[theme]);
}

setTheme();

$("#code")
    .attr("placeholder", $("#code").text())
    .text("H  X#0\nI  X#1\n");

execute();

$("#code").on('change keyup paste', execute);