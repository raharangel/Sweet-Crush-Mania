console.log("Tick-tac-toe site loaded successfully.");

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("button, .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.disabled = true;
    setTimeout(() => (btn.disabled = false), 700); 
  });
});

window.scrollTo({ top: 0, behavior: "smooth" });

const loginForm = document.querySelector("form");

if (loginForm) {
  loginForm.onsubmit = (e) => {
    e.preventDefault();
    alert("Welcome back, " + username.value + "!");
    window.location.href = "index.html";
  };
}

const startBtn = document.querySelector(".btn");

if (startBtn && startBtn.textContent.includes("Start")) {
  startBtn.addEventListener("click", () => {
    startBtn.style.transform = "scale(0.95)";
    setTimeout(() => (startBtn.style.transform = "scale(1)"), 150);
  });
}

const cells = document.querySelectorAll(".cell");

if (cells.length > 0) {
  cells.forEach(cell => {
    cell.onclick = () => {
      if (!cell.textContent.trim()) {
        cell.textContent = Math.random() > 0.5 ? "X" : "O"; 
    };
  });
}

const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simple validation (for demonstration purposes only)
      if (username === "user" && password === "pass") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });



