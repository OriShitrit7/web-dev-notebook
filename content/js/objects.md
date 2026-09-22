# Objects

<p class="lead">
אם מערך הוא רשימה לפי <strong>מיקום</strong>, אובייקט הוא אוסף לפי <strong>שם</strong>.
זה המבנה שמייצג ״דבר״ — משתמש, מוצר, הגדרה — וזה גם הפורמט שבו
מידע נשלח ומתקבל ברשת. הפרק סוגר את יסודות השפה.
</p>

## מבנה בסיסי

<div class="box theory">
  <div class="box-head"><span class="icon">🗂️</span>זוגות של מפתח וערך</div>
  <div class="box-body">
    <p>
      אובייקט נכתב בסוגריים מסולסלים, וכל שדה הוא
      <strong>מפתח</strong> ו<strong>ערך</strong> מופרדים בנקודתיים.
    </p>
    <p class="note-line">
      בניגוד ל־C++‎ ול־Java, <strong>אין צורך להגדיר מחלקה מראש</strong>.
      פשוט כותבים את האובייקט.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">⚡</span>למה זה יעיל</div>
  <div class="box-body">
    <p>
      גישה לשדה לפי שם היא בזמן קבוע — <strong>O(1)</strong> — בלי לסרוק
      את כל האיברים כמו שהיינו עושים במערך, שם החיפוש הוא O(n).
    </p>
  </div>
</div>

```demo
<script>
  const student = {
    name: "Ori",
    age: 22,
    isActive: true,
    courses: ["Web", "Algorithms"]
  };

  console.log(student.name);
  console.log(student["age"]);
  console.log(student.courses[1]);
  console.log(student.address);
</script>
```

## נקודה מול סוגריים מרובעים

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong>נקודה</strong> — כשהמפתח ידוע ותקין כשם: <code>student.name</code>.</li>
      <li><strong>סוגריים מרובעים</strong> — כשהמפתח <strong>מחרוזת עם רווח</strong>, או כשהוא <strong>שמור במשתנה</strong>.</li>
    </ul>
    <p class="note-line">
      זה ההבדל הקריטי: <code>student[key]</code> מחפש את השדה
      ש<strong>שמו הוא הערך של <code>key</code></strong>,
      ואילו <code>student.key</code> מחפש שדה ששמו ממש ״key״.
    </p>
  </div>
</div>

```demo
<script>
  const student = { "first name": "Ori", age: 22 };

  console.log(student["first name"]);

  const field = "age";
  console.log(student[field]);
  console.log(student.field);
</script>
```

## שינוי והוספה

```demo
<script>
  const student = { name: "Ori" };

  student.name = "Dana";
  student.city = "Tel Aviv";
  delete student.city;

  console.log(student);
  console.log("name" in student);
  console.log("city" in student);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🔐</span>const ואובייקטים</div>
  <div class="box-body">
    <p>
      בדיוק כמו במערכים: <code>const</code> נועל את <strong>ההפניה</strong>.
      <code>student.name = "Dana"</code> מותר;
      <code>student = { ... }</code> אסור.
    </p>
  </div>
</div>

## הפניה מול ערך

<div class="box theory">
  <div class="box-head"><span class="icon">🔗</span>ההבדל שמסביר הרבה באגים</div>
  <div class="box-body">
    <p>
      ערכים פשוטים (מספר, מחרוזת, boolean) מועברים <strong>לפי ערך</strong> —
      נוצר עותק. אובייקטים ומערכים מועברים <strong>לפי הפניה</strong> —
      שני המשתנים מצביעים על <strong>אותו דבר בזיכרון</strong>.
    </p>
  </div>
</div>

```demo
<script>
  let a = 5;
  let b = a;
  b = 10;
  console.log("primitive:", a, b);

  const obj1 = { value: 5 };
  const obj2 = obj1;
  obj2.value = 10;
  console.log("reference:", obj1.value, obj2.value);

  console.log({ x: 1 } === { x: 1 });
</script>
```

<div class="keypoint">
שני אובייקטים עם <strong>תוכן זהה</strong> אינם שווים ב־<code>===</code>,
כי ההשוואה בודקת אם זו <strong>אותה הפניה</strong> — לא אותו תוכן.
זו אחת התוצאות המבלבלות ביותר למי שמגיע משפה אחרת.
</div>

## שכפול

```demo
<script>
  const original = { name: "Dana", year: 2 };

  const copy = { ...original };
  copy.year = 3;

  console.log("original:", original.year);
  console.log("copy:", copy.year);

  const nested = { user: { name: "Ori" } };
  const shallow = { ...nested };
  shallow.user.name = "CHANGED";
  console.log("nested original:", nested.user.name);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">📎</span>גם כאן ההעתקה שטוחה</div>
  <div class="box-body">
    <p>
      <code>{ ...obj }</code> מעתיק <strong>רמה אחת</strong>.
      אובייקט מקונן עדיין <strong>משותף</strong> — ולכן השינוי
      בדוגמה האחרונה השפיע גם על המקור.
    </p>
    <p class="note-line">
      להעתקה עמוקה יש <code>structuredClone(obj)</code>.
    </p>
  </div>
