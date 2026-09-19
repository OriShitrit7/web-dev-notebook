# Document Structure

<p class="lead">
בפרקים הקודמים ראינו אלמנטים בודדים. עכשיו נראה את <strong>המעטפת</strong> שבתוכה הם חיים:
המבנה הקבוע שיש לכל קובץ HTML בעולם. ארבעה חלקים, תמיד באותו סדר —
<code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> ו־<code>&lt;body&gt;</code>.
</p>

## השלד המלא

<div class="box">
  <div class="box-body">
    <p>
      זה המבנה שממנו מתחיל כל דף. כדאי להכיר אותו בעל פה — הוא יחזור בכל קובץ שתכתבי:
    </p>
  </div>
</div>

```demo
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Visible content.</p>
  </body>
</html>
```

<div class="box theory">
  <div class="box-head"><span class="icon">🌳</span>איך זה נראה כעץ</div>
  <div class="box-body">
    <p>
      כל מסמך HTML הוא עץ עם שורש אחד. <code>&lt;html&gt;</code> הוא השורש,
      ומתחתיו בדיוק שני ילדים — <code>&lt;head&gt;</code> ו־<code>&lt;body&gt;</code>:
    </p>
  </div>
</div>

```text
html
├── head
│   ├── meta
│   └── title
└── body
    ├── h1
    └── p
```

<div class="keypoint">
<code>&lt;!DOCTYPE html&gt;</code> לא מופיע בעץ — הוא לא אלמנט אלא הצהרה שקודמת לעץ.
העץ עצמו מתחיל ב־<code>&lt;html&gt;</code>.
</div>

## DOCTYPE

<div class="box theory">
  <div class="box-head"><span class="icon">📜</span>מה זה DOCTYPE?</div>
  <div class="box-body">
    <p>
      <code>&lt;!DOCTYPE html&gt;</code> היא <strong>הצהרה</strong>, לא תגית.
      היא לא מגדירה שום אלמנט ולא מציגה שום דבר.
    </p>
    <p>
      התפקיד שלה אחד: לומר לדפדפן <strong>״קרא את הקובץ הזה לפי התקן המודרני״</strong>.
      היא חייבת להיות השורה הראשונה בקובץ, לפני כל דבר אחר.
    </p>
    <p class="note-line">
      אפשר לזהות שזו לא תגית רגילה לפי סימן הקריאה בהתחלה: <code>&lt;!</code> ולא <code>&lt;</code>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>מה קורה בלי DOCTYPE</div>
  <div class="box-body">
    <p>
      הדפדפן עובר למצב שנקרא <strong>Quirks Mode</strong> — מצב תאימות לאחור שמחקה התנהגות
      של דפדפנים מלפני עשרים שנה.
    </p>
    <p>
      הדף עדיין ייטען, אבל חישובי גדלים ומרווחים ב־CSS יתנהגו אחרת ממה שציפית,
      והבאג הזה מאוד קשה לאיתור כי שום דבר לא ״נשבר״ בגלוי.
    </p>
    <p class="note-line">
      פשוט תמיד לכתוב את השורה הזו. זה שורה אחת שמונעת שעות של תסכול.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🕰️</span>למה זה נראה כל כך מוזר?</div>
  <div class="box-body">
    <p>בגרסאות ישנות של HTML ההצהרה הייתה ארוכה ומפחידה, בערך כזו:</p>
    <p>
      <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</code>
    </p>
    <p>
      ב־HTML5 פישטו את זה ל־<code>&lt;!DOCTYPE html&gt;</code> ותו לא.
      אם תיתקלי בקוד ישן עם המפלצת הארוכה — זה מה שהיא.
    </p>
  </div>
</div>

## html — אלמנט השורש

