document.addEventListener("DOMContentLoaded", function () {
  const headerSection = document.getElementById("floatingHeader");

  const handleScroll = () => {
    if (window.scrollY > 300) {
      headerSection.style.transform = "translateY(0)";
      headerSection.classList.add("fixed-header");
      setTimeout(() => {
        headerSection.classList.add("fixed-header");
      }, 300);
    } else {
      headerSection.style.transform = "translateY(-100%)";
      setTimeout(() => {
        headerSection.classList.remove("fixed-header");
      }, 300);
    }
  };

  // Initial check
  handleScroll();

  // Listen to scroll
  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".menu-close-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.add("opened");
    });
  }

  if (closeBtn && mobileNav) {
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("opened");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get all sections with IDs that match href of nav-links
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section);

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    let currentSectionId = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.id;
        break;
      }
    }

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Trigger on load and on scroll
  window.addEventListener("scroll", onScroll);
  onScroll(); // initial check on page load
});
