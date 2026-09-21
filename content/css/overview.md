# CSS — Overview

<p class="lead">
סיימנו את HTML, ויש לנו דף עם מבנה נכון — אבל הוא נראה כמו מסמך משנות התשעים.
<strong>CSS</strong> היא השכבה שהופכת את השלד הזה למשהו שנעים להסתכל עליו.
בפרק הזה נבין מה CSS עושה, איך מחברים אותה לדף, ומאיפה הגיע העיצוב שכבר היה שם.
</p>

## מה זה CSS?

<div class="box theory">
  <div class="box-head"><span class="icon">📘</span>שלוש המילים שמאחורי השם</div>
  <div class="box-body">
    <p><strong>CSS</strong> הוא ראשי תיבות של <strong>Cascading Style Sheets</strong>:</p>
    <ul>
      <li><strong>Style</strong> — עיצוב: צבע, גודל, מרווח, גופן, מיקום.</li>
      <li><strong>Sheets</strong> — גיליונות. אוסף כללים שנשמר בנפרד מה־HTML.</li>
      <li>
        <strong>Cascading</strong> — מפל. כשכמה כללים מתנגשים על אותו אלמנט,
        יש סדר קבוע שקובע מי מנצח.
      </li>
    </ul>
    <p class="note-line">
      המילה הראשונה היא דווקא הפחות מובנת מאליה, ולכן היא מקבלת פרק שלם —
      <strong>Cascade, Specificity &amp; Inheritance</strong>.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      בפרק Overview של HTML אמרנו ש־HTML מגדיר <em>מה קיים בדף</em>.
      CSS עונה על השאלה השנייה: <strong>איך זה נראה</strong>.
    </p>
    <p>
      היא לא מוסיפה תוכן ולא משנה מבנה — היא רק מתארת איך להציג
      את מה שכבר קיים ב־HTML.
    </p>
  </div>
</div>

## אותו HTML, עם ובלי CSS

<div class="box">
  <div class="box-body">
    <p>הדרך המהירה להבין את ההבדל היא לראות את אותו קוד בדיוק פעמיים. קודם בלי עיצוב:</p>
  </div>
</div>

```demo
<h2>Product card</h2>
<p>A short description.</p>
<button>Buy now</button>
```

<div class="box">
  <div class="box-body">
    <p>
      ועכשיו אותו HTML במדויק — לא נוספה מילה ולא תגית — עם כמה כללי CSS:
    </p>
  </div>
</div>

```demo
<style>
  h2 { color: #312e81; margin-bottom: 4px; }
  p { color: #6b6b70; margin-top: 0; }
  button {
    background: #4f46e5;
    color: white;
    border: 0;
    border-radius: 8px;
    padding: 10px 18px;
    cursor: pointer;
  }
</style>
<h2>Product card</h2>
<p>A short description.</p>
<button>Buy now</button>
```

<div class="keypoint">
שני ה־<code>&lt;body&gt;</code> זהים לחלוטין. כל ההבדל נמצא בבלוק ה־<code>&lt;style&gt;</code> —
וזו בדיוק <strong>הפרדת האחריות</strong> שדיברנו עליה בפרק Overview של HTML.
</div>

## מאיפה הגיע העיצוב שכבר היה?

<div class="box theory">
  <div class="box-head"><span class="icon">🎨</span>User Agent Stylesheet</div>
  <div class="box-body">
    <p>
      בדוגמה הראשונה לא כתבנו שורת CSS אחת, ובכל זאת הכותרת הייתה גדולה ומודגשת
      והכפתור היה אפור ומעוגל. זוכרת למה? דיברנו על זה בפרק Overview של HTML.
    </p>
    <p>
      לכל דפדפן יש <strong>גיליון סגנונות משלו</strong> (user agent stylesheet)
      שחל על כל דף לפני שהגענו אליו.
    </p>
    <p>
      כלומר CSS שאנחנו כותבות לא מתחילה מדף ריק — היא
      <strong>דורסת</strong> עיצוב שכבר קיים.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>למה זה מסביר תופעות מוזרות</div>
  <div class="box-body">
    <p>
      זו הסיבה שלפעמים יש רווח מסתורי סביב הדף, או שכותרת מקבלת מרווח עליון שלא ביקשנו.
      זה לא באג — אלה ברירות המחדל של הדפדפן.
    </p>
    <p class="note-line">
      בדיוק בגלל זה הרבה פרויקטים מתחילים ב־<em>CSS reset</em> —
      אוסף כללים שמאפס את ברירות המחדל לפני שמתחילים לעצב.
    </p>
  </div>
