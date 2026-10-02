'use strict';
/* ========== 1. DICCIONARIO DE TRADUCCIONES ========== */
const I18N = {
  es: {nav1:'Inicio',nav2:'El Clan',nav3:'Clases',nav4:'Planes',nav5:'Contacto',cta:'Clase de prueba',ctaS:'Prueba',hrsT:'Horarios',follow:'Síguenos',
    h1:'FORJÁ TU CARÁCTER EN EL RING',sub:'Disciplina, fuerza, respeto y resultados. Boxeo y entrenamiento funcional para quienes quieren cambiar.',seeHours:'Ver horarios',clP:'Elegí tu disciplina y mirá cuándo entrenamos.',seePlans:'Ver planes',
    clanT:'El clan de los Titanes',clanP:'Somos un equipo que entrena duro y se cuida entre sí. Aquí se llega para mejorar, sin importar el punto de partida.',
    v1:'Disciplina',v1d:'Constancia todos los días, con o sin ganas.',v2:'Fuerza',v2d:'Cuerpo y mente listos para el siguiente asalto.',v3:'Respeto',v3d:'Al compañero, al entrenador y al oficio.',v4:'Resultados',v4d:'Progreso medible, semana a semana.',
    clT:'Clases y horarios',t1:'Boxeo recreativo',t1d:'Técnica, cardio y diversión sin contacto obligatorio.',t2:'Sparring competitivo',t2d:'Combate controlado para quienes quieren competir.',t3:'Entrenamiento funcional',t3d:'Circuitos de fuerza, potencia y resistencia.',t4:'Preparación física',t4d:'Plan específico para tu deporte o tu meta.',
    day:'Día',time:'Horario',d1:'Lun · Mié · Vie',d2:'Mar · Jue',d3:'Sábado',
    plT:'Elegí tu plan',mo:'mes',join:'Unirme',p1:'Titán Inicial',p1a:'3 clases por semana',p1b:'Acceso a boxeo recreativo',p1c:'Casillero incluido',
    p2:'Titán Elite',p2a:'Clases ilimitadas',p2b:'Boxeo y funcional',p2c:'Evaluación física mensual',
    p3:'Titán Competidor',p3a:'Todo lo de Elite',p3b:'Sparring y preparación al combate',p3c:'Entrenador personal 2 veces/semana',
    ctT:'Reserva tu clase de prueba',fName:'Nombre',fEmail:'Correo electrónico',fPhone:'Teléfono (opcional)',fInt:'Me interesa',fMsg:'Mensaje',send:'Enviar mensaje',
    where:'Dónde estamos',hours:'Lun a Vie 7:00 a 22:00 · Sáb 9:00 a 13:00',rights:'Todos los derechos reservados',
    eName:'Escribe un nombre de 2 a 60 letras.',eEmail:'Introduce un correo válido.',ePhone:'Usa solo números, +, espacios o guiones (7-20).',eMsg:'El mensaje debe tener entre 10 y 600 caracteres.',
    ok:'¡Mensaje enviado! Te contactaremos pronto.',fail:'No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.',wait:'Espera unos segundos antes de reenviar.',sending:'Enviando…'},
  en: {nav1:'Home',nav2:'The Clan',nav3:'Classes',nav4:'Plans',nav5:'Contact',cta:'Free trial class',ctaS:'Trial',hrsT:'Opening hours',follow:'Follow us',
    h1:'FORGE YOUR CHARACTER IN THE RING',sub:'Discipline, strength, respect and results. Boxing and functional training for people who want to change.',seeHours:'See schedule',clP:'Pick a discipline and see when we train.',seePlans:'See plans',
    clanT:'The Titans clan',clanP:'We are a team that trains hard and looks out for each other. You come here to improve, wherever you start.',
    v1:'Discipline',v1d:'Showing up every day, motivated or not.',v2:'Strength',v2d:'Body and mind ready for the next round.',v3:'Respect',v3d:'For teammates, coaches and the craft.',v4:'Results',v4d:'Measurable progress, week after week.',
    clT:'Classes & schedule',t1:'Recreational boxing',t1d:'Technique, cardio and fun with no required contact.',t2:'Competitive sparring',t2d:'Controlled fighting for those who want to compete.',t3:'Functional training',t3d:'Strength, power and endurance circuits.',t4:'Physical preparation',t4d:'A specific plan for your sport or goal.',
    day:'Day',time:'Time',d1:'Mon · Wed · Fri',d2:'Tue · Thu',d3:'Saturday',
    plT:'Choose your plan',mo:'mo',join:'Join now',p1:'Titan Starter',p1a:'3 classes per week',p1b:'Recreational boxing access',p1c:'Locker included',
    p2:'Titan Elite',p2a:'Unlimited classes',p2b:'Boxing and functional',p2c:'Monthly fitness assessment',
    p3:'Titan Competitor',p3a:'Everything in Elite',p3b:'Sparring and fight preparation',p3c:'Personal coach twice a week',
    ctT:'Book your trial class',fName:'Name',fEmail:'Email',fPhone:'Phone (optional)',fInt:"I'm interested in",fMsg:'Message',send:'Send message',
    where:'Find us',hours:'Mon–Fri 7am–10pm · Sat 9am–1pm',rights:'All rights reserved',
    eName:'Enter a name of 2 to 60 letters.',eEmail:'Enter a valid email.',ePhone:'Use only digits, +, spaces or dashes (7-20).',eMsg:'Message must be 10 to 600 characters.',
    ok:'Message sent! We will contact you soon.',fail:'Could not send. Try again or message us on WhatsApp.',wait:'Please wait a few seconds before resending.',sending:'Sending…'},
  pt: {nav1:'Início',nav2:'O Clã',nav3:'Aulas',nav4:'Planos',nav5:'Contato',cta:'Aula experimental',ctaS:'Teste',hrsT:'Horários',follow:'Siga-nos',
    h1:'FORJE SEU CARÁTER NO RING',sub:'Disciplina, força, respeito e resultados. Boxe e treino funcional para quem quer mudar.',seeHours:'Ver horários',clP:'Escolha sua modalidade e veja quando treinamos.',seePlans:'Ver planos',
    clanT:'O clã dos Titãs',clanP:'Somos uma equipe que treina forte e cuida um do outro. Você vem para evoluir, não importa de onde parte.',
    v1:'Disciplina',v1d:'Constância todos os dias, com ou sem vontade.',v2:'Força',v2d:'Corpo e mente prontos para o próximo round.',v3:'Respeito',v3d:'Pelos colegas, pelo treinador e pelo ofício.',v4:'Resultados',v4d:'Progresso mensurável, semana após semana.',
    clT:'Aulas e horários',t1:'Boxe recreativo',t1d:'Técnica, cardio e diversão sem contato obrigatório.',t2:'Sparring competitivo',t2d:'Combate controlado para quem quer competir.',t3:'Treino funcional',t3d:'Circuitos de força, potência e resistência.',t4:'Preparação física',t4d:'Plano específico para seu esporte ou objetivo.',
    day:'Dia',time:'Horário',d1:'Seg · Qua · Sex',d2:'Ter · Qui',d3:'Sábado',
    plT:'Escolha seu plano',mo:'mês',join:'Quero entrar',p1:'Titã Inicial',p1a:'3 aulas por semana',p1b:'Acesso ao boxe recreativo',p1c:'Armário incluído',
    p2:'Titã Elite',p2a:'Aulas ilimitadas',p2b:'Boxe e funcional',p2c:'Avaliação física mensal',
    p3:'Titã Competidor',p3a:'Tudo do Elite',p3b:'Sparring e preparação para lutas',p3c:'Personal 2 vezes por semana',
    ctT:'Reserve sua aula experimental',fName:'Nome',fEmail:'E-mail',fPhone:'Telefone (opcional)',fInt:'Tenho interesse em',fMsg:'Mensagem',send:'Enviar mensagem',
    where:'Onde estamos',hours:'Seg a Sex 7h–22h · Sáb 9h–13h',rights:'Todos os direitos reservados',
    eName:'Digite um nome de 2 a 60 letras.',eEmail:'Digite um e-mail válido.',ePhone:'Use apenas números, +, espaços ou hífens (7-20).',eMsg:'A mensagem deve ter de 10 a 600 caracteres.',
    ok:'Mensagem enviada! Entraremos em contato em breve.',fail:'Falha no envio. Tente de novo ou fale pelo WhatsApp.',wait:'Aguarde alguns segundos para reenviar.',sending:'Enviando…'}
};
/* Horarios por disciplina: [índice de día 0=Lun…5=Sáb, franja] */
const SCHEDULE = [
  [[0,'19:00 – 20:00'],[2,'19:00 – 20:00'],[4,'19:00 – 20:00'],[5,'10:00 – 11:00']],
  [[1,'20:00 – 21:30'],[3,'20:00 – 21:30'],[5,'11:30 – 13:00']],
  [[0,'07:00 – 08:00'],[1,'18:30 – 19:30'],[2,'07:00 – 08:00'],[3,'18:30 – 19:30'],[4,'07:00 – 08:00']],
  [[1,'07:00 – 08:30'],[3,'07:00 – 08:30'],[5,'09:00 – 10:30']]
];
const DAYS = {es:['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],en:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],pt:['Segunda','Terça','Quarta','Quinta','Sexta','Sábado']};
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
let lang = I18N[store.get('lang')] ? store.get('lang') : (navigator.language || 'es').slice(0, 2);
if (!I18N[lang]) lang = 'es';
let tab = 0;
const t = k => I18N[lang][k] || k;

/* ========== 2. IDIOMA (textContent = seguro frente a XSS) ========== */
function renderTabs() {
  const box = $('#tabs'); box.replaceChildren();
  [1, 2, 3, 4].forEach((n, i) => {
    const b = document.createElement('button');
    b.className = 'tab'; b.type = 'button'; b.role = 'tab';
    b.setAttribute('aria-selected', String(i === tab)); b.textContent = t('t' + n);
    b.addEventListener('click', () => { tab = i; renderTabs(); });
    box.append(b);
  });
  const p = $('#panel'); p.replaceChildren();
  const info = document.createElement('div'), h = document.createElement('h3'), d = document.createElement('p');
  h.textContent = t('t' + (tab + 1)); d.textContent = t('t' + (tab + 1) + 'd'); info.append(h, d);
  const tb = document.createElement('table'), head = tb.insertRow();
  [t('day'), t('time')].forEach(x => { const th = document.createElement('th'); th.textContent = x; head.append(th); });
  SCHEDULE[tab].forEach(([di, tm]) => { const r = tb.insertRow(); r.insertCell().textContent = DAYS[lang][di]; r.insertCell().textContent = tm; });
  p.append(info, tb); p.classList.remove('panel'); void p.offsetWidth; p.classList.add('panel');
}
function setLang(l) {
  lang = l; store.set('lang', l); document.documentElement.lang = l;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $('#lang').value = l; renderTabs();
}
$('#lang').addEventListener('change', e => setLang(I18N[e.target.value] ? e.target.value : 'es'));

/* ========== 3. TEMA: fijo oscuro industrial ========== */
document.documentElement.dataset.theme = 'dark';

/* ========== 4. NAVBAR: hamburguesa, enlace activo, parallax ========== */
const burger = $('#burger'), menu = $('#menu');
burger.addEventListener('click', () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
$$('#menu a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
const links = $$('#menu a.lnk');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
}), { threshold: .5 });
$$('main section').forEach(s => spy.observe(s));
const bg = $('.hero-bg'), calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!calm) addEventListener('scroll', () => { bg.style.transform = `translateY(${Math.min(scrollY, 900) * .3}px) scale(1.05)`; }, { passive: true });

