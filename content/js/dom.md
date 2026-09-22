# The DOM

<p class="lead">
עד עכשיו ה־JavaScript שלנו הדפיס לקונסולה. מכאן והלאה הוא נוגע בדף עצמו.
ה־<strong>DOM</strong> הוא הגשר: ייצוג של מסמך ה־HTML כ<strong>עץ של אובייקטים</strong>
שאפשר לקרוא ולשנות מקוד. זה הפרק שבו שלוש השכבות — HTML, CSS ו־JavaScript —
סוף־סוף נפגשות.
</p>

## מה זה DOM

<div class="box theory">
  <div class="box-head"><span class="icon">🌳</span>Document Object Model</div>
  <div class="box-body">
    <p>
      כשהדפדפן טוען דף, הוא לא שומר את ה־HTML כטקסט. הוא <strong>מפרסר</strong> אותו
      ובונה ממנו <strong>עץ של אובייקטים</strong> — אובייקט לכל אלמנט,
      עם יחסי הורה, ילד ואחים שפגשנו בפרק Elements, Tags &amp; Nesting.
    </p>
    <p class="note-line">
      ה־DOM הוא <strong>לא</strong> קובץ ה־HTML. הוא מה שהדפדפן בנה ממנו,
      והוא <strong>חי</strong> — כל שינוי שנעשה בו מופיע על המסך מיד.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>קובץ ה־HTML הוא נקודת ההתחלה בלבד.</strong> אחרי הטעינה,
מה שרואים על המסך הוא ה־DOM. לכן <code>View Source</code> מראה את הקובץ המקורי,
ואילו לשונית <strong>Elements</strong> בכלי הפיתוח מראה את ה־DOM הנוכחי —
ואחרי שקוד רץ, השניים כבר לא זהים.
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🧩</span>זה גם מסביר משהו מ־HTML</div>
  <div class="box-body">
    <p>
      בפרק div &amp; span ראינו ש־<code>&lt;div&gt;</code> בתוך <code>&lt;p&gt;</code>
      גורם לדפדפן ״לתקן״ את המבנה. עכשיו ברור למה: הדפדפן בונה עץ תקין,
      וה־<strong>עץ</strong> הוא מה שקובע — לא מה שכתבת.
    </p>
  </div>
</div>

## document

<div class="box">
  <div class="box-body">
    <p>
      נקודת הכניסה לעץ היא המשתנה הגלובלי <code>document</code>,
      שמייצג את המסמך כולו. ממנו מגיעים לכל שאר האלמנטים.
    </p>
    <p class="note-line">
      <code>document</code> קיים <strong>רק בדפדפן</strong>. ב־Node.js הוא לא קיים,
      כי אין שם דף. זו בדיוק ההבחנה מפרק Overview.
    </p>
  </div>
</div>

## בחירת אלמנטים

<div class="box theory">
  <div class="box-head"><span class="icon">🎯</span>שלוש שיטות</div>
  <div class="box-body">
    <ul>
      <li><strong><code>getElementById("id")</code></strong> — לפי id. מחזיר אלמנט אחד או <code>null</code>.</li>
      <li><strong><code>querySelector("css")</code></strong> — <strong>הראשון</strong> שמתאים לבורר CSS.</li>
      <li><strong><code>querySelectorAll("css")</code></strong> — <strong>כל</strong> ההתאמות.</li>
    </ul>
    <p class="note-line">
      שתי האחרונות מקבלות <strong>בורר CSS רגיל</strong> — בדיוק אותם בוררים
      מפרקי Syntax &amp; Selectors ו־Advanced Selectors. כל מה שלמדת שם
      עובד כאן כמו שהוא.
    </p>
  </div>
</div>

