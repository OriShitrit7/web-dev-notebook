# Attributes

<p class="lead">
עד עכשיו כל תגית שכתבנו הייתה ״עירומה״: <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code>.
<strong>Attributes</strong> הם מידע נוסף שמצמידים לתגית כדי לומר עליה משהו —
לאן הקישור מוביל, איזו תמונה להציג, מה שפת הדף.
בלעדיהם רוב התגיות המעניינות פשוט לא היו יכולות לעבוד.
</p>

## מהו Attribute?

<div class="box theory">
  <div class="box-head"><span class="icon">🧩</span>ההגדרה</div>
  <div class="box-body">
    <p>
      <strong>Attribute</strong> הוא פיסת מידע שנכתבת <strong>בתוך תגית הפתיחה</strong>
      ומוסיפה מידע על האלמנט.
    </p>
    <p>ברוב המקרים הוא בנוי משני חלקים: <strong>שם</strong> ו<strong>ערך</strong>, ובאמצע סימן שוויון:</p>
    <p><code>name="value"</code></p>
    <p class="note-line">
      כבר פגשנו כמה: <code>lang</code> ו־<code>dir</code> על <code>&lt;html&gt;</code>
      בפרק Document Structure, ו־<code>charset</code> על <code>&lt;meta&gt;</code> בפרק Metadata.
    </p>
  </div>
</div>

### המבנה של Attribute

<div class="figure">
  <svg viewBox="0 0 680 190" width="680" role="img" aria-label="תרשים: attribute מורכב משם, סימן שוויון וערך במרכאות, בתוך תגית הפתיחה">
    <g font-family="Assistant, sans-serif" font-size="13" fill="#6b6b70" text-anchor="middle">
      <text x="268" y="64">שם ה־attribute</text>
      <text x="390" y="64">הערך, במרכאות</text>
    </g>
    <g fill="none" stroke="#a8a29e" stroke-width="1.5" stroke-linejoin="round">
      <path d="M239,84 V76 H297 V84" />
      <path d="M311,84 V76 H470 V84" />
      <path d="M239,126 V142 H470 V126" />
    </g>
    <g font-family="'JetBrains Mono', monospace" font-size="24">
      <text x="196" y="112" textLength="29" lengthAdjust="spacingAndGlyphs" fill="#be185d">&lt;a</text>
      <text x="239" y="112" textLength="58" lengthAdjust="spacingAndGlyphs" fill="#1d4ed8">href</text>
      <text x="297" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#6b6b70">=</text>
      <text x="311" y="112" textLength="159" lengthAdjust="spacingAndGlyphs" fill="#047857">"page.html"</text>
      <text x="470" y="112" textLength="14" lengthAdjust="spacingAndGlyphs" fill="#be185d">&gt;</text>
    </g>
    <text x="354" y="164" font-family="Assistant, sans-serif" font-size="14" font-weight="700" fill="#4f46e5" text-anchor="middle">attribute אחד</text>
  </svg>
  <div class="cap">
    ה־attribute נמצא כולו בתוך תגית הפתיחה, אחרי שם התגית ולפני הסוגר <code>&gt;</code>.
  </div>
</div>

## כללי התחביר

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>חמישה כללים</div>
  <div class="box-body">
    <ul>
      <li><strong>רק בתגית הפתיחה.</strong> בתגית הסגירה אף פעם לא כותבים attributes.</li>
      <li><strong>רווח מפריד.</strong> בין שם התגית ל־attribute, ובין attributes שונים, יש רווח.</li>
      <li><strong>הערך במרכאות.</strong> הנוהג הוא מרכאות כפולות: <code>href="page.html"</code>.</li>
      <li><strong>הסדר לא משנה.</strong> אפשר לכתוב את ה־attributes בכל סדר.</li>
      <li><strong>אותיות קטנות.</strong> השמות לא רגישים לרישיות, אבל הנוהג הוא lowercase.</li>
    </ul>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>אפשר לצרף לאלמנט אחד כמה attributes שרוצים, כל אחד מופרד ברווח:</p>
    <p><code>&lt;img src="cat.jpg" alt="A cat" width="200"&gt;</code></p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>על המרכאות</div>
  <div class="box-body">
    <p>
      מרכאות בודדות (<code>'value'</code>) עובדות גם הן, ובמקרים מסוימים אפשר אפילו
      להשמיט מרכאות לגמרי. <strong>אל תעשי את זה.</strong>
    </p>
    <p>
      ברגע שהערך מכיל רווח, ערך בלי מרכאות נשבר: בקוד
      <code>alt=A sleeping cat</code> הדפדפן יבין שהערך הוא <code>A</code> בלבד,
      וכל השאר ייחשב ל־attributes אחרים.
    </p>
    <p class="note-line">
      מרכאות כפולות תמיד, ואין מה לחשוב על זה יותר.
    </p>
  </div>
</div>

## attributes ספציפיים לתגית

