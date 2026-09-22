# DOM Manipulation

<p class="lead">
בפרק הקודם <strong>קראנו</strong> מהעץ. עכשיו נשנה אותו: טקסט, מחלקות, תכונות,
ואלמנטים חדשים לגמרי. הכלל המנחה של הפרק פשוט —
<strong>CSS מגדיר איך כל מצב נראה, ו־JavaScript רק מחליף מצב</strong>.
</p>

## שינוי טקסט

<div class="box theory">
  <div class="box-head"><span class="icon">✏️</span>textContent מול innerHTML</div>
  <div class="box-body">
    <ul>
      <li><strong><code>textContent</code></strong> — קורא וכותב <strong>טקסט בלבד</strong>. תגיות נכתבות כטקסט רגיל ולא מתפרשות.</li>
      <li><strong><code>innerHTML</code></strong> — קורא וכותב <strong>HTML</strong>. הדפדפן מפרסר את המחרוזת ובונה ממנה אלמנטים.</li>
    </ul>
    <p class="note-line">
      ברוב המקרים רוצים <code>textContent</code>. הוא גם מהיר יותר,
      וגם — כפי שנראה מיד — <strong>בטוח</strong>.
    </p>
  </div>
</div>

```demo
<p id="a"></p>
<p id="b"></p>
<script>
  const value = "<strong>bold?</strong>";
  document.getElementById("a").textContent = value;
  document.getElementById("b").innerHTML = value;
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אותה מחרוזת בדיוק: הראשון הציג את התגית <strong>כטקסט</strong>,
      והשני <strong>הריץ</strong> אותה והפך את המילה למודגשת.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">🔓</span>innerHTML וקלט ממשתמש</div>
  <div class="box-body">
    <p>
      אם הכנסת ל־<code>innerHTML</code> טקסט שהגיע <strong>ממשתמש</strong>,
      הוא יכול להכיל תגיות — כולל <code>&lt;script&gt;</code> או
      <code>&lt;img onerror=...&gt;</code> — והדפדפן יריץ אותן.
      זו פרצת אבטחה שנקראת <strong>XSS</strong>.
    </p>
    <p class="note-line">
      הכלל: <strong>תוכן שמגיע ממשתמש נכנס תמיד דרך <code>textContent</code></strong>.
      <code>innerHTML</code> שמור למחרוזות שאת כתבת בעצמך.
    </p>
  </div>
</div>

## classList

<div class="box theory">
  <div class="box-head"><span class="icon">🎚️</span>הדרך הנכונה לשנות מראה</div>
  <div class="box-body">
    <p>
      <code>classList</code> מוסיף ומסיר מחלקות CSS מאלמנט:
    </p>
    <ul>
      <li><code>add("name")</code> — מוסיף.</li>
      <li><code>remove("name")</code> — מסיר.</li>
      <li><code>toggle("name")</code> — מוסיף אם אין, מסיר אם יש.</li>
      <li><code>contains("name")</code> — מחזיר <code>true</code> או <code>false</code>.</li>
    </ul>
  </div>
</div>

<div class="keypoint">
<strong>זה הדפוס המרכזי של כל הפרק.</strong> את העיצוב של כל מצב כותבים
<strong>ב־CSS</strong>, ו־JavaScript רק מוסיף או מסיר מחלקה.
כך העיצוב נשאר במקום אחד, והלוגיקה לא מתמלאת בצבעים.
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">תקין — CSS מעצב, JS מחליף מצב</div>
    <div class="compare-body">
<pre><code class="language-js">// CSS: .is-active { background: #4f46e5; }
box.classList.toggle("is-active");</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">עיצוב שמפוזר בתוך הלוגיקה</div>
    <div class="compare-body">
<pre><code class="language-js">box.style.background = "#4f46e5";
box.style.color = "white";
box.style.borderRadius = "8px";</code></pre>
    </div>
  </div>
</div>

```demo
<style>
  .box { padding: 10px; border: 2px solid #cbd5e1; font-family: system-ui; }
  .is-active { background: #eef2ff; border-color: #4f46e5; font-weight: bold; }
</style>
<div class="box" id="one">plain</div>
<div class="box" id="two">will become active</div>
<script>
  const two = document.getElementById("two");
  two.classList.add("is-active");
  console.log(two.className);
  console.log(two.classList.contains("is-active"));
  console.log(document.getElementById("one").classList.contains("is-active"));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שמות מצב נהוג לכתוב עם קידומת ברורה כמו <code>is-</code> או <code>has-</code>,
      כדי להבדיל בינם לבין מחלקות עיצוב רגילות.
    </p>
  </div>
</div>

## style

<div class="box">
  <div class="box-body">
    <p>
      <code>el.style</code> כותב <strong>inline style</strong> — ולכן, כזכור
      מפרק Cascade, הוא גובר כמעט על הכול וקשה לדרוס אותו.
    </p>
    <p>
      שימי לב שהשמות נכתבים ב־<strong>camelCase</strong>:
      <code>backgroundColor</code> ולא <code>background-color</code>,
      כי מקף אינו חוקי בשם תכונה ב־JavaScript.
    </p>
    <p class="note-line">
      מתי כן משתמשים בו: לערך <strong>מחושב</strong> שאי אפשר לדעת מראש —
      רוחב של פס התקדמות, מיקום לפי העכבר. לכל השאר — <code>classList</code>.
    </p>
  </div>
</div>

```demo
<div id="bar" style="height: 14px; background: #4f46e5; width: 0"></div>
<script>
  const percent = 65;
  document.getElementById("bar").style.width = percent + "%";
  console.log(document.getElementById("bar").style.width);
</script>
```

## שינוי תכונות

<div class="box">
  <div class="box-body">
    <ul>
      <li><code>setAttribute("href", value)</code> ו־<code>getAttribute("href")</code></li>
      <li><code>removeAttribute("disabled")</code></li>
      <li><code>el.dataset.role = "primary"</code> — כותב <code>data-role</code></li>
    </ul>
    <p class="note-line">
      לתכונות נפוצות יש גם קיצור ישיר: <code>img.src</code>,
      <code>a.href</code>, <code>input.value</code>, <code>button.disabled</code>.
    </p>
  </div>
</div>

## יצירת אלמנטים

<div class="box theory">
  <div class="box-head"><span class="icon">🏗️</span>שלושה שלבים</div>
  <div class="box-body">
    <ol>
      <li><strong>יוצרים</strong> — <code>document.createElement("li")</code></li>
      <li><strong>ממלאים</strong> — טקסט, מחלקות, תכונות</li>
      <li><strong>מחברים לעץ</strong> — <code>parent.append(el)</code></li>
    </ol>
    <p class="note-line">
      עד שלב 3 האלמנט קיים בזיכרון אבל <strong>לא נראה על המסך</strong>,
      כי הוא עוד לא חלק מהעץ. זו נקודה שמבלבלת בהתחלה.
    </p>
  </div>
</div>

| פעולה | מה היא עושה |
| --- | --- |
| `parent.append(el)` | מוסיף בסוף |
| `parent.prepend(el)` | מוסיף בהתחלה |
| `el.remove()` | מוחק את עצמו מהעץ |
| `el.replaceWith(other)` | מחליף אותו באחר |

```demo
<ul id="list">
  <li>existing</li>
</ul>
<script>
  const list = document.getElementById("list");

  const item = document.createElement("li");
  item.textContent = "created from JavaScript";
  item.classList.add("new");
  console.log("in the tree yet?", document.querySelectorAll("#list li").length);

  list.append(item);
  console.log("after append:", document.querySelectorAll("#list li").length);

  const first = document.createElement("li");
  first.textContent = "first";
  list.prepend(first);
  console.log("after prepend:", document.querySelectorAll("#list li").length);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      הפאנל מראה את הנקודה במדויק: לפני <code>append</code> היה פריט אחד,
      אחריו שניים. האלמנט כבר היה קיים — הוא פשוט לא היה בעץ.
    </p>
  </div>
</div>

## בניית רשימה מתוך נתונים

<div class="box example">
  <div class="box-head"><span class="icon">🔁</span>הדפוס שחוזר בכל אתר</div>
  <div class="box-body">
    <p>
      לוקחים נתונים, עוברים עליהם, ובונים אלמנט לכל פריט.
      זה בדיוק מה שעושה כל רשימת מוצרים, כל טבלה וכל פיד.
    </p>
    <p class="note-line">
      <code>forEach</code>, <code>map</code> והמערכים עצמם נלמדו בפרק
      <strong>Arrays</strong>. כאן מעניין אותנו רק הצד של ה־DOM.
    </p>
  </div>
</div>

```demo
<ul id="fruits"></ul>
<script>
  const fruits = ["Apple", "Banana", "Cherry"];
  const list = document.getElementById("fruits");

  fruits.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.append(li);
  });

  console.log("rendered", list.children.length, "items");
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🧹</span>לנקות לפני שמציירים מחדש</div>
  <div class="box-body">
    <p>
      כשמרנדרים רשימה שוב — אחרי סינון או הוספה — צריך <strong>לרוקן</strong>
      אותה קודם, אחרת הפריטים מצטברים.
    </p>
    <p>
      הדרך הקצרה: <code>list.innerHTML = ""</code>.
      כאן השימוש ב־<code>innerHTML</code> בטוח לחלוטין,
      כי המחרוזת ריקה ולא מגיעה מאף אחד.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>innerHTML</code> עם קלט ממשתמש</strong> — פרצת XSS. משתמשים ב־<code>textContent</code>.</li>
      <li><strong>יצירת אלמנט בלי <code>append</code></strong> — הוא קיים בזיכרון אבל לא מופיע.</li>
      <li><strong><code>style.background-color</code></strong> — צריך <code>backgroundColor</code>.</li>
      <li><strong><code>style.width = 65</code> בלי יחידה</strong> — צריך <code>"65%"</code> או <code>"65px"</code>.</li>
      <li><strong>עיצוב דרך <code>style</code> במקום <code>classList</code></strong> — מפזר עיצוב בלוגיקה, וקשה לדרוס.</li>
      <li><strong>שכחת לנקות לפני רינדור מחדש</strong> — הפריטים מצטברים.</li>
      <li><strong><code>classList.add("is active")</code></strong> — רווח אינו חוקי בשם מחלקה.</li>
      <li><strong><code>innerHTML +=</code> בתוך לולאה</strong> — הדפדפן מפרסר הכול מחדש בכל סיבוב. עדיף <code>append</code>.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>textContent</code> לטקסט; <code>innerHTML</code> מפרסר HTML.</li>
      <li><strong>קלט ממשתמש נכנס תמיד דרך <code>textContent</code></strong> — אחרת XSS.</li>
      <li><code>classList</code> עם <code>add</code>, <code>remove</code>, <code>toggle</code>, <code>contains</code>.</li>
      <li><strong>CSS מגדיר מצבים, JavaScript מחליף מחלקות.</strong></li>
      <li><code>el.style</code> כותב inline, ב־<strong>camelCase</strong>, ושמור לערכים <strong>מחושבים</strong>.</li>
      <li>יצירה בשלושה שלבים: <code>createElement</code>, מילוי, ו<strong>חיבור לעץ</strong>.</li>
      <li>אלמנט שלא חובר לעץ פשוט <strong>לא נראה</strong>.</li>
      <li><code>append</code>, <code>prepend</code>, <code>remove</code>, <code>replaceWith</code>.</li>
      <li>לפני רינדור מחדש — <strong>לרוקן</strong>, אחרת הפריטים מצטברים.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? קיבלת שם מהמשתמש ורוצה להציג אותו. במה תשתמשי?
