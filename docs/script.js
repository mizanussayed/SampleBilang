function switchLang() {
    const languageSelect = document.getElementById("languageSelect");
    const selectedLang = languageSelect.value;
    if (selectedLang === "ar") {
        if (window.location.toString().includes("index")) {
            window.location.href = "index_ar.html";
        } else {
            window.location.href = "about_ar.html";
        }
    } else {
        if (window.location.toString().includes("index")) {
            window.location.href = "index.html";
        } else {
            window.location.href = "about.html";
        }
    }
}
