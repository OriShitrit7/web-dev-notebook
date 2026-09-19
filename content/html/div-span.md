# div & span

<p class="lead">
עד עכשיו כל תגית שלמדנו אמרה משהו על התוכן: זו כותרת, זו פסקה, זו רשימה.
<code>&lt;div&gt;</code> ו־<code>&lt;span&gt;</code> הם היוצאים מן הכלל —
הם <strong>קופסאות ריקות ממשמעות</strong>, שכל תפקידן לקבץ תוכן כדי שנוכל לתפוס אותו
ב־CSS וב־JavaScript.
</p>

## קודם כול: block מול inline

<div class="box theory">
  <div class="box-head"><span class="icon">📦</span>שתי התנהגויות של אלמנטים</div>
  <div class="box-body">
    <p>כדי להבין את ההבדל בין השניים צריך מושג שעוד לא הגדרנו במפורש:</p>
    <ul>
      <li>
        <strong>Block</strong> — האלמנט <strong>מתחיל בשורה חדשה</strong> ותופס את כל
        רוחב השורה. למשל <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code>.
      </li>
      <li>
        <strong>Inline</strong> — האלמנט <strong>זורם בתוך השורה</strong> ותופס רק את
        רוחב התוכן שלו. למשל <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>.
      </li>
    </ul>
    <p class="note-line">
      אלה ברירות המחדל של הדפדפן, ולא תכונה קבועה של האלמנט —
      ב־CSS אפשר להפוך אלמנט block ל־inline ולהפך.
    </p>
  </div>
</div>

```demo
<div>Block one</div>
<div>Block two</div>
<span>Inline one</span>
<span>Inline two</span>
```

<div class="keypoint">
שני ה־<code>&lt;div&gt;</code> ירדו שורה כל אחד, ושני ה־<code>&lt;span&gt;</code>
נשארו צמודים באותה שורה. זה כל ההבדל ביניהם.
</div>

## div — קופסה ברמת block

<div class="box theory">
  <div class="box-head"><span class="icon">🧱</span>Generic Container</div>
  <div class="box-body">
    <p>
      <code>&lt;div&gt;</code> (קיצור של <em>division</em>) הוא מיכל כללי ברמת block.
    </p>
    <p>
      <strong>אין לו שום משמעות סמנטית.</strong> הוא לא אומר לדפדפן, לקורא מסך או
      למנוע חיפוש שום דבר על התוכן שבתוכו — הוא רק מקבץ אותו יחד.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p>
      בפני עצמו <code>&lt;div&gt;</code> לא משנה כלום בתצוגה. כדי לראות את הקיבוץ,
      נוסיף לו רקע עם ה־attribute <code>style</code> שפגשנו בפרק Attributes:
    </p>
  </div>
</div>

```demo
<div style="background:#eef2ff">
  <h3>Title</h3>
  <p>Both are inside one div.</p>
</div>
```

## span — קופסה ברמת inline

<div class="box theory">
  <div class="box-head"><span class="icon">🔤</span>קיבוץ בתוך שורה</div>
  <div class="box-body">
    <p>
      <code>&lt;span&gt;</code> הוא המקבילה של <code>&lt;div&gt;</code> לרמת inline:
      מיכל כללי, בלי משמעות, שמיועד ל<strong>חלק מתוך שורת טקסט</strong>.
    </p>
    <p>
      משתמשים בו כשרוצים להתייחס למילה או לביטוי בתוך פסקה, בלי לשבור את זרימת הטקסט.
    </p>
  </div>
</div>