```demo
<ul id="fruits">
  <li class="item">Apple</li>
  <li class="item featured">Banana</li>
  <li class="item">Cherry</li>
</ul>
<script>
  console.log(document.getElementById("fruits").tagName);
  console.log(document.querySelector(".item").textContent);
  console.log(document.querySelector(".item.featured").textContent);
  console.log(document.querySelectorAll(".item").length);
  console.log(document.querySelector(".missing"));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שימי לב לשורה האחרונה: בורר שלא מצא כלום מחזיר <strong><code>null</code></strong> —
      ולא שגיאה. זה ריק <strong>מכוון</strong>, בדיוק כפי שהגדרנו <code>null</code>
      בפרק Variables.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>השגיאה מספר אחת ב־DOM</div>
  <div class="box-body">
    <p>
      <code>Cannot read properties of null</code> היא השגיאה שתפגשי הכי הרבה.
      פירושה תמיד אותו דבר: <strong>הבורר לא מצא את האלמנט</strong>,
      ואז ניסית לגעת בתכונה של <code>null</code>.
    </p>
    <p class="note-line">
      שתי הסיבות הנפוצות: שגיאת כתיב בבורר, או שהסקריפט רץ
      <strong>לפני</strong> שהאלמנט נוצר. תכף נטפל בשנייה.
    </p>
  </div>
</div>

## NodeList אינו מערך

<div class="box warn">
  <div class="box-head"><span class="icon">📋</span>מה querySelectorAll באמת מחזיר</div>
  <div class="box-body">
    <p>
      <code>querySelectorAll</code> מחזיר <strong>NodeList</strong> — אוסף שנראה
      כמו מערך, יש לו <code>length</code> ואפשר לגשת אליו באינדקס,
      אבל הוא <strong>לא מערך</strong>.
    </p>
    <p>
      <code>forEach</code> עובד עליו. <code>map</code> ו־<code>filter</code> —
      <strong>לא</strong>. להמרה למערך אמיתי משתמשים ב־<code>Array.from(...)</code>
      או ב־<code>[...nodeList]</code>.
    </p>
  </div>
</div>

```demo
<p class="line">one</p>
<p class="line">two</p>
<script>
  const items = document.querySelectorAll(".line");
  console.log(Array.isArray(items));
  console.log(items.length, items[0].textContent);

  items.forEach(function (el) { console.log("forEach:", el.textContent); });

  const real = Array.from(items);
  console.log(Array.isArray(real));
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>forEach</code>, <code>map</code> ומערכים בכלל הם הנושא של פרק
      <strong>Arrays</strong>. כאן מספיק לדעת שההמרה קיימת ולמה היא נחוצה.
    </p>
  </div>
</div>

## קריאת תוכן ותכונות

| מה | משמעות |
| --- | --- |
| `el.textContent` | הטקסט שבתוך האלמנט |
| `el.tagName` | שם התגית, באותיות גדולות |
| `el.id` | ערך ה־`id` |
| `el.className` | מחרוזת ה־`class` |
| `el.getAttribute("href")` | ערך של כל attribute |
| `el.dataset.x` | ערך של `data-x` |

```demo
<a id="link" href="https://example.com" data-role="primary">Example</a>
<script>
  const link = document.getElementById("link");
  console.log(link.tagName);
  console.log(link.textContent);
  console.log(link.getAttribute("href"));
  console.log(link.dataset.role);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>data-*</code> הם ה־attributes המותאמים אישית מפרק Attributes,
      והם הדרך המקובלת לתלות מידע על אלמנט כדי ש־JavaScript יקרא אותו.
      <code>data-role</code> נקרא כ־<code>dataset.role</code>.
    </p>
  </div>
</div>

## תנועה בעץ

<div class="box">
  <div class="box-body">
    <p>מכל אלמנט אפשר להגיע לשכניו בעץ:</p>
    <ul>
      <li><code>parentElement</code> — ההורה.</li>
      <li><code>children</code> — אוסף הילדים הישירים.</li>
      <li><code>firstElementChild</code> / <code>lastElementChild</code></li>
      <li><code>nextElementSibling</code> / <code>previousElementSibling</code></li>
      <li><code>closest("css")</code> — האב הקדמון הקרוב שמתאים לבורר.</li>
    </ul>
    <p class="note-line">
      שימי לב ל־<code>Element</code> בשמות. יש גם <code>childNodes</code>
      ו־<code>nextSibling</code>, אבל אלה כוללים גם <strong>צמתי טקסט</strong> —
      כולל הרווחים והשורות שבין התגיות. כמעט תמיד רוצים את גרסת ה־<code>Element</code>.
    </p>
  </div>
</div>

```demo
<div id="card">
  <h4>Title</h4>
  <p>Body text</p>
</div>
<script>
  const card = document.getElementById("card");
  console.log(card.children.length);
  console.log(card.firstElementChild.textContent);
  console.log(card.childNodes.length);

  const p = document.querySelector("#card p");
  console.log(p.parentElement.id);
  console.log(p.previousElementSibling.tagName);
  console.log(p.closest("div").id);
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      ההבדל בולט: <code>children</code> מחזיר <strong>2</strong> אלמנטים,
      ואילו <code>childNodes</code> מחזיר <strong>5</strong> — שלושת ההפרשים
      הם צמתי טקסט של הרווחים בין התגיות. זו בדיוק הסיבה להעדיף
      את גרסאות ה־<code>Element</code>.
    </p>
  </div>
</div>

## מתי הסקריפט רץ

