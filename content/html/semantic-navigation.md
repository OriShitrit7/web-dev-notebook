# Semantic HTML & Navigation

<p class="lead">
בפרק הקודם ראינו ש־<code>&lt;div&gt;</code> יכול לבנות כל דף — ושדווקא בגלל זה הוא לא מספיק.
כאן נכיר את האלמנטים שמחליפים אותו: תגיות שמתארות <strong>את תפקיד החלק בדף</strong>,
ולא רק את מיקומו. זה הפרק שמחבר יחד את כל מה שלמדנו על מבנה.
</p>

## מה זה Semantic HTML?

<div class="box theory">
  <div class="box-head"><span class="icon">🏛️</span>תגית שמספרת מה היא</div>
  <div class="box-body">
    <p>
      <strong>סמנטי</strong> פירושו ״הקשור למשמעות״. אלמנט סמנטי הוא אלמנט
      ש<strong>שמו מתאר את תפקיד התוכן</strong> שבתוכו.
    </p>
    <p>
      <code>&lt;div class="header"&gt;</code> ו־<code>&lt;header&gt;</code> ייראו זהים לחלוטין
      בדפדפן. ההבדל הוא שאת השם <code>class="header"</code> המצאנו אנחנו,
      ואילו <code>&lt;header&gt;</code> הוא חלק מהתקן — <strong>וכל תוכנה בעולם מבינה אותו</strong>.
    </p>
  </div>
</div>

<div class="keypoint">
כלל שחוזר לאורך כל הקורס: לאלמנטים סמנטיים <strong>אין עיצוב ברירת מחדל</strong> משלהם.
הם לא משנים כלום במראה — רק במשמעות. בדיוק כמו <code>&lt;section&gt;</code> בפרק Headings.
</div>

## שלד של דף

<div class="box">
  <div class="box-body">
    <p>כמעט כל אתר בנוי מאותם חלקים. לכל אחד מהם יש אלמנט ייעודי:</p>
  </div>
</div>

<div class="figure">
  <svg viewBox="0 0 620 372" width="620" role="img" aria-label="תרשים של שלד דף: header, nav, main המכיל article ו-aside, ו-footer">
    <g font-family="'JetBrains Mono', monospace" font-size="15" text-anchor="middle">
      <rect x="20" y="20" width="580" height="50" rx="8" fill="#eef2ff" stroke="#c7d2fe"/>
      <text x="310" y="50" fill="#4f46e5">header</text>
      <rect x="20" y="80" width="580" height="38" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="310" y="104" fill="#1d4ed8">nav</text>
      <rect x="20" y="128" width="580" height="168" rx="8" fill="#fffefa" stroke="#cbd5e1"/>
      <text x="310" y="150" fill="#334155">main</text>
      <rect x="32" y="162" width="372" height="122" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="218" y="228" fill="#047857">article</text>
      <rect x="416" y="162" width="172" height="122" rx="6" fill="#fef9e7" stroke="#fcd34d"/>
      <text x="502" y="228" fill="#b45309">aside</text>
      <rect x="20" y="306" width="580" height="46" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
      <text x="310" y="334" fill="#334155">footer</text>
    </g>
  </svg>
  <div class="cap">
    החלוקה הטיפוסית של דף. <code>&lt;main&gt;</code> מכיל את התוכן המרכזי,
    ובתוכו <code>&lt;article&gt;</code> לתוכן עצמו ו־<code>&lt;aside&gt;</code> לתוכן נלווה.
  </div>
</div>

| אלמנט | מה הוא מסמן | כמה בדף |
| --- | --- | --- |
| `<header>` | ראש של דף או של חלק | כמה שצריך |
| `<nav>` | בלוק ניווט מרכזי | כמה שצריך |
| `<main>` | התוכן המרכזי של הדף | **אחד בלבד** |
| `<article>` | תוכן עצמאי שעומד בפני עצמו | כמה שצריך |
| `<section>` | קיבוץ נושאי, בדרך כלל עם כותרת | כמה שצריך |
| `<aside>` | תוכן נלווה, לא מרכזי | כמה שצריך |
| `<footer>` | תחתית של דף או של חלק | כמה שצריך |

## main

<div class="box theory">
  <div class="box-head"><span class="icon">🎯</span>אחד ויחיד</div>
  <div class="box-body">
    <p>
      <code>&lt;main&gt;</code> מסמן את <strong>התוכן המרכזי והייחודי</strong> של הדף —
      מה שמשתנה מדף לדף.
    </p>
    <p>
      מה שחוזר בכל הדפים (תפריט, לוגו, תחתית) נשאר <strong>מחוץ</strong> ל־<code>&lt;main&gt;</code>.
    </p>
    <p class="note-line">
      זה האלמנט היחיד בקבוצה שמותר רק פעם אחת בדף, ואסור לו להיות בתוך
      <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;header&gt;</code>,
      <code>&lt;footer&gt;</code> או <code>&lt;nav&gt;</code>.
    </p>
  </div>
