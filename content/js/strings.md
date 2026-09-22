# Strings

<p class="lead">
מחרוזת היא טיפוס הנתונים שמייצג טקסט — וברוב האתרים היא מה שהמשתמש
בעצם רואה. בפרק הזה נראה שלוש דרכים להגדיר מחרוזת, למה אחת מהן
עדיפה בבירור, ואת המתודות שחוזרות כמעט בכל תרגיל.
</p>

## שלוש דרכים להגדיר

<div class="box theory">
  <div class="box-head"><span class="icon">📝</span>גרש, גרשיים ו־backtick</div>
  <div class="box-body">
    <ul>
      <li><code>'single'</code> — גרש בודד.</li>
      <li><code>"double"</code> — גרשיים כפולים.</li>
      <li><code>`backtick`</code> — גרש הפוך, המקש משמאל ל־1.</li>
    </ul>
    <p>
      שלושתן חוקיות. <strong>הכלל היחיד: לסיים באותו תו שבו התחלת.</strong>
    </p>
    <p class="note-line">
      בין גרש בודד לכפול אין שום הבדל תפקודי — רק עקביות בפרויקט.
      ה־backtick לעומת זאת <strong>עושה משהו נוסף</strong>, ואליו נגיע מיד.
    </p>
  </div>
</div>

```demo
<script>
  const s1 = "hello";
  const s2 = 'hello';
  const s3 = `hello`;
  console.log(s1, s2, s3);
  console.log(s1 === s2, s2 === s3);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימושי לדעת: אם בתוך הטקסט יש גרש, עוטפים בגרשיים —
      <code>"it's fine"</code> — וכך נמנעים מתווי בריחה.
      לחלופין אפשר <code>\'</code>, אבל זה פחות קריא.
    </p>
  </div>
</div>

## Template literals

<div class="box warn">
  <div class="box-head"><span class="icon">😖</span>הבעיה שהם פותרים</div>
  <div class="box-body">
    <p>
      כדי לשלב משתנה בתוך טקסט היה צריך פעם ״לשבור״ את המחרוזת
      ולשרשר בפלוסים. התוצאה מסורבלת, וקל לטעות ברווחים ובפסיקים:
    </p>
    <p><code>"Hey " + name + ", your grade is " + grade</code></p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">✨</span>הפתרון</div>
  <div class="box-body">
    <p>
      עם <strong>backticks</strong> כותבים את המחרוזת כרצף אחד,
      ומזריקים לתוכה ערכים עם <code>${...}</code>:
    </p>
    <p><code>`Hey ${name}, your grade is ${grade}`</code></p>
    <p class="note-line">
      בתוך <code>${...}</code> אפשר לשים <strong>כל ביטוי</strong>,
      לא רק שם משתנה — כולל חישוב או קריאה לפונקציה.
    </p>
  </div>
</div>

```demo
<script>
  const name = "Ori";
  const grade = 82;

  console.log(`Hey ${name}, your grade is ${grade}`);
  console.log("Hey " + name + ", your grade is " + grade);
  console.log(`3 + 4 = ${3 + 4}`);
  console.log(`${name} has ${grade >= 60 ? "passed" : "failed"}`);
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">📐</span>ויתרון שני: שורות</div>
  <div class="box-body">
    <p>
      מחרוזת ב־backticks יכולה להשתרע על <strong>כמה שורות</strong>
      בלי שום תו מיוחד. בגרשיים רגילים זו שגיאת תחביר.
    </p>
  </div>
</div>

```demo
<script>
  const message = `Dear Ori,
your order has shipped.
Thanks!`;
  console.log(message);
</script>
```

## מחרוזת כרצף תווים

<div class="box">
  <div class="box-body">
    <p>
      מאחורי הקלעים מחרוזת מתנהגת כמו רצף של תווים, ולכן אפשר
      לגשת לתו בודד <strong>לפי אינדקס</strong> — שמתחיל מ־<strong>0</strong>,
      בדיוק כמו במערך.
    </p>
    <p>
      <code>length</code> מחזיר את מספר התווים. שימי לב: זו
      <strong>תכונה ולא מתודה</strong> — בלי סוגריים.
    </p>
  </div>
</div>

