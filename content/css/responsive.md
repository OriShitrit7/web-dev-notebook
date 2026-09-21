# Responsive Design

<p class="lead">
עיצוב רספונסיבי אינו ״גרסת מובייל״ נפרדת. זה אתר <strong>אחד</strong> שמסתגל לכל
רוחב מסך — ורוב העבודה היא דווקא <strong>לא לשבור</strong> את הגמישות
שכבר קיימת בדפדפן. בפרק הזה נראה מה כבר עובד לבד, מתי צריך
<code>@media</code>, ואיך פונקציות מודרניות מייתרות חלק גדול ממנו.
</p>

## נקודת הפתיחה

<div class="box theory">
  <div class="box-head"><span class="icon">🌱</span>HTML רספונסיבי מלכתחילה</div>
  <div class="box-body">
    <p>
      דף HTML בלי שום CSS הוא כבר רספונסיבי לחלוטין: כל אלמנט block
      תופס את רוחב המסך, והטקסט נשבר לשורות לפי המקום.
    </p>
    <p>
      מה ששובר את זה הוא <strong>מה שאנחנו מוסיפים</strong> —
      רוחב קבוע ב־<code>px</code>, גובה קשיח, או פריסה שלא יודעת לרדת שורה.
    </p>
    <p class="note-line">
      לכן הכלל הראשון אינו ״להוסיף media queries״ אלא
      <strong>להימנע מגדלים קשיחים מלכתחילה</strong>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">📱</span>בלי שורת ה־viewport שום דבר לא יעבוד</div>
  <div class="box-body">
    <p>
      זו התנאי המוקדם שבלעדיו כל שאר הפרק חסר משמעות:
    </p>
    <p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
    <p class="note-line">
      פגשנו אותה בפרק <strong>Metadata</strong>. בלעדיה דפדפני מובייל
      מעמידים פנים שהמסך רחב כ־980 פיקסלים ואז מקטינים את כל הדף —
      וה־media queries שלך פשוט לא ייכנסו לפעולה.
    </p>
  </div>
</div>

## @media

<div class="box theory">
  <div class="box-head"><span class="icon">🔀</span>כללים שחלים בתנאי</div>
  <div class="box-body">
    <p>
      <code>@media</code> עוטף קבוצת כללים ומחיל אותם
      <strong>רק כשהתנאי מתקיים</strong>:
    </p>
    <p><code>@media (min-width: 40rem) { .grid { display: flex; } }</code></p>
    <p class="note-line">
      התנאי נבדק מול <strong>רוחב חלון התצוגה</strong>, לא מול גודל האלמנט.
      זו נקודה שנחזור אליה בסוף הפרק.
    </p>
  </div>
</div>

| תנאי | מתי מתקיים |
| --- | --- |
| `(min-width: 40rem)` | הרוחב **לפחות** 40rem — גישת mobile first |
| `(max-width: 40rem)` | הרוחב **עד** 40rem |
| `(orientation: landscape)` | המסך רחב מגובהו |
| `(prefers-reduced-motion: reduce)` | המשתמש ביקש להפחית תנועה |
| `(prefers-color-scheme: dark)` | המערכת במצב כהה |
| `(pointer: coarse)` | אמצעי ההצבעה גס — כלומר אצבע, לא עכבר |

<div class="box">
  <div class="box-body">
    <p class="note-line">
      יש גם תחביר טווחים מודרני וקריא יותר:
      <code>@media (width &gt;= 40rem)</code>, ואפילו
      <code>@media (40rem &lt;= width &lt;= 70rem)</code>.
      הוא נתמך בכל הדפדפנים העדכניים.
    </p>
  </div>
</div>

## mobile first

<div class="box example">
  <div class="box-head"><span class="icon">📈</span>למה מתחילים מהקטן</div>
  <div class="box-body">
    <p>
      הגישה המקובלת היא לכתוב את עיצוב הבסיס <strong>למסך צר</strong>,
      ואז להוסיף שכבות עם <code>min-width</code> ככל שיש יותר מקום.
    </p>
    <p>שתי סיבות מעשיות:</p>
    <ul>
      <li>עיצוב למסך צר הוא פשוט יותר — עמודה אחת. קל להוסיף מורכבות מאשר להסיר אותה.</li>
      <li>מכשיר חלש טוען פחות כללים, כי כל ה־media queries לא מתקיימות אצלו.</li>
    </ul>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">mobile first — בסיס צר, מוסיפים כלפי מעלה</div>
    <div class="compare-body">
