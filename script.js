// sidebar
const openBtn = document.querySelector(".js-btn-open");
const sidebar = document.querySelector(".js-sidebar");
const body = document.querySelector(".body");
const backdrop = document.querySelector(".header-backdrop");

const toggleMenu = () => {
  body.classList.toggle("sidebar-mini");
  if (window.screen.width < 1024 || window.screen.height < 750) {
    body.classList.toggle("fixed");
    backdrop.classList.toggle("is-open");
  }
};

openBtn.addEventListener("click", toggleMenu);
backdrop.addEventListener("click", toggleMenu);

//slider

const swiper = new Swiper(".slider-block", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const myChart = document.getElementById("myChart");
if (myChart) {
  const ctx = myChart.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 130);
  gradient.addColorStop(0, "rgba(251,212,75,1)");
  gradient.addColorStop(1, "rgba(253,251,245,1)");

  Chart.defaults.font.size = 14;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: [3, 6, 4, 5, 7, 6, 8],
          backgroundColor: gradient,
          borderColor: "rgba(251,212,75, 1)",
          borderWidth: 2,
          pointRadius: 1,
          cubicInterpolationMode: "monotone",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += context.parsed.y + " Hours";
              }
              return label;
            },
          },
          backgroundColor: "#fff",
          titleColor: "#3d3b36",
          titleFont: {
            size: 10,
            weight: "300",
          },
          bodyColor: "#282003",
          bodyFont: {
            size: 13,
            weight: "bold",
          },
          borderColor: "#efece1",
          borderWidth: 1,
          caretSize: 5,
          displayColors: false,
          titleAlign: "center",
          bodyAlign: "center",
        },
      },
      fill: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          ticks: {
            stepSize: 2,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
}

const languageSelect = document.querySelector(".language-select");

function checkBodyClass() {
  return body.classList.contains("sidebar-mini");
}

const languageMenuList = document.querySelector(
  ".language-select + .dropdown-menu-item"
);

languageSelect.addEventListener("click", handleLangSelect);
languageMenuList.addEventListener("click", handleLangListClick);

function handleLangSelect(e) {
  e.currentTarget.parentElement.classList.toggle("show");
}

function handleLangListClick(e) {
  e.preventDefault();
  e.currentTarget.parentElement.querySelector(".lang-selected").innerHTML =
    e.target.text;
  e.currentTarget.parentElement.classList.remove("show");
}
if (window.screen.height < 750 || checkBodyClass()) {
  languageSelect.parentElement.classList.remove("show");
}

const settingsLink = document.querySelector(".settings__item");

settingsLink.addEventListener("click", handleSettingOpen);

function handleSettingOpen(e) {
  e.preventDefault();
  e.currentTarget.classList.toggle("open");
}

const tabList = document.querySelectorAll(".tab-content .tab-pane");
if (tabList.length) {
  tabList[0].classList.add("show", "active");
}
