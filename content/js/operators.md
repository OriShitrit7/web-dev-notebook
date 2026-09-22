# Operators

<p class="lead">
אופרטורים הם הסימנים שמחברים ערכים לביטוי: חישוב, השוואה ולוגיקה.
רובם מוכרים מכל שפה אחרת — אבל דווקא כאן מסתתרות כמה מההתנהגויות
המפורסמות ביותר של JavaScript, שנובעות כולן מאותו מקור:
<strong>המרת טיפוסים אוטומטית</strong>.
</p>

## אופרטורים חשבוניים — Arithmetic Operators

| אופרטור | פעולה |
| --- | --- |
| `+` `-` `*` `/` | חיבור, חיסור, כפל, חילוק |
| `%` | **שארית** מחלוקה |
| `**` | חזקה |
| `++` `--` | הגדלה או הקטנה ב־1 |

```demo
<script>
  console.log(7 + 3);
  console.log(7 % 3);
  console.log(2 ** 10);
  console.log(7 / 2);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב לשורה האחרונה: <code>7 / 2</code> נתן <strong>3.5</strong> ולא 3.
      מכיוון שיש טיפוס מספרי אחד בלבד, <strong>אין חילוק שלמים</strong>
      כמו ב־C++‎. לקבלת מנה שלמה משתמשים ב־<code>Math.floor(7 / 2)</code>.
    </p>
  </div>
</div>

## אופרטורי השמה — Assignment Operators

<div class="box">
  <div class="box-body">
    <p>
      <code>+=</code>, <code>-=</code>, <code>*=</code> ו־<code>/=</code>
      מקצרים פעולה על המשתנה עצמו. <code>count += 1</code> זהה ל־<code>count = count + 1</code>.
    </p>
    <p class="note-line">
      כל אלה דורשים <code>let</code>, כי הם משנים את הערך —
      על <code>const</code> הם ייתנו שגיאה.
    </p>
  </div>
</div>

## שרשור מחרוזות — String Operators

<div class="box warn">
  <div class="box-head"><span class="icon">🧲</span>הסימן + הוא שני אופרטורים שונים</div>
  <div class="box-body">
    <p>
      ל־<code>+</code> יש שני תפקידים: חיבור מספרים, <strong>ושרשור מחרוזות</strong>.
      כשאחד הצדדים הוא מחרוזת, JavaScript מחליטה שמדובר בשרשור —
      ו<strong>ממירה את הצד השני לטקסט</strong>.
    </p>
    <p class="note-line">
      לכן <code>5 + "5"</code> אינו 10 אלא המחרוזת <code>"55"</code>.
      זו אחת ההתנהגויות שהכי מפתיעות בהתחלה.
    </p>
  </div>
</div>

```demo
<script>
  console.log(5 + 5);
  console.log(5 + "5");
  console.log("5" + 5);
  console.log("5" - 2);
  console.log(1 + 2 + "3");
  console.log("1" + 2 + 3);
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">🔍</span>מה קרה בשתי השורות האחרונות</div>
  <div class="box-body">
    <p>
      האופרטורים פועלים <strong>משמאל לימין</strong>:
    </p>
    <ul>
      <li><code>1 + 2 + "3"</code> — קודם <code>1 + 2 = 3</code> (מספרים), ואז <code>3 + "3"</code> נותן <code>"33"</code>.</li>
      <li><code>"1" + 2 + 3</code> — קודם <code>"1" + 2</code> נותן <code>"12"</code>, ואז <code>"12" + 3</code> נותן <code>"123"</code>.</li>
    </ul>
    <p class="note-line">
      שימי לב ש־<code>"5" - 2</code> דווקא <strong>כן</strong> נתן 3.
      הסיבה: ל־<code>-</code> אין משמעות של שרשור, ולכן JavaScript
      ממירה את המחרוזת למספר. רק ל־<code>+</code> יש את הכפילות הזו.
    </p>
  </div>
</div>

## מנגנון ההשוואה — Comparison Operators

| אופרטור | בודק |
| --- | --- |
| `>` `<` `>=` `<=` | גדול, קטן, וכולל שוויון |
| `==` | שוויון **אחרי המרת טיפוסים** |
| `===` | שוויון **של ערך וגם של טיפוס** |
| `!=` / `!==` | הגרסאות ההפוכות |

