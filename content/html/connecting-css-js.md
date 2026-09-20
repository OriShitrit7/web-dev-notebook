# Connecting CSS & JavaScript

<p class="lead">
בפרק Overview דיברנו על שלוש השכבות: HTML למבנה, CSS למראה ו־JavaScript להתנהגות.
מאז בנינו את השכבה הראשונה לגמרי. הפרק הזה סוגר את המעגל ומראה
<strong>איך מחברים את שתי האחרות</strong> — וזו גם נקודת המעבר לחלק הבא בלימוד.
</p>

## שלוש דרכים לחבר CSS

<div class="box theory">
  <div class="box-head"><span class="icon">🎨</span>סקירה</div>
  <div class="box-body">
    <ul>
      <li><strong>Inline</strong> — attribute <code>style</code> ישירות על האלמנט.</li>
      <li><strong>Internal</strong> — בלוק <code>&lt;style&gt;</code> בתוך <code>&lt;head&gt;</code>.</li>
      <li><strong>External</strong> — קובץ <code>.css</code> נפרד, שמחובר עם <code>&lt;link&gt;</code>.</li>
    </ul>
  </div>
</div>

```demo
<style>
  .internal { color: #047857; }
</style>
<p style="color: #be123c">Inline style</p>
<p class="internal">Internal style</p>
<p>No style</p>
```

| דרך | איפה נכתב | משפיע על |
| --- | --- | --- |
| Inline | `style="..."` על האלמנט | אלמנט אחד בלבד |
| Internal | `<style>` בתוך `<head>` | הדף הנוכחי |
| External | קובץ `.css` נפרד | **כל האתר** |

## External — הדרך המומלצת

<div class="box theory">
  <div class="box-head"><span class="icon">📄</span>קובץ אחד לכל האתר</div>
  <div class="box-body">
    <p>מחברים קובץ CSS חיצוני בעזרת <code>&lt;link&gt;</code> שפגשנו בפרק Metadata:</p>
    <p><code>&lt;link rel="stylesheet" href="css/styles.css"&gt;</code></p>
    <p>ושלוש סיבות להעדיף אותו:</p>
    <ul>
      <li><strong>שינוי אחד משנה הכול</strong> — עדכון צבע בקובץ אחד מתעדכן בכל דפי האתר.</li>
      <li><strong>מהירות</strong> — הדפדפן שומר את הקובץ ב־cache, ולא מוריד אותו שוב בכל דף.</li>
      <li><strong>הפרדת אחריות</strong> — ה־HTML נשאר נקי ועוסק רק במבנה.</li>
    </ul>
    <p class="note-line">
      ה־<code>&lt;link&gt;</code> נכתב בתוך <code>&lt;head&gt;</code>, כדי שהעיצוב יהיה מוכן
      עוד לפני שהתוכן מצויר. אחרת הדף יהבהב לרגע במראה לא מעוצב.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה להימנע מ־inline</div>
  <div class="box-body">
    <p>
      <code>style="..."</code> נוח לניסוי מהיר, אבל בקוד אמיתי הוא בעייתי:
      הוא חל על אלמנט אחד בלבד, הוא מערבב עיצוב בתוך המבנה,
      וקשה מאוד לדרוס אותו אחר כך מקובץ CSS.
    </p>
    <p class="note-line">
      השתמשנו בו בכמה דוגמאות בפרקים הקודמים רק כדי להראות תוצאה מיידית
      לפני שלמדנו CSS. זה לא הנוהג המקובל.
    </p>
  </div>
</div>

## חיבור JavaScript

<div class="box theory">
  <div class="box-head"><span class="icon">⚙️</span>שתי דרכים</div>
  <div class="box-body">
    <ul>
      <li><strong>Internal</strong> — קוד ישירות בתוך <code>&lt;script&gt;</code>.</li>
      <li><strong>External</strong> — קובץ <code>.js</code> נפרד: <code>&lt;script src="app.js"&gt;&lt;/script&gt;</code>.</li>
    </ul>
    <p class="note-line">
      <code>&lt;script&gt;</code> הוא <strong>לא</strong> Void Element — תגית הסגירה חובה,
      גם כשמשתמשים ב־<code>src</code> ואין שום תוכן בפנים.
      <code>&lt;script src="app.js" /&gt;</code> לא יעבוד.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      והנה JavaScript אמיתי שרץ בתוך הדוגמה. לחצי על הכפתור:
    </p>
  </div>
</div>

```demo
<button id="btn">Click me</button>
<p id="out">Not clicked yet</p>
<script>
  document.getElementById('btn')
    .addEventListener('click', function () {
      document.getElementById('out')
        .textContent = 'Clicked!';
    });
</script>
```

<div class="keypoint">
זו השכבה השלישית בפעולה. ה־HTML יצר את הכפתור ואת הפסקה,
וה־JavaScript <strong>שינה את התוכן אחרי שהדף כבר נטען</strong> —
דבר ש־HTML לבדו לא יכול לעשות.
</div>

