document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("themeBtn");

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");

        if(btn){
            btn.innerHTML = "☀️";
        }
    }

    if (btn) {

        btn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

    localStorage.setItem("theme", "dark");
    btn.innerHTML = "☀️ Light Mode";

} else {

    localStorage.setItem("theme", "light");
    btn.innerHTML = "🌙 Dark Mode";

}

        });

    }

});
