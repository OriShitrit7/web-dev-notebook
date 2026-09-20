# Metadata

<p class="lead">
בפרק הקודם ראינו ש־<code>&lt;head&gt;</code> מכיל מידע על המסמך ולא תוכן גלוי.
בפרק הזה נראה <strong>מה בדיוק נכנס לשם</strong>: שם הדף, קידוד התווים, התנהגות במובייל,
תיאור למנועי חיפוש, אייקון, וקישורים לקבצים חיצוניים.
</p>

## מה זה Metadata?

<div class="box theory">
  <div class="box-head"><span class="icon">📘</span>מידע על מידע</div>
  <div class="box-body">
    <p>
      <strong>Metadata</strong> הוא מידע <em>על</em> המסמך, ולא המידע שבמסמך עצמו.
      הוא לא נועד לעיניים של המשתמש אלא ל<strong>תוכנות</strong> שקוראות את הדף.
    </p>
    <p>שלושה סוגי ״קוראים״ שמסתמכים עליו:</p>
    <ul>
      <li><strong>הדפדפן</strong> — כדי לדעת איך לפענח את הקובץ ואיך להציג אותו במסך קטן.</li>
      <li><strong>מנועי חיפוש</strong> — כדי להבין על מה הדף ומה להציג בתוצאות.</li>
      <li><strong>רשתות חברתיות</strong> — כדי לבנות תצוגה מקדימה כששולחים את הקישור.</li>
    </ul>
    <p class="note-line">
      הסיבה שזה מרגיש ״בלתי נראה״ היא בדיוק העניין: metadata עובד מאחורי הקלעים.
    </p>
  </div>
</div>

## title

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>שם הדף</div>
  <div class="box-body">
    <p>
      <code>&lt;title&gt;</code> הוא האלמנט <strong>היחיד שחובה</strong> להכניס ל־<code>&lt;head&gt;</code>.
      הוא מגדיר את שם הדף, ומופיע בשלושה מקומות:
    </p>
    <ul>
      <li>בלשונית של הדפדפן</li>
      <li>בשם שנשמר כשמוסיפים את הדף למועדפים</li>
      <li>ככותרת הכחולה בתוצאות החיפוש של גוגל</li>
    </ul>
    <p>הצורה: <code>&lt;title&gt;My Page&lt;/title&gt;</code></p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>title הוא לא h1</div>
  <div class="box-body">
    <p>שני אלה מבלבלים בהתחלה, וההבדל ביניהם מהותי:</p>
  </div>
</div>

| | `<title>` | `<h1>` |
| --- | --- | --- |
| **איפה נכתב** | בתוך `<head>` | בתוך `<body>` |
| **איפה מופיע** | בלשונית הדפדפן | בתוך הדף עצמו |
| **כמה בדף** | בדיוק אחד | בדרך כלל אחד |
| **תפקיד** | מזהה את הדף כלפי חוץ | כותרת ראשית של התוכן |

<div class="box">
  <div class="box-body">
    <p>
      בדוגמה הבאה שניהם קיימים, אבל בתצוגה רואים רק את ה־<code>&lt;h1&gt;</code> —
      ה־<code>&lt;title&gt;</code> חי בלשונית שלא נראית כאן:
    </p>
  </div>
</div>

```demo
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tab text</title>
  </head>
  <body>
    <h1>Page text</h1>
  </body>
</html>
```

<div class="keypoint">
כותרת טובה היא ספציפית לדף: <code>&lt;title&gt;Contact Us — Acme&lt;/title&gt;</code>
עדיף בהרבה על <code>&lt;title&gt;Home&lt;/title&gt;</code> בכל עמוד באתר.
</div>

## meta — התגית הרב־שימושית

