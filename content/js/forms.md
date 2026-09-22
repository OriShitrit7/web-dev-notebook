# User Input & Forms

<p class="lead">
טופס הוא המקום שבו המשתמש מדבר עם האתר. בפרק Forms של HTML בנינו את המבנה
וראינו מה הדפדפן שולח; כאן ניקח שליטה על התהליך — נקרא ערכים,
נאמת אותם, ונטפל בשליחה בלי לטעון את הדף מחדש.
</p>

## קריאת ערך

<div class="box theory">
  <div class="box-head"><span class="icon">⌨️</span>value הוא תמיד מחרוזת</div>
  <div class="box-body">
    <p>
      <code>input.value</code> מחזיר את מה שהמשתמש הקליד —
      ו<strong>תמיד כמחרוזת</strong>, גם כששדה הוא <code>type="number"</code>.
    </p>
    <p class="note-line">
      זו הסיבה שהמלכודת מפרק Operators חוזרת כאן בכוח:
      <code>"5" + 1</code> הוא <code>"51"</code>. חייבים להמיר עם
      <code>Number()</code> לפני כל חישוב.
    </p>
  </div>
</div>

```demo
<input id="num" type="number" value="5" style="font-family:system-ui;padding:6px">
<script>
  const raw = document.getElementById("num").value;
  console.log(raw, typeof raw);
  console.log("without converting:", raw + 1);
  console.log("after Number():", Number(raw) + 1);
</script>
```

| סוג שדה | איך קוראים |
| --- | --- |
| טקסט, מספר, סיסמה | `input.value` |
| תיבת סימון | `input.checked` — `true` / `false` |
| כפתור רדיו | `form.querySelector('input[name="x"]:checked')` |
| רשימה נפתחת | `select.value` |
| אזור טקסט | `textarea.value` |

```demo
<label style="font-family:system-ui"><input type="checkbox" id="agree" checked> I agree</label>
<select id="size" style="font-family:system-ui;margin-inline-start:10px">
  <option value="s">Small</option>
  <option value="m" selected>Medium</option>
</select>
<script>
  console.log("checked:", document.getElementById("agree").checked);
  console.log("select value:", document.getElementById("size").value);
</script>
```

## טיפול בשליחה

<div class="box warn">
  <div class="box-head"><span class="icon">🔄</span>למה הדף נטען מחדש</div>
  <div class="box-body">
    <p>
      התנהגות ברירת המחדל של טופס היא <strong>לשלוח לשרת ולטעון דף מחדש</strong> —
      בדיוק מה שראינו בפרק Forms.
    </p>
    <p>
      כשרוצים לטפל בשליחה ב־JavaScript, מאזינים לאירוע <code>submit</code>
      וקוראים ל־<code>e.preventDefault()</code>. בלי זה הדף ייטען מחדש
      והקוד שלך ייראה כאילו לא עשה כלום.
    </p>
  </div>
</div>

<div class="keypoint">
מאזינים ל־<code>submit</code> <strong>על הטופס</strong>, ולא ל־<code>click</code>
על הכפתור. כך זה יעבוד גם כשמשתמשת לוחצת <strong>Enter</strong> בתוך שדה —
דרך נפוצה מאוד לשלוח טופס, שנשברת לגמרי אם מאזינים לכפתור בלבד.
</div>

```demo
<form id="signup" style="font-family:system-ui">
  <label>Name: <input name="name" value="Ori"></label>
  <label style="margin-inline-start:8px">Age: <input name="age" type="number" value="22"></label>
  <button type="submit">Send</button>
</form>
<script>
  document.getElementById("signup").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("name:", data.get("name"));
    console.log("age:", Number(data.get("age")));
    console.log("all fields:", Object.fromEntries(data));
  });
</script>
```

<div class="box example">
  <div class="box-head"><span class="icon">📋</span>FormData</div>
  <div class="box-body">
    <p>
      <code>new FormData(formElement)</code> אוסף בבת אחת את כל השדות
      שיש להם <strong><code>name</code></strong> — ומכאן החשיבות של ה־attribute
      הזה שהודגשה בפרק Forms.
    </p>
    <p class="note-line">
      <code>data.get("name")</code> לשדה בודד, או
      <code>Object.fromEntries(data)</code> לאובייקט עם הכול.
      זה חוסך קריאה ידנית לכל שדה בנפרד.
    </p>
  </div>
</div>

## אימות