/* ========== 5. EFECTO TILT 3D ========== */
if (!calm) $$('.tilt').forEach(c => {
  c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
  });
  c.addEventListener('pointerleave', () => { c.style.transform = ''; });
});

/* ========== 6. FORMULARIO: sanitización, validación y envío ========== */
const ENDPOINT = 'https://formspree.io/f/TU_ID_FORMSPREE'; // <-- sustituir
const clean = s => String(s).normalize('NFC').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim();
const rules = {
  name: v => /^[\p{L}][\p{L}\s'.-]{1,59}$/u.test(v) ? '' : 'eName',
  email: v => v.length <= 100 && /^[^\s@<>()]+@[^\s@<>()]+\.[^\s@<>()]{2,}$/.test(v) ? '' : 'eEmail',
  phone: v => !v || /^[+\d\s()-]{7,20}$/.test(v) ? '' : 'ePhone',
  msg: v => v.length >= 10 && v.length <= 600 ? '' : 'eMsg'
};
const form = $('#form'), status = $('#status');
let last = 0;
form.addEventListener('submit', async e => {
  e.preventDefault(); status.textContent = '';
  if (form.website.value) return;                       // honeypot anti-bots
  if (Date.now() - last < 30000) { status.textContent = t('wait'); return; }
  const data = { name: clean(form.name.value), email: clean(form.email.value).toLowerCase(), phone: clean(form.phone.value),
    interest: ['boxing', 'sparring', 'functional', 'fitness'].includes(form.interest.value) ? form.interest.value : 'boxing', message: clean(form.msg.value) };
  let bad = false;
  for (const [f, fn] of Object.entries(rules)) {
    const v = f === 'msg' ? data.message : data[f], k = fn(v);
    $(`.err[data-for="${f}"]`).textContent = k ? t(k) : ''; if (k) bad = true;
  }
  if (bad) return;
  status.textContent = t('sending');
  try {
    const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
    if (!r.ok) throw new Error(r.status);
    last = Date.now(); form.reset(); status.style.color = 'var(--ac)'; status.textContent = t('ok');
  } catch { status.style.color = '#ff5a4d'; status.textContent = t('fail'); }
});

/* ========== 7. REVEAL AL HACER SCROLL ========== */
if (!calm) {
  document.documentElement.classList.add('js');
  const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .12 });
  $$('.rv').forEach(el => rv.observe(el));
}
setLang(lang);
