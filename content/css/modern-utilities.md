# Modern CSS & Utilities

<p class="lead">
הרבה ממה שנחשב פעם ל״טריק״ או שדרש ספרייה חיצונית נכנס בשנים האחרונות
ל־CSS עצמו. בפרק הזה נאסוף את היכולות המודרניות שכבר נתמכות בכל הדפדפנים
העדכניים ומשנות את הדרך שבה כותבים — וגם את כלי העזר הקטנים
שחוזרים בכל פרויקט.
</p>

## container queries

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>הרכיב מודד את עצמו</div>
  <div class="box-body">
    <p>
      זו ההבטחה שנשארה פתוחה בפרק <strong>Responsive Design</strong>.
      <code>@media</code> בודק את רוחב <strong>החלון</strong>, אבל רכיב
      כרטיס לא באמת מתעניין ברוחב המסך — הוא מתעניין ברוחב
      <strong>המקום שבו הוא יושב</strong>.
    </p>
    <p>
      אותו כרטיס יכול להופיע בעמודה צרה בצד או באזור הראשי הרחב.
      עם <code>@media</code> שתי המופעים יקבלו את אותו עיצוב;
      עם container query כל אחד יגיב לסביבה שלו.
    </p>
  </div>
</div>

```css
.sidebar,
.main {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: 0.5rem;
}

@container (min-width: 24rem) {
  .card {
    grid-template-columns: 80px 1fr;
  }
}
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שני שלבים: מסמנים את ההורה כ<strong>מיכל</strong> עם
      <code>container-type: inline-size</code>, ואז שואלים על רוחבו
      עם <code>@container</code>. אפשר גם לתת למיכל שם עם
      <code>container-name</code> כשיש כמה מקוננים.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>זה שינוי תפיסתי, לא רק תחבירי.</strong> עם <code>@media</code> הרכיב
צריך לדעת איפה בדף הוא נמצא. עם <code>@container</code> הוא
<strong>עצמאי לחלוטין</strong> — אפשר להעביר אותו לכל מקום והוא יסתדר לבד.
</div>

## has:

<div class="box theory">
  <div class="box-head"><span class="icon">⬆️</span>הבורר שמסתכל למעלה</div>
  <div class="box-body">
    <p>
      כל הבוררים שלמדנו בפרק Advanced Selectors יורדים במורד העץ:
      הורה בוחר ילד. <code>:has()</code> הוא הראשון שעושה את ההפך —
      הוא בוחר <strong>הורה לפי מה שיש בתוכו</strong>.
    </p>
    <ul>
      <li><code>.card:has(img)</code> — כרטיס <strong>שיש בו</strong> תמונה.</li>
      <li><code>label:has(input:checked)</code> — תווית שהתיבה שבתוכה מסומנת.</li>
      <li><code>.form:has(input:invalid)</code> — טופס שיש בו שדה לא תקין.</li>
    </ul>
    <p class="note-line">
      במשך שנים זה נחרט כ״הבורר ההורה שלא קיים ב־CSS״,
      והיה צריך JavaScript. היום זה שורה אחת.
    </p>
  </div>
</div>

```demo
<style>
  .card { border: 2px solid #cbd5e1; padding: 10px; margin-bottom: 8px;
          font-family: system-ui; font-size: 13px; }
  .card:has(.badge) { border-color: #be123c; background: #fff1f2; }
  .badge { background: #be123c; color: white; font-size: 11px;
           padding: 2px 8px; border-radius: 999px; }
</style>
<div class="card">A plain card</div>
<div class="card">A card <span class="badge">NEW</span></div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שני הכרטיסים חולקים את אותו כלל בסיס. רק השני קיבל מסגרת אדומה —
      <strong>בגלל מה שיש בתוכו</strong>, בלי שנגענו בו ישירות.
    </p>
  </div>
</div>

## is: ו־where:

<div class="box">
  <div class="box-body">
    <p>
      שניהם מקצרים רשימות בוררים ארוכות:
    </p>
    <p><code>:is(h1, h2, h3) code { ... }</code></p>
    <p>
      זה שקול ל־<code>h1 code, h2 code, h3 code</code> — אבל קריא בהרבה
      כשהרשימה גדלה.
    </p>
    <p class="note-line">
      ההבדל ביניהם הוא <strong>ספציפיות</strong>, והוא חשוב:
      <code>:is()</code> מקבל את הספציפיות של הבורר <strong>החזק ביותר</strong>
      שבתוכו, ואילו <code>:where()</code> הוא תמיד <strong>אפס</strong>.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎚️</span>למה where שימושי דווקא בזכות האפס</div>
  <div class="box-body">
    <p>
      כלל שנכתב ב־<code>:where()</code> קל <strong>במיוחד</strong> לדריסה —
      מספיק בורר אחד כדי לגבור עליו.
    </p>
    <p class="note-line">
      לכן משתמשים בו לכללי בסיס ולאיפוסים: הם קיימים, אבל לא
      נלחמים בך אחר כך. זו התשובה המודרנית לבעיה מפרק
      <strong>Cascade</strong> — כללים שקשה לדרוס בלי <code>!important</code>.
    </p>
  </div>
</div>

## מקוננות

<div class="box theory">
  <div class="box-head"><span class="icon">🪆</span>כתיבה מקוננת, בלי מעבד</div>
  <div class="box-body">
    <p>
      אחת התכונות המרכזיות של Sass נכנסה ל־CSS עצמו:
      אפשר לכתוב כלל בתוך כלל, ו־<code>&amp;</code> מייצג את הבורר החיצוני.
    </p>
  </div>
</div>

```css
.card {
  padding: 1rem;
  border-radius: 12px;

  & h3 {
    margin: 0 0 0.5rem;
  }

  &:hover {
    background: #f8fafc;
  }

  @media (min-width: 40rem) {
    padding: 1.5rem;
  }
}
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>קינון עמוק הוא מלכודת</div>
  <div class="box-body">
    <p>
      הפיתוי הוא לקנן לפי מבנה ה־HTML. התוצאה היא בוררים ארוכים
      עם ספציפיות גבוהה מדי — בדיוק הבעיה שהזהרנו ממנה בפרק Cascade.
    </p>
    <p class="note-line">
      כלל אצבע: <strong>לא יותר משתי רמות</strong>.
    </p>
  </div>
</div>

## פונקציות צבע מודרניות

<div class="box">
  <div class="box-body">
    <p>
      בפרק Colors &amp; Backgrounds ראינו ש־<code>hsl</code> נוח כי אפשר
      לשנות רק את הבהירות. היום יש משהו טוב יותר —
      <code>color-mix()</code>, שמערבב שני צבעים:
    </p>
    <p><code>color-mix(in srgb, var(--brand) 20%, white)</code></p>
    <p class="note-line">
      זו הדרך לייצר גרסה בהירה של צבע המותג <strong>בלי להגדיר אותה ידנית</strong>,
      וכך כל ערכת הצבעים נגזרת ממשתנה אחד. יש גם מרחבי צבע רחבים יותר
      כמו <code>oklch()</code>, שבהם שינוי בהירות נראה אחיד יותר לעין.
    </p>
  </div>
</div>

```demo
<style>
  :root { --brand: #4f46e5; }
  div { font-family: system-ui; font-size: 13px; padding: 10px;
        margin-bottom: 4px; }
  .a { background: var(--brand); color: white; }
  .b { background: color-mix(in srgb, var(--brand) 55%, white); }
  .c { background: color-mix(in srgb, var(--brand) 25%, white); }
  .d { background: color-mix(in srgb, var(--brand) 10%, white); }
</style>
<div class="a">--brand</div>
<div class="b">55% brand</div>
<div class="c">25% brand</div>
<div class="d">10% brand</div>
```

## aspect-ratio

<div class="box">
  <div class="box-body">
    <p>
      שמירה על יחס גובה־רוחב הייתה פעם טריק עם <code>padding-top: 56.25%</code>.
      היום זו שורה אחת:
    </p>
    <p><code>aspect-ratio: 16 / 9;</code></p>
    <p class="note-line">
      שימושי במיוחד לתמונות, לסרטונים מוטמעים ולתיבות טעינה —
      כי הוא <strong>שומר את המקום מראש</strong> ומונע מהדף לקפוץ
      כשהתוכן נטען.
    </p>
  </div>
</div>

## גלילה חלקה ועיגון

| מאפיין | מה הוא עושה |
| --- | --- |
| `scroll-behavior: smooth` | גלילה מונפשת לעוגן בדף |
| `scroll-margin-top` | מרווח מעל יעד הגלילה — פותר כותרת שמוסתרת תחת סרגל דביק |
| `scroll-snap-type` | גלילה שנתפסת על פריטים, כמו קרוסלה |
| `overscroll-behavior` | מונע מגלילה בתוך תיבה ״לדלוף״ לדף |

<div class="box example">
  <div class="box-head"><span class="icon">🔗</span>המלכודת של הכותרת הנעלמת</div>
  <div class="box-body">
    <p>
      כשיש סרגל <code>sticky</code> בראש הדף וקישור עוגן,
      הכותרת שקופצים אליה מסתתרת <strong>מתחת לסרגל</strong>.
    </p>
    <p><code>h2 { scroll-margin-top: 80px; }</code></p>
    <p class="note-line">
      שורה אחת פותרת את זה — בלי JavaScript ובלי מרווחים מזויפים.
    </p>
  </div>
</div>

## כלי עזר שחוזרים תמיד

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong><code>object-fit: cover</code></strong> — תמונה שממלאת מסגרת בלי להימתח. הכרחי לתמונות פרופיל וכרטיסים.</li>
      <li><strong><code>cursor: pointer</code></strong> — סימן שהאלמנט לחיץ.</li>
      <li><strong><code>pointer-events: none</code></strong> — הופך אלמנט ל״שקוף״ ללחיצות.</li>
      <li><strong><code>user-select: none</code></strong> — מונע סימון טקסט בכפתורים.</li>
      <li><strong><code>accent-color</code></strong> — צובע תיבות סימון וכפתורי רדיו בצבע המותג, בלי לבנות אותם מחדש.</li>
      <li><strong><code>text-wrap: balance</code></strong> — מאזן שורות בכותרת כך שלא תישאר מילה בודדת בשורה אחרונה.</li>
    </ul>
  </div>
</div>

```demo
<style>
  .row { display: flex; gap: 10px; font-family: system-ui; font-size: 12px; }
  .row div { text-align: center; }
  img { width: 90px; height: 60px; display: block;
        border: 1px solid #cbd5e1; }
  .fit { object-fit: cover; }
</style>
<div class="row">
  <div><img src="assets/images/sample.svg" alt="stretched">stretched</div>
  <div><img class="fit" src="assets/images/sample.svg" alt="cover">object-fit: cover</div>
</div>
```

## תמיכה בדפדפנים

<div class="box">
  <div class="box-body">
    <p>
      כל מה שבפרק נתמך בדפדפנים העדכניים. כשרוצים בכל זאת מסלול חלופי,
      יש <code>@supports</code> — שבודק אם הדפדפן מכיר מאפיין:
    </p>
    <p><code>@supports (container-type: inline-size) { ... }</code></p>
    <p class="note-line">
      הדרך הבטוחה לבדוק תמיכה בפועל היא <strong>caniuse.com</strong>.
      ובאופן כללי, CSS <strong>מתעלם בשקט</strong> ממה שהוא לא מבין —
      ולכן הוספת יכולת חדשה בדרך כלל לא שוברת דפדפן ישן, אלא רק
      לא משפרת אותו.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>@container</code> בלי <code>container-type</code></strong> — התנאי לא יתקיים לעולם.</li>
      <li><strong>הגדרת המיכל על האלמנט עצמו</strong> — רכיב לא יכול לשאול על רוחבו שלו, רק על ההורה.</li>
      <li><strong>בלבול בין <code>:is()</code> ל־<code>:where()</code></strong> — ההבדל הוא ספציפיות, ו־<code>:where()</code> הוא אפס.</li>
      <li><strong>קינון עמוק מדי</strong> — מייצר ספציפיות גבוהה שקשה לדרוס.</li>
      <li><strong><code>:has()</code> עם בוררים כבדים על כל הדף</strong> — עלול לעלות בביצועים; כדאי למקד אותו.</li>
      <li><strong><code>scroll-behavior: smooth</code> בלי <code>prefers-reduced-motion</code></strong> — גלילה מונפשת מפריעה למי שביקש להפחית תנועה.</li>
      <li><strong>שכחת <code>scroll-margin-top</code></strong> — הכותרת מתחבאת מתחת לסרגל הדביק.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>container queries</strong> — הרכיב מגיב לרוחב ההורה, לא לחלון. דורש <code>container-type</code>.</li>
      <li><strong><code>:has()</code></strong> — בוחר הורה לפי מה שיש בתוכו. הבורר שחיכו לו שנים.</li>
      <li><strong><code>:is()</code></strong> מקצר רשימות ושומר ספציפיות; <strong><code>:where()</code></strong> מאפס אותה.</li>
      <li><strong>קינון</strong> נכנס ל־CSS עצמו, עם <code>&amp;</code> — אבל לא יותר משתי רמות.</li>
      <li><strong><code>color-mix()</code></strong> גוזר גוונים מצבע אחד, ו־<code>oklch()</code> נותן בהירות אחידה לעין.</li>
      <li><strong><code>aspect-ratio</code></strong> שומר יחס ומונע קפיצות בטעינה.</li>
      <li><strong><code>scroll-margin-top</code></strong> פותר כותרת שמתחבאת תחת סרגל דביק.</li>
      <li><code>object-fit</code>, <code>accent-color</code> ו־<code>text-wrap: balance</code> — כלים קטנים שחוזרים תמיד.</li>
      <li><code>@supports</code> בודק תמיכה; CSS מתעלם בשקט ממה שהוא לא מכיר.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל המרכזי בין `@media` ל-`@container`?
- `@container` מהיר יותר
+ `@media` מודד את רוחב החלון, ו-`@container` מודד את רוחב ההורה שבו הרכיב יושב
- `@container` עובד רק עם grid
- אין הבדל מעשי
= לכן רכיב עם container query אפשר להעביר לכל מקום בדף והוא יסתדר לבד.

? מה עושה הבורר `.card:has(img)`?
- בוחר את התמונה שבתוך הכרטיס
+ בוחר את הכרטיס עצמו, בתנאי שיש בתוכו תמונה
- בוחר כרטיס שנמצא בתוך תמונה
- בוחר את הכרטיס שאחרי התמונה
= זה הבורר הראשון ב-CSS שמסתכל כלפי מעלה בעץ, ולא כלפי מטה.

? מתי עדיף `:where()` על `:is()`?
- כשרוצים ספציפיות גבוהה
+ בכללי בסיס ואיפוסים, כי `:where()` תורם ספציפיות אפס ולכן קל מאוד לדרוס אותו
- כשיש יותר מחמישה בוררים
- `:where()` מהיר יותר
= `:is()` לעומתו מקבל את הספציפיות של הבורר החזק ביותר שבתוכו.

? כתבת `@container (min-width: 24rem)` ושום דבר לא קורה. מה הכי סביר שחסר?
- `@supports` מסביב
+ לא הוגדר `container-type: inline-size` על ההורה
- צריך `display: grid`
- container queries אינן נתמכות
= בלי לסמן את ההורה כמיכל, אין למי להשוות את התנאי.

? יש לך סרגל `sticky` בראש הדף, וקישורי עוגן קופצים לכותרת שמתחבאת מתחתיו. מה הפתרון?
- `position: absolute` על הכותרת
+ `scroll-margin-top` על הכותרת, שמשאיר מרווח מעל יעד הגלילה
- `z-index` גבוה יותר
- `overflow: hidden` על ה-body
= זה פותר את זה בשורה אחת, בלי JavaScript ובלי מרווחים מזויפים.
```
