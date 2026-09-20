# Forms

<p class="lead">
עד עכשיו כל מה שבנינו היה חד־כיווני: הדף מציג, המשתמש קורא.
<strong>טופס</strong> הוא המקום שבו הכיוון מתהפך — המשתמש מזין מידע והדף שולח אותו הלאה.
זה גם הפרק שבו HTML נוגע לראשונה בלוגיקה אמיתית.
</p>

## אלמנט form

<div class="box theory">
  <div class="box-head"><span class="icon">📮</span>העוטף</div>
  <div class="box-body">
    <p>
      <code>&lt;form&gt;</code> עוטף את כל שדות הטופס, ומגדיר מה קורה כששולחים אותו:
    </p>
    <ul>
      <li><strong><code>action</code></strong> — הכתובת שאליה יישלח המידע.</li>
      <li><strong><code>method</code></strong> — איך יישלח: <code>get</code> או <code>post</code>.</li>
    </ul>
  </div>
</div>

| | `get` | `post` |
| --- | --- | --- |
| **איפה המידע** | בכתובת עצמה, אחרי `?` | בגוף הבקשה, לא נראה |
| **מתאים ל** | חיפוש, סינון | הרשמה, תשלום, סיסמאות |
| **נשמר בהיסטוריה** | כן | לא |
| **אפשר לשתף בקישור** | כן | לא |

<div class="keypoint">
זו הסיבה שכתובת של חיפוש בגוגל נראית כמו <code>?q=html</code> — זה טופס
<code>get</code>, והמידע יושב בכתובת. סיסמה לעולם לא נשלחת ב־<code>get</code>,
כי היא הייתה נשמרת בהיסטוריית הדפדפן.
</div>

## input — שדה קלט

<div class="box theory">
  <div class="box-head"><span class="icon">⌨️</span>תגית אחת, הרבה סוגים</div>
  <div class="box-body">
    <p>
      <code>&lt;input&gt;</code> הוא <strong>Void Element</strong> שמשנה את צורתו לגמרי
      לפי ה־attribute <code>type</code>.
    </p>
    <p>אותה תגית בדיוק יכולה להיות שדה טקסט, תיבת סימון, בורר תאריך או בורר צבע:</p>
  </div>
</div>

```demo
<input type="text" placeholder="text">
<input type="email" placeholder="email">
<input type="password">
<input type="date">
<input type="color">
<input type="range">
```

| `type` | מה זה נותן |
| --- | --- |
| `text` | שדה טקסט רגיל (ברירת מחדל) |
| `email` | שדה טקסט + בדיקת תקינות כתובת |
| `password` | מסתיר את התווים |
| `number` | מספרים בלבד, עם חיצים |
| `date` | בורר תאריך |
| `checkbox` | תיבת סימון |
| `radio` | בחירה יחידה מתוך קבוצה |
| `file` | העלאת קובץ |
| `submit` | כפתור שליחה |

<div class="box">
  <div class="box-body">
    <p class="note-line">
      ה־<code>placeholder</code> הוא טקסט רמז שנעלם ברגע שמתחילים להקליד.
      הוא <strong>לא תחליף ל־label</strong> — נגיע לזה מיד.
    </p>
  </div>
</div>

## name — ה־attribute הכי חשוב

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>בלי name המידע פשוט לא נשלח</div>
  <div class="box-body">
    <p>
      זו אחת הטעויות המתסכלות בטפסים: הכול נראה תקין, המשתמש ממלא, לוחץ שליחה —
      והשדה <strong>לא מגיע לשרת בכלל</strong>.
    </p>
    <p>
      הסיבה: המידע נשלח כזוגות של <strong>שם וערך</strong>. השם מגיע מ־<code>name</code>,
      והערך ממה שהמשתמש הקליד. שדה בלי <code>name</code> הוא שדה בלי מפתח — ולכן הוא מושמט.
    </p>
    <p class="note-line">
      כלל: לכל שדה שאמור להישלח חייב להיות <code>name</code>.
    </p>
  </div>
</div>

