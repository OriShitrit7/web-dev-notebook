# Overview

<p class="lead">
HTML נותן לדף <strong>מבנה</strong>, CSS נותן לו <strong>מראה</strong>,
ו־JavaScript נותן לו <strong>התנהגות</strong> — מה קורה כשלוחצים, מה נטען מהשרת,
ומה משתנה בדף בלי לטעון אותו מחדש. זו השכבה השלישית והאחרונה,
והיא היחידה מבין השלוש שהיא <strong>שפת תכנות</strong> אמיתית.
</p>

## מה זה JavaScript

<div class="box theory">
  <div class="box-head"><span class="icon">⚙️</span>שפה, לא שפת סימון</div>
  <div class="box-body">
    <p>
      בפרק Overview של HTML אמרנו שב־HTML אין משתנים, אין תנאים ואין לולאות.
      ב־JavaScript יש את כל אלה: משתנים, תנאים, לולאות, פונקציות ומבני נתונים.
    </p>
    <p class="note-line">
      השם מבלבל: <strong>ל־JavaScript אין שום קשר ל־Java</strong>.
      השם נבחר בשנות ה־90 משיקולי שיווק בלבד, ושתי השפות שונות לחלוטין.
    </p>
  </div>
</div>

## איפה הקוד רץ

<div class="box theory">
  <div class="box-head"><span class="icon">🌍</span>שתי סביבות</div>
  <div class="box-body">
    <p>
      JavaScript פותחה במקור <strong>עבור הדפדפן</strong>, אבל היום היא רצה בשני מקומות:
    </p>
    <ul>
      <li><strong>בדפדפן</strong> — שם היא יכולה לגעת בדף: לקרוא אותו, לשנות אותו ולהגיב ללחיצות.</li>
      <li><strong>מחוץ לדפדפן, עם Node.js</strong> — סביבת הרצה שמבוססת על מנוע ה־JavaScript של Chrome, ומאפשרת להריץ קוד בצד השרת ובטרמינל.</li>
    </ul>
    <p class="note-line">
      <strong>השפה עצמה זהה בשתיהן.</strong> משתנים, תנאים ולולאות מתנהגים בדיוק אותו דבר.
      מה שמשתנה הוא <strong>מה זמין סביב</strong>: בדפדפן יש דף ו־DOM,
      ב־Node יש מערכת קבצים ורשת.
    </p>
  </div>
</div>

<div class="keypoint">
הפרקים הקרובים עוסקים ב<strong>שפה עצמה</strong>, ולכן הם נכונים בשתי הסביבות.
מפרק <strong>The DOM</strong> והלאה נעבור לדפדפן בלבד — שם הקוד פוגש
את ה־HTML וה־CSS שכבר למדנו.
</div>

## במה היא שונה משפות שאת מכירה

<div class="box">
  <div class="box-body">
    <p>
      אם הגעת מ־C++‎ או מ־Java, ארבעה הבדלים ישנו לך את דרך העבודה:
    </p>
  </div>
</div>

| | JavaScript | C++ / Java |
| --- | --- | --- |
| **קומפילציה** | אין. הקוד רץ שורה אחר שורה (**Interpreted**), ושגיאות מתגלות רק ב**זמן ריצה** | יש קומפיילר שתופס שגיאות עוד לפני שהתוכנית רצה |
| **טיפוסים** | **Loosely typed** — משתנה יכול להחליף טיפוס תוך כדי ריצה | Strongly typed — `int`, `float`, `String` מוצהרים מראש |
| **זיכרון** | אוטומטי לחלוטין (Garbage Collection) | ניהול ידני או חצי־ידני |
| **מבנה קובץ** | הקוד רץ מלמעלה למטה. **אין `main`, אין `class` חובה** | נקודת כניסה מוגדרת, ולרוב מחלקה עוטפת |

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>מה זה אומר בפועל</div>
  <div class="box-body">
    <p>
      היעדר קומפיילר הוא ההבדל שהכי מורגש. שגיאת כתיב בשם משתנה
      <strong>לא תתגלה עד שהשורה הזו תרוץ</strong> — ואם היא בתוך תנאי
      שמתקיים רק לפעמים, הבאג עלול להתגלות מאוחר מאוד.
    </p>
    <p class="note-line">
      זו הסיבה שכל כך הרבה מהפרקים הבאים יעסקו ב<strong>הרגלים שמונעים באגים</strong>:
      <code>const</code> כברירת מחדל, <code>===</code> במקום <code>==</code>,
      ובדיקה מסודרת של ערכים.
    </p>
  </div>
