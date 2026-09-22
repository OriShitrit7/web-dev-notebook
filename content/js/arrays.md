# Arrays

<p class="lead">
מערך הוא רשימה מסודרת של ערכים תחת שם אחד. זה מבנה הנתונים שתשתמשי בו
הכי הרבה — כל רשימת מוצרים, כל תוצאות חיפוש וכל טבלה מתחילים ממנו.
כאן נכיר גם את המתודות שהופכות עבודה עם נתונים לשורה אחת.
</p>

## יצירה וגישה

<div class="box">
  <div class="box-body">
    <p>
      מערך נכתב בסוגריים מרובעים, והאינדקסים מתחילים מ־<strong>0</strong>.
      מערך יכול להכיל ערכים מטיפוסים שונים, אם כי בקוד מסודר
      עדיף לא לערבב בלי סיבה.
    </p>
  </div>
</div>

```demo
<script>
  const numbers = [1, 2, 3, 4, 5];

  console.log(numbers[0]);
  console.log(numbers[4]);
  console.log(numbers.length);
  console.log(numbers[numbers.length - 1]);
  console.log(numbers[100]);

  const mixed = [1, "hello", true, null];
  console.log(mixed);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🔐</span>const ומערכים</div>
  <div class="box-body">
    <p>
      זו הנקודה שהבטחנו לחזור אליה בפרק Variables:
      <code>const</code> נועל את <strong>ההפניה</strong>, לא את התוכן.
    </p>
    <ul>
      <li><code>arr.push(4)</code> — <strong>מותר</strong>. שינינו את התוכן.</li>
      <li><code>arr = [10, 20]</code> — <strong>אסור</strong>. זו השמה מחדש למשתנה.</li>
    </ul>
  </div>
</div>

## הוספה והסרה

| מתודה | מה היא עושה | משנה את המקור? |
| --- | --- | --- |
| `push(x)` | מוסיף **בסוף** | כן |
| `pop()` | מסיר ומחזיר מה**סוף** | כן |
| `unshift(x)` | מוסיף ב**התחלה** | כן |
| `shift()` | מסיר ומחזיר מה**התחלה** | כן |
| `splice(i, n)` | מסיר `n` איברים מאינדקס `i` | כן |
| `slice(a, b)` | מחזיר **עותק** של קטע | **לא** |

```demo
<script>
  const arr = [1, 2, 3];

  arr.push(4);
  console.log(arr);

  const last = arr.pop();
  console.log(last, arr);

  arr.unshift(0);
  console.log(arr);

  const copy = arr.slice(0, 2);
  console.log("slice:", copy, "original:", arr);

  arr.splice(1, 1);
  console.log("after splice:", arr);
</script>
```

<div class="keypoint">
<strong>ההבחנה שחשוב להפנים:</strong> יש מתודות ש<strong>משנות את המערך המקורי</strong>
(<code>push</code>, <code>pop</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code>),
ויש כאלה ש<strong>מחזירות מערך חדש</strong> (<code>slice</code>, <code>map</code>,
<code>filter</code>, <code>concat</code>). בלבול ביניהן הוא מקור נפוץ לבאגים.
</div>

## חיפוש

```demo
<script>
  const fruits = ["apple", "banana", "cherry"];

  console.log(fruits.includes("banana"));
  console.log(fruits.indexOf("cherry"));
  console.log(fruits.indexOf("kiwi"));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>indexOf</code> מחזיר <strong><code>-1</code></strong> כשאין התאמה —
      ולא <code>null</code> ולא <code>undefined</code>. לכן הבדיקה היא
      <code>indexOf(x) !== -1</code>, או פשוט <code>includes</code> שקריא יותר.
    </p>
  </div>
</div>

## map

<div class="box theory">
  <div class="box-head"><span class="icon">🔄</span>מערך חדש באותו אורך</div>
  <div class="box-body">
    <p>
      <code>map</code> מריץ פונקציה על כל איבר ו<strong>מחזיר מערך חדש</strong>
      שבו כל איבר הוא התוצאה. המערך המקורי לא משתנה.
    </p>
    <p class="note-line">
      האורך <strong>תמיד נשמר</strong> — אם נכנסו 3 איברים, יצאו 3.
    </p>
  </div>
</div>

```demo
<script>
  const numbers = [1, 2, 3];

  const tripled = numbers.map(function (num) {
    return num * 3;
  });

  const short = numbers.map(n => n * 3);

  console.log(tripled);
  console.log(short);
  console.log("original:", numbers);

  const names = ["ori", "dana"];
  console.log(names.map(n => n.toUpperCase()));
</script>
```

## filter

<div class="box">
  <div class="box-body">
    <p>
      <code>filter</code> מחזיר מערך חדש עם <strong>האיברים שעברו תנאי</strong>.
      הפונקציה חייבת להחזיר <code>true</code> או <code>false</code>.
    </p>
    <p class="note-line">
      ההבדל מ־<code>map</code>: <code>map</code> <strong>משנה</strong> כל איבר
      ושומר על האורך, <code>filter</code> <strong>בוחר</strong> איברים
      והאורך מתקצר.
    </p>
  </div>