```demo
<p>Total:
  <span style="color:#be123c">$25</span>
  today only.</p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בלי ה־<code>style</code> לא היה נראה שום הבדל — <code>&lt;span&gt;</code>
      לא מוסיף כלום בעצמו. הוא רק יוצר ״ידית אחיזה״ סביב הטקסט.
    </p>
  </div>
</div>

## למה בכלל צריך אותם?

<div class="box theory">
  <div class="box-head"><span class="icon">🎯</span>נקודות אחיזה</div>
  <div class="box-body">
    <p>שני שימושים עיקריים, ושניהם מתחברים ל־<code>class</code> ול־<code>id</code> מפרק Attributes:</p>
    <ul>
      <li>
        <strong>עיצוב</strong> — לקבץ כמה אלמנטים כדי למקם או לעצב אותם יחד ב־CSS.
        למשל כרטיס מוצר שיש לו מסגרת וצל.
      </li>
      <li>
        <strong>לוגיקה</strong> — לתת ל־JavaScript נקודה לתפוס בה, כדי לשנות תוכן
        או להסתיר ולהציג חלק מהדף.
      </li>
    </ul>
  </div>
</div>

| | `<div>` | `<span>` |
| --- | --- | --- |
| **רמה** | block | inline |
| **מתחיל שורה חדשה** | כן | לא |
| **רוחב** | כל השורה | רוחב התוכן |
| **מה שמים בתוכו** | בלוקים שלמים | טקסט או חלק משורה |
| **משמעות סמנטית** | אין | אין |

## מתי *לא* להשתמש

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>Divitis</div>
  <div class="box-body">
    <p>
      יש שם לתופעה שבה בונים דף שלם מ־<code>&lt;div&gt;</code> בלבד:
      <strong>divitis</strong>, או ״מרק דיבים״.
    </p>
    <p>
      זה עובד ונראה בדיוק אותו דבר — ובדיוק בגלל זה קל ליפול לזה.
      אבל דף כזה לא מספר לאף אחד מה יש בו: קורא מסך לא יוכל לנווט בו,
      ומנוע חיפוש לא יבין את המבנה.
    </p>
    <p class="note-line">
      הכלל: <strong><code>&lt;div&gt;</code> הוא ברירת המחדל האחרונה, לא הראשונה.</strong>
      קודם בודקים אם יש אלמנט עם משמעות מתאימה.
    </p>
  </div>
</div>

| במקום | עדיף |
| --- | --- |
| `<div>` סביב כותרת | `<h1>` עד `<h6>` |
| `<div>` לכל שורה ברשימה | `<ul>` ו־`<li>` |
| `<div>` לפסקת טקסט | `<p>` |
| `<div>` לתפריט ניווט | `<nav>` |
| `<div>` לראש או תחתית הדף | `<header>` ו־`<footer>` |
| `<span>` סביב טקסט חשוב | `<strong>` או `<em>` |

<div class="box">
  <div class="box-body">
    <p>
      את האלמנטים הסמנטיים שבטור הימני נלמד בפרק הבא,
      <strong>Semantic HTML &amp; Navigation</strong>.
    </p>
  </div>
</div>

## כלל קינון שכדאי להכיר

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אסור div בתוך p</div>
  <div class="box-body">
    <p>
      <code>&lt;p&gt;</code> יכול להכיל רק תוכן ברמת inline. אם נשים בתוכו
      <code>&lt;div&gt;</code>, הדפדפן <strong>יסגור את הפסקה בעצמו</strong>
      לפני ה־<code>&lt;div&gt;</code> — בדיוק כמו שראינו עם טקסט בתוך <code>&lt;head&gt;</code>.
    </p>
  </div>
</div>

```demo
<p>Before <div>a div</div> after</p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      התוצאה נראית כמעט כמו שהתכוונו, אבל העץ שנבנה שונה לגמרי. זה מה שיש בפועל:
    </p>
    <pre><code class="language-text">p    "Before"
div  "a div"
     "after"      &lt;- כבר לא בתוך הפסקה
p    ""           &lt;- פסקה ריקה מה-&lt;/p&gt; המיותם</code></pre>
    <p>
      הפסקה נסגרה אחרי ״Before״, המילה ״after״ נשארה בחוץ, ותגית הסגירה
      <code>&lt;/p&gt;</code> שנותרה בלי פסקה פתוחה יצרה <strong>פסקה ריקה נוספת</strong>.
    </p>
    <p>
      הכלל ההפוך גם הוא נכון: בתוך <code>&lt;span&gt;</code> שמים רק תוכן inline,
      ולא <code>&lt;div&gt;</code> או <code>&lt;p&gt;</code>.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטים לעשות לא נכון</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;div&gt;</code> כשיש אלמנט סמנטי מתאים</strong> — הטעות הנפוצה ביותר.</li>
      <li><strong><code>&lt;div&gt;</code> בתוך <code>&lt;p&gt;</code></strong> — הדפדפן יפצל את הפסקה.</li>
      <li><strong><code>&lt;div&gt;</code> בתוך <code>&lt;span&gt;</code></strong> — בלוק בתוך inline, לא תקין.</li>
      <li><strong>קינון מיותר</strong> — שלוש שכבות <code>&lt;div&gt;</code> כשאחת מספיקה.</li>
      <li><strong><code>&lt;span&gt;</code> להדגשה</strong> — להדגשה יש <code>&lt;strong&gt;</code> ו־<code>&lt;em&gt;</code> עם משמעות.</li>
      <li><strong><code>&lt;div&gt;</code> ריק לריווח</strong> — לרווחים יש CSS.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>Block</strong> — מתחיל שורה חדשה ותופס את כל הרוחב. <strong>Inline</strong> — זורם בשורה ותופס רק את רוחב התוכן.</li>
      <li><strong><code>&lt;div&gt;</code></strong> — מיכל כללי ברמת block, בלי משמעות.</li>
      <li><strong><code>&lt;span&gt;</code></strong> — מיכל כללי ברמת inline, בלי משמעות.</li>
      <li>שניהם לא משנים כלום בתצוגה בעצמם — הם <strong>נקודות אחיזה</strong> ל־CSS ול־JavaScript.</li>
      <li>משתמשים בהם עם <code>class</code> או <code>id</code>.</li>
      <li><strong>קודם מחפשים אלמנט סמנטי</strong>, ורק אם אין — <code>&lt;div&gt;</code>.</li>
      <li>אסור <code>&lt;div&gt;</code> בתוך <code>&lt;p&gt;</code> — הדפדפן יסגור את הפסקה לבד.</li>
    </ul>
  </div>
</div>
