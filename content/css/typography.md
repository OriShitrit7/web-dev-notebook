# Typography

<p class="lead">
רוב מה שיש באתר הוא טקסט, ולכן טיפוגרפיה היא ההשקעה עם ההחזר הכי גדול ב־CSS.
בפרק הזה נלמד לבחור גופן, לקבוע גודל ומשקל, ולשלוט במרווחים שהופכים
פסקה מ״קשה לקריאה״ ל״נעים לעין״.
</p>

## font-family

<div class="box theory">
  <div class="box-head"><span class="icon">🔤</span>רשימה, לא גופן יחיד</div>
  <div class="box-body">
    <p>
      <code>font-family</code> מקבל <strong>רשימת גופנים</strong> מופרדת בפסיקים.
      הדפדפן מנסה אותם משמאל לימין ולוקח את הראשון שקיים במערכת.
    </p>
    <p><code>font-family: 'Assistant', system-ui, sans-serif;</code></p>
    <p class="note-line">
      הרשימה נקראת <strong>font stack</strong>. שם שמכיל רווח נכתב במרכאות.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      האיבר האחרון ברשימה הוא תמיד <strong>משפחה גנרית</strong> —
      קטגוריה שהדפדפן תמיד יודע לספק:
    </p>
  </div>
</div>

| משפחה גנרית | מאפיין |
| --- | --- |
| `serif` | עם תגים בקצות האותיות |
| `sans-serif` | בלי תגים — הנפוץ ביותר במסך |
| `monospace` | כל אות ברוחב זהה — לקוד |
| `system-ui` | גופן המערכת של המשתמש |

```demo
<style>
  p { font-size: 18px; }
  .serif { font-family: Georgia, serif; }
  .sans { font-family: system-ui, sans-serif; }
  .mono { font-family: 'Courier New', monospace; }
</style>
<p class="serif">Serif — with small strokes</p>
<p class="sans">Sans-serif — clean and plain</p>
<p class="mono">Monospace — equal width</p>
```

### גופנים מהרשת

<div class="box">
  <div class="box-body">
    <p>
      גופן שלא מותקן אצל המשתמש לא יוצג. כדי להשתמש בגופן משלנו
      מקשרים אליו — למשל מ־Google Fonts, עם <code>&lt;link&gt;</code>
      ב־<code>&lt;head&gt;</code> שפגשנו בפרק Metadata.
    </p>
    <p class="note-line">
      האתר הזה עושה בדיוק את זה: הוא טוען את <strong>Assistant</strong>
      לעברית ואת <strong>JetBrains Mono</strong> לקוד. בלי הטעינה הזו
      היה נבחר גופן ברירת המחדל של המערכת.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>עברית צריכה גופן שתומך בעברית</div>
  <div class="box-body">
    <p>
      הרבה גופנים פופולריים לא כוללים אותיות עבריות בכלל.
      כשזה קורה הדפדפן <strong>מחליף גופן רק לאותיות החסרות</strong>,
      והתוצאה היא טקסט מעורבב בשני גופנים.
    </p>
    <p class="note-line">
      לכן ל־font stack של אתר בעברית תמיד מוסיפים גופן עברי מוכר בסוף,
      כגון <code>Arial</code>, שקיים כמעט בכל מערכת.
    </p>
  </div>
</div>

## גודל ומשקל

<div class="box theory">
  <div class="box-head"><span class="icon">⚖️</span>font-size ו־font-weight</div>
  <div class="box-body">
    <p>
      <strong><code>font-size</code></strong> — הגודל. כפי שראינו בפרק Units &amp; Sizing,
      מעדיפים <code>rem</code> כדי לכבד את העדפת המשתמש.
    </p>
    <p>
      <strong><code>font-weight</code></strong> — עובי האות, במספרים מ־100 עד 900
      בקפיצות של 100:
    </p>
    <ul>
      <li><code>400</code> = <code>normal</code> — טקסט רגיל</li>
      <li><code>700</code> = <code>bold</code> — מודגש</li>
    </ul>
    <p class="note-line">
      משקל יוצג רק אם <strong>קיים בגופן</strong>. אם ביקשת 300 והגופן לא כולל אותו,
      הדפדפן יבחר את הקרוב ביותר או יזייף עובי — והתוצאה נראית פחות טוב.
    </p>
  </div>
</div>

```demo
<style>
  p { font-family: system-ui; margin: 4px 0; }
  .w300 { font-weight: 300; }
  .w400 { font-weight: 400; }
  .w700 { font-weight: 700; }
  .w900 { font-weight: 900; }
</style>
<p class="w300">300 — light</p>
<p class="w400">400 — normal</p>
<p class="w700">700 — bold</p>
<p class="w900">900 — black</p>
```

## line-height

<div class="box theory">
  <div class="box-head"><span class="icon">📏</span>המרווח בין השורות</div>
  <div class="box-body">
    <p>
      <code>line-height</code> קובע את המרחק בין שורות בפסקה.
      זה המאפיין שהכי משפיע על נוחות הקריאה, והכי מרבים לשכוח.
    </p>
    <p>ערך מומלץ לטקסט רץ: בין <strong>1.5 ל־1.7</strong>.</p>
  </div>