- `innerHTML`, כי הוא גמיש יותר
+ `textContent` — קלט ממשתמש עלול להכיל תגיות, ו-innerHTML היה מריץ אותן (XSS)
- `document.write`
- `setAttribute`
= `innerHTML` שמור למחרוזות שאת עצמך כתבת.

? למה עדיף `classList.toggle("is-active")` על פני שינוי `style` ישירות?
- כי זה מהיר יותר תמיד
+ כי העיצוב נשאר במקום אחד ב-CSS, ו-JavaScript רק מחליף מצב במקום להחזיק צבעים בתוך הלוגיקה
- כי `style` אינו נתמך
- כי `classList` עוקף את ה-Cascade
= inline style גם גובר כמעט על הכול, ולכן קשה מאוד לדרוס אותו אחר כך.

? יצרת אלמנט עם `createElement` ומילאת אותו, אבל הוא לא מופיע. מה חסר?
- צריך `display: block`
+ לא חיברת אותו לעץ — צריך `parent.append(el)`
- צריך `innerHTML` במקום `textContent`
- צריך לרענן את הדף
= עד החיבור לעץ האלמנט קיים רק בזיכרון.

? איך כותבים `background-color` דרך `el.style`?
- `el.style["background-color"] = ...` בלבד
+ `el.style.backgroundColor` — ב-camelCase, כי מקף אינו חוקי בשם תכונה ב-JavaScript
- `el.style.background_color`
- אי אפשר, רק דרך CSS
= אותו כלל חל על `fontSize`, `borderRadius` וכל מאפיין עם מקף.

? מרנדרת רשימה מחדש אחרי סינון והפריטים מצטברים. מה חסר?
- `el.remove()` על הרשימה
+ לרוקן את המיכל לפני הרינדור, למשל `list.innerHTML = ""`
- להוסיף `prepend` במקום `append`
- לקרוא ל-`querySelectorAll` מחדש
= כאן `innerHTML` בטוח לגמרי, כי המחרוזת ריקה ולא מגיעה מאף משתמש.
```