</div>

## איך מריצים קוד

<div class="box theory">
  <div class="box-head"><span class="icon">▶️</span>שתי דרכים, לפי הסביבה</div>
  <div class="box-body">
    <p><strong>בדפדפן</strong> — מחברים קובץ לדף, בדיוק כפי שראינו בפרק Connecting CSS &amp; JavaScript:</p>
    <p><code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code></p>
    <p><strong>ב־Node</strong> — שומרים קובץ עם סיומת <code>.js</code> ומריצים אותו מהטרמינל:</p>
    <p><code>node index.js</code></p>
    <p class="note-line">
      להתקנת Node מורידים את גרסת <strong>LTS</strong> (היציבה) מהאתר הרשמי,
      ובודקים עם <code>node --version</code>. העורך המקובל בתעשייה הוא VS Code.
    </p>
  </div>
</div>

## console.log

<div class="box example">
  <div class="box-head"><span class="icon">🖨️</span>הכלי הראשון והשימושי ביותר</div>
  <div class="box-body">
    <p>
      <code>console.log()</code> מדפיס ערך. בטרמינל הוא מופיע כפלט,
      ובדפדפן הוא מופיע ב<strong>Console</strong> של כלי הפיתוח —
      אותם כלים שבהם השתמשנו לאבחון CSS.
    </p>
    <p class="note-line">
      בדמו שלמטה, ובכל הדמואים בפרקי JavaScript באתר הזה,
      הפלט של <code>console.log</code> מוצג בפאנל השחור שמתחת לתצוגה.
      זה בדיוק מה שהיית רואה בטרמינל.
    </p>
  </div>
</div>

```demo
<script>
  console.log("this is the first log");
  console.log("you can pass several values:", 42, true);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>console.log</code> מקבל <strong>כמה ערכים מופרדים בפסיקים</strong>
      ומדפיס אותם ברווח ביניהם. יש גם <code>console.warn</code>
      ו־<code>console.error</code>, שנבדלים רק בצבע ובאייקון.
    </p>
  </div>
</div>

## הקוד רץ מלמעלה למטה

<div class="box">
  <div class="box-body">
    <p>
      אין פונקציה ראשית ואין נקודת כניסה מוצהרת. מה שכתוב ראשון — רץ ראשון.
    </p>
  </div>
</div>

```demo
<script>
  console.log("first");
  console.log("second");
  console.log("third");
</script>
```

## תחביר בסיסי

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong>נקודה־פסיק</strong> בסוף הצהרה. השפה סלחנית ולרוב תשלים אותה לבד, אבל הנוהג המקובל הוא לכתוב אותה.</li>
      <li><strong>הערות</strong> — <code>//</code> לשורה בודדת, <code>/* */</code> לכמה שורות. שימי לב שכאן <code>//</code> <strong>כן</strong> קיים, בניגוד ל־CSS.</li>
      <li><strong>רגישות לאותיות</strong> — <code>userName</code> ו־<code>username</code> הם שני דברים שונים.</li>
      <li><strong>בלוקים</strong> נכתבים בסוגריים מסולסלים <code>{ }</code>, כמו ב־C++‎.</li>
    </ul>
  </div>
</div>

```demo
<script>
  // this is a single-line comment
  /* and this comment
     spans two lines */
  const greeting = "Hello";
  console.log(greeting);
</script>
```

## שגיאות מתגלות בזמן ריצה

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>איך נראית שגיאה</div>
  <div class="box-body">
    <p>
      כשהדפדפן מגיע לשורה בעייתית הוא <strong>עוצר את הסקריפט</strong>
      וכותב את השגיאה ב־Console. שום דבר לא מזהיר מראש.
    </p>
  </div>
</div>

```demo
<script>
  console.log("this line runs");
  console.log(notDefinedAnywhere);
  console.log("this line never runs");
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב שהשורה השלישית <strong>לא הודפסה</strong>. השגיאה עצרה את הסקריפט
      בנקודה שבה היא קרתה. הודעת השגיאה מציינת את שם המשתנה שלא נמצא —
      וברוב המקרים זו פשוט שגיאת כתיב.
    </p>
  </div>
