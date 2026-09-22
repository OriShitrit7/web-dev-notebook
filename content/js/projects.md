# Mini Web Projects

<p class="lead">
עד כאן למדנו את החלקים בנפרד. בפרק הזה נרכיב אותם: שלושה פרויקטים קטנים
ומלאים, שכל אחד מהם משתמש בשלוש השכבות יחד. לא נציג רעיונות חדשים —
נראה איך מה שכבר יש לך הופך לדבר שעובד.
</p>

## דפוס העבודה

<div class="box theory">
  <div class="box-head"><span class="icon">🧱</span>שלוש שכבות, שלושה תפקידים</div>
  <div class="box-body">
    <ol>
      <li><strong>HTML</strong> — המבנה. מה קיים בדף, עם <code>id</code> ו־<code>class</code> שיאפשרו אחיזה.</li>
      <li><strong>CSS</strong> — כל <strong>מצב</strong> אפשרי. איך נראה פריט רגיל, איך נראה פריט שהושלם.</li>
      <li><strong>JavaScript</strong> — רק <strong>החלפת מצבים</strong> ותגובה לאירועים.</li>
    </ol>
    <p class="note-line">
      אם מצאת את עצמך כותבת צבעים בתוך JavaScript — כנראה שהמצב הזה
      היה צריך להיות מחלקת CSS.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>סדר העבודה שמונע תקיעות:</strong> קודם HTML סטטי שנראה נכון,
אחר כך CSS לכל המצבים — כולל אלה שעוד לא קיימים — ורק בסוף JavaScript.
כך כשמגיעים לקוד, כל מה שנשאר הוא <code>classList.toggle</code>.
</div>

## פרויקט 1 — מונה

<div class="box">
  <div class="box-body">
    <p>
      הפרויקט הקטן ביותר שמדגים את המחזור המלא:
      <strong>מצב בקוד ← אירוע ← עדכון המצב ← עדכון ה־DOM</strong>.
    </p>
  </div>
</div>

