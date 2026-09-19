# Links

<p class="lead">
הקישור הוא הרעיון שנתן ל־HTML את השם שלה — ה־<strong>HyperText</strong> שפתחנו בו את פרק Overview.
בלעדיו האינטרנט היה אוסף של דפים מנותקים. בפרק הזה נלמד את
<code>&lt;a&gt;</code>, את סוגי היעדים שאליהם אפשר לקשר, ואיך כותבים קישור נגיש.
</p>

## אלמנט a

<div class="box theory">
  <div class="box-head"><span class="icon">🔗</span>Anchor</div>
  <div class="box-body">
    <p>
      <code>&lt;a&gt;</code> הוא קיצור של <strong>anchor</strong> — עוגן.
      התוכן שבתוכו הוא מה שהמשתמש רואה ולוחץ עליו.
    </p>
    <p>
      ה־attribute <code>href</code> (קיצור של <em>hypertext reference</em>) הוא זה
      שקובע <strong>לאן</strong> הקישור מוביל.
    </p>
  </div>
</div>

```demo
<a href="https://example.com">Visit Example</a>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>בלי href זה לא קישור</div>
  <div class="box-body">
    <p>
      <code>&lt;a&gt;</code> בלי <code>href</code> הוא לא קישור לחיץ, לא מקבל את העיצוב
      הכחול, ולא ניתן להגיע אליו עם מקש Tab.
    </p>
    <p>ההבדל נראה מיד:</p>
  </div>
</div>

```demo
<p><a href="https://example.com">With href</a></p>
<p><a>Without href</a></p>
```

<div class="keypoint">
העיצוב הכחול עם הקו התחתון הוא <strong>ברירת המחדל של הדפדפן</strong>, בדיוק כמו
שראינו בכותרות. קישור שכבר ביקרת בו מוצג סגול. את שניהם אפשר לשנות ב־CSS.
</div>

## לאן אפשר לקשר?

<div class="box">
  <div class="box-body">
    <p>הערך של <code>href</code> יכול להיות כמה דברים שונים:</p>
  </div>
</div>

| סוג | דוגמה | לאן זה מוביל |
| --- | --- | --- |
| כתובת מלאה | `https://example.com` | אתר אחר באינטרנט |
| נתיב יחסי | `about.html` | קובץ אחר באותו אתר |
| עוגן בדף | `#contact` | מקום אחר בתוך אותו דף |
| דוא״ל | `mailto:hi@example.com` | פותח תוכנת מייל |
| טלפון | `tel:+15551234567` | מחייג, בעיקר בנייד |

```demo
<p><a href="mailto:hi@example.com">Email us</a></p>
<p><a href="tel:+15551234567">Call us</a></p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <strong>כתובת מלאה</strong> (absolute) מתחילה ב־<code>https://</code> ומתארת מיקום
      מוחלט ברשת. <strong>נתיב יחסי</strong> (relative) מתאר מיקום ביחס לקובץ הנוכחי.
      את ההבדל, ואת המשמעות של <code>../</code> ו־<code>/</code>, נלמד לעומק בפרק
      <strong>File Paths</strong>.
    </p>
  </div>
</div>

## קישור לעוגן בתוך הדף

<div class="box theory">
  <div class="box-head"><span class="icon">⚓</span>שני צדדים לאותו קישור</div>
  <div class="box-body">
    <p>כדי לקפוץ למקום מסוים בדף צריך שני חלקים שמתאימים זה לזה:</p>
    <ul>
      <li>ליעד נותנים <code>id</code> — לדוגמה <code>&lt;h2 id="contact"&gt;</code>.</li>
      <li>בקישור כותבים את אותו שם אחרי סולמית — <code>&lt;a href="#contact"&gt;</code>.</li>
    </ul>
    <p class="note-line">
      הסולמית מופיעה רק ב־<code>href</code>, אף פעם לא בערך של ה־<code>id</code> עצמו.
    </p>
  </div>
</div>

```html
<a href="#contact">Jump to contact</a>

<h2 id="contact">Contact</h2>
<p>Our details...</p>
```

<div class="box">
  <div class="box-body">
    <p>
      זו הטכניקה שמאחורי כל ״תוכן עניינים״ שקופץ לסעיף בדף, וגם מאחורי הכתובות
      שנראות כמו <code>page.html#section</code>.
    </p>
    <p class="note-line">
      <code>&lt;a href="#top"&gt;</code> — או פשוט <code>href="#"</code> — מחזיר לראש הדף.
    </p>
  </div>
</div>

## target — איפה הקישור נפתח

<div class="box theory">
  <div class="box-head"><span class="icon">🪟</span>אותה לשונית או חדשה</div>
  <div class="box-body">
    <ul>
      <li><strong><code>_self</code></strong> — באותה לשונית. זו ברירת המחדל, ולא צריך לכתוב אותה.</li>
      <li><strong><code>_blank</code></strong> — בלשונית חדשה.</li>
    </ul>
  </div>
</div>

```demo
<a href="https://example.com"
   target="_blank">Opens in a new tab</a>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>שתי הערות על _blank</div>
  <div class="box-body">
    <p>
      <strong>נגישות:</strong> פתיחת לשונית חדשה מבטלת למשתמש את כפתור ״חזור״.
      זה מבלבל במיוחד משתמשי קורא מסך, שלא רואים שנפתח חלון חדש.
      לכן נהוג לציין את זה בטקסט הקישור עצמו.
    </p>
    <p>
      <strong>אבטחה:</strong> בעבר דף שנפתח ב־<code>_blank</code> יכול היה לגשת לדף
      שממנו הגיע, ולכן נהגו להוסיף <code>rel="noopener"</code>.
      דפדפנים מודרניים כבר עושים זאת בעצמם, אבל הוספה מפורשת עדיין מומלצת בשביל
      דפדפנים ישנים ואינה מזיקה.
    </p>
  </div>
