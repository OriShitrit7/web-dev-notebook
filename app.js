
const topics = [
  { section: 'HTML', num: '01', slug: 'overview', title: 'Overview', subtitle: 'מה זה HTML ומה התפקיד שלו באתר', file: 'content/html/overview.md', ready: true },
  { section: 'HTML', num: '02', slug: 'elements-tags-nesting', title: 'Elements, Tags & Nesting', subtitle: 'הבסיס התחבירי והמבנה ההיררכי של HTML', file: 'content/html/elements-tags-nesting.md', ready: true },
  { section: 'HTML', num: '03', slug: 'document-structure', title: 'Document Structure', subtitle: 'מבנה בסיסי של מסמך HTML', ready: false },
  { section: 'HTML', num: '04', slug: 'metadata', title: 'Metadata', subtitle: 'מידע על המסמך בתוך head', ready: false },
  { section: 'HTML', num: '05', slug: 'headings-sections', title: 'Headings & Sections', subtitle: 'כותרות וחלוקה נכונה של תוכן', ready: false },
  { section: 'HTML', num: '06', slug: 'attributes', title: 'Attributes', subtitle: 'מידע נוסף שמצורף ל־Elements', ready: false },
  { section: 'HTML', num: '07', slug: 'text-editing', title: 'Text Editing', subtitle: 'אלמנטים לעיצוב ומשמעות של טקסט', ready: false },
  { section: 'HTML', num: '08', slug: 'lists', title: 'Lists', subtitle: 'רשימות מסודרות ולא מסודרות', ready: false },
  { section: 'HTML', num: '09', slug: 'links', title: 'Links', subtitle: 'קישורים וניווט בין משאבים', ready: false },
  { section: 'HTML', num: '10', slug: 'media', title: 'Images, Audio & Video', subtitle: 'שילוב מדיה בדף', ready: false },
  { section: 'HTML', num: '11', slug: 'div-span', title: 'div & span', subtitle: 'Containers כלליים לקיבוץ תוכן', ready: false },
  { section: 'HTML', num: '12', slug: 'semantic-navigation', title: 'Semantic HTML & Navigation', subtitle: 'מבנה סמנטי וניווט באתר', ready: false },
  { section: 'HTML', num: '13', slug: 'tables', title: 'Tables', subtitle: 'הצגת מידע טבלאי', ready: false },
  { section: 'HTML', num: '14', slug: 'forms', title: 'Forms', subtitle: 'קלט משתמש וטפסים', ready: false },
  { section: 'HTML', num: '15', slug: 'file-paths', title: 'File Paths', subtitle: 'נתיבים יחסיים ומוחלטים', ready: false },
  { section: 'HTML', num: '16', slug: 'connecting-css-js', title: 'Connecting CSS & JavaScript', subtitle: 'חיבור HTML לשכבות העיצוב והלוגיקה', ready: false },
  { section: 'CSS', num: '—', slug: 'css-home', title: 'CSS', subtitle: 'נוסיף לאחר סיום HTML', ready: false },
  { section: 'JavaScript', num: '—', slug: 'js-home', title: 'JavaScript', subtitle: 'נוסיף לאחר סיום HTML ו־CSS', ready: false }
];

const state = {
  currentSlug: null,
  searchIndex: [],
  loadedMarkdown: new Map()
};

const viewHost = document.getElementById('viewHost');
const sidebarNav = document.getElementById('sidebarNav');

marked.setOptions({
  gfm: true,
  breaks: false,
  headerIds: false,
  mangle: false
});

function esc(s = '') {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function buildSidebar() {
  const sections = [...new Set(topics.map(t => t.section))];
  sidebarNav.innerHTML = sections.map(section => {
    const list = topics.filter(t => t.section === section);
    return `
      <div class="nav-label">${esc(section)}</div>
      <ul class="nav-list">
        ${list.map(t => `
          <li>
            <a href="#/chapter/${t.slug}" data-slug="${t.slug}" class="${t.ready ? '' : 'pending'}">
              <span class="nav-num">${esc(t.num)}</span>
              <span>${esc(t.title)}</span>
              ${t.ready ? '' : '<span class="nav-badge">בקרוב</span>'}
            </a>
          </li>
        `).join('')}
      </ul>
    `;
  }).join('');
}

function setActiveNav(slug) {
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.classList.toggle('active', a.dataset.slug === slug);
  });
}

function topicBySlug(slug) {
  return topics.find(t => t.slug === slug);
}

