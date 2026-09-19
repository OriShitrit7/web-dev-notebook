# Lists

<p class="lead">
רשימות הן אחד המבנים הנפוצים ביותר באינטרנט — הרבה יותר ממה שנדמה.
לא רק רשימות קניות, אלא גם תפריטי ניווט, גלריות, תוצאות חיפוש ושאלות נפוצות.
בפרק הזה נלמד את שלושת סוגי הרשימות, איך מקננים אותן נכון, ומתי בוחרים בכל אחת.
</p>

## שלושה סוגי רשימות

<div class="box theory">
  <div class="box-head"><span class="icon">📋</span>סקירה</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;ul&gt;</code></strong> — <em>unordered list</em>, רשימה לא מסודרת. הסדר לא משנה.</li>
      <li><strong><code>&lt;ol&gt;</code></strong> — <em>ordered list</em>, רשימה מסודרת. לסדר יש משמעות.</li>
      <li><strong><code>&lt;dl&gt;</code></strong> — <em>description list</em>, רשימת מונחים והגדרות.</li>
    </ul>
    <p class="note-line">
      שתי הראשונות בנויות מ־<code>&lt;li&gt;</code> (<em>list item</em>).
      השלישית בנויה אחרת, ונגיע אליה בהמשך הפרק.
    </p>
  </div>
</div>

## ul — רשימה לא מסודרת

<div class="box">
  <div class="box-body">
    <p>
      משתמשים ב־<code>&lt;ul&gt;</code> כשהפריטים הם אוסף ש<strong>הסדר בו לא נושא משמעות</strong> —
      אם נערבב אותם, שום דבר לא יישבר.
    </p>
    <p>הדפדפן מציג לפניהם נקודות (bullets) בברירת מחדל:</p>
  </div>
</div>

```demo
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
```

## ol — רשימה מסודרת

<div class="box">
  <div class="box-body">
    <p>
      משתמשים ב־<code>&lt;ol&gt;</code> כש<strong>לסדר יש משמעות</strong>:
      שלבים במתכון, הוראות התקנה, דירוג.
    </p>
    <p>הדפדפן ממספר את הפריטים אוטומטית — לא כותבים את המספרים בעצמנו:</p>
  </div>
</div>

```demo
<ol>
  <li>Preheat the oven</li>
  <li>Mix the batter</li>
  <li>Bake for 30 minutes</li>
</ol>
```

<div class="keypoint">
המספרים נוצרים על ידי הדפדפן. לכן אם תוסיפי פריט באמצע, כל המספור יתעדכן לבד —
וזו בדיוק הסיבה לא לכתוב <code>&lt;li&gt;1. Preheat&lt;/li&gt;</code> ידנית.
</div>

### שליטה במספור

<div class="box">
  <div class="box-body">
    <p>ל־<code>&lt;ol&gt;</code> יש כמה attributes שמשנים את אופן המספור:</p>
  </div>
</div>

| Attribute | מה הוא עושה | ערכים |
| --- | --- | --- |
| `type` | איזה סוג מונה להציג | `1` `a` `A` `i` `I` |
| `start` | מאיזה מספר להתחיל | מספר שלם |
| `reversed` | למספר בסדר יורד | Boolean Attribute |

