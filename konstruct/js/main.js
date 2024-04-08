(() => {
    var e = document.querySelector(".page__body"),
        s = document.querySelector(".menu"),
        t = document.querySelector(".burger-wrap"),
        l = t.querySelector(".burger"),
        c = t.querySelector(".close");

    function o() {
        s.classList.toggle("active"), l.classList.toggle("show"), c.classList.toggle("show"), e.classList.remove("disable-scroll")
    }
    t.addEventListener("click", (function() {
        s.removeEventListener("click", o), s.classList.toggle("active"), l.classList.toggle("show"), c.classList.toggle("show"), e.classList.toggle("disable-scroll"), s.addEventListener("click", o)
    }))
})(); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}