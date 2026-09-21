# Transitions, Transforms & Animations

<p class="lead">
שלושת הנושאים בפרק הזה עובדים יחד: <strong>transform</strong> משנה את הצורה או המיקום
של אלמנט, <strong>transition</strong> גורם לשינוי לקרות בהדרגה במקום בקפיצה,
ו־<strong>animation</strong> מריץ רצף שלבים בלי שהמשתמש יעשה כלום.
נראה גם למה דווקא שני מאפיינים מסוימים הם היחידים שכדאי להנפיש.
</p>

## transition

<div class="box theory">
  <div class="box-head"><span class="icon">⏱️</span>ארבעה חלקים</div>
  <div class="box-body">
    <p>
      <code>transition</code> הוא קיצור לארבעה מאפיינים:
    </p>
    <ul>
      <li><strong><code>transition-property</code></strong> — <em>מה</em> משתנה בהדרגה.</li>
      <li><strong><code>transition-duration</code></strong> — <em>כמה זמן</em>. חובה, אחרת אין אפקט.</li>
      <li><strong><code>transition-timing-function</code></strong> — <em>קצב</em> השינוי.</li>
      <li><strong><code>transition-delay</code></strong> — <em>המתנה</em> לפני ההתחלה.</li>
    </ul>
    <p><code>transition: background-color 0.3s ease 0s;</code></p>
    <p class="note-line">
      כששני ערכי זמן מופיעים, <strong>הראשון הוא המשך והשני ההשהיה</strong>.
      זה הסדר היחיד, ואי אפשר להפוך אותו.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>transition לא מריץ כלום בעצמו.</strong> הוא רק אומר לדפדפן
״כשהערך הזה ישתנה — עשה זאת בהדרגה״. השינוי עצמו חייב להגיע ממקור אחר:
<code>:hover</code>, <code>:focus</code>, או class שמתחלף מ־JavaScript.
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>איפה כותבים אותו</div>
  <div class="box-body">
    <p>
      את <code>transition</code> כותבים על <strong>המצב הרגיל</strong> של האלמנט,
      לא בתוך <code>:hover</code>. אחרת המעבר יעבוד רק בכניסה,
      והיציאה תהיה קפיצה חדה.
    </p>
  </div>
</div>

```demo
<style>
  button { font: inherit; border: 0; color: white; cursor: pointer;
           background: #4f46e5; padding: 10px 18px; border-radius: 8px;
           transition: background-color 0.3s ease, transform 0.3s ease; }
  button:hover { background: #312e81; transform: translateY(-3px); }
</style>
<button>Hover me</button>
```

## פונקציות קצב

| ערך | התחושה |
| --- | --- |
| `linear` | מהירות אחידה. מרגיש מכני |
| `ease` | ברירת המחדל. מתחיל מהר, מאט בסוף |
| `ease-in` | מתחיל לאט |
| `ease-out` | נגמר לאט — הנפוץ לממשקים |
| `ease-in-out` | לאט בשני הקצוות |
| `cubic-bezier(...)` | עקומה מותאמת אישית |
| `steps(n)` | קפיצות בדידות, בלי החלקה |

<div class="box">
  <div class="box-body">
    <p class="note-line">
      לרוב הממשקים <code>ease-out</code> הוא הבחירה הנכונה: התנועה
      נעצרת ברכות, וזה מרגיש טבעי. משך סביר הוא
      <strong>150 עד 300 מילישניות</strong> — ארוך מזה מרגיש איטי.
    </p>
  </div>
</div>

## transform

<div class="box theory">
  <div class="box-head"><span class="icon">🔄</span>ארבע פעולות</div>
  <div class="box-body">
    <ul>
      <li><strong><code>translate(x, y)</code></strong> — הזזה.</li>
      <li><strong><code>scale(n)</code></strong> — הגדלה או הקטנה. <code>1</code> הוא הגודל המקורי.</li>
      <li><strong><code>rotate(45deg)</code></strong> — סיבוב.</li>
      <li><strong><code>skew(10deg)</code></strong> — הטיה.</li>
    </ul>
    <p class="note-line">
      נקודת הייחוס היא מרכז האלמנט. אפשר לשנות אותה עם
      <code>transform-origin</code>, למשל <code>transform-origin: top left</code>.
    </p>
  </div>
</div>

