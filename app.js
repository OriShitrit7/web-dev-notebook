const topics = [
  { section: 'HTML', num: '01', slug: 'overview', title: 'Overview', subtitle: 'מה זה HTML ומה התפקיד שלו באתר', file: 'content/html/overview.md', ready: true },
  { section: 'HTML', num: '02', slug: 'elements-tags-nesting', title: 'Elements, Tags & Nesting', subtitle: 'הבסיס התחבירי והמבנה ההיררכי של HTML', file: 'content/html/elements-tags-nesting.md', ready: true },
  { section: 'HTML', num: '03', slug: 'document-structure', title: 'Document Structure', subtitle: 'מבנה בסיסי של מסמך HTML', file: 'content/html/document-structure.md', ready: true },
  { section: 'HTML', num: '04', slug: 'metadata', title: 'Metadata', subtitle: 'מידע על המסמך בתוך head', file: 'content/html/metadata.md', ready: true },
  { section: 'HTML', num: '05', slug: 'headings-sections', title: 'Headings & Sections', subtitle: 'כותרות וחלוקה נכונה של תוכן', file: 'content/html/headings-sections.md', ready: true },
  { section: 'HTML', num: '06', slug: 'attributes', title: 'Attributes', subtitle: 'מידע נוסף שמצורף ל־Elements', file: 'content/html/attributes.md', ready: true },
  { section: 'HTML', num: '07', slug: 'text-editing', title: 'Text Editing', subtitle: 'אלמנטים לעיצוב ומשמעות של טקסט', file: 'content/html/text-editing.md', ready: true },
  { section: 'HTML', num: '08', slug: 'lists', title: 'Lists', subtitle: 'רשימות מסודרות ולא מסודרות', file: 'content/html/lists.md', ready: true },
  { section: 'HTML', num: '09', slug: 'links', title: 'Links', subtitle: 'קישורים וניווט בין משאבים', file: 'content/html/links.md', ready: true },
  { section: 'HTML', num: '10', slug: 'media', title: 'Images, Audio & Video', subtitle: 'שילוב מדיה בדף', file: 'content/html/media.md', ready: true },
  { section: 'HTML', num: '11', slug: 'div-span', title: 'div & span', subtitle: 'Containers כלליים לקיבוץ תוכן', file: 'content/html/div-span.md', ready: true },
  { section: 'HTML', num: '12', slug: 'semantic-navigation', title: 'Semantic HTML & Navigation', subtitle: 'מבנה סמנטי וניווט באתר', file: 'content/html/semantic-navigation.md', ready: true },
  { section: 'HTML', num: '13', slug: 'tables', title: 'Tables', subtitle: 'הצגת מידע טבלאי', file: 'content/html/tables.md', ready: true },
  { section: 'HTML', num: '14', slug: 'forms', title: 'Forms', subtitle: 'קלט משתמש וטפסים', file: 'content/html/forms.md', ready: true },
  { section: 'HTML', num: '15', slug: 'file-paths', title: 'File Paths', subtitle: 'נתיבים יחסיים ומוחלטים', file: 'content/html/file-paths.md', ready: true },
  { section: 'HTML', num: '16', slug: 'connecting-css-js', title: 'Connecting CSS & JavaScript', subtitle: 'חיבור HTML לשכבות העיצוב והלוגיקה', file: 'content/html/connecting-css-js.md', ready: true },
  { section: 'CSS', num: '01', slug: 'css-overview', title: 'Overview', subtitle: 'מה זה CSS ואיך מחברים אותו לדף', file: 'content/css/overview.md', ready: true },
  { section: 'CSS', num: '02', slug: 'css-syntax-selectors', title: 'Syntax & Selectors', subtitle: 'מבנה של כלל, ובוררי אלמנט, class ו־id', file: 'content/css/syntax-selectors.md', ready: true },
  { section: 'CSS', num: '03', slug: 'css-advanced-selectors', title: 'Advanced Selectors', subtitle: 'קומבינטורים, פסאודו־מחלקות ופסאודו־אלמנטים', file: 'content/css/advanced-selectors.md', ready: true },
  { section: 'CSS', num: '04', slug: 'css-cascade', title: 'Cascade, Specificity & Inheritance', subtitle: 'איך הדפדפן מכריע בין כללים סותרים', file: 'content/css/cascade.md', ready: true },
  { section: 'CSS', num: '05', slug: 'css-colors-backgrounds', title: 'Colors & Backgrounds', subtitle: 'צבעים, רקעים וגרדיאנטים', file: 'content/css/colors-backgrounds.md', ready: true },
  { section: 'CSS', num: '06', slug: 'css-units-sizing', title: 'Units & Sizing', subtitle: 'px, em, rem, אחוזים וגדלים', file: 'content/css/units-sizing.md', ready: true },
  { section: 'CSS', num: '07', slug: 'css-typography', title: 'Typography', subtitle: 'גופנים ועיצוב טקסט', file: 'content/css/typography.md', ready: true },
  { section: 'CSS', num: '08', slug: 'css-box-model', title: 'Box Model', subtitle: 'padding, border ו־margin סביב כל אלמנט', file: 'content/css/box-model.md', ready: true },
  { section: 'CSS', num: '09', slug: 'css-borders-shadows', title: 'Borders, Shadows & Outlines', subtitle: 'מסגרות, פינות, צללים וקווי מיקוד', file: 'content/css/borders-shadows.md', ready: true },
  { section: 'CSS', num: '10', slug: 'css-display-positioning', title: 'Display & Positioning', subtitle: 'זרימת המסמך ומיקום אלמנטים', file: 'content/css/display-positioning.md', ready: true },
  { section: 'CSS', num: '11', slug: 'css-flexbox', title: 'Flexbox', subtitle: 'פריסה חד־ממדית', file: 'content/css/flexbox.md', ready: true },
  { section: 'CSS', num: '12', slug: 'css-grid', title: 'Grid', subtitle: 'פריסה דו־ממדית', file: 'content/css/grid.md', ready: true },
  { section: 'CSS', num: '13', slug: 'css-variables', title: 'CSS Variables', subtitle: 'משתנים מותאמים אישית', file: 'content/css/variables.md', ready: true },
  { section: 'CSS', num: '14', slug: 'css-responsive', title: 'Responsive Design', subtitle: 'התאמה לכל גודל מסך', file: 'content/css/responsive.md', ready: true },
  { section: 'CSS', num: '15', slug: 'css-transitions-animations', title: 'Transitions, Transforms & Animations', subtitle: 'מעברים, שינוי צורה ותנועה', file: 'content/css/transitions-animations.md', ready: true },
  { section: 'CSS', num: '16', slug: 'css-modern-utilities', title: 'Modern CSS & Utilities', subtitle: 'יכולות CSS מודרניות וכלי עזר', file: 'content/css/modern-utilities.md', ready: true },
  { section: 'CSS', num: '17', slug: 'css-best-practices', title: 'CSS Best Practices & Debugging', subtitle: 'ארגון קוד ואיתור תקלות', file: 'content/css/best-practices.md', ready: true },
  { section: 'JavaScript', num: '01', slug: 'js-overview', title: 'Overview', subtitle: 'מה זה JavaScript ואיפה הוא רץ', file: 'content/js/overview.md', ready: true },
  { section: 'JavaScript', num: '02', slug: 'js-variables', title: 'Variables & Data Types', subtitle: 'const, let וטיפוסי הנתונים', file: 'content/js/variables.md', ready: true },
  { section: 'JavaScript', num: '03', slug: 'js-operators', title: 'Operators', subtitle: 'אופרטורים, השוואות והמרות טיפוס', file: 'content/js/operators.md', ready: true },
  { section: 'JavaScript', num: '04', slug: 'js-strings', title: 'Strings', subtitle: 'מחרוזות, template literals ומתודות', file: 'content/js/strings.md', ready: true },
  { section: 'JavaScript', num: '05', slug: 'js-conditionals', title: 'Conditionals', subtitle: 'if, else ותנאים', ready: false },
  { section: 'JavaScript', num: '06', slug: 'js-loops', title: 'Loops', subtitle: 'לולאות ומעבר על נתונים', ready: false },
  { section: 'JavaScript', num: '07', slug: 'js-functions', title: 'Functions', subtitle: 'פונקציות ו־arrow functions', ready: false },
  { section: 'JavaScript', num: '08', slug: 'js-arrays', title: 'Arrays', subtitle: 'מערכים ומתודות מרכזיות', ready: false },
  { section: 'JavaScript', num: '09', slug: 'js-objects', title: 'Objects', subtitle: 'אובייקטים ו־JSON', ready: false },
  { section: 'JavaScript', num: '10', slug: 'js-dom', title: 'The DOM', subtitle: 'עץ המסמך וגישה אליו', ready: false },
  { section: 'JavaScript', num: '11', slug: 'js-dom-manipulation', title: 'DOM Manipulation', subtitle: 'שינוי הדף בזמן ריצה', ready: false },
  { section: 'JavaScript', num: '12', slug: 'js-events', title: 'Events', subtitle: 'אירועים ותגובה למשתמש', ready: false },
  { section: 'JavaScript', num: '13', slug: 'js-forms', title: 'User Input & Forms', subtitle: 'קלט משתמש וטפסים', ready: false },
  { section: 'JavaScript', num: '14', slug: 'js-projects', title: 'Mini Web Projects', subtitle: 'פרויקטים קטנים משולבים', ready: false }
];

