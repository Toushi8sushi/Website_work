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



// Magnet cursor // // 
document.querySelectorAll(".magnetLines-container").forEach(container => {
  // Configuration
  const cellSize = 90; // Size of each grid item in pixels (adjust density here)
  const baseAngle = parseFloat(container.dataset.baseAngle || -10);
  let spans = []; // Keep track of current spans

  function createGrid() {
    // 1. Clear existing spans to prevent duplicates on resize
    container.innerHTML = "";

    // 2. Calculate Rows/Cols based on container size
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Math.ceil ensures we cover the whole area, Math.floor keeps it strict
    const columns = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    // 3. Update CSS Grid
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // 4. Create new spans
    const total = rows * columns;
    const fragment = document.createDocumentFragment(); // Performance boost

    for (let i = 0; i < total; i++) {
      const span = document.createElement("span");
      span.style.setProperty("--rotate", `${baseAngle}deg`);
      fragment.appendChild(span);
    }

    container.appendChild(fragment);
    
    // 5. Update our reference to the spans
    spans = container.querySelectorAll("span");
  }

  // --- Pointer Logic ---
  function onPointerMove(e) {
    spans.forEach(item => {
      // Get position relative to viewport
      const rect = item.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2; // Use left/top for better cross-browser
      const centerY = rect.top + rect.height / 2;

      const b = e.clientX - centerX;
      const a = e.clientY - centerY;
      
      // Calculate rotation
      const c = Math.sqrt(a * a + b * b) || 1;
      const r = (Math.acos(b / c) * 180) / Math.PI * (e.clientY > centerY ? 1 : -1);

      item.style.setProperty("--rotate", `${r}deg`);
    });
  }

  // --- Initialization ---
  
  // 1. Create initial grid
  createGrid();

  // 2. Listen for mouse movement
  window.addEventListener("pointermove", onPointerMove);

  // 3. Re-calculate on resize (Debounce is recommended for performance)
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createGrid, 200); // Wait 200ms after resize stops
  });
  
  // 4. Initial "waving" animation (simulate mouse at center)
  if (spans.length) {
    const rect = container.getBoundingClientRect();
    onPointerMove({ 
      clientX: rect.left + rect.width / 2, 
      clientY: rect.top + rect.height / 2 
    });
  }
});

/// //// 