<div class="box theory">
  <div class="box-head"><span class="icon">🔑</span>לכל תגית ה־attributes שלה</div>
  <div class="box-body">
    <p>
      לרוב התגיות יש attributes משלהן, שמתאימים רק להן.
      אצל חלק מהתגיות ה־attribute הוא לא תוספת נחמדה אלא <strong>תנאי לעבודה</strong>:
      בלי <code>href</code> אין לקישור לאן להוביל, ובלי <code>src</code> אין לתמונה מה להציג.
    </p>
  </div>
</div>

| Attribute | על איזו תגית | מה הוא עושה |
| --- | --- | --- |
| `href` | `<a>` | לאן הקישור מוביל |
| `src` | `<img>` | נתיב לקובץ התמונה |
| `alt` | `<img>` | טקסט חלופי לתמונה |
| `width` / `height` | `<img>` | מידות התמונה |
| `type` | `<input>` | סוג שדה הקלט |
| `lang` / `dir` | `<html>` | שפת הדף וכיוון הכתיבה |

<div class="box">
  <div class="box-body">
    <p>
      הנה קישור אמיתי. ה־<code>href</code> הוא מה שהופך טקסט רגיל לקישור לחיץ —
      בלעדיו <code>&lt;a&gt;</code> היה סתם טקסט:
    </p>
  </div>
</div>

```demo
<a href="https://example.com">Visit</a>
```

## alt: דוגמה שכדאי לראות

<div class="box">
  <div class="box-body">
    <p>
      ה־<code>alt</code> הוא טקסט חלופי שמתאר את התמונה. הוא נקרא על ידי קוראי מסך,
      והוא גם מה שמוצג אם התמונה לא נטענת.
    </p>
    <p>
      בדוגמה הבאה הנתיב ב־<code>src</code> מצביע על קובץ שלא קיים — <strong>בכוונה</strong>,
      כדי שנראה מה קורה אז:
    </p>
  </div>
</div>

```demo
<img src="missing.jpg" alt="A sleeping cat">
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      במקום התמונה מוצג הטקסט מה־<code>alt</code>. זה בדיוק תפקידו.
      (הדפדפן ירשום על כך שגיאה ב־Console — זה צפוי כאן, כי ביקשנו קובץ שלא קיים.)
    </p>
    <p>
      לתמונה דקורטיבית, שאין לה משמעות בתוכן, כותבים <code>alt=""</code> ריק —
      כך קורא מסך ידלג עליה במקום להקריא שם קובץ. את הנושא נרחיב בפרק
      <strong>Images, Audio &amp; Video</strong>.
    </p>
  </div>
</div>

## Global Attributes

<div class="box theory">
  <div class="box-head"><span class="icon">🌍</span>attributes שעובדים על הכול</div>
  <div class="box-body">
    <p>
      יש קבוצה של attributes שאפשר לשים על <strong>כל</strong> אלמנט ב־HTML.
      הם נקראים <strong>Global Attributes</strong>.
    </p>
  </div>
</div>

| Attribute | מה הוא עושה |
| --- | --- |
| `id` | מזהה ייחודי לאלמנט אחד בדף |
| `class` | שם קבוצה, שאפשר לתת לכמה אלמנטים |
| `title` | טקסט עזר שמופיע כשעוצרים עם העכבר |
| `style` | עיצוב ישיר על האלמנט |
| `hidden` | מסתיר את האלמנט |
| `lang` / `dir` | שפה וכיוון כתיבה |
| `data-*` | מידע מותאם אישית משלנו |

<div class="box">
  <div class="box-body">
    <p>את <code>title</code> אפשר לראות בפעולה — עצרי עם העכבר מעל הטקסט בתצוגה:</p>
  </div>
</div>

```demo
<p title="I am a tooltip">Hover me</p>
```

### id מול class

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>ההבדל המרכזי</div>
  <div class="box-body">
    <p>
      שניהם נותנים שם לאלמנט, כדי ש־CSS יוכל לעצב אותו ו־JavaScript יוכל למצוא אותו.
      ההבדל הוא בכמות:
    </p>
    <ul>
      <li>
        <strong><code>id</code></strong> — <strong>ייחודי</strong>. בדף אחד אסור ששני אלמנטים
        יישאו את אותו <code>id</code>.
      </li>
      <li>
        <strong><code>class</code></strong> — <strong>משותף</strong>. אפשר לתת את אותו
        <code>class</code> לעשרות אלמנטים, וגם לתת לאלמנט אחד כמה classes מופרדים ברווח.
      </li>
    </ul>
    <p class="note-line">
      כלל אצבע: <code>id</code> לדבר אחד ויחיד בדף (למשל התפריט הראשי),
      <code>class</code> לכל דבר שחוזר על עצמו (למשל כל הכפתורים).
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      בתצוגה לא נראה שום הבדל — <code>id</code> ו־<code>class</code> לא משנים כלום בעצמם.
      הם רק <strong>נקודות אחיזה</strong> ל־CSS ול־JavaScript, שנגיע אליהם בפרקים הבאים.
    </p>
  </div>
</div>

## Boolean Attributes

<div class="box theory">
  <div class="box-head"><span class="icon">🔘</span>attributes בלי ערך</div>
  <div class="box-body">
    <p>
      לא לכל attribute יש ערך. יש קבוצה שבה עצם <strong>הנוכחות</strong> של השם היא הערך —
      אם הוא כתוב, התשובה ״כן״; אם הוא לא כתוב, התשובה ״לא״.
    </p>
    <p>הם נקראים <strong>Boolean Attributes</strong>, למשל <code>disabled</code>, <code>required</code>, <code>checked</code>, <code>hidden</code>.</p>
  </div>
</div>

```demo
<input type="text" value="Editable">
<input type="text" value="Locked" disabled>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אפשר ללחוץ ולהקליד בשדה הראשון, אבל לא בשני. ההבדל היחיד בקוד הוא המילה
      <code>disabled</code>. (<code>&lt;input&gt;</code> עצמו נלמד בפרק <strong>Forms</strong>.)
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אי אפשר ״לכבות״ אותם עם false</div>
  <div class="box-body">
    <p>
      כתיבת <code>disabled="false"</code> <strong>לא</strong> מבטלת את החסימה —
      השדה עדיין יהיה חסום, כי ה־attribute עצמו נוכח.
    </p>
    <p>הדרך היחידה לבטל boolean attribute היא <strong>למחוק אותו לגמרי</strong> מהקוד.</p>
  </div>
