# Conditionals

<p class="lead">
תנאי הוא הנקודה שבה הקוד מפסיק לרוץ בקו ישר ומתחיל <strong>להחליט</strong>.
התחביר מוכר מכל שפה, אבל ב־JavaScript יש פרט אחד ששובר אנשים:
<strong>מה בדיוק נחשב ל״אמת״</strong>.
</p>

## if, else if, else

<div class="box theory">
  <div class="box-head"><span class="icon">🔀</span>המבנה</div>
  <div class="box-body">
    <p>
      התנאי נכתב בסוגריים עגולים, והבלוק בסוגריים מסולסלים.
      <code>else if</code> ו־<code>else</code> אופציונליים.
    </p>
    <p class="note-line">
      הדפדפן בודק <strong>מלמעלה למטה ועוצר בראשון שמתקיים</strong>.
      כל השאר לא ייבדקו כלל — ולכן הסדר משנה.
    </p>
  </div>
</div>

```demo
<script>
  const grade = 85;

  if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else {
    console.log("F");
  }
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>סדר הבדיקות</div>
  <div class="box-body">
    <p>
      אילו הסדר היה הפוך — <code>grade >= 70</code> קודם — הציון 85
      היה מקבל <code>C</code>, כי זה התנאי הראשון שמתקיים.
    </p>
    <p class="note-line">
      בתנאים של טווחים מתחילים תמיד <strong>מהקצה הצר ביותר</strong>.
    </p>
  </div>
</div>

## מה נחשב לאמת

<div class="box theory">
  <div class="box-head"><span class="icon">🎭</span>truthy ו־falsy</div>
  <div class="box-body">
    <p>
      התנאי לא חייב להיות <code>true</code> או <code>false</code>.
      כל ערך מומר ל־boolean — וכפי שראינו בפרק Operators,
      רשימת ה<strong>שקריים</strong> קצרה:
    </p>
    <p>
      <code>false</code>, <code>0</code>, <code>""</code>,
      <code>null</code>, <code>undefined</code>, <code>NaN</code>
    </p>
    <p class="note-line">
      <strong>כל השאר אמיתי</strong> — כולל <code>"0"</code>,
      <code>[]</code> ו־<code>{}</code>.
    </p>
  </div>
</div>

```demo
<script>
  const values = [0, "", "0", [], null, undefined, NaN, "hello"];
  const labels = ["0", '""', '"0"', "[]", "null", "undefined", "NaN", '"hello"'];

  values.forEach(function (v, i) {
    if (v) {
      console.log(labels[i], "→ truthy");
    } else {
      console.log(labels[i], "→ falsy");
    }
  });
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🕳️</span>המלכודת של 0 ושל מחרוזת ריקה</div>
  <div class="box-body">
    <p>
      <code>if (count)</code> נראה כמו ״אם יש ערך״, אבל הוא גם
      <strong>דוחה את 0</strong> — שהוא לעיתים קרובות ערך תקין לגמרי.
      אותו דבר קורה למחרוזת ריקה.
    </p>
    <p class="note-line">
      כשרוצים באמת לבדוק <strong>קיום</strong>, בודקים במפורש:
      <code>if (count !== undefined)</code> או
      <code>if (value != null)</code> שתופס גם <code>null</code>
      וגם <code>undefined</code>.
    </p>
  </div>
</div>

## תנאים מורכבים

<div class="box">
  <div class="box-body">
    <p>
      מחברים תנאים עם <code>&&</code> (וגם), <code>||</code> (או)
      ו־<code>!</code> (היפוך) — כולם מפרק Operators.
    </p>
    <p class="note-line">
      כשיש יותר משני תנאים, <strong>סוגריים עגולים</strong> עושים את
      הכוונה ברורה גם אם אינם נדרשים תחבירית.
    </p>
  </div>
</div>

