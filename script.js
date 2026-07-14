const header = document.querySelector(".site-header");

document.querySelectorAll('.site-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    const target = id ? document.querySelector(id) : null;
    if (!target) return;

    event.preventDefault();
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    history.pushState(null, "", id);
  });
});

