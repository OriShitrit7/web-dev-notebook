# Advanced Selectors

<p class="lead">
שלושת הבוררים מהפרק הקודם בוחרים אלמנט לפי <strong>מה הוא</strong>.
כאן נלמד לבחור לפי <strong>איפה הוא נמצא</strong>, <strong>אילו attributes יש לו</strong>
ו<strong>באיזה מצב הוא</strong> — וגם ליצור תוכן שלא קיים ב־HTML בכלל.
</p>

## קומבינטורים

<div class="box theory">
  <div class="box-head"><span class="icon">🧭</span>בחירה לפי מיקום בעץ</div>
  <div class="box-body">
    <p>
      <strong>קומבינטור</strong> הוא סימן שמחבר שני בוררים ומתאר את היחס ביניהם
      בעץ ה־DOM — בדיוק יחסי ה־Parent, Child ו־Siblings מפרק
      Elements, Tags &amp; Nesting.
    </p>
  </div>
</div>

| קומבינטור | נכתב כך | בוחר |
| --- | --- | --- |
| צאצא | `div p` | כל `<p>` בתוך `<div>`, בכל עומק |
| ילד ישיר | `div > p` | רק `<p>` שהוא Child ישיר של `<div>` |
| אח סמוך | `h2 + p` | ה־`<p>` שבא **מיד אחרי** `<h2>` |
| אחים כלליים | `h2 ~ p` | כל `<p>` שבא אחרי `<h2>` באותה רמה |

<div class="box">
  <div class="box-body">
    <p>ההבדל בין רווח לבין <code>&gt;</code> הוא הכי חשוב מביניהם:</p>
  </div>
</div>

```demo
<style>
  .card p { color: #6b6b70; }
  .card > p { font-weight: bold; }
</style>
<div class="card">
  <p>Direct child — grey and bold</p>
  <div>
    <p>Nested deeper — grey only</p>
  </div>
</div>
```

<div class="keypoint">
שתי הפסקאות אפורות, כי <code>.card p</code> תופס אותן בכל עומק.
רק הראשונה מודגשת, כי <code>.card &gt; p</code> דורש שהפסקה תהיה
<strong>Child ישיר</strong> — רמה אחת בדיוק.
</div>

<div class="box">
  <div class="box-body">
    <p>ושני קומבינטורי האחים:</p>
  </div>
</div>

```demo
<style>
  h3 + p { color: #be123c; }
  h3 ~ p { font-style: italic; }
</style>
<h3>Heading</h3>
<p>First after — red and italic</p>
<p>Second after — italic only</p>
```

## בוררי Attribute

<div class="box theory">
  <div class="box-head"><span class="icon">🔍</span>בחירה לפי מה שכתוב בתגית</div>
  <div class="box-body">
    <p>
      אפשר לבחור אלמנטים לפי ה־attributes שלהם — אותם attributes שלמדנו ב־HTML.
      הבורר נכתב בתוך סוגריים מרובעים.
    </p>
  </div>
</div>

| נכתב כך | בוחר |
| --- | --- |
| `[disabled]` | כל אלמנט שיש לו את ה־attribute, בלי קשר לערך |
| `[type="email"]` | ערך **מדויק** |
| `[href^="https"]` | ערך ש**מתחיל** ב־ |
| `[href$=".pdf"]` | ערך ש**מסתיים** ב־ |
| `[href*="example"]` | ערך ש**מכיל** |

```demo
<style>
  input[type="email"] { border: 2px solid #047857; }
  input[disabled] { background: #f1f5f9; }
</style>
<p><input type="text" value="text"></p>
<p><input type="email" value="email"></p>
<p><input type="text" value="locked" disabled></p>
```

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>שימוש אמיתי</div>
  <div class="box-body">
    <p>
      הבוררים האלה שימושיים במיוחד לקישורים: אפשר לסמן אוטומטית כל קישור חיצוני
      או כל קישור לקובץ PDF, בלי להוסיף להם class ידנית.
    </p>
    <p><code>a[href^="http"] { ... }</code> — כל קישור שמוביל החוצה.</p>
  </div>
</div>

## פסאודו־מחלקות

<div class="box theory">
  <div class="box-head"><span class="icon">✨</span>בחירה לפי מצב</div>
  <div class="box-body">
    <p>
      <strong>פסאודו־מחלקה</strong> (pseudo-class) בוחרת אלמנט לפי
      <strong>מצב</strong> שהוא נמצא בו או לפי <strong>מיקומו בין אחיו</strong> —
      מצבים שלא כתובים ב־HTML בכלל.
    </p>
    <p>היא נכתבת עם <strong>נקודתיים אחת</strong> אחרי הבורר.</p>
  </div>
