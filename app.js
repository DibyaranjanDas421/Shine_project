document.getElementById("search-icon").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input");
    if (searchInput.style.width === "0px" && searchInput.style.opacity === "0") {
      searchInput.style.width = "150px";
      searchInput.style.opacity = "1";
    } else {
      searchInput.style.width = "0px";
      searchInput.style.opacity = "0";
    }
  });