</div>

## מתודות עזר

| מתודה | מחזירה |
| --- | --- |
| `Object.keys(obj)` | מערך של **המפתחות** |
| `Object.values(obj)` | מערך של **הערכים** |
| `Object.entries(obj)` | מערך של זוגות `[key, value]` |

```demo
<script>
  const scores = { math: 90, physics: 78, history: 85 };

  console.log(Object.keys(scores));
  console.log(Object.values(scores));

  const total = Object.values(scores).reduce((sum, n) => sum + n, 0);
  console.log("average:", total / Object.keys(scores).length);

  Object.entries(scores).forEach(([subject, score]) => {
    console.log(subject, "→", score);
  });
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">🌉</span>הגשר למערכים</div>
  <div class="box-body">
    <p>
      <code>Object.keys</code> ואחיותיה מחזירות <strong>מערך</strong>,
      ולכן כל מה שלמדנו בפרק Arrays — <code>map</code>,
      <code>filter</code>, <code>reduce</code> — עובד על אובייקטים דרכן.
    </p>
  </div>
</div>

## פירוק

<div class="box">
  <div class="box-body">
    <p>
      <strong>Destructuring</strong> שולף שדות ישירות למשתנים
      בעלי אותו שם — קיצור נפוץ מאוד.
    </p>
  </div>
</div>

```demo
<script>
  const user = { name: "Ori", age: 22, city: "Haifa" };

  const { name, age } = user;
  console.log(name, age);

  const { city: hometown } = user;
  console.log(hometown);

  const { country = "Israel" } = user;
  console.log(country);

  function describe({ name, age }) {
    return name + " is " + age;
  }
  console.log(describe(user));
</script>
```

## מתודות באובייקט

<div class="box">
  <div class="box-body">
    <p>
      ערך של שדה יכול להיות <strong>פונקציה</strong>, ואז קוראים לו
      <strong>מתודה</strong>. בתוכה <code>this</code> מפנה
      לאובייקט עצמו.
    </p>
    <p class="note-line">
      שימי לב: ב<strong>arrow function</strong> אין <code>this</code> משלה,
      ולכן למתודה כותבים את הצורה הקצרה הרגילה ולא חץ.
    </p>
  </div>
</div>

```demo
<script>
  const counter = {
    count: 0,
    increment() {
      this.count = this.count + 1;
      return this.count;
    },
    describe() {
      return "count is " + this.count;
    }
  };

  counter.increment();
  counter.increment();
  console.log(counter.describe());
</script>
```

## מערך של אובייקטים

<div class="box example">
  <div class="box-head"><span class="icon">📊</span>המבנה שתפגשי בכל API</div>
  <div class="box-body">
    <p>
      זה הצירוף הנפוץ ביותר בעבודה אמיתית: רשימה של רשומות,
      שעוברים עליה עם המתודות מפרק Arrays.
    </p>
  </div>
</div>

```demo
<script>
  const products = [
    { name: "Keyboard", price: 250, inStock: true },
    { name: "Mouse", price: 120, inStock: false },
    { name: "Monitor", price: 900, inStock: true }
  ];

  const available = products.filter(p => p.inStock);
  console.log(available.map(p => p.name));

  const total = products.reduce((sum, p) => sum + p.price, 0);
  console.log("total:", total);

  console.log(products.find(p => p.price > 500).name);
  console.log([...products].sort((a, b) => a.price - b.price).map(p => p.price));
