# Events

<p class="lead">
אירוע הוא משהו שקרה בדף: לחיצה, הקלדה, שליחת טופס, סיום טעינה.
עד עכשיו הקוד שלנו רץ פעם אחת מלמעלה למטה — כאן הוא מתחיל
<strong>להגיב</strong>. זה מה שהופך דף סטטי לאתר שאפשר להשתמש בו.
</p>

## addEventListener

<div class="box theory">
  <div class="box-head"><span class="icon">👂</span>שלושה חלקים</div>
  <div class="box-body">
    <p>
      מאזינים לאירוע על אלמנט מסוים, ומעבירים <strong>פונקציה</strong>
      שתרוץ כשהאירוע יקרה:
    </p>
    <p><code>element.addEventListener("click", handler)</code></p>
    <ul>
      <li><strong>האלמנט</strong> — מי מקשיב.</li>
      <li><strong>שם האירוע</strong> — מחרוזת, באותיות קטנות.</li>
      <li><strong>הפונקציה</strong> — מה לעשות. נקראת <em>handler</em>.</li>
    </ul>
    <p class="note-line">
      הפונקציה <strong>לא נקראת</strong> כאן — רק <strong>נמסרת</strong>.
      הדפדפן הוא שיקרא לה מאוחר יותר. פונקציה שנמסרת כארגומנט
      נקראת <strong>callback</strong> — בדיוק מה שראינו בפרק Functions.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הסוגריים שמשנים הכול</div>
  <div class="box-body">
    <p>
      <code>addEventListener("click", greet)</code> — נכון. מוסרים את הפונקציה.
    </p>
    <p>
      <code>addEventListener("click", greet())</code> — <strong>שגוי</strong>.
      הסוגריים <strong>מריצים</strong> את הפונקציה מיד, ומוסרים למאזין
      את <strong>מה שהיא החזירה</strong> — בדרך כלל <code>undefined</code>.
    </p>
    <p class="note-line">
      התסמין קלאסי: הקוד רץ פעם אחת בטעינת הדף, ואז הלחיצה לא עושה כלום.
    </p>
  </div>
</div>

```demo
<button id="btn">Click me</button>
<script>
  const btn = document.getElementById("btn");
  let count = 0;

  btn.addEventListener("click", () => {
    count = count + 1;
    console.log("clicked", count, "times");
  });

  console.log("listener attached, nothing ran yet");
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בטעינה מודפסת רק השורה האחרונה. לחצי על הכפתור בתצוגה —
      כל לחיצה תוסיף שורה לפאנל.
    </p>
  </div>
</div>

## אובייקט האירוע

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>event</div>
  <div class="box-body">
    <p>
      הדפדפן מעביר ל־handler <strong>אובייקט אירוע</strong> עם פרטים על מה שקרה:
    </p>
    <ul>
      <li><strong><code>event.target</code></strong> — האלמנט ש<strong>עליו</strong> קרה האירוע.</li>
      <li><strong><code>event.currentTarget</code></strong> — האלמנט ש<strong>מאזין</strong>.</li>
      <li><strong><code>event.type</code></strong> — שם האירוע.</li>
      <li><strong><code>event.key</code></strong> — המקש שנלחץ, באירועי מקלדת.</li>
    </ul>
    <p class="note-line">
      ברוב הקוד קוראים לו <code>e</code> או <code>event</code>. זה פרמטר
      של הפונקציה, ולכן השם נתון לבחירתך.
    </p>
  </div>
</div>

```demo
<div id="panel" style="padding:10px;border:2px solid #cbd5e1;font-family:system-ui">
  <button>A</button>
  <button>B</button>
</div>
<script>
  document.getElementById("panel").addEventListener("click", (e) => {
    console.log("type:", e.type);
    console.log("target:", e.target.tagName, e.target.textContent);
    console.log("currentTarget:", e.currentTarget.id);
  });
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      לחצי על אחד הכפתורים. המאזין יושב על ה־<code>div</code>,
      אבל <code>target</code> הוא <strong>הכפתור</strong> שלחצת עליו.
      ההבדל הזה הוא המפתח לסעיף הבא.
    </p>
  </div>
</div>

## בועות