</div>

```html
<a href="https://example.com"
   target="_blank"
   rel="noopener">
  Read more (opens in a new tab)
</a>
```

## טקסט הקישור

<div class="box theory">
  <div class="box-head"><span class="icon">👁️</span>למה הניסוח חשוב</div>
  <div class="box-body">
    <p>
      משתמשי קורא מסך יכולים לבקש <strong>רשימה של כל הקישורים בדף</strong>
      ולנווט ביניהם. ברשימה הזו הקישורים מופיעים <strong>בלי הטקסט שסביבם</strong>.
    </p>
    <p>
      לכן דף עם חמישה קישורים שכתוב עליהם ״לחצו כאן״ מייצר רשימה של חמש שורות זהות
      וחסרות משמעות.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">מתאר את היעד</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;a href="prices.html"&gt;
  מחירון מלא
&lt;/a&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">חסר משמעות לבדו</div>
    <div class="compare-body">
<pre><code class="language-html">למחירון המלא
&lt;a href="prices.html"&gt;
  לחצו כאן
&lt;/a&gt;</code></pre>
    </div>
  </div>
</div>

<div class="keypoint">
מבחן פשוט: <strong>אם תקראי רק את טקסט הקישור, בלי שום דבר סביבו — תביני לאן הוא מוביל?</strong>
אם לא, צריך לנסח מחדש.
</div>

## attributes נוספים

| Attribute | מה הוא עושה |
| --- | --- |
| `target` | באיזו לשונית להיפתח |
| `rel` | היחס בין הדף הנוכחי ליעד, למשל `noopener` |
| `download` | להוריד את הקובץ במקום לנווט אליו |
| `title` | טקסט עזר שמופיע בעצירת עכבר |

<div class="box">
  <div class="box-body">
    <p>
      <code>download</code> הוא Boolean Attribute: עצם נוכחותו מורה לדפדפן להוריד את
      היעד כקובץ. אפשר גם לתת לו ערך, ואז זה יהיה שם הקובץ שיישמר.
    </p>
  </div>
</div>

```html
<a href="report.pdf" download>Download the report</a>

<a href="report.pdf" download="2026-summary.pdf">
  Download as 2026-summary.pdf
</a>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>title הוא לא תחליף לטקסט קישור</div>
  <div class="box-body">
    <p>
      ה־<code>title</code> לא מוצג בנייד, לא מופיע בניווט במקלדת, ולא כל קוראי המסך
      מקריאים אותו. מידע חיוני חייב להיות <strong>בטקסט הקישור עצמו</strong>.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר קישורים</div>
  <div class="box-body">
    <ul>
      <li><strong>שכחת <code>https://</code></strong> — <code>href="example.com"</code> ייחשב לקובץ בשם זה באתר שלך, ולא לאתר חיצוני.</li>
      <li><strong>״לחצו כאן״</strong> — חסר משמעות ברשימת הקישורים של קורא מסך.</li>
      <li><strong>סולמית בערך של <code>id</code></strong> — <code>id="#contact"</code> שגוי. הסולמית רק ב־<code>href</code>.</li>
      <li><strong><code>_blank</code> על כל קישור</strong> — מציף לשוניות ומבטל את כפתור ״חזור״.</li>
      <li><strong>קישור בתוך קישור</strong> — אסור לקנן <code>&lt;a&gt;</code> בתוך <code>&lt;a&gt;</code>.</li>
      <li><strong><code>&lt;a&gt;</code> בלי <code>href</code></strong> — נראה כמו טקסט רגיל ולא נגיש במקלדת.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;a&gt;</code></strong> — anchor. התוכן שבתוכו הוא מה שלוחצים עליו.</li>
      <li><strong><code>href</code></strong> הוא מה שהופך אותו לקישור. בלעדיו זה טקסט רגיל.</li>
      <li>אפשר לקשר ל<strong>כתובת מלאה</strong>, ל<strong>נתיב יחסי</strong>, ל<strong>עוגן בדף</strong> (<code>#id</code>), ל<strong>מייל</strong> (<code>mailto:</code>) ול<strong>טלפון</strong> (<code>tel:</code>).</li>
      <li>עוגן דורש <strong>שני צדדים</strong>: <code>id</code> ביעד, וסולמית בקישור.</li>
      <li><strong><code>target="_blank"</code></strong> פותח בלשונית חדשה — לציין זאת בטקסט, ולהוסיף <code>rel="noopener"</code>.</li>
      <li><strong>טקסט הקישור חייב לתאר את היעד</strong> גם כשקוראים אותו לבד.</li>
      <li>הצבע הכחול והקו התחתון הם ברירת מחדל של הדפדפן, וניתנים לשינוי ב־CSS.</li>
    </ul>
  </div>
</div>
