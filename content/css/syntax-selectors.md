# Syntax & Selectors

<p class="lead">
כל CSS בעולם בנויה מאותה יחידה אחת: <strong>כלל</strong>.
כלל אומר ״על מי לפעול״ ו״מה לשנות״. בפרק הזה נפרק את המבנה שלו לחלקים,
ונלמד את שלוש הדרכים הבסיסיות לבחור אלמנטים בדף.
</p>

## המבנה של כלל

<div class="figure">
  <svg viewBox="0 0 680 220" width="680" role="img" aria-label="תרשים: כלל CSS מורכב מבורר, מאפיין, ערך, הצהרה ובלוק הצהרות">
    <g font-family="Assistant, sans-serif" font-size="13" fill="#6b6b70" text-anchor="middle">
      <text x="217" y="64">בורר</text>
      <text x="304" y="64">מאפיין</text>
      <text x="397" y="64">ערך</text>
    </g>
    <g fill="none" stroke="#a8a29e" stroke-width="1.5" stroke-linejoin="round">
      <path d="M204,84 V76 H231 V84" />
      <path d="M268,84 V76 H340 V84" />
      <path d="M362,84 V76 H432 V84" />
      <path d="M268,126 V140 H440 V126" />
      <path d="M239,170 V184 H469 V170" />
    </g>
    <g font-family="'JetBrains Mono', monospace" font-size="24">
      <text x="210" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#4f46e5">p</text>
      <text x="239" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#6b6b70">{</text>
      <text x="268" y="112" textLength="72" lengthAdjust="spacingAndGlyphs" fill="#1d4ed8">color</text>
      <text x="340" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#6b6b70">:</text>
      <text x="368" y="112" textLength="58" lengthAdjust="spacingAndGlyphs" fill="#047857">blue</text>
      <text x="426" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#6b6b70">;</text>
      <text x="455" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#6b6b70">}</text>
    </g>
    <g font-family="Assistant, sans-serif" font-size="14" font-weight="700" text-anchor="middle">
      <text x="354" y="158" fill="#047857">הצהרה אחת</text>
      <text x="354" y="202" fill="#4f46e5">בלוק ההצהרות</text>
    </g>
  </svg>
  <div class="cap">
    הבורר בוחר על מי הכלל חל. בתוך הסוגריים המסולסלים יושבות ההצהרות,
    שכל אחת מהן היא זוג של מאפיין וערך.
  </div>
</div>

<div class="box theory">
  <div class="box-head"><span class="icon">🧩</span>חמישה מושגים</div>
  <div class="box-body">
    <ul>
      <li><strong>Selector</strong> (בורר) — <em>על מי</em> הכלל חל. כאן: כל <code>&lt;p&gt;</code> בדף.</li>
      <li><strong>Property</strong> (מאפיין) — <em>מה</em> משנים. כאן: הצבע.</li>
      <li><strong>Value</strong> (ערך) — <em>למה</em> משנים אותו. כאן: כחול.</li>
      <li><strong>Declaration</strong> (הצהרה) — זוג של מאפיין וערך, מופרדים בנקודתיים.</li>
      <li><strong>Declaration block</strong> — כל ההצהרות יחד, בתוך <code>{ }</code>.</li>
    </ul>
  </div>
</div>

## כמה הצהרות בכלל אחד

<div class="box">
  <div class="box-body">
    <p>
      כלל יכול להכיל כמה הצהרות שרוצים. כל הצהרה מסתיימת ב<strong>נקודה־פסיק</strong>:
    </p>
  </div>
</div>

