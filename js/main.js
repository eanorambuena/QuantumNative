$("#gh-btn").on("click", () => {
    window.open("https://github.com/eanorambuena/QuantumNative", "_blank");
});

$("#go-down-btn").on("click", () => {
    $("html, body").animate({
        scrollTop: $("#code").offset().top
    }, 1000);
});

$("#theme-toggle").on("click", toggleTheme);

$("#go-up-btn").on("click", topFunction);

$(".div-link").each(
    (i, e) => {
        $(e).on("click", () => {
            window.open(e.id, "_blank");
        });
    }
)

setTheme();

$("#code")
    .attr("placeholder", $("#code").text())
    .text("H  X#0\nI  X#1\n");

execute();

$("#code").on('change keyup paste', execute);