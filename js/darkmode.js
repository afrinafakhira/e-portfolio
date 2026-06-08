document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("themeBtn");

    // APPLY SAVED THEME (SEMUA PAGE)
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // ONLY INDEX HAS BUTTON
    if (btn) {
        btn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

});
