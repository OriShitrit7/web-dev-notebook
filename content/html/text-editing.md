# Text Editing

<p class="lead">
עד עכשיו כתבנו טקסט בפסקאות ובכותרות. בפרק הזה נכיר את האלמנטים שמסמנים
<strong>משמעות בתוך הטקסט</strong> — מה חשוב, מה מודגש, מה צוטט, מה נמחק.
הנושא החוזר כאן הוא אותו כלל מהפרקים הקודמים: בוחרים לפי המשמעות, לא לפי המראה.
</p>

## פסקאות ורווחים

<div class="box theory">
  <div class="box-head"><span class="icon">📄</span>הפסקה — p</div>
  <div class="box-body">
    <p>
      <code>&lt;p&gt;</code> היא אבן הבניין הבסיסית של טקסט. הדפדפן מוסיף לה
      רווח מעל ומתחת בברירת מחדל, כך שפסקאות מופרדות זו מזו.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הדפדפן מכווץ רווחים</div>
  <div class="box-body">
    <p>
      זה כלל שמפתיע כמעט כל מי שמתחיל: <strong>רצף של רווחים, טאבים וירידות שורה
      בקוד הופך לרווח אחד בלבד</strong> בתצוגה.
    </p>
    <p>
      הכלל נקרא <em>whitespace collapsing</em>, והוא הסיבה שאפשר להזיח קוד HTML
      כמה שרוצים בלי לשנות את התוצאה.
    </p>
  </div>
</div>

```demo
<p>Lots      of      space</p>
<p>A line
break in
the source</p>
```

<div class="keypoint">
רוצה רווח נוסף או ירידת שורה אמיתית? אלה לא מושגים של HTML אלא של
<strong>עיצוב</strong> — ולכן הם שייכים ל־CSS. החריגים היחידים הם
<code>&lt;br&gt;</code> לירידת שורה שהיא חלק מהתוכן, ו־<code>&lt;pre&gt;</code>
לטקסט שהרווחים בו משמעותיים.
</div>

## הדגשה: strong ו־em

<div class="box theory">
  <div class="box-head"><span class="icon">💪</span>שני סוגי הדגשה</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>&lt;strong&gt;</code></strong> — <strong>חשיבות</strong>.
        התוכן קריטי, מסוכן או דחוף. מוצג מודגש.
      </li>
      <li>
        <strong><code>&lt;em&gt;</code></strong> — <strong>הטעמה</strong> (emphasis).
        המילה שעליה היית מרימה את הקול בדיבור. מוצג נטוי.
      </li>
    </ul>
    <p class="note-line">
      קורא מסך משנה את נעימת ההקראה לפי שניהם — כלומר להבדל יש השפעה אמיתית,
      לא רק ויזואלית.
    </p>
  </div>
</div>

```demo
<p>Warning: <strong>do not refresh</strong>.</p>
<p>I said <em>now</em>, not later.</p>
```

### b ו־i — ולמה עדיף להימנע

<div class="box">
  <div class="box-body">
    <p>
      קיימות גם <code>&lt;b&gt;</code> ו־<code>&lt;i&gt;</code>, שנראות בתצוגה
      <strong>זהות לחלוטין</strong> ל־<code>&lt;strong&gt;</code> ול־<code>&lt;em&gt;</code>:
    </p>
  </div>
</div>

