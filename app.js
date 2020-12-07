function setDeg() {
    var d = new Date();
    var hourDeg = document.getElementById("hour");
    var minDeg = document.getElementById("min");
    var hours = (d.getHours() > 12) ? (d.getHours() - 12) : (d.getHours());
    var mins = d.getMinutes() + 1;
    var secDeg = document.getElementById("secmove");
    secDeg.style.transform = "rotate(" + ((d.getSeconds() + d.getMilliseconds() / 1000) / 60 * 360) + "deg)";

    if (d.getMinutes() > 30) {
        hourDeg.style.transform = "rotate(" + (hours * 30 + 15) + "deg)";
    }
    else {
        hourDeg.style.transform = "rotate(" + (hours * 30) + "deg)";
    }
    minDeg.style.transform = "rotate(" + (mins * 6 - 6) + "deg)";
}
setInterval(setDeg, 1);