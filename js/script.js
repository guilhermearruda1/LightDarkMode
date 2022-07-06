const changeThemeBtn = document.querySelector("#change-theme");

// toggle dark mode 
function toogleDarkMode () {
    document.body.classList.toggle("dark");
}

// carrega dark ou light mode conforme o usuario usou da ultima vez
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
        toogleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", () => {
    toogleDarkMode();

    // salva ou remove o dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    } 
});