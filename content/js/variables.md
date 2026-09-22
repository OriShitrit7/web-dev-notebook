# Variables & Data Types

<p class="lead">
משתנה הוא שם שמצביע על ערך. ב־JavaScript יש שלוש דרכים להצהיר עליו,
אבל רק שתיים מהן בשימוש היום — ולבחירה ביניהן יש כלל פשוט מאוד.
אחרי זה נכיר את טיפוסי הנתונים הבסיסיים, ואת שתי המלכודות
שכמעט כל מי שמתחיל נופל בהן.
</p>

## const, let ו־var

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>שלוש מילות מפתח</div>
  <div class="box-body">
    <ul>
      <li><strong><code>const</code></strong> — הערך <strong>לא ישתנה</strong> אחרי ההשמה. זו ברירת המחדל המומלצת.</li>
      <li><strong><code>let</code></strong> — לערך ש<strong>כן</strong> ישתנה במהלך הריצה.</li>
      <li><strong><code>var</code></strong> — הצורה הישנה. יש לה התנהגויות מבלבלות, ו<strong>מומלץ מאוד להימנע ממנה</strong>.</li>
    </ul>
  </div>
</div>

<div class="keypoint">
<strong>הכלל, בשאלה אחת:</strong> האם הערך הולך להשתנות בהמשך הריצה?
אם לא — <code>const</code>. אם כן — <code>let</code>.
מתחילים תמיד מ־<code>const</code>, ומשנים ל־<code>let</code> רק כשצריך.
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>למה להתחיל דווקא מ־const</div>
  <div class="box-body">
    <p>
      זה נשמע כמו מגבלה מיותרת, אבל זה בדיוק ההפך: <code>const</code> הופך
      שינוי בשוגג ל<strong>שגיאה רועשת</strong> במקום לבאג שקט.
    </p>
    <p class="note-line">
      בשפה בלי קומפיילר, כל הזדמנות לתפוס טעות מוקדם שווה הרבה.
    </p>
  </div>
</div>

```demo
<script>
  let a = 5;
  console.log(a);

  a = "moshe";
  console.log(a);

  const b = 10;
  b = 20;
  console.log("this never runs");
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בפאנל רואים את שני הערכים של <code>a</code> — כולל המעבר ממספר למחרוזת,
      שהוא חוקי לגמרי. ואז ההשמה מחדש ל־<code>const</code> עצרה את הסקריפט
      עם <code>TypeError: Assignment to constant variable</code>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>const נועל את ההפניה, לא את התוכן</div>
  <div class="box-body">
    <p>
      זו נקודה שמבלבלת: <code>const</code> מונע <strong>השמה מחדש למשתנה</strong>,
      אבל אם הערך הוא מערך או אובייקט — <strong>התוכן הפנימי שלו כן ניתן לשינוי</strong>.
    </p>
    <p class="note-line">
      נחזור לזה לעומק בפרקי <strong>Arrays</strong> ו־<strong>Objects</strong>.
      בינתיים מספיק לזכור: <code>const</code> נועל את השם, לא את מה שבפנים.
    </p>
  </div>
</div>

## טווח הצהרה

<div class="box">
  <div class="box-body">
    <p>
      <code>const</code> ו־<code>let</code> קיימים <strong>רק בתוך הבלוק</strong>
      שבו הוצהרו — כלומר בין הסוגריים המסולסלים הקרובים.
      זו התנהגות מוכרת מ־C++‎ ומ־Java.
    </p>
    <p class="note-line">
      <code>var</code> לעומתם <strong>מתעלם מהבלוק</strong> ו״דולף״ החוצה.
      זו אחת ההתנהגויות המבלבלות שבגללן הפסיקו להשתמש בו.
    </p>
  </div>
</div>

```demo
<script>
  if (true) {
    let insideOnly = "I live in the block";
    var leaksOut = "I escape the block";
  }
  console.log(leaksOut);
  console.log(insideOnly);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>leaksOut</code> הודפס למרות שהוצהר בתוך ה־<code>if</code>,
      ואילו <code>insideOnly</code> גרם ל־<code>ReferenceError</code>.
      זה בדיוק ההבדל — ובדיוק הסיבה להעדיף <code>let</code>.
    </p>
  </div>
</div>

## הטיפוסים הבסיסיים

| טיפוס | מה הוא מייצג | דוגמה |
| --- | --- | --- |
| `number` | **כל** המספרים — שלמים ועשרוניים כאחד | `42`, `3.14`, `-7` |
| `string` | טקסט | `"hello"` |
| `boolean` | אמת או שקר בלבד | `true`, `false` |
| `undefined` | ערך שהשפה נתנה **אוטומטית** כשמשהו לא הוגדר | |
| `null` | ריק **מכוון ומפורש** שהמתכנת קבע | |

