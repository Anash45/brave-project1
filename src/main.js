$(document).ready(function () {
  const $headerSection = $("#floatingHeader");

  function handleScroll() {
    if ($(window).scrollTop() > 300) {
      $headerSection.css("transform", "translateY(0)").addClass("fixed-header");
      setTimeout(() => {
        $headerSection.addClass("fixed-header");
      }, 300);
    } else {
      $headerSection.css("transform", "translateY(-100%)");
      setTimeout(() => {
        $headerSection.removeClass("fixed-header");
      }, 300);
    }
  }

  // Initial check
  handleScroll();

  // Listen to scroll
  $(window).on("scroll", handleScroll);

  // Menu toggle
  const $menuBtn = $(".menu-btn");
  const $closeBtn = $(".menu-close-btn");
  const $mobileNav = $(".mobile-nav");

  $menuBtn.on("click", function () {
    $mobileNav.addClass("opened");
  });

  $closeBtn.on("click", function () {
    $mobileNav.removeClass("opened");
  });

  // Scroll-based nav link activation
  const $navLinks = $(".nav-link");
  const sections = $navLinks.map(function () {
    const href = $(this).attr("href");
    const $section = $(href);
    return $section.length ? $section[0] : null;
  }).get();

  function onScroll() {
    const scrollPos = $(window).scrollTop() + $(window).height() / 2;
    let currentSectionId = null;

    for (const section of sections) {
      const $section = $(section);
      const sectionTop = $section.offset().top;
      const sectionHeight = $section.outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.id;
        break;
      }
    }

    $navLinks.each(function () {
      const $link = $(this);
      if ($link.attr("href") === `#${currentSectionId}`) {
        $link.addClass("active");
      } else {
        $link.removeClass("active");
      }
    });
  }

  // Run on load and scroll
  $(window).on("scroll", onScroll);
  onScroll();
});

const testimonials = [
  {
    name: "Alice Johnson",
    text: "This service transformed my workflow—fast, reliable, and always backed by great customer support.",
  },
  {
    name: "Bob Smith",
    text: "A fantastic experience from start to finish. Their tech solutions are both modern and dependable.",
  },
  {
    name: "Charlie Davis",
    text: "Professional team with a personal touch. Everything worked smoothly and met all of my expectations.",
  },
  {
    name: "Diana Prince",
    text: "Their speed and attention to detail were excellent. I'd confidently recommend them to anyone I know.",
  },
  {
    name: "Ethan Clark",
    text: "Top-tier service that exceeded expectations. Friendly, responsive, and committed to delivering results.",
  },
];

$(document).ready(function () {
  const $slider = $(".testimonial-slider");

  $slider.on("init", function (event, slick) {
    updateText(0);
  });

  $slider.slick({
    centerMode: true,
    centerPadding: "40px",
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
    dots: true,
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateText(currentSlide);
  });

  function updateText(index) {
    const t = testimonials[index];
    $("#testimonialText").html(`
        <p class="text-xl text-[#5a5a5a] mb-2">"${t.text}"</p>
        <p class="text-primary text-lg uppercase font-extrabold font-open">- ${t.name}</p>
      `);
  }
});

$(document).ready(function () {
  $(".accordion-header").on("click", function () {
    const $item = $(this).closest(".accordion-item");
    const $body = $item.find(".accordion-body");
    const isOpen = $body.hasClass("max-h-active");

    // Close all
    $(".accordion-body").removeClass("max-h-active").addClass("max-h-0");
    $(".accordion-item").removeClass("active");

    // If not already open, open this one
    if (!isOpen) {
      $body.removeClass("max-h-0").addClass("max-h-active");
      $item.addClass("active");
    }
  });
});
