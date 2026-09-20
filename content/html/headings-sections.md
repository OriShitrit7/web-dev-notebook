# Headings & Sections

<p class="lead">
כותרות הן לא רק ״טקסט גדול״. הן מה שמגדיר את <strong>שלד התוכן</strong> של הדף —
המפה שלפיה קוראי מסך, מנועי חיפוש ובני אדם מבינים איך הדף מחולק.
בפרק הזה נלמד את שש רמות הכותרות, את כללי ההיררכיה, ואיך מחלקים תוכן לחלקים.
</p>

## שש רמות הכותרות

<div class="box theory">
  <div class="box-head"><span class="icon">📘</span>h1 עד h6</div>
  <div class="box-body">
    <p>
      ב־HTML יש בדיוק <strong>שש</strong> רמות של כותרות, מ־<code>&lt;h1&gt;</code>
      ועד <code>&lt;h6&gt;</code>. האות <code>h</code> היא קיצור של <em>heading</em>.
    </p>
    <p>
      <code>&lt;h1&gt;</code> היא הרמה <strong>הגבוהה ביותר</strong> — הכותרת הראשית של הדף.
      ככל שהמספר גדל, הרמה נמוכה יותר ומייצגת חלוקה עמוקה יותר בתוך התוכן.
    </p>
  </div>
</div>

```demo
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

<div class="box">
  <div class="box-body">
    <p>
      הגדלים שרואים בתצוגה הם <strong>ברירת המחדל של הדפדפן</strong> —
      בדיוק כמו שלמדנו בפרק Overview. אלה הערכים שהתקן ממליץ עליהם:
    </p>
  </div>
</div>

| תגית | גודל ברירת מחדל | משקל |
| --- | --- | --- |
| `<h1>` | `2em` | מודגש |
| `<h2>` | `1.5em` | מודגש |
| `<h3>` | `1.17em` | מודגש |
| `<h4>` | `1em` | מודגש |
| `<h5>` | `0.83em` | מודגש |
| `<h6>` | `0.67em` | מודגש |

<div class="keypoint">
שימי לב ש־<code>&lt;h5&gt;</code> ו־<code>&lt;h6&gt;</code> קטנות מטקסט רגיל בברירת המחדל.
זו הוכחה טובה לכך שגודל הכותרת הוא <strong>לא</strong> מה שהופך אותה לכותרת —
המשמעות היא שקובעת, לא המראה.
</div>

## היררכיה: אל תדלגי על רמות

<div class="box theory">
  <div class="box-head"><span class="icon">🪜</span>הכלל</div>
  <div class="box-body">
    <p>
      כותרות אמורות לרדת <strong>רמה אחת בכל פעם</strong>, כמו תוכן עניינים של ספר:
      פרק, תת־פרק, תת־תת־פרק.
    </p>
    <p>
      אחרי <code>&lt;h2&gt;</code> אפשר לכתוב <code>&lt;h3&gt;</code>, אבל לא לקפוץ ישר
      ל־<code>&lt;h4&gt;</code>. לעלות חזרה כמה רמות בבת אחת — זה כן מותר.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">היררכיה תקינה</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;h1&gt;Cooking&lt;/h1&gt;
  &lt;h2&gt;Tools&lt;/h2&gt;
    &lt;h3&gt;Knives&lt;/h3&gt;
  &lt;h2&gt;Recipes&lt;/h2&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">דילוג על רמה</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;h1&gt;Cooking&lt;/h1&gt;
    &lt;h4&gt;Tools&lt;/h4&gt;
  &lt;h2&gt;Recipes&lt;/h2&gt;</code></pre>
    </div>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>זו לא שגיאה שתשבור את הדף</div>
  <div class="box-body">
    <p>
      דילוג על רמה לא ייצור שום הודעת שגיאה, והדף ייראה בסדר גמור.
      בדיוק בגלל זה קל לפספס את זה.
    </p>
    <p>מי שכן ייפגע הם:</p>
    <ul>
      <li>
        <strong>משתמשי קורא מסך</strong> — הם מנווטים בדף על ידי קפיצה בין כותרות.
        רמה חסרה נשמעת להם כמו חלק שנעלם מתוכן העניינים.
      </li>
      <li>
        <strong>מנועי חיפוש</strong> — הם בונים מהכותרות מפה של הדף כדי להבין על מה הוא.
      </li>
    </ul>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>כך נראה תוכן עם היררכיה נכונה:</p>
  </div>
</div>

```demo
<h1>Cooking Basics</h1>
<h2>Tools</h2>
<p>Knife, board, pan.</p>
<h2>Techniques</h2>
<h3>Chopping</h3>
<p>Keep fingers curled.</p>
```

<div class="box">
  <div class="box-body">
    <p>ומכאן אפשר לגזור את מפת התוכן של הדף:</p>
  </div>
</div>

```text
Cooking Basics
├── Tools
└── Techniques
    └── Chopping
