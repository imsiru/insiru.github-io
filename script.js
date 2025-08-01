document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-placeholder").innerHTML = html;

      const toggle = document.getElementById("menuToggle");
      const overlay = document.getElementById("overlay");

      if (!toggle || !overlay) return;

      // ✅ Lottie 초기화
      const anim = lottie.loadAnimation({
        container: toggle,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'menu_icon.json'
      });

      let isMenuOpen = false;

      toggle.addEventListener("click", () => {
        overlay.classList.toggle("hidden");

        if (!isMenuOpen) {
          anim.setDirection(1); // ▶️ forward
          anim.play();
        } else {
          anim.setDirection(-1); // ⏪ reverse
          anim.play();
        }

        isMenuOpen = !isMenuOpen;
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.add("hidden");
          anim.setDirection(-1);
          anim.play();
          isMenuOpen = false;
        }
      });
    });
});