<div class="box theory">
  <div class="box-head"><span class="icon">⚖️</span>מנגנון ההשוואה (Equality)</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>==</code> (Equality):</strong> משווה בין ערכים לאחר המרה אוטומטית
        של טיפוסים (למשל, המחרוזת <code>"4"</code> תהיה שווה למספר <code>4</code>).
        אלגוריתם ההמרה סבוך ולא תמיד צפוי.
      </li>
      <li>
        <strong><code>===</code> (Strict Equality):</strong> השוואה קשיחה. בודק גם את
        הטיפוס וגם את הערך. אם הטיפוסים שונים, התשובה <code>false</code> מיד.
        <strong>מומלץ לשימוש כברירת מחדל</strong> למניעת באגים.
      </li>
    </ul>
  </div>
</div>

```demo
<script>
  const a = 4;     // number
  const b = "4";   // string

  console.log(a == b);
  console.log(a === b);

  console.log(0 == "");
  console.log(0 == false);
  console.log(null == undefined);
</script>
```

<div class="keypoint">
<strong>השתמשי תמיד ב־<code>===</code>.</strong> שלוש השורות האחרונות בפאנל
מראות למה: כולן <code>true</code> תחת <code>==</code>, וכולן היו
<code>false</code> תחת <code>===</code>. הן גם מדגימות עד כמה קשה
לזכור בעל פה מה מתחבר למה.
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      היוצא מן הכלל היחיד שנפוץ בקוד אמיתי הוא
      <code>value == null</code>, שתופס גם <code>null</code> וגם
      <code>undefined</code> בבת אחת. גם אותו אפשר לכתוב במפורש,
      וזה בדרך כלל ברור יותר.
    </p>
  </div>
</div>

## אופרטורים לוגיים — Logical Operators

| אופרטור | משמעות |
| --- | --- |
| `&&` | וגם — אמת רק אם **שני** הצדדים אמת |
| `\|\|` | או — אמת אם **לפחות אחד** אמת |
| `!` | היפוך |

<div class="box theory">
  <div class="box-head"><span class="icon">⚡</span>Short-circuit</div>
  <div class="box-body">
    <p>
      שני האופרטורים האלה <strong>עוצרים ברגע שהתשובה ידועה</strong>,
      ולא טורחים לבדוק את הצד השני. זה נקרא <strong>short-circuit</strong>:
    </p>
    <ul>
      <li><code>&&</code> — אם הצד הראשון שקרי, התוצאה שקרית ממילא. הצד השני לא ייבדק.</li>
      <li><code>||</code> — אם הצד הראשון אמיתי, התוצאה אמיתית ממילא. הצד השני לא ייבדק.</li>
    </ul>
    <p class="note-line">
      ויש כאן פרט חשוב: הם מחזירים את <strong>הערך עצמו</strong>,
      לא <code>true</code> או <code>false</code>. לכן
      <code>username || "Guest"</code> הוא דפוס מקובל לערך ברירת מחדל.
    </p>
  </div>
</div>

```demo
<script>
  const username = "";
  const displayName = username || "Guest";
  console.log(displayName);

  const isAdmin = true;
  isAdmin && console.log("Show admin panel");

  console.log(true && "second value");
  console.log(false || "fallback");
</script>
```

## ערכים אמיתיים ושקריים

<div class="box theory">
  <div class="box-head"><span class="icon">🎭</span>truthy ו־falsy</div>
  <div class="box-body">
    <p>
      בכל מקום שבו מצפים לתנאי, JavaScript ממירה את הערך ל־boolean.
      רשימת הערכים ה<strong>שקריים</strong> קצרה — וכדאי לזכור אותה בעל פה:
    </p>
    <p>
      <code>false</code>, <code>0</code>, <code>""</code> (מחרוזת ריקה),
      <code>null</code>, <code>undefined</code>, <code>NaN</code>
    </p>
    <p class="note-line">
      <strong>כל השאר אמיתי</strong> — כולל <code>"0"</code>, המחרוזת
      <code>"false"</code>, מערך ריק <code>[]</code> ואובייקט ריק <code>{}</code>.
      זו מלכודת נפוצה: מערך ריק הוא <strong>truthy</strong>.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>כשאפס הוא ערך תקין</div>
  <div class="box-body">
    <p>
      ל־<code>||</code> יש חיסרון: הוא מחליף <strong>כל</strong> ערך שקרי,
      כולל <code>0</code> ומחרוזת ריקה. אם המשתמש באמת בחר 0,
      הדפוס <code>value || 10</code> ידרוס את הבחירה שלו.
    </p>
    <p>
      הפתרון הוא <code>??</code> — <strong>nullish coalescing</strong>,
      שמחליף <strong>רק</strong> <code>null</code> ו־<code>undefined</code>.
    </p>
  </div>