```demo
<style>
  .counter { font-family: system-ui; display: flex; align-items: center; gap: 10px; }
  .value { font-size: 28px; min-width: 50px; text-align: center; font-weight: 700; }
  .counter button { font: inherit; padding: 6px 14px; border: 0; border-radius: 8px;
                    background: #4f46e5; color: white; cursor: pointer; }
  .counter button:disabled { background: #cbd5e1; cursor: not-allowed; }
</style>
<div class="counter">
  <button id="minus">−</button>
  <span class="value" id="value">0</span>
  <button id="plus">+</button>
  <button id="reset">Reset</button>
</div>
<script>
  let count = 0;
  const valueEl = document.getElementById("value");
  const minus = document.getElementById("minus");

  function render() {
    valueEl.textContent = count;
    minus.disabled = count === 0;
  }

  document.getElementById("plus").addEventListener("click", function () {
    count = count + 1;
    render();
  });

  minus.addEventListener("click", function () {
    count = count - 1;
    render();
  });

  document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    render();
  });

  render();
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">🔑</span>הרעיון המרכזי: פונקציית render</div>
  <div class="box-body">
    <p>
      שימי לב שאף מאזין לא נוגע ב־DOM ישירות. כל אחד מהם משנה את
      <strong>המשתנה <code>count</code></strong> וקורא ל־<code>render()</code>,
      ורק היא מעדכנת את המסך.
    </p>
    <p class="note-line">
      זה הדפוס שכל ספריות ה־UI המודרניות בנויות עליו:
      <strong>המצב הוא מקור האמת, והתצוגה נגזרת ממנו</strong>.
      הוא גם מונע את הבאג הנפוץ שבו המסך והנתונים לא מסונכרנים.
    </p>
  </div>
</div>

## פרויקט 2 — רשימת משימות

<div class="box">
  <div class="box-body">
    <p>
      כאן נפגשים טופס, יצירת אלמנטים ו־event delegation —
      שלושת הפרקים האחרונים בפרויקט אחד.
    </p>
  </div>
</div>

```demo
<style>
  .todo { font-family: system-ui; max-width: 320px; }
  .todo form { display: flex; gap: 6px; }
  .todo input { flex: 1; min-width: 0; padding: 6px; border: 1px solid #cbd5e1; border-radius: 6px; }
  .todo button { font: inherit; padding: 6px 12px; border: 0; border-radius: 6px;
                 background: #4f46e5; color: white; cursor: pointer; }
  .todo ul { list-style: none; padding: 0; margin: 12px 0 0; }
  .todo li { display: flex; align-items: center; gap: 8px; padding: 6px 0;
             border-bottom: 1px solid #e7e5e0; }
  .todo li span { flex: 1; min-width: 0; }
  .todo li.done span { text-decoration: line-through; color: #94a3b8; }
  .remove { background: transparent; color: #be123c; padding: 2px 6px; }
  .empty { color: #94a3b8; font-size: 13px; }
</style>
<div class="todo">
  <form id="form">
    <input id="text" placeholder="Add a task" required>
    <button type="submit">Add</button>
  </form>
  <ul id="list"></ul>
  <p class="empty" id="empty">No tasks yet</p>
</div>
<script>
  const form = document.getElementById("form");
  const text = document.getElementById("text");
  const list = document.getElementById("list");
  const empty = document.getElementById("empty");

  function refreshEmpty() {
    empty.hidden = list.children.length > 0;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = text.value.trim();
    if (title === "") return;

    const li = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = title;

    const remove = document.createElement("button");
    remove.textContent = "✕";
    remove.className = "remove";
    remove.type = "button";

    li.append(label, remove);
    list.append(li);

    text.value = "";
    text.focus();
    refreshEmpty();
    console.log("added:", title);
  });

  list.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.classList.contains("remove")) {
      li.remove();
      refreshEmpty();
      console.log("removed");
      return;
    }
    li.classList.toggle("done");
    console.log("toggled:", li.classList.contains("done"));
  });

  refreshEmpty();
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">🧩</span>מה קורה כאן</div>
  <div class="box-body">
    <ul>
      <li><strong><code>submit</code> + <code>preventDefault</code></strong> — כך זה עובד גם ב־Enter.</li>
      <li><strong><code>trim()</code></strong> מפרק Strings — מונע משימה שכולה רווחים.</li>
      <li><strong><code>textContent</code></strong> ולא <code>innerHTML</code> — הטקסט מגיע ממשתמש.</li>
      <li><strong>מאזין אחד על <code>ul</code></strong> — עובד גם על פריטים שנוצרו עכשיו.</li>
      <li><strong><code>closest("li")</code></strong> — כי הלחיצה עלולה ליפול על ה־<code>span</code> שבפנים.</li>
      <li><strong><code>classList.toggle("done")</code></strong> — הקו החוצה מוגדר כולו ב־CSS.</li>
    </ul>
  </div>
</div>

## פרויקט 3 — מצב כהה

<div class="box">
  <div class="box-body">
    <p>
      הפרויקט הזה כמעט ואינו JavaScript: כל העבודה נעשית במשתני CSS
      מפרק <strong>CSS Variables</strong>, והקוד רק מחליף תכונה אחת על השורש.
    </p>
  </div>
</div>

```demo
<style>
  .theme { --bg: #ffffff; --text: #1c1c1f; --muted: #6b6b70; --edge: #e7e5e0; }
  .theme[data-theme="dark"] { --bg: #14141a; --text: #f4f4f5; --muted: #a1a1aa; --edge: #2a2a33; }
  .card { background-color: var(--bg); color: var(--text);
          border: 1px solid var(--edge); padding: 16px; border-radius: 10px;
          font-family: system-ui;
          transition: background-color .2s ease, color .2s ease; }
  .card p { color: var(--muted); font-size: 13px; }
  .card button { font: inherit; padding: 6px 12px; border: 1px solid var(--edge);
                 border-radius: 8px; background: transparent; color: var(--text); cursor: pointer; }
</style>
<div class="theme" id="theme">
  <div class="card">
    <h4 style="margin:0 0 4px">Theme demo</h4>
    <p>One click swaps every colour in this card.</p>
    <button id="toggle">Switch theme</button>
  </div>
</div>
<script>
  const theme = document.getElementById("theme");

  document.getElementById("toggle").addEventListener("click", function () {
    const isDark = theme.dataset.theme === "dark";
    theme.dataset.theme = isDark ? "light" : "dark";
    console.log("theme is now:", theme.dataset.theme);
  });
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">🌗</span>למה זה כל כך קצר</div>
  <div class="box-body">
    <p>
      אף כלל עיצוב לא שוכפל. ה־CSS מגדיר את המשתנים פעם אחת,
      ובורר <code>[data-theme="dark"]</code> מגדיר אותם מחדש.
      ה־JavaScript משנה <strong>ערך אחד</strong> — והירושה עושה את השאר.
    </p>
    <p class="note-line">
      באתר אמיתי היו מוסיפים שתי שורות: קריאה ל־<code>localStorage</code>
      כדי לזכור את הבחירה, ובדיקת <code>prefers-color-scheme</code>
      מפרק Responsive Design כברירת מחדל.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב שהמשתנים מוגדרים על ה־<code>&lt;div class="theme"&gt;</code> החיצוני,
      והצבעים נצרכים על <code>.card</code> שבפנים. זה הדפוס המקובל:
      משתני ערכת נושא יושבים על אב קדמון — בדרך כלל <code>:root</code> —
      וכל מה שבתוכו יורש אותם.
    </p>
  </div>
</div>

## איך ניגשים לפרויקט חדש

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>חמישה צעדים</div>
  <div class="box-body">
    <ol>
      <li><strong>לתאר במילים</strong> מה קורה כשהמשתמש עושה כל פעולה.</li>
      <li><strong>לזהות את המצב</strong> — אילו נתונים משתנים? זה יהיה המשתנה המרכזי.</li>
      <li><strong>HTML</strong> סטטי עם התוכן במצב ההתחלתי.</li>
      <li><strong>CSS</strong> לכל המצבים, כולל אלה שעדיין אין להם קוד.</li>
      <li><strong>JavaScript</strong> — מאזינים שמשנים מצב, ופונקציית <code>render</code> אחת.</li>
    </ol>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>כשמשהו לא עובד</div>
  <div class="box-body">
    <p>סדר בדיקה שפותר את רוב המקרים:</p>
    <ul>
      <li><strong>Console פתוח?</strong> שגיאה אדומה אחת מסבירה בדרך כלל הכול.</li>
      <li><strong><code>Cannot read properties of null</code></strong> — הבורר לא מצא, או שהסקריפט רץ לפני ה־HTML.</li>
      <li><strong>הלחיצה לא עושה כלום</strong> — סוגריים מיותרים ב־handler, או שם אירוע שגוי.</li>
      <li><strong>הדף נטען מחדש</strong> — חסר <code>preventDefault</code>.</li>
      <li><strong>המספרים משורשרים</strong> — <code>value</code> הוא מחרוזת.</li>
      <li><strong>אין שגיאה וגם אין תוצאה</strong> — <code>console.log</code> בתחילת הפונקציה, לוודא שהיא בכלל נקראת.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>HTML למבנה, CSS <strong>לכל המצבים</strong>, JavaScript <strong>להחלפת מצבים</strong> בלבד.</li>
      <li>צבע בתוך JavaScript הוא סימן שהמצב היה צריך להיות מחלקת CSS.</li>
      <li><strong>המצב הוא מקור האמת</strong>, והתצוגה נגזרת ממנו דרך <code>render()</code>.</li>
      <li>טופס: <code>submit</code> + <code>preventDefault</code>, וניקוי השדה אחרי הוספה.</li>
      <li>רשימה דינמית: <strong>מאזין אחד על ההורה</strong> + <code>closest()</code>.</li>
      <li>קלט ממשתמש — <code>trim()</code> ואז <code>textContent</code>.</li>
      <li>ערכת נושא שלמה מתחלפת בשינוי <strong>ערך אחד</strong>, בזכות משתני CSS.</li>
      <li>כשתקוע: Console פתוח, ואז לעבור על רשימת התסמינים.</li>
    </ul>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎓</span>מה הלאה</div>
  <div class="box-body">
    <p>
      שלוש השכבות מחוברות, וכבר אפשר לבנות איתן אתר שלם ועובד.
      מה שנשאר בסילבוס הם פרקי <strong>יסודות השפה</strong> — תנאים, לולאות,
      פונקציות, מערכים ואובייקטים — שמופיעים כאן בשימוש,
      ושם ייפרקו לגורמים.
    </p>
  </div>
</div>

## בדקי את עצמך

```quiz
? למה עדיף שכל המאזינים ישנו משתנה ויקראו ל-`render()`, במקום לעדכן את ה-DOM ישירות?
- כי זה מקצר את הקוד תמיד
+ כי המצב נשאר מקור אמת יחיד והתצוגה נגזרת ממנו, מה שמונע מצב שבו המסך והנתונים לא מסונכרנים
- כי `render` מהיר יותר
- כי אחרת המאזינים לא יעבדו
= זה הדפוס שכל ספריות ה-UI המודרניות בנויות עליו.

? ברשימת המשימות, למה המאזין יושב על ה-`ul` ולא על כל `li` בנפרד?
- כי `li` אינו תומך במאזינים
+ כי כך יש מאזין אחד בלבד, והוא עובד גם על פריטים שייווצרו בעתיד
- כי זה מונע שגיאות תחביר
- כי `ul` נטען ראשון
= זהו event delegation, והוא מסתמך על כך שאירועים עולים בבועה להורה.

? למה נעשה שימוש ב-`closest("li")` בתוך המאזין?
- כדי למצוא את ההורה של הרשימה
+ כי הלחיצה עלולה ליפול על אלמנט שנמצא בתוך ה-li, כמו ה-span, ולא על ה-li עצמו
- כי `target` תמיד מחזיר null
- כדי לשפר ביצועים
= `closest` מטפס במעלה העץ עד שהוא מוצא התאמה לבורר.

? בפרויקט מצב כהה, מה בעצם עושה ה-JavaScript?
- מחליף את כל כללי ה-CSS
+ משנה ערך אחד — תכונת `data-theme` — ומשתני ה-CSS והירושה עושים את כל השאר
- טוען קובץ עיצוב שני
- צובע כל אלמנט בנפרד
= אף כלל עיצוב לא שוכפל, ולכן הקוד כל כך קצר.

? המשימות שמוסיפים מצטברות עם רווחים מיותרים ומשימות ריקות נכנסות. מה חסר?
- `innerHTML` במקום `textContent`
+ `trim()` על הערך, ובדיקה שהוא אינו מחרוזת ריקה לפני ההוספה
- `preventDefault`
- `closest()`
= `trim` מפרק Strings מסיר רווחים מההתחלה ומהסוף.
```
