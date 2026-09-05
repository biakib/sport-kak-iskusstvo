/* Единое меню сайта: один шаблон для всех страниц.
   Стили задаются инлайн через JS — их не может перекрыть ни один CSS страницы. */
(function () {
  var FONT_FACES =
    '@font-face{font-family:SmUnbounded;font-display:swap;src:url(/fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6xjx040.woff2)}' +
    '@font-face{font-family:SmUnbounded;font-weight:500;font-display:swap;src:url(/fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6yrx040.woff2)}' +
    '@font-face{font-family:SmUnbounded;font-weight:700;font-display:swap;src:url(/fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6__2040.woff2)}' +
    '@font-face{font-family:SmUnbounded;font-weight:800;font-display:swap;src:url(/fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b2040.woff2)}' +
    '@font-face{font-family:SmManrope;font-display:swap;src:url(/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.woff2)}' +
    '@font-face{font-family:SmManrope;font-weight:700;font-display:swap;src:url(/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.woff2)}' +
    '@font-face{font-family:SmManrope;font-weight:800;font-display:swap;src:url(/fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F.woff2)}';

  var CSS =
    '.sm-header{position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:9999!important;background:linear-gradient(#040605f0,#04060594)!important;-webkit-backdrop-filter:blur(16px)!important;backdrop-filter:blur(16px)!important}' +
    '.sm-nav{width:min(1160px,calc(100% - 48px))!important;margin:0 auto!important;height:82px!important;display:flex!important;justify-content:space-between!important;align-items:center!important;position:relative!important}' +
    '.sm-brand{display:flex!important;align-items:center!important;gap:8px!important;color:#e9e6dc!important;text-decoration:none!important;font-family:SmUnbounded,Unbounded,Manrope,Arial,sans-serif!important;font-size:15px!important;font-weight:750!important;line-height:.92!important;letter-spacing:.05em!important}' +
    '.sm-brand img{object-fit:contain!important;border-radius:7px!important;width:40px!important;height:40px!important}' +
    '.sm-links{display:flex!important;gap:26px!important}' +
    '.sm-links a{font-family:SmUnbounded,Unbounded,Manrope,Arial,sans-serif!important;color:#e9e6dc!important;text-decoration:none!important;font-size:11px!important;font-weight:500!important;letter-spacing:.09em!important;text-transform:uppercase!important;position:relative!important;padding-bottom:4px!important;transition:color .18s ease!important}' +
    '.sm-links a:after{content:""!important;position:absolute!important;left:0!important;right:100%!important;bottom:0!important;height:2px!important;background:#b8d63a!important;transition:right .22s ease!important}' +
    '.sm-links a:hover{color:#b8d63a!important}' +
    '.sm-links a:hover:after{right:0!important}' +
    '.sm-cta{background:#b8d63a!important;border-radius:999px!important;color:#101410!important;padding:11px 16px!important;box-shadow:0 6px 22px #b8d63a59!important;text-decoration:none!important;font-family:SmUnbounded,Unbounded,Manrope,Arial,sans-serif!important;font-size:15px!important;font-weight:750!important;letter-spacing:.05em!important;display:flex!important;align-items:center!important}' +
    '.sm-burger{display:none!important;color:#e9e6dc!important;cursor:pointer!important;background:linear-gradient(135deg,#ffffff16,#ffffff08)!important;border:1px solid #ffffff2e!important;border-radius:12px!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;gap:5px!important;width:44px!important;height:44px!important;padding:0!important;transition:border-color .2s ease,background .2s ease!important;-webkit-tap-highlight-color:transparent!important}' +
    '.sm-burger span{display:block!important;background:currentColor!important;border-radius:2px!important;width:18px!important;height:2px!important;transition:transform .25s ease!important}' +
    '.sm-burger:hover{border-color:#b8d63a59!important}' +
    '.sm-burger:active{border-color:#b8d63a80!important;background:linear-gradient(135deg,#b8d63a2e,#b8d63a14)!important}' +
    '.sm-burger[aria-expanded="true"] span:first-child{transform:translateY(3.5px) rotate(45deg)!important}' +
    '.sm-burger[aria-expanded="true"] span:last-child{transform:translateY(-3.5px) rotate(-45deg)!important}' +
    '.sm-mobile{display:none!important;overscroll-behavior:contain!important}' +
    '@media(max-width:1180px){.sm-links{gap:18px!important}.sm-links a{font-size:10px!important;letter-spacing:.06em!important}.sm-cta{font-size:13px!important;padding:10px 14px!important}}' +
    '@media(max-width:960px){.sm-cta{font-size:12px!important;padding:9px 12px!important}}' +
    '@media(max-width:760px){.sm-links{display:none!important}.sm-cta{display:none!important}.sm-burger{display:flex!important}.sm-mobile:not([hidden]){display:grid!important;gap:0!important;background:#0d100e!important;border-top:1px solid #ffffff1f!important;box-shadow:0 18px 36px #0000008a!important;max-height:calc(100dvh - 82px)!important;overflow-y:auto!important;padding:25px 16px 30px!important;position:fixed!important;top:82px!important;right:0!important;left:0!important;z-index:9998!important}' +
    '.sm-mobile>p{color:#b8d63a!important;text-transform:uppercase!important;letter-spacing:1.5px!important;margin:0 0 13px!important;font-size:10px!important;font-weight:800!important;font-family:SmManrope,Manrope,Arial,sans-serif!important}' +
    '.sm-mobile>a{color:#e9e6dc!important;border-top:1px solid #ffffff22!important;justify-content:space-between!important;align-items:center!important;padding:14px 0!important;font-family:SmUnbounded,Unbounded,Manrope,Arial,sans-serif!important;font-size:22px!important;font-weight:500!important;text-decoration:none!important;display:flex!important}' +
    '.sm-mobile>a.sm-mobile-cta{color:#101410!important;background:#b8d63a!important;border-radius:999px!important;margin-top:15px!important;padding:14px 18px!important;font-size:13px!important;font-weight:800!important;font-family:SmManrope,Manrope,Arial,sans-serif!important}' +
    '.sm-mobile>a .sm-num{color:#e73d76!important;font-family:SmManrope,Manrope,Arial,sans-serif!important;font-size:10px!important;font-weight:800!important}}';

  var style = document.createElement('style');
  style.textContent = FONT_FACES + CSS;
  document.head.appendChild(style);

  var ITEMS = [
    ['/#project', 'Проект'],
    ['/#directions', 'Направления'],
    ['/#team', 'Наставники'],
    ['/#events', 'События'],
    ['/links', 'Площадки']
  ];

  var header = document.createElement('header');
  header.className = 'sm-header';

  var linksHtml = ITEMS.map(function (it) {
    return '<a href="' + it[0] + '">' + it[1] + '</a>';
  }).join('');
  var mobileHtml = ITEMS.map(function (it) {
    return '<a href="' + it[0] + '">' + it[1] + '</a>';
  }).join('');

  header.innerHTML =
    '<nav class="sm-nav" aria-label="Главная навигация">' +
    '<a class="sm-brand" href="/"><img src="/stork-symbol-full.jpg" alt=""/> <span>СПОРТ<br/>КАК ИСКУССТВО</span></a>' +
    '<div class="sm-links">' + linksHtml + '</div>' +
    '<a class="sm-cta" href="https://t.me/sport_us_art">Связаться с нами</a>' +
    '<button class="sm-burger" type="button" aria-controls="sm-mobile-nav" aria-expanded="false" aria-label="Открыть меню"><span></span><span></span></button>' +
    '</nav>' +
    '<div class="sm-mobile" id="sm-mobile-nav" hidden>' +
    '<p>Навигация</p>' + mobileHtml +
    '<a class="sm-mobile-cta" href="https://t.me/sport_us_art">Связаться с нами</a>' +
    '</div>';

  document.body.insertBefore(header, document.body.firstChild);
  document.body.style.paddingTop = '82px';

  var burger = header.querySelector('.sm-burger');
  var mobile = header.querySelector('.sm-mobile');
  function closeMenu() {
    if (!burger || !mobile) return;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    mobile.hidden = true;
  }
  if (burger && mobile) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = burger.getAttribute('aria-expanded') !== 'true';
      if (!willOpen) return closeMenu();
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      mobile.hidden = false;
    });
    mobile.querySelectorAll('a').forEach(function (l) { l.addEventListener('click', closeMenu); });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.sm-mobile,.sm-burger')) closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }
})();
