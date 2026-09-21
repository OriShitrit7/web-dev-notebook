# Display & Positioning

<p class="lead">
עד עכשיו עיצבנו אלמנטים במקום שבו הדפדפן שם אותם מעצמו. בפרק הזה לוקחים את
השליטה על המיקום: קודם משנים את <strong>סוג הקופסה</strong> עם <code>display</code>,
ואז מוציאים אלמנטים מהזרימה הרגילה עם <code>position</code>.
שני המאפיינים האלה הם הבסיס לכל מה שיבוא בפרקי Flexbox ו־Grid.
</p>

## זרימת המסמך

<div class="box theory">
  <div class="box-head"><span class="icon">🌊</span>ברירת המחדל שקיימת תמיד</div>
  <div class="box-body">
    <p>
      בלי שום CSS, הדפדפן מסדר אלמנטים ב<strong>זרימה רגילה</strong> —
      מלמעלה למטה, לפי הסדר שבו הם כתובים ב־HTML. בתוך הזרימה הזו
      יש שני סוגי התנהגות, שפגשנו כבר בפרק <strong>div &amp; span</strong>:
    </p>
    <ul>
      <li><strong>block</strong> — תופס שורה שלמה, ומתחיל בשורה חדשה.</li>
      <li><strong>inline</strong> — זורם בתוך השורה, ותופס רק את רוחב התוכן.</li>
    </ul>
    <p class="note-line">
      ההבדל הזה אינו תכונה של התגית אלא <strong>ערך ברירת מחדל של
      <code>display</code></strong> — ולכן אפשר לשנות אותו.
    </p>
  </div>
</div>

## display

| ערך | ההתנהגות |
| --- | --- |
| `block` | שורה שלמה. `width`, `height` ומרווחים — הכול עובד |
| `inline` | זורם בשורה. `width` ו־`height` **נעלמים** |
| `inline-block` | זורם בשורה, **אבל** מכבד `width`, `height` ומרווחים אנכיים |
| `none` | האלמנט נעלם לגמרי, ולא שומר מקום |
| `flex` | הילדים מסודרים בציר אחד — פרק Flexbox |
| `grid` | הילדים מסודרים ברשת — פרק Grid |

```demo
<style>
  span { background: #eef2ff; border: 1px solid #c7d2fe;
         font-family: system-ui; width: 150px; height: 40px; }
  .ib { display: inline-block; }
  .bl { display: block; }
</style>
<span>inline — width ignored</span>
<span class="ib">inline-block</span>
<span class="bl">block</span>
```

<div class="keypoint">
שלושת ה־<code>&lt;span&gt;</code> קיבלו בדיוק אותו <code>width: 150px</code>,
אבל רק השני והשלישי מצייתים לו. זה בדיוק מה שנשאר פתוח בפרק
<strong>Box Model</strong>: על אלמנט <code>inline</code> מאפייני הגודל
פשוט לא חלים.
</div>

### inline-block

<div class="box example">
  <div class="box-head"><span class="icon">🧩</span>הטוב משני העולמות</div>
  <div class="box-body">
    <p>
      <code>inline-block</code> הוא הפשרה: האלמנט <strong>זורם בשורה</strong>
      ליד שכניו כמו <code>inline</code>, אבל <strong>מתנהג כקופסה מלאה</strong>
      מבפנים — עם רוחב, גובה ומרווחים אנכיים שעובדים.
    </p>
    <p class="note-line">
      זה היה הפתרון הסטנדרטי לסידור פריטים בשורה לפני Flexbox.
      היום כמעט תמיד עדיף Flexbox, אבל <code>inline-block</code> עדיין
      שימושי לאלמנט בודד בתוך טקסט — למשל תגית קטנה בתוך משפט.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הרווח המסתורי</div>
  <div class="box-body">
    <p>
      לאלמנטים <code>inline-block</code> יש מרווח קטן ביניהם שאף אחד לא ביקש.
      המקור שלו הוא <strong>המעבר לשורה חדשה בקוד ה־HTML</strong> —
      הוא נחשב לרווח טקסט אמיתי, בדיוק כמו רווח בין מילים.
    </p>
    <p class="note-line">
      זו אחת הסיבות המרכזיות שעברו ל־Flexbox: שם הבעיה הזו פשוט לא קיימת.
    </p>
  </div>