<div class="box theory">
  <div class="box-head"><span class="icon">🫧</span>bubbling</div>
  <div class="box-body">
    <p>
      אירוע לא נעצר באלמנט שעליו קרה. הוא <strong>עולה במעלה העץ</strong> —
      מהאלמנט להורה, משם לסבא, עד ל־<code>document</code>.
    </p>
    <p class="note-line">
      לכן מאזין על ה־<code>div</code> תפס לחיצה על כפתור שבתוכו.
      זו לא תקלה אלא מנגנון מכוון, ומיד נראה למה הוא שימושי.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎯</span>Event delegation</div>
  <div class="box-body">
    <p>
      במקום מאזין לכל פריט ברשימה, שמים <strong>מאזין אחד על ההורה</strong>
      ובודקים מ־<code>event.target</code> על מה בדיוק לחצו.
    </p>
    <p>שני יתרונות אמיתיים:</p>
    <ul>
      <li>מאזין אחד במקום מאות — פחות עבודה לדפדפן.</li>
      <li>עובד גם על פריטים ש<strong>ייווצרו בעתיד</strong>, בלי לחבר להם מאזין.</li>
    </ul>
    <p class="note-line">
      <code>closest()</code> מפרק The DOM שימושי כאן במיוחד,
      כשלחצו על אלמנט שנמצא <em>בתוך</em> הפריט.
    </p>
  </div>
</div>

```demo
<ul id="list" style="font-family:system-ui">
  <li><button data-id="1">Item 1</button></li>
  <li><button data-id="2">Item 2</button></li>
</ul>
<button id="add">Add item</button>
<script>
  const list = document.getElementById("list");
  let next = 3;

  list.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    console.log("clicked item", btn.dataset.id);
  });

  document.getElementById("add").addEventListener("click", () => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.textContent = "Item " + next;
    b.dataset.id = String(next);
    next = next + 1;
    li.append(b);
    list.append(li);
    console.log("added a new item — it works without a new listener");
  });
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      לחצי על ״Add item״ ואז על הפריט החדש. הוא נוצר <strong>אחרי</strong>
      שהמאזין חובר, ובכל זאת הלחיצה עליו נתפסת — כי המאזין יושב על ההורה.
    </p>
  </div>
</div>

## preventDefault ו־stopPropagation

<div class="box">
  <div class="box-body">
    <ul>
      <li>
        <strong><code>e.preventDefault()</code></strong> — מבטל את
        <strong>התנהגות ברירת המחדל</strong> של הדפדפן: מעבר לקישור,
        שליחת טופס, סימון תיבה.
      </li>
      <li>
        <strong><code>e.stopPropagation()</code></strong> — עוצר את
        <strong>עליית הבועה</strong> במעלה העץ.
      </li>
    </ul>
    <p class="note-line">
      שתי פעולות שונות לגמרי שמתבלבלות זו בזו.
      הראשונה על מה ש<strong>הדפדפן</strong> היה עושה,
      השנייה על <strong>מאזינים אחרים</strong> שלך.
    </p>
  </div>
</div>

```demo
<a href="https://example.com" id="link" style="font-family:system-ui">A link that will not navigate</a>
<script>
  document.getElementById("link").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("default prevented — the browser did not navigate");
  });
</script>
```

## אירועים נפוצים

| אירוע | מתי |
| --- | --- |
| `click` | לחיצה |
| `input` | בכל שינוי בשדה — תו אחר תו |
| `change` | כשהשדה **סיים** להשתנות |
| `submit` | שליחת טופס |
| `keydown` | לחיצה על מקש |
| `mouseenter` / `mouseleave` | כניסת ויציאת עכבר |
| `DOMContentLoaded` | ה־HTML נבנה במלואו |

```demo
<input id="field" placeholder="Type here" style="font-family:system-ui;padding:6px">
<script>
  const field = document.getElementById("field");

  field.addEventListener("input", (e) => {
    console.log("input:", e.target.value);
  });

  field.addEventListener("keydown", (e) => {
    if (e.key === "Enter") console.log("Enter pressed");
  });
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      הקלידי בשדה: כל תו מפעיל את <code>input</code> מחדש,
      ו־<code>e.target.value</code> מחזיר את התוכן <strong>העדכני</strong>.
      זה הבסיס לחיפוש חי ולאימות בזמן אמת.
    </p>
  </div>
</div>

## הסרת מאזין

<div class="box">
  <div class="box-body">
    <p>
      <code>removeEventListener</code> מסיר מאזין — אבל רק אם מעבירים לו
      <strong>בדיוק אותה פונקציה</strong> שנמסרה בהוספה.
    </p>
    <p class="note-line">
      לכן פונקציה אנונימית שנכתבה ישירות בתוך <code>addEventListener</code>
      <strong>אי אפשר להסיר</strong> — אין לך הפניה אליה.
      אם תצטרכי להסיר, תני לה שם.
    </p>
  </div>
</div>

## inline onclick

