let switchMode = document.getElementById("switchmode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "./css/light-mode.min.css") {
        theme.href = "./css/dark-mode.min.css";
    } else {
        theme.href = "./css/light-mode.min.css";
    }
}