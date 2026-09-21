# Colors & Backgrounds

<p class="lead">
צבע הוא המאפיין הראשון שכולם משנים, ויש ארבע דרכים שונות לכתוב אותו.
בפרק הזה נבין מה ההבדל ביניהן, מתי כל אחת נוחה יותר,
ואיך בונים רקעים — מצבע אחיד ועד גרדיאנטים ותמונות.
</p>

## ארבע דרכים לכתוב צבע

| שיטה | דוגמה | מתי נוחה |
| --- | --- | --- |
| **שם** | `red` | ניסוי מהיר בלבד |
| **Hex** | `#3333cc` | הכי נפוץ; מה שכלי עיצוב נותנים |
| **RGB** | `rgb(51 51 204)` | כשעובדים עם ערוצי צבע |
| **HSL** | `hsl(240 60% 50%)` | כשבונים פלטה או גוונים |

<div class="box">
  <div class="box-body">
    <p>ארבע השורות הבאות מייצרות <strong>בדיוק את אותו צבע</strong>:</p>
  </div>
</div>

```demo
<style>
  div { padding: 8px; color: white; font-family: system-ui; }
  .a { background: #3333cc; }
  .b { background: rgb(51 51 204); }
  .c { background: hsl(240 60% 50%); }
</style>
<div class="a">#3333cc</div>
<div class="b">rgb(51 51 204)</div>
<div class="c">hsl(240 60% 50%)</div>
```

## Hex

<div class="box theory">
  <div class="box-head"><span class="icon">🔢</span>שלושה זוגות</div>
  <div class="box-body">
    <p>
      <code>#RRGGBB</code> — שני תווים לכל ערוץ: אדום, ירוק, כחול.
      כל זוג הוא מספר בבסיס 16, מ־<code>00</code> (כלום) עד <code>ff</code> (מקסימום).
    </p>
    <ul>
      <li><code>#ff0000</code> — אדום מלא</li>
      <li><code>#000000</code> — שחור, <code>#ffffff</code> — לבן</li>
      <li><code>#3333cc</code> — הרבה כחול, מעט אדום וירוק</li>
    </ul>
    <p class="note-line">
      כשכל זוג מורכב משני תווים זהים אפשר לקצר לשלושה תווים:
      <code>#ff0000</code> שווה ל־<code>#f00</code>, ו־<code>#ffffff</code> שווה ל־<code>#fff</code>.
    </p>
  </div>
</div>

## HSL — הדרך שהכי קל לחשוב בה

<div class="box theory">
  <div class="box-head"><span class="icon">🎨</span>גוון, רוויה, בהירות</div>
  <div class="box-body">
    <ul>
      <li><strong>Hue</strong> — הגוון, במעלות על גלגל צבעים: 0 אדום, 120 ירוק, 240 כחול.</li>
      <li><strong>Saturation</strong> — כמה הצבע רווי. 0% אפור לגמרי, 100% צבע מלא.</li>
      <li><strong>Lightness</strong> — בהירות. 0% שחור, 50% הצבע ה״אמיתי״, 100% לבן.</li>
    </ul>
    <p>
      היתרון הגדול: כדי לקבל גרסה בהירה או כהה יותר של אותו צבע,
      <strong>משנים מספר אחד</strong>. ב־hex צריך לחשב מחדש את שלושת הזוגות.
    </p>
    <p class="note-line">
      שימי לב שהמרה בין hsl ל־hex לא תמיד יוצאת עגולה. <code>hsl(240 60% 50%)</code>
      הוא בדיוק <code>#3333cc</code>, אבל רוב הצירופים ייפלו על ערך מעוגל
      שיהיה שונה בפיקסל־צבע אחד או שניים. לרוב זה לא נראה לעין.
    </p>
  </div>
</div>