<div class="box theory">
  <div class="box-head"><span class="icon">🌐</span>ה־Root Element</div>
  <div class="box-body">
    <p>
      <code>&lt;html&gt;</code> הוא האלמנט שעוטף את <strong>כל</strong> התוכן של המסמך.
      הוא נקרא <strong>root element</strong> — אלמנט השורש — כי הוא ה־Parent העליון בעץ.
    </p>
    <p>בתוכו נמצאים בדיוק שני אלמנטים, ותמיד בסדר הזה: <code>&lt;head&gt;</code> ואז <code>&lt;body&gt;</code>.</p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      על <code>&lt;html&gt;</code> נהוג להוסיף שני פרטי מידע שמתארים את שפת הדף.
      את התחביר הזה — מידע נוסף שנכתב בתוך תגית הפתיחה — נלמד לעומק בפרק
      <strong>Attributes</strong>, אבל כדאי להכיר אותם כבר עכשיו:
    </p>
  </div>
</div>

| מה כותבים | מה זה אומר | מתי |
| --- | --- | --- |
| `lang="en"` | שפת הדף היא אנגלית | דף באנגלית |
| `lang="he"` | שפת הדף היא עברית | דף בעברית |
| `dir="rtl"` | כיוון הכתיבה מימין לשמאל | דף בעברית או בערבית |

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>למה זה משנה בפועל</div>
  <div class="box-body">
    <p>הנה אותו תוכן בדיוק, פעם אחת בלי <code>dir</code> ופעם אחת איתו:</p>
  </div>
</div>

```demo
<!DOCTYPE html>
<html lang="he">
  <body>
    <h1>כותרת בעברית</h1>
    <p>הטקסט מיושר לשמאל.</p>
  </body>
</html>
```

```demo
<!DOCTYPE html>
<html lang="he" dir="rtl">
  <body>
    <h1>כותרת בעברית</h1>
    <p>הטקסט מיושר לימין.</p>
  </body>
</html>
```

<div class="keypoint">
בלי <code>dir="rtl"</code> טקסט בעברית עדיין ייקרא נכון (כי הדפדפן מזהה אותיות עבריות),
אבל <strong>היישור</strong> וסדר הפיסוק יהיו שגויים. זו הסיבה שהאתר הזה מתחיל ב־<code>&lt;html lang="he" dir="rtl"&gt;</code>.
</div>

## head — מה שלא רואים

<div class="box theory">
  <div class="box-head"><span class="icon">🧠</span>מידע על המסמך</div>
  <div class="box-body">
    <p>
      <code>&lt;head&gt;</code> מכיל <strong>מידע על המסמך</strong> — ולא תוכן שמוצג בדף.
      כל מה שנמצא בתוכו מיועד לדפדפן, למנועי חיפוש ולרשתות חברתיות.
    </p>
    <p>בין השאר נמצאים שם:</p>
    <ul>
      <li><code>&lt;title&gt;</code> — שם הדף, שמופיע בלשונית הדפדפן</li>
      <li><code>&lt;meta&gt;</code> — פרטי מידע שונים על המסמך</li>
      <li>קישור לקובץ ה־CSS של הדף</li>
      <li>קישור לאייקון של האתר (favicon)</li>
    </ul>
    <p>את כל אלה נפרק אחד־אחד בפרק הבא, <strong>Metadata</strong>.</p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      הדרך הכי ברורה להפנים ש־<code>&lt;head&gt;</code> לא מוצג היא לראות את זה.
      במסמך הבא יש כותרת ארוכה ב־<code>&lt;title&gt;</code> ופסקה קצרה ב־<code>&lt;body&gt;</code>:
    </p>
  </div>
</div>