<div class="box theory">
  <div class="box-head"><span class="icon">🧩</span>איך meta בנויה</div>
  <div class="box-body">
    <p>
      <code>&lt;meta&gt;</code> הוא <strong>Void Element</strong> — אין לו תוכן ואין לו תגית סגירה.
      כל המידע שלו נמצא בתוך תגית הפתיחה.
    </p>
    <p>רוב תגיות ה־meta בנויות מזוג: <strong>מה אנחנו מגדירים</strong> ו<strong>מה הערך</strong>.</p>
    <p>הצורה הנפוצה: <code>&lt;meta name="..." content="..."&gt;</code></p>
    <p class="note-line">
      אפשר לשים בראש <code>&lt;head&gt;</code> כמה תגיות <code>&lt;meta&gt;</code> שרוצים —
      כל אחת מגדירה דבר אחר.
    </p>
  </div>
</div>

## charset — קידוד התווים

<div class="box theory">
  <div class="box-head"><span class="icon">🔤</span>איך הדפדפן יודע לקרוא עברית</div>
  <div class="box-body">
    <p>
      מחשב שומר טקסט כמספרים. <strong>קידוד</strong> (encoding) הוא הטבלה שמתרגמת
      בין המספרים לאותיות.
    </p>
    <p>
      <code>&lt;meta charset="UTF-8"&gt;</code> אומר לדפדפן להשתמש ב־<strong>UTF-8</strong>,
      הקידוד שכולל כמעט כל תו בעולם — עברית, ערבית, סינית, אמוג׳י.
    </p>
    <p>בלי זה, טקסט בעברית עלול להופיע כג׳יבריש של סימנים מוזרים.</p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>צריך להיות בהתחלה</div>
  <div class="box-body">
    <p>
      <code>&lt;meta charset&gt;</code> חייב להופיע <strong>בתוך 1024 הבתים הראשונים</strong> של הקובץ,
      ולכן נהוג לשים אותו כשורה הראשונה בתוך <code>&lt;head&gt;</code>.
    </p>
    <p>
      הסיבה הגיונית: הדפדפן צריך לדעת איך לפענח את הקובץ <em>לפני</em> שהוא מתחיל לקרוא אותו.
      אם ההצהרה מגיעה מאוחר מדי, הוא כבר ניחש קידוד בעצמו.
    </p>
  </div>
</div>

## viewport — התאמה למסכים קטנים

<div class="box theory">
  <div class="box-head"><span class="icon">📱</span>למה צריך את זה בכלל</div>
  <div class="box-body">
    <p>
      כשטלפונים חכמים הגיעו, רוב האתרים בעולם היו בנויים למסך מחשב.
      כדי לא לשבור אותם, דפדפני מובייל התחילו <strong>להעמיד פנים</strong> שהמסך רחב
      (בערך 980 פיקסלים) ואז להקטין את כל הדף כדי שייכנס.
    </p>
    <p>
      התוצאה: אתר שנראה כמו גרסה מוקטנת של דף מחשב, עם טקסט זעיר שצריך להגדיל באצבעות.
    </p>
    <p>שורת ה־viewport מבטלת את ההתנהגות הזו:</p>
    <p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
  </div>
</div>

| החלק | מה הוא אומר |
| --- | --- |
| `width=device-width` | רוחב הדף שווה לרוחב המסך האמיתי של המכשיר |
| `initial-scale=1.0` | לפתוח את הדף בלי זום, ביחס 1:1 |

<div class="keypoint">
בלי השורה הזו, האתר <strong>ייראה רע בטלפון</strong> גם אם כתבת CSS מושלם למובייל.
היא שורה אחת, והיא נמצאת כיום כמעט בכל דף באינטרנט.
</div>

## description — התיאור בגוגל

<div class="box theory">
  <div class="box-head"><span class="icon">🔍</span>הטקסט האפור בתוצאות החיפוש</div>
  <div class="box-body">
    <p>
      <code>&lt;meta name="description" content="..."&gt;</code> מגדיר תיאור קצר של הדף.
      מנועי חיפוש משתמשים בו כטקסט שמוצג מתחת לכותרת בתוצאות.
    </p>
    <p>
      אורך מומלץ: בערך 150 תווים. ארוך מדי — והתיאור ייחתך באמצע.
    </p>
    <p class="note-line">
      התיאור לא משפיע ישירות על הדירוג בגוגל, אבל הוא כן משפיע על כמה אנשים יבחרו ללחוץ.
    </p>
  </div>