## איפה לשים את script

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה המיקום קריטי</div>
  <div class="box-body">
    <p>
      הדפדפן קורא את הקובץ <strong>מלמעלה למטה</strong>, כפי שראינו בפרק Overview.
      כששמים <code>&lt;script&gt;</code> ב־<code>&lt;head&gt;</code>, הוא רץ
      <strong>לפני</strong> שהאלמנטים של הדף קיימים בכלל.
    </p>
    <p>
      התוצאה: הקוד מחפש אלמנט, מקבל <code>null</code>, ונופל —
      בלי שום שגיאה נראית בדף עצמו.
    </p>
  </div>
</div>

```demo
<script>
  window.early = document.getElementById('box');
</script>
<div id="box">The element</div>
<script>
  document.getElementById('box').textContent =
    'Found from the head? ' + (window.early !== null);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      הסקריפט הראשון רץ לפני ה־<code>&lt;div&gt;</code> וקיבל <code>null</code>.
      השני רץ אחריו ומצא אותו בלי בעיה — ולכן הוא זה שהצליח לכתוב את התשובה.
    </p>
  </div>
</div>

### שלוש אפשרויות

| איפה | מה קורה |
| --- | --- |
| בסוף `<body>` | פשוט ובטוח. הקוד רץ כשכל הדף כבר קיים. |
| ב־`<head>` עם `defer` | נטען במקביל, רץ אחרי שה־HTML נקרא במלואו. |
| ב־`<head>` עם `async` | נטען במקביל, רץ ברגע שהוא מוכן — **הסדר לא מובטח**. |

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>מה לבחור</div>
  <div class="box-body">
    <ul>
      <li><strong><code>defer</code></strong> — ברירת המחדל הטובה לרוב המקרים. שומר על סדר הקבצים.</li>
      <li><strong><code>async</code></strong> — רק לסקריפטים עצמאיים לגמרי, למשל כלי אנליטיקה.</li>
      <li><strong>בסוף <code>&lt;body&gt;</code></strong> — עובד מצוין, וזה מה שהאתר הזה עושה.</li>
    </ul>
    <p class="note-line">
      שימי לב ש־<code>defer</code> ו־<code>async</code> עובדים <strong>רק עם <code>src</code></strong>.
      על סקריפט שכתוב בתוך הדף אין להם כל השפעה.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>onclick בתוך ה־HTML</div>
  <div class="box-body">
    <p>
      תיתקלי בקוד ישן שכותב <code>&lt;button onclick="doSomething()"&gt;</code>.
      זה עובד, אבל זו אותה בעיה כמו <code>style</code> inline:
      הלוגיקה מתערבבת במבנה.
    </p>
    <p>
      הדרך המקובלת היום היא <code>addEventListener</code> מתוך קובץ ה־JavaScript,
      כמו בדוגמה למעלה.
    </p>
  </div>
</div>

## דף שמחבר את שלוש השכבות

<div class="box">
  <div class="box-body">
    <p>וכך נראה קובץ HTML שלם עם כל החיבורים במקום הנכון:</p>
  </div>
</div>

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>האתר שלי</title>

    <link rel="stylesheet" href="css/styles.css">
    <script src="js/app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>האתר שלי</h1>
    </header>

    <main>
      <p>התוכן.</p>
    </main>
  </body>
</html>
```

<div class="box">
  <div class="box-body">
    <ul>
      <li>ה־<code>&lt;link&gt;</code> ב־<code>&lt;head&gt;</code> — העיצוב מוכן לפני הציור.</li>
      <li>ה־<code>&lt;script&gt;</code> עם <code>defer</code> — נטען במקביל, רץ אחרי שהדף נבנה.</li>
      <li>ה־<code>&lt;body&gt;</code> נשאר נקי: מבנה בלבד, בלי עיצוב ובלי לוגיקה.</li>
    </ul>
  </div>
</div>

<div class="box theory">
  <div class="box-head"><span class="icon">🗂️</span>מבנה התיקיות המקובל</div>
  <div class="box-body">
    <p>
      נהוג להפריד כל שכבה לתיקייה משלה. שימי לב שהנתיבים כאן הם
      <strong>יחסיים</strong>, בדיוק כפי שלמדנו בפרק File Paths:
    </p>
  </div>
</div>

