# HTML — Overview

<p class="lead">
<strong>HTML</strong> היא השפה שבה כותבים את <strong>המבנה והתוכן</strong> של דף אינטרנט.
בפרק הזה נבין מה HTML עושה, מה היא דווקא <em>לא</em> עושה, ואיך היא משתלבת עם CSS ועם JavaScript.
זה הפרק שנותן את התמונה הכללית — כל שאר הפרקים ממלאים אותה בפרטים.
</p>

## מה זה HTML?

<div class="box theory">
  <div class="box-head"><span class="icon">📘</span>שלוש המילים שמאחורי השם</div>
  <div class="box-body">
    <p><strong>HTML</strong> הוא ראשי תיבות של <strong>HyperText Markup Language</strong>, ובשלוש המילים האלה מסתתרת כל ההגדרה:</p>
    <ul>
      <li><strong>HyperText</strong> — טקסט שאפשר לקפוץ ממנו לטקסט אחר. זה הרעיון של הקישורים שמחברים בין דפים ברשת.</li>
      <li><strong>Markup</strong> — סימון. אנחנו לא כותבים רק טקסט, אלא <em>מסמנים</em> כל חלק שלו כדי לומר מה הוא.</li>
      <li><strong>Language</strong> — שפה עם תחביר קבוע, שהדפדפן יודע לקרוא ולפרש.</li>
    </ul>
    <p>
      במשפט אחד: HTML היא שפה שבה מסמנים תוכן כדי לומר לדפדפן <strong>מה כל חלק בדף</strong> —
      כאן כותרת, כאן פסקה, כאן תמונה, כאן קישור.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>HTML היא לא שפת תכנות</div>
  <div class="box-body">
    <p>
      זו נקודה שמבלבלת בהתחלה. אין ב־HTML משתנים, אין תנאים, אין לולאות ואין פונקציות —
      אי אפשר ״לחשב״ בה שום דבר.
    </p>
    <p>
      היא <strong>שפת סימון</strong> (markup language): כל מה שהיא עושה הוא לתאר מבנה.
      הלוגיקה תגיע בהמשך, מ־JavaScript.
    </p>
  </div>
</div>

## מ־Markup לדף: מה הסימון עושה

<div class="box">
  <div class="box-body">
    <p>
      הדרך הכי מהירה להבין מה HTML עושה היא לראות את אותו טקסט פעמיים —
      פעם בלי סימון ופעם עם סימון.
    </p>
    <p>בלי שום תגיות, הדפדפן מקבל גוש טקסט אחד ולא יודע מה הוא:</p>
  </div>
</div>

```demo
Web Development
We start with HTML.
Then comes CSS.
```

<div class="box">
  <div class="box-body">
    <p>
      שימי לב שגם ירידות השורה שכתבנו בקוד נעלמו, והכול נדחס לשורה אחת.
      הדפדפן לא מתייחס לירידות שורה בקוד המקור כאל מבנה.
    </p>
    <p>עכשיו אותו תוכן בדיוק, אבל עם סימון שמסביר מה כל חלק:</p>
  </div>
</div>

```demo
<h1>Web Development</h1>
<p>We start with HTML.</p>
<p>Then comes CSS.</p>
```

<div class="keypoint">
לא הוספנו אפילו מילה אחת של תוכן ולא שורה אחת של עיצוב — רק <strong>סימנו</strong> מה כל חלק.
הדפדפן הוא זה שהחליט להציג כותרת גדולה ומודגשת ולהפריד בין הפסקאות, כי עכשיו הוא יודע מה הוא מציג.
</div>

### מאיפה הגיע העיצוב, אם לא כתבנו עיצוב?

