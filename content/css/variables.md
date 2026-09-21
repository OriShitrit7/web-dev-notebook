# CSS Variables

<p class="lead">
משתני CSS מאפשרים לתת שם לערך במקום אחד ולהשתמש בו בכל הקובץ.
זה נשמע כמו נוחות בלבד, אבל הם הרבה יותר מזה: הם <strong>חיים בזמן ריצה</strong>,
<strong>עוברים בירושה</strong>, ואפשר להחליף אותם לפי הקשר —
וזה מה שהופך אותם לבסיס של ערכות נושא.
</p>

## ההגדרה והשימוש

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>שני מקפים ו־var</div>
  <div class="box-body">
    <p>
      משתנה מוגדר כמו כל הצהרה אחרת, רק ששמו מתחיל ב<strong>שני מקפים</strong>:
    </p>
    <p><code>--brand: #4f46e5;</code></p>
    <p>וקוראים לו עם הפונקציה <code>var()</code>:</p>
    <p><code>color: var(--brand);</code></p>
    <p class="note-line">
      השם הרשמי הוא <strong>custom property</strong> — מאפיין מותאם אישית.
      זה מדויק יותר מ״משתנה״, כי הוא באמת מאפיין CSS לכל דבר:
      הוא יושב על בורר, עובר בירושה, ומציית ל־Cascade.
    </p>
  </div>
</div>

```demo
<style>
  :root {
    --brand: #4f46e5;
    --radius: 10px;
  }
  button { font: inherit; border: 0; color: white;
           background: var(--brand);
           border-radius: var(--radius);
           padding: 8px 16px; }
  .tag { display: inline-block; font-family: system-ui;
         border: 2px solid var(--brand); color: var(--brand);
         border-radius: var(--radius); padding: 4px 10px; }
</style>
<button>Button</button>
<span class="tag">Tag</span>
```

## איפה מגדירים

<div class="box">
  <div class="box-body">
    <p>
      ברוב המקרים מגדירים את המשתנים הגלובליים על <code>:root</code> —
      פסאודו־מחלקה שמתאימה לאלמנט <code>&lt;html&gt;</code>, כלומר
      <strong>השורש של המסמך</strong>.
    </p>
    <p class="note-line">
      אפשר היה לכתוב גם <code>html</code>, אבל <code>:root</code> ספציפי
      במעט יותר וזה הנוהג המקובל.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎨</span>האתר הזה בנוי בדיוק ככה</div>
  <div class="box-body">
    <p>
      בראש <code>styles.css</code> של האתר שאת קוראת בו עכשיו יושב בלוק
      <code>:root</code> עם כל הצבעים, הצללים והגופנים —
      <code>--ink</code>, <code>--rule</code>, <code>--indigo-7</code> וכן הלאה.
    </p>
    <p class="note-line">
      שינוי של שורה אחת שם מחליף את הצבע בכל האתר. זה בדיוק
      השימוש שבשבילו הם נועדו.
    </p>
  </div>
</div>

## ירושה — ההבדל המהותי

<div class="box theory">
  <div class="box-head"><span class="icon">🧬</span>הם לא שכפול טקסט</div>
  <div class="box-body">
    <p>
      משתני CSS <strong>עוברים בירושה</strong>, בדיוק כמו <code>color</code>
      ו־<code>font-family</code> מפרק Cascade. משתנה שהוגדר על אלמנט
      זמין גם לכל צאצאיו.
    </p>
    <p>
      המשמעות: אפשר <strong>להגדיר אותו מחדש בהקשר מסוים</strong>,
      וכל מה שבתוכו יקבל את הערך החדש — בלי לגעת בכללים עצמם.
    </p>
  </div>
</div>

```demo
<style>
  .card { --accent: #4f46e5;
          border-inline-start: 6px solid var(--accent);
          background: #f8fafc; padding: 10px; margin-bottom: 8px;
          font-family: system-ui; }
  .card h4 { margin: 0 0 4px; color: var(--accent); }
  .danger { --accent: #be123c; }
  .ok { --accent: #047857; }
</style>
<div class="card"><h4>Default</h4>uses --accent from .card</div>
<div class="card danger"><h4>Danger</h4>same rules, new --accent</div>
<div class="card ok"><h4>Success</h4>same rules again</div>
```

<div class="keypoint">
שלושת הכרטיסים משתמשים ב<strong>אותם שני כללים בדיוק</strong>.
מה שהשתנה הוא רק הערך של <code>--accent</code> בתוך ההקשר —
ובגללו גם המסגרת וגם הכותרת החליפו צבע יחד.
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>לא כמו משתנים ב־Sass</div>
  <div class="box-body">
    <p>
      מי שמכירה משתנים ממעבדים כמו Sass — שם הם מוחלפים
      <strong>בזמן הבנייה</strong>, ומה שמגיע לדפדפן הוא כבר הערך הסופי.
    </p>
    <p>
      משתני CSS הם ההפך: הם <strong>קיימים בדפדפן בזמן ריצה</strong>.
      לכן אפשר לשנות אותם לפי בורר, לפי media query, או מ־JavaScript —
      והדף מגיב מיד.
    </p>
  </div>