</div>

### display: none מול visibility: hidden

<div class="compare">
  <div class="good">
    <div class="compare-head">display: none — נעלם ולא שומר מקום</div>
    <div class="compare-body">
<pre><code class="language-css">.hidden {
  display: none;
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">visibility: hidden — שקוף אבל תופס מקום</div>
    <div class="compare-body">
<pre><code class="language-css">.invisible {
  visibility: hidden;
}</code></pre>
    </div>
  </div>
</div>

```demo
<style>
  div { background: #4f46e5; color: white; padding: 8px;
        margin-bottom: 4px; font-family: system-ui; }
  .none { display: none; }
  .hidden { visibility: hidden; }
</style>
<div>first</div>
<div class="none">display: none</div>
<div class="hidden">visibility: hidden</div>
<div>last</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בין הפסקה הראשונה לאחרונה יש <strong>חור אחד</strong>, לא שניים.
      האלמנט עם <code>display: none</code> נעלם לגמרי, ואילו זה עם
      <code>visibility: hidden</code> עדיין תופס את מקומו — הוא פשוט שקוף.
      שניהם, אגב, <strong>עדיין קיימים ב־DOM</strong>.
    </p>
  </div>
</div>

## position

<div class="box theory">
  <div class="box-head"><span class="icon">📍</span>חמישה ערכים</div>
  <div class="box-body">
    <p>
      <code>position</code> קובע <strong>ביחס למה</strong> האלמנט ממוקם.
      ארבעת מאפייני ההיסט — <code>top</code>, <code>right</code>,
      <code>bottom</code>, <code>left</code> — משפיעים
      <strong>רק</strong> כשיש <code>position</code> שאינו <code>static</code>.
    </p>
  </div>
</div>

| ערך | ביחס למה | נשאר בזרימה? |
| --- | --- | --- |
| `static` | ברירת המחדל. אין מיקום | כן |
| `relative` | **למקום המקורי של עצמו** | כן — שומר את מקומו |
| `absolute` | לאב הקדמון הממוקם הקרוב ביותר | **לא** |
| `fixed` | לחלון התצוגה | **לא** |
| `sticky` | היברידי — זורם עד לסף, ואז נתקע | כן |

### relative

<div class="box">
  <div class="box-body">
    <p>
      <code>relative</code> מזיז את האלמנט מהמקום שבו הוא <em>היה</em> אמור להיות,
      אבל <strong>המקום המקורי נשמר לו</strong> — השכנים לא זזים, ונוצר חור.
    </p>
    <p class="note-line">
      בפועל משתמשים ב־<code>relative</code> הרבה פחות כדי להזיז,
      והרבה יותר כדי <strong>להגדיר עוגן</strong> לילד ממוקם. תכף נראה.
    </p>
  </div>
</div>

```demo
<style>
  div { background: #eef2ff; border: 1px solid #c7d2fe; padding: 8px;
        margin-bottom: 4px; font-family: system-ui; }
  .moved { position: relative; top: 10px; left: 20px;
           background: #fff1f2; border-color: #fecdd3; }
</style>
<div>normal</div>
<div class="moved">relative — moved, but its space is kept</div>
<div>normal — did not move up</div>
```

### absolute והמסגרת המכילה

<div class="box theory">
  <div class="box-head"><span class="icon">🎯</span>הכלל שחייבים לזכור</div>
  <div class="box-body">
    <p>
      <code>absolute</code> <strong>מוציא את האלמנט מהזרימה</strong> —
      הוא לא תופס מקום, והשכנים מתנהגים כאילו הוא לא קיים.
    </p>
    <p>
      הוא ממוקם ביחס ל<strong>אב הקדמון הקרוב ביותר שיש לו
      <code>position</code> שאינו <code>static</code></strong>.
      אם אין אף אחד כזה — הוא ייצמד לפינת הדף כולו.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>הצמד שעובדים איתו כל הזמן:</strong> <code>position: relative</code> על ההורה,
<code>position: absolute</code> על הילד. ההורה לא זז בכלל — הוא רק
הופך ל<strong>עוגן</strong> שהילד נמדד ביחס אליו.
</div>

```demo
<style>
  .card { position: relative; height: 90px;
          background: #eef2ff; border: 1px solid #c7d2fe;
          font-family: system-ui; padding: 8px; }
  .badge { position: absolute; top: 6px; left: 6px;
           background: #be123c; color: white;
           padding: 2px 8px; border-radius: 999px; font-size: 12px; }
</style>
<div class="card">
  A card with a badge pinned to its corner
  <span class="badge">NEW</span>
</div>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>שכחת את relative על ההורה</div>
  <div class="box-body">
    <p>
      זו הטעות הנפוצה ביותר עם <code>absolute</code>: הילד קופץ לפינת
      <strong>המסך</strong> במקום לפינת הכרטיס. הסיבה היא תמיד אותה סיבה —
      לאף אב קדמון אין <code>position</code>, ולכן הדפדפן ממשיך לטפס
      עד לראש המסמך.
    </p>
  </div>
</div>

### fixed

<div class="box">
  <div class="box-body">
    <p>
      <code>fixed</code> דומה ל־<code>absolute</code> — גם הוא מחוץ לזרימה —
      אבל הוא ממוקם ביחס ל<strong>חלון התצוגה</strong>, ולכן
      <strong>לא זז בגלילה</strong>.
    </p>
    <p class="note-line">
      זה מה שמחזיק סרגלי ניווט עליונים, כפתורי צ׳אט צפים וחלונות מודאליים.
      שימי לב: אם לאב קדמון כלשהו יש <code>transform</code>, הוא הופך
      לעוגן של ה־<code>fixed</code> — וזה מקור לבאגים מבלבלים במיוחד.
    </p>
  </div>
</div>

### sticky

<div class="box example">
  <div class="box-head"><span class="icon">🧲</span>זורם עד שהוא נתקע</div>
  <div class="box-body">
    <p>
      <code>sticky</code> מתנהג כמו <code>relative</code> רגיל — עד שהגלילה
      מגיעה לסף שהגדרת, ואז הוא <strong>נתקע במקום</strong> כמו
      <code>fixed</code>, אבל רק בתוך גבולות ההורה שלו.
    </p>
    <p>
      <strong>חובה לציין סף</strong>, למשל <code>top: 0</code>.
      בלי אף אחד מארבעת מאפייני ההיסט, <code>sticky</code> לא יעשה כלום.
    </p>
    <p class="note-line">
      תוכן העניינים בצד של הפרק הזה עובד בדיוק ככה.
    </p>
  </div>
</div>

```demo
<style>
  .scroller { height: 150px; overflow: auto;
              border: 1px solid #cbd5e1; font-family: system-ui; }
  h4 { position: sticky; top: 0; margin: 0;
       background: #4f46e5; color: white; padding: 6px; }
  p { margin: 6px; }
</style>
<div class="scroller">
  <h4>Sticky heading — scroll me</h4>
  <p>Line one</p>
  <p>Line two</p>
  <p>Line three</p>
  <p>Line four</p>
  <p>Line five</p>
  <p>Line six</p>
  <p>Line seven</p>
</div>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה sticky לא עובד</div>
  <div class="box-body">
    <p>שלוש סיבות, כמעט תמיד:</p>
    <ul>
      <li><strong>לא הוגדר סף</strong> — צריך <code>top</code>, <code>bottom</code>, <code>left</code> או <code>right</code>.</li>
      <li><strong>לאב קדמון יש <code>overflow: hidden</code></strong> — זה מבטל את ההיצמדות.</li>
      <li><strong>להורה אין גובה מספיק</strong> — אין לאן להיתקע, כי ההורה נגמר מיד.</li>
    </ul>
  </div>
</div>

## z-index

<div class="box theory">
  <div class="box-head"><span class="icon">🥞</span>מי מעל מי</div>
  <div class="box-body">
    <p>
      כשאלמנטים חופפים, <code>z-index</code> קובע מי מצויר למעלה —
      מספר גבוה יותר מנצח. אבל יש תנאי שמפילים עליו הרבה:
    </p>
    <p>
      <strong><code>z-index</code> עובד רק על אלמנט ממוקם</strong> —
      כלומר כזה שה־<code>position</code> שלו אינו <code>static</code>.
      על אלמנט רגיל הוא פשוט לא עושה כלום.
    </p>
    <p class="note-line">
      היוצא מן הכלל: פריטים בתוך מיכל <code>flex</code> או <code>grid</code>
      מקבלים <code>z-index</code> פעיל גם בלי <code>position</code>.
    </p>
  </div>
</div>

```demo
<style>
  div { width: 90px; height: 90px; font-family: system-ui;
        color: white; padding: 6px; position: absolute; }
  .a { background: #4f46e5; top: 10px; left: 10px; z-index: 2; }
  .b { background: #be123c; top: 40px; left: 60px; z-index: 1; }
  .wrap { position: relative; height: 140px; }
</style>
<div class="wrap">
  <div class="a">z-index: 2</div>
  <div class="b">z-index: 1</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בלי <code>z-index</code> כלל, מי שנכתב <strong>אחרון ב־HTML</strong>
      מצויר למעלה. כאן הפכנו את הסדר במפורש, ולכן הכחול מכסה את האדום
      למרות שהוא נכתב לפניו.
    </p>
  </div>
</div>

## overflow

<div class="box">
  <div class="box-body">
    <p>
      כשתוכן גדול מהקופסה שלו, <code>overflow</code> קובע מה קורה:
    </p>
    <ul>
      <li><strong><code>visible</code></strong> — ברירת המחדל. התוכן פשוט גולש החוצה.</li>
      <li><strong><code>hidden</code></strong> — מה שחורג נחתך ונעלם.</li>
      <li><strong><code>auto</code></strong> — פס גלילה, אבל <strong>רק אם צריך</strong>.</li>
      <li><strong><code>scroll</code></strong> — פס גלילה תמיד, גם כשאין חריגה.</li>
    </ul>
    <p class="note-line">
      ברוב המקרים <code>auto</code> הוא הבחירה הנכונה.
      <code>hidden</code> שימושי גם לחיתוך פינות מעוגלות, כפי שראינו
      בפרק Borders &amp; Shadows.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>top</code> ו־<code>left</code> בלי <code>position</code></strong> — לא קורה כלום, כי ברירת המחדל היא <code>static</code>.</li>
      <li><strong><code>absolute</code> בלי <code>relative</code> על ההורה</strong> — האלמנט קופץ לפינת המסך.</li>
      <li><strong><code>sticky</code> בלי סף</strong> — לא ייצמד לעולם.</li>
      <li><strong><code>overflow: hidden</code> על אב קדמון של <code>sticky</code></strong> — מבטל את ההיצמדות בשקט.</li>
      <li><strong><code>z-index</code> על אלמנט <code>static</code></strong> — מתעלמים ממנו לחלוטין.</li>
      <li><strong><code>width</code> על אלמנט <code>inline</code></strong> — נעלם. צריך <code>inline-block</code> או <code>block</code>.</li>
      <li><strong>שימוש ב־<code>display: none</code> להסתרה מקורא מסך</strong> — הוא אכן מסתיר גם מקורא מסך, מה שלא תמיד רצוי.</li>
      <li><strong>בניית פריסה שלמה עם <code>absolute</code></strong> — שביר מאוד. לפריסה משתמשים ב־Flexbox או Grid.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>בזרימה רגילה אלמנטים מסודרים מלמעלה למטה, כ־<strong>block</strong> או כ־<strong>inline</strong>.</li>
      <li><code>display</code> משנה את סוג הקופסה. על <code>inline</code> אין <code>width</code> ו־<code>height</code>.</li>
      <li><strong><code>inline-block</code></strong> — זורם בשורה, אבל מכבד גודל ומרווחים.</li>
      <li><code>display: none</code> <strong>לא שומר מקום</strong>; <code>visibility: hidden</code> כן.</li>
      <li>מאפייני ההיסט עובדים <strong>רק</strong> עם <code>position</code> שאינו <code>static</code>.</li>
      <li><code>relative</code> שומר את מקומו; <code>absolute</code> ו־<code>fixed</code> יוצאים מהזרימה.</li>
      <li><strong>הצמד המרכזי:</strong> <code>relative</code> על ההורה כעוגן, <code>absolute</code> על הילד.</li>
      <li><code>sticky</code> חייב <strong>סף</strong>, ונשבר מ־<code>overflow: hidden</code> על אב קדמון.</li>
      <li><code>z-index</code> פועל <strong>רק על אלמנט ממוקם</strong> (או פריט flex/grid).</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? כתבת `top: 20px` ושום דבר לא זז. מה הסיבה הסבירה ביותר?
- `top` נתמך רק ב-`fixed`
+ לאלמנט יש `position: static`, שהיא ברירת המחדל, ולכן מאפייני ההיסט לא חלים עליו
- צריך לכתוב `top` בערך שלילי
- חסר `display: block`
= ארבעת מאפייני ההיסט דורשים `position` שאינו `static` — כלומר relative, absolute, fixed או sticky.

? מה ההבדל בין `display: none` ל-`visibility: hidden`?
- אין הבדל, שניהם מסתירים
+ `display: none` מוציא את האלמנט מהפריסה ולא שומר לו מקום, ו-`visibility: hidden` משאיר את המקום תפוס
- `visibility: hidden` מוחק את האלמנט מה-DOM
- `display: none` עובד רק על אלמנטים inline
= שניהם משאירים את האלמנט ב-DOM. ההבדל הוא רק האם המקום שלו נשמר.

? מיקמת ילד ב-`position: absolute` והוא קפץ לפינת המסך במקום לפינת הכרטיס. למה?
- `absolute` תמיד נצמד למסך
+ לאף אב קדמון אין `position` שאינו `static`, ולכן הדפדפן טיפס עד לראש המסמך
- צריך להוסיף `z-index`
- הכרטיס צריך `display: flex`
= הפתרון הוא `position: relative` על הכרטיס. הוא לא יזוז, אבל יהפוך לעוגן.

? `position: sticky` לא נצמד. מה הכי סביר שחסר?
- `z-index`
+ לא הוגדר סף כמו `top: 0`, או שלאב קדמון יש `overflow: hidden`
- צריך `display: inline-block`
- sticky אינו נתמך בדפדפנים
= בלי אף אחד מארבעת מאפייני ההיסט, sticky מתנהג בדיוק כמו relative רגיל.

? למה `z-index: 999` על אלמנט לא העלה אותו מעל השכן שלו?
- המספר נמוך מדי
+ כי `z-index` פועל רק על אלמנט ממוקם, ולאלמנט הזה יש `position: static`
- צריך להוסיף `overflow: visible`
- z-index עובד רק בתוך grid
= היוצא מן הכלל היחיד הוא פריטים בתוך מיכל flex או grid, שם z-index פועל גם בלי position.
```