<div class="box">
  <div class="box-body">
    <p>
      לכל דפדפן יש <strong>עיצוב ברירת מחדל</strong> (default styles) לכל תגית:
      <code>h1</code> מוצגת גדולה ומודגשת, <code>p</code> מקבלת רווח מעל ומתחת,
      קישור מוצג בכחול ומקו תחתון.
    </p>
    <p>
      זה לא עיצוב שאנחנו כתבנו, וזו גם לא ה״משמעות״ של התגית — זו רק הצעת ברירת המחדל של הדפדפן.
      בפרקי ה־CSS נלמד להחליף אותה בעיצוב משלנו.
    </p>
  </div>
</div>

## שלוש השכבות של דף אינטרנט

<div class="box">
  <div class="box-body">
    <p>בפיתוח Web מקובל לחלק כל דף לשלוש שכבות, שלכל אחת תפקיד נפרד.</p>
  </div>
</div>

| שכבה | תפקיד | שואלת את השאלה |
| --- | --- | --- |
| **HTML** | מבנה ותוכן | מה קיים בדף? |
| **CSS** | עיצוב ומראה | איך זה נראה? |
| **JavaScript** | התנהגות ולוגיקה | מה קורה כשלוחצים? |

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>אותו רעיון בדוגמה אחת</div>
  <div class="box-body">
    <p>נניח שיש בדף כפתור ״הוספה לסל״:</p>
    <ul>
      <li><strong>HTML</strong> קובע שיש שם כפתור, ושכתוב עליו ״הוספה לסל״.</li>
      <li><strong>CSS</strong> קובע שהוא כתום, מעוגל ובגודל מסוים.</li>
      <li><strong>JavaScript</strong> קובע מה קורה כשלוחצים עליו — שהמוצר באמת ייכנס לסל.</li>
    </ul>
    <p class="note-line">
      אם נמחק את ה־CSS, הכפתור עדיין יהיה שם (פשוט אפור ומכוער). אם נמחק את ה־HTML, אין כפתור בכלל.
      לכן HTML היא תמיד השכבה הראשונה.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>הפרדת אחריות (separation of concerns):</strong> כל שכבה נכתבת בנפרד ועושה דבר אחד.
זה מה שמאפשר להחליף עיצוב שלם באתר בלי לגעת בתוכן, או לשנות תוכן בלי לשבור את העיצוב.
</div>

## איך הדפדפן הופך HTML לדף

<div class="box">
  <div class="box-body">
    <p>כשנכנסים לכתובת של אתר, הדפדפן עובר בגדול על ארבעה שלבים:</p>
    <ol>
      <li><strong>בקשה</strong> — הדפדפן מבקש מהשרת את קובץ ה־HTML של הדף.</li>
      <li><strong>קריאה (parsing)</strong> — הוא קורא את הקובץ מלמעלה למטה ומזהה את התגיות.</li>
      <li><strong>בניית עץ</strong> — מהתגיות הוא בונה מבנה היררכי של הדף, שנקרא <strong>DOM</strong> (Document Object Model).</li>
      <li><strong>ציור (rendering)</strong> — לפי העץ הזה ולפי ה־CSS, הוא מצייר את מה שרואים על המסך.</li>
    </ol>
  </div>
</div>

<div class="box theory">
  <div class="box-head"><span class="icon">🌳</span>למה זה חשוב לדעת כבר עכשיו</div>
  <div class="box-body">
    <p>
      העובדה שהדפדפן בונה <strong>עץ</strong> ולא רשימה שטוחה היא הסיבה לכך שבפרק הבא נדבר על
      <strong>Nesting</strong> ועל יחסי <strong>Parent</strong> ו־<strong>Child</strong>.
    </p>
    <p>
      אותו עץ הוא גם מה ש־CSS פונה אליו כדי לדעת מה לעצב, ומה ש־JavaScript משנה כדי לעדכן את הדף.
      כלומר, ה־HTML שאנחנו כותבות הוא נקודת ההתחלה של כל מה שקורה בדף.
    </p>
  </div>
</div>

## איך HTML בנוי?

