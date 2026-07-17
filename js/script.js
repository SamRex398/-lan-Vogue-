const hero = document.querySelector(".hero");

const images = ["images/hero1.png", "images/hero2.png", "images/hero3.png"];

let current = 0;

function changeHero() {
  current++;

  if (current >= images.length) {
    current = 0;
  }

  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${images[current]}')`;
}

setInterval(changeHero, 4000);

//   PRODUCT SEARCH

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
      const text = product.innerText.toLowerCase();

      product.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

//TRUSTEES MODAL

const modal = document.getElementById("profileModal");

if (modal) {
  const buttons = document.querySelectorAll(".profile-btn");

  const close = document.querySelector(".close");

  buttons.forEach((button) => {
    button.onclick = () => {
      document.getElementById("modalName").innerHTML = button.dataset.name;

      document.getElementById("modalRole").innerHTML = button.dataset.role;

      document.getElementById("modalInfo").innerHTML = button.dataset.info;

      modal.style.display = "flex";
    };
  });

  close.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}

//APPOINTMENT FORM

const form = document.getElementById("appointmentForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const date = document.getElementById("date").value;

    const service = document.getElementById("service").value;

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      date === "" ||
      service === ""
    ) {
      alert("Please complete all required fields.");

      return;
    }

    alert(
      "Thank you, " +
        name +
        "! Your appointment request has been received. Our fashion consultant will contact you shortly.",
    );

    form.reset();
  });
}

//EVENT COUNTDOWN

const days = document.getElementById("days");

if (days) {
  const targetDate = new Date("August 15, 2026 10:00:00").getTime();

  function countdown() {
    const now = new Date().getTime();

    const gap = targetDate - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));

    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((gap % (1000 * 60)) / 1000);

    days.innerHTML = d;

    document.getElementById("hours").innerHTML = h;

    document.getElementById("minutes").innerHTML = m;

    document.getElementById("seconds").innerHTML = s;
  }

  countdown();

  setInterval(countdown, 1000);
}

// ACTIVE NAVIGATION

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("active");
  }
});

/*==========================
SCROLL ANIMATION
==========================*/

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fadeElements.forEach((el) => observer.observe(el));

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    const diameter = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = diameter + "px";

    circle.style.left = e.offsetX - diameter / 2 + "px";

    circle.style.top = e.offsetY - diameter / 2 + "px";

    circle.classList.add("ripple");

    const ripple = this.querySelector(".ripple");

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });
});
