/* Shared behaviour for products.html / product.html */
(function () {
  const LANG_KEY = 'bf-lang';

  function setLang(lang) {
    document.documentElement.lang = lang === 'tc' ? 'zh-HK' : 'en';
    document.querySelectorAll('[data-en][data-tc]').forEach(el => {
      el.textContent = lang === 'en' ? el.dataset.en : el.dataset.tc;
    });
    document.querySelectorAll('.lang-en').forEach(el => { el.style.display = lang === 'en' ? '' : 'none'; });
    document.querySelectorAll('.lang-tc').forEach(el => { el.style.display = lang === 'tc' ? '' : 'none'; });
    localStorage.setItem(LANG_KEY, lang);
    window.dispatchEvent(new CustomEvent('bf-langchange', { detail: lang }));
  }
  window.bfSetLang = setLang;
  window.bfLang = () => localStorage.getItem(LANG_KEY) || 'en';

  function init() {
    setLang(window.bfLang());

    const lt = document.getElementById('langToggle');
    if (lt) lt.addEventListener('click', () => setLang(window.bfLang() === 'tc' ? 'en' : 'tc'));

    const nav = document.getElementById('nav');
    if (nav) window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    const burger = document.getElementById('navBurger');
    const mm = document.getElementById('mobileMenu');
    if (burger && mm) {
      const toggle = open => {
        burger.classList.toggle('open', open);
        mm.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
        mm.setAttribute('aria-hidden', String(!open));
        document.body.classList.toggle('menu-open', open);
      };
      burger.addEventListener('click', () => toggle(!mm.classList.contains('open')));
      mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
    }

    startRotators();

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    const toTop = document.getElementById('toTop');
    if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Rotate the flavour photos inside any [data-rotate] (re-callable for injected cards)
  function startRotators(root) {
    (root || document).querySelectorAll('[data-rotate]:not([data-rotating])').forEach(box => {
      box.setAttribute('data-rotating', '1');
      let i = 0;
      setInterval(() => {
        const imgs = box.querySelectorAll('img');
        if (imgs.length < 2) return;
        imgs.forEach(im => im.classList.remove('is-active'));
        i = (i + 1) % imgs.length;
        imgs[i].classList.add('is-active');
      }, 3200);
    });
  }
  window.bfStartRotators = startRotators;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