</div>

```demo
<script>
  const numbers = [1, 2, 3, 4, 5, 6];

  const big = numbers.filter(n => n > 4);
  const even = numbers.filter(n => n % 2 === 0);

  console.log(big);
  console.log(even);
  console.log(numbers.filter(n => n > 100));
</script>
```

## find, some, every

| מתודה | מחזירה |
| --- | --- |
| `find(fn)` | את **האיבר הראשון** שעומד בתנאי, או `undefined` |
| `findIndex(fn)` | את האינדקס שלו, או `-1` |
| `some(fn)` | `true` אם **לפחות אחד** עומד בתנאי |
| `every(fn)` | `true` אם **כולם** עומדים בתנאי |

```demo
<script>
  const users = [
    { name: "Ori", age: 22 },
    { name: "Dana", age: 17 },
    { name: "Noa", age: 30 }
  ];

  console.log(users.find(u => u.age > 25));
  console.log(users.find(u => u.age > 99));
  console.log(users.some(u => u.age < 18));
  console.log(users.every(u => u.age < 18));
  console.log(users.filter(u => u.age >= 18).map(u => u.name));
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">⛓️</span>שרשור</div>
  <div class="box-body">
    <p>
      מכיוון ש־<code>filter</code> ו־<code>map</code> מחזירים מערך,
      אפשר לשרשר אותם — בדיוק כמו chaining של מחרוזות בפרק Strings.
      השורה האחרונה למעלה קוראת: ״סנני בגירים, ואז קחי רק את השמות״.
    </p>
  </div>
</div>

## sort

<div class="box warn">
  <div class="box-head"><span class="icon">🔢</span>ברירת המחדל ממיינת כמחרוזות</div>
  <div class="box-body">
    <p>
      <code>sort()</code> בלי ארגומנט ממיר כל איבר למחרוזת וממיין
      לפי סדר לקסיקוגרפי. לכן <code>[10, 9, 8]</code> יוצא
      <code>[10, 8, 9]</code> — כי <code>"10"</code> קטן מ־<code>"8"</code>.
    </p>
    <p>
      למספרים מעבירים <strong>פונקציית השוואה</strong>:
      <code>(a, b) => a - b</code> לסדר עולה,
      ו־<code>(a, b) => b - a</code> ליורד.
    </p>
    <p class="note-line">
      ועוד נקודה: <strong><code>sort</code> משנה את המערך המקורי</strong>
      ולא רק מחזיר חדש.
    </p>
  </div>
</div>

```demo
<script>
  const a = [10, 9, 8, 7, 6];
  console.log([...a].sort());
  console.log([...a].sort((x, y) => x - y));
  console.log([...a].sort((x, y) => y - x));

  const names = ["Noa", "ori", "Dana"];
  console.log([...names].sort((x, y) => x.localeCompare(y)));

  const nums = [3, 1, 2];
  nums.sort((x, y) => x - y);
  console.log("mutated:", nums);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      השתמשנו ב־<code>[...a]</code> כדי למיין <strong>עותק</strong>
      ולא לשנות את המקור בכל שורה. זה ה־spread, ומיד נכיר אותו.
    </p>
  </div>
</div>

## Spread

<div class="box theory">
  <div class="box-head"><span class="icon">✨</span>שלוש נקודות</div>
  <div class="box-body">
    <p>
      <code>...</code> ״פורס״ את תוכן המערך למקום חדש. שני שימושים עיקריים:
    </p>
    <ul>
      <li><strong>שכפול</strong> — <code>const copy = [...arr]</code></li>
      <li><strong>מיזוג</strong> — <code>const all = [...a, ...b]</code></li>
    </ul>
    <p class="note-line">
      בצד שמאל של השמה הוא עושה את ההפך ואוסף את השארית
      (<em>rest</em>): <code>const [first, ...others] = arr</code>.
    </p>
  </div>
</div>

```demo
<script>
  const a = [1, 2];
  const b = [3, 4];

  console.log([...a, ...b]);

  const original = [1, 2, 3];
  const copy = [...original];
  copy.push(99);
  console.log("original:", original, "copy:", copy);

  const [first, ...rest] = [10, 20, 30, 40];
  console.log(first, rest);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">📎</span>העתקה שטוחה</div>
  <div class="box-body">
    <p>
      <code>[...arr]</code> מעתיק רק <strong>רמה אחת</strong>.
      אם המערך מכיל אובייקטים, שני המערכים יצביעו
      על <strong>אותם אובייקטים</strong>.
    </p>
    <p class="note-line">
      זה קשור לנושא ההפניות שנפרק בפרק הבא, <strong>Objects</strong>.
    </p>
  </div>
</div>

## reduce

<div class="box">
  <div class="box-body">
    <p>
      <code>reduce</code> מצמצם מערך ל<strong>ערך יחיד</strong>.
      הוא מקבל פונקציה עם <strong>מצטבר</strong> ואיבר נוכחי,
      וערך התחלתי.
    </p>
    <p class="note-line">
      השימוש הנפוץ ביותר הוא סכום. לרוב המקרים האחרים
      <code>map</code> ו־<code>filter</code> קריאים יותר.
    </p>
  </div>
</div>

```demo
<script>
  const prices = [100, 250, 40];

  const total = prices.reduce((sum, price) => sum + price, 0);
  console.log(total);

  console.log([].reduce((s, x) => s + x, 0));
