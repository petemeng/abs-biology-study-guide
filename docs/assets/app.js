const progress = document.getElementById("progress");
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function updateProgress() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${value}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  sidebar.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.innerWidth <= 760) {
      sidebar.classList.remove("open");
    }
  });
}

let searchIndex = [];
const indexPath = location.pathname.includes("/lectures/")
  ? "../assets/search-index.json"
  : "assets/search-index.json";
fetch(indexPath)
  .then((response) => response.ok ? response.json() : [])
  .then((data) => {
    searchIndex = data;
  })
  .catch(() => {
    searchIndex = [];
  });

function excerpt(text, query) {
  const lower = text.toLowerCase();
  const start = Math.max(0, lower.indexOf(query.toLowerCase()) - 36);
  return text.slice(start, start + 105);
}

if (searchInput && searchResults) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query.length < 2) {
      searchResults.innerHTML = "";
      return;
    }
    const prefix = location.pathname.includes("/lectures/") ? "../" : "";
    const hits = searchIndex
      .map((item) => {
        const haystack = `${item.title} ${item.text}`.toLowerCase();
        const score = haystack.includes(query.toLowerCase()) ? (item.title.toLowerCase().includes(query.toLowerCase()) ? 2 : 1) : 0;
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    searchResults.innerHTML = hits.map((item) => `<a class="search-result" href="${prefix}${item.url}">
      <strong>${item.title}</strong>
      <span>${excerpt(item.text, query)}...</span>
    </a>`).join("");
  });
}