```demo
<ol type="a">
  <li>First</li>
  <li>Second</li>
</ol>
<ol start="5">
  <li>Fifth</li>
  <li>Sixth</li>
</ol>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      <code>reversed</code> הוא Boolean Attribute מהפרק הקודם — כותבים רק את שמו,
      בלי ערך, וזה מספיק.
    </p>
  </div>
</div>

## li — פריט ברשימה

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>הכלל</div>
  <div class="box-body">
    <p>
      <code>&lt;li&gt;</code> חייב להיות <strong>Child ישיר</strong> של
      <code>&lt;ul&gt;</code> או <code>&lt;ol&gt;</code>.
    </p>
    <p>
      ולהפך: בתוך <code>&lt;ul&gt;</code> או <code>&lt;ol&gt;</code> מותר שיהיו
      <strong>רק</strong> אלמנטי <code>&lt;li&gt;</code> כילדים ישירים — לא פסקאות
      ולא טקסט חופשי.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      זה לא אומר שאסור תוכן עשיר ברשימה — פשוט הוא צריך להיות
      <strong>בתוך</strong> ה־<code>&lt;li&gt;</code>:
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">תוכן בתוך li</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;
    &lt;p&gt;Text&lt;/p&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">תוכן ישירות ב־ul</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;ul&gt;
  &lt;p&gt;Text&lt;/p&gt;
  &lt;li&gt;Item&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
</div>

## רשימות מקוננות

<div class="box theory">
  <div class="box-head"><span class="icon">🪆</span>רשימה בתוך רשימה</div>
  <div class="box-body">
    <p>
      אפשר לקנן רשימה בתוך רשימה, וכך ליצור היררכיה — בדיוק כמו ה־Nesting
      שלמדנו בפרק Elements, Tags &amp; Nesting.
    </p>
    <p>
      הנקודה הקריטית: הרשימה הפנימית נכנסת <strong>בתוך ה־<code>&lt;li&gt;</code></strong>
      שאליו היא שייכת, ולא בין שני פריטים.
    </p>
  </div>
</div>

```demo
<ul>
  <li>Fruit
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Bread</li>
</ul>
```

<div class="keypoint">
שימי לב שהנקודות של הרשימה הפנימית <strong>נראות אחרת</strong> — עיגול ריק במקום מלא.
הדפדפן עושה את זה לבד לפי עומק הקינון, כדי שההיררכיה תהיה ברורה לעין.
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">הרשימה הפנימית בתוך li</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;Fruit
    &lt;ul&gt;
      &lt;li&gt;Apple&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">הרשימה הפנימית בין פריטים</div>
    <div class="compare-body">
<pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;Fruit&lt;/li&gt;
  &lt;ul&gt;
    &lt;li&gt;Apple&lt;/li&gt;
  &lt;/ul&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>למה זה חשוב, אם זה נראה אותו דבר?</div>
  <div class="box-body">
    <p>
      שתי הגרסאות ייראו כמעט זהות בדפדפן, ולכן קל להתבלבל.
      אבל במבנה השגוי הרשימה הפנימית היא <strong>Sibling</strong> של הפריט,
      ולא חלק ממנו.
    </p>
    <p>
      התוצאה: קורא מסך לא יקשר בין ״Fruit״ לפריטים שתחתיו,
      ו־CSS שיתייחס ל״רשימה שבתוך פריט״ פשוט לא יתפוס אותה.
    </p>
  </div>
</div>

## dl — רשימת מונחים

<div class="box theory">
  <div class="box-head"><span class="icon">📖</span>שלושה אלמנטים</div>
  <div class="box-body">
    <p>
      <code>&lt;dl&gt;</code> (<em>description list</em>) מיועדת לזוגות של
      <strong>מונח והסבר</strong> — מילון מונחים, שאלות ותשובות, מפרט טכני.
    </p>
    <ul>
      <li><strong><code>&lt;dl&gt;</code></strong> — העוטף של כל הרשימה.</li>
      <li><strong><code>&lt;dt&gt;</code></strong> — <em>description term</em>, המונח.</li>
      <li><strong><code>&lt;dd&gt;</code></strong> — <em>description details</em>, ההסבר.</li>
    </ul>
    <p class="note-line">
      שימי לב שאין כאן <code>&lt;li&gt;</code> בכלל — זה המבנה היחיד מבין השלושה
      שלא משתמש בו.
    </p>
  </div>
</div>

```demo
<dl>
  <dt>HTML</dt>
  <dd>The structure of the page.</dd>
  <dt>CSS</dt>
  <dd>The look of the page.</dd>