```demo
<p><strong>strong</strong> vs <b>b</b></p>
<p><em>em</em> vs <i>i</i></p>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>זהות במראה, שונות במשמעות</div>
  <div class="box-body">
    <p>
      <code>&lt;b&gt;</code> ו־<code>&lt;i&gt;</code> מסמנות טקסט ש<strong>בולט ויזואלית
      בלי חשיבות נוספת</strong> — למשל שם מוצר, מונח לועזי או מילת מפתח בכותרת.
    </p>
    <p>
      בפועל, ברוב המקרים מה שהתכוונת אליו הוא כן חשיבות או הטעמה.
      לכן כלל האצבע: <strong>ברירת המחדל היא <code>&lt;strong&gt;</code> ו־<code>&lt;em&gt;</code></strong>,
      ו־<code>&lt;b&gt;</code>/<code>&lt;i&gt;</code> רק כשבאמת אין שום משמעות מעבר למראה.
    </p>
  </div>
</div>

## עוד אלמנטים לסימון טקסט

| אלמנט | משמעות | מראה ברירת מחדל |
| --- | --- | --- |
| `<mark>` | מסומן כרלוונטי בהקשר הנוכחי | רקע צהוב |
| `<small>` | הערת שוליים, אותיות קטנות | טקסט קטן יותר |
| `<del>` | טקסט שנמחק | קו חוצה |
| `<ins>` | טקסט שנוסף | קו תחתון |
| `<s>` | כבר לא נכון או לא רלוונטי | קו חוצה |
| `<sub>` | כתב תחתי | קטן ומונמך |
| `<sup>` | כתב עילי | קטן ומוגבה |

```demo
<p><mark>Highlighted</mark> text</p>
<p><small>Terms and conditions</small></p>
<p><del>$50</del> <ins>$35</ins></p>
<p>H<sub>2</sub>O and x<sup>2</sup></p>
```

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>del מול s</div>
  <div class="box-body">
    <p>שניהם מציגים קו חוצה, אבל הם אומרים דברים שונים:</p>
    <ul>
      <li><code>&lt;del&gt;</code> — הטקסט <strong>הוסר מהמסמך</strong>. שימושי בתיעוד שינויים.</li>
      <li><code>&lt;s&gt;</code> — הטקסט <strong>כבר לא מדויק</strong>, אבל לא נמחק. למשל מחיר ישן לצד מחיר מבצע.</li>
    </ul>
  </div>
</div>

## br ו־hr

<div class="box theory">
  <div class="box-head"><span class="icon">↵</span>שני Void Elements מוכרים</div>
  <div class="box-body">
    <p>
      פגשנו את שניהם בפרק Elements, Tags &amp; Nesting כדוגמאות ל־Void Elements.
      עכשיו נדייק <strong>מתי נכון להשתמש בהם</strong>.
    </p>
    <ul>
      <li>
        <code>&lt;br&gt;</code> — ירידת שורה שהיא <strong>חלק מהתוכן עצמו</strong>:
        כתובת, שורה בשיר, מספר טלפון.
      </li>
      <li>
        <code>&lt;hr&gt;</code> — <strong>מעבר נושאי</strong> בתוכן. הקו האופקי הוא רק
        ברירת המחדל של הדפדפן; המשמעות היא ״כאן מתחיל נושא אחר״.
      </li>
    </ul>
  </div>
</div>

```demo
<p>Ada Lovelace<br>12 Baker Street<br>London</p>
<hr>
<p>A new topic starts here.</p>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>br הוא לא כלי לריווח</div>
  <div class="box-body">
    <p>
      הטעות הנפוצה: לכתוב <code>&lt;br&gt;&lt;br&gt;</code> כדי ליצור רווח בין שני חלקי טקסט.
    </p>
    <p>
      זה אמנם ייצור רווח, אבל מבחינת המבנה זו עדיין <strong>פסקה אחת</strong> —
      והתוכן שלה מתערבב. שתי פסקאות נפרדות הן שתי <code>&lt;p&gt;</code>.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">שתי פסקאות</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;p&gt;First idea.&lt;/p&gt;
&lt;p&gt;Second idea.&lt;/p&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">פסקה אחת עם רווח מזויף</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;p&gt;First idea.
&lt;br&gt;&lt;br&gt;
Second idea.&lt;/p&gt;</code></pre>
    </div>
  </div>
</div>

## ציטוטים

<div class="box theory">
  <div class="box-head"><span class="icon">❝</span>שלושה אלמנטים</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;blockquote&gt;</code></strong> — ציטוט ארוך, כבלוק נפרד. הדפדפן מזיח אותו.</li>
      <li><strong><code>&lt;q&gt;</code></strong> — ציטוט קצר בתוך משפט. הדפדפן <strong>מוסיף מרכאות לבד</strong>.</li>
      <li><strong><code>&lt;cite&gt;</code></strong> — <em>שם היצירה</em> שממנה ציטטנו (ספר, סרט, מאמר). מוצג נטוי.</li>
    </ul>
    <p class="note-line">
      <code>&lt;cite&gt;</code> מסמן את <strong>שם היצירה</strong>, לא את שם האדם שאמר את המשפט.
      זו טעות נפוצה.
    </p>
  </div>
</div>

```demo
<p>She said <q>this is fine</q> and left.</p>
<blockquote>
  Simplicity is the ultimate sophistication.
</blockquote>
<p>From <cite>The Notebooks</cite>.</p>
```

<div class="keypoint">
שימי לב שלא כתבנו מרכאות סביב <code>this is fine</code> — הדפדפן הוסיף אותן בעצמו,
כי זה מה ש־<code>&lt;q&gt;</code> עושה. אם נכתוב מרכאות ידנית, יופיעו שתי שכבות של מרכאות.
</div>

## code ו־pre

<div class="box theory">
  <div class="box-head"><span class="icon">⌨️</span>טקסט טכני</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>&lt;code&gt;</code></strong> — קטע קוד <strong>בתוך שורה</strong>.
        מוצג בגופן מונוספייס.
      </li>
      <li>
        <strong><code>&lt;pre&gt;</code></strong> — טקסט <em>preformatted</em>:
        <strong>שומר על כל הרווחים וירידות השורה</strong> בדיוק כפי שנכתבו.
      </li>
    </ul>
    <p>
      <code>&lt;pre&gt;</code> הוא החריג היחיד לכלל כיווץ הרווחים שראינו בתחילת הפרק.
      לכן בלוקי קוד נכתבים כמעט תמיד כ־<code>&lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;</code>.
    </p>
  </div>
