# Box Model

<p class="lead">
כל אלמנט בדף הוא מלבן — גם כותרת, גם פסקה, גם תמונה. סביב המלבן הזה יש שלוש
שכבות נוספות שקובעות כמה מקום הוא באמת תופס. ברגע שמבינים את ארבע השכבות,
רוב ה״למה זה זז לי?״ מפסיק להיות מסתורי.
</p>

<div class="figure">
  <svg viewBox="0 0 680 340" width="680" role="img" aria-label="תרשים: ארבע שכבות מודל הקופסה — content בפנים, ומסביבו padding, border ו־margin">
    <rect x="30" y="24" width="620" height="252" rx="6" fill="#fef9e7" stroke="#fcd34d" stroke-width="1.5" stroke-dasharray="7 5" />
    <rect x="92" y="58" width="496" height="184" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5" />
    <rect x="112" y="78" width="456" height="144" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
    <rect x="152" y="106" width="376" height="88" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1.5" />
    <g font-family="'JetBrains Mono', monospace" font-size="13" text-anchor="middle">
      <text x="340" y="46" fill="#b45309">margin</text>
      <text x="340" y="73" fill="#334155">border</text>
      <text x="340" y="98" fill="#047857">padding</text>
      <text x="340" y="149" fill="#312e81">content</text>
    </g>
    <g font-family="Assistant, sans-serif" font-size="12" fill="#6b6b70" text-anchor="middle">
      <text x="340" y="166">הטקסט או התמונה עצמם</text>
    </g>
    <g fill="none" stroke="#4f46e5" stroke-width="1" stroke-dasharray="4 4">
      <path d="M152,194 V296" />
      <path d="M528,194 V296" />
    </g>
    <g fill="none" stroke="#4f46e5" stroke-width="1.5">
      <path d="M152,296 H528" />
      <path d="M152,290 V302" />
      <path d="M528,290 V302" />
    </g>
    <g font-family="'JetBrains Mono', monospace" font-size="13" fill="#4f46e5" text-anchor="middle">
      <text x="340" y="322">width</text>
    </g>
  </svg>
  <div class="cap">
    ארבע השכבות, מבפנים החוצה. שימי לב איפה נמדד <code>width</code> כברירת מחדל —
    רק על ה־content, בלי ה־padding וה־border. זו הנקודה שנחזור אליה בהמשך הפרק.
  </div>
</div>

## ארבע השכבות

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>מה כל שכבה עושה</div>
  <div class="box-body">
    <ul>
      <li><strong>content</strong> — התוכן עצמו: הטקסט, התמונה, הווידאו.</li>
      <li><strong><code>padding</code></strong> — ריווח <strong>פנימי</strong>, בין התוכן למסגרת. <em>בתוך</em> הקופסה.</li>
      <li><strong><code>border</code></strong> — המסגרת עצמה. יש לה עובי, והעובי הזה תופס מקום.</li>
      <li><strong><code>margin</code></strong> — ריווח <strong>חיצוני</strong>, בין הקופסה הזו לשכנות שלה.</li>
    </ul>
    <p class="note-line">
      סדר השכבות הוא תמיד הסדר הזה, ולא ניתן לשנות אותו.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>ההבדל שהכי כדאי לזכור:</strong> <code>padding</code> דוחף את התוכן פנימה,
<code>margin</code> דוחף את השכנים החוצה. אם רצית להרחיק שני כפתורים זה מזה —
זה <code>margin</code>. אם רצית שלכפתור יהיה אוויר סביב הטקסט שבו — זה <code>padding</code>.
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎨</span>איפה הרקע נגמר</div>
  <div class="box-body">
    <p>
      יש דרך מהירה לראות את הגבול בין השכבות: <code>background-color</code>
      שפגשנו בפרק Colors &amp; Backgrounds <strong>צובע את ה־content ואת ה־padding</strong>
      ומגיע עד המסגרת — אבל <strong>לא את ה־margin</strong>.
    </p>
    <p class="note-line">
      ה־<code>margin</code> תמיד שקוף. לכן כשמוסיפים <code>padding</code> לכפתור
      הרקע הצבעוני גדל, וכשמוסיפים <code>margin</code> הוא נשאר בדיוק באותו גודל
      ורק מתרחק משכניו.
    </p>
  </div>