```demo
<style>
  div { display: inline-block; width: 70px; height: 70px; margin: 14px;
        background: #4f46e5; color: white; font-family: system-ui;
        font-size: 12px; text-align: center; line-height: 70px; }
  .t { transform: translateY(-10px); }
  .s { transform: scale(1.3); }
  .r { transform: rotate(20deg); }
</style>
<div>none</div>
<div class="t">translate</div>
<div class="s">scale</div>
<div class="r">rotate</div>
```

<div class="box example">
  <div class="box-head"><span class="icon">🪶</span>transform לא תופס מקום</div>
  <div class="box-body">
    <p>
      זו התכונה החשובה ביותר שלו: הוא משנה רק את <strong>הציור</strong>,
      ולא את הפריסה. אלמנט שהוגדל או הוזז <strong>לא דוחף את שכניו</strong>,
      והם נשארים בדיוק במקומם.
    </p>
    <p class="note-line">
      בדיוק כמו <code>box-shadow</code> ו־<code>outline</code> מפרק
      Borders &amp; Shadows — האלמנט תופס בפריסה את מקומו המקורי בלבד.
    </p>
  </div>
</div>

```demo
<style>
  .row { display: flex; gap: 8px; font-family: system-ui; font-size: 13px; }
  .row div { background: #4f46e5; color: white; padding: 10px; width: 80px;
             text-align: center; }
  .big { transform: scale(1.6); background: #be123c; }
</style>
<div class="row">
  <div>left</div>
  <div class="big">scaled</div>
  <div>right</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      האלמנט האדום גדל ב־60% וחופף לשכניו — אבל <strong>״left״ ו״right״
      לא זזו אפילו פיקסל אחד</strong>. בפריסה הוא עדיין תופס בדיוק
      את מקומו המקורי, וההגדלה מצוירת מעליו לשני הצדדים.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הסדר משנה</div>
  <div class="box-body">
    <p>
      כשכותבים כמה פעולות יחד הן מצטברות <strong>מימין לשמאל</strong>,
      ולכן התוצאה שונה:
    </p>
    <ul>
      <li><code>rotate(45deg) translateX(50px)</code> — קודם הזזה, ואז סיבוב של הכול. ההזזה ״מסתובבת״ יחד עם האלמנט.</li>
      <li><code>translateX(50px) rotate(45deg)</code> — קודם סיבוב, ואז הזזה ישרה ימינה.</li>
    </ul>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">🧨</span>transform שובר position: fixed</div>
  <div class="box-body">
    <p>
      הנה ההסבר להערה שהשארנו בפרק <strong>Display &amp; Positioning</strong>:
      אלמנט עם <code>transform</code> הופך ל<strong>מסגרת המכילה</strong>
      של כל צאצא <code>fixed</code> שלו.
    </p>
    <p>
      התוצאה היא ש־<code>position: fixed</code> מפסיק להיצמד לחלון התצוגה
      ומתחיל להיצמד לאותו אב קדמון — באג מבלבל במיוחד, כי שום דבר
      בקוד של האלמנט ה־fixed עצמו לא השתנה.
    </p>
    <p class="note-line">
      אותו דבר קורה גם עם <code>filter</code> ועם <code>will-change</code>.
      <code>transform</code> גם יוצר <strong>הקשר ערימה</strong> חדש,
      ולכן הוא משפיע גם על <code>z-index</code>.
    </p>
  </div>
</div>

## מה כדאי להנפיש

<div class="box theory">
  <div class="box-head"><span class="icon">⚡</span>שניים בלבד</div>
  <div class="box-body">
    <p>
      לא כל מאפיין עולה אותו דבר. הדפדפן מצייר מסגרת בשלושה שלבים:
      <strong>חישוב פריסה</strong>, <strong>ציור</strong>, ו<strong>הרכבה</strong>.
    </p>
    <ul>
      <li><strong><code>transform</code> ו־<code>opacity</code></strong> — נוגעים רק בשלב ההרכבה. זולים מאוד, ורצים חלק.</li>
      <li><strong><code>width</code>, <code>height</code>, <code>top</code>, <code>margin</code></strong> — מכריחים <strong>חישוב פריסה מחדש</strong> בכל מסגרת. יקרים, ומקרטעים במכשירים חלשים.</li>
    </ul>
    <p class="note-line">
      לכן מזיזים עם <code>translate</code> ולא עם <code>top</code>,
      ומגדילים עם <code>scale</code> ולא עם <code>width</code>.
      זה אותו אפקט ויזואלי במחיר נמוך בהרבה.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">זול — רץ חלק</div>
    <div class="compare-body">
<pre><code class="language-css">.card {
  transition: transform 0.2s ease-out;
}
.card:hover {
  transform: translateY(-4px);
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">יקר — מחשב פריסה מחדש</div>
    <div class="compare-body">
<pre><code class="language-css">.card {
  position: relative;
  transition: top 0.2s ease-out;
}
.card:hover {
  top: -4px;
}</code></pre>
    </div>
  </div>
</div>

## animation ו־keyframes@

<div class="box theory">
  <div class="box-head"><span class="icon">🎬</span>כשאין טריגר</div>
  <div class="box-body">
    <p>
      <code>transition</code> צריך שינוי מצב. כשרוצים תנועה שמתחילה לבד,
      חוזרת על עצמה, או עוברת כמה שלבים — משתמשים ב־<code>animation</code>.
    </p>
    <p>
      קודם מגדירים את השלבים ב־<code>@keyframes</code>, ואז מחברים
      אותם לאלמנט:
    </p>
  </div>
</div>

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fade-in-up 0.4s ease-out;
}
```

