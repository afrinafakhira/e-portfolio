document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("themeBtn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");

        if (btn) {
            btn.innerHTML = "☀️ <span>Light Mode</span>";
        }
    }

    if (btn) {

        btn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");
                btn.innerHTML = "☀️ <span>Light Mode</span>";

            } else {

                localStorage.setItem("theme", "light");
                btn.innerHTML = "🌙 <span>Dark Mode</span>";

            }

        });

    }

});