</div>

```demo
<script>
  const quantity = 0;
  console.log(quantity || 10);
  console.log(quantity ?? 10);
</script>
```

## האופרטור התנאי — Ternary Operator

<div class="box">
  <div class="box-body">
    <p>
      כתיבה מקוצרת של תנאי, בשורה אחת:
    </p>
    <p><code>condition ? valueIfTrue : valueIfFalse</code></p>
    <p class="note-line">
      נקרא <strong>ternary</strong> כי הוא האופרטור היחיד בשפה
      שמקבל שלושה חלקים. מתאים לבחירה קצרה בין שני ערכים —
      לתנאים מורכבים עדיף <code>if</code>, שנראה בפרק הבא.
    </p>
  </div>
</div>

```demo
<script>
  const age = 20;
  const status = age >= 18 ? "adult" : "minor";
  console.log(status);
</script>
```

## אופרטורים אונריים — Unary Operators

<div class="box theory">
  <div class="box-head"><span class="icon">☝️</span>אופרנד אחד בלבד</div>
  <div class="box-body">
    <p>
      אופרטור אונרי פועל על <strong>ערך יחיד</strong>, ולא על שניים:
    </p>
    <ul>
      <li><strong><code>+</code></strong> — <strong>ממיר למספר</strong>. <code>+"5"</code> הוא המספר 5.</li>
      <li><strong><code>-</code></strong> — הופך סימן, וגם הוא ממיר למספר.</li>
      <li><strong><code>++</code> / <code>--</code></strong> — הגדלה והקטנה ב־1.</li>
      <li><strong><code>!</code></strong> — היפוך בוליאני.</li>
      <li><strong><code>typeof</code></strong> — מחזיר את שם הטיפוס.</li>
      <li><strong><code>delete</code></strong> — מוחק שדה מאובייקט.</li>
    </ul>
    <p class="note-line">
      ה־<code>+</code> האונרי הוא קיצור שימושי להמרת קלט ממשתמש —
      בדיוק הבעיה שנפגוש בפרק User Input &amp; Forms.
    </p>
  </div>
</div>

```demo
<script>
  console.log(+"5" + 1);
  console.log(-"5");
  console.log(!true, !0);
  console.log(typeof 45);

  let n = 5;
  console.log(n++, n);
  console.log(++n, n);

  const user = { name: "Ori", temp: 1 };
  delete user.temp;
  console.log(user);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">↔️</span>n++ מול ++n</div>
  <div class="box-body">
    <p>
      שניהם מגדילים ב־1, אבל <strong>מחזירים ערך שונה</strong>:
      <code>n++</code> מחזיר את הערך <strong>לפני</strong> ההגדלה,
      ו־<code>++n</code> את הערך <strong>אחרי</strong>.
    </p>
    <p class="note-line">
      בפאנל רואים את זה: <code>n++</code> הדפיס 5 בזמן ש־<code>n</code>
      כבר היה 6. כשהערך המוחזר לא מעניין — בלולאה למשל — אין שום הבדל.
    </p>
  </div>
</div>

## אופרטורי יחס — Relational Operators

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong><code>in</code></strong> — האם <strong>מפתח קיים</strong> באובייקט.</li>
      <li><strong><code>instanceof</code></strong> — האם ערך נוצר מסוג מסוים.</li>
    </ul>
    <p class="note-line">
      <code>instanceof</code> עובד על <strong>אובייקטים</strong>, ולכן
      <code>"hi" instanceof String</code> הוא <code>false</code> —
      מחרוזת רגילה היא ערך פרימיטיבי ולא אובייקט.
    </p>
  </div>
</div>

```demo
<script>
  const user = { name: "Ori" };

  console.log("name" in user);
  console.log("age" in user);

  console.log([] instanceof Array);
  console.log({} instanceof Object);
  console.log("hi" instanceof String);

  console.log(Array.isArray([]));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      לבדיקה אם ערך הוא מערך <strong>מעדיפים <code>Array.isArray()</code></strong>
      על פני <code>instanceof</code>, כי הוא עובד נכון גם כשהמערך הגיע
      מהקשר אחר — למשל מתוך <code>&lt;iframe&gt;</code>.
    </p>
  </div>