```text
my-site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── images/
    └── logo.png
```

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה מונע חיבור</div>
  <div class="box-body">
    <ul>
      <li><strong>נתיב שגוי ב־<code>href</code> או ב־<code>src</code></strong> — הסיבה מספר אחת. נבדק ב־Console.</li>
      <li><strong><code>&lt;script&gt;</code> בלי תגית סגירה</strong> — הוא לא Void Element.</li>
      <li><strong>סקריפט ב־<code>&lt;head&gt;</code> בלי <code>defer</code></strong> — לא ימצא את אלמנטי הדף.</li>
      <li><strong>שכחת <code>rel="stylesheet"</code></strong> — הדפדפן לא ידע שזה קובץ עיצוב ויתעלם ממנו.</li>
      <li><strong>ערבוב <code>src</code> וקוד באותו <code>&lt;script&gt;</code></strong> — הקוד שבפנים יתעלם.</li>
      <li><strong>cache של הדפדפן</strong> — שינית CSS ולא רואה? רענון קשיח ב־<code>Cmd+Shift+R</code>.</li>
    </ul>
  </div>
</div>

## מכאן ממשיכים

<div class="box example">
  <div class="box-head"><span class="icon">🚀</span>סוף חלק ה־HTML</div>
  <div class="box-body">
    <p>
      זה הפרק האחרון ב־HTML. יש עכשיו את כל מה שצריך כדי לבנות את
      <strong>המבנה</strong> של דף אמיתי: מסמך תקין, טקסט, כותרות, רשימות,
      קישורים, תמונות, טבלאות, טפסים ומבנה סמנטי.
    </p>
    <p>
      השלב הבא הוא <strong>CSS</strong> — להפוך את השלד הזה למשהו שנעים להסתכל עליו.
      ואחריו <strong>JavaScript</strong>, שייתן לו התנהגות.
    </p>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>שלוש דרכים לחבר CSS: <strong>inline</strong>, <strong>internal</strong> ו־<strong>external</strong>.</li>
      <li><strong>External עדיף</strong>: קובץ אחד לכל האתר, נשמר ב־cache, ושומר על הפרדה.</li>
      <li><code>&lt;link rel="stylesheet"&gt;</code> נכתב בתוך <code>&lt;head&gt;</code>.</li>
      <li><strong><code>&lt;script&gt;</code> חייב תגית סגירה</strong> — גם עם <code>src</code>.</li>
      <li>סקריפט ב־<code>&lt;head&gt;</code> בלי <code>defer</code> <strong>רץ לפני שהדף קיים</strong>.</li>
      <li><strong><code>defer</code></strong> — רץ אחרי בניית הדף ושומר על הסדר. <strong><code>async</code></strong> — בלי הבטחת סדר.</li>
      <li>סוף <code>&lt;body&gt;</code> הוא מיקום פשוט ובטוח.</li>
      <li>מפרידים לתיקיות <code>css/</code> ו־<code>js/</code>, עם <strong>נתיבים יחסיים</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה היתרון המרכזי של קובץ CSS חיצוני על פני `<style>` בתוך הדף?
- הוא נטען מהר יותר תמיד
+ קובץ אחד משרת את כל דפי האתר, ונשמר ב-cache של הדפדפן
- הוא מאפשר כללים שאי אפשר לכתוב אחרת
- הוא היחיד שעובד בדפדפנים ישנים
= שינוי צבע בקובץ אחד מתעדכן בכל הדפים, וההפרדה בין מבנה לעיצוב נשמרת.

? כתבת `<script src="app.js" />` והקוד לא רץ. למה?
- חסר `type="text/javascript"`
+ כי `<script>` אינו Void Element — תגית הסגירה חובה גם עם `src`
- כי `src` חייב להיות נתיב מלא
- כי סקריפטים חייבים להיות ב-`<body>`
= הצורה הנכונה היא `<script src="app.js"></script>`, עם תגית סגירה.

? סקריפט ב-`<head>` מחפש אלמנט ומקבל `null`. מה הסיבה?
- שם ה-`id` שגוי
+ הסקריפט רץ לפני שהדפדפן יצר את אלמנטי הדף
- צריך להוסיף `async`
- אסור לגשת ל-DOM מתוך `<head>`
= הדפדפן קורא מלמעלה למטה. הפתרון: `defer`, או להעביר את הסקריפט לסוף `<body>`.

? מה ההבדל בין `defer` ל-`async`?
- `defer` נטען מהר יותר
+ `defer` שומר על סדר הקבצים ורץ אחרי בניית הדף, `async` רץ ברגע שהוא מוכן בלי הבטחת סדר
- `async` עובד רק עם קוד פנימי
- אין הבדל מעשי
= `defer` הוא ברירת המחדל הטובה לרוב המקרים. `async` מתאים לסקריפטים עצמאיים כמו אנליטיקה.

? למה עדיף להימנע מ-`style="..."` על האלמנט עצמו?
- כי הוא לא נתמך בכל הדפדפנים
+ כי הוא חל על אלמנט אחד בלבד, מערבב עיצוב בתוך המבנה, וקשה לדרוס אותו מקובץ CSS
- כי הוא איטי יותר
- כי הוא הוסר מהתקן
= אותו היגיון כמו `onclick` בתוך ה-HTML: הן העיצוב והן הלוגיקה שייכים לקבצים נפרדים.
```
