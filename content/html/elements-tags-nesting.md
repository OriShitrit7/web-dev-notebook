# Elements, Tags & Nesting

<p class="lead">
בפרק הזה לומדים את שלושת הרעיונות שמהם כל HTML בנוי: <strong>Tags</strong> (תגיות),
<strong>Elements</strong> (אלמנטים) ו־<strong>Nesting</strong> (קינון).
זה הבסיס התחבירי — אחרי שמבינים אותו, כל תגית חדשה שנלמד היא רק עוד מקרה פרטי של אותו כלל.
</p>

## Tags

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>מהי Tag?</div>
  <div class="box-body">
    <p>
      <strong>Tag</strong> היא סימון שנכתב בין הסימנים <code>&lt;</code> ו־<code>&gt;</code>,
      ובעזרתו הדפדפן יודע איזה סוג של רכיב אנחנו מגדירים.
    </p>
    <p>שם התגית נכתב בתוך הסוגריים הזוויתיים. הצורה הכללית היא <code>&lt;tagname&gt;</code>.</p>
    <p class="note-line">
      <code>tagname</code> הוא שם כללי לצורך ההסבר בלבד — הוא לא תגית HTML אמיתית.
      תגיות אמיתיות הן למשל <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code> או <code>&lt;img&gt;</code>.
    </p>
  </div>
</div>

### Opening Tag ו־Closing Tag

<div class="box">
  <div class="box-body">
    <p>
      <strong>Opening Tag</strong> — תגית פתיחה — מסמנת את <em>תחילת</em> האלמנט.
      הצורה הכללית היא <code>&lt;tagname&gt;</code>, ודוגמה אמיתית היא <code>&lt;p&gt;</code>.
    </p>
    <p>
      לרוב האלמנטים יש גם <strong>Closing Tag</strong> — תגית סגירה — שמסמנת את <em>סוף</em> האלמנט.
      הצורה הכללית היא <code>&lt;/tagname&gt;</code>, ודוגמה אמיתית היא <code>&lt;/p&gt;</code>.
    </p>
    <p>
      ההבדל היחיד בין השתיים הוא ה־<code>/</code> שמופיע מיד אחרי הסוגר הפותח בתגית הסגירה.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>כלל בסיסי:</strong> תגית הפתיחה מתחילה את האלמנט, ותגית הסגירה מסיימת אותו.
הדפדפן לא ״מנחש״ איפה האלמנט נגמר — הוא מחכה לתגית הסגירה.
</div>

### שמות תגיות: כללים קטנים שחשוב לדעת

| כלל | דוגמה תקינה | הערה |
| --- | --- | --- |
| שם התגית לא רגיש לאותיות גדולות/קטנות | `<P>` זהה ל־`<p>` | הנוהג המקובל הוא **תמיד אותיות קטנות** |
| אין רווח אחרי הסוגר הפותח | `<p>` ולא `< p>` | רווח שובר את זיהוי התגית |
| שם התגית חייב להיות מוכר לדפדפן | `<p>` ולא `<paragraph>` | תגית לא מוכרת פשוט לא תעשה כלום |

## Elements

<div class="box theory">
  <div class="box-head"><span class="icon">🧩</span>מהו Element?</div>
  <div class="box-body">
    <p><strong>Element</strong> הוא היחידה השלמה ב־HTML — לא רק התגית עצמה.</p>
    <p>
      ברוב המקרים Element מורכב משלושה חלקים: <strong>Opening Tag</strong>,
      ואחריו <strong>Content</strong>, ואחריו <strong>Closing Tag</strong>.
    </p>
    <p>בצורה כללית: <code>&lt;tagname&gt;Content&lt;/tagname&gt;</code></p>
  </div>
</div>

### המבנה של Element