```

## כמה h1 מותר בדף?

<div class="box theory">
  <div class="box-head"><span class="icon">1️⃣</span>התשובה הקצרה: אחת</div>
  <div class="box-body">
    <p>
      מבחינת התקן, <strong>מותר</strong> לכתוב כמה <code>&lt;h1&gt;</code> בדף אחד —
      זו לא שגיאה תחבירית.
    </p>
    <p>
      אבל ההמלצה המקובלת היא <strong>כותרת <code>&lt;h1&gt;</code> אחת לדף</strong>,
      שמתארת במה הדף עוסק. זה מה שהופך את מבנה הדף לחד־משמעי.
    </p>
    <p class="note-line">
      היה בעבר ניסיון להגדיר אלגוריתם שיחשב רמות כותרת אוטומטית לפי קינון,
      אבל אף דפדפן לא מימש אותו בפועל והוא הוסר מהתקן. לכן הרמה שכותבים היא הרמה שקובעת.
    </p>
  </div>
</div>

## כותרת היא משמעות, לא גודל

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הטעות הכי נפוצה בכותרות</div>
  <div class="box-body">
    <p>
      הטעות: לבחור <code>&lt;h3&gt;</code> במקום <code>&lt;h2&gt;</code>
      <strong>כי רוצים שהטקסט יהיה קטן יותר</strong>.
    </p>
    <p>
      זו בחירה לפי מראה, והיא שוברת את מבנה הדף. הרמה של הכותרת צריכה לנבוע
      <strong>מהמיקום שלה בהיררכיית התוכן</strong>, לא מהגודל הרצוי.
    </p>
    <p>
      אם הכותרת גדולה מדי או קטנה מדי — משנים את הגודל ב־CSS. הגודל תמיד ניתן לשינוי;
      המשמעות לא.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>והכיוון ההפוך</div>
  <div class="box-body">
    <p>
      גם ההפך שגוי: לכתוב טקסט מודגש בפסקה רגילה כדי ש״ייראה ככותרת״.
      הוא ייראה ככותרת, אבל לא <em>יהיה</em> כותרת.
    </p>
    <p>
      קורא מסך לא יזהה אותו, הוא לא יופיע ברשימת הכותרות של הדף,
      ומנוע חיפוש לא ייתן לו משקל מיוחד.
    </p>
  </div>
</div>

## חלוקת התוכן לחלקים

<div class="box theory">
  <div class="box-head"><span class="icon">🧱</span>כל כותרת פותחת חלק חדש</div>
  <div class="box-body">
    <p>
      כותרת לא עומדת לבדה — היא <strong>פותחת קטע תוכן</strong> שנמשך עד הכותרת הבאה
      באותה רמה או ברמה גבוהה יותר.
    </p>
    <p>
      זה אומר שהחלוקה לחלקים כבר קיימת בדף גם בלי שום תגית נוספת,
      פשוט מעצם סדר הכותרות.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      אפשר גם לסמן את החלוקה <strong>במפורש</strong>, באמצעות
      <code>&lt;section&gt;</code> — אלמנט שמקבץ יחד קטע תוכן עם הכותרת שלו:
    </p>
  </div>
</div>

```demo
<section>
  <h2>About</h2>
  <p>Some text here.</p>
</section>
<section>
  <h2>Contact</h2>
  <p>More text here.</p>