function route() {
  const hash = location.hash || '#/home';
  if (hash === '#/home' || hash === '#/' || hash === '') {
    state.currentSlug = null;
    setActiveNav('');
    renderHome();
    return;
  }

  const m = hash.match(/^#\/chapter\/([^/?#]+)/);
  if (!m) {
    location.hash = '#/home';
    return;
  }

  const slug = decodeURIComponent(m[1]);
  const topic = topicBySlug(slug);
  if (!topic) {
    renderPlaceholder({ title: 'העמוד לא נמצא', section: 'Web Dev', subtitle: 'הקישור שביקשת לא קיים.' });
    return;
  }

  state.currentSlug = slug;
  setActiveNav(slug);

  if (topic.ready && topic.file) {
    renderChapter(topic);
  } else {
    renderPlaceholder(topic);
  }
}

async function fetchMarkdown(topic) {
  if (state.loadedMarkdown.has(topic.slug)) return state.loadedMarkdown.get(topic.slug);
  const response = await fetch(topic.file);
  if (!response.ok) throw new Error(`Could not load ${topic.file}`);
  const md = await response.text();
  state.loadedMarkdown.set(topic.slug, md);
  return md;
}

function renderHome() {
  const htmlTopics = topics.filter(t => t.section === 'HTML');
  viewHost.innerHTML = `
    <div class="home-view">
      <div class="wrap">
        <div class="hero">
          <span class="eyebrow">WEB DEVELOPMENT NOTEBOOK</span>
          <h1>HTML, CSS<br>ו־JavaScript</h1>
          <p class="subtitle">
            מחברת לימוד אינטראקטיבית שמרכזת את חומר ה־Web Development בצורה מסודרת,
            עם הסברים, קוד, ניווט וחיפוש.
          </p>
          <div class="meta-bar">
            <span><strong>${htmlTopics.length} נושאי HTML</strong></span>
            <span><strong>${htmlTopics.filter(t => t.ready).length} פרקים זמינים</strong></span>
            <span>התוכן נשמר כקבצי Markdown נפרדים</span>
          </div>
        </div>

        <div class="info-box">
          <h4>איך המחברת בנויה?</h4>
          <p>
            כרגע מתחילים מ־HTML לפי הסילבוס שנבחר. כל נושא הופך לעמוד נפרד,
            וה־Markdown נשאר קובץ עצמאי שאפשר לערוך גם מחוץ לאתר.
          </p>
        </div>

        <div class="group-label">HTML · סילבוס</div>
        <div class="grid">
          ${htmlTopics.map(t => `
            ${t.ready
              ? `<a class="card" href="#/chapter/${t.slug}">`
              : `<div class="card disabled">`
            }
                <div class="card-num">
                  <span>${t.num}</span>
                  <span class="pill ${t.ready ? 'ready' : 'todo'}">${t.ready ? 'זמין' : 'בקרוב'}</span>
                </div>
                <h3>${esc(t.title)}</h3>
                <p>${esc(t.subtitle)}</p>
            ${t.ready ? `</a>` : `</div>`}
          `).join('')}
        </div>
      </div>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

async function renderChapter(topic) {
  viewHost.innerHTML = `
    <main>
      <span class="page-eyebrow">HTML · פרק ${topic.num}</span>
      <h1 class="page-title">${esc(topic.title)}</h1>
      <p class="page-subtitle">${esc(topic.subtitle)}</p>
      <div class="chapter-actions">
        <button class="small-btn" id="copyPageLink">העתקת קישור לעמוד</button>
        <button class="small-btn" id="scrollTopBtn">חזרה לראש העמוד</button>
      </div>
      <article class="markdown-body" id="markdownBody">
        <p>טוען תוכן…</p>
      </article>
      <div class="lesson-end" id="lessonEnd"></div>
    </main>
  `;

  try {
    const md = await fetchMarkdown(topic);
    const body = document.getElementById('markdownBody');
    body.innerHTML = marked.parse(md);

    // Remove duplicated H1 because the page shell already shows the title.
    const firstH1 = body.querySelector('h1');
    if (firstH1) firstH1.remove();

    enhanceHeadings(body);
    enhanceCode(body);
    renderPrevNext(topic);

    document.getElementById('copyPageLink')?.addEventListener('click', async (e) => {
      await navigator.clipboard.writeText(location.href);
      const old = e.currentTarget.textContent;
      e.currentTarget.textContent = 'הקישור הועתק';
      setTimeout(() => e.currentTarget.textContent = old, 1200);
    });

    document.getElementById('scrollTopBtn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  } catch (err) {
    document.getElementById('markdownBody').innerHTML = `
      <blockquote>
        לא הצלחתי לטעון את קובץ ה־Markdown. יש להריץ את האתר דרך שרת מקומי
        (למשל <code>python3 -m http.server 8000</code>) ולא לפתוח את index.html ישירות.
      </blockquote>
    `;
  }
}

function enhanceHeadings(root) {
  root.querySelectorAll('h2, h3').forEach((h, idx) => {
    const base = slugifyHeading(h.textContent) || `section-${idx + 1}`;
    h.id = base;
  });
}

function enhanceCode(root) {
  root.querySelectorAll('pre').forEach(pre => {
    if (pre.parentElement?.classList.contains('code-shell')) return;

    const code = pre.querySelector('code');
    if (!code) return;

    try { hljs.highlightElement(code); } catch {}

    const langClass = [...code.classList].find(c => c.startsWith('language-'));
    const lang = langClass ? langClass.replace('language-', '').toUpperCase() : 'CODE';

    const shell = document.createElement('div');
    shell.className = 'code-shell';

    const label = document.createElement('div');
    label.className = 'code-label';
    label.innerHTML = `
      <span class="code-dot red"></span>
      <span class="code-dot amber"></span>
      <span class="code-dot green"></span>
      <span class="code-lang">${esc(lang)}</span>
      <button class="copy-code" type="button">Copy</button>
    `;

    pre.parentNode.insertBefore(shell, pre);
    shell.appendChild(label);
    shell.appendChild(pre);

    label.querySelector('.copy-code').addEventListener('click', async (e) => {
      await navigator.clipboard.writeText(code.innerText);
      e.currentTarget.textContent = 'Copied';
      setTimeout(() => e.currentTarget.textContent = 'Copy', 1100);
    });
  });
}

function renderPrevNext(topic) {
  const htmlTopics = topics.filter(t => t.section === 'HTML');
  const index = htmlTopics.findIndex(t => t.slug === topic.slug);
  const prev = [...htmlTopics.slice(0, index)].reverse().find(t => t.ready);
  const next = htmlTopics.slice(index + 1).find(t => t.ready);

  document.getElementById('lessonEnd').innerHTML = `
    <div>
      ${prev ? `<a class="lesson-link" href="#/chapter/${prev.slug}">→ ${esc(prev.title)}</a>` : `<a class="lesson-link" href="#/home">→ עמוד הבית</a>`}
    </div>
    <div>
      ${next ? `<a class="lesson-link" href="#/chapter/${next.slug}">${esc(next.title)} ←</a>` : `<a class="lesson-link" href="#/home">עמוד הבית ←</a>`}
    </div>
  `;
}

function renderPlaceholder(topic) {
  viewHost.innerHTML = `
    <main class="placeholder">
      <div class="placeholder-card">
        <span class="tag">${esc(topic.section || 'HTML')}</span>
        <h1>${esc(topic.title)}</h1>
        <p>${esc(topic.subtitle || 'הפרק הזה עדיין לא נוסף למחברת.')}</p>
        <p style="margin-top:14px; color:var(--ink-mute);">העמוד מוכן בניווט, והתוכן יתווסף בהמשך.</p>
      </div>
    </main>
  `;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

async function buildSearchIndex() {
  const items = topics.map(t => ({
    slug: t.slug,
    title: t.title,
    section: t.section,
    text: t.subtitle,
    ready: t.ready
  }));

  for (const t of topics.filter(t => t.ready && t.file)) {
    try {
      const md = await fetchMarkdown(t);
      const plain = md
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/[#>*_`\-\[\]()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      const item = items.find(i => i.slug === t.slug);
      if (item) item.text += ' ' + plain;
    } catch {}
  }

  state.searchIndex = items;
}