<div class="figure">
  <svg viewBox="0 0 680 190" width="680" role="img" aria-label="תרשים: אלמנט HTML מורכב מתגית פתיחה, תוכן ותגית סגירה">
    <g font-family="Assistant, sans-serif" font-size="13" fill="#78716c" text-anchor="middle">
      <text x="215" y="64">תגית פתיחה</text>
      <text x="332" y="64">תוכן</text>
      <text x="457" y="64">תגית סגירה</text>
    </g>
    <g fill="none" stroke="#a8a29e" stroke-width="1.5" stroke-linejoin="round">
      <path d="M184,84 V76 H246 V84" />
      <path d="M250,84 V76 H414 V84" />
      <path d="M418,84 V76 H496 V84" />
      <path d="M184,126 V142 H496 V126" />
    </g>
    <g font-family="'JetBrains Mono', monospace" font-size="26" letter-spacing="0">
      <text x="184" y="112" textLength="62" lengthAdjust="spacingAndGlyphs" fill="#be185d">&lt;h1&gt;</text>
      <text x="246" y="112" textLength="172" lengthAdjust="spacingAndGlyphs" fill="#1c1917">Hello World</text>
      <text x="418" y="112" textLength="78" lengthAdjust="spacingAndGlyphs" fill="#be185d">&lt;/h1&gt;</text>
    </g>
    <text x="340" y="164" font-family="Assistant, sans-serif" font-size="14" font-weight="700" fill="#4f46e5" text-anchor="middle">element — האלמנט השלם</text>
  </svg>
  <div class="cap">
    האיור מפרק Element לחלקים שלו: תגית פתיחה, תוכן ותגית סגירה — ושלושתם יחד הם האלמנט.
    הדוגמה משתמשת ב־<code>&lt;h1&gt;</code> רק כדי להמחיש את המבנה; את התגית עצמה נלמד בפרק Headings.
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>וכך אותו אלמנט בדיוק נראה כשהדפדפן מציג אותו:</p>
  </div>
</div>

```demo
<h1>Hello World</h1>
```

### Tag או Element? ההבדל

<div class="box">
  <div class="box-body">
    <p>זו נקודה שקל להתבלבל בה, וכדאי לקבע אותה עכשיו.</p>
  </div>
</div>

| מה זה | דוגמה | הסבר |
| --- | --- | --- |
| **Tag** | `<h1>` | חלק מהתחביר. לבד, היא לא יחידה שלמה. |
| **Tag** | `</h1>` | גם היא רק תגית — תגית הסגירה. |
| **Element** | `<h1>Hello World</h1>` | היחידה השלמה: פתיחה + תוכן + סגירה. |

<div class="keypoint">
<code>&lt;tagname&gt;</code> לבדו הוא <strong>Tag</strong>.
<code>&lt;tagname&gt;Content&lt;/tagname&gt;</code> הוא <strong>Element</strong>.
</div>

### Content

<div class="box">
  <div class="box-body">
    <p><strong>Content</strong> הוא כל מה שנמצא בין תגית הפתיחה לתגית הסגירה.</p>
    <p>ה־Content יכול להיות:</p>
    <ul>
      <li>טקסט בלבד</li>
      <li>Element אחר</li>
      <li>כמה Elements</li>
      <li>שילוב של טקסט ו־Elements</li>
    </ul>
    <p>הנה שלוש האפשרויות זו לצד זו:</p>
  </div>
</div>

```demo
<p>Just text.</p>
<p><strong>An element.</strong></p>
<p>Text and <strong>bold</strong>.</p>
```

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>הנקודה שחשוב להבין</div>
  <div class="box-body">
    <p>ה־Content שייך לאותו Element שבתוכו הוא נמצא.</p>
    <p>
      ברגע שה־Content מכיל Element נוסף — כמו <code>&lt;strong&gt;</code> בתוך <code>&lt;p&gt;</code>
      בדוגמה השלישית — אנחנו כבר בתוך הנושא של <strong>Nesting</strong>, שאליו נגיע מיד.
    </p>
  </div>
</div>

### Void Elements

<div class="box">
  <div class="box-body">
    <p>לא כל Element בנוי בצורה <code>&lt;tagname&gt;Content&lt;/tagname&gt;</code>.</p>
    <p>
      יש אלמנטים שאין להם תוכן משלהם, ולכן <strong>אין להם תגית סגירה</strong>.
      הם נקראים <strong>Void Elements</strong> (ולפעמים <em>empty elements</em>).
    </p>
    <p>הצורה הכללית שלהם היא פשוט <code>&lt;tagname&gt;</code>.</p>
  </div>