const state = {
  currentSlug: null,
  searchIndex: [],
  loadedMarkdown: new Map(),
  cleanup: []
};

const viewHost = document.getElementById('viewHost');
const sidebarNav = document.getElementById('sidebarNav');

marked.setOptions({ gfm: true, breaks: false });

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

/* Tear down listeners registered by the previous view. */
function runCleanup() {
  state.cleanup.forEach(fn => {
    try { fn(); } catch {}
  });
  state.cleanup = [];
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
  runCleanup();

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

/* ==========================================================================
   Home
   ========================================================================== */

function renderHome() {
  const sections = [...new Set(topics.map(t => t.section))];
  const readyTotal = topics.filter(t => t.ready).length;

  const card = t => `
    ${t.ready ? `<a class="card" href="#/chapter/${t.slug}">` : `<div class="card disabled">`}
      <div class="card-num">
        <span>${esc(t.num)}</span>
        <span class="pill ${t.ready ? 'ready' : 'todo'}">${t.ready ? 'זמין' : 'בקרוב'}</span>
      </div>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.subtitle)}</p>
    ${t.ready ? `</a>` : `</div>`}
  `;

  const groups = sections.map(section => {
    const list = topics.filter(t => t.section === section);
    const ready = list.filter(t => t.ready).length;
    const status = ready === list.length ? 'הושלם'
      : ready ? `${ready} מתוך ${list.length} זמינים`
      : 'בקרוב';
    return `
      <div class="group-label">
        <span>${esc(section)} · סילבוס</span>
        <span class="group-meta">${status}</span>
      </div>
      <div class="grid">${list.map(card).join('')}</div>
    `;
  }).join('');

  viewHost.innerHTML = `
    <div class="home-view">
      <div class="wrap">
        <div class="hero">
          <span class="eyebrow">WEB DEVELOPMENT NOTEBOOK</span>
          <h1>HTML <span class="sep">·</span> CSS <span class="sep">·</span> JavaScript</h1>
          <p class="subtitle">
            מחברת לימוד אינטראקטיבית שמרכזת את חומר ה־Web Development בצורה מסודרת,
            עם הסברים, דוגמאות קוד חיות, שאלוני בדיקה עצמית, ניווט וחיפוש.
          </p>
          <div class="meta-bar">
            <span><strong>${topics.length} נושאים</strong></span>
            <span><strong>${readyTotal} פרקים זמינים</strong></span>
            <span>התוכן נשמר כקבצי Markdown נפרדים</span>
          </div>
        </div>

        <div class="info-box">
          <h4>איך המחברת בנויה?</h4>
          <p>
            כל נושא בסילבוס הופך לעמוד נפרד, וה־Markdown נשאר קובץ עצמאי שאפשר לערוך גם מחוץ לאתר.
          </p>
          <p>
            בתוך פרק, בלוקים מסומנים ב־<strong>״מה שהדפדפן מציג״</strong> מציגים את הקוד ולצידו
            את מה שהדפדפן באמת מרנדר ממנו. בסוף כל פרק יש <strong>שאלון קצר</strong> לבדיקה עצמית.
          </p>
        </div>

        ${groups}
      </div>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ==========================================================================
   Chapter
   ========================================================================== */

async function renderChapter(topic) {
  viewHost.innerHTML = `
    <main class="chapter">
      <div class="chapter-main">
        <span class="page-eyebrow">${esc(topic.section)} · פרק ${esc(topic.num)}</span>
        <h1 class="page-title">${esc(topic.title)}</h1>
        <p class="page-subtitle">${esc(topic.subtitle)}</p>
        <div class="chapter-actions">
          <button class="small-btn" id="copyPageLink" type="button">העתקת קישור לעמוד</button>
          <button class="small-btn" id="scrollTopBtn" type="button">חזרה לראש העמוד</button>
        </div>
        <details class="toc-inline" id="tocInline"></details>
        <article class="markdown-body" id="markdownBody">
          <p>טוען תוכן…</p>
        </article>
        <div class="lesson-end" id="lessonEnd"></div>
      </div>
      <aside class="chapter-toc" id="chapterToc" aria-label="תוכן העניינים של הפרק"></aside>
    </main>
  `;

  document.getElementById('copyPageLink').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(location.href);
      const old = btn.textContent;
      btn.textContent = 'הקישור הועתק';
      setTimeout(() => { btn.textContent = old; }, 1200);
    } catch {}
  });

  document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  try {
    const md = await fetchMarkdown(topic);
    if (state.currentSlug !== topic.slug) return;

    const body = document.getElementById('markdownBody');
    body.innerHTML = marked.parse(md);

    // The page shell already shows the title, so drop the H1 from the file.
    body.querySelector('h1')?.remove();

    enhanceDemos(body);
    enhanceQuizzes(body);
    enhanceCode(body);
    enhanceTables(body);
    const headings = enhanceHeadings(body);
    buildToc(headings);
    renderPrevNext(topic);

    window.scrollTo({ top: 0, behavior: 'instant' });
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
  const used = new Set();
  return [...root.querySelectorAll('h2, h3')].map((h, idx) => {
    let id = slugifyHeading(h.textContent) || `section-${idx + 1}`;
    let n = 2;
    while (used.has(id)) id = `${id}-${n++}`;
    used.add(id);
    h.id = id;
    return h;
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
      try {
        await navigator.clipboard.writeText(code.innerText);
        e.currentTarget.textContent = 'Copied';
        setTimeout(() => { e.currentTarget.textContent = 'Copy'; }, 1100);
      } catch {}
    });
  });
}

/* Wrap wide tables so they scroll on their own instead of stretching the page. */
function enhanceTables(root) {
  root.querySelectorAll('table').forEach(table => {
    if (table.parentElement?.classList.contains('table-scroll')) return;
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
}

/* ==========================================================================
   Live demos
   A ```demo fenced block becomes: the HTML source + an iframe rendering it.
   ========================================================================== */

const DEMO_FRAME_CSS = `
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0;
    padding: 18px 22px;
    font-family: system-ui, 'Segoe UI', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #1c1917;
    background: #fff;
  }
  body > *:first-child { margin-top: 0; }
  body > *:last-child { margin-bottom: 0; }
  img { max-width: 100%; height: auto; }

  /* Console panel. Only appears once the demo actually logs something. */
  .demo-console {
    margin: 14px 0 0;
    padding: 10px 12px;
    border-radius: 8px;
    background: #0f172a;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.7;
    direction: ltr;
    text-align: left;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .demo-console-label {
    display: block;
    margin-bottom: 6px;
    color: #64748b;
    font-size: 11px;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .demo-console-line { display: block; }
  .demo-console-line.is-warn { color: #fbbf24; }
  .demo-console-line.is-error { color: #fca5a5; }
`;

/* Demos teach JavaScript by running it, but console output lands in the
   browser's console where the reader never sees it. This mirrors each
   console call into a panel inside the frame, so `console.log` in a demo
   reads exactly like it does in a terminal. */
const DEMO_CONSOLE_JS = `
(function () {
  var panel = null;
  function ensurePanel() {
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'demo-console';
      var label = document.createElement('span');
      label.className = 'demo-console-label';
      label.textContent = 'Console';
      panel.appendChild(label);
      (document.body || document.documentElement).appendChild(panel);
    } else if (panel.parentNode !== document.body && document.body) {
      document.body.appendChild(panel);
    }
    return panel;
  }
  function format(value) {
    if (typeof value === 'string') return value;
    if (typeof value === 'undefined') return 'undefined';
    if (value === null) return 'null';
    // JSON.stringify turns NaN and Infinity into "null", which would quietly
    // misreport exactly the values a JS chapter is trying to demonstrate.
    if (typeof value !== 'object') return String(value);
    if (typeof value === 'function') return value.toString().split('\\n')[0];
    try { return JSON.stringify(value); } catch (e) { return String(value); }
  }
  function write(kind, args) {
    var line = document.createElement('span');
    line.className = 'demo-console-line' + (kind === 'log' ? '' : ' is-' + kind);
    line.textContent = Array.prototype.map.call(args, format).join(' ');
    ensurePanel().appendChild(line);
    if (window.parent !== window) {
      try { window.parent.postMessage({ demoFrameGrew: true }, '*'); } catch (e) {}
    }
  }
  ['log', 'info', 'warn', 'error'].forEach(function (name) {
    var original = console[name];
    console[name] = function () {
      write(name === 'info' ? 'log' : name, arguments);
      try { original.apply(console, arguments); } catch (e) {}
    };
  });
  window.addEventListener('error', function (event) {
    write('error', ['Uncaught ' + (event.error ? event.error : event.message)]);
  });
})();
`;

function buildDemoDocument(source) {
  const trimmed = source.trim();
  if (/^<!DOCTYPE|^<html/i.test(trimmed)) return trimmed;

  const rtl = /[֐-׿]/.test(source);
  return `<!DOCTYPE html>
<html lang="${rtl ? 'he' : 'en'}" dir="${rtl ? 'rtl' : 'ltr'}">
<head><meta charset="utf-8"><style>${DEMO_FRAME_CSS}</style><script>${DEMO_CONSOLE_JS}<\/script></head>
<body>
${source}
</body>
</html>`;
}

/* An iframe's documentElement stretches to fill the frame, so measuring it at
   the current height can only ever grow. Collapse the frame first, then read
   the natural content height. */
function sizeDemoFrame(frame) {
  let doc;
  try { doc = frame.contentDocument; } catch { return; }
  if (!doc || !doc.documentElement) return;

  frame.style.height = '0px';
  const height = doc.documentElement.scrollHeight;
  frame.style.height = `${Math.max(height, 40) + 1}px`;
}

function enhanceDemos(root) {
  root.querySelectorAll('pre > code.language-demo').forEach(code => {
    const pre = code.parentElement;
    const source = code.textContent;

    // A demo is an HTML fragment, but JavaScript chapters write demos that are
    // nothing but a <script> block. Labelling those "HTML" would misdescribe
    // every example in the section, so they are labelled and highlighted as JS.
    // Anchored AND single-block: a demo that mixes markup between two script
    // blocks would otherwise match greedily and get mangled.
    const scriptOnly = /^\s*<script>[\s\S]*<\/script>\s*$/i.test(source)
      && (source.match(/<script\b/gi) || []).length === 1;
    const demoLang = scriptOnly ? 'js' : 'html';

    code.classList.remove('language-demo');
    code.classList.add(`language-${demoLang}`);
    if (scriptOnly) {
      // Show (and copy) the JavaScript itself, without the wrapping <script> tags.
      code.textContent = source.replace(/^\s*<script>\n?/i, '').replace(/<\/script>\s*$/i, '').replace(/\s+$/, '');
    }
    const copyText = scriptOnly ? code.textContent : source;
    try { hljs.highlightElement(code); } catch {}

    const demo = document.createElement('div');
    demo.className = 'demo';
    // Preview first in the DOM so RTL puts it on the right and the code on the left.
    demo.innerHTML = `
      <div class="demo-pane demo-preview">
        <div class="demo-label"><span>מה שהדפדפן מציג</span></div>
        <iframe class="demo-frame" title="תצוגה חיה של הקוד שלצד זה"></iframe>
      </div>
      <div class="demo-pane demo-code">
        <div class="demo-label">
          <span>${demoLang.toUpperCase()}</span>
          <button class="copy-code" type="button">Copy</button>
        </div>
        <div class="code-shell"></div>
      </div>
    `;

    pre.parentNode.insertBefore(demo, pre);
    demo.querySelector('.code-shell').appendChild(pre);

    demo.querySelector('.copy-code').addEventListener('click', async (e) => {
      try {
        await navigator.clipboard.writeText(copyText);
        e.currentTarget.textContent = 'Copied';
        setTimeout(() => { e.currentTarget.textContent = 'Copy'; }, 1100);
      } catch {}
    });

    const frame = demo.querySelector('.demo-frame');
    frame.addEventListener('load', () => {
      sizeDemoFrame(frame);
      // Re-measure once fonts and images have settled.
      setTimeout(() => sizeDemoFrame(frame), 120);
      setTimeout(() => sizeDemoFrame(frame), 600);
    });
    frame.srcdoc = buildDemoDocument(source);

    const onResize = () => sizeDemoFrame(frame);
    window.addEventListener('resize', onResize);
    state.cleanup.push(() => window.removeEventListener('resize', onResize));

    // A demo that logs after load (a timer, a promise) grows its own console
    // panel, so it asks us to re-measure rather than waiting for a resize.
    const onFrameGrew = event => {
      if (event.source === frame.contentWindow && event.data && event.data.demoFrameGrew) {
        sizeDemoFrame(frame);
      }
    };
    window.addEventListener('message', onFrameGrew);
    state.cleanup.push(() => window.removeEventListener('message', onFrameGrew));
  });
}

/* ==========================================================================
   Self-check quiz
   A ```quiz fenced block becomes an interactive multiple-choice set.

   Authoring format — one question per `?` line:
     ? The question text, `code` allowed
     - a wrong option
     + the correct option
     - another wrong option
     = the explanation shown after answering
   ========================================================================== */

function inlineMarkup(text) {
  return esc(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}

function parseQuiz(source) {
  const questions = [];
  let current = null;

  source.split('\n').forEach(raw => {
    const line = raw.trim();
    if (!line) return;
    const body = line.slice(1).trim();

    if (line.startsWith('?')) {
      current = { prompt: body, options: [], answer: -1, why: '' };
      questions.push(current);
      return;
    }
    if (!current) return;

    if (line.startsWith('+')) {
      current.answer = current.options.length;
      current.options.push(body);
    } else if (line.startsWith('-')) {
      current.options.push(body);
    } else if (line.startsWith('=')) {
      current.why = body;
    }
  });

  // Drop anything malformed rather than rendering a broken question.
  return questions.filter(q => q.options.length >= 2 && q.answer >= 0);
}

function enhanceQuizzes(root) {
  root.querySelectorAll('pre > code.language-quiz').forEach(code => {
    const questions = parseQuiz(code.textContent);
    const pre = code.parentElement;

    if (!questions.length) {
      pre.remove();
      return;
    }

    const quiz = document.createElement('section');
    quiz.className = 'quiz';
    quiz.innerHTML = `
      <div class="quiz-head">
        <span class="icon">✓</span>
        <span>${questions.length} שאלות</span>
        <span class="quiz-score"></span>
      </div>
      <ol class="quiz-list">
        ${questions.map((q, qi) => `
          <li class="quiz-q" data-answer="${q.answer}">
            <div class="quiz-prompt">
              <span class="quiz-num">${qi + 1}</span>
              <span>${inlineMarkup(q.prompt)}</span>
            </div>
            <ul class="quiz-options">
              ${q.options.map((opt, oi) => `
                <li>
                  <button type="button" class="quiz-opt" data-index="${oi}">
                    <span class="quiz-marker"></span>
                    <span>${inlineMarkup(opt)}</span>
                  </button>
                </li>
              `).join('')}
            </ul>
            ${q.why ? `<div class="quiz-why" hidden>${inlineMarkup(q.why)}</div>` : ''}
          </li>
        `).join('')}
      </ol>
      <div class="quiz-foot">
        <span class="quiz-result" hidden></span>
        <button type="button" class="quiz-reset">התחלה מחדש</button>
      </div>
    `;

    pre.parentNode.insertBefore(quiz, pre);
    pre.remove();

    const scoreEl = quiz.querySelector('.quiz-score');
    const resultEl = quiz.querySelector('.quiz-result');
    let answered = 0;
    let correct = 0;

    const paintScore = () => {
      scoreEl.textContent = answered ? `${correct}/${questions.length}` : '';
      const done = answered === questions.length;
      resultEl.hidden = !done;
      if (done) {
        resultEl.textContent = correct === questions.length
          ? `כל הכבוד — ${correct} מתוך ${questions.length}`
          : `ענית נכון על ${correct} מתוך ${questions.length}`;
      }
    };

    quiz.querySelectorAll('.quiz-q').forEach(question => {
      const answer = Number(question.dataset.answer);
      const options = [...question.querySelectorAll('.quiz-opt')];
      const why = question.querySelector('.quiz-why');

      options.forEach(option => {
        option.addEventListener('click', () => {
          if (question.dataset.done) return;
          question.dataset.done = '1';

          const picked = Number(option.dataset.index);
          const gotIt = picked === answer;

          options.forEach(o => {
            o.disabled = true;
            const i = Number(o.dataset.index);
            if (i === answer) o.classList.add('correct');
            else if (i === picked) o.classList.add('wrong');
            else o.classList.add('dimmed');
          });

          if (why) why.hidden = false;
          answered += 1;
          if (gotIt) correct += 1;
          paintScore();
        });
      });
    });

    quiz.querySelector('.quiz-reset').addEventListener('click', () => {
      answered = 0;
      correct = 0;
      quiz.querySelectorAll('.quiz-q').forEach(question => {
        delete question.dataset.done;
        question.querySelectorAll('.quiz-opt').forEach(o => {
          o.disabled = false;
          o.classList.remove('correct', 'wrong', 'dimmed');
        });
        const why = question.querySelector('.quiz-why');
        if (why) why.hidden = true;
      });
      paintScore();
      quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    paintScore();
  });
}

/* ==========================================================================
   Table of contents + scroll spy
   ========================================================================== */

function buildToc(headings) {
  const aside = document.getElementById('chapterToc');
  const inline = document.getElementById('tocInline');
  if (!aside || !inline) return;

  if (headings.length < 3) {
    aside.remove();
    inline.remove();
    document.querySelector('main.chapter')?.classList.add('no-toc');
    return;
  }

  const items = headings.map(h => `
    <li class="toc-${h.tagName.toLowerCase()}">
      <button type="button" class="toc-link" data-target="${esc(h.id)}">${esc(h.textContent)}</button>
    </li>
  `).join('');

  aside.innerHTML = `
    <div class="toc-title">בפרק הזה</div>
    <ul class="toc-list">${items}</ul>
  `;

  inline.innerHTML = `
    <summary>תוכן העניינים של הפרק</summary>
    <ul class="toc-list">${items}</ul>
  `;

  const links = [...document.querySelectorAll('.toc-link')];

  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.target);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      inline.open = false;
    });
  });

  // The heading that owns the reading position: the last one at or above an
  // imaginary line near the top of the viewport. Measured against the viewport
  // rather than offsetTop, so it stays correct regardless of offsetParent.
  const activeHeadingId = () => {
    const atBottom = window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;
    if (atBottom) return headings[headings.length - 1].id;

    let activeId = headings[0].id;
    for (const h of headings) {
      if (h.getBoundingClientRect().top <= 120) activeId = h.id;
      else break;
    }
    return activeId;
  };

  const paint = () => {
    const activeId = activeHeadingId();
    links.forEach(l => l.classList.toggle('active', l.dataset.target === activeId));
  };

  let ticking = false;
  const spy = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      paint();
    });
  };

  window.addEventListener('scroll', spy, { passive: true });
  state.cleanup.push(() => window.removeEventListener('scroll', spy));
  paint();

  // Exposed so the scroll-spy selection can be exercised directly in tests.
  state.repaintToc = paint;
}