```css
p {
  color: blue;
  font-size: 18px;
  line-height: 1.6;
}
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הנקודה־פסיק שנשכחת</div>
  <div class="box-body">
    <p>
      טכנית מותר להשמיט את הנקודה־פסיק אחרי ההצהרה <strong>האחרונה</strong> בבלוק.
      בפועל — אל תעשי את זה.
    </p>
    <p>
      ברגע שתוסיפי הצהרה נוספת מתחתיה, שתי השורות יתמזגו לאחת שגויה,
      <strong>ושתיהן יתבטלו</strong>. הדפדפן לא יתלונן; פשוט שום דבר לא יקרה.
    </p>
    <p class="note-line">
      הרגל בטוח: נקודה־פסיק אחרי כל הצהרה, תמיד.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">תקין</div>
    <div class="compare-body">
<pre><code class="language-css">p {
  color: blue;
  font-size: 18px;
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">שתי ההצהרות יתבטלו</div>
    <div class="compare-body">
<pre><code class="language-css">p {
  color: blue
  font-size: 18px;
}</code></pre>
    </div>
  </div>
</div>

## הערות

<div class="box">
  <div class="box-body">
    <p>
      הערה ב־CSS נכתבת בין <code>/*</code> ל־<code>*/</code>, ויכולה להשתרע על כמה שורות.
      היא לא משפיעה על שום דבר, ומשמשת להסבר או לנטרול זמני של קוד.
    </p>
    <p class="note-line">
      שימי לב: ב־CSS <strong>אין</strong> הערת שורה בודדת עם <code>//</code>.
      זה תחביר של JavaScript, ואם תכתבי אותו ב־CSS הוא ישבור את הכלל.
    </p>
  </div>
</div>

```css
/* כותרות ראשיות */
h1 {
  color: navy;   /* אפשר גם בסוף שורה */
}
```

## שלושת הבוררים הבסיסיים

| בורר | נכתב כך | בוחר |
| --- | --- | --- |
| **Type** (אלמנט) | `p` | כל אלמנטי `<p>` בדף |
| **Class** | `.note` | כל אלמנט עם `class="note"` |
| **ID** | `#header` | האלמנט עם `id="header"` |

<div class="box">
  <div class="box-body">
    <p>
      שימי לב לסימן שלפני השם: <strong>נקודה</strong> ל־class,
      <strong>סולמית</strong> ל־id, ו<strong>כלום</strong> לשם תגית.
    </p>
    <p>שלושתם בפעולה:</p>
  </div>
</div>

```demo
<style>
  p { color: #6b6b70; }
  .highlight { color: #047857; }
  #unique { color: #be123c; }
</style>
<p>element selector</p>
<p class="highlight">class selector</p>
<p id="unique">id selector</p>
```

<div class="keypoint">
שלוש הפסקאות הן <code>&lt;p&gt;</code>, ולכן הכלל הראשון חל על כולן.
בשתיים האחרונות <strong>כלל נוסף דרס אותו</strong> — וההכרעה הזו היא בדיוק
הנושא של פרק <strong>Cascade, Specificity &amp; Inheritance</strong>.
</div>

### class מול id

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>מתי כל אחד</div>
  <div class="box-body">
    <p>ההבדל מוכר מפרק Attributes ב־HTML, ועכשיו רואים למה הוא משנה בפועל:</p>
    <ul>
      <li><strong><code>class</code></strong> — אפשר לתת לכמה אלמנטים, ואלמנט יכול לשאת כמה מהם.</li>
      <li><strong><code>id</code></strong> — ייחודי. אלמנט אחד בדף, ו־id אחד לאלמנט.</li>
    </ul>
    <p class="note-line">
      בפועל <strong>כמעט תמיד משתמשים ב־class לעיצוב</strong>.
      ה־id שמור לעוגנים בדף ולאחיזה מ־JavaScript.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה להימנע מ־id בעיצוב</div>
  <div class="box-body">
    <p>
      id הוא <strong>חזק מדי</strong>. כלל שנכתב עם id קשה מאוד לדרוס אחר כך,
      ובסוף נאלצים להוסיף <code>!important</code> — וזו כבר התחלה של בלגן.
    </p>
    <p>
      בנוסף, id ייחודי מעצם הגדרתו, ולכן כלל שכתוב איתו אף פעם לא ניתן לשימוש חוזר.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>אלמנט יכול לשאת כמה classes, מופרדים ברווח — וכל הכללים המתאימים יחולו עליו יחד:</p>
  </div>
</div>