</div>

| Void Element | מה הוא עושה | נלמד בפרק |
| --- | --- | --- |
| `<br>` | מעבר שורה | Text Editing |
| `<hr>` | קו הפרדה אופקי | Text Editing |
| `<img>` | תמונה | Images, Audio & Video |
| `<input>` | שדה קלט בטופס | Forms |
| `<meta>` | מידע על המסמך | Metadata |

<div class="box">
  <div class="box-body">
    <p>
      למה אין להם תוכן? כי אין מה לשים ביניהם. ל־<code>&lt;br&gt;</code> אין טקסט משלו —
      הוא <em>הוא</em> הפעולה של ירידת שורה:
    </p>
  </div>
</div>

```demo
First line<br>Second line
<hr>
After the rule.
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אל תכתבי תגית סגירה ל־Void Element</div>
  <div class="box-body">
    <p><code>&lt;br&gt;&lt;/br&gt;</code> הוא כתיב שגוי. הצורה הנכונה היא <code>&lt;br&gt;</code> בלבד.</p>
    <p>
      ייתכן שתיתקלי גם בכתיב <code>&lt;br /&gt;</code> עם לוכסן לפני הסוגר. זה שריד מ־XHTML,
      והוא עדיין עובד — אבל ב־HTML מודרני הוא מיותר.
    </p>
  </div>
</div>

## Nesting

<div class="box theory">
  <div class="box-head"><span class="icon">🪆</span>מהו Nesting?</div>
  <div class="box-body">
    <p>
      HTML בנוי בצורה <strong>היררכית</strong>: Element יכול להימצא בתוך Element אחר.
      למבנה הזה קוראים <strong>Nesting</strong> — קינון.
    </p>
    <p>במילים אחרות: ה־Content של Element יכול להיות בעצמו Element.</p>
    <p>הצורה הכללית: <code>&lt;parent&gt;&lt;child&gt;Content&lt;/child&gt;&lt;/parent&gt;</code></p>
    <p class="note-line">
      <code>parent</code> ו־<code>child</code> כאן הם שמות כלליים להמחשת המבנה, ולא תגיות HTML אמיתיות.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>וכך זה נראה עם תגיות אמיתיות — רשימה שמכילה פריטים:</p>
  </div>
</div>

```demo
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

### Parent, Child & Siblings

<div class="box">
  <div class="box-body">
    <p>כשאלמנט נמצא ישירות בתוך אלמנט אחר, נוצרים ביניהם יחסי משפחה:</p>
  </div>
</div>

| מונח | מי זה | בדוגמה למעלה |
| --- | --- | --- |
| **Parent** | האלמנט החיצוני, שמכיל אלמנט אחר ישירות | `<ul>` הוא ה־Parent |
| **Child** | האלמנט שנמצא ישירות בתוך ה־Parent | כל `<li>` הוא Child של `<ul>` |
| **Siblings** | אלמנטים שנמצאים באותה רמה, תחת אותו Parent | שני ה־`<li>` הם Siblings |

<div class="box">
  <div class="box-body">
    <p>אפשר לצייר את המבנה כעץ:</p>
  </div>
</div>

```text
ul
├── li  (First item)
└── li  (Second item)
```

<div class="keypoint">
<strong>Parent / Child</strong> מתארים קשר <strong>אנכי</strong> בהיררכיה — מי בתוך מי.
<strong>Siblings</strong> מתארים קשר <strong>אופקי</strong> — מי לצד מי, באותה רמה.
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      המילה ״ישירות״ חשובה: אם אלמנט נמצא שתי רמות פנימה, הוא כבר לא Child אלא צאצא רחוק יותר
      (באנגלית <em>descendant</em>). Child הוא תמיד רמה אחת בדיוק.
    </p>
  </div>
</div>

### Nesting בכמה רמות

<div class="box">
  <div class="box-body">
    <p>
      Nesting לא מוגבל לרמה אחת. אלמנט שהוא Child של מישהו יכול להיות בעצמו Parent של מישהו אחר:
    </p>
  </div>