function openSearch() {
  const layer = document.getElementById('searchLayer');
  layer.hidden = false;
  const input = document.getElementById('searchInput');
  input.value = '';
  document.getElementById('searchStatus').textContent = 'הקלידי לפחות שני תווים';
  document.getElementById('searchResults').innerHTML = '';
  setTimeout(() => input.focus(), 0);
}

function closeSearch() {
  document.getElementById('searchLayer').hidden = true;
}

function runSearch(query) {
  const q = query.trim().toLowerCase();
  const status = document.getElementById('searchStatus');
  const results = document.getElementById('searchResults');

  if (q.length < 2) {
    status.textContent = 'הקלידי לפחות שני תווים';
    results.innerHTML = '';
    return;
  }

  const found = state.searchIndex
    .filter(i => `${i.title} ${i.section} ${i.text}`.toLowerCase().includes(q))
    .slice(0, 20);

  status.textContent = found.length ? `${found.length} תוצאות` : 'לא נמצאו תוצאות';
  results.innerHTML = found.map(i => `
    <a class="search-result" href="#/chapter/${i.slug}" data-close-search>
      <strong>${esc(i.title)}</strong>
      <span>${esc(i.text.slice(0, 135))}${i.text.length > 135 ? '…' : ''}</span>
      <small>${esc(i.section)} · ${i.ready ? 'זמין' : 'בקרוב'}</small>
    </a>
  `).join('');
}

function initUi() {
  buildSidebar();

  const collapse = () => document.body.classList.add('nav-collapsed');
  const expand = () => document.body.classList.remove('nav-collapsed');

  document.getElementById('navCollapse').addEventListener('click', collapse);
  document.getElementById('navOpen').addEventListener('click', expand);

  document.getElementById('searchOpen').addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearch);
  document.getElementById('searchInput').addEventListener('input', e => runSearch(e.target.value));

  document.getElementById('searchLayer').addEventListener('click', e => {
    if (e.target.id === 'searchLayer' || e.target.closest('[data-close-search]')) closeSearch();
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });

  if (window.innerWidth <= 900) document.body.classList.add('nav-collapsed');
  window.addEventListener('hashchange', () => {
    if (window.innerWidth <= 900) document.body.classList.add('nav-collapsed');
    route();
  });

  route();
  buildSearchIndex();
}

initUi();
