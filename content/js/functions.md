# Functions

<p class="lead">
פונקציה היא קטע קוד עם שם, שמקבל קלט ומחזיר פלט. כבר השתמשנו בהן
בכל פרק — <code>addEventListener</code> קיבל פונקציה,
<code>forEach</code> קיבל פונקציה. כאן נבין מה בדיוק קורה שם,
ולמה פונקציות ב־JavaScript הן <strong>ערך</strong> ולא רק תחביר.
</p>

## הצהרה בסיסית

<div class="box theory">
  <div class="box-head"><span class="icon">📣</span>function declaration</div>
  <div class="box-body">
    <p>
      הצורה הקלאסית: מילת המפתח <code>function</code>, שם,
      פרמטרים בסוגריים, וגוף בסוגריים מסולסלים.
    </p>
    <p class="note-line">
      <strong>פרמטר</strong> הוא השם בהגדרה; <strong>ארגומנט</strong>
      הוא הערך שמועבר בפועל בקריאה.
    </p>
  </div>
</div>

```demo
<script>
  function greet(name) {
    console.log("Hello " + name);
  }

  greet("Ori");
  greet("Dana");
  greet();
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>פרמטר חסר אינו שגיאה</div>
  <div class="box-body">
    <p>
      בניגוד ל־C++‎ ול־Java, קריאה בלי ארגומנט <strong>לא תיכשל</strong>.
      הפרמטר פשוט יקבל <code>undefined</code> — ומכאן ה״Hello undefined״.
    </p>
    <p class="note-line">
      גם <strong>יותר מדי</strong> ארגומנטים לא יגרמו לשגיאה;
      העודפים פשוט יתעלמו.
    </p>
  </div>
</div>

## ערכי ברירת מחדל

```demo
<script>
  function greet(name = "guest", greeting = "Hello") {
    console.log(greeting + ", " + name);
  }

  greet();
  greet("Ori");
  greet("Ori", "Hi");
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      ברירת המחדל נכנסת לפעולה <strong>רק כשהארגומנט הוא <code>undefined</code></strong> —
      כלומר כשהוא לא הועבר כלל. ערך כמו <code>0</code> או <code>""</code>
      <strong>יעבור כרגיל</strong> ולא יוחלף, בניגוד להתנהגות של <code>||</code>.
    </p>
  </div>
</div>

## return

<div class="box theory">
  <div class="box-head"><span class="icon">↩️</span>מחזיר ערך ויוצא</div>
  <div class="box-body">
    <p>
      <code>return</code> עושה שני דברים: מחזיר ערך,
      ו<strong>מסיים את הפונקציה מיד</strong>.
      קוד שאחריו לא ירוץ.
    </p>
    <p class="note-line">
      פונקציה בלי <code>return</code> מחזירה <code>undefined</code>.
      זו אחת הסיבות הנפוצות לקבלת <code>undefined</code> בלי הסבר.
    </p>
  </div>
</div>

```demo
<script>
  function add(a, b) {
    return a + b;
    console.log("never runs");
  }

  function noReturn(a, b) {
    a + b;
  }

  console.log(add(3, 4));
  console.log(noReturn(3, 4));
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🪤</span>return בשורה נפרדת</div>
  <div class="box-body">
    <p>
      JavaScript משלימה נקודה־פסיק אוטומטית. אם כתבת <code>return</code>
      ואת הערך בשורה הבאה, השפה <strong>תסגור את ההצהרה מיד</strong>
      והפונקציה תחזיר <code>undefined</code>.
    </p>
    <p class="note-line">
      לכן הערך חייב להתחיל <strong>באותה שורה</strong> של <code>return</code>.
    </p>
  </div>
</div>

## פונקציה היא ערך

<div class="box theory">
  <div class="box-head"><span class="icon">🎁</span>first-class</div>
  <div class="box-body">
    <p>
      ב־JavaScript פונקציה היא <strong>ערך רגיל</strong>: אפשר לשמור
      אותה במשתנה, להעביר אותה כארגומנט, ולהחזיר אותה מפונקציה אחרת.
    </p>
    <p>
      פונקציה ששמורה במשתנה נקראת <strong>function expression</strong>.
    </p>
  </div>
</div>

```demo
<script>
  const sayHello = function (name) {
    console.log("Hello " + name);
  };

  sayHello("Ori");
  console.log(typeof sayHello);

  function callTwice(fn, value) {
    fn(value);
    fn(value);
  }

  callTwice(sayHello, "Dana");
