const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-card, .metrics, .section-heading, .service-grid article, .project-card, .timeline article, .quote-card, .capability-list div, .faq-list details, .contact-copy, .contact-card",
);

revealItems.forEach((item) => {
  item.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  },
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
  observer.observe(item);
});

document.querySelector(".contact-card button")?.addEventListener("click", () => {
  window.alert("当前先通过 QQ：466875352 联系。后续接入邮箱表单或 WhatsApp 后，就能正式收集海外询盘。");
});