</div>

```demo
<p>Run the <code>build()</code> function.</p>
<pre>
  indented
    even more
</pre>
```

## תווים מיוחדים

<div class="box theory">
  <div class="box-head"><span class="icon">🔣</span>HTML Entities</div>
  <div class="box-body">
    <p>
      איך כותבים את התו <code>&lt;</code> בתוך טקסט, אם הדפדפן מפרש אותו כתחילת תגית?
    </p>
    <p>
      התשובה היא <strong>Entities</strong> — קודים מיוחדים שמתחילים ב־<code>&amp;</code>
      ומסתיימים ב־<code>;</code>, והדפדפן ממיר אותם לתו הרצוי.
    </p>
  </div>
</div>

| הקוד | התו | מתי צריך |
| --- | --- | --- |
| `&lt;` | `<` | כדי להציג סוגר משולש פותח |
| `&gt;` | `>` | כדי להציג סוגר משולש סוגר |
| `&amp;` | `&` | כי `&` פותח entity בעצמו |
| `&quot;` | `"` | מרכאות בתוך ערך של attribute |
| `&nbsp;` | רווח | רווח שלא יישבר לשורה חדשה |
| `&copy;` | `©` | סימן זכויות יוצרים |

```demo
<p>The &lt;p&gt; tag makes a paragraph.</p>
<p>Ben &amp; Jerry</p>
<p>&copy; 2026</p>
```

<div class="keypoint">
שלושת ה־entities שבאמת <strong>חייבים</strong> אותם הם <code>&amp;lt;</code>,
<code>&amp;gt;</code> ו־<code>&amp;amp;</code>. בלעדיהם הדפדפן יחשוב שהתחלת לכתוב תגית
או entity, ויבלע את הטקסט.
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטים לעשות לא נכון</div>
  <div class="box-body">
    <ul>
      <li><strong>רווחים כפולים ליישור</strong> — הדפדפן מכווץ אותם. ליישור יש CSS.</li>
      <li><strong><code>&lt;br&gt;&lt;br&gt;</code> במקום פסקה חדשה</strong> — נראה נכון, אבל המבנה שגוי.</li>
      <li><strong>בחירת <code>&lt;b&gt;</code> במקום <code>&lt;strong&gt;</code></strong> — מראה זהה, משמעות אבודה.</li>
      <li><strong>מרכאות ידניות בתוך <code>&lt;q&gt;</code></strong> — יופיעו מרכאות כפולות.</li>
      <li><strong><code>&lt;cite&gt;</code> לשם אדם</strong> — הוא מסמן שם יצירה.</li>
      <li><strong><code>&amp;</code> בודד בטקסט</strong> — עדיף <code>&amp;amp;</code>, אחרת הדפדפן עלול לנסות לפרש entity.</li>
      <li><strong>הזחה בתוך <code>&lt;pre&gt;</code></strong> — הרווחים שם אמיתיים ויופיעו בתצוגה.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>הדפדפן <strong>מכווץ רצפי רווחים וירידות שורה</strong> לרווח אחד.</li>
      <li><strong><code>&lt;strong&gt;</code></strong> — חשיבות. <strong><code>&lt;em&gt;</code></strong> — הטעמה. שתיהן נשמעות אחרת בקורא מסך.</li>
      <li><strong><code>&lt;b&gt;</code></strong> ו־<strong><code>&lt;i&gt;</code></strong> — מראה בלבד, בלי משמעות. עדיף להימנע.</li>
      <li><code>&lt;mark&gt;</code>, <code>&lt;small&gt;</code>, <code>&lt;del&gt;</code>, <code>&lt;ins&gt;</code>, <code>&lt;sub&gt;</code>, <code>&lt;sup&gt;</code> — לסימון טקסט לפי משמעות.</li>
      <li><strong><code>&lt;br&gt;</code></strong> לירידת שורה שהיא חלק מהתוכן, <strong>לא</strong> לריווח.</li>
      <li><strong><code>&lt;hr&gt;</code></strong> — מעבר נושאי, לא סתם קו.</li>
      <li><code>&lt;blockquote&gt;</code> לציטוט בלוק, <code>&lt;q&gt;</code> לציטוט בשורה (מוסיף מרכאות לבד), <code>&lt;cite&gt;</code> לשם היצירה.</li>
      <li><strong><code>&lt;pre&gt;</code></strong> — האלמנט היחיד ששומר רווחים כמו שנכתבו.</li>
      <li><strong>Entities</strong> — <code>&amp;lt;</code>, <code>&amp;gt;</code> ו־<code>&amp;amp;</code> הם החובה.</li>
    </ul>
  </div>
</div>