```demo
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>This never appears</title>
  </head>
  <body>
    <p>Only this shows up.</p>
  </body>
</html>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      התצוגה מציגה רק את הפסקה. ה־<code>&lt;title&gt;</code> אמנם לא נעלם — הוא פשוט מופיע
      במקום אחר: בלשונית של הדפדפן, שלא נראית בתוך המסגרת הזו.
    </p>
  </div>
</div>

## body — מה שכן רואים

<div class="box theory">
  <div class="box-head"><span class="icon">👁️</span>התוכן הגלוי</div>
  <div class="box-body">
    <p>
      <code>&lt;body&gt;</code> מכיל את <strong>כל מה שהמשתמש רואה</strong>:
      כותרות, פסקאות, תמונות, קישורים, טבלאות, טפסים — הכול.
    </p>
    <p>
      מכאן והלאה, כל תגית שנלמד בפרקים הבאים נכתבת בתוך <code>&lt;body&gt;</code>,
      אלא אם נאמר במפורש אחרת.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>מה קורה אם כותבים טקסט בתוך head</div>
  <div class="box-body">
    <p>
      זוכרת מהפרק הקודם שהדפדפן ״מתקן״ HTML שבור לפי ניחוש? הנה עוד מקרה כזה.
    </p>
    <p>
      אם נכתוב טקסט גלוי בתוך <code>&lt;head&gt;</code>, הדפדפן מבין שזו טעות,
      <strong>סוגר את ה־head בעצמו</strong> ומעביר את הטקסט ל־<code>&lt;body&gt;</code>:
    </p>
  </div>
</div>

```demo
<!DOCTYPE html>
<html lang="en">
  <head>
    <p>I do not belong here.</p>
  </head>
  <body>
    <p>The real body.</p>
  </body>
</html>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שתי הפסקאות מופיעות בתצוגה, כאילו שתיהן היו ב־<code>&lt;body&gt;</code> מלכתחילה.
      זה עובד — אבל זו לא סיבה לכתוב ככה. העץ שנבנה אינו העץ שכתבת.
    </p>
  </div>
</div>

## הכללים של המבנה

| כלל | פירוט |
| --- | --- |
| `<!DOCTYPE html>` ראשון | לפני כל דבר אחר בקובץ |
| `<html>` עוטף הכול | כל שאר האלמנטים נמצאים בתוכו |
| `<head>` לפני `<body>` | תמיד בסדר הזה |
| אחד מכל אחד | בדיוק `<head>` אחד ו־`<body>` אחד למסמך |
| הכול מקונן נכון | חלים כאן אותם כללי Nesting מהפרק הקודם |

<div class="box example">
  <div class="box-head"><span class="icon">📄</span>שם הקובץ</div>
  <div class="box-body">
    <p>
      קובץ HTML נשמר עם הסיומת <code>.html</code>. הדף הראשי של אתר נקרא כמעט תמיד
      <code>index.html</code> — זה השם שהשרת מחפש כברירת מחדל כשנכנסים לכתובת בלי שם קובץ.
    </p>
    <p class="note-line">
      לכן כניסה ל־<code>example.com</code> מציגה בפועל את <code>example.com/index.html</code>.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטים לפספס</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת DOCTYPE</strong> — הדף נטען, אבל ה־CSS יתנהג מוזר בהמשך.</li>
      <li><strong>כתיבת תוכן גלוי ב־head</strong> — הדפדפן יעביר אותו ל־body, והעץ לא יהיה מה שכתבת.</li>
      <li><strong>שכחת <code>dir="rtl"</code> בדף עברי</strong> — הטקסט ייקרא, אבל היישור והפיסוק יישברו.</li>
      <li><strong>שכחת סגירה של <code>&lt;/html&gt;</code> או <code>&lt;/body&gt;</code></strong> — הדפדפן ישלים לבד, אבל זה קוד לא תקין.</li>
      <li><strong>שני <code>&lt;body&gt;</code></strong> — הדפדפן יתעלם מהשני וימזג את תוכנו לראשון.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;!DOCTYPE html&gt;</code></strong> — הצהרה, לא תגית. תמיד ראשונה, ומונעת Quirks Mode.</li>
      <li><strong><code>&lt;html&gt;</code></strong> — אלמנט השורש, עוטף את כל המסמך. נושא את <code>lang</code> ואת <code>dir</code>.</li>
      <li><strong><code>&lt;head&gt;</code></strong> — מידע על המסמך. לא מוצג בדף.</li>
      <li><strong><code>&lt;body&gt;</code></strong> — כל התוכן שהמשתמש רואה.</li>
      <li>הסדר קבוע: DOCTYPE, ואז html, ובתוכו head ואז body.</li>
      <li>המסמך כולו הוא <strong>עץ</strong> עם שורש אחד ושני ענפים ראשיים.</li>
      <li>הדף הראשי של אתר נקרא בדרך כלל <code>index.html</code>.</li>
    </ul>
  </div>
</div>