</script>
```

## JSON

<div class="box theory">
  <div class="box-head"><span class="icon">📨</span>הפורמט שבו מידע נוסע</div>
  <div class="box-body">
    <p>
      <strong>JSON</strong> הוא פורמט <strong>טקסטואלי</strong> לייצוג נתונים,
      והוא הסטנדרט להעברת מידע בין שרת ללקוח.
    </p>
    <ul>
      <li><code>JSON.stringify(obj)</code> — אובייקט ← מחרוזת.</li>
      <li><code>JSON.parse(text)</code> — מחרוזת ← אובייקט.</li>
    </ul>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">📏</span>JSON אינו אובייקט JavaScript</div>
  <div class="box-body">
    <ul>
      <li>כל <strong>המפתחות במרכאות כפולות</strong>.</li>
      <li><strong>אין פסיק</strong> אחרי השדה האחרון.</li>
      <li>אין פונקציות, אין <code>undefined</code>, ואין הערות.</li>
      <li>זה <strong>מידע ולא קוד</strong>.</li>
    </ul>
  </div>
</div>

```demo
<script>
  const student = { name: "Ori", age: 22, active: true };

  const text = JSON.stringify(student);
  console.log(text);
  console.log(typeof text);

  const back = JSON.parse(text);
  console.log(back.name, typeof back);

  try {
    JSON.parse("{ name: 'Ori' }");
  } catch (error) {
    console.log("parse failed:", error.message);
  }
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      כישלון של <code>JSON.parse</code> אומר כמעט תמיד שהמחרוזת אינה JSON תקין:
      מרכאות בודדות, מפתח בלי מרכאות, או פסיק מיותר בסוף.
      עוטפים ב־<code>try / catch</code> כדי שהדף לא ייפול.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>obj.key</code> כשהמפתח במשתנה</strong> — צריך <code>obj[key]</code>.</li>
      <li><strong>השוואת אובייקטים ב־<code>===</code></strong> — תמיד <code>false</code>; זו השוואת הפניות.</li>
      <li><strong>ציפייה ש־<code>{...obj}</code> מעתיק לעומק</strong> — הוא שטוח.</li>
      <li><strong>שינוי אובייקט שהועבר לפונקציה</strong> — משנה גם את המקור.</li>
      <li><strong>גישה לשדה מקונן שלא קיים</strong> — <code>a.b.c</code> נופל אם <code>b</code> הוא <code>undefined</code>. יש <code>a?.b?.c</code>.</li>
      <li><strong>מרכאות בודדות ב־JSON</strong> — <code>JSON.parse</code> ייכשל.</li>
      <li><strong>ציפייה ש־<code>JSON.stringify</code> ישמור פונקציות</strong> — הן נעלמות.</li>
      <li><strong><code>for...of</code> על אובייקט</strong> — לא עובד. יש <code>Object.entries</code>.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>אובייקט הוא <strong>מפתח־ערך</strong>, בלי צורך במחלקה, וגישה בזמן <strong>O(1)</strong>.</li>
      <li><strong>נקודה</strong> למפתח ידוע; <strong>סוגריים מרובעים</strong> למפתח במשתנה או עם רווח.</li>
      <li>שדה שלא קיים מחזיר <code>undefined</code>.</li>
      <li><code>const</code> נועל את ההפניה — שינוי שדה מותר.</li>
      <li>אובייקטים מועברים <strong>לפי הפניה</strong>, ולכן <code>===</code> משווה זהות ולא תוכן.</li>
      <li><code>{ ...obj }</code> משכפל <strong>רמה אחת</strong>; לעומק יש <code>structuredClone</code>.</li>
      <li><code>Object.keys</code> / <code>values</code> / <code>entries</code> הן <strong>הגשר למתודות המערכים</strong>.</li>
      <li><strong>Destructuring</strong> שולף שדות למשתנים, גם בפרמטרים של פונקציה.</li>
      <li><strong>JSON הוא טקסט</strong>: מפתחות במרכאות כפולות, בלי פסיק אחרון, בלי פונקציות.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? המפתח שמור במשתנה `const field = "age"`. איך ניגשים לשדה?
- `student.field`
+ `student[field]` — סוגריים מרובעים מחשבים את הערך של המשתנה
- `student."age"`
- `student->age`
= `student.field` היה מחפש שדה ששמו ממש "field", ומחזיר undefined.

? מה יחזיר `{ x: 1 } === { x: 1 }`?
- `true`, כי התוכן זהה
+ `false` — אובייקטים מושווים לפי הפניה ולא לפי תוכן, ואלה שני אובייקטים שונים
- שגיאה
- `undefined`
= זו הסיבה ששינוי דרך משתנה אחד משפיע גם על האחר כששניהם מצביעים לאותו אובייקט.

? מה קורה ב-`const copy = {...nested}` כש-`nested` מכיל אובייקט פנימי?
- הכול מועתק לעומק
+ ההעתקה שטוחה — האובייקט הפנימי עדיין משותף, ושינוי בו ישפיע על שניהם
- תיזרק שגיאה
- העותק יהיה ריק
= להעתקה עמוקה משתמשים ב-`structuredClone(obj)`.

? מה ההבדל בין אובייקט JavaScript לבין JSON?
- אין הבדל
+ JSON הוא טקסט: כל המפתחות במרכאות כפולות, בלי פסיק אחרון ובלי פונקציות
- JSON תומך בפונקציות ואובייקט לא
- JSON מהיר יותר
= ממירים ביניהם עם `JSON.stringify` ו-`JSON.parse`.

? איך עוברים על כל השדות של אובייקט עם `forEach`?
- `obj.forEach(...)` ישירות
+ דרך `Object.entries(obj).forEach(...)` או `Object.keys(obj).forEach(...)`
- עם `for...of` על האובייקט
- אי אפשר בכלל
= המתודות האלה מחזירות מערך, וכך כל כלי המערכים הופכים לזמינים.
```