</div>

## header ו־footer

<div class="box theory">
  <div class="box-head"><span class="icon">📐</span>יחסיים, לא מוחלטים</div>
  <div class="box-body">
    <p>
      טעות נפוצה: לחשוב ש־<code>&lt;header&gt;</code> הוא ״ראש הדף״ ו־<code>&lt;footer&gt;</code>
      הוא ״תחתית הדף״.
    </p>
    <p>
      בפועל הם <strong>יחסיים לחלק שבתוכו הם נמצאים</strong>. ל־<code>&lt;article&gt;</code>
      יכול להיות <code>&lt;header&gt;</code> משלו עם הכותרת ותאריך הפרסום,
      ו־<code>&lt;footer&gt;</code> משלו עם התגיות.
    </p>
  </div>
</div>

```html
<article>
  <header>
    <h2>Post title</h2>
    <p>Published 2026-01-15</p>
  </header>

  <p>The body of the post.</p>

  <footer>
    <p>Tags: html, css</p>
  </footer>
</article>
```

## nav

<div class="box theory">
  <div class="box-head"><span class="icon">🧭</span>ניווט מרכזי</div>
  <div class="box-body">
    <p>
      <code>&lt;nav&gt;</code> מסמן <strong>בלוק ניווט משמעותי</strong> —
      התפריט הראשי, ניווט משני, פירורי לחם.
    </p>
    <p>
      לא כל קבוצת קישורים צריכה <code>&lt;nav&gt;</code>. רשימת קישורים בתוך פסקת טקסט,
      למשל, היא סתם קישורים.
    </p>
    <p>
      התוכן שבתוכו הוא כמעט תמיד <code>&lt;ul&gt;</code> של קישורים —
      בדיוק כמו שראינו בסוף פרק Lists.
    </p>
  </div>
</div>

```demo
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      נראה כמו רשימה רגילה, וזה בסדר גמור — ב־CSS נהפוך אותה לשורה אופקית.
      מה שהשתנה הוא שקורא מסך מכריז עכשיו ״ניווט, רשימה בת 3 פריטים״.
    </p>
  </div>
</div>

## article מול section

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הבלבול הנפוץ ביותר</div>
  <div class="box-body">
    <p>שניהם מקבצים תוכן, וקל להתבלבל ביניהם. ההבחנה:</p>
    <ul>
      <li>
        <strong><code>&lt;article&gt;</code></strong> — תוכן <strong>שעומד בפני עצמו</strong>.
        אם תיקחי אותו ותפרסמי במקום אחר, הוא עדיין יהיה מובן.
      </li>
      <li>
        <strong><code>&lt;section&gt;</code></strong> — <strong>חלק מתוך משהו גדול יותר</strong>.
        לבד הוא מאבד הקשר.
      </li>
    </ul>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>המבחן</div>
  <div class="box-body">
    <p>
      שאלי: <strong>״אם אשלח רק את החלק הזה בהודעה, הוא יעמוד בפני עצמו?״</strong>
    </p>
    <ul>
      <li>פוסט בבלוג, כתבה, תגובה, כרטיס מוצר — <code>&lt;article&gt;</code>.</li>
      <li>פרק ״אודות״ בתוך דף, קבוצת שאלות נפוצות — <code>&lt;section&gt;</code>.</li>
    </ul>
    <p class="note-line">
      אפשר גם לקנן: <code>&lt;article&gt;</code> ארוך יכול להתחלק בתוכו לכמה
      <code>&lt;section&gt;</code>, ודף <code>&lt;section&gt;</code> יכול להכיל כמה
      <code>&lt;article&gt;</code> (למשל רשימת פוסטים).
    </p>
  </div>
</div>

## aside

<div class="box">
  <div class="box-body">
    <p>
      <code>&lt;aside&gt;</code> מסמן תוכן <strong>קשור אך לא מרכזי</strong>:
      סרגל צד, ״כתבות נוספות״, הגדרת מונח בצד הטקסט, פרסומת.
    </p>
    <p class="note-line">
      המבחן: אם נסיר אותו, האם התוכן המרכזי עדיין שלם? אם כן — זה
      <code>&lt;aside&gt;</code>.
    </p>
  </div>
</div>

## דף שלם

<div class="box">
  <div class="box-body">
    <p>וכך נראה שלד מלא של דף, עם כל החלקים ביחד:</p>
  </div>
</div>

```demo
<header>
  <h1>My Blog</h1>
