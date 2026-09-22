# Loops

<p class="lead">
לולאה מריצה את אותו קוד שוב ושוב. ב־JavaScript יש כמה סוגים,
וההבדל ביניהם אינו רק סגנוני — בחירה לא נכונה בין
<code>for...of</code> ל־<code>for...in</code> היא אחת הטעויות
הנפוצות ביותר של מתחילים.
</p>

## for קלאסי

<div class="box theory">
  <div class="box-head"><span class="icon">🔁</span>שלושה חלקים</div>
  <div class="box-body">
    <p><code>for (אתחול; תנאי; צעד)</code></p>
    <ul>
      <li><strong>אתחול</strong> — רץ פעם אחת בהתחלה.</li>
      <li><strong>תנאי</strong> — נבדק <strong>לפני</strong> כל סיבוב.</li>
      <li><strong>צעד</strong> — רץ <strong>אחרי</strong> כל סיבוב.</li>
    </ul>
    <p class="note-line">
      את משתנה המונה מצהירים ב־<code>let</code> ולא ב־<code>const</code>,
      כי הוא משתנה בכל סיבוב.
    </p>
  </div>
</div>

```demo
<script>
  for (let i = 0; i < 4; i++) {
    console.log("i =", i);
  }
  console.log("done");
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      מתחילים מ־<code>0</code> ומשתמשים ב־<code>&lt;</code> ולא ב־<code>&lt;=</code>,
      כי אינדקסים במערכים מתחילים מאפס. הצירוף <code>i &lt; length</code>
      נותן בדיוק את מספר האיברים.
    </p>
  </div>
</div>

## while ו־do...while

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong><code>while</code></strong> — בודק קודם, ואולי לא ירוץ אף פעם.</li>
      <li><strong><code>do...while</code></strong> — רץ <strong>לפחות פעם אחת</strong>, ובודק בסוף.</li>
    </ul>
    <p class="note-line">
      משתמשים בהם כשמספר הסיבובים <strong>לא ידוע מראש</strong>.
      כשהוא ידוע — <code>for</code> קריא יותר.
    </p>
  </div>
</div>

```demo
<script>
  let n = 3;
  while (n > 0) {
    console.log("countdown", n);
    n = n - 1;
  }

  let k = 0;
  do {
    console.log("runs at least once, k =", k);
  } while (k > 0);
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">♾️</span>לולאה אינסופית</div>
  <div class="box-body">
    <p>
      אם התנאי לעולם לא הופך לשקר, הלולאה לא תיעצר —
      והלשונית <strong>תיתקע</strong>, כי JavaScript רצה על חוט יחיד.
    </p>
    <p class="note-line">
      הסיבה כמעט תמיד אחת: <strong>שכחת לקדם את המונה</strong>.
      בדפדפן מרעננים את הדף כדי להשתחרר.
    </p>
  </div>
</div>

## for...of

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>הערכים עצמם</div>
  <div class="box-body">
    <p>
      <code>for...of</code> עובר על <strong>הערכים</strong> של מערך
      (או של מחרוזת, או של NodeList).
      זו הדרך הקריאה ביותר כשלא צריך את האינדקס.
    </p>
  </div>
</div>

```demo
<script>
  const colors = ["red", "green", "blue"];

  for (const color of colors) {
    console.log(color);
  }

  for (const char of "abc") {
    console.log(char);
  }
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      כאן דווקא <code>const</code> תקין, למרות שהערך משתנה בין סיבובים:
      בכל סיבוב נוצר <strong>משתנה חדש</strong> ששייך לאותו סיבוב בלבד.
    </p>
  </div>
</div>

## for...in

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>מחזיר מפתחות, לא ערכים</div>
  <div class="box-body">
    <p>
      <code>for...in</code> עובר על <strong>המפתחות</strong>.
      על אובייקט אלה שמות השדות — וזה השימוש הנכון שלו.
      על <strong>מערך</strong> אלה <strong>האינדקסים</strong>,
      והם מגיעים כ<strong>מחרוזות</strong>.
    </p>
    <p class="note-line">
      זו הטעות: <code>for (const i in arr)</code> ייתן
      <code>"0"</code>, <code>"1"</code>, <code>"2"</code> —
      ואז <code>i + 1</code> ייתן <code>"01"</code> במקום 1.
    </p>
  </div>
</div>

```demo
<script>
  const colors = ["red", "green", "blue"];

  for (const index in colors) {
    console.log(index, typeof index, colors[index]);
  }

  const user = { name: "Ori", age: 22 };
  for (const key in user) {
    console.log(key, "=", user[key]);
  }