</div>

```demo
<style>
  div { font-family: system-ui; background: #4f46e5; color: white;
        width: 220px; }
  .pad { padding: 20px; }
  .mar { margin: 20px; }
</style>
<div class="pad">padding: 20px — the blue grew</div>
<div class="mar">margin: 20px — the blue did not</div>
```

## סדר השעון

<div class="box theory">
  <div class="box-head"><span class="icon">🕐</span>ארבעה ערכים, בכיוון השעון</div>
  <div class="box-body">
    <p>
      גם <code>padding</code> וגם <code>margin</code> הם <strong>קיצורים</strong>
      שאפשר לכתוב בארבע צורות. כשיש ארבעה ערכים הסדר הוא
      <strong>למעלה, ימין, למטה, שמאל</strong> — כיוון השעון, מלמעלה.
    </p>
  </div>
</div>

| כמה ערכים | הפירוש |
| --- | --- |
| `padding: 10px` | כל ארבעת הצדדים |
| `padding: 10px 20px` | למעלה ולמטה \| ימין ושמאל |
| `padding: 10px 20px 30px` | למעלה \| ימין ושמאל \| למטה |
| `padding: 10px 20px 30px 40px` | למעלה \| ימין \| למטה \| שמאל |

<div class="box">
  <div class="box-body">
    <p>
      אפשר גם לפנות לצד בודד ישירות:
      <code>padding-top</code>, <code>margin-bottom</code>, <code>padding-left</code> וכן הלאה.
      זה נוח כשרוצים לשנות רק צד אחד בלי לכתוב מחדש את כל הקיצור.
    </p>
  </div>
</div>

```demo
<style>
  div { background: #eef2ff; border: 1px solid #c7d2fe;
        font-family: system-ui; margin-bottom: 8px; }
  .a { padding: 20px; }
  .b { padding: 4px 30px; }
  .c { padding: 20px 4px 4px; }
</style>
<div class="a">padding: 20px</div>
<div class="b">padding: 4px 30px</div>
<div class="c">padding: 20px 4px 4px</div>
```

### הגרסאות הלוגיות

<div class="box example">
  <div class="box-head"><span class="icon">↔️</span>שוב start ו־end</div>
  <div class="box-body">
    <p>
      בדיוק כמו <code>text-align: start</code> מפרק Typography, גם למרווחים
      יש גרסאות שמסתגלות לכיוון הכתיבה:
    </p>
    <ul>
      <li><code>padding-inline</code> / <code>margin-inline</code> — הציר <strong>האופקי</strong> (בכתיבה רגילה).</li>
      <li><code>padding-block</code> / <code>margin-block</code> — הציר <strong>האנכי</strong>.</li>
      <li><code>margin-inline-start</code> — הצד ש<strong>מתחיל</strong> בו הטקסט: ימין ב־RTL, שמאל ב־LTR.</li>
    </ul>
    <p class="note-line">
      <code>padding-block: 12px</code> שקול ל־<code>padding-top: 12px; padding-bottom: 12px</code> —
      גם קצר יותר וגם לא יישבר אם כיוון הכתיבה ישתנה.
    </p>
  </div>
</div>

## box-sizing — המאפיין שפותר את הבלגן

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>ברירת המחדל מפתיעה</div>
  <div class="box-body">
    <p>
      כברירת מחדל <code>width</code> מודד <strong>רק את ה־content</strong>.
      כלומר לאלמנט עם
      <code>width: 200px; padding: 20px; border: 5px solid</code>
      הרוחב האמיתי על המסך הוא:
    </p>
    <p><code>200 + 20 + 20 + 5 + 5 = 250px</code></p>
    <p>
      ביקשת 200 וקיבלת 250. זו התנהגות המצב <code>content-box</code>,
      והיא הסיבה המרכזית לפריסות שגולשות בלי סיבה נראית לעין.
    </p>
  </div>
</div>