```demo
<style>
  div { padding: 8px; font-family: system-ui; }
  .l1 { background: hsl(244 76% 94%); }
  .l2 { background: hsl(244 76% 80%); }
  .l3 { background: hsl(244 76% 59%); color: white; }
  .l4 { background: hsl(244 76% 35%); color: white; }
</style>
<div class="l1">lightness 94%</div>
<div class="l2">lightness 80%</div>
<div class="l3">lightness 59%</div>
<div class="l4">lightness 35%</div>
```

<div class="keypoint">
בארבע השורות האלה <strong>הגוון והרוויה זהים</strong> — רק הבהירות משתנה.
כך בונים פלטה עקבית לאתר שלם בלי לנחש צבעים.
</div>

## שקיפות

<div class="box theory">
  <div class="box-head"><span class="icon">👻</span>שתי דרכים שונות לגמרי</div>
  <div class="box-body">
    <p>אפשר להוסיף ערוץ <strong>alpha</strong> לצבע עצמו, או להשתמש במאפיין <code>opacity</code>:</p>
    <ul>
      <li><code>rgb(79 70 229 / 40%)</code> — רק <strong>הצבע הזה</strong> שקוף.</li>
      <li><code>opacity: 0.4</code> — <strong>כל האלמנט</strong> שקוף, כולל הטקסט והילדים שבתוכו.</li>
    </ul>
  </div>
</div>

