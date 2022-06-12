let logout = document.getElementById("logout");

logout.addEventListener("click", function (e) {
  e.preventDefault();

    localStorage.clear()
    window.location.href="../index.html"
});