function renderPrevNext(topic) {
  const sameSection = topics.filter(t => t.section === topic.section);
  const index = sameSection.findIndex(t => t.slug === topic.slug);
  const prev = [...sameSection.slice(0, index)].reverse().find(t => t.ready);
  const next = sameSection.slice(index + 1).find(t => t.ready);

  document.getElementById('lessonEnd').innerHTML = `
    <div>
      ${prev
        ? `<a class="lesson-link" href="#/chapter/${prev.slug}">→ ${esc(prev.title)}</a>`
        : `<a class="lesson-link" href="#/home">→ עמוד הבית</a>`}
    </div>
    <div>
      ${next
        ? `<a class="lesson-link" href="#/chapter/${next.slug}">${esc(next.title)} ←</a>`
        : `<a class="lesson-link" href="#/home">עמוד הבית ←</a>`}
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

/* ==========================================================================
   Search
   ========================================================================== */

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
        .replace(/<[^>]+>/g, ' ')
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

/* ==========================================================================
   Boot
   ========================================================================== */

const NARROW = 900;

function initUi() {
  buildSidebar();

  document.getElementById('navCollapse').addEventListener('click', () => {
    document.body.classList.add('nav-collapsed');
  });
  document.getElementById('navOpen').addEventListener('click', () => {
    document.body.classList.remove('nav-collapsed');
  });

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

  // Auto-collapse on narrow screens, and restore the sidebar when the window
  // grows again — otherwise it stays hidden until a reload.
  let wasNarrow = window.innerWidth <= NARROW;
  document.body.classList.toggle('nav-collapsed', wasNarrow);

  window.addEventListener('resize', () => {
    const narrow = window.innerWidth <= NARROW;
    if (narrow === wasNarrow) return;
    wasNarrow = narrow;
    document.body.classList.toggle('nav-collapsed', narrow);
  });

  window.addEventListener('hashchange', () => {
    if (window.innerWidth <= NARROW) document.body.classList.add('nav-collapsed');
    route();
  });

  route();
  buildSearchIndex();
}

initUi();