```demo
<style>
  .box { border: 2px solid #cbd5e1; padding: 10px; }
  .warning { color: #be123c; }
</style>
<p class="box">רק box</p>
<p class="box warning">box וגם warning</p>
```

## בורר משולב

<div class="box theory">
  <div class="box-head"><span class="icon">🔗</span>כמה תנאים על אותו אלמנט</div>
  <div class="box-body">
    <p>
      בדמו האחרון היו <strong>שני כללים נפרדים</strong> — <code>.box</code> ו־<code>.warning</code> —
      וכל אחד מהם חל על הפסקה בזכות עצמו. אבל אפשר גם לדרוש את שניהם <strong>יחד</strong>.
    </p>
    <p>
      כשמצמידים שני בוררים <strong>בלי רווח ביניהם</strong>, הם מתארים
      <strong>אלמנט אחד</strong> שחייב לעמוד בכל התנאים:
    </p>
    <p>
      <code>.box.warning</code> — כל אלמנט שנושא גם את <code>box</code>
      <strong>וגם</strong> את <code>warning</code>.
    </p>
    <p class="note-line">
      הצורה הזו נקראת <strong>compound selector</strong>, בורר משולב.
      יש קורסים שקוראים לה <em>Inclusion</em>.
    </p>
  </div>
</div>

```demo
<style>
  p { font-family: system-ui; margin: 0 0 6px; }
  .box { border: 2px solid #cbd5e1; padding: 8px; }
  .warning { color: #be123c; }
  .box.warning { background: #fff1f2; font-weight: bold; }
</style>
<p class="box">box only</p>
<p class="warning">warning only</p>
<p class="box warning">box and warning together</p>
```

<div class="keypoint">
רק לפסקה השלישית יש רקע ורוד וטקסט מודגש, כי <strong>רק היא</strong>
נושאת את שני ה־classes. שתי הראשונות מקבלות את הכללים הבודדים בלבד.
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>רווח אחד, משמעות אחרת</div>
  <div class="box-body">
    <p>זו טעות שקשה מאוד לראות בעין, כי ההבדל הוא תו אחד:</p>
    <ul>
      <li><code>.card.active</code> — <strong>אלמנט אחד</strong> שיש לו את שני ה־classes.</li>
      <li><code>.card .active</code> — אלמנט עם <code>active</code> <strong>שנמצא בתוך</strong> אלמנט עם <code>card</code>. <strong>שני אלמנטים שונים.</strong></li>
    </ul>
    <p class="note-line">
      כבר ראינו שרווח <strong>במקום פסיק</strong> משנה את המשמעות. עכשיו מתברר
      שגם רווח <strong>מיותר</strong> עושה את זה. את היחס שהרווח מתאר נלמד בפרק הבא.
    </p>
  </div>
</div>

```demo
<style>
  div { font-family: system-ui; }
  .card { border: 2px solid #cbd5e1; padding: 8px; margin-bottom: 8px; }
  .card.active { background: #eef2ff; }
  .card .active { color: #be123c; font-weight: bold; }
</style>
<div class="card active">card AND active — blue background</div>
<div class="card"><span class="active">active inside card — red text</span></div>
```

<div class="box">
  <div class="box-body">
    <p>אפשר לשלב גם סוגים שונים של בוררים, לא רק שני classes:</p>
    <ul>
      <li><code>p.note</code> — רק <code>&lt;p&gt;</code> שיש לו <code>class="note"</code>. <code>&lt;div class="note"&gt;</code> לא ייתפס.</li>
      <li><code>a.btn.primary</code> — קישור שנושא את שני ה־classes.</li>
      <li><code>#main.active</code> — האלמנט שה־id שלו <code>main</code>, וגם יש לו class בשם <code>active</code>.</li>
    </ul>
    <p class="note-line">
      אם יש שם תגית בבורר המשולב, הוא תמיד <strong>מתחיל</strong> בה:
      <code>p.note</code> תקין, ואילו <code>.notep</code> הוא פשוט שם class אחר לגמרי.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>הדפוס שבשבילו זה נועד</div>
  <div class="box-body">
    <p>
      כך בונים <strong>וריאציה</strong> של רכיב: <code>.btn</code> מגדיר את הבסיס
      המשותף, ו־<code>.btn.danger</code> משנה רק את מה שבאמת שונה בגרסה האדומה.
      ב־HTML כותבים <code>class="btn danger"</code>, והאלמנט מקבל את שניהם.
    </p>
    <p class="note-line">
      בורר משולב הוא גם <strong>ספציפי יותר</strong> מכל אחד מחלקיו בנפרד,
      ולכן הוא דורס אותם בלי מאמץ. את המנגנון המדויק נראה בפרק
      <strong>Cascade, Specificity &amp; Inheritance</strong>.
    </p>
  </div>
