function switchLang() {
    const languageSelect = document.getElementById("languageSelect");
    const selectedLang = languageSelect.value;

    // if (selectedLang === "ar" &&  window.location.href ==="index.html") {
    //   window.location.href = "index_ar.html";
    // } else if (selectedLang === "en") {
    //   window.location.href = "index.html";
    // }else{
    //     window.location.href = "about.html";
    // }


    if (selectedLang === "ar") {
        if (window.location.toString().includes("index")) {
            window.location.href = "index_ar.php";
        } else {
            window.location.href = "about_ar.php";
        }
    } else {
        if (window.location.toString().includes("index")) {
            window.location.href = "index.php";
        } else {
            window.location.href = "about.php";
        }
    }
}