<div class="box theory">
  <div class="box-head"><span class="icon">🔧</span>border-box</div>
  <div class="box-body">
    <p>
      <code>box-sizing: border-box</code> משנה את המדידה: עכשיו
      <code>width</code> כולל גם את ה־padding וגם את ה־border.
      אותו אלמנט יתפוס <strong>בדיוק 200 פיקסלים</strong>,
      וה־content פשוט יתכווץ ל־150.
    </p>
    <p class="note-line">
      ה־<code>margin</code> <strong>אף פעם לא</strong> נכלל ב־<code>width</code>,
      בשני המצבים. הוא מחוץ לקופסה מעצם הגדרתו.
    </p>
  </div>
</div>

```demo
<style>
  .ruler { width: 200px; height: 8px; background: #be123c; margin-bottom: 10px; }
  .card { width: 200px; padding: 20px; border: 5px solid #1d4ed8;
          background: #eef2ff; margin-bottom: 12px;
          font-family: system-ui; font-size: 13px; }
  .fixed { box-sizing: border-box; }
</style>
<div class="ruler"></div>
<div class="card">content-box — wider than the red ruler</div>
<div class="card fixed">border-box — exactly the ruler</div>
```

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>הכלל שכותבים פעם אחת ושוכחים ממנו</div>
  <div class="box-body">
    <p>
      כמעט כל פרויקט מתחיל בשורות האלה, ובצדק — הן מחילות
      <code>border-box</code> על <strong>כל</strong> הדף:
    </p>
    <p><code>*, *::before, *::after { box-sizing: border-box; }</code></p>
    <p class="note-line">
      זה בדיוק ה־<code>box-sizing</code> שראית ב־reset בפרק Syntax &amp; Selectors,
      ועכשיו ברור מה הוא עושה. מכאן והלאה <code>width: 200px</code> באמת אומר 200.
    </p>
  </div>
</div>

## קריסת מרווחים

<div class="box theory">
  <div class="box-head"><span class="icon">🫠</span>margin collapsing</div>
  <div class="box-body">
    <p>
      כששני מרווחים <strong>אנכיים</strong> נפגשים, הם לא מתחברים —
      הם <strong>קורסים לגדול מביניהם</strong>. פסקה עם
      <code>margin-bottom: 40px</code> מעל פסקה עם <code>margin-top: 10px</code>
      תיתן רווח של 40 פיקסלים, לא 50.
    </p>
    <p class="note-line">
      זו לא תקלה אלא החלטה מכוונת של CSS: היא מונעת מרווחים ענקיים
      בין פסקאות רצופות. שימי לב שזה קורה <strong>רק בציר האנכי</strong> —
      מרווחים אופקיים תמיד מתחברים.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>המקרה שבאמת מבלבל</div>
  <div class="box-body">
    <p>
      הקריסה קורית גם בין <strong>הורה לילד הראשון שלו</strong>.
      אם ל־<code>&lt;div&gt;</code> אין <code>padding</code> ואין <code>border</code>
      בצד העליון, ה־<code>margin-top</code> של הילד <strong>בורח החוצה</strong>
      ודוחף את ההורה עצמו למטה — במקום להזיז את הילד בתוכו.
    </p>
    <p>
      מספיק <code>padding-top: 1px</code> או <code>border-top</code> כדי לעצור את זה,
      כי עכשיו יש משהו פיזי שמפריד בין שני המרווחים.
    </p>
  </div>
</div>