</div>

## הבורר האוניברסלי

<div class="box">
  <div class="box-body">
    <p>
      <code>*</code> בוחר <strong>כל</strong> אלמנט בדף. משתמשים בו בעיקר לאיפוס ברירות מחדל
      בתחילת קובץ CSS:
    </p>
  </div>
</div>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שלוש השורות האלה הן ה־reset הנפוץ ביותר. הן מנטרלות את המרווחים שהדפדפן
      מוסיף מעצמו — בדיוק אלה שדיברנו עליהם בפרק Overview.
      את <code>box-sizing</code> נבין בפרק <strong>Box Model</strong>.
    </p>
  </div>
</div>

## קיבוץ בוררים

<div class="box">
  <div class="box-body">
    <p>
      כשכמה בוררים צריכים את אותו עיצוב, מפרידים ביניהם ב<strong>פסיק</strong>
      במקום לשכפל את הכלל:
    </p>
  </div>
</div>

```demo
<style>
  h2, h3, p {
    color: #4f46e5;
    font-family: system-ui;
  }
</style>
<h2>Heading two</h2>
<h3>Heading three</h3>
<p>And a paragraph.</p>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>פסיק חסר משנה את המשמעות לגמרי</div>
  <div class="box-body">
    <p>
      <code>h2, p</code> פירושו ״כל <code>&lt;h2&gt;</code> <strong>וגם</strong> כל <code>&lt;p&gt;</code>״.
    </p>
    <p>
      <code>h2 p</code> — בלי פסיק — פירושו משהו אחר לגמרי:
      ״כל <code>&lt;p&gt;</code> <strong>שנמצא בתוך</strong> <code>&lt;h2&gt;</code>״.
    </p>
    <p class="note-line">
      זה קומבינטור, ונלמד אותו בפרק הבא. בינתיים רק כדאי לדעת
      שרווח במקום פסיק הוא טעות שקשה לאתר.
    </p>
  </div>
</div>

## שמות תקינים ל־class ול־id

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>כללים</div>
  <div class="box-body">
    <ul>
      <li>מתחילים ב<strong>אות</strong>, לא בספרה.</li>
      <li>בלי רווחים — רווח מפריד בין שני classes שונים.</li>
      <li>מותרים אותיות, ספרות, מקף <code>-</code> וקו תחתון <code>_</code>.</li>
      <li><strong>רגישים לאותיות גדולות וקטנות</strong>: <code>.Box</code> אינו <code>.box</code>.</li>
    </ul>
    <p class="note-line">
      הנוהג המקובל: אותיות קטנות עם מקפים, כמו <code>.product-card</code>.
      ושם שמתאר <strong>מה זה</strong> ולא איך זה נראה — <code>.warning</code> עדיף על <code>.red-text</code>,
      כי מחר הצבע עשוי להשתנות.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר כללים</div>
  <div class="box-body">
    <ul>
      <li><strong>נקודה־פסיק חסרה</strong> — ההצהרה הבאה נבלעת ושתיהן מתבטלות.</li>
      <li><strong>נקודה או סולמית חסרות</strong> — <code>note</code> מחפש תגית בשם note, לא class.</li>
      <li><strong>נקודה או סולמית ב־HTML</strong> — כותבים <code>class="note"</code>, לא <code>class=".note"</code>.</li>
      <li><strong><code>//</code> להערה</strong> — לא קיים ב־CSS. רק <code>/* */</code>.</li>
      <li><strong>רווח במקום פסיק</strong> — <code>h2 p</code> אינו <code>h2, p</code>.</li>
      <li><strong>רווח מיותר בבורר משולב</strong> — <code>.box .warning</code> אינו <code>.box.warning</code>.</li>
      <li><strong>אותיות גדולות בשם</strong> — <code>.myBox</code> ו־<code>.mybox</code> הם שני דברים שונים.</li>
      <li><strong>סוגר מסולסל חסר</strong> — כל הכללים שאחריו עלולים להתבטל.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>כלל = <strong>בורר</strong> + <strong>בלוק הצהרות</strong> בתוך <code>{ }</code>.</li>
      <li>הצהרה = <strong>מאפיין</strong> <code>:</code> <strong>ערך</strong> <code>;</code></li>
      <li><strong>נקודה־פסיק אחרי כל הצהרה</strong> — גם האחרונה.</li>
      <li>הערות נכתבות <code>/* כך */</code> בלבד. אין <code>//</code> ב־CSS.</li>
      <li><strong>בורר אלמנט</strong> — <code>p</code>. <strong>class</strong> — <code>.note</code>. <strong>id</strong> — <code>#header</code>.</li>
      <li>לעיצוב משתמשים כמעט תמיד ב־<strong>class</strong>; id חזק מדי וקשה לדרוס.</li>
      <li>אלמנט יכול לשאת <strong>כמה classes</strong>, מופרדים ברווח.</li>
      <li><strong>בורר משולב</strong> — <code>.box.warning</code>, בלי רווח — דורש שאלמנט <strong>אחד</strong> יעמוד בכל התנאים.</li>
      <li><code>*</code> בוחר הכול, ומשמש בעיקר ל־reset.</li>
      <li><strong>פסיק</strong> מקבץ בוררים; רווח פירושו משהו אחר לגמרי.</li>
      <li>שמות: אותיות קטנות עם מקפים, ולפי <strong>המשמעות</strong> ולא לפי המראה.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? בכלל `h1 { color: navy; }` — מהו `color`?
- הבורר
+ המאפיין
- הערך
- ההצהרה
= `h1` הוא הבורר, `color` המאפיין, `navy` הערך, וכל הזוג יחד הוא ההצהרה.

? מה קורה כששוכחים נקודה־פסיק אחרי הצהרה שאינה האחרונה?
- רק ההצהרה הבאה תתבטל
+ שתי ההצהרות יתבטלו, בלי שום הודעת שגיאה
- הדפדפן ישלים את הנקודה־פסיק לבד
- כל קובץ ה-CSS לא ייטען
= השורות מתמזגות להצהרה אחת שגויה. הדפדפן פשוט מתעלם, ולכן קשה לאתר את זה.

? איזה בורר בוחר אלמנט שנכתב ב-HTML כ-`class="note"`?
- `note`
- `#note`
+ `.note`
- `*note`
= נקודה ל-class, סולמית ל-id, וכלום לשם תגית. הסימנים האלה לא נכתבים ב-HTML עצמו.

? למה עדיף לעצב עם `class` ולא עם `id`?
- כי `id` אינו נתמך בכל הדפדפנים
+ כי `id` ייחודי ולא ניתן לשימוש חוזר, והוא חזק מדי ולכן קשה לדרוס אותו
- כי `class` נטען מהר יותר
- אין העדפה, זה עניין של טעם
= כלל עם id מוביל בסוף ל-`!important` כדי לעקוף אותו, וזו תחילת הבלגן.

? מה ההבדל בין `h2, p` לבין `h2 p`?
- אין הבדל, הפסיק אופציונלי
+ הראשון בוחר את שניהם, השני בוחר רק `<p>` שנמצא בתוך `<h2>`
- הראשון חוקי והשני שגוי
- הראשון בוחר את הראשון מביניהם בלבד
= רווח הוא קומבינטור שמתאר יחס הכלה. פסיק חסר הוא טעות שקשה מאוד לאתר.
```
