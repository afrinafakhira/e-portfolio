document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("themeBtn");

    // LOAD SAVE MODE
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        if (btn) btn.innerText = "☀️";
    } else {
        if (btn) btn.innerText = "🌙";
    }

    // CLICK TOGGLE
    if (btn) {
        btn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                btn.innerText = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                btn.innerText = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }

});