</script>
```

<div class="keypoint">
זה בדיוק מה שקרה בכל <code>addEventListener</code> ו־<code>forEach</code>
שכתבנו: <strong>מסרנו פונקציה כערך</strong>, ומישהו אחר קרא לה.
פונקציה שנמסרת כך נקראת <strong>callback</strong>.
</div>

## Arrow functions

<div class="box">
  <div class="box-body">
    <p>
      תחביר מקוצר לפונקציה, נפוץ מאוד בקוד מודרני:
    </p>
    <ul>
      <li><code>(a, b) => { return a + b; }</code></li>
      <li>גוף של ביטוי יחיד — <strong>בלי סוגריים ובלי <code>return</code></strong>: <code>(a, b) => a + b</code></li>
      <li>פרמטר יחיד — אפשר בלי סוגריים: <code>n => n * 2</code></li>
    </ul>
  </div>
</div>

```demo
<script>
  const double = (n) => n * 2;
  const add = (a, b) => a + b;
  const shout = (text) => {
    const big = text.toUpperCase();
    return big + "!";
  };

  console.log(double(5));
  console.log(add(2, 3));
  console.log(shout("hello"));

  console.log([1, 2, 3].map(n => n * 10));
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">↩️</span>ההחזרה המשתמעת</div>
  <div class="box-body">
    <p>
      זה ההבדל שהכי מבלבל: <code>n => n * 2</code> <strong>מחזיר</strong>,
      אבל <code>n => { n * 2 }</code> <strong>לא</strong> — ברגע שיש
      סוגריים מסולסלים צריך <code>return</code> מפורש.
    </p>
  </div>
</div>

```demo
<script>
  const implicit = n => n * 2;
  const explicit = n => { return n * 2; };
  const broken   = n => { n * 2; };

  console.log(implicit(5));
  console.log(explicit(5));
  console.log(broken(5));
</script>
```

## טווח משתנים

<div class="box theory">
  <div class="box-head"><span class="icon">🔒</span>scope</div>
  <div class="box-body">
    <p>
      משתנה שהוצהר <strong>בתוך</strong> פונקציה קיים רק בה.
      פונקציה יכולה לקרוא משתנים <strong>מבחוץ</strong>,
      אבל הצד השני לא נכון.
    </p>
    <p class="note-line">
      זה אותו רעיון של טווח בלוק מפרק Variables,
      רק ברמת הפונקציה.
    </p>
  </div>
</div>

```demo
<script>
  const outer = "I am outside";

  function demo() {
    const inner = "I am inside";
    console.log(outer);
    console.log(inner);
  }

  demo();
  console.log(inner);
</script>
```

## Hoisting

<div class="box">
  <div class="box-body">
    <p>
      <strong>function declaration</strong> זמינה גם <strong>לפני</strong>
      השורה שבה הוגדרה — המנוע ״מרים״ אותה לראש הטווח.
    </p>
    <p class="note-line">
      פונקציה ששמורה ב־<code>const</code> או ב־<code>let</code>
      <strong>אינה</strong> זמינה מוקדם, ותיתן <code>ReferenceError</code>.
      זו סיבה טובה פשוט להגדיר לפני שמשתמשים.
    </p>
  </div>
</div>

```demo
<script>
  console.log(declared(2));

  function declared(n) { return n * 3; }

  console.log(expressed(2));

  const expressed = function (n) { return n * 3; };
</script>
```

## פונקציות טובות

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>שלושה כללים</div>
  <div class="box-body">
    <ul>
      <li><strong>תפקיד אחד</strong> — אם השם מכיל ״and״, כנראה שצריך לפצל.</li>
      <li><strong>שם שהוא פועל</strong> — <code>calculateTotal</code>, <code>isValid</code>, <code>renderList</code>.</li>
      <li><strong>להעדיף החזרת ערך</strong> על שינוי משתנים חיצוניים — קל יותר לבדוק ולהבין.</li>
    </ul>
  </div>
</div>

