const mentors = [
  {
    name: "Иван Егоров",
    role: "Мастер боевых искусств и один из главных популяризаторов айкидо в России и мире",
    image: "./images/ivan-new.png",
    facts: [
      "5 Дан Тэн Шин Айкидо",
      "Вице-Президент Федерации Айкидо Чеченской Республики",
      "Главный тренер Федерации айкидо России",
      "Ученик и официальный представитель Стивена Сигала по линии боевых искусств в РФ",
      "Один из основателей российского Универсального айкидо",
      "Создатель авторской оздоровительной гимнастики и энергопрактики",
      "Мастер спорта России по айкидо",
      "Кандидат в мастера спорта России по теннису",
      "Мастер боевых искусств РСБИ",
      "Член сборной команды России по айкидо",
      "Победитель Кубка России по айкидо",
      "Участник Вторых Всемирных игр боевых искусств",
      "Обладатель национальной премии Национального Совета Айкидо России «Торнадо» за популяризацию айкидо в медиапространстве России",
      "Обладатель премии Федерации Айкидо России «Снежный барс»",
      "Лектор Российского общества «Знание»",
      "Более 1,4 миллиона подписчиков в TikTok и 85 тысяч — в Instagram"
    ]
  },
  {
    name: "Николай Лунёв",
    role: "Специалист по работе с детьми и подростками. Эксперт программ адаптивного спорта",
    image: "./images/nikolay-new.png",
    facts: [
      "4 Дан Тэн Шин Айкидо",
      "Главный тренер Федерации Айкидо Чеченской республики",
      "Ученик школы Стивена Сигала",
      "Спортивный судья второй судейской категории по айкидо",
      "Председатель молодёжного совета регионального отделения Национального совета айкидо России по Краснодарскому краю",
      "Лидер молодёжного движения Красного Креста",
      "Выпускник 4 сезона «Голос Поколения» — образовательного проекта Росмолодёжи",
      "Статус «Лучший наставник» в проекте «Бизнес. Поколение» от «Росмолодёжь. Бизнес»",
      "Амбассадор «Росмолодёжь. Бизнес»"
    ]
  },
  {
    name: "Илья Бушманов",
    role: "Медиапродюсер, старший тренер Федерации Айкидо Чеченской Республики, основатель PLOHOSPAL Production",
    image: "./images/ilya-new.png",
    facts: [
      "2 Дан Айкидо Айкикай",
      "Судья 3-й всероссийской категории по айкидо",
      "Кандидат в мастера спорта РФ",
      "Член сборной Пермского края по айкидо",
      "Участник I и II Международных игр по Айкидо",
      "Организатор фестивалей, тренингов, семинаров и других событий по айкидо в Пермском крае",
      "Лучший спортсмен филиала Российского союза боевых искусств в Пермском крае в 2019 и 2021 годах"
    ]
  },
  {
    name: "Денис Круглов",
    role: "Оператор-постановщик / режиссёр / сценарист / саунд-дизайнер",
    image: "./images/denis-kruglov.png",
    facts: [
      "Специалист по интеграции AI-технологий в медиа и кинопроизводство",
      "Обладатель государственной поддержки в рамках развития видеопроизводства",
      "Оператор и режиссёр продающих роликов, визуальных концепций и раскадровок для брендов в социальных сетях",
      "Саунд-дизайнер уникального музыкального сопровождения для видео",
      "Создатель тизера к новому фильму «Человек-амфибия» для контент-студии «Юг.Кино» (полный цикл производства)",
      "Участник летней школы 2026 Арт-кластера «Таврида» по направлению «ИИ в кино»",
      "Видеомаркетолог, работающий с психологией зрителя и особенностями аудитории (каждый сценарий под конкретную задачу)"
    ]
  }
];

function closeBiography() {
  document.querySelector(".bio-backdrop")?.remove();
  document.body.style.overflow = "";
}