<div class="box theory">
  <div class="box-head"><span class="icon">✅</span>שלוש שכבות</div>
  <div class="box-body">
    <ol>
      <li><strong>ב־HTML</strong> — <code>required</code>, <code>type="email"</code>, <code>min</code>, <code>maxlength</code>, <code>pattern</code>. הדפדפן אוכף אותם בחינם.</li>
      <li><strong>ב־JavaScript</strong> — הודעות מותאמות ובדיקות שה־HTML לא יודע לבטא.</li>
      <li><strong>בשרת</strong> — <strong>חובה</strong>, תמיד.</li>
    </ol>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">🔓</span>אימות בצד הלקוח אינו אבטחה</div>
  <div class="box-body">
    <p>
      כל בדיקה שרצה בדפדפן אפשר לעקוף בכלי הפיתוח תוך שניות.
      היא קיימת כדי <strong>לעזור למשתמש</strong> — לא כדי להגן על המערכת.
    </p>
    <p class="note-line">
      <strong>השרת חייב לבדוק הכול מחדש.</strong> זה נכון גם כשהטופס
      נראה נעול לחלוטין מצד הדפדפן.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>שלוש שיטות שימושיות שהדפדפן נותן:</p>
    <ul>
      <li><code>input.checkValidity()</code> — האם השדה עומד בכללים.</li>
      <li><code>form.checkValidity()</code> — האם כל הטופס תקין.</li>
      <li><code>input.setCustomValidity("...")</code> — הודעת שגיאה משלך.</li>
    </ul>
    <p class="note-line">
      ב־CSS יש גם <code>:invalid</code> ו־<code>:valid</code> מפרק
      Advanced Selectors, ואיתם אפשר לצבוע שדה שגוי בלי שורת JavaScript אחת.
    </p>
  </div>
</div>

```demo
<style>
  input:invalid { border: 2px solid #be123c; }
  input:valid { border: 2px solid #047857; }
  .msg { color: #be123c; font-size: 13px; min-height: 18px; }
</style>
<form id="f" novalidate style="font-family:system-ui">
  <input id="email" type="email" required placeholder="you@example.com" style="padding:6px">
  <button type="submit">Submit</button>
  <p class="msg" id="msg"></p>
</form>
<script>
  const form = document.getElementById("f");
  const email = document.getElementById("email");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!email.checkValidity()) {
      msg.textContent = "Please enter a valid email address";
      console.log("blocked:", email.validationMessage);
      return;
    }
    msg.textContent = "";
    console.log("submitted:", email.value);
  });
</script>
```

<div class="box warn">
  <div class="box-head"><span class="icon">🔑</span>למה יש כאן novalidate</div>
  <div class="box-body">
    <p>
      זו נקודה שתוקעת הרבה אנשים. כברירת מחדל, כשיש שדה לא תקין
      הדפדפן <strong>חוסם את השליחה בעצמו</strong> ומציג בועה משלו —
      ואירוע <code>submit</code> <strong>לא נורה כלל</strong>.
      כלומר הקוד שלך לעולם לא ירוץ.
    </p>
    <p>
      התכונה <code>novalidate</code> על ה־<code>&lt;form&gt;</code> מכבה
      את החסימה האוטומטית בלבד. הכללים עצמם נשארים: <code>checkValidity()</code>
      עדיין עובד, וגם <code>:invalid</code> ו־<code>:valid</code> ב־CSS.
    </p>
    <p class="note-line">
      זה בדיוק מה שעושים כשרוצים הודעות שגיאה משלך במקום בועות הדפדפן.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      נסי לשלוח ריק, ואז להקליד כתובת תקינה. שימי לב שהמסגרת מתחלפת
      בין אדום לירוק <strong>בלי שום קוד</strong> — זה <code>:invalid</code>
      ו־<code>:valid</code> של CSS לבדם.
    </p>
  </div>
</div>

## תגובה בזמן אמת

<div class="box">
  <div class="box-body">
    <p>
      עם אירוע <code>input</code> מפרק Events אפשר להגיב בכל תו —
      לספור תווים, לסנן רשימה, או להפעיל כפתור רק כשהטופס תקין.
    </p>
  </div>
</div>