<pre><code class="language-css">.cards {
  display: grid;
  gap: 1rem;
}
@media (min-width: 40rem) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">desktop first — צריך לבטל אחורה</div>
    <div class="compare-body">
<pre><code class="language-css">.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 40rem) {
  .cards {
    grid-template-columns: 1fr;
  }
}</code></pre>
    </div>
  </div>
</div>

```demo
<style>
  .wrap { display: flex; flex-direction: column; gap: 6px;
          font-family: system-ui; font-size: 13px; }
  .wrap div { background: #4f46e5; color: white; padding: 10px; }
  .state::after { content: "narrow — stacked"; }
  @media (min-width: 600px) {
    .wrap { flex-direction: row; }
    .state::after { content: "wide — side by side"; }
  }
</style>
<div class="wrap">
  <div class="state"></div>
  <div>second</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      חלון הדמו צר מ־600 פיקסלים, ולכן רואים כאן את <strong>מצב הבסיס</strong> —
      עמודה אחת. ה־media query היא זו שתהפוך אותו לשורה כשיש מספיק מקום.
      זה בדיוק הסדר של mobile first: הבסיס קודם, והתוספת אחריו.
    </p>
  </div>
</div>

## נקודות שבירה

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>לפי התוכן, לא לפי מכשירים</div>
  <div class="box-body">
    <p>
      הפיתוי הוא לבחור נקודות שבירה לפי דגמי טלפונים. זו טעות —
      הרשימה הזו משתנה כל שנה, ואף פעם לא תהיה מלאה.
    </p>
    <p>
      הדרך הנכונה: להרחיב את החלון לאט, ו<strong>לשבור בדיוק במקום
      שבו התוכן מתחיל להיראות רע</strong>. שלוש נקודות שבירה
      מספיקות לרוב האתרים.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>rem ב־media query הוא לא מה שחשבת</div>
  <div class="box-body">
    <p>
      בתוך תנאי של <code>@media</code>, היחידות <code>rem</code> ו־<code>em</code>
      מחושבות תמיד לפי <strong>גודל הגופן ההתחלתי של הדפדפן</strong> —
      בדרך כלל 16 פיקסלים.
    </p>
    <p>
      גם אם שינית <code>html { font-size: 20px }</code>, התנאי
      <code>40rem</code> יישאר 640 פיקסלים ולא 800.
      זו התנהגות מכוונת, אבל היא מפתיעה כמעט את כולם.
    </p>
    <p class="note-line">
      היתרון של <code>rem</code> כאן הוא אחר: אם המשתמש הגדיל את גודל
      הגופן בהגדרות הדפדפן, נקודות השבירה <strong>יזוזו יחד איתו</strong>.
    </p>
  </div>
</div>

## מה שמייתר media queries

<div class="box theory">
  <div class="box-head"><span class="icon">🪄</span>שלוש פונקציות</div>
  <div class="box-body">
    <ul>
      <li><strong><code>min(a, b)</code></strong> — לוקח את <strong>הקטן</strong>. שימושי כתקרה.</li>
      <li><strong><code>max(a, b)</code></strong> — לוקח את <strong>הגדול</strong>. שימושי כרצפה.</li>
      <li><strong><code>clamp(min, ideal, max)</code></strong> — ערך שנע בין שני גבולות.</li>
    </ul>
    <p class="note-line">
      את <code>min()</code> כבר פגשנו בפרק Units &amp; Sizing,
      בדפוס <code>width: min(760px, 100%)</code>.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🔤</span>טיפוגרפיה נוזלית</div>
  <div class="box-body">
    <p><code>font-size: clamp(1.5rem, 5vw, 3rem);</code></p>
    <p>
      כותרת שגדלה יחד עם המסך, אבל <strong>אף פעם לא קטנה מ־1.5rem
      ולא גדולה מ־3rem</strong>. הערך האמצעי הוא זה שגמיש,
      ושני הקצוות הם הגבולות.
    </p>
    <p class="note-line">
      שורה אחת שמחליפה שלוש נקודות שבירה. אבל חשוב לשמור על
      גבול תחתון סביר — כותרת שמתכווצת בלי הגבלה נעשית בלתי קריאה.
    </p>
  </div>
</div>

```demo
<style>
  h3 { font-size: clamp(16px, 6vw, 40px);
       font-family: system-ui; margin: 0 0 8px; color: #312e81; }
  p { font-family: system-ui; font-size: 13px; color: #6b6b70; margin: 0; }
</style>
<h3>Fluid heading</h3>
<p>Resize the window — this heading scales between 16px and 40px.</p>
```

<div class="box example">
  <div class="box-head"><span class="icon">🖼️</span>ורשת בלי אף תנאי</div>
  <div class="box-body">
    <p><code>grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));</code></p>
    <p class="note-line">
      זו השורה מפרק <strong>Grid</strong>, ועכשיו ברור למה הדגשנו שם
      שהיא עובדת <strong>בלי media query</strong>: מספר העמודות נגזר
      מהמקום הפנוי, ולא מתנאי שכתבת מראש.
    </p>
  </div>
</div>

## תמונות

<div class="box">
  <div class="box-body">
    <p>
      השורה שפותרת את רוב בעיות התמונות, מפרק Units &amp; Sizing:
    </p>
    <p><code>img { max-width: 100%; height: auto; }</code></p>
    <p class="note-line">
      התמונה לא תגלוש מההורה, והפרופורציה נשמרת. ב־HTML יש גם
      <code>srcset</code>, שמאפשר לדפדפן לבחור <strong>קובץ אחר לגמרי</strong>
      לפי רוחב המסך — כדי לא לשלוח תמונה של 2000 פיקסלים לטלפון.
    </p>
  </div>
</div>

## העדפות משתמש

<div class="box example">
  <div class="box-head"><span class="icon">♿</span>רספונסיביות היא לא רק רוחב</div>
  <div class="box-body">
    <p>
      <code>@media</code> בודק גם <strong>העדפות שהמשתמש הגדיר במערכת</strong>,
      וזו אחת הדרכים הזולות ביותר לשפר נגישות:
    </p>
    <ul>
      <li><strong><code>prefers-color-scheme</code></strong> — מצב כהה. בדיוק הדפוס מפרק CSS Variables.</li>
      <li><strong><code>prefers-reduced-motion</code></strong> — משתמשים שתנועה גורמת להם לסחרחורת. נחזור לזה בפרק Transitions &amp; Animations.</li>
    </ul>
  </div>
</div>

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      זה אחד המקרים הבודדים שבהם <code>!important</code> מוצדק:
      העדפת נגישות של המשתמש צריכה לגבור על כל דבר שכתבנו.
    </p>
  </div>
</div>

## מה שבודקים בפועל

<div class="box">
  <div class="box-body">
    <p>
      בכלי הפיתוח יש מצב מכשיר — <strong>Toggle device toolbar</strong> —
      שמאפשר לגרור את רוחב החלון ולראות את נקודות השבירה בזמן אמת.
    </p>
    <p class="note-line">
      שלוש בדיקות שכדאי לעשות תמיד: רוחב צר מאוד (כ־320 פיקסלים),
      הגדלת גופן בדפדפן ל־200%, וגלילה <strong>אופקית</strong> —
      אם היא קיימת, משהו גולש.
    </p>
  </div>
</div>

## ומה לגבי גודל האלמנט?

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>container queries</div>
  <div class="box-body">
    <p>
      המגבלה הגדולה של <code>@media</code> היא שהוא מודד את
      <strong>החלון</strong>. אבל רכיב כרטיס לא באמת מתעניין ברוחב המסך —
      הוא מתעניין ברוחב <strong>המקום שהוא יושב בו</strong>.
    </p>
    <p>
      לשם כך נוספו <strong>container queries</strong>, שמאפשרות לרכיב
      להגיב לגודל ההורה שלו. נראה אותן בפרק
      <strong>Modern CSS &amp; Utilities</strong>.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>בלי <code>&lt;meta name="viewport"&gt;</code></strong> — ה־media queries לא ייכנסו לפעולה בטלפון.</li>
      <li><strong>רוחב קבוע ב־<code>px</code></strong> — הגורם מספר אחת לגלילה אופקית.</li>
      <li><strong>נקודות שבירה לפי דגמי מכשירים</strong> — במקום לפי הנקודה שבה התוכן נשבר.</li>
      <li><strong>ציפייה ש־<code>rem</code> ב־<code>@media</code> יושפע מ־<code>html { font-size }</code></strong> — הוא תמיד לפי ברירת המחדל של הדפדפן.</li>
      <li><strong>ערבוב <code>min-width</code> ו־<code>max-width</code> בלי שיטה</strong> — נוצרים טווחים חופפים וכללים שמבטלים זה את זה.</li>
      <li><strong><code>clamp()</code> עם גבול תחתון נמוך מדי</strong> — הטקסט נעשה בלתי קריא במסך צר.</li>
      <li><strong>הסתרת תוכן ב־<code>display: none</code> במובייל</strong> — התוכן עדיין נטען, ונעלם גם מקוראי מסך.</li>
      <li><strong>בדיקה רק בהקטנת חלון</strong> — זה לא מדמה מגע, ביצועים או גודל גופן מוגדל.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>HTML <strong>כבר</strong> רספונסיבי. רוב העבודה היא לא לשבור אותו בגדלים קשיחים.</li>
      <li><code>&lt;meta name="viewport"&gt;</code> הוא <strong>תנאי מוקדם</strong> לכל השאר.</li>
      <li><code>@media</code> מחיל כללים בתנאי, ובודק את <strong>רוחב החלון</strong>.</li>
      <li><strong>mobile first</strong> — בסיס למסך צר, ואז <code>min-width</code> כלפי מעלה.</li>
      <li>נקודות שבירה נבחרות <strong>לפי התוכן</strong>, לא לפי דגמי מכשירים.</li>
      <li><code>rem</code> בתוך <code>@media</code> תמיד לפי גודל הגופן ההתחלתי של הדפדפן.</li>
      <li><code>clamp(min, ideal, max)</code> — טיפוגרפיה נוזלית בשורה אחת.</li>
      <li><code>repeat(auto-fit, minmax(...))</code> — רשת רספונסיבית בלי אף תנאי.</li>
      <li><code>@media</code> קורא גם <strong>העדפות משתמש</strong>: מצב כהה והפחתת תנועה.</li>
      <li><strong>container queries</strong> יגיבו לגודל ההורה, לא לגודל החלון.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? למה גישת mobile first עדיפה על desktop first?
- כי מסכים קטנים נפוצים יותר
+ כי עיצוב לעמודה אחת פשוט יותר כבסיס, וקל להוסיף מורכבות עם `min-width` מאשר לבטל אותה אחורה
- כי `max-width` אינו נתמך
- כי היא מקצרת את קובץ ה-CSS תמיד
= בנוסף, מכשיר חלש לא מחיל בכלל את הכללים שבתוך media queries שלא מתקיימות.

? האתר נראה מוקטן ומטושטש בטלפון, וה-media queries לא משפיעות. מה הכי סביר שחסר?
- `display: flex` על ה-body
+ שורת `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ב-head
- `max-width` על התמונות
- נקודת שבירה נוספת
= בלעדיה דפדפני מובייל מעמידים פנים שהמסך רחב כ-980 פיקסלים ואז מקטינים את כל הדף.

? כתבת `html { font-size: 20px }` ויש לך `@media (min-width: 40rem)`. באיזה רוחב התנאי יתקיים?
- ב-800 פיקסלים
+ ב-640 פיקסלים — בתוך media query היחידות מחושבות לפי גודל הגופן ההתחלתי של הדפדפן ולא לפי ה-html
- ב-40 פיקסלים
- תלוי ברוחב האלמנט
= זו התנהגות מכוונת. היתרון בכל זאת: אם המשתמש הגדיל גופן בהגדרות הדפדפן, הנקודה תזוז איתו.

? מה עושה `font-size: clamp(1.5rem, 5vw, 3rem)`?
- קובע שלושה גדלים לשלושה מסכים
+ גודל שגדל עם רוחב המסך, אבל לעולם לא קטן מ-1.5rem ולא גדול מ-3rem
- מקטין את הגופן ב-5%
- תקף רק בתוך media query
= הערך האמצעי הוא הגמיש, ושני הקצוות הם הגבולות.

? למה `@media` לא מספיק כדי שרכיב כרטיס יגיב לרוחב שלו עצמו?
- כי `@media` פועל רק על `body`
+ כי `@media` מודד את רוחב החלון, ולא את רוחב המקום שבו הרכיב יושב
- כי צריך `!important`
- כי כרטיסים חייבים `position: relative`
= לשם כך נוספו container queries, שמודדות את ההורה במקום את החלון.
```