</div>

## שלוש דרכים לחבר CSS

<div class="box">
  <div class="box-body">
    <p>
      פגשנו אותן בקצרה בפרק האחרון של HTML,
      <strong>Connecting CSS &amp; JavaScript</strong>. כאן נסתכל עליהן מקרוב:
    </p>
  </div>
</div>

| דרך | איך כותבים | משפיע על |
| --- | --- | --- |
| **Inline** | `style="color: red"` על האלמנט | אלמנט אחד בלבד |
| **Internal** | בלוק `<style>` בתוך `<head>` | הדף הנוכחי |
| **External** | קובץ `.css` נפרד + `<link>` | **כל האתר** |

```demo
<style>
  .internal { color: #047857; }
</style>
<p style="color: #be123c">Inline — על האלמנט עצמו</p>
<p class="internal">Internal — מבלוק style</p>
<p>בלי שום כלל — ברירת המחדל</p>
```

<div class="box theory">
  <div class="box-head"><span class="icon">📄</span>למה External היא הדרך הנכונה</div>
  <div class="box-body">
    <p>הצורה שבה עובדים בפועל היא קובץ חיצוני:</p>
    <p><code>&lt;link rel="stylesheet" href="css/styles.css"&gt;</code></p>
    <ul>
      <li><strong>שינוי אחד משנה הכול</strong> — עדכון צבע בקובץ אחד מתעדכן בכל דפי האתר.</li>
      <li><strong>מהירות</strong> — הדפדפן שומר את הקובץ ב־cache ולא מוריד אותו שוב בכל דף.</li>
      <li><strong>סדר</strong> — ה־HTML נשאר מבנה נקי, וה־CSS נשמר במקום אחד.</li>
    </ul>
    <p class="note-line">
      באתר הזה עצמו כל העיצוב יושב בקובץ אחד, <code>styles.css</code>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>על inline בדוגמאות</div>
  <div class="box-body">
    <p>
      בכמה דוגמאות באתר הזה תראי <code>style="..."</code> ישירות על אלמנט.
      זה נעשה רק כדי להראות תוצאה מיידית בלי להסיח את תשומת הלב.
    </p>
    <p>
      בקוד אמיתי <strong>נמנעים מזה</strong>: הוא חל על אלמנט אחד, מערבב עיצוב במבנה,
      וקשה מאוד לדרוס אותו אחר כך. נראה בדיוק למה בפרק
      <strong>Cascade, Specificity &amp; Inheritance</strong>.
    </p>
  </div>
</div>

## איך נראה כלל CSS

<div class="box">
  <div class="box-body">
    <p>הצורה הבסיסית של כלל היא בורר, ואחריו זוגות של מאפיין וערך בתוך סוגריים מסולסלים:</p>
  </div>
</div>

```css
p {
  color: blue;
  font-size: 18px;
}
```

<div class="box">
  <div class="box-body">
    <p>
      במילים: ״לכל <code>&lt;p&gt;</code> בדף — צבע כחול וגודל גופן 18 פיקסלים״.
    </p>
    <p>
      את כל החלקים של הכלל, ואת הדרכים השונות לבחור אלמנטים, נפרק בפרק הבא —
      <strong>Syntax &amp; Selectors</strong>.
    </p>
  </div>
</div>

## איך הדפדפן משלב הכול

<div class="box theory">
  <div class="box-head"><span class="icon">🌳</span>שני עצים שנפגשים</div>
  <div class="box-body">
    <p>
      בפרק Overview של HTML ראינו שהדפדפן בונה מה־HTML עץ בשם <strong>DOM</strong>.
      מה־CSS הוא בונה מבנה מקביל — <strong>CSSOM</strong>.
    </p>
    <p>אחר כך הוא משלב ביניהם:</p>
    <ol>
      <li>קורא את ה־HTML ובונה את ה־<strong>DOM</strong>.</li>
      <li>קורא את ה־CSS ובונה את ה־<strong>CSSOM</strong>.</li>
      <li>משלב את שניהם לעץ רינדור — איזה אלמנט מוצג ואיך.</li>
      <li>מחשב מיקומים וגדלים, ומצייר על המסך.</li>
    </ol>
    <p class="note-line">
      זו הסיבה ש־<code>&lt;link&gt;</code> נכתב ב־<code>&lt;head&gt;</code>:
      כדי שהעיצוב יהיה מוכן לפני הציור, ולא יהבהב רגע במראה לא מעוצב.
    </p>
  </div>