</div>

```demo
<style>
  p { width: 250px; font-family: system-ui;
      border-right: 3px solid #4f46e5; padding-right: 10px; }
  .tight { line-height: 1; }
  .loose { line-height: 1.7; }
</style>
<p class="tight">Tight leading makes the eye lose its place when it jumps back to the start of the next line.</p>
<p class="loose">Loose leading gives the eye a clear path back, and the same text becomes easier to read.</p>
```

<div class="keypoint">
<strong>כותבים <code>line-height: 1.6</code> בלי יחידה.</strong>
ערך בלי יחידה עובר בירושה כ<strong>יחס</strong>, וכל אלמנט מחשב אותו מחדש
לפי גודל הגופן שלו. ערך עם יחידה, כמו <code>24px</code>, עובר כמספר קבוע —
ואז כותרת גדולה תקבל שורות צפופות מדי.
</div>

## מרווחים בין אותיות ומילים

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong><code>letter-spacing</code></strong> — מרווח בין אותיות.</li>
      <li><strong><code>word-spacing</code></strong> — מרווח בין מילים.</li>
    </ul>
    <p class="note-line">
      ערך חיובי קטן מתאים לכותרות באותיות גדולות. בטקסט רץ כמעט לא נוגעים בהם —
      ובעברית במיוחד, כי ריווח אותיות פוגע בקריאוּת.
    </p>
  </div>
</div>

```demo
<style>
  p { font-family: system-ui; margin: 6px 0; }
  .wide { letter-spacing: 0.15em; text-transform: uppercase;
          font-size: 13px; color: #6b6b70; }
</style>
<p class="wide">Section label</p>
<p>Normal body text</p>
```

## יישור טקסט

<div class="box theory">
  <div class="box-head"><span class="icon">↔️</span>start ו־end במקום left ו־right</div>
  <div class="box-body">
    <p>
      ל־<code>text-align</code> יש הערכים המוכרים <code>left</code>,
      <code>right</code>, <code>center</code> ו־<code>justify</code> —
      אבל יש גם שניים שחשובים במיוחד לאתר בעברית:
    </p>
    <ul>
      <li><strong><code>start</code></strong> — תחילת השורה לפי כיוון הכתיבה.</li>
      <li><strong><code>end</code></strong> — סוף השורה לפי כיוון הכתיבה.</li>
    </ul>
    <p>
      ב־<code>dir="rtl"</code> המשמעות של <code>start</code> היא <strong>ימין</strong>,
      וב־<code>dir="ltr"</code> היא שמאל. הערך מסתגל לבד.
    </p>
  </div>
</div>