</dl>
```

<div class="box">
  <div class="box-body">
    <p>
      הדפדפן מזיח את ה־<code>&lt;dd&gt;</code> ימינה ביחס ל־<code>&lt;dt&gt;</code>,
      וכך הקשר ביניהם נראה לעין בלי שום CSS.
    </p>
    <p class="note-line">
      אפשר גם לצרף כמה <code>&lt;dd&gt;</code> לאותו <code>&lt;dt&gt;</code>
      (מונח עם כמה הסברים), או כמה <code>&lt;dt&gt;</code> ל־<code>&lt;dd&gt;</code> אחד
      (כמה מונחים נרדפים עם אותו הסבר).
    </p>
  </div>
</div>

## איזו רשימה לבחור?

| המצב | הרשימה הנכונה |
| --- | --- |
| מצרכים, תכונות, אוסף קישורים | `<ul>` |
| שלבים במתכון, הוראות הרכבה | `<ol>` |
| דירוג, טופ 10 | `<ol>` |
| מילון מונחים, שאלות ותשובות | `<dl>` |
| מפרט טכני (מאפיין וערכו) | `<dl>` |

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>המבחן הפשוט</div>
  <div class="box-body">
    <p>
      שאלי את עצמך: <strong>״אם אערבב את סדר הפריטים, משהו יישבר?״</strong>
    </p>
    <ul>
      <li>אם כן — זו <code>&lt;ol&gt;</code>.</li>
      <li>אם לא — זו <code>&lt;ul&gt;</code>.</li>
    </ul>
  </div>
</div>

## רשימות בשימוש אמיתי

<div class="box">
  <div class="box-body">
    <p>
      תפריט ניווט של אתר הוא כמעט תמיד <code>&lt;ul&gt;</code> של קישורים.
      זה נראה כמו שורת כפתורים אופקית, אבל מתחת למראה הזה עומדת רשימה רגילה
      שה־CSS סידר אותה לרוחב.
    </p>
    <p>
      זה מסביר למה כל כך חשוב לבחור את התגית לפי המשמעות: קורא מסך מכריז
      ״רשימה בת 4 פריטים״, וכך המשתמש יודע כמה אפשרויות ניווט יש.
    </p>
    <p class="note-line">
      את המבנה המלא של תפריט ניווט, כולל <code>&lt;nav&gt;</code>,
      נלמד בפרק <strong>Semantic HTML &amp; Navigation</strong>.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר רשימות</div>
  <div class="box-body">
    <ul>
      <li><strong>מספור ידני ב־<code>&lt;ol&gt;</code></strong> — הדפדפן כבר ממספר. תקבלי ״1. 1.״.</li>
      <li><strong>רשימה מקוננת בין פריטים</strong> — צריכה להיות בתוך ה־<code>&lt;li&gt;</code>.</li>
      <li><strong>טקסט או <code>&lt;p&gt;</code> ישירות בתוך <code>&lt;ul&gt;</code></strong> — רק <code>&lt;li&gt;</code> מותר שם.</li>
      <li><strong><code>&lt;ul&gt;</code> רק כדי לקבל הזחה</strong> — להזחה יש CSS. רשימה היא משמעות.</li>
      <li><strong><code>&lt;br&gt;</code> במקום פריטים</strong> — נראה כמו רשימה, אבל הדפדפן רואה פסקה אחת.</li>
      <li><strong>שכחת <code>&lt;/li&gt;</code></strong> — הדפדפן יסגור לבד, אבל תוכן עלול להיבלע לפריט הבא.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;ul&gt;</code></strong> — רשימה לא מסודרת, כשהסדר לא משנה. נקודות בברירת מחדל.</li>
      <li><strong><code>&lt;ol&gt;</code></strong> — רשימה מסודרת, כשלסדר יש משמעות. הדפדפן ממספר לבד.</li>
      <li><strong><code>&lt;li&gt;</code></strong> — פריט. חייב להיות Child ישיר של <code>&lt;ul&gt;</code> או <code>&lt;ol&gt;</code>.</li>
      <li><code>type</code>, <code>start</code> ו־<code>reversed</code> שולטים באופן המספור של <code>&lt;ol&gt;</code>.</li>
      <li><strong>רשימה מקוננת נכנסת בתוך ה־<code>&lt;li&gt;</code></strong>, לא בין פריטים.</li>
      <li>הדפדפן משנה את סימן הנקודה לפי עומק הקינון, בלי CSS.</li>
      <li><strong><code>&lt;dl&gt;</code></strong> עם <code>&lt;dt&gt;</code> ו־<code>&lt;dd&gt;</code> — למונחים והסברים. בלי <code>&lt;li&gt;</code>.</li>
      <li>המבחן לבחירה: <strong>אם אערבב את הסדר, משהו יישבר?</strong></li>
    </ul>
  </div>
</div>
