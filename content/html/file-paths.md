# File Paths

<p class="lead">
כל פעם שכתבנו <code>src</code> או <code>href</code>, למעשה כתבנו <strong>נתיב</strong> —
הוראה לדפדפן איפה למצוא קובץ. נתיב שגוי הוא הסיבה מספר אחת לתמונה שבורה ולקישור מת,
והוא כמעט תמיד נכשל <strong>בשקט</strong>. בפרק הזה נבין איך נתיבים עובדים.
</p>

## מבנה תיקיות לדוגמה

<div class="box">
  <div class="box-body">
    <p>
      כדי לדבר על נתיבים צריך מבנה קבצים להתייחס אליו. נניח שזה האתר שלנו:
    </p>
  </div>
</div>

```text
my-site/
├── index.html
├── about.html
├── css/
│   └── styles.css
├── images/
│   ├── logo.png
│   └── photos/
│       └── beach.jpg
└── pages/
    └── contact.html
```

<div class="keypoint">
נתיב יחסי נקרא <strong>ביחס לקובץ שבו הוא נכתב</strong> — ולא ביחס לשורש האתר.
אותו נתיב בדיוק יכול לעבוד בקובץ אחד ולהישבר בקובץ אחר. זו כל הבעיה בקליפת אגוז.
</div>

## נתיב יחסי

<div class="box theory">
  <div class="box-head"><span class="icon">🧭</span>שלוש התנועות</div>
  <div class="box-body">
    <p>נתיב יחסי בנוי משלוש תנועות אפשריות:</p>
    <ul>
      <li><strong>אותה תיקייה</strong> — פשוט שם הקובץ: <code>about.html</code></li>
      <li><strong>תיקייה פנימה</strong> — שם התיקייה ואז הקובץ: <code>images/logo.png</code></li>
      <li><strong>תיקייה החוצה</strong> — שתי נקודות ולוכסן: <code>../index.html</code></li>
    </ul>
    <p class="note-line">
      אפשר לשרשר: <code>../../file.html</code> עולה שתי רמות,
      ו־<code>../images/logo.png</code> עולה רמה אחת ואז נכנס ל־images.
    </p>
  </div>
</div>

### מתוך index.html שבשורש

| כדי להגיע ל | כותבים |
| --- | --- |
| `about.html` | `about.html` |
| `css/styles.css` | `css/styles.css` |
| `images/logo.png` | `images/logo.png` |
| `images/photos/beach.jpg` | `images/photos/beach.jpg` |
| `pages/contact.html` | `pages/contact.html` |

### מתוך pages/contact.html

<div class="box">
  <div class="box-body">
    <p>
      כאן נמצא ההבדל. הקובץ יושב <strong>בתוך תיקייה</strong>, ולכן כדי להגיע לכל דבר
      שבשורש צריך קודם <strong>לצאת החוצה</strong> עם <code>../</code>:
    </p>
  </div>
</div>

| כדי להגיע ל | כותבים |
| --- | --- |
| `index.html` | `../index.html` |
| `css/styles.css` | `../css/styles.css` |
| `images/logo.png` | `../images/logo.png` |
| `images/photos/beach.jpg` | `../images/photos/beach.jpg` |

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>הטריק לחישוב</div>
  <div class="box-body">
    <p>
      שאלי את עצמך: <strong>״באיזו תיקייה יושב הקובץ שאני כותבת בו עכשיו?״</strong>
      ומשם תתקדמי צעד־צעד אל היעד.
    </p>
    <p>
      כל <code>../</code> הוא צעד אחד כלפי חוץ, וכל <code>שם/</code> הוא צעד אחד פנימה.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      התמונה הבאה נטענת בנתיב יחסי אמיתי מתוך האתר הזה —
      <code>assets/images/sample.svg</code>:
    </p>
  </div>
</div>

```demo
<img src="assets/images/sample.svg"
     alt="Loaded with a relative path"
     width="180">
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אם הנתיב היה שגוי, לא הייתה מופיעה שום הודעת שגיאה בדף — רק טקסט ה־<code>alt</code>
      במקום התמונה, כפי שראינו בפרק <strong>Attributes</strong>. זו בדיוק הסיבה
      שנתיבים שבורים שורדים כל כך הרבה זמן בלי שמישהו שם לב.
    </p>
  </div>
</div>

## ./ — אותה תיקייה, במפורש

<div class="box">
  <div class="box-body">
    <p>
      נקודה אחת ולוכסן פירושה ״התיקייה הנוכחית״. <code>./about.html</code>
      זהה לחלוטין ל־<code>about.html</code>.
    </p>
    <p class="note-line">
      ב־HTML היא בדרך כלל מיותרת. תפגשי אותה בעיקר בהקשרים אחרים,
      למשל בייבוא קבצים ב־JavaScript, שם היא כן נדרשת.
    </p>
  </div>
</div>

## נתיב מהשורש

<div class="box theory">
  <div class="box-head"><span class="icon">🌳</span>לוכסן בהתחלה</div>
  <div class="box-body">
    <p>
      נתיב שמתחיל ב־<code>/</code> נקרא <strong>root-relative</strong> —
      הוא נמדד <strong>משורש האתר</strong>, ולא מהקובץ הנוכחי.
    </p>
    <p>
      <code>/images/logo.png</code> יעבוד אותו דבר מכל קובץ באתר, בכל עומק תיקיות.
      זה היתרון שלו.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>שימי לב: זה עלול להישבר ב־GitHub Pages</div>
  <div class="box-body">
    <p>
      ״שורש האתר״ הוא <strong>שורש הדומיין</strong>, ולא תיקיית הפרויקט.
      וזו בדיוק הנקודה שמפילה פרויקטים ב־GitHub Pages.
    </p>
    <p>
      האתר הזה יושב בכתובת שמכילה את שם ה־repository:
    </p>
    <pre><code class="language-text">https://USER.github.io/web-dev-notebook/</code></pre>
    <p>ולכן:</p>
    <ul>
      <li><code>/images/logo.png</code> ייפתר ל־<code>USER.github.io/images/logo.png</code> — <strong>ויקבל 404</strong>.</li>
      <li><code>images/logo.png</code> (יחסי) ייפתר נכון, בתוך תיקיית הפרויקט.</li>
    </ul>
    <p class="note-line">
      התקלה המתסכלת במיוחד: הכול עובד מצוין בשרת המקומי (שם השורש באמת הוא הפרויקט),
      ונשבר רק אחרי ההעלאה. <strong>לכן באתר הזה כל הנתיבים יחסיים.</strong>
    </p>
  </div>
</div>

## כתובת מלאה

<div class="box">
  <div class="box-body">
    <p>
      כתובת מלאה (<em>absolute URL</em>) כוללת את הפרוטוקול והדומיין:
      <code>https://example.com/images/logo.png</code>.
    </p>
    <p>
      משתמשים בה כשמפנים ל<strong>אתר אחר</strong>. לקבצים של האתר שלך היא מיותרת,
      ואף מזיקה — אם הדומיין ישתנה, כל הקישורים יישברו.
    </p>
  </div>
</div>

| סוג נתיב | נראה כך | נמדד מ |
| --- | --- | --- |
| יחסי | `images/logo.png` | הקובץ הנוכחי |
| יחסי, כלפי חוץ | `../images/logo.png` | הקובץ הנוכחי |
| מהשורש | `/images/logo.png` | שורש הדומיין |
| כתובת מלאה | `https://site.com/logo.png` | האינטרנט |

