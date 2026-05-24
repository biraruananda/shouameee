const preloader = document.querySelector(".preloader");
const views = document.querySelectorAll(".view");
const toggles = document.querySelectorAll("[data-target]");

const showView = (targetId) => {
  const current = document.querySelector(".view--active");
  const next = document.getElementById(targetId);

  if (!next || current === next) return;

  current.classList.add("is-leaving");

  window.setTimeout(() => {
    current.hidden = true;
    current.classList.remove("view--active", "is-leaving");

    next.hidden = false;
    next.classList.add("view--active", "is-entering");

    window.setTimeout(() => {
      next.classList.remove("is-entering");
    }, 650);

    history.replaceState(null, "", targetId === "home" ? "#home" : `#${targetId}`);
  }, 240);
};

window.addEventListener("load", () => {
  preloader.classList.add("is-hidden");

  const hashTarget = location.hash.replace("#", "");
  if (hashTarget === "secret") showView("secret");
});

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.target);
  });
});

document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