</div>

## שרשור אופציונלי — Optional Chaining

<div class="box theory">
  <div class="box-head"><span class="icon">🔗</span>האופרטור ‎?.‎</div>
  <div class="box-body">
    <p>
      גישה לשדה מקונן שלא קיים <strong>מפילה את הסקריפט</strong>:
      אם <code>obj.contact</code> הוא <code>undefined</code>, אז
      <code>obj.contact.phone</code> זורק שגיאה.
    </p>
    <p>
      <code>?.</code> פותר את זה: אם החלק שלפניו הוא <code>null</code>
      או <code>undefined</code>, כל הביטוי <strong>מחזיר
      <code>undefined</code></strong> במקום לזרוק שגיאה.
    </p>
  </div>
</div>

```demo
<script>
  const obj = { name: "Aman", address: { city: "Delhi" } };

  console.log(obj.address?.city);
  console.log(obj.contact?.phone);

  try {
    console.log(obj.contact.phone);
  } catch (error) {
    console.log("without ?. →", error.message);
  }
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">🧰</span>שלוש צורות</div>
  <div class="box-body">
    <ul>
      <li><strong><code>obj?.prop</code></strong> — שדה.</li>
      <li><strong><code>obj?.[key]</code></strong> — שדה לפי משתנה.</li>
      <li><strong><code>obj.method?.()</code></strong> — קריאה לפונקציה רק אם היא קיימת.</li>
    </ul>
    <p class="note-line">
      משלבים אותו מצוין עם <code>??</code>:
      <code>user.address?.city ?? "unknown"</code> — קח את העיר אם יש,
      ואחרת ערך ברירת מחדל.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>לא להשתמש בו בכל מקום</div>
  <div class="box-body">
    <p>
      <code>?.</code> נועד למקומות שבהם השדה <strong>באמת עשוי לא להתקיים</strong> —
      תשובה משרת, הגדרה אופציונלית. פיזור שלו על כל גישה
      <strong>מסתיר באגים</strong>: במקום שגיאה ברורה מקבלים
      <code>undefined</code> שממשיך לזרום הלאה.
    </p>
  </div>
</div>

## אופרטורי סיביות — Bitwise Operators

<div class="box">
  <div class="box-body">
    <p>
      פועלים על הייצוג <strong>הבינארי</strong> של המספר, סיבית אחר סיבית.
    </p>
  </div>
</div>

| אופרטור | שם | פעולה |
| --- | --- | --- |
| `&` | AND | 1 רק אם **בשתיהן** 1 |
| `\|` | OR | 1 אם **לפחות באחת** 1 |
| `^` | XOR | 1 אם **בדיוק באחת** 1 |
| `~` | NOT | הופך כל סיבית |
| `<<` | Left shift | הזזה שמאלה |
| `>>` | Right shift | הזזה ימינה, עם סימן |
| `>>>` | Zero-fill right shift | הזזה ימינה, בלי סימן |

```demo
<script>
  console.log(5 & 3);
  console.log(5 | 3);
  console.log(5 ^ 3);
  console.log(5 << 1);
  console.log(5 >> 1);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בפיתוח web כמעט לא משתמשים בהם. הם מופיעים בעיקר בגרפיקה,
      בהצפנה ובדגלי הרשאות. כדאי <strong>לזהות</strong> אותם —
      ובעיקר לא לבלבל בין <code>&</code> ל־<code>&&</code>
      ובין <code>|</code> ל־<code>||</code>, שהם אופרטורים שונים לגמרי.
    </p>
  </div>
</div>

## שניים שכדאי רק להכיר — Comma &amp; BigInt

