function checkLogin() {

    // login page ko skip karo
    if (window.location.pathname.includes("login.html") ||
        window.location.pathname.includes("register.html")) {
        return;
    }

    if (localStorage.getItem("isLoggedIn") !== "true") {

        // save current page
        localStorage.setItem("redirectPage", window.location.href);

        alert("Please login first!");

        window.location.href = "login.html";
    }
}