</section>
```

<div class="keypoint">
שימי לב שבתצוגה <strong>לא רואים שום הבדל</strong> — ל־<code>&lt;section&gt;</code>
אין עיצוב ברירת מחדל משלו. הוא לא משנה את המראה, רק את <strong>המשמעות</strong>.
זה בדיוק מה שהופך אותו לאלמנט סמנטי.
</div>

<div class="box">
  <div class="box-body">
    <p>
      <code>&lt;section&gt;</code> הוא רק אחד ממשפחה שלמה של אלמנטים סמנטיים —
      יש גם <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,
      <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>
      ו־<code>&lt;aside&gt;</code>.
    </p>
    <p>
      את כולם, ואת ההבדלים ביניהם, נלמד בפרק
      <strong>Semantic HTML &amp; Navigation</strong>. כאן מספיק להבין את הרעיון:
      כותרת מגדירה חלק, ואפשר לעטוף אותו כדי לומר את זה במפורש.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה כדאי לבדוק בכותרות</div>
  <div class="box-body">
    <ul>
      <li><strong>בחירת רמה לפי גודל</strong> — הסיבה מספר אחת למבנה שבור.</li>
      <li><strong>דילוג על רמה</strong> — מ־<code>&lt;h2&gt;</code> ישר ל־<code>&lt;h4&gt;</code>.</li>
      <li><strong>כמה <code>&lt;h1&gt;</code> בדף</strong> — תקין תחבירית, אבל מטשטש את מבנה הדף.</li>
      <li><strong>טקסט מודגש במקום כותרת</strong> — נראה נכון, מתנהג לא נכון.</li>
      <li><strong>כותרת ריקה</strong> — <code>&lt;h2&gt;&lt;/h2&gt;</code> כדי ליצור רווח. לרווחים יש CSS.</li>
      <li><strong>דף בלי <code>&lt;h1&gt;</code> בכלל</strong> — לדף אין כותרת ראשית, והמבנה מתחיל באוויר.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>יש <strong>שש רמות</strong> כותרת, מ־<code>&lt;h1&gt;</code> ועד <code>&lt;h6&gt;</code>.</li>
      <li><code>&lt;h1&gt;</code> היא הרמה הגבוהה ביותר; ככל שהמספר גדל הרמה נמוכה יותר.</li>
      <li><strong>לא מדלגים על רמות</strong> בירידה. לעלות כמה רמות בבת אחת — מותר.</li>
      <li>מומלץ <strong><code>&lt;h1&gt;</code> אחת לדף</strong>, גם אם התקן מתיר יותר.</li>
      <li>בוחרים רמה לפי <strong>המשמעות</strong> ולא לפי הגודל הרצוי. גודל משנים ב־CSS.</li>
      <li>טקסט מודגש הוא <strong>לא</strong> תחליף לכותרת — הוא נראה דומה אבל חסר משמעות.</li>
      <li>כל כותרת פותחת <strong>קטע תוכן</strong>, ואפשר לסמן אותו במפורש עם <code>&lt;section&gt;</code>.</li>
      <li>לאלמנטים סמנטיים אין עיצוב ברירת מחדל — הם משנים משמעות, לא מראה.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? כמה רמות כותרת קיימות ב-HTML?
- שלוש
- חמש
+ שש, מ-`<h1>` ועד `<h6>`
- אין הגבלה
= שש רמות בדיוק. ככל שהמספר גדול יותר, הרמה בהיררכיה נמוכה יותר.

? רצית כותרת משנה קטנה יותר, ולכן בחרת `<h4>` מיד אחרי `<h2>`. מה הבעיה?
- אין בעיה, זה תקין לגמרי
- הדפדפן יציג שגיאה
+ בחרת רמה לפי גודל ולא לפי מבנה, ודילגת על `<h3>`
- `<h4>` אסור לשימוש אחרי `<h2>`
= הרמה נקבעת לפי המיקום בהיררכיית התוכן. אם הכותרת גדולה מדי, משנים את הגודל ב-CSS.

? למי בעיקר אכפת מהיררכיית הכותרות בדף?
- לדפדפן, שמשתמש בה לחישוב הפריסה
+ למשתמשי קורא מסך, שמנווטים בדף על ידי קפיצה בין כותרות
- ל-CSS, שלא יעבוד בלי היררכיה נכונה
- לאף אחד — זו מוסכמה אסתטית בלבד
= קורא מסך בונה מהכותרות תוכן עניינים. רמה חסרה נשמעת כמו חלק שנעלם.

? הוספת `<section>` סביב קטע תוכן ושום דבר לא השתנה בתצוגה. למה?
- כנראה שכחת לסגור את התגית
+ כי לאלמנטים סמנטיים אין עיצוב ברירת מחדל — הם משנים משמעות ולא מראה
- כי `<section>` עובד רק בתוך `<main>`
- כי צריך להוסיף לו `id` כדי שיפעל
= זו בדיוק הנקודה. הם מתארים מה התוכן, והמראה נשאר באחריות ה-CSS.

? מה הדרך הנכונה ליצור טקסט שנראה ככותרת אבל אינו כותרת בתוכן?
+ אין כזה מצב שכדאי בו — אם זו כותרת משתמשים ב-`<h>`, ואם לא, מעצבים טקסט רגיל ב-CSS
- לכתוב `<p>` עם `<strong>` בפנים
- לכתוב `<h1>` ולהקטין אותו ב-CSS
- לכתוב `<h6>` כי הוא הכי קטן
= טקסט מודגש נראה ככותרת אבל לא מתנהג ככותרת: הוא לא ייכלל ברשימת הכותרות של קורא מסך.
```
