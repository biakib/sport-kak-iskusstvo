/* FX: появление секций при скролле + плавный FAQ-аккордеон.
   Подключается defer на внутренних страницах. Уважает prefers-reduced-motion:
   без анимации классы не вешаются и контент виден сразу. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  /* 1. Reveal: секции main > section, кроме первой (герой всегда виден) */
  var sections = [].slice.call(document.querySelectorAll('main > section')).slice(1);
  var STAGGER = '.benefit-grid,.vs-cards,.kids-gallery,.more-grid,.formats,.faq-list,.direction-list,.format-grid,.mentor-grid,.cards-grid';

  function tagStagger(section) {
    section.querySelectorAll(STAGGER).forEach(function (grid) {
      if (grid.dataset.fxStagger) return;
      grid.dataset.fxStagger = '1';
      [].slice.call(grid.children).forEach(function (el, i) {
        el.style.setProperty('--fxd', (Math.min(i, 8) * 70) + 'ms');
      });
      grid.classList.add('fx-stagger');
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('fx-in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    sections.forEach(function (s) {
      s.classList.add('fx-reveal');
      tagStagger(s);
      io.observe(s);
    });
  }

  /* 2. FAQ: details раскрывается плавно, контент оборачивается в контейнер */
  document.querySelectorAll('details').forEach(function (d) {
    var sum = d.querySelector('summary');
    if (!sum || d.querySelector('.fx-faq-body')) return;
    var body = document.createElement('div');
    body.className = 'fx-faq-body';
    while (sum.nextSibling) body.appendChild(sum.nextSibling);
    d.appendChild(body);

    sum.addEventListener('click', function (e) {
      e.preventDefault();
      if (d.classList.contains('fx-busy')) return;
      d.classList.add('fx-busy');
      var opening = !d.hasAttribute('open');
      if (opening) {
        d.setAttribute('open', '');
        body.animate(
          [{ height: '0px', opacity: 0 }, { height: body.scrollHeight + 'px', opacity: 1 }],
          { duration: 260, easing: 'cubic-bezier(.16,1,.3,1)' }
        ).onfinish = function () { d.classList.remove('fx-busy'); };
      } else {
        var h = body.scrollHeight;
        body.animate(
          [{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }],
          { duration: 220, easing: 'ease' }
        ).onfinish = function () { d.removeAttribute('open'); d.classList.remove('fx-busy'); };
      }
    });
  });
})();
