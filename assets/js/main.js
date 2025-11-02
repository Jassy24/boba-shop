document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("[data-category-link]");
    const sections = document.querySelectorAll(".drink-section");

    const defaultCategory = "specials"; 
    const highlightedCategory = "specials"; 

    sections.forEach(section => {
      section.classList.toggle("hidden", section.getAttribute("data-category") !== defaultCategory);
    });

    links.forEach(link => {
      const category = link.getAttribute("data-category-link");
      if (category === highlightedCategory) {
        link.classList.add("underline", "underline-offset-4");
      } else {
        link.classList.remove("underline","underline-offset-4");
      }
    });

    // --- On click ---
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetCategory = link.getAttribute("data-category-link");

        // Show only selected section
        sections.forEach(section => {
          section.classList.toggle("hidden", section.getAttribute("data-category") !== targetCategory);
        });

        // Update link highlights
        links.forEach(l => l.classList.remove("underline-offset-4", "underline"));
        link.classList.add("underline-offset-4", "underline");
      });
    });
  });
