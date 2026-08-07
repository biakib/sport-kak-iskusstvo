if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetInitialScroll() {
  if (!window.location.hash) window.scrollTo(0, 0);
}

resetInitialScroll();
window.addEventListener("pageshow", resetInitialScroll);

const mentors = [
  {
    name: "Иван Егоров",
    role: "Мастер боевых искусств и один из главных популяризаторов айкидо в России и мире",
    image: "./images/ivan-new.png",
    facts: [
      "5 Дан Тэн Шин Айкидо",
      "Главный тренер Федерации айкидо России",
      "Ученик и официальный представитель Стивена Сигала по линии боевых искусств в РФ",
      "Один из основателей российского Универсального айкидо",
      "Создатель авторской оздоровительной гимнастики и энергопрактики",
      "Мастер спорта России по айкидо",
      "Мастер боевых искусств РСБИ",
      "Член сборной команды России по айкидо",
      "Победитель Кубка России по айкидо",
      "Участник Вторых Всемирных игр боевых искусств",
      "Обладатель премий НСАР «Торнадо» и ФАР «Снежный барс»",
      "Лектор Российского общества «Знание»",
      "Более 1 миллиона подписчиков в TikTok и 90 тысяч — в Instagram"
    ]
  },
  {
    name: "Николай Лунёв",
    role: "Специалист по работе с детьми и подростками. Эксперт программ адаптивного спорта",
    image: "./images/nikolay-new.png",
    facts: [
      "4 Дан Тэн Шин Айкидо",
      "Ученик школы Стивена Сигала",
      "Судья 2-й судейской категории по айкидо",
      "Председатель молодёжного совета регионального отделения Национального совета айкидо России по Краснодарскому краю",
      "Лидер молодёжного движения Красного Креста",
      "Выпускник 4 сезона «Голос Поколения» — образовательного проекта Росмолодёжи",
      "Статус «Лучший наставник» в проекте «Бизнес. Поколение» от «Росмолодёжь. Бизнес»",
      "Амбассадор «Росмолодёжь. Бизнес»"
    ]
  },
  {
    name: "Илья Бушманов",
    role: "Медиапродюсер, старший тренер Федерации Айкидо Чеченской Республики, AI-специалист",
    image: "./images/ilya-new.png",
    facts: [
      "2 Дан Айкидо Айкикай",
      "Судья 3-й всероссийской категории по айкидо",
      "Кандидат в мастера спорта РФ",
      "Член сборной Пермского края по айкидо",
      "Участник Вторых Всемирных игр боевых искусств",
      "Организатор фестивалей, тренингов, семинаров и других событий по айкидо в Пермском крае",
      "Лучший спортсмен филиала Российского союза боевых искусств в Пермском крае в 2019 и 2021 годах",
      "Участник Молодёжного добровольческого движения «Династия»"
    ]
  },
  {
    name: "Денис Круглов",
    role: "Оператор, сценарист и специалист медиацентра «Спорт как искусство»",
    image: "./images/denis-kruglov.png",
    facts: ["Оператор и сценарист", "Специалист медиацентра «Спорт как искусство»"]
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
    <button class="bio-close" type="button" aria-label="Закрыть биографию"><span aria-hidden="true"></span></button>
    <article class="bio-modal">
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