```demo
<script>
  const age = 25;
  const hasTicket = true;
  const isBanned = false;

  if (age >= 18 && hasTicket && !isBanned) {
    console.log("Welcome in");
  }

  const day = "Saturday";
  if (day === "Saturday" || day === "Sunday") {
    console.log("It is the weekend");
  }
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אי אפשר לשרשר השוואות</div>
  <div class="box-body">
    <p>
      במתמטיקה כותבים <code>0 &lt; x &lt; 10</code>. ב־JavaScript
      זה <strong>חוקי תחבירית אבל שגוי לוגית</strong>: הביטוי מחושב
      משמאל לימין, וההשוואה הראשונה מחזירה <code>true</code> או
      <code>false</code> — שמומר ל־1 או ל־0 בהשוואה הבאה.
    </p>
    <p class="note-line">
      הכתיבה הנכונה: <code>x &gt; 0 && x &lt; 10</code>.
    </p>
  </div>
</div>

```demo
<script>
  const x = 50;
  console.log(0 < x < 10);
  console.log(x > 0 && x < 10);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      השורה הראשונה החזירה <code>true</code> למרות ש־50 אינו קטן מ־10:
      <code>0 &lt; 50</code> נתן <code>true</code>, ואז <code>true &lt; 10</code>
      הפך ל־<code>1 &lt; 10</code> — שהוא אמת. בדיוק המרת הטיפוסים
      מ״מוזרויות השפה״ בפרק Overview.
    </p>
  </div>
</div>

## הקיצור התנאי

<div class="box">
  <div class="box-body">
    <p>
      <code>condition ? a : b</code> מחזיר <strong>ערך</strong>,
      ולכן הוא מתאים להשמה קצרה — לא להחלפת <code>if</code> מלא.
    </p>
    <p class="note-line">
      קינון של ternary בתוך ternary הוא כמעט תמיד סימן
      שצריך <code>if</code> רגיל או <code>switch</code>.
    </p>
  </div>
</div>

```demo
<script>
  const age = 20;
  const status = age >= 18 ? "adult" : "minor";
  console.log(status);

  const items = 0;
  console.log(`You have ${items} item${items === 1 ? "" : "s"}`);
</script>
```

## switch

<div class="box">
  <div class="box-body">
    <p>
      כשבודקים <strong>ערך אחד</strong> מול רשימת אפשרויות,
      <code>switch</code> קריא יותר משרשרת <code>else if</code>.
      ההשוואה שהוא עושה היא <strong><code>===</code></strong>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⬇️</span>break הוא חובה</div>
  <div class="box-body">
    <p>
      בלי <code>break</code> הביצוע <strong>ממשיך לזלוג</strong>
      אל ה־<code>case</code> הבא — גם אם הוא לא מתאים.
      זו התנהגות מכוונת, אבל היא מקור נפוץ לבאגים.
    </p>
  </div>
</div>