<div class="box theory">
  <div class="box-head"><span class="icon">🔢</span>אין int ואין float</div>
  <div class="box-body">
    <p>
      בניגוד ל־C++‎ ול־Java, ב־JavaScript יש טיפוס מספרי <strong>אחד</strong>:
      <code>number</code>. <code>7</code> ו־<code>7.5</code> הם אותו טיפוס בדיוק.
    </p>
    <p class="note-line">
      אין צורך להחליט מראש, ואין המרות בין סוגי מספרים —
      אבל יש לזה מחיר שנראה בפרק הבא, בחישובים עשרוניים.
    </p>
  </div>
</div>

### null מול undefined

<div class="compare">
  <div class="good">
    <div class="compare-head">undefined — השפה נתנה</div>
    <div class="compare-body">
<pre><code class="language-js">let x;
console.log(x); // undefined
// גם: פונקציה בלי return,
// או שדה שלא קיים באובייקט</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">null — את קבעת</div>
    <div class="compare-body">
<pre><code class="language-js">let selected = null;
// "אין כרגע בחירה,
//  וזו החלטה מכוונת"</code></pre>
    </div>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      ההבדל הוא <strong>מי קבע</strong>. <code>undefined</code> אומר
      ״לא הוגדר״, ו־<code>null</code> אומר ״הוגדר במפורש כריק״.
      כשמקבלים <code>undefined</code> באופן לא צפוי, זה כמעט תמיד סימן
      שניגשנו למשהו שלא קיים.
    </p>
  </div>
</div>

## typeof

<div class="box">
  <div class="box-body">
    <p>
      <code>typeof</code> מחזיר את שם הטיפוס של ערך <strong>בזמן ריצה</strong> —
      כלי שימושי במיוחד בשפה שבה הטיפוסים גמישים.
    </p>
  </div>
</div>

```demo
<script>
  console.log(typeof 45);
  console.log(typeof true);
  console.log(typeof "hello");
  console.log(typeof undefined);
  console.log(typeof null);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🕳️</span>typeof null מחזיר "object"</div>
  <div class="box-body">
    <p>
      השורה האחרונה בפאנל היא <strong>לא טעות שלנו</strong>:
      <code>typeof null</code> באמת מחזיר <code>"object"</code>.
    </p>
    <p>
      זו <strong>באג היסטורי</strong> מהגרסה הראשונה של השפה משנת 1995.
      תיקון שלו היה שובר אתרים קיימים, ולכן הוא נשאר בשפה לנצח.
      פשוט צריך להכיר אותו.
    </p>
    <p class="note-line">
      המסקנה המעשית: <strong>אל תבדקי <code>null</code> עם <code>typeof</code></strong>.
      במקום זה משווים ישירות: <code>value === null</code>.
    </p>
  </div>
</div>

## טיפוס דינמי

<div class="box">
  <div class="box-body">
    <p>
      משתנה אינו ״קופסה מסוג מסוים״ אלא <strong>שם שמצביע על ערך</strong>,
      ואותו שם יכול להצביע מחר על ערך מסוג אחר לגמרי.
    </p>
  </div>
</div>

```demo
<script>
  let value = 5;
  console.log(value, typeof value);

  value = "now I am text";
  console.log(value, typeof value);

  value = true;
  console.log(value, typeof value);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>גמישות היא גם סכנה</div>
  <div class="box-body">
    <p>
      שום דבר בקוד למעלה אינו שגיאה — וזו בדיוק הבעיה. משתנה שהחליף טיפוס
      בלי שהתכוונת ייצור באג שיתגלה מאוחר, במקום אחר לגמרי בקוד.
    </p>
    <p class="note-line">
      ההרגל שמגן עליך: <code>const</code> כברירת מחדל, ושם משתנה
      שמתאר <strong>מה הוא מכיל</strong>.
    </p>
  </div>
</div>