```demo
<style>
  .parent { background: #fef9e7; width: 280px; font-family: system-ui;
            font-size: 13px; margin-bottom: 14px; }
  .stopped { padding-top: 1px; }
  .child { margin-top: 40px; background: #eef2ff; padding: 6px; }
</style>
<div class="parent"><div class="child">no yellow above me — the margin escaped</div></div>
<div class="parent stopped"><div class="child">padding-top: 1px keeps the margin inside</div></div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בקופסה הראשונה הרקע הצהוב מתחיל בדיוק בגובה הילד; בשנייה הוא מתחיל
      40 פיקסלים מעליו. אותו CSS לילד — הבדל של פיקסל אחד בהורה.
    </p>
  </div>
</div>

## margin: auto

<div class="box example">
  <div class="box-head"><span class="icon">🎯</span>מרכוז אופקי בשורה אחת</div>
  <div class="box-body">
    <p>
      הערך <code>auto</code> ב־<code>margin</code> אופקי אומר לדפדפן
      ״קח את כל המקום שנשאר וחלק אותו שווה בשווה״ — והתוצאה היא מרכוז.
    </p>
    <p><code>.container { width: 700px; margin: 0 auto; }</code></p>
    <p class="note-line">
      <strong>חייב להיות רוחב</strong> (או <code>max-width</code>). בלי רוחב
      אלמנט בלוק ממילא תופס את כל השורה, ולא נשאר מקום פנוי לחלק.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אנכית זה לא עובד</div>
  <div class="box-body">
    <p>
      <code>margin: auto 0</code> <strong>לא</strong> ימרכז לגובה בזרימה רגילה —
      <code>auto</code> אנכי מתורגם לאפס. מרכוז אנכי אמיתי מגיע מ־Flexbox
      ומ־Grid, ונגיע אליו בפרקים הבאים.
    </p>
  </div>
</div>

```demo
<style>
  .page { background: #f1f5f9; padding: 10px; font-family: system-ui; }
  .box { width: 60%; background: #4f46e5; color: white;
         padding: 10px; margin: 0 auto; }
</style>
<div class="page"><div class="box">margin: 0 auto</div></div>
```

## מרווחים שליליים

<div class="box">
  <div class="box-body">
    <p>
      <code>margin</code> מקבל גם ערכים שליליים, והם <strong>מושכים</strong>
      את האלמנט לכיוון ההפוך: <code>margin-top: -10px</code> יעלה אותו
      עשרה פיקסלים ויגרום לו לחפוף את מה שמעליו.
    </p>
    <p class="note-line">
      זה כלי לגיטימי לחפיפות מכוונות, אבל קל לאבד בו שליטה.
      <code>padding</code> לעומת זאת <strong>לא</strong> מקבל ערך שלילי כלל.
    </p>
  </div>
</div>

## מה שלא מתנהג לפי הכללים

<div class="box warn">
  <div class="box-head"><span class="icon">🧩</span>אלמנטים inline</div>
  <div class="box-body">
    <p>
      על אלמנטים כמו <code>&lt;span&gt;</code> ו־<code>&lt;a&gt;</code>,
      שיושבים בתוך שורת טקסט, מודל הקופסה חל רק חלקית:
    </p>
    <ul>
      <li><code>width</code> ו־<code>height</code> — <strong>נעלמים</strong>, אין להם כל השפעה.</li>
      <li><code>padding</code> ו־<code>margin</code> אופקיים — עובדים כרגיל.</li>
      <li><code>padding</code> אנכי — <strong>נצבע אבל לא דוחף</strong>: הוא יגלוש על השורות שמעל ומתחת.</li>
    </ul>
    <p class="note-line">
      הפתרון הוא לשנות את סוג התצוגה, למשל ל־<code>display: inline-block</code>.
      זה בדיוק הנושא של הפרק הבא אחרי הבא — <strong>Display &amp; Positioning</strong>.
    </p>
  </div>
</div>

## לראות את זה בעיניים

<div class="box example">
  <div class="box-head"><span class="icon">🔍</span>בכלי הפיתוח</div>
  <div class="box-body">
    <p>
      לחיצה ימנית על אלמנט ← <strong>Inspect</strong>, ובלשונית
      <strong>Computed</strong> יופיע בדיוק התרשים מראש הפרק —
      עם המספרים האמיתיים של האלמנט שבחרת בכל אחת מארבע השכבות.
    </p>
    <p class="note-line">
      מעבר עם העכבר על כל שכבה בתרשים מדגיש אותה בצבע על הדף עצמו.
      זו הדרך המהירה ביותר לענות על ״מאיפה הגיע הרווח הזה״.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>בלי <code>border-box</code></strong> — כל <code>width</code> יוצא גדול מהמבוקש, והפריסה גולשת.</li>
      <li><strong><code>padding</code> במקום <code>margin</code></strong> — הרקע גדל במקום שהאלמנט יתרחק.</li>
      <li><strong>הפתעה מקריסת מרווחים</strong> — המרווח בין שני אלמנטים הוא הגדול מביניהם, לא הסכום.</li>
      <li><strong><code>margin-top</code> שבורח מההורה</strong> — עד שמוסיפים <code>padding</code> או <code>border</code> למעלה.</li>
      <li><strong><code>margin: 0 auto</code> בלי רוחב</strong> — לא ימרכז, כי אין מקום פנוי לחלק.</li>
      <li><strong>ציפייה ש־<code>margin: auto</code> ימרכז לגובה</strong> — אנכית הוא שווה לאפס.</li>
      <li><strong><code>width</code> על <code>&lt;span&gt;</code></strong> — פשוט לא עושה כלום.</li>
      <li><strong><code>padding</code> שלילי</strong> — לא קיים. רק ל־<code>margin</code> מותר.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>כל אלמנט הוא קופסה של ארבע שכבות: <strong>content, padding, border, margin</strong>.</li>
      <li><code>padding</code> דוחף את <strong>התוכן פנימה</strong>; <code>margin</code> דוחף את <strong>השכנים החוצה</strong>.</li>
      <li>הרקע מגיע עד סוף ה־<code>border</code>. ה־<code>margin</code> תמיד שקוף.</li>
      <li>קיצור של ארבעה ערכים הולך <strong>בכיוון השעון</strong>: למעלה, ימין, למטה, שמאל.</li>
      <li><code>padding-inline</code> ו־<code>margin-block</code> הן הגרסאות הלוגיות, שמסתגלות לכיוון הכתיבה.</li>
      <li>ברירת המחדל <code>content-box</code> מודדת <code>width</code> <strong>בלי</strong> padding ו־border.</li>
      <li><code>*, *::before, *::after { box-sizing: border-box; }</code> — כותבים פעם אחת בראש הפרויקט.</li>
      <li>מרווחים אנכיים <strong>קורסים לגדול מביניהם</strong>, וגם בורחים מהורה בלי padding או border.</li>
      <li><code>margin: 0 auto</code> ממרכז אופקית — <strong>רק עם רוחב</strong>, ורק אופקית.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? לאלמנט יש `width: 200px; padding: 20px; border: 5px solid`, בלי `box-sizing`. כמה מקום הוא יתפוס לרוחב?
- 200 פיקסלים
+ 250 פיקסלים — ברירת המחדל `content-box` מודדת את ה-width בלי ה-padding וה-border
- 230 פיקסלים
- תלוי ברוחב ההורה
= לכן כמעט כל פרויקט פותח ב-`*, *::before, *::after { box-sizing: border-box; }`.

? מה המשמעות של `padding: 10px 20px 30px`?
- כל הצדדים לסירוגין
+ למעלה 10, ימין ושמאל 20, למטה 30
- למעלה 10, ימין 20, למטה 30, שמאל 0
- ערך לא חוקי — חייבים ארבעה ערכים
= בשלושה ערכים הערך האמצעי מכסה את שני הצדדים האופקיים.

? פסקה עם `margin-bottom: 40px` יושבת מעל פסקה עם `margin-top: 10px`. מה יהיה הרווח ביניהן?
- 50 פיקסלים
+ 40 פיקסלים — מרווחים אנכיים קורסים לגדול מביניהם ולא מתחברים
- 10 פיקסלים
- 25 פיקסלים
= זה נכון רק בציר האנכי. מרווחים אופקיים תמיד מתחברים.

? כתבת `.box { margin: 0 auto; }` והאלמנט לא התמרכז. מה הסיבה הסבירה?
- `auto` לא נתמך ב-margin
+ לא הוגדר לו רוחב, ולכן הוא תופס את כל השורה ולא נשאר מקום פנוי לחלק
- צריך `margin: auto 0`
- צריך להוסיף `box-sizing: border-box`
= `auto` מחלק את המקום ה*נותר*. בלי `width` או `max-width` אין מקום נותר.

? הגדרת לאלמנט `background-color`. עד לאן הצבע יגיע?
- רק על אזור ה-content
+ על ה-content וה-padding, עד סוף ה-border — אבל לא על ה-margin
- על כל ארבע השכבות כולל ה-margin
- רק בתוך המסגרת, בלי ה-padding
= ה-margin תמיד שקוף, ולכן הוספת `padding` מגדילה את שטח הרקע ו-`margin` לא.
```