```demo
<style>
  div { border: 1px solid #cbd5e1; padding: 8px;
        margin-bottom: 6px; font-family: system-ui; }
  .l { text-align: left; }
  .s { text-align: start; }
</style>
<div dir="rtl" class="l">text-align: left — טקסט עברי</div>
<div dir="rtl" class="s">text-align: start — טקסט עברי</div>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה זה חשוב דווקא לך</div>
  <div class="box-body">
    <p>
      בשני ה־<code>&lt;div&gt;</code> יש <code>dir="rtl"</code>, והתוצאה שונה:
      הראשון נצמד לשמאל למרות שהטקסט עברי, והשני נצמד נכון לימין.
    </p>
    <p>
      אם תכתבי <code>left</code> ו־<code>right</code> קשיחים,
      כל האתר יישבר ברגע שתשני כיוון — או שתרצי לתמוך גם באנגלית.
      <strong><code>start</code> ו־<code>end</code> מסתגלים לבד.</strong>
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אותו היגיון חל על מרווחים: <code>margin-inline-start</code> ו־<code>padding-inline-end</code>
      הם הגרסאות הלוגיות של <code>margin-left</code> ו־<code>padding-right</code>.
    </p>
  </div>
</div>

## קישוט וצורת אותיות

| מאפיין | ערכים שימושיים |
| --- | --- |
| `text-decoration` | `none`, `underline`, `line-through` |
| `text-transform` | `uppercase`, `lowercase`, `capitalize` |
| `font-style` | `normal`, `italic` |

```demo
<style>
  p { font-family: system-ui; margin: 5px 0; }
  a { text-decoration: none; color: #4f46e5; }
  a:hover { text-decoration: underline; }
  .caps { text-transform: uppercase; }
</style>
<p><a href="#">Link without underline — hover me</a></p>
<p class="caps">transformed to uppercase</p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>text-transform: uppercase</code> משנה רק את <strong>התצוגה</strong>.
      הטקסט ב־HTML נשאר כפי שנכתב, וזה מה שיועתק ויוקרא בקורא מסך.
      בעברית אין אותיות גדולות, ולכן הוא משפיע רק על טקסט לועזי.
    </p>
  </div>
</div>

## אורך שורה

<div class="box example">
  <div class="box-head"><span class="icon">📖</span>הכלל שמשנה הכי הרבה</div>
  <div class="box-body">
    <p>
      שורה ארוכה מדי מקשה על העין למצוא את תחילת השורה הבאה.
      הטווח המומלץ בטיפוגרפיה הוא <strong>45 עד 75 תווים</strong> לשורה.
    </p>
    <p>
      בפועל מגבילים את רוחב עמודת הטקסט — בדיוק הדפוס מפרק Units &amp; Sizing:
    </p>
    <p><code>.content { max-width: 65ch; }</code></p>
    <p class="note-line">
      היחידה <code>ch</code> היא רוחב התו <code>0</code> בגופן הנוכחי,
      ולכן <code>65ch</code> הוא בערך 65 תווים — בדיוק מה שרצינו למדוד.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>font stack בלי משפחה גנרית</strong> — אם הגופן לא נטען, אין רשת ביטחון.</li>
      <li><strong>גופן בלי תמיכה בעברית</strong> — הדפדפן מחליף רק את האותיות החסרות, והתוצאה מעורבבת.</li>
      <li><strong><code>line-height</code> עם יחידה</strong> — כותרות גדולות יקבלו שורות צפופות.</li>
      <li><strong><code>left</code> ו־<code>right</code> באתר עברי</strong> — במקום <code>start</code> ו־<code>end</code>.</li>
      <li><strong>שורות ארוכות מדי</strong> — בלי <code>max-width</code> הטקסט נמתח על כל המסך.</li>
      <li><strong>הסרת קו תחתון מקישורים בלי חלופה</strong> — אם אין גם שינוי צבע ברור, הקישור נעלם.</li>
      <li><strong><code>font-weight</code> שלא קיים בגופן</strong> — הדפדפן מזייף עובי והתוצאה מכוערת.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>font-family</code></strong> הוא <strong>רשימה</strong>, שמסתיימת במשפחה גנרית.</li>
      <li>גופן לעברית חייב לכלול אותיות עבריות, אחרת הדפדפן מחליף רק אותן.</li>
      <li><strong><code>font-size</code></strong> ב־<code>rem</code>; <strong><code>font-weight</code></strong> 400 רגיל, 700 מודגש.</li>
      <li><strong><code>line-height</code> בלי יחידה</strong> — עובר בירושה כיחס ומחושב מחדש בכל אלמנט.</li>
      <li>טווח נוח לטקסט רץ: <strong>1.5–1.7</strong>.</li>
      <li><strong><code>text-align: start</code> / <code>end</code></strong> מסתגלים לכיוון הכתיבה — קריטי ב־RTL.</li>
      <li><code>text-transform</code> משנה <strong>תצוגה בלבד</strong>, לא את הטקסט עצמו.</li>
      <li>אורך שורה נוח: <strong>45–75 תווים</strong>, למשל <code>max-width: 65ch</code>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? למה תמיד מסיימים `font-family` במשפחה גנרית כמו `sans-serif`?
- כי זה נדרש תחבירית
+ כדי שתהיה רשת ביטחון אם אף אחד מהגופנים ברשימה לא זמין
- כי היא קובעת את גודל הגופן
- כדי לשפר ביצועים
= הדפדפן מנסה את הגופנים לפי הסדר. המשפחה הגנרית היא האיבר שתמיד קיים.

? למה כותבים `line-height: 1.6` ולא `line-height: 24px`?
- כי `px` אינו חוקי במאפיין הזה
+ כי ערך בלי יחידה עובר בירושה כיחס, וכל אלמנט מחשב אותו מחדש לפי גודל הגופן שלו
- כי ערך בלי יחידה מדויק יותר
- אין הבדל בפועל
= עם ערך קבוע, כותרת גדולה תירש 24px ותקבל שורות צפופות מדי.

? באתר בעברית, מה ההבדל בין `text-align: right` ל-`text-align: start`?
- אין הבדל בכיוון RTL
+ `right` קשיח תמיד לימין, `start` מסתגל לכיוון הכתיבה ולכן לא יישבר אם הכיוון ישתנה
- `start` אינו נתמך בעברית
- `right` מיועד רק לטבלאות
= אותו היגיון קיים ב-`margin-inline-start` מול `margin-left`.

? הגדרת גופן שלא כולל אותיות עבריות. מה יקרה לטקסט העברי?
- לא יוצג כלל
- יוצג כריבועים
+ הדפדפן יחליף גופן רק לאותיות החסרות, והתוצאה תהיה טקסט מעורבב בשני גופנים
- יוצג באנגלית
= לכן ל-font stack של אתר עברי מוסיפים בסוף גופן עברי מוכר כמו Arial.

? למה מגבילים את רוחב עמודת הטקסט?
- כדי שהדף ייטען מהר יותר
+ כי שורה ארוכה מדי מקשה על העין למצוא את תחילת השורה הבאה
- כי CSS לא תומך בשורות ארוכות
- כדי לחסוך מקום במסך
= הטווח המקובל הוא 45–75 תווים, ואפשר למדוד אותו ישירות עם היחידה `ch`.
```
