document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLogo = document.querySelector('.nav-logo'); // logo click also toggles

  if (!navMenu || !navToggle) return;

  function toggleMenu() {
    const isActive = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Lock page scroll when menu is open
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }

  // Toggle by hamburger
  navToggle.addEventListener('click', toggleMenu);

  // Toggle by logo
  if (navLogo) {
    navLogo.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close menu if clicking outside
  document.addEventListener('click', (event) => {
    const clickInside = navMenu.contains(event.target) || navToggle.contains(event.target) || navLogo.contains(event.target);
    if (!clickInside && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Reset menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'))) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

const modal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalYoutube = document.getElementById("modalYoutube");
const closeModal = modal.querySelector(".event-modal__close");

document.querySelectorAll(".event-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalContent.innerHTML = card.querySelector(".event-card__full-content").innerHTML;

    if (card.dataset.youtube) {
      modalYoutube.href = card.dataset.youtube;
      modalYoutube.style.display = "inline-block";
    } else {
      modalYoutube.style.display = "none";
    }

    modal.classList.add("is-visible");
  });
});

modal.querySelector(".event-modal__overlay").addEventListener("click", () => {
  modal.classList.remove("is-visible");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("is-visible");
});