## שמות משתנים

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>כללים ונהגים</div>
  <div class="box-body">
    <ul>
      <li>מתחילים ב<strong>אות</strong>, ב־<code>_</code> או ב־<code>$</code> — <strong>לא בספרה</strong>.</li>
      <li>בלי רווחים ובלי מקפים. <code>user-name</code> אינו שם חוקי.</li>
      <li><strong>רגישים לאותיות</strong>: <code>userName</code> ו־<code>username</code> שונים.</li>
      <li>הנוהג המקובל הוא <strong>camelCase</strong>: <code>firstName</code>, <code>totalPrice</code>.</li>
      <li>שם שמתאר <strong>משמעות</strong> — <code>userAge</code> עדיף על <code>x</code>.</li>
    </ul>
    <p class="note-line">
      זה אותו היגיון משמות ה־class ב־CSS: שם טוב מתאר מה זה,
      ונשאר נכון גם אחרי שינוי.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>שימוש ב־<code>var</code></strong> — דולף מחוץ לבלוק. היום משתמשים ב־<code>const</code> ו־<code>let</code>.</li>
      <li><strong>ציפייה ש־<code>const</code> ינעל מערך או אובייקט</strong> — הוא נועל רק את השם.</li>
      <li><strong><code>typeof null</code></strong> — מחזיר <code>"object"</code>. בודקים עם <code>=== null</code>.</li>
      <li><strong>בלבול בין <code>null</code> ל־<code>undefined</code></strong> — הראשון מכוון, השני אוטומטי.</li>
      <li><strong>שימוש במשתנה לפני שהוצהר</strong> — <code>ReferenceError</code>.</li>
      <li><strong>אותיות גדולות וקטנות</strong> — מקור נפוץ ל״המשתנה לא מוגדר״.</li>
      <li><strong>הצהרה בלי מילת מפתח</strong> — <code>x = 5</code> עובד לפעמים, ויוצר משתנה גלובלי בטעות.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>const</code> כברירת מחדל</strong>, <code>let</code> כשהערך משתנה, <code>var</code> בכלל לא.</li>
      <li><code>const</code> נועל את <strong>ההפניה</strong>, לא את התוכן של מערך או אובייקט.</li>
      <li><code>const</code> ו־<code>let</code> חיים <strong>בתוך הבלוק</strong>; <code>var</code> דולף החוצה.</li>
      <li>טיפוסים בסיסיים: <code>number</code>, <code>string</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>.</li>
      <li>יש טיפוס מספרי <strong>אחד</strong> — אין <code>int</code> ואין <code>float</code>.</li>
      <li><code>undefined</code> — <strong>השפה נתנה</strong>. <code>null</code> — <strong>את קבעת</strong>.</li>
      <li><code>typeof</code> בודק טיפוס בזמן ריצה, אבל <strong><code>typeof null === "object"</code></strong> — באג היסטורי.</li>
      <li>משתנה יכול <strong>להחליף טיפוס</strong> תוך כדי ריצה. זו גמישות ומקור לבאגים.</li>
      <li>שמות ב־<strong>camelCase</strong>, לפי משמעות, ורגישים לאותיות.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מתי משתמשים ב-`let` ומתי ב-`const`?
- תמיד ב-`let`, כי הוא גמיש יותר
+ מתחילים ב-`const` כברירת מחדל, ועוברים ל-`let` רק כשהערך באמת משתנה במהלך הריצה
- `const` רק למספרים ו-`let` רק למחרוזות
- אין הבדל מעשי ביניהם
= `const` הופך שינוי בשוגג לשגיאה רועשת, וזה יתרון גדול בשפה בלי קומפיילר.

? מה יחזיר `typeof null`?
- `"null"`
+ `"object"` — באג היסטורי מ-1995 שנשאר בשפה כי תיקונו היה שובר אתרים קיימים
- `"undefined"`
- שגיאה
= לכן בודקים ריק מכוון עם `value === null` ולא עם `typeof`.

? מה ההבדל בין `null` ל-`undefined`?
- הם זהים לחלוטין
+ `undefined` ניתן אוטומטית על ידי השפה כשמשהו לא הוגדר, ו-`null` הוא ריק שהמתכנת קבע במפורש
- `null` מיועד למספרים ו-`undefined` למחרוזות
- `undefined` הוא שגיאה ו-`null` תקין
= כשמקבלים `undefined` בהפתעה, זה כמעט תמיד סימן שניגשנו למשהו שלא קיים.

? הגדרת `const arr = [1, 2, 3]` ואז כתבת `arr.push(4)`. מה יקרה?
- שגיאה, כי המערך הוגדר כ-const
+ זה יעבוד — `const` נועל את ההפניה לשם, אבל לא את התוכן הפנימי של המערך
- המערך יאופס
- הערך 4 יתעלם
= מה שכן ייתן שגיאה זה `arr = [10, 20]`, כלומר השמה מחדש למשתנה עצמו.

? מהו טיפוס הנתונים של `7.5` ב-JavaScript?
- `float`
+ `number` — יש טיפוס מספרי אחד בלבד, שמשמש גם לשלמים וגם לעשרוניים
- `double`
- `decimal`
= בניגוד ל-C++ ול-Java, אין צורך להחליט מראש בין שלם לעשרוני.
```