</div>

## עוד תגיות meta

| תגית | למה היא משמשת | עדיין רלוונטי? |
| --- | --- | --- |
| `<meta name="author" content="...">` | שם כותב הדף | כן, אך לא חובה |
| `<meta name="keywords" content="...">` | רשימת מילות מפתח | **לא** — גוגל מתעלמת ממנה מאז 2009 |
| `<meta name="robots" content="noindex">` | מבקש ממנועי חיפוש לא לאנדקס את הדף | כן |

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>keywords זה שריד</div>
  <div class="box-body">
    <p>
      תיתקלי בה בהרבה מדריכים ישנים ובהרבה אתרים. פעם היא באמת השפיעה על הדירוג,
      ובדיוק בגלל זה אנשים מילאו אותה במילים לא רלוונטיות עד שהיא איבדה כל ערך.
    </p>
    <p>אין נזק בלכתוב אותה — פשוט אין גם תועלת.</p>
  </div>
</div>

## link — קישור לקבצים חיצוניים

<div class="box theory">
  <div class="box-head"><span class="icon">🔗</span>לא קישור שלוחצים עליו</div>
  <div class="box-body">
    <p>
      <code>&lt;link&gt;</code> הוא Void Element שמחבר את המסמך לקובץ חיצוני.
      חשוב לא להתבלבל: זה <strong>לא</strong> הקישור שהמשתמש לוחץ עליו — זה
      <code>&lt;a&gt;</code>, שנלמד בפרק Links.
    </p>
    <p>שני השימושים הנפוצים ביותר:</p>
    <ul>
      <li><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> — מחבר את קובץ ה־CSS לדף.</li>
      <li><code>&lt;link rel="icon" href="favicon.ico"&gt;</code> — מגדיר את האייקון הקטן שמופיע בלשונית.</li>
    </ul>
    <p class="note-line">
      <code>rel</code> הוא קיצור של <em>relationship</em> — מה היחס בין המסמך לקובץ שמקושר אליו.
      את חיבור ה־CSS לעומק נלמד בפרק <strong>Connecting CSS &amp; JavaScript</strong>.
    </p>
  </div>
</div>

## תצוגה מקדימה ברשתות חברתיות

<div class="box example">
  <div class="box-head"><span class="icon">💬</span>Open Graph</div>
  <div class="box-body">
    <p>
      כששולחים קישור בווטסאפ או בפייסבוק ומופיע כרטיס עם תמונה וכותרת — זה מגיע
      מתגיות meta מיוחדות בשם <strong>Open Graph</strong>:
    </p>
    <ul>
      <li><code>&lt;meta property="og:title" content="..."&gt;</code></li>
      <li><code>&lt;meta property="og:description" content="..."&gt;</code></li>
      <li><code>&lt;meta property="og:image" content="..."&gt;</code></li>
    </ul>
    <p class="note-line">
      שימי לב שכאן כותבים <code>property</code> ולא <code>name</code> — זו טעות נפוצה
      שגורמת לתגיות פשוט לא לעבוד. Open Graph הוא תקן חיצוני, לא חלק מ־HTML עצמו.
    </p>
  </div>
</div>

## head טיפוסי ומלא

<div class="box">
  <div class="box-body">
    <p>
      כך נראה <code>&lt;head&gt;</code> של דף אמיתי, עם כל מה שלמדנו בפרק.
      שימי לב לסדר: קודם הקידוד, אחר כך ה־viewport, ואז כל השאר.
    </p>
  </div>
</div>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Acme — Contact</title>
    <meta name="description" content="Get in touch.">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Contact</h1>
  </body>
