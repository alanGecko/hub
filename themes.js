// the colours go weeeeeee
const themes = [
  "dark", "light", "purple", "blue", "yellow", "deathtothineeyes", "red",
  "green", "void", "jxdemoon", "ISEECOLOURS", 
];

// Apply stored or default theme
setTheme(localStorage.getItem("theme") || "dark");

function setTheme(name) {
  document.documentElement.className = `theme-${name}`;
  localStorage.setItem("theme", name);

  if (name === "what") {
    alert("Welcome to ");
    setTimeout(() => {
      document.documentElement.className = "theme-dark";
      localStorage.setItem("theme", "dark");
      alert("Returning to your reality...");
    }, 10000);
  }
}

// Dropdown toggle
const dropdown = document.getElementById("theme-dropdown");
const toggleBtn = document.getElementById("theme-toggle-btn");

toggleBtn.onclick = () => {
  dropdown.classList.toggle("hidden");
};

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
    dropdown.classList.add("hidden");
  }
});

// Build theme buttons dynamically
const container = document.getElementById('theme-dropdown');
themes.forEach(theme => {
  const btn = document.createElement('button');
  btn.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
  btn.onclick = () => setTheme(theme);
  container.appendChild(btn);
});