</script>
```

<div class="keypoint">
<strong>הכלל שמסדר את זה:</strong> על <strong>מערך</strong> משתמשים ב־<code>for...of</code>
(או ב־<code>forEach</code>), ועל <strong>אובייקט</strong> ב־<code>for...in</code>
או ב־<code>Object.keys</code>. אם כתבת <code>for...in</code> על מערך —
כמעט תמיד התכוונת ל־<code>for...of</code>.
</div>

## forEach

<div class="box">
  <div class="box-body">
    <p>
      <code>forEach</code> הוא מתודה של מערכים שמקבלת
      <strong>פונקציה</strong> ומריצה אותה על כל איבר.
      זו הצורה המקובלת ביותר בקוד מודרני.
    </p>
    <p class="note-line">
      הפרמטר השני הוא האינדקס: <code>function (item, index)</code>.
      את המערכים עצמם נפרק בפרק הבא.
    </p>
  </div>
</div>

```demo
<script>
  const numbers = [10, 20, 30];

  numbers.forEach(function (num, index) {
    console.log(index, "→", num * 2);
  });
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🚧</span>אי אפשר לעצור forEach</div>
  <div class="box-body">
    <p>
      <code>break</code> ו־<code>continue</code> <strong>לא עובדים</strong>
      בתוך <code>forEach</code> — הם שייכים ללולאות, וזו קריאה לפונקציה.
    </p>
    <p class="note-line">
      אם צריך לעצור באמצע, משתמשים ב־<code>for...of</code>,
      או במתודות ייעודיות כמו <code>find</code> ו־<code>some</code>
      שנראה בפרק Arrays.
    </p>
  </div>
</div>

## break ו־continue

<div class="box">
  <div class="box-body">
    <ul>
      <li><strong><code>break</code></strong> — יוצא מהלולאה כולה.</li>
      <li><strong><code>continue</code></strong> — מדלג לסיבוב הבא.</li>
    </ul>
  </div>
</div>

```demo
<script>
  for (const n of [1, 2, 3, 4, 5, 6]) {
    if (n % 2 !== 0) continue;
    if (n > 4) break;
    console.log("even and small:", n);
  }
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      1, 3 ו־5 דולגו כי הם אי־זוגיים; 6 עצר את הלולאה.
      נשארו 2 ו־4 בלבד.
    </p>
  </div>
</div>

## לולאות מקוננות

<div class="box">
  <div class="box-body">
    <p>
      לולאה בתוך לולאה: החיצונית מתקדמת סיבוב אחד,
      והפנימית רצה <strong>במלואה</strong> בכל פעם.
    </p>
    <p class="note-line">
      שימי לב לעלות: שתי לולאות של 1,000 איברים הן
      <strong>מיליון</strong> סיבובים. <code>break</code>
      בפנימית יוצא רק ממנה.
    </p>
  </div>
</div>

```demo
<script>
  for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
      line = line + (row * col) + "\t";
    }
    console.log(line.trim());
  }
</script>
```

## לולאות ו־DOM

<div class="box example">
  <div class="box-head"><span class="icon">🌳</span>הדפוס המעשי</div>
  <div class="box-body">
    <p>
      זה מה שראינו בפרק DOM Manipulation, ועכשיו עם הכלים המלאים:
      עוברים על נתונים ובונים אלמנט לכל פריט.
    </p>
  </div>
</div>

```demo
<ul id="out" style="font-family:system-ui"></ul>
<script>
  const tasks = ["Write", "Review", "Ship"];
  const list = document.getElementById("out");

  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task;
    list.append(li);
  }

  console.log("rendered", list.children.length, "items");