</header>
<nav>
  <a href="#">Home</a>
</nav>
<main>
  <article>
    <h2>First post</h2>
    <p>The body text.</p>
  </article>
  <aside>
    <h2>Related</h2>
    <p>Another post.</p>
  </aside>
</main>
<footer>
  <p>&copy; 2026</p>
</footer>
```

<div class="keypoint">
שימי לב שהתצוגה נראית כמו רשימת טקסטים פשוטה — <strong>בלי CSS אין כאן שום פריסה</strong>.
כל האלמנטים האלה הם block, ולכן הם פשוט נערמים. הסידור לעמודות יגיע בפרקי ה־CSS.
</div>

## למה זה באמת משנה

<div class="box theory">
  <div class="box-head"><span class="icon">♿</span>Landmarks</div>
  <div class="box-body">
    <p>
      קוראי מסך הופכים את האלמנטים האלה ל<strong>נקודות ציון</strong> (landmarks)
      שהמשתמש יכול לקפוץ ביניהן ישירות.
    </p>
    <p>
      משתמש שמגיע לדף יכול לומר ״קפוץ ל־main״ ולדלג על כל התפריט —
      במקום להאזין להקראה של עשרים קישורים בכל דף מחדש.
    </p>
    <p>
      בדף שבנוי כולו מ־<code>&lt;div&gt;</code> פשוט <strong>אין נקודות ציון</strong>,
      והאפשרות הזו לא קיימת.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">סמנטי</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;
  &lt;article&gt;...&lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">מרק דיבים</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;div class="header"&gt;...&lt;/div&gt;
&lt;div class="nav"&gt;...&lt;/div&gt;
&lt;div class="main"&gt;
  &lt;div class="post"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;...&lt;/div&gt;</code></pre>
    </div>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      שתי הגרסאות ייראו <strong>זהות לחלוטין</strong> אחרי CSS. ההבדל כולו במה
      שתוכנות מבינות — וזו בדיוק הסיבה שקל כל כך לוותר על זה בלי לשים לב.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטים לפספס</div>
  <div class="box-body">
    <ul>
      <li><strong>כמה <code>&lt;main&gt;</code> בדף</strong> — מותר רק אחד.</li>
      <li><strong><code>&lt;main&gt;</code> בתוך <code>&lt;article&gt;</code> או <code>&lt;header&gt;</code></strong> — אסור.</li>
      <li><strong><code>&lt;nav&gt;</code> לכל קבוצת קישורים</strong> — רק לניווט משמעותי.</li>
      <li><strong><code>&lt;section&gt;</code> בלי כותרת</strong> — אם אין לחלק כותרת, כנראה שהתכוונת ל־<code>&lt;div&gt;</code>.</li>
      <li><strong><code>&lt;article&gt;</code> לכל בלוק</strong> — רק לתוכן שעומד בפני עצמו.</li>
      <li><strong>ציפייה לעיצוב</strong> — האלמנטים האלה לא מסדרים את הדף. זה תפקיד ה־CSS.</li>
      <li><strong>תפריט בלי <code>&lt;ul&gt;</code></strong> — קישורים רצופים בלי רשימה לא נספרים לקורא מסך.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>אלמנט <strong>סמנטי</strong> הוא אלמנט ששמו מתאר את תפקיד התוכן.</li>
      <li>לאלמנטים האלה <strong>אין עיצוב ברירת מחדל</strong> — הם משנים משמעות, לא מראה.</li>
      <li><strong><code>&lt;main&gt;</code></strong> — התוכן המרכזי. <strong>אחד בלבד</strong> בדף.</li>
      <li><strong><code>&lt;header&gt;</code></strong> ו־<strong><code>&lt;footer&gt;</code></strong> יחסיים לחלק שבתוכו הם נמצאים, ולא רק לדף.</li>
      <li><strong><code>&lt;nav&gt;</code></strong> — ניווט משמעותי, בדרך כלל <code>&lt;ul&gt;</code> של קישורים.</li>
      <li><strong><code>&lt;article&gt;</code></strong> עומד בפני עצמו; <strong><code>&lt;section&gt;</code></strong> הוא חלק ממשהו גדול יותר.</li>
      <li><strong><code>&lt;aside&gt;</code></strong> — תוכן נלווה שאפשר להסיר בלי לפגוע בעיקר.</li>
      <li>האלמנטים האלה הם <strong>landmarks</strong> שמאפשרים למשתמשי קורא מסך לנווט בדף.</li>
    </ul>
  </div>
</div>
