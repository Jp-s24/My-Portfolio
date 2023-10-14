$(document).ready(function () {
  $(window).scroll(function () {
    const scrollY = $(this).scrollTop();

    // Sticky navbar on scroll
    $(".navbar").toggleClass("sticky", scrollY > 20);

    // Show/hide scroll-up button
    $(".scroll-up-btn").toggleClass("show", scrollY > 500);
  });

  // Scroll-up script
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Smooth scroll on menu item click
  $(".navbar .menu li a").click(function () {
    const targetId = $(this).attr("href");
    const offset = $(targetId).offset().top;

    $("html, body").animate({ scrollTop: offset }, "slow");
  });

  // Toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(this).find("i").toggleClass("active");
  });

  // Typing text animation script
  const typedOptions = {
    typeSpeed: 150,
    backSpeed: 60,
    loop: true,
  };

  new Typed(".typing", {
    ...typedOptions,
    strings: ["To My Site"],
  });

  new Typed(".typing-2", {
    ...typedOptions,
    strings: ["Software Engineer"],
  });

  // Owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });

  // Adjust image description height
  function adjustDescriptionHeight() {
    const imageDescriptions = document.querySelectorAll(".image__description");

    imageDescriptions.forEach((description) => {
      const parentHeight = description.parentElement.clientHeight;
      const titleHeight = description.previousElementSibling.clientHeight;
      const maxHeight = parentHeight - titleHeight - 20; // Adjusted padding/margin

      description.style.maxHeight = `${maxHeight}px`;
      description.style.overflowY = "auto";
    });
  }

  // Call the function when the window is resized or when page loads
  window.addEventListener("resize", adjustDescriptionHeight);
  window.addEventListener("load", adjustDescriptionHeight);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Function to iterate through the slides
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