</script>
```

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>for...in</code> על מערך</strong> — מחזיר אינדקסים <strong>כמחרוזות</strong>. כמעט תמיד רצית <code>for...of</code>.</li>
      <li><strong>שכחת לקדם את המונה</strong> — לולאה אינסופית שמקפיאה את הלשונית.</li>
      <li><strong><code>&lt;=</code> עם <code>length</code></strong> — סיבוב אחד יותר מדי, והאיבר האחרון הוא <code>undefined</code>.</li>
      <li><strong><code>break</code> בתוך <code>forEach</code></strong> — לא עובד.</li>
      <li><strong>שינוי אורך המערך תוך כדי לולאה</strong> — מדלג על איברים או נתקע.</li>
      <li><strong><code>const</code> כמונה ב־<code>for</code> קלאסי</strong> — שגיאה בסיבוב הראשון.</li>
      <li><strong>עבודה על ה־DOM בכל סיבוב</strong> — איטי. עדיף לבנות ואז להוסיף.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>for</code> קלאסי: <strong>אתחול, תנאי, צעד</strong>, עם <code>let</code>.</li>
      <li><code>while</code> בודק קודם; <code>do...while</code> רץ <strong>לפחות פעם אחת</strong>.</li>
      <li><strong><code>for...of</code> — ערכים.</strong> <strong><code>for...in</code> — מפתחות.</strong></li>
      <li>על מערך: <code>for...of</code> או <code>forEach</code>. על אובייקט: <code>for...in</code>.</li>
      <li><code>for...in</code> על מערך מחזיר אינדקסים <strong>כמחרוזות</strong>.</li>
      <li><code>forEach</code> מקבל <code>(item, index)</code> — ו<strong>אי אפשר לעצור אותו</strong>.</li>
      <li><code>break</code> יוצא מהלולאה, <code>continue</code> מדלג סיבוב.</li>
      <li>בלולאות מקוננות העלות היא <strong>מכפלה</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל בין `for...of` ל-`for...in` על מערך?
- אין הבדל
+ `for...of` מחזיר את הערכים, ו-`for...in` מחזיר את האינדקסים — וכמחרוזות
- `for...in` מהיר יותר
- `for...of` עובד רק על אובייקטים
= לכן `for (const i in arr)` ואז `i + 1` ייתן `"01"` ולא 1.

? למה `break` לא עובד בתוך `forEach`?
- כי `forEach` אינו נתמך
+ כי `forEach` אינו לולאה אלא קריאה לפונקציה על כל איבר, ו-break שייך ללולאות
- כי צריך `return` לפניו
- כי המערך ריק
= אם צריך לעצור באמצע, משתמשים ב-`for...of` או במתודות כמו `find`.

? הלשונית נתקעת כשמריצים את הלולאה. מה הכי סביר?
- המערך גדול מדי
+ התנאי לעולם לא הופך לשקר, בדרך כלל כי שכחת לקדם את המונה
- חסר `break`
- צריך `async`
= JavaScript רצה על חוט יחיד, ולכן לולאה אינסופית מקפיאה את הדף כולו.

? למה כותבים `i < arr.length` ולא `i <= arr.length`?
- כי `<=` אינו חוקי
+ כי האינדקסים מתחילים מ-0, ולכן האחרון הוא `length - 1` — עם `<=` היינו קוראים איבר שלא קיים
- כי `<` מהיר יותר
- אין הבדל
= הגישה לאינדקס שמעבר לסוף מחזירה `undefined`.

? באיזו לולאה נכון להשתמש כדי לעבור על שדות של אובייקט?
- `for...of`
+ `for...in`, או `Object.keys` יחד עם `forEach`
- `while` בלבד
- `forEach` ישירות על האובייקט
= `for...of` עובד על מערכים ומחרוזות, לא על אובייקט רגיל.
```