</html>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שבע שורות בתוך <code>&lt;head&gt;</code>, ואפס פיקסלים גלויים בדף —
      כל מה שהמשתמש יראה הוא המילה <code>Contact</code> מתוך ה־<code>&lt;body&gt;</code>.
      זה בדיוק התפקיד שלהן.
    </p>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>Metadata</strong> — מידע על המסמך, שנועד לתוכנות ולא למשתמש.</li>
      <li><strong><code>&lt;title&gt;</code></strong> — האלמנט היחיד שחובה ב־head. מופיע בלשונית ובתוצאות חיפוש. שונה מ־<code>&lt;h1&gt;</code>.</li>
      <li><strong><code>&lt;meta charset="UTF-8"&gt;</code></strong> — קידוד התווים. ראשון ב־head, אחרת עברית עלולה להישבר.</li>
      <li><strong><code>&lt;meta name="viewport"&gt;</code></strong> — בלעדיו האתר ייראה רע בטלפון.</li>
      <li><strong><code>&lt;meta name="description"&gt;</code></strong> — התיאור שמופיע בתוצאות החיפוש, כ־150 תווים.</li>
      <li><strong><code>&lt;meta name="keywords"&gt;</code></strong> — מיושן, גוגל מתעלמת ממנו.</li>
      <li><strong><code>&lt;link&gt;</code></strong> — מחבר קבצים חיצוניים (CSS, favicon). לא קשור ל־<code>&lt;a&gt;</code>.</li>
      <li><strong>Open Graph</strong> — תגיות עם <code>property</code> שבונות את התצוגה המקדימה ברשתות חברתיות.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל בין `<title>` ל-`<h1>`?
- אין הבדל — שניהם כותרת הדף
+ `<title>` יושב ב-head ומופיע בלשונית, `<h1>` יושב ב-body ומופיע בדף
- `<title>` מוצג בראש הדף ו-`<h1>` מתחתיו
- `<h1>` מיועד לדפדפן ו-`<title>` למשתמש
= `<title>` מזהה את הדף כלפי חוץ — בלשונית, במועדפים ובתוצאות חיפוש. `<h1>` הוא כותרת התוכן.

? למה `<meta charset="UTF-8">` נכתב כשורה הראשונה בתוך `<head>`?
- כי אחרת הוא לא ייחשב תקני
+ כי הדפדפן צריך לדעת איך לפענח את הקובץ לפני שהוא מתחיל לקרוא אותו
- כי זה הסדר האלפביתי של תגיות meta
- כי תגיות meta חייבות להופיע לפני `<title>`
= ההצהרה חייבת להופיע בתוך 1024 הבתים הראשונים. אם היא מאחרת, הדפדפן כבר ניחש קידוד בעצמו.

? אתר נראה מצוין במחשב, אבל בטלפון הוא מוצג מוקטן עם טקסט זעיר. מה כנראה חסר?
- `<meta charset="UTF-8">`
+ `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<meta name="description">`
- `<link rel="icon">`
= בלי שורת ה-viewport דפדפני מובייל מעמידים פנים שהמסך רחב ואז מקטינים את כל הדף.

? מה המצב של `<meta name="keywords">` היום?
- חובה בכל דף לצורכי SEO
- משפיע מאוד על הדירוג בגוגל
+ גוגל מתעלמת ממנו — אין נזק בכתיבתו, אבל גם אין תועלת
- הוסר מהתקן ואינו תקין
= פעם הוא השפיע, ובדיוק לכן מילאו אותו במילים לא רלוונטיות עד שאיבד ערך.

? מה ההבדל בין `<link>` ל-`<a>`?
- `<link>` לקישורים פנימיים ו-`<a>` לחיצוניים
+ `<link>` מחבר את המסמך לקובץ חיצוני, `<a>` יוצר קישור שהמשתמש לוחץ עליו
- הם זהים, `<link>` הוא פשוט הגרסה החדשה
- `<link>` נכתב ב-body ו-`<a>` ב-head
= `<link>` יושב ב-head ומחבר CSS או favicon. הוא לעולם לא מוצג למשתמש.
```