</div>

| פסאודו־מחלקה | בוחרת |
| --- | --- |
| `:hover` | כשהעכבר נמצא מעל האלמנט |
| `:focus` | כשהאלמנט במיקוד, למשל שדה שמקלידים בו |
| `:first-child` | אלמנט שהוא הראשון בין אחיו |
| `:last-child` | האחרון בין אחיו |
| `:nth-child(2)` | השני בין אחיו |
| `:nth-child(odd)` | כל האי־זוגיים |
| `:not(.skip)` | כל מה ש**אינו** תואם לבורר שבסוגריים |

<div class="box">
  <div class="box-body">
    <p>הזיזי את העכבר מעל הכפתור, ולחצי על השדה:</p>
  </div>
</div>

```demo
<style>
  button { padding: 8px 16px; }
  button:hover { background: #4f46e5; color: white; }
  input:focus { outline: 3px solid #fbbf24; }
</style>
<p><button>Hover me</button></p>
<p><input value="Click me"></p>
```

<div class="keypoint">
זו נקודה מעניינת: <code>:hover</code> מגיב לפעולה של המשתמש —
דבר שנשמע כמו תפקיד של JavaScript. זה אחד המקומות שבהם CSS חורגת
מ״תיאור בלבד״, בלי שורת קוד אחת.
</div>

<div class="box">
  <div class="box-body">
    <p>ופסאודו־מחלקות של מיקום, שימושיות מאוד לרשימות ולטבלאות:</p>
  </div>
</div>

```demo
<style>
  li:first-child { font-weight: bold; }
  li:nth-child(odd) { background: #f1f5f9; }
  li:last-child { color: #be123c; }
</style>
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
```

## פסאודו־אלמנטים

<div class="box theory">
  <div class="box-head"><span class="icon">🪄</span>חלקים שלא קיימים ב־HTML</div>
  <div class="box-body">
    <p>
      <strong>פסאודו־אלמנט</strong> מעצב <strong>חלק</strong> מאלמנט, או יוצר תוכן חדש
      שלא כתוב ב־HTML כלל.
    </p>
    <p>הוא נכתב עם <strong>נקודתיים כפולות</strong>.</p>
  </div>
</div>

| פסאודו־אלמנט | מה הוא |
| --- | --- |
| `::before` | תוכן שנוסף **לפני** תוכן האלמנט |
| `::after` | תוכן שנוסף **אחרי** תוכן האלמנט |
| `::first-line` | השורה הראשונה של טקסט |
| `::first-letter` | האות הראשונה |
| `::selection` | טקסט שהמשתמש סימן |

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>בלי content הם לא יופיעו</div>
  <div class="box-body">
    <p>
      ל־<code>::before</code> ול־<code>::after</code> <strong>חייבים</strong> לתת
      את המאפיין <code>content</code>, גם אם הוא מחרוזת ריקה <code>content: ""</code>.
    </p>
    <p>בלעדיו הפסאודו־אלמנט פשוט לא נוצר — וזו טעות נפוצה מאוד.</p>
  </div>
</div>

