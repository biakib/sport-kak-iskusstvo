/* Выборщик канала связи: клик по любой CTA открывает список вариантов.
   Каналы задаются здесь — добавление Max = одна строка в CHANNELS. */
(function () {
  var CHANNELS = [
    { name: 'Telegram', color: '#229ED9', desc: 'Быстрый ответ в мессенджере', goal: 'ch_telegram',
      href: 'https://t.me/sport_us_art', external: true,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 4 3.9 10.7c-1.1.4-1.1 1.1-.2 1.4l4.4 1.4 1.7 5.1c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.1-2 4.4 3.2c.8.5 1.4.3 1.6-.8L22.6 5c.3-1.3-.5-1.8-1.6-1zM9 13.2l9.2-5.8c.5-.3.9-.1.5.2l-7.5 6.8-.3 3.2L9 13.2z"/></svg>' },
    { name: 'Max', color: '#7B5CFA', desc: 'Мессенджер MAX', goal: 'ch_max',
      href: 'https://max.ru/u/f9LHodD0cOL-Pymkp-QZsqorJIwgJDLQhTa_FSnJmyNq6L3uGOlAmyFiP3k', external: true,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 18V6h2.6l5.4 7.2L17.4 6H20v12h-2.6v-7.2l-4 5.4h-1.6l-4-5.4V18H4z"/></svg>' },
    { name: 'ВКонтакте', color: '#0077FF', desc: 'Написать Ивану', goal: 'ch_vk',
      href: 'https://vk.me/vanzep', external: true,
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 7.7C3.1 14.4 6.5 18.4 12.5 18.4h.4v-3.8c2.1.2 3.7 1.7 4.3 3.8h3c-.8-2.9-2.9-4.5-4.2-5.1 1.3-.8 3.1-2.7 3.5-5.6h-2.7c-.5 2.3-2.1 4.3-3.9 4.5V7.7h-2.8v7.8c-1.8-.4-4-2.5-5-5.8H3z"/></svg>' },
    { name: 'Позвонить', color: '#34C759', desc: '+7 916 465-11-96', goal: 'ch_phone',
      href: 'tel:+79164651196',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.21c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' },
    { name: 'Почта', color: '#efece2', fg: '#101410', desc: 'vanzep@yandex.ru', goal: 'ch_mail',
      href: 'mailto:vanzep@yandex.ru?subject=%D0%97%D0%B0%D0%BF%D1%80%D0%BE%D1%81%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>' }
  ];

  var CSS =
    '.cm-overlay{position:fixed;inset:0;z-index:10000;background:#040605b8;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;align-items:flex-end;justify-content:center;padding:0}' +
    '@media(min-width:640px){.cm-overlay{align-items:center;padding:24px}}' +
    '.cm-menu{width:100%;max-width:400px;background:#141a14;border:1px solid #ffffff1f;border-radius:20px 20px 0 0;padding:20px 18px 22px;box-shadow:0 24px 60px #000000a6;transform:translateY(24px);opacity:0;transition:transform .22s ease,opacity .22s ease}' +
    '@media(min-width:640px){.cm-menu{border-radius:20px}}' +
    '.cm-overlay.cm-open .cm-menu{transform:translateY(0);opacity:1}' +
    '.cm-title{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1.4px;color:#b8d63a;margin:0 0 6px;text-align:center}' +
    '.cm-sub{color:#b4bab0;font-size:13px;line-height:1.4;margin:0 0 14px;text-align:center}' +
    '.cm-opt{display:flex;align-items:center;gap:13px;text-decoration:none;color:#efece2;border:1px solid #ffffff1f;border-radius:14px;padding:12px 14px;margin-top:8px;background:#1a211a;transition:border-color .16s ease,transform .16s ease}' +
    '.cm-opt:hover,.cm-opt:focus-visible{border-color:#b8d63a;transform:translateY(-1px)}' +
    '.cm-opt .cm-ico{flex:none;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;color:#fff}' +
    '.cm-opt .cm-ico svg{width:19px;height:19px}' +
    '.cm-opt b{display:block;font-size:14.5px;font-weight:800}' +
    '.cm-opt small{display:block;color:#b4bab0;font-size:12px;margin-top:2px}' +
    '.cm-opt .cm-arr{margin-left:auto;color:#c94d72;font-weight:800;font-style:normal}' +
    '.cm-x{position:absolute;top:10px;right:12px;background:none;border:0;color:#b4bab0;font-size:22px;line-height:1;cursor:pointer;padding:6px}' +
    '.cm-menu{position:relative;outline:none}' +
    '.cm-overlay[hidden]{display:none}' +
    '@media (prefers-reduced-motion: reduce){.cm-menu{transition:none;transform:none;opacity:1}}';

  var overlay, lastTrigger;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'cm-overlay';
    overlay.hidden = true;
    var html = '<div class="cm-menu" tabindex="-1" role="dialog" aria-modal="true" aria-label="Связаться с нами">' +
      '<button class="cm-x" type="button" aria-label="Закрыть">×</button>' +
      '<p class="cm-title">Связаться с нами</p>' +
      '<p class="cm-sub">Выберите удобный способ — ответим быстро</p>';
    CHANNELS.forEach(function (c) {
      html += '<a class="cm-opt" href="' + c.href + '"' + (c.external ? ' target="_blank" rel="noreferrer"' : '') + ' data-goal="' + c.goal + '">' +
        '<span class="cm-ico" style="background:' + c.color + ';' + (c.fg ? 'color:' + c.fg + ';' : '') + '">' + c.icon + '</span>' +
        '<span><b>' + c.name + '</b><small>' + c.desc + '</small></span>' +
        '<i class="cm-arr">→</i></a>';
    });
    html += '</div>';
    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    overlay.querySelector('.cm-x').addEventListener('click', close);
    overlay.querySelectorAll('.cm-opt').forEach(function (a) {
      a.addEventListener('click', function () {
        if (typeof ym === 'function') { try { ym(112275288, 'reachGoal', a.getAttribute('data-goal')); } catch (e) {} }
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.hidden) close();
    });
  }

  function open(trigger) {
    if (!overlay) build();
    lastTrigger = trigger || null;
    var t = trigger ? (trigger.textContent || '').replace(/\s+/g, ' ').trim() : '';
    overlay.querySelector('.cm-title').textContent = t || 'Связаться с нами';
    if (trigger && trigger.classList.contains('sm-mobile-cta')) {
      var burger = document.querySelector('.sm-burger');
      if (burger && burger.getAttribute('aria-expanded') === 'true') burger.click();
    }
    overlay.hidden = false;
    requestAnimationFrame(function () { overlay.classList.add('cm-open'); });
    var menu = overlay.querySelector('.cm-menu');
    if (menu) setTimeout(function () { menu.focus(); }, 60);
    document.addEventListener('keydown', trapTab, true);
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('cm-open');
    document.removeEventListener('keydown', trapTab, true);
    setTimeout(function () { overlay.hidden = true; }, 200);
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  }

  function trapTab(e) {
    if (e.key !== 'Tab' || !overlay || overlay.hidden) return;
    var items = overlay.querySelectorAll('a,button');
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function init() {
    var SELECTOR = '.sm-cta,.sm-mobile-cta,.hero-actions .ghost,.contact-button,.cta .primary,#signup .button';
    document.querySelectorAll(SELECTOR).forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        open(el);
      });
    });
  }

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