<div class="box">
  <div class="box-body">
    <p>
      HTML בנוי מ־<strong>Elements</strong> (אלמנטים). כל אלמנט מוגדר באמצעות
      <strong>Tags</strong> (תגיות), ואלמנטים יכולים להכיל אלמנטים אחרים בתוכם —
      מה שנקרא <strong>Nesting</strong> (קינון).
    </p>
    <p>הצורה הכללית של אלמנט היא <code>&lt;tagname&gt;Content&lt;/tagname&gt;</code>.</p>
    <p class="note-line">
      <code>tagname</code> הוא שם כללי לצורך ההסבר בלבד — הוא לא תגית HTML אמיתית.
    </p>
    <p>
      את שלושת המושגים האלה נפרק לעומק בפרק הבא, <strong>Elements, Tags &amp; Nesting</strong>.
      הם הבסיס התחבירי של כל מה שנכתוב מכאן והלאה.
    </p>
  </div>
</div>

## איך נראה מסמך HTML שלם

<div class="box">
  <div class="box-body">
    <p>
      עד עכשיו ראינו קטעים בודדים. קובץ HTML אמיתי הוא תמיד מסמך שלם, עם מעטפת קבועה:
    </p>
  </div>
</div>

```demo
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>A complete page.</p>
  </body>
</html>
```

<div class="box theory">
  <div class="box-head"><span class="icon">📘</span>head מול body</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>&lt;head&gt;</code></strong> — מידע <em>על</em> המסמך. הוא לא מוצג בדף עצמו.
        למשל <code>&lt;title&gt;</code>, שמופיע בלשונית של הדפדפן ולא בתוך הדף.
      </li>
      <li>
        <strong><code>&lt;body&gt;</code></strong> — התוכן שהמשתמש באמת רואה.
      </li>
    </ul>
    <p class="note-line">
      לכן בתצוגה למעלה מופיעים רק ״!Hello״ והפסקה — כל מה שבתוך <code>&lt;head&gt;</code>
      עשה את עבודתו מאחורי הקלעים.
    </p>
    <p>
      את המבנה הזה נלמד לעומק בפרק <strong>Document Structure</strong>,
      ואת התוכן של ה־<code>&lt;head&gt;</code> בפרק <strong>Metadata</strong>.
    </p>
  </div>
</div>

## Semantic HTML

<div class="box theory">
  <div class="box-head"><span class="icon">🏛️</span>לא רק איפה — גם מה</div>
  <div class="box-body">
    <p>HTML לא מתארת רק <em>איפה</em> דברים נמצאים בדף, אלא גם <strong>מה המשמעות שלהם</strong>.</p>
    <p>
      אפשר להשיג טקסט גדול ומודגש בכמה דרכים, אבל רק <code>&lt;h1&gt;</code> אומר לדפדפן
      ״זו הכותרת הראשית של הדף״. ההבדל הזה חשוב ל:
    </p>
    <ul>
      <li><strong>נגישות</strong> — קורא מסך מאפשר למשתמש לנווט בין הכותרות של הדף. טקסט שרק <em>נראה</em> ככותרת לא ייכלל שם.</li>
      <li><strong>מנועי חיפוש</strong> — הם מסתמכים על המבנה הסמנטי כדי להבין על מה הדף.</li>
      <li><strong>קריאוּת הקוד</strong> — קל יותר לתחזק קוד שמתאר את עצמו.</li>
    </ul>
    <p>נחזור לנושא בהרחבה בפרק <strong>Semantic HTML &amp; Navigation</strong>.</p>
  </div>
</div>

<div class="keypoint">
הכלל המנחה: <strong>בוחרים תגית לפי המשמעות של התוכן, לא לפי איך שרוצים שהוא ייראה.</strong>
המראה תמיד אפשר לשנות אחר כך ב־CSS; את המשמעות לא.
</div>