</div>

```demo
<ul>
  <li>Item with <strong>bold</strong></li>
  <li>Plain item</li>
</ul>
```

<div class="box">
  <div class="box-body">
    <p>העץ של הדוגמה הזו:</p>
  </div>
</div>

```text
ul
├── li
│   ├── "Item with "
│   └── strong
│       └── "bold"
└── li
    └── "Plain item"
```

<div class="box">
  <div class="box-body">
    <p>
      כאן <code>&lt;strong&gt;</code> הוא Child של <code>&lt;li&gt;</code>,
      ו־<code>&lt;li&gt;</code> הוא Child של <code>&lt;ul&gt;</code>.
    </p>
    <p>
      כך בדיוק בנוי דף HTML אמיתי: <strong>עץ של אלמנטים</strong> שמקוננים זה בתוך זה,
      עם <code>&lt;html&gt;</code> בשורש.
    </p>
  </div>
</div>

### סדר הסגירה של Elements

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>הכלל</div>
  <div class="box-body">
    <p><strong>האלמנט שנפתח אחרון — נסגר ראשון.</strong></p>
    <p>אלמנטים מקוננים חייבים להיות מוכלים זה בזה במלואם. אסור להם ״להצטלב״.</p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">מבנה תקין</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;A&gt;
  &lt;B&gt;
  &lt;/B&gt;
&lt;/A&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">מבנה לא תקין</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;A&gt;
  &lt;B&gt;
&lt;/A&gt;
  &lt;/B&gt;</code></pre>
    </div>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      אפשר לחשוב על זה בדיוק כמו על סוגריים במתמטיקה:
      <code>( [ ] )</code> תקין, ואילו <code>( [ ) ]</code> אינו תקין.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה זה חשוב, אם הדפדפן ״מסתדר״ בכל זאת?</div>
  <div class="box-body">
    <p>
      דפדפנים מנסים לתקן HTML שבור במקום להציג שגיאה. זה נשמע נוח, אבל זו בדיוק הבעיה:
      התיקון נעשה לפי ניחוש, והתוצאה לא תמיד מה שהתכוונת אליו.
    </p>
    <p>בדוגמה הבאה תגיות הסגירה מוצלבות. שימי לב איך הדפדפן בוחר לפרש את זה:</p>
  </div>
</div>

```demo
<p>Normal <strong>and bold</p></strong>
<p>Next paragraph.</p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אפשר לבדוק מה באמת יצא: לחיצה ימנית על התצוגה ← ״Inspect״ תראה את העץ שהדפדפן בנה בפועל,
      והוא שונה ממה שנכתב בקוד.
    </p>
  </div>
</div>

### Indentation

<div class="box">
  <div class="box-body">
    <p><strong>Indentation</strong> — הזחה — היא הסטה של הקוד ימינה לפי רמת ה־Nesting.</p>
  </div>
</div>

```text
A
  B
    C
