/* Цели Яндекс.Метрики (счётчик 112275288) — события по кликам */
(function () {
  function goal(name) {
    if (typeof ym === 'function') {
      try { ym(112275288, 'reachGoal', name); } catch (e) {}
    }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var h = a.getAttribute('href') || '';
    if (h.indexOf('t.me/sport_us_art') !== -1) {
      if (a.classList.contains('sm-cta') || a.classList.contains('sm-mobile-cta')) goal('cta_menu');
      else if (a.closest && a.closest('#signup')) goal('zapis_footer');
      else if (a.closest && a.closest('.hero-actions')) goal('zapis_hero');
      else if (a.classList.contains('contact-button')) goal('cta_direction');
      else goal('cta_links');
    } else if (a.closest && a.closest('.cm-menu')) return; /* выбор канала считает contact-menu.js */
    else if (h.indexOf('vk.me/vanzep') !== -1) goal('vk_contact');
    else if (h.indexOf('tel:') === 0) goal('tel');
    else if (h.indexOf('mailto:') === 0) goal('mail');
    else if (h.indexOf('gymnastics.html') !== -1) goal('to_gymnastics');
    else if (h.indexOf('neuro.html') !== -1) goal('to_neuro');
    else if (h.indexOf('corporate-aikido.html') !== -1) goal('to_corporate');
    else if (h.indexOf('/links') !== -1) goal('to_links');
  }, true);
})();