## הרעיון המרכזי

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>HTML</strong> היא שפת סימון, לא שפת תכנות — היא מתארת מבנה ותוכן, לא לוגיקה.</li>
      <li>הסימון אומר לדפדפן <strong>מה כל חלק בדף</strong>, והדפדפן מציג אותו בהתאם.</li>
      <li>העיצוב הראשוני שרואים בלי CSS הוא <strong>ברירת המחדל של הדפדפן</strong>, ואפשר להחליף אותו.</li>
      <li>דף בנוי משלוש שכבות: <strong>HTML</strong> למבנה, <strong>CSS</strong> למראה ו־<strong>JavaScript</strong> להתנהגות.</li>
      <li>הדפדפן קורא את ה־HTML ובונה ממנו <strong>עץ</strong> (DOM), ולכן המבנה ההיררכי כל כך חשוב.</li>
      <li>מסמך HTML שלם מחולק ל־<strong>head</strong> (מידע על המסמך) ול־<strong>body</strong> (מה שרואים).</li>
      <li>בוחרים תגית לפי <strong>המשמעות</strong> של התוכן — זה הרעיון של Semantic HTML.</li>
    </ul>
    <p class="note-line">
      HTML היא השלד של דף האינטרנט. על השלד הזה CSS מוסיף עיצוב ו־JavaScript מוסיף התנהגות —
      אבל בלעדיו אין למה להוסיף אותם.
    </p>
  </div>
</div>

## בדקי את עצמך

```quiz
? למה HTML לא נחשבת שפת תכנות?
- כי היא לא רצה בדפדפן אלא בשרת
+ כי אין בה לוגיקה — תנאים, לולאות ופונקציות
- כי היא נכתבת באנגלית בלבד
- כי היא לא יכולה ליצור אתרים לבד
= HTML היא שפת סימון: היא מתארת מבנה ותוכן בלבד. הלוגיקה מגיעה מ-JavaScript.

? כתבת דף עם `<h1>` ו-`<p>` בלי שורת CSS אחת, והכותרת מוצגת גדולה ומודגשת. מאיפה הגיע העיצוב?
- מהמשמעות של התגית — כותרת היא תמיד גדולה
+ מעיצוב ברירת המחדל של הדפדפן, שאפשר להחליף ב-CSS
- מקובץ CSS שנוצר אוטומטית
- מ-HTML, שאחראי גם על מבנה וגם על מראה בסיסי
= לכל דפדפן יש default styles לכל תגית. זו הצעה של הדפדפן, לא חלק מהמשמעות של התגית.

? איזו שכבה אחראית על מה שקורה כשלוחצים על כפתור?
- HTML, כי הוא זה שיצר את הכפתור
- CSS, כי הוא שולט במראה של הכפתור בלחיצה
+ JavaScript, שאחראי על התנהגות ולוגיקה
- שלוש השכבות יחד, בחלקים שווים
= HTML קובע שהכפתור קיים, CSS איך הוא נראה, ו-JavaScript מה קורה כשלוחצים.

? מה הדפדפן בונה מהתגיות שהוא קורא בקובץ?
- רשימה שטוחה של תגיות לפי סדר הופעתן
+ עץ היררכי של אלמנטים, שנקרא DOM
- קובץ CSS זמני
- תמונה של הדף
= הדפדפן בונה DOM — עץ. זו הסיבה שהמבנה ההיררכי והקינון כל כך חשובים.

? מה ההבדל בין `<head>` ל-`<body>`?
- `<head>` מכיל את החלק העליון של הדף ו-`<body>` את השאר
+ `<head>` מכיל מידע על המסמך שלא מוצג, ו-`<body>` את התוכן שרואים
- `<head>` נטען ראשון ו-`<body>` אחריו, אבל שניהם מוצגים
- `<head>` מיועד לכותרות ו-`<body>` לפסקאות
= `<head>` הוא מידע לדפדפן ולמנועי חיפוש. מה שהמשתמש רואה נמצא כולו ב-`<body>`.
```
