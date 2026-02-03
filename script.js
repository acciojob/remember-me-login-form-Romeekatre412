    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existing = document.getElementById("existing");

    if (
      localStorage.getItem("username") &&
      localStorage.getItem("password")
    ) {
      existing.style.display = "block";
    }

    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();

      alert(`Logged in as ${username.value}`);

      if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        existing.style.display = "block";
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
      }
    });

    existing.addEventListener("click", function () {
      alert(`Logged in as ${localStorage.getItem("username")}`);
    });