</div>

## מוזרויות השפה

<div class="box theory">
  <div class="box-head"><span class="icon">🃏</span>JS Quirks</div>
  <div class="box-body">
    <p>
      ל־JavaScript יש קומץ התנהגויות מפורסמות שנראות כמו באגים, ורובן
      נובעות מאותו מקור אחד: <strong>המרת טיפוסים אוטומטית</strong>
      (<em>type coercion</em>). השפה מנסה ״להסתדר״ במקום להתלונן.
    </p>
    <p class="note-line">
      זו רשימה להיכרות מוקדמת, לא לשינון. כל אחת מהן תוסבר לעומק
      בפרק שלה — אבל כדאי לזהות אותן מהרגע הראשון, כי הן מסבירות
      חלק גדול מה״למה זה קרה?״ של המתחילים.
    </p>
  </div>
</div>

```demo
<script>
  console.log(4 == "4");
  console.log(4 === "4");
  console.log(5 + "5");
  console.log("5" - 2);
  console.log(true + 5);
  console.log(0.8 - 0.1);
</script>
```

| הביטוי | התוצאה | מה קרה |
| --- | --- | --- |
| `4 == "4"` | `true` | `==` **ממיר** את המחרוזת למספר לפני ההשוואה |
| `4 === "4"` | `false` | `===` בודק גם טיפוס — וזו הדרך הבטוחה |
| `5 + "5"` | `"55"` | `+` עם מחרוזת הוא **שרשור**, לא חיבור |
| `"5" - 2` | `3` | ל־`-` אין שרשור, ולכן המחרוזת מומרת למספר |
| `true + 5` | `6` | `true` מומר ל־`1` (ו־`false` ל־`0`) |
| `0.8 - 0.1` | `0.7000000000000001` | מספרים עשרוניים נשמרים בבסיס **בינארי** |

<div class="box example">
  <div class="box-head"><span class="icon">🔢</span>על החישוב העשרוני</div>
  <div class="box-body">
    <p>
      המחשב שומר מספרים בבסיס <strong>2</strong>, ובבסיס הזה אי אפשר לייצג
      שברים כמו <code>0.1</code> במדויק — בדיוק כפי שאי אפשר לכתוב שליש
      כשבר עשרוני סופי.
    </p>
    <p class="note-line">
      זו <strong>לא</strong> תכונה של JavaScript אלא של תקן המספרים
      <strong>IEEE 754</strong>, והיא קיימת גם ב־Java, ב־C++‎ ובפייתון.
      פשוט כאן נתקלים בה מוקדם, כי אין טיפוס עשרוני נפרד.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>וארבע מוזרויות נוספות ששווה להכיר מראש:</p>
  </div>
</div>

```demo
<script>
  console.log(typeof null);
  console.log(NaN === NaN);
  console.log([1, 2, 10].sort());
  console.log(Boolean([]), [] == false);
</script>
```

| הביטוי | התוצאה | מה קרה |
| --- | --- | --- |
| `typeof null` | `"object"` | באג היסטורי מ־1995 שנשאר בשפה לנצח |
| `NaN === NaN` | `false` | `NaN` הוא הערך היחיד שאינו שווה **לעצמו** |
| `[1, 2, 10].sort()` | `[1, 10, 2]` | `sort` ממיין כ**מחרוזות** כברירת מחדל |
| `[]` בתנאי מול `[] == false` | `true` ו־`true` | מערך ריק הוא **אמיתי**, אבל `==` ממיר אותו ל־`""` ואז ל־`0` |