```demo
<style>
  .tip::before { content: "💡 "; }
  .external::after { content: " ↗"; color: #4f46e5; }
  p::first-letter { font-size: 1.6em; color: #be123c; }
</style>
<p class="tip">Added before the text</p>
<p class="external">Added after the text</p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      התוכן שנוצר כך הוא <strong>עיצובי בלבד</strong>. הוא לא קיים ב־DOM,
      אי אפשר לסמן אותו בעכבר, וקוראי מסך מתייחסים אליו באופן לא עקבי.
      לכן אף פעם לא שמים בו מידע חיוני.
    </p>
  </div>
</div>

### נקודתיים אחת או כפולה?

<div class="box">
  <div class="box-body">
    <p>
      הכלל: <strong>נקודתיים אחת</strong> לפסאודו־מחלקה (מצב),
      <strong>כפולה</strong> לפסאודו־אלמנט (חלק).
    </p>
    <p class="note-line">
      בגרסאות ישנות שניהם נכתבו עם נקודתיים אחת, ודפדפנים עדיין מקבלים
      <code>:before</code>. בקוד חדש כותבים <code>::before</code> —
      כך רואים מיד מאיזה סוג הבורר.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להישבר</div>
  <div class="box-body">
    <ul>
      <li><strong>רווח מיותר</strong> — <code>.card &gt; p</code> תקין, אבל <code>. card</code> עם רווח אחרי הנקודה שבור.</li>
      <li><strong>בלבול בין רווח ל־<code>&gt;</code></strong> — רווח תופס בכל עומק, <code>&gt;</code> רק רמה אחת.</li>
      <li><strong><code>::before</code> בלי <code>content</code></strong> — לא יופיע כלל.</li>
      <li><strong><code>:first-child</code> כשהאלמנט אינו הראשון</strong> — הוא בודק מיקום בין <em>כל</em> האחים, לא רק בין אלה מאותו סוג. לשם כך יש <code>:first-of-type</code>.</li>
      <li><strong>מרכאות בבורר attribute</strong> — <code>[type=email]</code> בדרך כלל יעבוד, אבל <code>[type="email"]</code> תמיד בטוח.</li>
      <li><strong>תוכן חיוני ב־<code>::after</code></strong> — הוא עיצובי ולא נגיש.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>רווח</strong> — צאצא בכל עומק. <strong><code>&gt;</code></strong> — ילד ישיר בלבד.</li>
      <li><strong><code>+</code></strong> — האח הסמוך. <strong><code>~</code></strong> — כל האחים שאחריו.</li>
      <li><strong>בוררי attribute</strong> בסוגריים מרובעים, עם <code>^=</code> להתחלה, <code>$=</code> לסיום ו־<code>*=</code> להכלה.</li>
      <li><strong>פסאודו־מחלקה</strong> — נקודתיים אחת. בוחרת לפי <strong>מצב</strong> או <strong>מיקום</strong>.</li>
      <li><code>:hover</code> ו־<code>:focus</code> מגיבים למשתמש בלי JavaScript.</li>
      <li><strong>פסאודו־אלמנט</strong> — נקודתיים כפולה. מעצב <strong>חלק</strong> או יוצר תוכן.</li>
      <li><code>::before</code> ו־<code>::after</code> <strong>חייבים <code>content</code></strong>.</li>
      <li>תוכן שנוצר ב־CSS הוא עיצובי בלבד — לא שמים בו מידע חיוני.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל בין `.card p` לבין `.card > p`?
- אין הבדל, הסימן `>` הוא קיצור
+ הראשון תופס כל `<p>` בכל עומק, השני רק Child ישיר
- הראשון תופס רק את הפסקה הראשונה
- השני תופס גם אלמנטים מחוץ ל-`.card`
= רווח הוא קומבינטור צאצא, ו-`>` דורש רמה אחת בדיוק.

? כתבת `.tip::before { color: red; }` ושום דבר לא מופיע. מה חסר?
- `display: block`
+ המאפיין `content` — בלעדיו הפסאודו־אלמנט לא נוצר כלל
- נקודתיים אחת במקום כפולה
- צריך להוסיף את התוכן ב-HTML
= גם `content: ""` ריק מספיק כדי שייווצר. זו אחת הטעויות הנפוצות ביותר.

? איזה בורר יבחר כל קישור שמוביל לאתר חיצוני?
- `a[href="http"]`
+ `a[href^="http"]`
- `a[href$="http"]`
- `a:external`
= `^=` בודק התחלה, `$=` סיום ו-`*=` הכלה. `=` לבדו דורש התאמה מדויקת.

? מתי כותבים נקודתיים אחת ומתי כפולה?
- אחת לבוררים ישנים, כפולה לחדשים
+ אחת לפסאודו־מחלקה (מצב), כפולה לפסאודו־אלמנט (חלק או תוכן)
- אחת ל-class, כפולה ל-id
- אין חוק, שתיהן זהות
= `:hover` הוא מצב, `::before` הוא חלק. דפדפנים עדיין מקבלים `:before` מטעמי תאימות.

? למה לא לשים טקסט חשוב בתוך `::after`?
- כי הוא מוגבל ל-20 תווים
+ כי הוא תוכן עיצובי שלא קיים ב-DOM, אי אפשר לסמן אותו, וקוראי מסך מתייחסים אליו באופן לא עקבי
- כי הוא לא נתמך בנייד
- כי הוא מאט את טעינת הדף
= מידע חיוני שייך ל-HTML. `::after` מתאים לסימנים דקורטיביים כמו חץ או אייקון.
```
