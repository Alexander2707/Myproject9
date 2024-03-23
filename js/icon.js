let switchIcon = document.getElementById("switchmode");

switchIcon.onclick = function () {
    let themeIco = document.getElementById("themeico");

    if (themeIco.getAttribute("src") == "free-icon-sun-11186052.png") {
        themeIco.src = "free-icon-moon-4995249.png";
    } else {
        themeIco.href = "free-icon-sun-11186052.png";
    }
}