<div class="box">
  <div class="box-body">
    <p>
      <strong>אופרטור הפסיק (Comma)</strong> מריץ כמה ביטויים ברצף
      ומחזיר את <strong>האחרון</strong>. כמעט לא בשימוש, פרט לחלק
      האתחול של לולאת <code>for</code>.
    </p>
    <p>
      <strong>BigInt</strong> הוא טיפוס למספרים שלמים <strong>גדולים מאוד</strong>,
      מעבר לגבול הבטוח של <code>number</code>. כותבים אותו עם
      <code>n</code> בסוף: <code>123n</code>.
    </p>
    <p class="note-line">
      <strong>אי אפשר לערבב</strong> BigInt עם <code>number</code> באותה
      פעולה חשבונית — זו שגיאה.
    </p>
  </div>
</div>

```demo
<script>
  const result = (1 + 2, 10 + 20);
  console.log(result);

  const big = 9007199254740991n;
  console.log(big + 1n);
  console.log(typeof big);

  try {
    console.log(big + 1);
  } catch (error) {
    console.log("mixing failed →", error.message);
  }
</script>
```

## שתי מלכודות מספריות

<div class="box warn">
  <div class="box-head"><span class="icon">🔢</span>0.1 + 0.2</div>
  <div class="box-body">
    <p>
      מספרים נשמרים בזיכרון בבסיס <strong>בינארי</strong>, ובבסיס הזה
      אי אפשר לייצג שברים עשרוניים מסוימים במדויק — בדיוק כפי
      שאי אפשר לכתוב שליש כשבר עשרוני סופי.
    </p>
    <p class="note-line">
      זו אינה תקלה של JavaScript אלא התנהגות של תקן המספרים
      שקיימת גם ב־Java ו־C++‎. פשוט כאן נתקלים בה מוקדם.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">❓</span>NaN</div>
  <div class="box-body">
    <p>
      <code>NaN</code> (<em>Not a Number</em>) הוא התוצאה של פעולה
      חשבונית שאין לה משמעות מספרית — למשל כפל של טקסט במספר.
    </p>
    <p>
      המוזרות שלו: <strong><code>NaN</code> אינו שווה לעצמו</strong>.
      לכן בודקים אותו עם הפונקציה <code>Number.isNaN()</code>
      ולא עם <code>===</code>.
    </p>
  </div>
</div>