## label — התווית של השדה

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>שתי דרכים לקשר</div>
  <div class="box-body">
    <p><code>&lt;label&gt;</code> מקשר טקסט לשדה, ואפשר לעשות זאת בשתי דרכים:</p>
    <ul>
      <li>
        <strong>באמצעות <code>for</code></strong> — ערך ה־<code>for</code> של ה־label
        זהה ל־<code>id</code> של השדה.
      </li>
      <li>
        <strong>בעטיפה</strong> — פשוט שמים את ה־<code>&lt;input&gt;</code> בתוך ה־label,
        ואז לא צריך <code>for</code> ולא <code>id</code>.
      </li>
    </ul>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      לקישור הזה יש אפקט מוחשי: <strong>לחיצה על הטקסט מפעילה את השדה</strong>.
      נסי ללחוץ על המילים עצמן בתצוגה:
    </p>
  </div>
</div>

```demo
<p>
  <label for="a">Label — click me</label>
  <input type="checkbox" id="a">
</p>
<p>
  Plain text — click me
  <input type="checkbox">
</p>
```

<div class="keypoint">
הטקסט הראשון מסמן ומבטל את התיבה; השני לא עושה כלום.
מעבר לנוחות, זה גם מגדיל משמעותית את שטח הלחיצה — קריטי במובייל —
וקורא מסך יודע להקריא ״תיבת סימון, Label״ במקום ״תיבת סימון״ בלי הקשר.
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>placeholder הוא לא label</div>
  <div class="box-body">
    <p>
      מפתה לוותר על ה־label ולכתוב את שם השדה ב־<code>placeholder</code>.
      הבעיה: ה־placeholder <strong>נעלם ברגע שמתחילים להקליד</strong>.
    </p>
    <p>
      המשתמש שממלא טופס ארוך, נעצר באמצע וחוזר אליו — כבר לא יודע מה היה בכל שדה.
      ה־placeholder הוא רמז נוסף, לא תחליף.
    </p>
  </div>
</div>

## checkbox ו־radio

<div class="box theory">
  <div class="box-head"><span class="icon">☑️</span>ההבדל הוא ב־name</div>
  <div class="box-body">
    <ul>
      <li><strong><code>checkbox</code></strong> — בחירה מרובה. כל תיבה עצמאית.</li>
      <li><strong><code>radio</code></strong> — בחירה יחידה מתוך קבוצה.</li>
    </ul>
    <p>
      מה שהופך כמה כפתורי radio ל<strong>קבוצה</strong> הוא ה־<code>name</code> המשותף.
      אם לכל אחד יהיה <code>name</code> שונה, אפשר יהיה לבחור את כולם —
      וזו טעות נפוצה מאוד.
    </p>
  </div>
</div>

```demo
<p>Same name — pick one:</p>
<label><input type="radio" name="size"> S</label>
<label><input type="radio" name="size"> L</label>
<p>Different names — both work:</p>
<label><input type="radio" name="a"> S</label>
<label><input type="radio" name="b"> L</label>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בזוג הראשון אפשר לבחור רק אחד. בזוג השני אפשר לסמן את שניהם — וזה בדיוק
      הבאג שנוצר כששוכחים <code>name</code> משותף.
    </p>
  </div>
</div>

## select ו־textarea

<div class="box theory">
  <div class="box-head"><span class="icon">📋</span>שני שדות שאינם input</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>&lt;select&gt;</code></strong> — רשימה נפתחת. כל אפשרות היא
        <code>&lt;option&gt;</code>.
      </li>
      <li>
        <strong><code>&lt;textarea&gt;</code></strong> — שדה טקסט רב־שורתי.
      </li>
    </ul>
    <p class="note-line">
      שימי לב: לשניהם <strong>יש תגית סגירה</strong>, בניגוד ל־<code>&lt;input&gt;</code>.
      הערך של <code>&lt;textarea&gt;</code> הוא <strong>התוכן שבין התגיות</strong>,
      ולא attribute בשם <code>value</code>.
    </p>
  </div>
</div>

```demo
<select name="city">
  <option value="tlv">Tel Aviv</option>
  <option value="jlm">Jerusalem</option>