## אותיות גדולות וקטנות

<div class="box warn">
  <div class="box-head"><span class="icon">🔠</span>הבאג שמופיע רק אחרי ההעלאה</div>
  <div class="box-body">
    <p>
      זו אולי התקלה הכי מבלבלת בכל הפרק, כי היא <strong>לא מתרחשת במחשב שלך</strong>.
    </p>
    <ul>
      <li><strong>macOS ו־Windows</strong> — לא מבחינים בין <code>Logo.png</code> ל־<code>logo.png</code>.</li>
      <li><strong>שרתי Linux</strong> (וביניהם GitHub Pages) — <strong>כן מבחינים</strong>.</li>
    </ul>
    <p>
      התוצאה: תמונה שנראית מצוין מקומית ונעלמת אחרי ההעלאה, בלי ששינית שורה אחת.
    </p>
    <p class="note-line">
      הפתרון הפשוט: <strong>שמות קבצים תמיד באותיות קטנות</strong>, והנתיב מועתק
      בדיוק כפי שהקובץ נקרא.
    </p>
  </div>
</div>

## שמות קבצים

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>ארבעה כללים</div>
  <div class="box-body">
    <ul>
      <li><strong>בלי רווחים</strong> — <code>my photo.jpg</code> הופך ל־<code>my%20photo.jpg</code> בכתובת. עדיף מקף: <code>my-photo.jpg</code>.</li>
      <li><strong>אותיות קטנות בלבד</strong> — מונע את הבאג שלמעלה.</li>
      <li><strong>בלי עברית ובלי תווים מיוחדים</strong> — עובד בדרך כלל, אבל יוצר כתובות מקודדות ובלתי קריאות.</li>
      <li><strong>מקף ולא קו תחתון</strong> — <code>about-us.html</code>. זה גם מה שמנועי חיפוש מעדיפים.</li>
    </ul>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב גם ללוכסן: בנתיבי אינטרנט משתמשים תמיד ב־<code>/</code> קדימה,
      גם אם ב־Windows נתיבי המערכת נכתבים עם <code>\</code> אחורה.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר נתיבים</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת <code>../</code></strong> כשהקובץ נמצא בתוך תיקייה.</li>
      <li><strong>נתיב מהשורש ב־GitHub Pages</strong> — עובד מקומית, נשבר בהעלאה.</li>
      <li><strong>אות גדולה בשם הקובץ</strong> — אותו סיפור בדיוק.</li>
      <li><strong>רווח בשם הקובץ</strong> — יוצר כתובת מכוערת ולפעמים שבורה.</li>
      <li><strong>נתיב מהמחשב</strong> — <code>C:\Users\...\logo.png</code> לא יעבוד לאף אחד חוץ ממך.</li>
      <li><strong>שכחת סיומת</strong> — <code>logo</code> במקום <code>logo.png</code>.</li>
      <li><strong>ציפייה לשגיאה</strong> — נתיב שבור נכשל בשקט. בודקים ב־Console של הדפדפן.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>נתיב יחסי</strong> נמדד מהקובץ שבו הוא כתוב.</li>
      <li><code>שם/</code> נכנס תיקייה פנימה, <code>../</code> יוצא תיקייה החוצה.</li>
      <li><code>./</code> הוא ״התיקייה הנוכחית״, ובדרך כלל מיותר ב־HTML.</li>
      <li><strong>נתיב מהשורש</strong> מתחיל ב־<code>/</code> ונמדד משורש הדומיין — <strong>זהירות ב־GitHub Pages</strong>.</li>
      <li><strong>כתובת מלאה</strong> רק לאתרים חיצוניים.</li>
      <li>שרתי Linux <strong>מבחינים בין אותיות גדולות לקטנות</strong>, בניגוד למחשב שלך.</li>
      <li>שמות קבצים: אותיות קטנות, מקפים, בלי רווחים ובלי עברית.</li>
      <li>נתיב שבור <strong>נכשל בשקט</strong> — ה־Console הוא המקום לבדוק.</li>
    </ul>
  </div>
</div>