```demo
<input id="bio" maxlength="40" placeholder="Say something" style="font-family:system-ui;padding:6px;width:220px">
<p id="counter" style="font-family:system-ui;font-size:13px;color:#6b6b70">0 / 40</p>
<button id="send" disabled style="font-family:system-ui">Send</button>
<script>
  const bio = document.getElementById("bio");
  const counter = document.getElementById("counter");
  const send = document.getElementById("send");

  bio.addEventListener("input", function () {
    const used = bio.value.length;
    counter.textContent = used + " / 40";
    send.disabled = used === 0;
  });
</script>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>disabled</code> הוא תכונה בוליאנית: <code>send.disabled = false</code>
      מפעיל את הכפתור. שימי לב ש־<code>value.length</code> הוא בדיוק
      אותו <code>length</code> של מחרוזות מפרק Strings.
    </p>
  </div>
</div>

## נגישות

<div class="box example">
  <div class="box-head"><span class="icon">♿</span>שלושה דברים שלא עולים כלום</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;label&gt;</code> לכל שדה</strong> — מרחיב את אזור הלחיצה ומקריא את השם בקורא מסך.</li>
      <li><strong>הודעת שגיאה בטקסט</strong> — צבע אדום לבדו לא נגיש לעיוורי צבעים.</li>
      <li><strong>לא להסיר את קו המיקוד</strong> — כפי שראינו בפרק Borders, Shadows &amp; Outlines.</li>
    </ul>
    <p class="note-line">
      <code>placeholder</code> <strong>אינו תחליף ל־label</strong> — הוא נעלם
      ברגע שמתחילים להקליד.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת <code>preventDefault</code></strong> — הדף נטען מחדש והקוד ״נעלם״.</li>
      <li><strong>האזנה ל־<code>click</code> על הכפתור</strong> — נשבר כששולחים עם Enter.</li>
      <li><strong>חישוב על <code>value</code> בלי המרה</strong> — <code>"5" + 1</code> הוא <code>"51"</code>.</li>
      <li><strong>שדה בלי <code>name</code></strong> — לא ייכנס ל־<code>FormData</code> כלל.</li>
      <li><strong><code>value</code> על תיבת סימון</strong> — צריך <code>checked</code>.</li>
      <li><strong>הסתמכות על אימות צד לקוח כאבטחה</strong> — אפשר לעקוף בשניות.</li>
      <li><strong><code>placeholder</code> במקום <code>label</code></strong> — נעלם בהקלדה ואינו נגיש.</li>
      <li><strong>הודעת שגיאה בצבע בלבד</strong> — צריך גם טקסט.</li>
      <li><strong>אימות מותאם בלי <code>novalidate</code></strong> — הדפדפן חוסם את השליחה בעצמו, ואירוע <code>submit</code> לא נורה כלל.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>input.value</code> הוא <strong>תמיד מחרוזת</strong> — ממירים עם <code>Number()</code>.</li>
      <li>תיבת סימון נקראת דרך <code>checked</code>, לא <code>value</code>.</li>
      <li>מאזינים ל־<strong><code>submit</code> על הטופס</strong>, כדי שגם Enter יעבוד.</li>
      <li><code>e.preventDefault()</code> מונע את טעינת הדף מחדש.</li>
      <li><code>new FormData(form)</code> אוסף כל שדה שיש לו <strong><code>name</code></strong>.</li>
      <li>אימות בשלוש שכבות: HTML, JavaScript, ו<strong>שרת — תמיד</strong>.</li>
      <li><strong>אימות בצד הלקוח אינו אבטחה.</strong></li>
      <li><code>:invalid</code> ו־<code>:valid</code> מעצבים מצבי שדה <strong>בלי JavaScript</strong>.</li>
      <li>להודעות משלך צריך <strong><code>novalidate</code></strong> על הטופס, אחרת <code>submit</code> לא נורה.</li>
      <li><code>label</code> לכל שדה; <code>placeholder</code> אינו תחליף.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? קראת `input.value` משדה `type="number"` והחישוב יצא שגוי. למה?
- שדות מספר אינם נתמכים
+ כי `value` מחזיר תמיד מחרוזת, גם בשדה מספרי — צריך להמיר עם `Number()`
- כי חסר `required`
- כי צריך `parseFloat` דווקא
= בלי המרה `"5" + 1` יחזיר `"51"` ולא 6.

? למה מאזינים ל-`submit` על הטופס ולא ל-`click` על הכפתור?
- כי `click` אינו נתמך על כפתורים
+ כי שליחה יכולה לקרות גם בלחיצת Enter בתוך שדה, ואז מאזין על הכפתור לא ייקרא
- כי `submit` מהיר יותר
- אין הבדל
= זו דרך נפוצה מאוד לשלוח טופס, והיא נשברת לגמרי אם מאזינים לכפתור בלבד.

? שדה לא מופיע ב-`FormData`. מה הכי סביר שחסר לו?
- `id`
+ `name` — רק שדות עם name נאספים
- `type`
- `required`
= זו בדיוק הסיבה שהודגש ב-HTML ש-`name` הוא מה שנשלח בפועל.

? האם אימות בצד הלקוח מספיק כדי לאבטח את המערכת?
- כן, אם משתמשים ב-`required`
+ לא — אפשר לעקוף אותו בכלי הפיתוח תוך שניות, ולכן השרת חייב לבדוק הכול מחדש
- כן, אם מוסיפים `pattern`
- כן, אם מוסיפים גם בדיקת JavaScript
= אימות בדפדפן קיים כדי לעזור למשתמש, לא כדי להגן על המערכת.

? איך קוראים את המצב של תיבת סימון?
- `checkbox.value`
+ `checkbox.checked`, שמחזיר `true` או `false`
- `checkbox.textContent`
- `checkbox.getAttribute("checked")`
= `value` בתיבת סימון מחזיר את הערך שיישלח, ולא את מצב הסימון.
```
