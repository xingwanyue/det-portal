declare global {
  interface Window {
    dataLayer: any;
    fbq: any;
    _fbq: any;
  }
}

const tidio = () => {
  const s = document.createElement('script');

  s.src = 'https://code.tidio.co/wruqp7llixvkwsdlbkcqpid2jhxwl0cx.js';
  document.body.appendChild(s);
};
const ga4 = () => {
  const s = document.createElement('script');

  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-BTN96NLD4D';
  s.onload = () => {
    window.dataLayer = window.dataLayer || ([] as any);
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('set', 'linker', {
      domains: ['detpractice.com', 'app.detpractice.com'],
    });
    gtag('js', new Date());

    gtag('config', 'G-BTN96NLD4D');
    gtag('event', 'conversion_event_website_visit', {
      event_timeout: 2000,
    });

    // 发送ads 访问成功事件
    gtag('config', 'AW-11500231799');
  };
  document.head.appendChild(s);
};
const fb = () => {
  const f = window;
  const b = document;
  const e = 'script';
  const v = 'https://connect.facebook.net/en_US/fbevents.js';
  let n: any;
  let t: any;
  let s: any;
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
  t.onload = () => {
    window.fbq('init', '1314035249495524');
    window.fbq('track', 'PageView');
  };
};

export const apendJs = () => {
  tidio();
  ga4();
  fb();
};