```demo
<script>
  const word = "JavaScript";

  console.log(word[0]);
  console.log(word[3]);
  console.log(word.length);
  console.log(word[word.length - 1]);
  console.log(word[99]);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      האינדקס האחרון הוא תמיד <code>length - 1</code>.
      גישה לאינדקס שלא קיים מחזירה <code>undefined</code> —
      ולא שגיאה. זה עוד מקרה שבו <code>undefined</code> מסמן
      ״ניגשת למשהו שלא קיים״.
    </p>
  </div>
</div>

## מחרוזות אינן ניתנות לשינוי

<div class="box warn">
  <div class="box-head"><span class="icon">🔒</span>immutable</div>
  <div class="box-body">
    <p>
      אפשר <strong>לקרוא</strong> תו לפי אינדקס, אבל <strong>אי אפשר לשנות אותו</strong>.
      ההשמה פשוט לא תעשה כלום — בלי שגיאה ובלי אזהרה.
    </p>
    <p class="note-line">
      זו הסיבה שכל המתודות בהמשך <strong>מחזירות מחרוזת חדשה</strong>
      במקום לשנות את המקורית. אם לא שמרת את התוצאה, היא אבדה.
    </p>
  </div>
</div>

```demo
<script>
  let word = "hello";
  word[0] = "H";
  console.log(word);

  word = "H" + word.slice(1);
  console.log(word);
</script>
```

## מתודות נפוצות

| מתודה | מה היא עושה |
| --- | --- |
| `toUpperCase()` | מחזירה את המחרוזת באותיות גדולות |
| `toLowerCase()` | מחזירה אותה באותיות קטנות |
| `includes(text)` | האם הטקסט קיים בתוכה — מחזירה `true` / `false` |
| `trim()` | מסירה רווחים מיותרים מההתחלה ומהסוף |
| `split(separator)` | מפצלת ל**מערך** לפי תו מפריד |
| `replace(a, b)` | מחליפה את המופע ה**ראשון** בלבד |
| `replaceAll(a, b)` | מחליפה את **כל** המופעים |
| `substring(start, end)` | מחלצת תת־מחרוזת בין שני אינדקסים |
| `indexOf(text)` | האינדקס של המופע הראשון, או `-1` אם אין |

```demo
<script>
  const raw = "   Hello World   ";

  console.log(raw.trim());
  console.log(raw.trim().toUpperCase());
  console.log(raw.trim().toLowerCase());
  console.log(raw.includes("World"));
  console.log(raw.trim().split(" "));
  console.log("a-b-c".replace("-", "+"));
  console.log("a-b-c".replaceAll("-", "+"));
  console.log("JavaScript".substring(0, 4));
  console.log("JavaScript".indexOf("Script"));
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">⛓️</span>שרשור מתודות</div>
  <div class="box-body">
    <p>
      מכיוון שכל מתודה <strong>מחזירה מחרוזת חדשה</strong>,
      אפשר להמשיך ולקרוא מתודה נוספת על התוצאה —
      כמו <code>raw.trim().toUpperCase()</code> למעלה.
    </p>
    <p class="note-line">
      קוראים לזה <strong>chaining</strong>, והוא נפוץ מאוד ב־JavaScript.
      נראה אותו שוב בפרק Arrays.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>שתי נקודות על המתודות</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>replace</code> מחליפה רק את המופע הראשון.</strong>
        זו טעות נפוצה במיוחד — להחלפת הכול צריך <code>replaceAll</code>.
      </li>
      <li>
        <strong>הן לא משנות את המקור.</strong> <code>text.toUpperCase()</code>
        לבדו לא עושה כלום; צריך <code>const big = text.toUpperCase()</code>.
      </li>
    </ul>
  </div>
</div>

```demo
<script>
  const text = "hello";
  text.toUpperCase();
  console.log(text);

  const big = text.toUpperCase();
  console.log(big);
</script>
```

## המרה בין מחרוזת למספר

<div class="box">
  <div class="box-body">
    <p>
      קלט ממשתמש מגיע כמעט תמיד כ<strong>מחרוזת</strong>, גם כשהוא נראה כמו מספר.
      נזדקק לזה בפרק User Input &amp; Forms:
    </p>
    <ul>
      <li><code>Number("42")</code> — ממיר למספר, ומחזיר <code>NaN</code> אם לא הצליח.</li>
      <li><code>parseInt("42px")</code> — קורא מספר שלם מתחילת המחרוזת.</li>
      <li><code>String(42)</code> או <code>42 + ""</code> — ממיר למחרוזת.</li>
    </ul>
  </div>