```demo
<script>
  function describe(fruit) {
    switch (fruit) {
      case "apple":
      case "cherry":
        return "red";
      case "banana":
        return "yellow";
      default:
        return "unknown";
    }
  }

  console.log(describe("apple"));
  console.log(describe("cherry"));
  console.log(describe("banana"));
  console.log(describe("kiwi"));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב ש־<code>"apple"</code> ו־<code>"cherry"</code> חולקים
      בכוונה את אותו בלוק — זה השימוש הלגיטימי בזליגה.
      כאן <code>return</code> מחליף את <code>break</code>,
      כי הוא יוצא מהפונקציה כולה.
    </p>
  </div>
</div>

## החזרה מוקדמת

<div class="box example">
  <div class="box-head"><span class="icon">🚪</span>guard clause</div>
  <div class="box-body">
    <p>
      במקום לעטוף את כל הלוגיקה בתוך <code>if</code> ענק,
      מטפלים קודם במקרי הקצה ו<strong>יוצאים מוקדם</strong>.
    </p>
    <p class="note-line">
      התוצאה שטוחה וקריאה יותר, ובלי קינון עמוק.
      זה בדיוק הדפוס <code>if (!btn) return;</code>
      שראינו ב־event delegation בפרק Events.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">שטוח וקריא</div>
    <div class="compare-body">
<pre><code class="language-js">function pay(user) {
  if (!user) return "no user";
  if (!user.card) return "no card";
  return "charged";
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">מקונן</div>
    <div class="compare-body">
<pre><code class="language-js">function pay(user) {
  if (user) {
    if (user.card) {
      return "charged";
    } else {
      return "no card";
    }
  } else {
    return "no user";
  }
}</code></pre>
    </div>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>=</code> במקום <code>===</code></strong> — <code>if (x = 5)</code> היא <strong>השמה</strong>, והיא כמעט תמיד אמת.</li>
      <li><strong><code>==</code> במקום <code>===</code></strong> — המרת טיפוסים לא צפויה.</li>
      <li><strong><code>if (count)</code> כשאפס תקין</strong> — 0 הוא falsy וייפסל.</li>
      <li><strong>הנחה ש־<code>[]</code> שקרי</strong> — מערך ריק הוא <strong>truthy</strong>.</li>
      <li><strong>שרשור השוואות</strong> — <code>0 &lt; x &lt; 10</code> לא עושה מה שנראה.</li>
      <li><strong>סדר תנאים שגוי</strong> — התנאי הרחב תופס את המקרים הצרים.</li>
      <li><strong>שכחת <code>break</code></strong> — זליגה ל־<code>case</code> הבא.</li>
      <li><strong>נקודה־פסיק אחרי <code>if</code></strong> — <code>if (x);</code> מסיים את התנאי, והבלוק ירוץ תמיד.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>if</code> / <code>else if</code> / <code>else</code> — נבדקים <strong>בסדר</strong> ועוצרים בראשון שמתקיים.</li>
      <li>בטווחים מתחילים <strong>מהקצה הצר</strong>.</li>
      <li>כל ערך מומר ל־boolean. שישה ערכים שקריים בלבד, <strong>וכל השאר אמיתי</strong>.</li>
      <li><code>if (count)</code> <strong>דוחה גם 0</strong> — לבדיקת קיום בודקים במפורש.</li>
      <li><code>&&</code>, <code>||</code> ו־<code>!</code> לתנאים מורכבים; סוגריים למען הבהירות.</li>
      <li><strong>אי אפשר לשרשר השוואות</strong> — צריך <code>x &gt; 0 && x &lt; 10</code>.</li>
      <li><code>? :</code> מחזיר <strong>ערך</strong>; לא מקננים אותו.</li>
      <li><code>switch</code> משווה ב־<code>===</code>, ו־<strong><code>break</code> הוא חובה</strong>.</li>
      <li><strong>guard clause</strong> — לטפל במקרי קצה ולצאת מוקדם.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה יקרה ב-`if (x = 5) { ... }`?
- התנאי ייבדק אם x שווה ל-5
+ זו השמה ולא השוואה — x יקבל 5, והתנאי יתקיים כמעט תמיד
- תיזרק שגיאת תחביר
- התנאי לעולם לא יתקיים
= להשוואה משתמשים ב-`===`. סימן שווה בודד תמיד מבצע השמה.

? למה `if (count)` בעייתי כשרוצים לבדוק אם התקבל ערך?
- כי `count` חייב להיות מחרוזת
+ כי 0 הוא falsy, ולכן ערך תקין לחלוטין כמו 0 ייפסל
- כי `if` לא עובד על מספרים
- כי צריך `==` במקום
= לבדיקת קיום בודקים במפורש, למשל `count !== undefined`.

? מה יחזיר `0 < 50 < 10`?
- `false`, כי 50 גדול מ-10
+ `true` — `0 < 50` מחזיר true, שמומר ל-1, ואז `1 < 10` אמת
- שגיאת תחביר
- `NaN`
= הכתיבה הנכונה היא `x > 0 && x < 10`.

? מה קורה ב-`switch` כששוכחים `break`?
- ה-case הבא ידולג
+ הביצוע ימשיך לזלוג אל ה-case הבא גם אם הוא לא מתאים
- תיזרק שגיאה
- ה-switch כולו יידלג
= לפעמים משתמשים בזליגה בכוונה, כדי ששני מקרים יחלקו אותו בלוק.

? מהו guard clause?
- תנאי שעוטף את כל הפונקציה
+ טיפול במקרי הקצה בתחילת הפונקציה ויציאה מוקדמת, כדי להימנע מקינון עמוק
- בדיקה שמונעת שגיאות תחביר
- סוג של לולאה
= זה בדיוק הדפוס `if (!btn) return;` מ-event delegation.
```
