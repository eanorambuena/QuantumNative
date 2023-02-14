const execute = () => {
    Q( $("#code").val() )
        .setName$( Q.getRandomName$ )
        .evaluate$();
}

$("#code")
    .attr("placeholder", $("#code").text())
    .text("H  X#0\nI  X#1\n");

execute();

$("#code").on('change keyup paste', execute);

$("body").css("background-image", "linear-gradient(180deg, #784398 0, #55317a 25%, #321f59 50%, #130d39 75%, #00001f 100%)");