</div>

## מה CSS לא עושה

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>גם היא לא שפת תכנות</div>
  <div class="box-body">
    <p>
      כמו HTML, גם CSS אינה שפת תכנות. אין בה לולאות, אין תנאים במובן הרגיל,
      והיא לא יכולה להגיב ללחיצה ולשמור מידע.
    </p>
    <p>
      היא <strong>שפת תיאור</strong>: מתארת איך דברים נראים, לא מה הם עושים.
      ההתנהגות תגיע בסוף, מ־JavaScript.
    </p>
    <p class="note-line">
      יש חריגים שמטשטשים את הגבול — <code>:hover</code> מגיב לעכבר,
      ואנימציות זזות בלי שורת קוד אחת. נגיע לשניהם בהמשך.
    </p>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>CSS</strong> — Cascading Style Sheets. מתארת <strong>איך התוכן נראה</strong>.</li>
      <li>היא לא משנה מבנה ולא מוסיפה תוכן — רק עיצוב.</li>
      <li>לכל דפדפן יש <strong>user agent stylesheet</strong>, ולכן אנחנו תמיד דורסות עיצוב קיים.</li>
      <li>שלוש דרכי חיבור: <strong>inline</strong>, <strong>internal</strong> ו־<strong>external</strong>.</li>
      <li><strong>External</strong> היא הדרך הנכונה: קובץ אחד לכל האתר, נשמר ב־cache.</li>
      <li>כלל בנוי מ<strong>בורר</strong> ומזוגות של <strong>מאפיין וערך</strong>.</li>
      <li>הדפדפן בונה <strong>DOM</strong> מה־HTML ו־<strong>CSSOM</strong> מה־CSS, ומשלב אותם.</li>
      <li>גם CSS אינה שפת תכנות — היא שפת תיאור.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה המשמעות של המילה Cascading בשם CSS?
- שהעיצוב יורד מלמעלה למטה בדף
+ שיש סדר קבוע שמכריע כשכמה כללים מתנגשים על אותו אלמנט
- שאפשר לקנן כללים זה בתוך זה
- שהקובץ נטען בשלבים
= זה הנושא של פרק Cascade, Specificity & Inheritance — המנגנון שקובע מי מנצח.

? כתבת דף בלי שורת CSS אחת, ובכל זאת הכותרת גדולה ומודגשת. למה?
- כי `<h2>` הוא תמיד גדול, זו המשמעות שלו
+ כי לדפדפן יש גיליון סגנונות משלו שחל לפני שהגענו
- כי הדפדפן יצר קובץ CSS אוטומטי
- כי HTML אחראי גם על עיצוב בסיסי
= זה נקרא user agent stylesheet. לכן ה-CSS שלנו תמיד דורסת עיצוב קיים ולא מתחילה מאפס.

? למה קובץ CSS חיצוני עדיף על בלוק `<style>` בתוך הדף?
- כי הוא נטען מהר יותר תמיד
+ כי קובץ אחד משרת את כל דפי האתר ונשמר ב-cache של הדפדפן
- כי `<style>` אינו תקני
- כי רק כך אפשר להשתמש בבוררים מתקדמים
= שינוי צבע בקובץ אחד מתעדכן בכל הדפים, וה-HTML נשאר מבנה נקי.

? מאילו חלקים בנוי כלל CSS?
- מתגית פתיחה, תוכן ותגית סגירה
+ מבורר, ובתוך סוגריים מסולסלים זוגות של מאפיין וערך
- מ-attribute ומערך שלו
- משם משתנה ומערך
= למשל `p { color: blue; }` — הבורר הוא `p`, המאפיין `color` והערך `blue`.

? למה `<link>` לקובץ CSS נכתב בתוך `<head>` ולא בסוף `<body>`?
- כי זה הכלל היחיד שמותר ב-head
- כי אחרת הקובץ לא ייטען כלל
+ כדי שהעיצוב יהיה מוכן לפני שהדפדפן מצייר, ולא יהבהב רגע במראה לא מעוצב
- כי CSS חייב להיטען לפני ה-HTML
= הדפדפן בונה DOM מה-HTML ו-CSSOM מה-CSS, ומשלב אותם לפני הציור.
```