</script>
```

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>sort()</code> על מספרים בלי פונקציית השוואה</strong> — ממיין כמחרוזות.</li>
      <li><strong>שכחה ש־<code>sort</code> ו־<code>splice</code> משנים את המקור</strong>.</li>
      <li><strong>ציפייה ש־<code>map</code> יסנן</strong> — הוא שומר על האורך. לסינון יש <code>filter</code>.</li>
      <li><strong>שכחת <code>return</code> ב־<code>map</code> או ב־<code>filter</code></strong> — מתקבל מערך של <code>undefined</code>.</li>
      <li><strong>בדיקת <code>indexOf</code> עם <code>if (arr.indexOf(x))</code></strong> — אינדקס 0 הוא falsy. משווים ל־<code>-1</code>.</li>
      <li><strong><code>arr.length = 0</code> בטעות</strong> — מרוקן את המערך.</li>
      <li><strong>השוואת מערכים ב־<code>===</code></strong> — תמיד <code>false</code>, כי אלה שתי הפניות שונות.</li>
      <li><strong>הנחה ש־<code>[...arr]</code> מעתיק לעומק</strong> — הוא שטוח.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>אינדקס מ־<strong>0</strong>; האחרון הוא <code>length - 1</code>; מחוץ לטווח מחזיר <code>undefined</code>.</li>
      <li><code>const</code> נועל את ההפניה — <code>push</code> מותר, השמה מחדש אסורה.</li>
      <li><strong>משנות מקור:</strong> <code>push</code>, <code>pop</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code>.</li>
      <li><strong>מחזירות חדש:</strong> <code>slice</code>, <code>map</code>, <code>filter</code>, <code>concat</code>.</li>
      <li><code>map</code> <strong>שומר על האורך</strong>; <code>filter</code> מקצר אותו.</li>
      <li><code>find</code> מחזיר איבר או <code>undefined</code>; <code>indexOf</code> מחזיר <code>-1</code>.</li>
      <li><code>sort()</code> ממיין <strong>כמחרוזות</strong> — למספרים צריך <code>(a, b) => a - b</code>.</li>
      <li><code>[...arr]</code> משכפל ומזג, אבל <strong>שטוח בלבד</strong>.</li>
      <li><code>reduce</code> מצמצם לערך יחיד, בעיקר לסכום.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה יחזיר `[10, 9, 8].sort()`?
- `[8, 9, 10]`
+ `[10, 8, 9]` — ברירת המחדל ממיינת כמחרוזות, ו-`"10"` קטן מ-`"8"`
- `[9, 10, 8]`
- שגיאה
= למספרים מעבירים פונקציית השוואה: `(a, b) => a - b`.

? מה ההבדל בין `map` ל-`filter`?
- אין הבדל מעשי
+ `map` משנה כל איבר ושומר על אורך המערך, ו-`filter` בוחר איברים לפי תנאי ולכן האורך מתקצר
- `map` משנה את המערך המקורי
- `filter` עובד רק על מספרים
= שניהם מחזירים מערך חדש ולא נוגעים במקור.

? הגדרת `const arr = [1,2,3]`. אילו מהפעולות מותרת?
- `arr = [4,5,6]`
+ `arr.push(4)` — const נועל את ההפניה, לא את התוכן
- שתיהן אסורות
- שתיהן מותרות
= השמה מחדש למשתנה עצמו היא מה שייתן TypeError.

? למה `if (arr.indexOf(x))` היא בדיקה שגויה?
- כי `indexOf` אינו קיים
+ כי כשהאיבר נמצא באינדקס 0 התוצאה היא 0, שהוא falsy, והתנאי ייכשל
- כי `indexOf` מחזיר מחרוזת
- כי צריך `await`
= בודקים `!== -1`, או פשוט משתמשים ב-`includes`.

? מה יקרה ל-`original` אחרי `const copy = [...original]; copy.push(99);`?
- יתווסף לו גם 99
+ הוא יישאר ללא שינוי — spread יצר מערך חדש
- הוא יתרוקן
- תיזרק שגיאה
= אבל ההעתקה שטוחה: אובייקטים שבתוך המערך עדיין משותפים לשניהם.
```