</div>

```demo
<script>
  console.log(Number("42") + 8);
  console.log(Number("hello"));
  console.log(parseInt("42px"));
  console.log(String(42).length);
</script>
```

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת לשמור את התוצאה</strong> — המתודות מחזירות מחרוזת חדשה ולא משנות את המקור.</li>
      <li><strong><code>replace</code> במקום <code>replaceAll</code></strong> — רק המופע הראשון יוחלף.</li>
      <li><strong><code>length()</code> עם סוגריים</strong> — זו תכונה, לא מתודה.</li>
      <li><strong>ניסיון לשנות תו לפי אינדקס</strong> — מחרוזות immutable, וההשמה נכשלת בשקט.</li>
      <li><strong>ערבוב סוגי מרכאות</strong> — לפתוח בגרש ולסגור בגרשיים הוא שגיאת תחביר.</li>
      <li><strong><code>${}</code> בתוך גרשיים רגילים</strong> — יודפס כטקסט. צריך backticks.</li>
      <li><strong>חיבור מחרוזת למספר</strong> — <code>"5" + 5</code> נותן <code>"55"</code>. להמיר עם <code>Number()</code>.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>שלוש דרכים להגדיר: <code>'</code>, <code>"</code> ו־<code>`</code> — ומסיימים באותו תו.</li>
      <li><strong>Template literals</strong> עם backticks מאפשרים <code>${...}</code> ו<strong>שורות מרובות</strong>.</li>
      <li>בתוך <code>${...}</code> אפשר כל <strong>ביטוי</strong>, לא רק שם משתנה.</li>
      <li>גישה לתו לפי אינדקס מ־<strong>0</strong>; <code>length</code> הוא <strong>תכונה בלי סוגריים</strong>.</li>
      <li>אינדקס אחרון: <code>length - 1</code>. אינדקס לא קיים מחזיר <code>undefined</code>.</li>
      <li>מחרוזות <strong>immutable</strong> — כל מתודה מחזירה מחרוזת <strong>חדשה</strong>.</li>
      <li><code>replace</code> מחליפה <strong>רק את הראשון</strong>; <code>replaceAll</code> את כולם.</li>
      <li><code>split</code> מחזירה <strong>מערך</strong>, וזה הגשר לפרק Arrays.</li>
      <li>קלט ממשתמש הוא מחרוזת — ממירים עם <code>Number()</code> או <code>parseInt()</code>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה היתרון של backticks על פני גרשיים רגילים?
- הם מהירים יותר
+ הם מאפשרים להזריק ערכים עם `${...}` ולכתוב מחרוזת על כמה שורות
- הם היחידים שתומכים בעברית
- אין הבדל, זה עניין של סגנון
= בתוך `${...}` אפשר לשים כל ביטוי, כולל חישוב או תנאי מקוצר.

? כתבת `text.toUpperCase();` והמחרוזת לא השתנתה. למה?
- צריך להוסיף סוגריים נוספים
+ כי מחרוזות אינן ניתנות לשינוי, והמתודה מחזירה מחרוזת חדשה שצריך לשמור במשתנה
- המתודה עובדת רק על אנגלית
- חסר `await`
= זה נכון לכל מתודות המחרוזת: הן לעולם לא משנות את המקור.

? מה יחזיר `"a-b-c".replace("-", "+")`?
- `"a+b+c"`
+ `"a+b-c"` — `replace` מחליפה רק את המופע הראשון
- `"abc"`
- שגיאה
= להחלפת כל המופעים משתמשים ב-`replaceAll`.

? איך מקבלים את התו האחרון במחרוזת `word`?
- `word[word.length]`
+ `word[word.length - 1]`, כי האינדקסים מתחילים מ-0
- `word.last()`
- `word[-1]`
= `word[word.length]` יחזיר `undefined`, כי זה אינדקס שכבר מחוץ לטווח.

? קיבלת מהמשתמש את הערך `"7"` וכתבת `"7" + 3`. מה תקבלי?
- 10
+ `"73"` — הערך הוא מחרוזת, ולכן `+` מבצע שרשור ולא חיבור
- `NaN`
- שגיאה
= צריך להמיר קודם: `Number("7") + 3` יחזיר 10.
```