```demo
<script>
  function calculateTotal(prices, taxRate = 0.17) {
    let sum = 0;
    for (const price of prices) {
      sum = sum + price;
    }
    return sum * (1 + taxRate);
  }

  const cart = [100, 250, 40];
  console.log(calculateTotal(cart).toFixed(2));
  console.log(calculateTotal(cart, 0).toFixed(2));
</script>
```

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת <code>return</code></strong> — הפונקציה מחזירה <code>undefined</code>.</li>
      <li><strong>סוגריים מסולסלים ב־arrow בלי <code>return</code></strong> — אותה תוצאה.</li>
      <li><strong>סוגריים בהעברת callback</strong> — <code>fn()</code> מריץ מיד במקום למסור.</li>
      <li><strong>ערך <code>return</code> בשורה נפרדת</strong> — נקודה־פסיק אוטומטית מחזירה <code>undefined</code>.</li>
      <li><strong>ניסיון לגשת למשתנה פנימי מבחוץ</strong> — <code>ReferenceError</code>.</li>
      <li><strong>שימוש ב־function expression לפני ההגדרה</strong> — אין hoisting.</li>
      <li><strong>ציפייה שברירת מחדל תחליף <code>0</code></strong> — היא פועלת רק על <code>undefined</code>.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>פרמטר חסר מקבל <code>undefined</code> — <strong>זו לא שגיאה</strong>.</li>
      <li>ברירות מחדל פועלות <strong>רק על <code>undefined</code></strong>, לא על <code>0</code> או <code>""</code>.</li>
      <li><code>return</code> מחזיר <strong>ומסיים מיד</strong>; בלעדיו מוחזר <code>undefined</code>.</li>
      <li>הערך חייב להיות <strong>באותה שורה</strong> של <code>return</code>.</li>
      <li>פונקציה היא <strong>ערך</strong> — אפשר לשמור, להעביר ולהחזיר אותה.</li>
      <li>פונקציה שנמסרת לפונקציה אחרת היא <strong>callback</strong>.</li>
      <li>Arrow: <code>n => n * 2</code> מחזיר; <code>n => { n * 2 }</code> <strong>לא</strong>.</li>
      <li>משתנה פנימי אינו נגיש מבחוץ; החיצוני כן נגיש מבפנים.</li>
      <li><strong>declaration</strong> עוברת hoisting, <strong>expression</strong> לא.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה יחזיר `const f = n => { n * 2 };` כשנקרא לו עם 5?
- 10
+ `undefined` — עם סוגריים מסולסלים צריך `return` מפורש
- שגיאה
- `NaN`
= ההחזרה המשתמעת קיימת רק בגוף שהוא ביטוי יחיד בלי סוגריים.

? מה קורה כשקוראים לפונקציה עם פחות ארגומנטים ממספר הפרמטרים?
- נזרקת שגיאה
+ הפרמטרים החסרים מקבלים `undefined`, והפונקציה רצה כרגיל
- הפונקציה לא תרוץ
- הארגומנט האחרון משוכפל
= בניגוד ל-C++ ול-Java, השפה לא בודקת את מספר הארגומנטים.

? למה `addEventListener("click", greet)` נכתב בלי סוגריים אחרי `greet`?
- כי זה קיצור תחבירי
+ כי מוסרים את הפונקציה עצמה כערך, והדפדפן יקרא לה מאוחר יותר; סוגריים היו מריצים אותה מיד
- כי `greet` אינה פונקציה
- כי הסוגריים נוספים אוטומטית
= פונקציה שנמסרת כך נקראת callback, וזה אפשרי כי פונקציות הן ערכים.

? פונקציה עם `default = "guest"` קיבלה מחרוזת ריקה `""`. מה יקרה?
- תיכנס ברירת המחדל
+ הערך `""` יעבור כרגיל, כי ברירת מחדל פועלת רק כשהארגומנט הוא `undefined`
- תיזרק שגיאה
- הפרמטר יהיה `null`
= זה שונה מ-`||`, שהיה מחליף גם מחרוזת ריקה וגם 0.

? למה `return` וערך בשורה נפרדת מחזירים `undefined`?
- כי `return` תומך רק במספרים
+ כי JavaScript משלימה נקודה־פסיק אוטומטית וסוגרת את ההצהרה בסוף השורה
- כי צריך סוגריים סביב הערך
- זו שגיאת תחביר
= לכן הערך חייב להתחיל באותה שורה של `return`.
```