<div class="box warn">
  <div class="box-head"><span class="icon">🚫</span>למה לא כותבים onclick ב־HTML</div>
  <div class="box-body">
    <p>
      אפשר לכתוב <code>&lt;button onclick="doThing()"&gt;</code>, וזה יעבוד.
      אבל זה מערבב <strong>התנהגות לתוך המבנה</strong> — בדיוק אותה בעיה
      שבגללה לא כותבים <code>style=""</code> בכל אלמנט.
    </p>
    <p class="note-line">
      בנוסף אפשר לחבר רק handler אחד, והקוד קשה למצוא.
      <code>addEventListener</code> פותר את שלוש הבעיות.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>סוגריים אחרי שם הפונקציה</strong> — <code>handler()</code> מריץ מיד במקום למסור.</li>
      <li><strong>שם אירוע שגוי</strong> — <code>"onclick"</code> במקום <code>"click"</code>. אין שגיאה, פשוט לא יקרה כלום.</li>
      <li><strong>חיבור מאזין לפני שהאלמנט קיים</strong> — <code>null</code>. צריך <code>defer</code>.</li>
      <li><strong>בלבול בין <code>target</code> ל־<code>currentTarget</code></strong> — הראשון מה שנלחץ, השני מי שמאזין.</li>
      <li><strong>מאזין בתוך לולאה על מאות פריטים</strong> — עדיף delegation.</li>
      <li><strong>שכחת <code>preventDefault</code> בטופס</strong> — הדף ייטען מחדש והקוד ״ייעלם״.</li>
      <li><strong>ניסיון להסיר מאזין אנונימי</strong> — חייבים הפניה לאותה פונקציה.</li>
      <li><strong><code>stopPropagation</code> במקום <code>preventDefault</code></strong> — שתי פעולות שונות לגמרי.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>addEventListener(type, handler)</code> — <strong>מוסרים</strong> פונקציה, לא מריצים אותה.</li>
      <li>אובייקט האירוע נותן <code>target</code>, <code>currentTarget</code>, <code>type</code> ו־<code>key</code>.</li>
      <li>אירועים <strong>עולים במעלה העץ</strong> — bubbling.</li>
      <li><strong>Event delegation</strong>: מאזין אחד על ההורה, ועובד גם על פריטים עתידיים.</li>
      <li><code>preventDefault</code> מבטל את <strong>ברירת המחדל של הדפדפן</strong>.</li>
      <li><code>stopPropagation</code> עוצר את <strong>הבועה</strong>. אלה דברים שונים.</li>
      <li><code>input</code> בכל תו; <code>change</code> בסיום.</li>
      <li>אי אפשר להסיר מאזין אנונימי — צריך הפניה לפונקציה.</li>
      <li><code>addEventListener</code> עדיף על <code>onclick</code> ב־HTML.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל בין `addEventListener("click", greet)` ל-`addEventListener("click", greet())`?
- אין הבדל
+ עם סוגריים הפונקציה רצה מיד בטעינה, ולמאזין נמסר מה שהיא החזירה — בדרך כלל undefined
- הגרסה עם הסוגריים מהירה יותר
- הגרסה בלי סוגריים אינה חוקית
= התסמין: הקוד רץ פעם אחת בטעינת הדף, ואז הלחיצה לא עושה כלום.

? מה ההבדל בין `event.target` ל-`event.currentTarget`?
- הם זהים תמיד
+ `target` הוא האלמנט שעליו קרה האירוע, ו-`currentTarget` הוא האלמנט שמאזין לו
- `target` קיים רק בטפסים
- `currentTarget` הוא ההורה של target תמיד
= כשמאזינים על הורה ולוחצים על ילד, השניים שונים — וזה הבסיס ל-event delegation.

? למה event delegation עובד גם על פריטים שנוצרו אחרי חיבור המאזין?
- כי הדפדפן מחבר מאזינים אוטומטית
+ כי המאזין יושב על ההורה, והאירוע מהפריט החדש עולה אליו בבועה
- כי `querySelectorAll` מתעדכן לבד
- כי הפריטים החדשים יורשים מאזינים
= לכן זה הדפוס המקובל לרשימות דינמיות.

? שלחת טופס והדף נטען מחדש, כך שהקוד שלך "נעלם". מה חסר?
- `stopPropagation()`
+ `e.preventDefault()` בתוך המאזין ל-submit, שמבטל את שליחת הטופס כברירת מחדל
- `removeEventListener`
- להאזין ל-`click` במקום ל-`submit`
= `stopPropagation` עוצר את הבועה בלבד, והוא לא קשור להתנהגות הדפדפן.

? רוצה תגובה בכל תו שהמשתמשת מקלידה. לאיזה אירוע תאזיני?
- `change`
+ `input` — הוא נורה בכל שינוי בשדה, תו אחר תו
- `keyup` בלבד
- `submit`
= `change` נורה רק כשהשדה מסיים להשתנות, למשל ביציאה ממנו.
```