```

<div class="keypoint">
ההזחה <strong>לא יוצרת</strong> את ה־Nesting — התגיות הן שיוצרות אותו.
הדפדפן מתעלם לחלוטין מרווחים והזחות בקוד המקור.
</div>

<div class="box">
  <div class="box-body">
    <p>
      אז למה בכל זאת מזיחים? כי הקוד נכתב בשביל בני אדם. ההזחה הופכת את ההיררכיה לגלויה לעין,
      ומאפשרת לזהות במבט מהיר תגית שלא נסגרה.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">עם הזחה — קל לקרוא</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;First&lt;/li&gt;
  &lt;li&gt;Second&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">בלי הזחה — עובד, אבל קשה</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;First&lt;/li&gt;
&lt;li&gt;Second&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      הנוהג המקובל הוא הזחה של שני רווחים או ארבעה רווחים לכל רמה —
      העיקר להיות עקבית לאורך כל הקובץ.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>ארבע טעויות שכדאי להכיר מראש</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת תגית סגירה</strong> — האלמנט ״בולע״ את כל מה שבא אחריו, עד שהדפדפן מחליט לסגור אותו בעצמו.</li>
      <li><strong>לוכסן בתגית הפתיחה</strong> — <code>&lt;/p&gt;</code> במקום <code>&lt;p&gt;</code>. הדפדפן יראה סגירה של אלמנט שלא נפתח ויתעלם ממנה.</li>
      <li><strong>סדר סגירה מוצלב</strong> — כמו בדוגמה למעלה. הקוד ייראה הגיוני אבל העץ שייבנה יהיה אחר.</li>
      <li><strong>תגית סגירה ל־Void Element</strong> — <code>&lt;img&gt;&lt;/img&gt;</code> או <code>&lt;br&gt;&lt;/br&gt;</code>. מיותר ולא תקני.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>Tag</strong> — התחביר שנכתב בין <code>&lt;</code> ל־<code>&gt;</code>.</li>
      <li><strong>Opening Tag</strong> פותחת את האלמנט, <strong>Closing Tag</strong> (עם <code>/</code>) סוגרת אותו.</li>
      <li><strong>Element</strong> — היחידה השלמה: תגית פתיחה, תוכן ותגית סגירה.</li>
      <li><strong>Content</strong> — מה שבין התגיות: טקסט, אלמנטים אחרים, או שילוב.</li>
      <li><strong>Void Element</strong> — אלמנט בלי תוכן ובלי תגית סגירה, למשל <code>&lt;br&gt;</code> או <code>&lt;img&gt;</code>.</li>
      <li><strong>Nesting</strong> — אלמנט בתוך אלמנט. כך נבנה עץ הדף.</li>
      <li><strong>Parent</strong> — האלמנט המכיל. <strong>Child</strong> — האלמנט שבתוכו, רמה אחת בדיוק. <strong>Siblings</strong> — אלמנטים באותה רמה תחת אותו Parent.</li>
      <li><strong>סדר סגירה</strong> — מה שנפתח אחרון נסגר ראשון; אסור להצליב.</li>
      <li><strong>Indentation</strong> — לקריאוּת בלבד; הדפדפן מתעלם ממנה.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה מבין הבאים הוא Element שלם, ולא רק Tag?
- `<p>`
- `</p>`
+ `<p>שלום</p>`
- `<p` בלי הסוגר
= Tag היא חלק מהתחביר. Element הוא היחידה השלמה: תגית פתיחה, תוכן ותגית סגירה.

? למה ל-`<br>` אין תגית סגירה?
- כי הוא קצר מדי
+ כי הוא Void Element — אין לו תוכן שאפשר לשים בין תגיות
- כי הדפדפן סוגר אותו אוטומטית
- כי הוא לא אלמנט אמיתי אלא תו מיוחד
= Void Element הוא אלמנט בלי תוכן משלו. `<br>` הוא עצמו הפעולה, ולכן אין מה לעטוף.

? הקוד `<A><B></A></B>` אינו תקין. מה הכלל שהוא מפר?
- אסור לקנן יותר משתי רמות
+ האלמנט שנפתח אחרון חייב להיסגר ראשון
- שמות תגיות חייבים להיות באותיות קטנות
- חייבת להיות הזחה בין רמות
= אלמנטים מקוננים חייבים להיות מוכלים זה בזה במלואם, כמו סוגריים. `( [ ) ]` אינו תקין.

? ברשימה `<ul><li>א</li><li>ב</li></ul>`, מה היחס בין שני ה-`<li>`?
- Parent ו-Child
+ Siblings — הם באותה רמה תחת אותו Parent
- אין ביניהם שום יחס
- הראשון הוא Parent של השני
= Parent/Child הוא קשר אנכי — מי בתוך מי. Siblings הוא קשר אופקי — מי לצד מי באותה רמה.

? מה קורה אם נמחק את כל ההזחות מקובץ HTML תקין?
- המבנה ההיררכי יישבר
- הדפדפן יציג שגיאה
+ כלום — הדפדפן מתעלם מהזחות, רק הקריאוּת תיפגע
- כל האלמנטים יהפכו ל-Siblings
= ההזחה לא יוצרת את הקינון — התגיות יוצרות אותו. ההזחה היא למען בני אדם בלבד.
```