</div>

## ערך גיבוי

<div class="box">
  <div class="box-body">
    <p>
      ל־<code>var()</code> אפשר לתת <strong>ערך שני</strong>,
      שישמש אם המשתנה לא הוגדר כלל:
    </p>
    <p><code>color: var(--brand, #333);</code></p>
    <p class="note-line">
      שימושי לרכיבים שאמורים לעבוד גם בלי שהוגדרה להם ערכת צבעים.
      אפשר גם לקנן: <code>var(--a, var(--b, red))</code>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>ערך לא חוקי לא חוזר אחורה</div>
  <div class="box-body">
    <p>
      אם משתנה קיים אבל הערך שבו <strong>לא מתאים למאפיין</strong> —
      למשל <code>--brand: 16px</code> שהוכנס ל־<code>color</code> —
      הגיבוי <strong>לא</strong> ייכנס לפעולה, כי המשתנה כן הוגדר.
    </p>
    <p>
      במקרה כזה המאפיין מקבל את הערך <strong>שעובר בירושה</strong>,
      או את ברירת המחדל שלו — ולא את הכלל הקודם שכתבת.
      זו התנהגות שמפתיעה ומקשה על איתור התקלה.
    </p>
  </div>
</div>

## שילוב עם calc

<div class="box example">
  <div class="box-head"><span class="icon">🧮</span>סולם מרווחים משורש אחד</div>
  <div class="box-body">
    <p>
      משתנים עובדים מצוין בתוך <code>calc()</code>, וכך בונים
      סולם שלם מערך בסיס יחיד:
    </p>
    <p><code>--space: 8px;</code></p>
    <p><code>padding: calc(var(--space) * 2);</code></p>
    <p class="note-line">
      שינוי של <code>--space</code> ל־10 פיקסלים מרחיב את כל המרווחים
      באתר בבת אחת, והפרופורציות נשמרות.
    </p>
  </div>
</div>

```demo
<style>
  :root { --space: 8px; --brand: #4f46e5; }
  div { background: var(--brand); color: white;
        margin-bottom: 6px; font-family: system-ui; font-size: 13px; }
  .s1 { padding: var(--space); }
  .s2 { padding: calc(var(--space) * 2); }
  .s3 { padding: calc(var(--space) * 3); }
</style>
<div class="s1">1 × --space</div>
<div class="s2">2 × --space</div>
<div class="s3">3 × --space</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב ש־<code>calc()</code> דורש <strong>רווחים סביב האופרטור</strong>:
      <code>calc(100% - 20px)</code> תקין, ואילו <code>calc(100%-20px)</code>
      לא יעבוד. הסיבה היא שמקף יכול להיות חלק משם.
    </p>
  </div>
</div>

## שינוי מ־JavaScript

<div class="box">
  <div class="box-body">
    <p>
      מכיוון שהמשתנים חיים בדפדפן, JavaScript יכול לשנות אותם —
      וכל מה שמשתמש בהם מתעדכן מיד:
    </p>
    <p><code>document.documentElement.style.setProperty('--brand', '#047857');</code></p>
    <p class="note-line">
      זו הדרך המקובלת לכפתור ״מצב כהה״ או לבורר צבעים.
      את ה־JavaScript עצמו נלמד בהמשך; בינתיים חשוב רק לדעת
      שזה אפשרי, ושזו הסיבה שמשתני CSS שונים מהותית ממשתני Sass.
    </p>
  </div>
</div>

## ערכת נושא כהה

<div class="box example">
  <div class="box-head"><span class="icon">🌙</span>אותו CSS, שתי ערכות</div>
  <div class="box-body">
    <p>
      זה השימוש שבו המשתנים באמת מוכיחים את עצמם. מגדירים את הערכים
      פעם אחת, ומחליפים אותם לפי העדפת המערכת של המשתמש:
    </p>
  </div>
</div>

```css
:root {
  --bg: #ffffff;
  --text: #1c1c1f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #14141a;
    --text: #f4f4f5;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב שהכלל של <code>body</code> נכתב <strong>פעם אחת בלבד</strong>.
      אף כלל עיצוב לא שוכפל — רק הערכים הוחלפו.
      את <code>@media</code> עצמו נפרק לגורמים בפרק הבא,
      <strong>Responsive Design</strong>.
    </p>
  </div>
</div>

## מה שאי אפשר לעשות איתם

<div class="box warn">
  <div class="box-head"><span class="icon">🚫</span>שלוש מגבלות</div>
  <div class="box-body">
    <ul>
      <li><strong>לא בשם מאפיין</strong> — <code>var(--prop): red</code> אינו קיים.</li>
      <li><strong>לא בתוך בורר</strong> — אי אפשר <code>.var(--name) { }</code>.</li>
      <li><strong>לא בתנאי של media query</strong> — <code>@media (min-width: var(--bp))</code> <strong>לא עובד</strong>. זו מלכודת נפוצה כשמנסים לרכז נקודות שבירה במשתנה.</li>
    </ul>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>מקף אחד במקום שניים</strong> — <code>-brand</code> אינו משתנה.</li>
      <li><strong>אותיות גדולות</strong> — <code>--Brand</code> ו־<code>--brand</code> הם <strong>שני משתנים שונים</strong>.</li>
      <li><strong>שכחת <code>var()</code></strong> — <code>color: --brand</code> פשוט לא תקין.</li>
      <li><strong>ציפייה לגיבוי כשהערך לא חוקי</strong> — הגיבוי פועל רק כשהמשתנה <strong>לא הוגדר</strong>.</li>
      <li><strong>הגדרה על בורר ממוקד מדי</strong> — משתנה שהוגדר על <code>.card</code> לא זמין מחוצה לו.</li>
      <li><strong><code>calc()</code> בלי רווחים סביב האופרטור</strong> — <code>calc(100%-20px)</code> נכשל בשקט.</li>
      <li><strong>ניסיון להשתמש במשתנה בתוך <code>@media</code></strong> — לא נתמך.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>מגדירים עם <strong>שני מקפים</strong> (<code>--brand: value</code>) וקוראים עם <code>var(--brand)</code>.</li>
      <li>השם הרשמי הוא <strong>custom property</strong>, והוא מאפיין CSS לכל דבר.</li>
      <li>משתנים גלובליים יושבים על <code>:root</code>.</li>
      <li>הם <strong>עוברים בירושה</strong>, ולכן אפשר להגדיר אותם מחדש בהקשר.</li>
      <li>הם <strong>חיים בזמן ריצה</strong> — בניגוד למשתני Sass — ולכן JavaScript יכול לשנות אותם.</li>
      <li><code>var(--x, fallback)</code> — הגיבוי פועל רק כשהמשתנה <strong>לא הוגדר</strong>.</li>
      <li>ערך לא חוקי גורם למאפיין לרשת ערך או לחזור לברירת מחדל, <strong>לא לכלל הקודם</strong>.</li>
      <li>עובדים מצוין עם <code>calc()</code> — שדורש <strong>רווחים סביב האופרטור</strong>.</li>
      <li><strong>אי אפשר</strong> להשתמש בהם בתנאי של <code>@media</code>.</li>
      <li>שמות <strong>רגישים לאותיות גדולות וקטנות</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל המהותי בין משתנה CSS למשתנה ב-Sass?
- אין הבדל, רק תחביר
+ משתנה Sass מוחלף בזמן הבנייה, ומשתנה CSS קיים בדפדפן בזמן ריצה ולכן אפשר לשנות אותו לפי הקשר או מ-JavaScript
- משתנה CSS מהיר יותר
- משתנה Sass עובר בירושה ומשתנה CSS לא
= בדיוק בגלל זה משתני CSS מתאימים לערכות נושא ולמצב כהה.

? למה מגדירים משתנים גלובליים על `:root`?
- כי רק שם מותר להגדיר משתנים
+ כי `:root` הוא שורש המסמך, ומשתנים עוברים בירושה ולכן הם יהיו זמינים לכל הדף
- כי זה מייעל את הטעינה
- כי `var()` מחפש רק ב-`:root`
= משתנה שהוגדר על `.card` יהיה זמין רק בתוך `.card` ובצאצאיו.

? הגדרת `--brand: 16px` ואז כתבת `color: var(--brand, #333)`. מה יקרה?
- הצבע יהיה `#333`, כי הערך אינו צבע
+ הגיבוי לא ייכנס לפעולה, כי המשתנה כן הוגדר — והמאפיין יקבל ערך שעבר בירושה או את ברירת המחדל
- הדפדפן ישתמש בכלל ה-color הקודם שכתבת
- תוצג שגיאה ב-Console
= הגיבוי ב-`var()` פועל רק כשהמשתנה כלל לא הוגדר, ולא כשערכו אינו מתאים למאפיין.

? רוצה שכרטיס אחד יקבל צבע הדגשה אחר, בלי לשכפל אף כלל עיצוב. מה תעשי?
- תכתבי כללים חדשים עם `!important`
+ תגדירי מחדש את המשתנה בתוך class על אותו כרטיס — הירושה תעדכן את כל מי שמשתמש בו
- תעבירי את המשתנה ל-`:root`
- תשתמשי ב-`@media`
= זה בדיוק הדפוס של `.card { --accent: ... }` ו-`.danger { --accent: ... }`.

? האם אפשר לכתוב `@media (min-width: var(--bp))`?
- כן, זו הדרך המומלצת לרכז נקודות שבירה
+ לא — אי אפשר להשתמש במשתני CSS בתנאי של media query
- כן, אבל רק עם יחידות `px`
- כן, אם המשתנה מוגדר על `:root`
= זו מלכודת נפוצה. נקודות השבירה נכתבות כערך מפורש בתוך התנאי.
```