</select>
<textarea rows="3">Text goes here</textarea>
```

## button

<div class="box theory">
  <div class="box-head"><span class="icon">🔘</span>שלושה סוגים</div>
  <div class="box-body">
    <ul>
      <li><strong><code>type="submit"</code></strong> — שולח את הטופס. <strong>זו ברירת המחדל.</strong></li>
      <li><strong><code>type="reset"</code></strong> — מנקה את כל השדות.</li>
      <li><strong><code>type="button"</code></strong> — לא עושה כלום מעצמו; מיועד ל־JavaScript.</li>
    </ul>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>ברירת המחדל מפתיעה</div>
  <div class="box-body">
    <p>
      <code>&lt;button&gt;</code> בלי <code>type</code> בתוך טופס הוא
      <strong>כפתור שליחה</strong>. כל כפתור שהוספת לעיצוב ישלח את הטופס
      וירענן את הדף בלחיצה.
    </p>
    <p>
      לכן לכל כפתור שאינו כפתור שליחה כותבים במפורש
      <code>type="button"</code>.
    </p>
  </div>
</div>

## אימות בסיסי

<div class="box theory">
  <div class="box-head"><span class="icon">✅</span>בדיקות שהדפדפן עושה לבד</div>
  <div class="box-body">
    <p>
      HTML יודע לבדוק בעצמו חלק מהתקינות, בלי שורת JavaScript אחת:
    </p>
  </div>
</div>

| Attribute | מה הוא בודק |
| --- | --- |
| `required` | שהשדה לא נשאר ריק |
| `minlength` / `maxlength` | אורך הטקסט |
| `min` / `max` | טווח למספרים ולתאריכים |
| `pattern` | התאמה לתבנית |
| `type="email"` | מבנה תקין של כתובת מייל |

```demo
<form>
  <input type="email" required
         placeholder="Enter an email">
  <button>Send</button>
</form>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      לחצי Send בלי למלא, או עם טקסט שאינו כתובת מייל — הדפדפן יציג הודעת שגיאה
      משלו ויעצור את השליחה. אם תמלאי כתובת תקינה ותשלחי, התצוגה תתרוקן
      (אין לאן לשלוח) — רענון הדף יחזיר אותה.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">🔓</span>אימות בדפדפן הוא לא אבטחה</div>
  <div class="box-body">
    <p>
      כל הבדיקות האלה רצות <strong>אצל המשתמש</strong>, ואפשר לעקוף אותן בקלות —
      למשל דרך כלי הפיתוח של הדפדפן.
    </p>
    <p>
      הן קיימות כדי לתת <strong>משוב מהיר ונעים</strong>, ולא כדי להגן.
      השרת חייב לבדוק שוב כל מה שהוא מקבל, תמיד.
    </p>
  </div>
</div>

## טופס שלם

```html
<form action="/signup" method="post">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="pw">Password</label>
  <input type="password" id="pw" name="password"
         minlength="8" required>

  <label>
    <input type="checkbox" name="news"> Send me updates
  </label>

  <button type="submit">Sign up</button>
</form>
```