<div class="box warn">
  <div class="box-head"><span class="icon">⏱️</span>למה querySelector מחזיר null</div>
  <div class="box-body">
    <p>
      הדפדפן קורא את הדף <strong>מלמעלה למטה</strong>. סקריפט שיושב ב־<code>&lt;head&gt;</code>
      רץ <strong>לפני</strong> שה־<code>&lt;body&gt;</code> נבנה — ולכן האלמנטים
      שהוא מחפש עוד לא קיימים.
    </p>
    <p>שתי דרכים לפתור, ושתיהן מוכרות מפרק Connecting CSS &amp; JavaScript:</p>
    <ul>
      <li><strong><code>&lt;script src="app.js" defer&gt;</code></strong> — הדרך המומלצת. הסקריפט יורד במקביל ורץ אחרי שהדף נבנה.</li>
      <li><strong>סקריפט בסוף ה־<code>&lt;body&gt;</code></strong> — פשוט, ועובד מאותה סיבה.</li>
    </ul>
    <p class="note-line">
      אפשר גם להאזין לאירוע <code>DOMContentLoaded</code>,
      שנראה בפרק <strong>Events</strong>.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>Cannot read properties of null</code></strong> — הבורר לא מצא, או שהסקריפט רץ מוקדם מדי.</li>
      <li><strong>שכחת הנקודה או הסולמית</strong> — <code>querySelector("item")</code> מחפש תגית בשם item.</li>
      <li><strong>סולמית ב־<code>getElementById</code></strong> — שם הפונקציה כבר אומר id, ולכן כותבים <code>"box"</code> ולא <code>"#box"</code>.</li>
      <li><strong><code>map</code> על NodeList</strong> — לא קיים. צריך <code>Array.from</code>.</li>
      <li><strong><code>childNodes</code> במקום <code>children</code></strong> — סופר גם רווחים.</li>
      <li><strong>ציפייה ש־<code>querySelectorAll</code> יחזיר אלמנט</strong> — הוא תמיד מחזיר אוסף, גם כשיש התאמה אחת.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>ה־DOM הוא <strong>עץ אובייקטים</strong> שהדפדפן בנה מה־HTML — ולא הקובץ עצמו.</li>
      <li>הוא <strong>חי</strong>: שינוי בו מופיע על המסך מיד.</li>
      <li><code>document</code> הוא נקודת הכניסה, והוא קיים <strong>רק בדפדפן</strong>.</li>
      <li><code>querySelector</code> ו־<code>querySelectorAll</code> מקבלים <strong>בוררי CSS רגילים</strong>.</li>
      <li>בורר שלא מצא מחזיר <strong><code>null</code></strong>, ומכאן השגיאה הנפוצה ביותר.</li>
      <li><code>querySelectorAll</code> מחזיר <strong>NodeList</strong>: יש <code>forEach</code>, אין <code>map</code>.</li>
      <li><code>data-*</code> נקרא דרך <code>el.dataset</code>.</li>
      <li>לתנועה בעץ מעדיפים את גרסאות ה־<strong><code>Element</code></strong>, שמדלגות על צמתי טקסט.</li>
      <li><strong><code>defer</code></strong> — או סקריפט בסוף ה־body — מבטיח שהאלמנטים כבר קיימים.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה ההבדל בין קובץ ה-HTML לבין ה-DOM?
- אין הבדל, הם אותו דבר
+ ה-HTML הוא נקודת ההתחלה, וה-DOM הוא עץ האובייקטים שהדפדפן בנה ממנו — והוא חי ומשתנה בזמן ריצה
- ה-DOM הוא גרסה מוקטנת של ה-HTML
- ה-DOM קיים רק אחרי שמריצים JavaScript
= לכן View Source מראה את הקובץ, ולשונית Elements מראה את ה-DOM הנוכחי.

? `document.querySelector(".missing")` לא מצא כלום. מה יוחזר?
- מערך ריק
+ `null` — ריק מכוון, ולא שגיאה
- `undefined`
- שגיאה
= ניסיון לגשת לתכונה של null הוא מקור השגיאה הנפוצה ביותר ב-DOM.

? למה `map` לא עובד על התוצאה של `querySelectorAll`?
- כי התוצאה ריקה
+ כי היא NodeList ולא מערך אמיתי — יש לה forEach, אבל לא map או filter
- כי צריך להוסיף await
- כי map עובד רק על מספרים
= ממירים עם `Array.from(nodeList)` או `[...nodeList]`.

? הסקריפט שלך ב-`<head>` ו-`querySelector` מחזיר null, למרות שהבורר נכון. למה?
- הדפדפן חוסם גישה מה-head
+ הסקריפט רץ לפני שה-body נבנה, ולכן האלמנטים עדיין לא קיימים
- צריך להוסיף `type="module"`
- הבורר חייב להיות id
= הפתרון הוא `defer` על תגית הסקריפט, או למקם אותו בסוף ה-body.

? מה ההבדל בין `children` ל-`childNodes`?
- אין הבדל
+ `children` מחזיר רק אלמנטים, ו-`childNodes` כולל גם צמתי טקסט — כולל הרווחים והשורות שבין התגיות
- `childNodes` מחזיר רק את הילד הראשון
- `children` כולל גם נכדים
= לכן כמעט תמיד מעדיפים את גרסאות ה-Element, כמו nextElementSibling.
```