```demo
<style>
  div { padding: 10px; color: white; font-family: system-ui;
        margin-bottom: 6px; }
  .alpha { background: rgb(79 70 229 / 40%); }
  .op { background: #4f46e5; opacity: 0.4; }
</style>
<div class="alpha">alpha — only the background fades</div>
<div class="op">opacity — the text fades too</div>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>ההבדל חשוב</div>
  <div class="box-body">
    <p>
      בשורה השנייה הטקסט הלבן נהיה אפרפר וקשה לקריאה, כי
      <code>opacity</code> מחיל את השקיפות על <strong>כל</strong> האלמנט.
    </p>
    <p>
      כשרוצים רק רקע שקוף — משתמשים ב־alpha בתוך הצבע.
      <code>opacity</code> שמור למצבים שבהם באמת רוצים להעלים את הכול,
      למשל אלמנט מושבת.
    </p>
  </div>
</div>

## color מול background-color

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong><code>color</code></strong> — צבע ה<strong>טקסט</strong>. זכרי מפרק Cascade שהוא <strong>עובר בירושה</strong>.</li>
      <li><strong><code>background-color</code></strong> — צבע ה<strong>רקע</strong>. לא עובר בירושה.</li>
    </ul>
    <p class="note-line">
      יש גם מילת מפתח נוחה: <code>currentColor</code> מחזירה את ערך ה־<code>color</code>
      של האלמנט. למשל <code>border: 1px solid currentColor</code> — מסגרת באותו צבע
      כמו הטקסט, שתתעדכן לבד אם הצבע ישתנה.
    </p>
  </div>
</div>

## גרדיאנטים

<div class="box theory">
  <div class="box-head"><span class="icon">🌈</span>לא צבע אלא תמונה</div>
  <div class="box-body">
    <p>
      גרדיאנט הוא מעבר הדרגתי בין צבעים. מבחינת CSS הוא נחשב
      <strong>תמונה</strong> ולא צבע — ולכן הוא שייך ל־<code>background-image</code>
      ולא ל־<code>background-color</code>.
    </p>
    <ul>
      <li><code>linear-gradient()</code> — מעבר בקו ישר.</li>
      <li><code>radial-gradient()</code> — מעבר מנקודה החוצה, במעגל.</li>
    </ul>
  </div>
</div>

```demo
<style>
  div { padding: 18px; color: white; font-family: system-ui;
        margin-bottom: 6px; }
  .lin { background: linear-gradient(to left, #4f46e5, #be123c); }
  .ang { background: linear-gradient(135deg, #047857, #4f46e5); }
  .rad { background: radial-gradient(circle, #4f46e5, #312e81); }
</style>
<div class="lin">to left</div>
<div class="ang">135deg</div>
<div class="rad">radial</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      את הכיוון אפשר לכתוב במילים (<code>to left</code>, <code>to bottom right</code>)
      או במעלות. אפשר גם לתת יותר משני צבעים, מופרדים בפסיקים.
    </p>
  </div>
</div>

## תמונת רקע

<div class="box">
  <div class="box-body">
    <p>
      <code>background-image: url("...")</code> שם תמונה מאחורי התוכן.
      הנתיב עובד בדיוק כמו ב־<code>&lt;img&gt;</code> — נתיב יחסי לקובץ ה־CSS.
    </p>
    <p>ולרוב צריך שלושה מאפיינים נלווים:</p>
  </div>
</div>

| מאפיין | מה הוא עושה |
| --- | --- |
| `background-repeat` | האם לשכפל את התמונה. כמעט תמיד `no-repeat` |
| `background-position` | איפה למקם. למשל `center` |
| `background-size` | `cover` ממלא וחותך, `contain` מכניס הכול ומשאיר מקום |

```demo
<style>
  div { height: 80px; margin-bottom: 8px;
        border: 1px solid #cbd5e1;
        background-image: url("assets/images/sample.svg");
        background-repeat: no-repeat; }
  .cover { background-size: cover; }
  .contain { background-size: contain;
             background-position: center; }
</style>
<div class="cover"></div>
<div class="contain"></div>
```

<div class="keypoint">
<strong><code>cover</code></strong> ממלא את כל השטח — ולכן חלק מהתמונה נחתך.
<strong><code>contain</code></strong> מציג את התמונה במלואה — ולכן נשאר מקום ריק.
זו הבחירה שחוזרת בכל תמונת נושא באתר.
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>background-image הוא לא img</div>
  <div class="box-body">
    <p>
      תמונת רקע היא <strong>עיצוב</strong>. אין לה <code>alt</code>,
      קורא מסך מתעלם ממנה לגמרי, ומנוע חיפוש לא מאנדקס אותה.
    </p>
    <p>
      לכן: תמונה שנושאת <strong>מידע</strong> — <code>&lt;img&gt;</code> ב־HTML.
      תמונה <strong>דקורטיבית</strong> — <code>background-image</code> ב־CSS.
    </p>
  </div>
</div>

## הקיצור background

<div class="box">
  <div class="box-body">
    <p>אפשר לאחד את כל מאפייני הרקע לשורה אחת:</p>
  </div>
</div>

```css
background: #eef2ff url("hero.jpg") no-repeat center / cover;
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>קיצור מאפס את מה שלא נכתב</div>
  <div class="box-body">
    <p>
      זו תכונה של <strong>כל</strong> מאפייני הקיצור ב־CSS, לא רק של רקע.
    </p>
    <p>
      אם כתבת קודם <code>background-size: cover</code> ואחר כך
      <code>background: red</code> — ה־<code>background-size</code>
      <strong>יחזור לברירת המחדל</strong>, כי הקיצור מגדיר מחדש את כל המשפחה.
    </p>
    <p class="note-line">
      הסדר בין הצבע לתמונה לא משנה, אבל <code>background-size</code> חייב לבוא
      אחרי <code>background-position</code> עם לוכסן ביניהם.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>סולמית חסרה ב־hex</strong> — <code>color: 4f46e5</code> פשוט לא יעבוד.</li>
      <li><strong>גרדיאנט ב־<code>background-color</code></strong> — הוא תמונה, ולכן שייך ל־<code>background-image</code>.</li>
      <li><strong><code>opacity</code> במקום alpha</strong> — מדהה גם את הטקסט והילדים.</li>
      <li><strong>קיצור <code>background</code> שמוחק הגדרות קודמות</strong> — כולל <code>background-size</code>.</li>
      <li><strong>תמונת רקע לתוכן משמעותי</strong> — לא נגישה ולא מאונדקסת.</li>
      <li><strong>שכחת <code>no-repeat</code></strong> — התמונה תשוכפל כמו אריחים.</li>
      <li><strong>ניגודיות נמוכה</strong> — טקסט אפור בהיר על רקע לבן קשה לקריאה, במיוחד בנייד.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>ארבע דרכים לכתוב צבע: <strong>שם</strong>, <strong>hex</strong>, <strong>rgb</strong> ו־<strong>hsl</strong>.</li>
      <li><strong>Hex</strong> הוא הנפוץ ביותר; <strong>HSL</strong> הכי נוח לבניית פלטה.</li>
      <li><strong>alpha</strong> בתוך הצבע משקף רק אותו; <strong><code>opacity</code></strong> משקף את כל האלמנט.</li>
      <li><code>color</code> עובר בירושה, <code>background-color</code> לא.</li>
      <li><strong><code>currentColor</code></strong> מחזירה את צבע הטקסט של האלמנט.</li>
      <li><strong>גרדיאנט הוא תמונה</strong>, ולכן שייך ל־<code>background-image</code>.</li>
      <li><strong><code>cover</code></strong> ממלא וחותך; <strong><code>contain</code></strong> מכניס הכול ומשאיר מקום.</li>
      <li>תמונה עם מידע — <code>&lt;img&gt;</code>. תמונה דקורטיבית — <code>background-image</code>.</li>
      <li>מאפיין קיצור <strong>מאפס כל מה שלא נכתב בו</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה היתרון של `hsl` על פני `hex` כשבונים פלטת צבעים?
- הוא נתמך ביותר דפדפנים
+ אפשר לקבל גרסה בהירה או כהה יותר של אותו צבע בשינוי מספר אחד
- הוא מייצר צבעים מדויקים יותר
- הוא תופס פחות מקום בקובץ
= ב-hsl הגוון והרוויה נשארים, ורק הבהירות משתנה. ב-hex צריך לחשב מחדש שלושה זוגות.

? מה ההבדל בין `rgb(0 0 0 / 40%)` לבין `opacity: 0.4`?
- אין הבדל
+ הראשון משקף רק את הצבע עצמו, השני משקף את כל האלמנט כולל הטקסט והילדים
- הראשון עובד רק על רקע
- השני נתמך רק בדפדפנים חדשים
= זו הסיבה שטקסט לבן על רקע עם `opacity` נהיה אפרפר וקשה לקריאה.

? כתבת `background-color: linear-gradient(...)` ושום דבר לא קרה. למה?
- צריך להוסיף `!important`
+ גרדיאנט נחשב תמונה ולא צבע, ולכן שייך ל-`background-image`
- חסרות מרכאות סביב הגרדיאנט
- גרדיאנט עובד רק על `<div>`
= אפשר גם לכתוב אותו בקיצור `background`, שמקבל גם צבע וגם תמונה.

? מה ההבדל בין `background-size: cover` ל-`contain`?
+ `cover` ממלא את כל השטח וחותך מהתמונה, `contain` מציג אותה במלואה ומשאיר מקום ריק
- `cover` מגדיל את התמונה ו-`contain` מקטין אותה
- `cover` לתמונות ו-`contain` לגרדיאנטים
- אין הבדל, אלה שמות נרדפים
= זו הבחירה שחוזרת בכל תמונת נושא: למלא ולחתוך, או להראות הכול ולהשאיר שוליים.

? כתבת `background-size: cover` ואחריו `background: red`. מה קרה ל-`background-size`?
- הוא נשאר `cover`
+ הוא חזר לברירת המחדל — מאפיין קיצור מאפס כל מה שלא נכתב בו
- הכלל השני יתבטל
- הדפדפן יציג שגיאה
= זו תכונה של כל מאפייני הקיצור ב-CSS, וזו טעות שקשה מאוד לאתר.
```