<div class="box">
  <div class="box-body">
    <p>שימי לב שכל האלמנטים מהפרק נמצאים כאן יחד:</p>
    <ul>
      <li>ל־<code>&lt;form&gt;</code> יש <code>action</code> ו־<code>method="post"</code>, כי יש כאן סיסמה.</li>
      <li>לכל שדה יש <code>name</code>, אחרת הוא לא יישלח.</li>
      <li>לכל שדה יש <code>&lt;label&gt;</code> — בשתי הצורות, עם <code>for</code> ובעטיפה.</li>
      <li>האימות נעשה עם <code>required</code> ו־<code>minlength</code>.</li>
    </ul>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר טפסים</div>
  <div class="box-body">
    <ul>
      <li><strong>שדה בלי <code>name</code></strong> — המידע פשוט לא נשלח.</li>
      <li><strong>כפתורי radio בלי <code>name</code> משותף</strong> — אפשר לבחור כמה.</li>
      <li><strong><code>&lt;button&gt;</code> בלי <code>type</code></strong> — שולח את הטופס בלי כוונה.</li>
      <li><strong><code>placeholder</code> במקום <code>&lt;label&gt;</code></strong> — הטקסט נעלם בהקלדה.</li>
      <li><strong><code>for</code> שלא תואם ל־<code>id</code></strong> — הקישור פשוט לא קיים.</li>
      <li><strong>אותו <code>id</code> לשני שדות</strong> — ה־label יקשר רק לראשון.</li>
      <li><strong>סיסמה ב־<code>method="get"</code></strong> — תופיע בכתובת ובהיסטוריה.</li>
      <li><strong><code>value</code> על <code>&lt;textarea&gt;</code></strong> — הערך שלו הוא התוכן שבין התגיות.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;form&gt;</code></strong> עוטף את הטופס, עם <code>action</code> ו־<code>method</code>.</li>
      <li><strong><code>get</code></strong> — המידע בכתובת, לחיפוש. <strong><code>post</code></strong> — בגוף הבקשה, למידע רגיש.</li>
      <li><strong><code>&lt;input&gt;</code></strong> משנה צורה לפי <code>type</code>.</li>
      <li><strong><code>name</code> חובה</strong> — בלעדיו השדה לא נשלח כלל.</li>
      <li><strong><code>&lt;label&gt;</code></strong> מקשר טקסט לשדה, דרך <code>for</code>+<code>id</code> או בעטיפה. לחיצה עליו מפעילה את השדה.</li>
      <li><strong><code>radio</code></strong> הופך לקבוצה באמצעות <code>name</code> משותף.</li>
      <li><strong><code>&lt;select&gt;</code></strong> ו־<strong><code>&lt;textarea&gt;</code></strong> אינם <code>&lt;input&gt;</code> ויש להם תגית סגירה.</li>
      <li><strong><code>&lt;button&gt;</code></strong> הוא <code>submit</code> כברירת מחדל.</li>
      <li>אימות ב־HTML הוא <strong>נוחות ולא אבטחה</strong> — השרת בודק שוב.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מילאת טופס, לחצת שליחה, ושדה אחד פשוט לא הגיע לשרת. מה כנראה חסר?
- `id` על השדה
+ `name` על השדה
- `<label>` לשדה
- `required` על השדה
= המידע נשלח כזוגות של שם וערך. שדה בלי `name` הוא שדה בלי מפתח, ולכן הוא מושמט.

? מה קורה כשלוחצים על `<label for="x">` שמקושר לתיבת סימון?
- כלום, ה-label הוא טקסט בלבד
+ התיבה מסומנת או מבוטלת, כאילו לחצנו עליה
- הטופס נשלח
- השדה מתנקה
= זה גם מגדיל משמעותית את שטח הלחיצה, וגם מאפשר לקורא מסך לדעת מה שם השדה.

? יש שני כפתורי radio ואפשר לסמן את שניהם. מה הבעיה?
- חסר `required`
+ אין להם `name` משותף — זה מה שהופך אותם לקבוצה
- צריך לעטוף אותם ב-`<fieldset>`
- צריך `type="checkbox"` במקום
= `name` שונה לכל אחד הופך כל כפתור לקבוצה נפרדת בת פריט אחד.

? הוספת `<button>שמור טיוטה</button>` בתוך טופס, והדף מתרענן בלחיצה. למה?
- כי חסר `type="reset"`
+ כי ברירת המחדל של `<button>` היא `type="submit"`
- כי `<button>` חייב להיות מחוץ לטופס
- כי חסר `onclick`
= לכל כפתור שאינו כפתור שליחה כותבים במפורש `type="button"`.

? האם `required` ו-`type="email"` מספיקים כדי לאבטח את הטופס?
- כן, הדפדפן חוסם כל קלט לא תקין
+ לא — האימות רץ אצל המשתמש וניתן לעקוף אותו, השרת חייב לבדוק שוב
- כן, אם מוסיפים גם `pattern`
- לא, אבל JavaScript כן יספיק
= אימות ב-HTML נועד לתת משוב מהיר ונעים, לא להגן. אפשר לעקוף אותו מכלי הפיתוח.
```