function openBiography(mentor) {
  closeBiography();
  const dialog = document.createElement("div");
  dialog.className = "bio-backdrop";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", `Биография: ${mentor.name}`);
  dialog.innerHTML = `
    <article class="bio-modal">
      <button class="bio-close" type="button" aria-label="Закрыть биографию"><span aria-hidden="true"></span></button>
      <img src="${mentor.image}" alt="${mentor.name}">
      <div class="bio-content">
        <p class="eyebrow">Наставник проекта</p>
        <h2>${mentor.name}</h2>
        <p class="bio-role">${mentor.role}</p>
        <ul>${mentor.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
      </div>
    </article>`;
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest(".bio-close")) closeBiography();
  });
  document.addEventListener("keydown", function onKeydown(event) {
    if (event.key !== "Escape") return;
    closeBiography();
    document.removeEventListener("keydown", onKeydown);
  });
  document.body.append(dialog);
  document.body.style.overflow = "hidden";
  dialog.querySelector(".bio-close").focus();
}

document.querySelectorAll(".mentor").forEach((button, index) => {
  button.type = "button";
  button.addEventListener("click", () => openBiography(mentors[index]));
});

const motionPrinciples = {
  attention: {
    title: "Внимание",
    description: "Замечать тело, партнёра и момент — первый шаг к точному движению и спокойному решению.",
  },
  balance: {
    title: "Баланс",
    description: "Находить устойчивость в способности мягко отвечать на перемены.",
  },
  creation: {
    title: "Созидание",
    description: "Превращать энергию практики в идеи, отношения, события и среду, в которой хочется расти.",
  },
};

const motionDetail = document.querySelector("#motion-detail");
document.querySelectorAll(".motion-point").forEach((button) => {
  button.addEventListener("click", () => {
    const principle = motionPrinciples[button.dataset.motion];
    if (!principle || !motionDetail) return;

    document.querySelectorAll(".motion-point").forEach((point) => {
      const active = point === button;
      point.classList.toggle("is-active", active);
      point.setAttribute("aria-pressed", String(active));
    });

    motionDetail.innerHTML = `<h3>${principle.title}</h3><p>${principle.description}</p>`;
  });
});

const progress = document.createElement("div");
progress.className = "page-progress";
progress.setAttribute("aria-hidden", "true");
document.body.append(progress);

function updateProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, progressValue))})`;
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

function closeCalendarMenus(except) {
  document.querySelectorAll(".calendar-menu").forEach((menu) => {
    if (menu === except) return;
    const trigger = menu.querySelector(".calendar-trigger");
    const options = menu.querySelector(".calendar-options");
    trigger?.setAttribute("aria-expanded", "false");
    if (options) options.hidden = true;
  });
}

document.querySelectorAll(".calendar-menu").forEach((menu) => {
  const trigger = menu.querySelector(".calendar-trigger");
  const options = menu.querySelector(".calendar-options");
  trigger?.addEventListener("click", () => {
    const willOpen = trigger.getAttribute("aria-expanded") !== "true";
    closeCalendarMenus(menu);
    trigger.setAttribute("aria-expanded", String(willOpen));
    if (options) options.hidden = !willOpen;
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".calendar-menu")) closeCalendarMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCalendarMenus();
});

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function closeMobileMenu() {
  if (!mobileMenuToggle || !mobileNav) return;
  mobileMenuToggle.setAttribute("aria-expanded", "false");
  mobileMenuToggle.setAttribute("aria-label", "Открыть меню");
  mobileNav.hidden = true;
}

mobileMenuToggle?.addEventListener("click", () => {
  const willOpen = mobileMenuToggle.getAttribute("aria-expanded") !== "true";
  if (!willOpen) return closeMobileMenu();
  mobileMenuToggle.setAttribute("aria-expanded", "true");
  mobileMenuToggle.setAttribute("aria-label", "Закрыть меню");
  mobileNav.hidden = false;
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".mobile-nav, .mobile-menu-toggle")) closeMobileMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMobileMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});

const revealTargets = [...document.querySelectorAll("main > section")].slice(1);
revealTargets.forEach((section) => section.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  revealTargets.forEach((section) => observer.observe(section));
} else {
  revealTargets.forEach((section) => section.classList.add("is-visible"));
}

// Якоря из других страниц: повторяем скролл после полной загрузки,
// иначе поздние картинки сдвигают макет и браузер остаётся наверху.
function scrollToHash() {
  if (!location.hash || location.hash === "#top") return;
  const target = document.querySelector(location.hash);
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: Math.max(0, y), behavior: "instant" });
}
window.addEventListener("load", scrollToHash);
window.addEventListener("hashchange", scrollToHash);