```demo
<script>
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);

  const result = "hello" * 3;
  console.log(result);
  console.log(typeof result);
  console.log(result === result);
  console.log(Number.isNaN(result));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב ש־<code>typeof NaN</code> הוא דווקא <code>"number"</code> —
      הוא ערך מספרי שמייצג ״תוצאה לא חוקית״, ולא טיפוס נפרד.
      ושורת <code>result === result</code> מחזירה <code>false</code>,
      וזה הדבר היחיד בשפה שמתנהג כך.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>שימוש ב־<code>==</code></strong> — ההמרה האוטומטית מייצרת תוצאות לא צפויות. תמיד <code>===</code>.</li>
      <li><strong>ציפייה ש־<code>+</code> יחבר</strong> — אם צד אחד מחרוזת, זה שרשור.</li>
      <li><strong>ציפייה לחילוק שלמים</strong> — <code>7 / 2</code> הוא 3.5. צריך <code>Math.floor</code>.</li>
      <li><strong>השוואת עשרוניים עם <code>===</code></strong> — <code>0.1 + 0.2 !== 0.3</code>.</li>
      <li><strong>בדיקת <code>NaN</code> עם <code>===</code></strong> — הוא אינו שווה לעצמו. יש <code>Number.isNaN()</code>.</li>
      <li><strong>הנחה שמערך ריק הוא שקרי</strong> — <code>[]</code> הוא <strong>truthy</strong>.</li>
      <li><strong><code>||</code> כשאפס הוא ערך תקין</strong> — הוא ידרוס אותו. צריך <code>??</code>.</li>
      <li><strong><code>=</code> במקום <code>===</code> בתנאי</strong> — זו השמה, והיא כמעט תמיד תיתן אמת.</li>
      <li><strong>בלבול בין <code>&amp;</code> ל־<code>&amp;&amp;</code></strong> — הראשון פועל על סיביות, השני על תנאים.</li>
      <li><strong>פיזור <code>?.</code> על כל גישה</strong> — מסתיר באגים במקום לחשוף אותם.</li>
      <li><strong>ערבוב BigInt עם <code>number</code></strong> — זורק שגיאה.</li>
      <li><strong><code>"hi" instanceof String</code></strong> — <code>false</code>, כי מחרוזת רגילה אינה אובייקט.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>יש טיפוס מספרי אחד, ולכן <strong>אין חילוק שלמים</strong>.</li>
      <li><code>+</code> הוא גם חיבור וגם <strong>שרשור</strong>; מחרוזת באחד הצדדים מכריעה לטובת שרשור.</li>
      <li>אופרטורים פועלים <strong>משמאל לימין</strong>, ולכן הסדר משנה.</li>
      <li><strong><code>===</code> תמיד</strong>. <code>==</code> ממיר טיפוסים לפי אלגוריתם לא צפוי.</li>
      <li><code>&&</code> ו־<code>||</code> עושים <strong>short-circuit</strong> ומחזירים את <strong>הערך עצמו</strong>.</li>
      <li>שישה ערכים שקריים: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. <strong>כל השאר אמיתי.</strong></li>
      <li><code>??</code> מחליף <strong>רק</strong> <code>null</code> ו־<code>undefined</code> — בניגוד ל־<code>||</code>.</li>
      <li><code>condition ? a : b</code> לבחירה קצרה בין שני ערכים.</li>
      <li><strong>אונריים:</strong> <code>+</code> ממיר למספר, <code>n++</code> מחזיר <strong>לפני</strong> ההגדלה ו־<code>++n</code> אחריה.</li>
      <li><strong>יחס:</strong> <code>in</code> לקיום מפתח, <code>instanceof</code> לסוג — ולמערך עדיף <code>Array.isArray()</code>.</li>
      <li><strong><code>?.</code></strong> מחזיר <code>undefined</code> במקום לזרוק שגיאה, ומשתלב יפה עם <code>??</code>.</li>
      <li><strong>סיביות</strong> נדירים ב־web; העיקר לא לבלבל <code>&amp;</code> עם <code>&amp;&amp;</code>.</li>
      <li><strong>פסיק</strong> מחזיר את הביטוי האחרון; <strong>BigInt</strong> נכתב עם <code>n</code> ו<strong>אינו מתערבב</strong> עם <code>number</code>.</li>
      <li><code>0.1 + 0.2</code> אינו <code>0.3</code>, ו־<code>NaN</code> <strong>אינו שווה לעצמו</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה תהיה התוצאה של `5 + "5"`?
- המספר 10
+ המחרוזת `"55"` — כשצד אחד הוא מחרוזת, `+` מתפרש כשרשור וממיר את הצד השני לטקסט
- שגיאה
- `NaN`
= דווקא `"5" - 2` יחזיר 3, כי ל-`-` אין משמעות של שרשור.

? למה מומלץ להשתמש ב-`===` ולא ב-`==`?
- `===` מהיר יותר
+ כי `==` ממיר טיפוסים לפני ההשוואה לפי אלגוריתם סבוך, ולכן `0 == ""` ו-`0 == false` מחזירים true
- `==` אינו נתמך עוד
- `===` עובד רק על מספרים
= `===` בודק קודם את הטיפוס, ואם הוא שונה מחזיר false מיד.

? אילו מהערכים הבאים הוא truthy?
- `0`
- `""`
+ `[]` — מערך ריק הוא truthy, וזו מלכודת נפוצה
- `null`
= רשימת ה-falsy כולה: false, 0, "", null, undefined ו-NaN. כל השאר אמיתי.

? מתי `??` עדיף על `||`?
- כשרוצים לבדוק שוויון
+ כשאפס או מחרוזת ריקה הם ערכים תקינים — `||` היה דורס אותם, ו-`??` מחליף רק null ו-undefined
- `??` תמיד עדיף
- כשעובדים עם מערכים
= `quantity || 10` יחזיר 10 גם כשהכמות שנבחרה היא באמת 0.

? איך בודקים אם ערך הוא `NaN`?
- `value === NaN`
+ עם `Number.isNaN(value)`, כי `NaN` הוא הערך היחיד בשפה שאינו שווה לעצמו
- `typeof value === "NaN"`
- `value == null`
= `typeof NaN` מחזיר דווקא `"number"` — הוא ערך מספרי שמייצג תוצאה לא חוקית.
```