</div>

## data-* : מידע משלנו

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>attributes מותאמים אישית</div>
  <div class="box-body">
    <p>
      לפעמים רוצים לשמור על אלמנט מידע שאין לו attribute מוכן ב־HTML.
      בשביל זה יש <strong><code>data-*</code></strong>: כל attribute שמתחיל ב־<code>data-</code> הוא חוקי.
    </p>
    <p>למשל: <code>&lt;li data-product-id="42"&gt;Shoes&lt;/li&gt;</code></p>
    <p>
      הדפדפן מתעלם מהם לחלוטין ולא מציג שום דבר — הם קיימים כדי ש־JavaScript
      יוכל לקרוא מהם מידע בהמשך.
    </p>
  </div>
</div>

<div class="keypoint">
<code>data-*</code> הוא הדרך התקנית להמציא attribute משלך.
המצאת attribute בשם אחר, למשל <code>productid="42"</code>, תעבוד בפועל ברוב הדפדפנים —
אבל היא לא תקנית ועלולה להתנגש עם attributes עתידיים.
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר attributes</div>
  <div class="box-body">
    <ul>
      <li><strong>attribute בתגית הסגירה</strong> — <code>&lt;/a href="..."&gt;</code>. הוא שייך רק לתגית הפתיחה.</li>
      <li><strong>רווחים סביב סימן השוויון</strong> — <code>href = "x"</code> עלול לא לעבוד. כותבים בלי רווחים.</li>
      <li><strong>ערך עם רווח בלי מרכאות</strong> — הערך ייקטע במילה הראשונה.</li>
      <li><strong>שכחת רווח בין שני attributes</strong> — <code>src="a.jpg"alt="x"</code> לא ייקרא נכון.</li>
      <li><strong>אותו <code>id</code> לשני אלמנטים</strong> — הקוד ״יעבוד״, אבל CSS ו־JavaScript יתייחסו רק לראשון.</li>
      <li><strong><code>disabled="false"</code></strong> — לא מבטל כלום. מוחקים את ה־attribute.</li>
      <li><strong>תמונה בלי <code>alt</code></strong> — פוגע בנגישות, ואם התמונה לא נטענת לא יישאר כלום.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>Attribute</strong> — מידע נוסף על אלמנט, שנכתב <strong>בתוך תגית הפתיחה בלבד</strong>.</li>
      <li>המבנה הרגיל הוא <code>name="value"</code>, עם מרכאות כפולות ובלי רווחים סביב ה־<code>=</code>.</li>
      <li>אפשר כמה attributes לאלמנט, מופרדים ברווח, <strong>ובכל סדר</strong>.</li>
      <li>יש attributes <strong>ספציפיים לתגית</strong> — <code>href</code> ל־<code>&lt;a&gt;</code>, <code>src</code> ו־<code>alt</code> ל־<code>&lt;img&gt;</code>.</li>
      <li><strong>Global Attributes</strong> עובדים על כל אלמנט: <code>id</code>, <code>class</code>, <code>title</code>, <code>style</code>, <code>hidden</code>, <code>lang</code>, <code>dir</code>, <code>data-*</code>.</li>
      <li><strong><code>id</code></strong> ייחודי בדף; <strong><code>class</code></strong> משותף לכמה אלמנטים.</li>
      <li><strong>Boolean Attributes</strong> — הנוכחות היא הערך. מבטלים אותם רק על ידי מחיקה.</li>
      <li><strong><code>data-*</code></strong> — הדרך התקנית להוסיף מידע מותאם אישית לאלמנט.</li>
    </ul>
  </div>
</div>