<div class="keypoint">
<strong>שלושה הרגלים מנטרלים כמעט את כולן:</strong>
להשתמש ב־<code>===</code> ולא ב־<code>==</code>,
להמיר קלט במפורש עם <code>Number()</code>,
ולא להשוות מספרים עשרוניים בשוויון מדויק.
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש בהתחלה</div>
  <div class="box-body">
    <ul>
      <li><strong>לחפש שגיאות לפני ההרצה</strong> — אין קומפיילר. הדרך לגלות היא להריץ ולקרוא את ה־Console.</li>
      <li><strong>לשכוח לפתוח את ה־Console</strong> — בלעדיו <code>console.log</code> נראה כאילו לא עשה כלום.</li>
      <li><strong>לבלבל בין Java ל־JavaScript</strong> — שפות שונות לגמרי.</li>
      <li><strong>אותיות גדולות וקטנות</strong> — <code>Console.log</code> ייתן שגיאה.</li>
      <li><strong>לצפות ש־JavaScript תרוץ בלי חיבור לדף</strong> — בדפדפן צריך <code>&lt;script&gt;</code>.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>JavaScript היא שכבת ה<strong>התנהגות</strong>, והיא שפת תכנות מלאה.</li>
      <li>אין לה קשר ל־Java.</li>
      <li>היא רצה <strong>בדפדפן</strong> ו<strong>ב־Node.js</strong>; השפה זהה, הסביבה שונה.</li>
      <li><strong>Interpreted</strong> — אין קומפיילר, ושגיאות מתגלות רק בזמן ריצה.</li>
      <li><strong>Loosely typed</strong> — משתנה יכול להחליף טיפוס תוך כדי ריצה.</li>
      <li>אין <code>main</code> ואין <code>class</code> חובה. הקוד רץ <strong>מלמעלה למטה</strong>.</li>
      <li><code>console.log()</code> הוא כלי האבחון הראשון, ומקבל כמה ערכים.</li>
      <li>הערות נכתבות <code>//</code> או <code>/* */</code> — כאן <code>//</code> כן קיים.</li>
      <li>שגיאה <strong>עוצרת את הסקריפט</strong> בנקודה שבה קרתה.</li>
      <li><strong>מוזרויות השפה</strong> נובעות כמעט כולן מ<strong>המרת טיפוסים אוטומטית</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל המרכזי בין JavaScript ל-C++ מבחינת גילוי שגיאות?
- אין הבדל, שתיהן מתריעות מראש
+ ב-JavaScript אין קומפיילר, ולכן שגיאות מתגלות רק בזמן ריצה כשהשורה הבעייתית מגיעה
- ב-JavaScript השגיאות נעלמות לגמרי
- ב-C++ השגיאות מתגלות רק בזמן ריצה
= לכן שגיאת כתיב בתוך תנאי שמתקיים רק לפעמים עלולה להתגלות מאוחר מאוד.

? מה הקשר בין JavaScript ל-Java?
- JavaScript היא גרסה מוקטנת של Java
+ אין ביניהן שום קשר — השם נבחר בשנות ה-90 משיקולי שיווק
- JavaScript רצה על מכונת Java
- Java היא הגרסה החדשה של JavaScript
= אלה שתי שפות שונות לחלוטין, עם תחביר ומודל שונים.

? מה המשמעות של Loosely typed?
- שאסור להצהיר על טיפוסים
+ שמשתנה יכול להחזיק כל סוג של ערך, ואף להחליף טיפוס במהלך הריצה
- שכל המשתנים הם מחרוזות
- שהטיפוס נקבע בזמן קומפילציה
= זו גמישות שנוחה בהתחלה, אבל היא גם מקור לבאגים שקומפיילר היה תופס.

? מה ההבדל בין הרצת JavaScript בדפדפן לבין הרצה ב-Node.js?
- התחביר שונה בין השתיים
+ השפה עצמה זהה; מה שמשתנה הוא מה שזמין סביב — בדפדפן יש דף ו-DOM, ב-Node יש קבצים ורשת
- ב-Node אין משתנים
- בדפדפן אי אפשר להשתמש בפונקציות
= לכן פרקי היסוד של השפה נכונים בשתי הסביבות.

? הרצת קוד ובאמצע הופיעה שגיאה. מה יקרה לשורות שאחריה?
- הן ירוצו כרגיל
+ הסקריפט ייעצר בנקודת השגיאה, והשורות שאחריה לא ירוצו
- הן ירוצו אבל התוצאה תהיה undefined
- הדפדפן יריץ אותן אחרי שתתקני את השגיאה
= לכן שורה שלא הודפסה היא רמז טוב למקום שבו הקוד נעצר.
```