<div class="box">
  <div class="box-body">
    <p>
      במקום <code>from</code> ו־<code>to</code> אפשר לכתוב אחוזים
      ולקבל כמה שלבים: <code>0%</code>, <code>50%</code>, <code>100%</code>.
    </p>
    <p class="note-line">
      הקיצור <code>animation</code> מקבל בסדר הזה: שם, משך, קצב, השהיה,
      מספר חזרות, כיוון ומצב מילוי. בפועל כותבים רק את מה שצריך.
    </p>
  </div>
</div>

| מאפיין | מה הוא עושה |
| --- | --- |
| `animation-iteration-count` | כמה פעמים. `infinite` לאינסוף |
| `animation-direction` | `alternate` מריץ הלוך ושוב |
| `animation-fill-mode` | `forwards` — להישאר במצב הסופי |
| `animation-play-state` | `paused` לעצירה |

```demo
<style>
  @keyframes pulse {
    0%   { transform: scale(1);   opacity: 1; }
    50%  { transform: scale(1.25); opacity: 0.6; }
    100% { transform: scale(1);   opacity: 1; }
  }
  .dot { width: 54px; height: 54px; border-radius: 50%;
         background: #4f46e5; margin: 18px;
         animation: pulse 1.6s ease-in-out infinite; }
</style>
<div class="dot"></div>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה האנימציה קופצת אחורה בסוף</div>
  <div class="box-body">
    <p>
      כברירת מחדל, בסיום האנימציה האלמנט <strong>חוזר לערכיו המקוריים</strong> —
      גם אם ה־<code>keyframe</code> האחרון אומר משהו אחר.
    </p>
    <p>
      הפתרון הוא <code>animation-fill-mode: forwards</code>,
      שמשאיר אותו במצב הסופי.
    </p>
  </div>
</div>

## prefers-reduced-motion

<div class="box example">
  <div class="box-head"><span class="icon">♿</span>לא כל אחד רוצה תנועה</div>
  <div class="box-body">
    <p>
      לחלק מהאנשים תנועה על המסך גורמת לסחרחורת ולבחילה.
      מערכות ההפעלה מאפשרות לבקש הפחתת תנועה, ו־CSS יכול לקרוא
      את ההעדפה הזו — בדיוק כפי שראינו בפרק <strong>Responsive Design</strong>.
    </p>
  </div>
</div>

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב שלא מבטלים את האנימציה ב־<code>none</code> אלא מקצרים אותה
      לאפס כמעט — כך קוד שמחכה לסיום האנימציה ימשיך לעבוד כרגיל.
      זהו אחד המקרים הבודדים ש־<code>!important</code> מוצדק בהם.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>transition</code> בלי <code>duration</code></strong> — ברירת המחדל היא אפס, ולכן אין שום אפקט.</li>
      <li><strong><code>transition</code> בתוך <code>:hover</code></strong> — המעבר יעבוד רק בכניסה ולא ביציאה.</li>
      <li><strong><code>transition: all</code></strong> — מנפיש גם מה שלא התכוונת, ופוגע בביצועים.</li>
      <li><strong>הנפשת <code>width</code> או <code>top</code></strong> — מחשב פריסה מחדש בכל מסגרת. עדיף <code>transform</code>.</li>
      <li><strong>ציפייה ש־<code>transform</code> ידחוף שכנים</strong> — הוא לא משפיע על הפריסה כלל.</li>
      <li><strong>סדר הפוך ב־<code>transform</code></strong> — הפעולות מצטברות מימין לשמאל.</li>
      <li><strong><code>transform</code> על אב קדמון של <code>position: fixed</code></strong> — שובר את ההיצמדות לחלון.</li>
      <li><strong>שכחת <code>fill-mode: forwards</code></strong> — האלמנט קופץ חזרה בסיום.</li>
      <li><strong>התעלמות מ־<code>prefers-reduced-motion</code></strong> — בעיית נגישות אמיתית.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>transition</code> מחליק <strong>שינוי שמגיע ממקור אחר</strong> — hover, focus או class.</li>
      <li>כותבים אותו על <strong>המצב הרגיל</strong>, ו־<code>duration</code> הוא חובה.</li>
      <li>בשני ערכי זמן: <strong>הראשון משך, השני השהיה</strong>.</li>
      <li><code>ease-out</code> ו־150–300ms מתאימים לרוב הממשקים.</li>
      <li><code>transform</code> משנה ציור בלבד — <strong>לא דוחף שכנים</strong>.</li>
      <li>פעולות <code>transform</code> מצטברות <strong>מימין לשמאל</strong>.</li>
      <li><code>transform</code> על אב קדמון <strong>שובר <code>position: fixed</code></strong> ויוצר הקשר ערימה.</li>
      <li>מנפישים <strong><code>transform</code> ו־<code>opacity</code></strong> בלבד; <code>width</code> ו־<code>top</code> יקרים.</li>
      <li><code>@keyframes</code> + <code>animation</code> לתנועה בלי טריגר; <code>forwards</code> משאיר במצב הסופי.</li>
      <li><strong><code>prefers-reduced-motion</code></strong> אינו אופציונלי.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? כתבת `transition` רק בתוך `button:hover`. מה תהיה התוצאה?
- המעבר לא יעבוד בכלל
+ המעבר יעבוד בכניסה לריחוף אבל היציאה תהיה קפיצה חדה
- המעבר יעבוד רק ביציאה
- שגיאת תחביר
= לכן כותבים את `transition` על המצב הרגיל של האלמנט, ולא על המצב המיוחד.

? למה עדיף להזיז אלמנט עם `transform: translateY` ולא עם `top`?
- כי `top` אינו נתמך באנימציות
+ כי `transform` נוגע רק בשלב ההרכבה, ואילו `top` מכריח את הדפדפן לחשב את הפריסה מחדש בכל מסגרת
- כי `transform` מדויק יותר
- כי `top` עובד רק עם `position: absolute`
= `transform` ו-`opacity` הם שני המאפיינים הזולים להנפשה.

? אלמנט קיבל `transform: scale(1.5)`. מה יקרה לשכנים שלו?
- הם יידחפו הצידה
+ הם לא יזוזו כלל — `transform` משנה רק את הציור ולא את הפריסה
- הם יתכווצו בהתאם
- תלוי ב-`box-sizing`
= בפריסה האלמנט ממשיך לתפוס בדיוק את גודלו המקורי, ולכן הוא פשוט חופף להם.

? `position: fixed` הפסיק להיצמד לחלון והתחיל להיצמד לאיזה div. מה הכי סביר?
- חסר `z-index`
+ לאחד מאבות הקדמון יש `transform`, והוא הפך למסגרת המכילה של האלמנט
- `fixed` אינו נתמך
- צריך להוסיף `overflow: hidden`
= אותה התנהגות נגרמת גם מ-`filter` ומ-`will-change`.

? האנימציה מסתיימת והאלמנט קופץ חזרה למצב ההתחלתי. מה חסר?
- `animation-iteration-count: infinite`
+ `animation-fill-mode: forwards`, שמשאיר את האלמנט במצב הסופי
- `animation-direction: alternate`
- `transition` נוסף
= כברירת מחדל האלמנט חוזר לערכיו המקוריים בתום האנימציה.
```
