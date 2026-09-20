# Tables

<p class="lead">
טבלה מציגה <strong>מידע דו־ממדי</strong> — נתונים שיש להם גם שורות וגם עמודות,
וכל תא מקבל את משמעותו משתיהן. בפרק הזה נלמד את מבנה הטבלה,
איך מסמנים בה כותרות, ואיך מאחדים תאים.
</p>

## מתי משתמשים בטבלה

<div class="box theory">
  <div class="box-head"><span class="icon">📊</span>רק לנתונים טבלאיים</div>
  <div class="box-body">
    <p>
      המבחן פשוט: <strong>האם לכל תא יש משמעות גם לפי השורה וגם לפי העמודה?</strong>
    </p>
    <p>
      ציון של תלמיד במקצוע מסוים — כן. לוח מחירים, טבלת מידות, תוצאות משחקים — כן.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>טבלה היא לא כלי לפריסת הדף</div>
  <div class="box-body">
    <p>
      בשנות התשעים, לפני ש־CSS היה בשל, בנו אתרים שלמים מטבלאות כדי לסדר תוכן בעמודות.
      תיתקלי בזה עוד בהרבה קוד ישן.
    </p>
    <p>
      היום זו טעות. קורא מסך מכריז ״טבלה בת 3 שורות ו־4 עמודות״ ומנסה לקרוא תא־תא,
      וזה הופך דף רגיל לבלתי עביר. לסידור תוכן בעמודות יש CSS.
    </p>
  </div>
</div>

## המבנה הבסיסי

<div class="box theory">
  <div class="box-head"><span class="icon">🧱</span>שלוש תגיות</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;table&gt;</code></strong> — עוטף את כל הטבלה.</li>
      <li><strong><code>&lt;tr&gt;</code></strong> — <em>table row</em>, שורה.</li>
      <li><strong><code>&lt;td&gt;</code></strong> — <em>table data</em>, תא בודד.</li>
    </ul>
    <p>
      הטבלה נבנית <strong>שורה אחרי שורה</strong>, ולא עמודה אחרי עמודה.
      העמודות נוצרות מכך שבכל שורה יש אותו מספר תאים.
    </p>
  </div>
</div>

```demo
<table>
  <tr><td>Name</td><td>Age</td></tr>
  <tr><td>Ada</td><td>36</td></tr>
</table>
```

<div class="keypoint">
שימי לב שאין קווים ואין הפרדה — <strong>לטבלה אין גבולות בברירת מחדל</strong>.
זו עוד דוגמה לכך ש־HTML אחראי למבנה בלבד; הקווים הם עיצוב, והם שייכים ל־CSS.
</div>

<div class="box">
  <div class="box-body">
    <p>
      כדי שנוכל לראות את המבנה בהמשך הפרק, נוסיף לדוגמאות בלוק
      <code>&lt;style&gt;</code> קטן שמצייר גבולות. זו הצצה מוקדמת ל־CSS —
      בינתיים מספיק לדעת שהוא רק מוסיף קווים, ולא משנה את מבנה ה־HTML.
    </p>
  </div>
</div>

## th — תאי כותרת

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>לא כל תא שווה</div>
  <div class="box-body">
    <p>
      <code>&lt;th&gt;</code> (<em>table header</em>) מסמן תא ש<strong>מכותרת</strong>
      שורה או עמודה, במקום להכיל נתון.
    </p>
    <p>
      הדפדפן מציג אותו מודגש וממורכז — אבל החשוב יותר הוא שקורא מסך
      <strong>מקשר בין כל תא לכותרת שלו</strong>, ומקריא ״גיל: 36״ במקום ״36״.
    </p>
  </div>
</div>

```demo
<style>
  table { border-collapse: collapse; }
  th, td { border: 1px solid #999; padding: 6px 10px; }
</style>
<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Ada</td><td>36</td></tr>
</table>
```

### scope

<div class="box">
  <div class="box-body">
    <p>
      כשיש כותרות גם בשורה העליונה וגם בעמודה הימנית, צריך לומר לכל
      <code>&lt;th&gt;</code> <strong>על מה הוא מכותרת</strong>:
    </p>
    <ul>
      <li><code>scope="col"</code> — הכותרת שייכת לעמודה שמתחתיה.</li>
      <li><code>scope="row"</code> — הכותרת שייכת לשורה שלצידה.</li>
    </ul>
    <p class="note-line">
      ויזואלית זה לא משנה כלום. זה קיים אך ורק בשביל קוראי מסך —
      ובטבלה עם שתי רמות כותרות זה ההבדל בין טבלה מובנת לבין רצף מספרים.
    </p>
  </div>
</div>

```html
<table>
  <tr>
    <th></th>
    <th scope="col">Math</th>
    <th scope="col">English</th>
  </tr>
  <tr>
    <th scope="row">Ada</th>
    <td>95</td>
    <td>88</td>
  </tr>
</table>
```

## caption — כותרת לטבלה

<div class="box">
  <div class="box-body">
    <p>
      <code>&lt;caption&gt;</code> נותן שם לטבלה כולה. הוא חייב להיות
      <strong>האלמנט הראשון בתוך <code>&lt;table&gt;</code></strong>, לפני כל שורה.
    </p>
    <p class="note-line">
      הוא עדיף על כותרת <code>&lt;h3&gt;</code> מעל הטבלה, כי הוא
      <strong>חלק מהטבלה</strong> — וקורא מסך מקריא אותו כשמגיעים אליה.
    </p>
  </div>
</div>

```demo
<style>
  table { border-collapse: collapse; }
  th, td { border: 1px solid #999; padding: 6px 10px; }
  caption { padding: 6px; font-weight: 700; }
</style>
<table>
  <caption>Exam results</caption>
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Ada</td><td>95</td></tr>
</table>
```

## thead, tbody, tfoot

<div class="box theory">
  <div class="box-head"><span class="icon">📚</span>חלוקת הטבלה לאזורים</div>
  <div class="box-body">
    <p>בטבלאות גדולות מקבצים את השורות לשלושה אזורים:</p>
    <ul>
      <li><strong><code>&lt;thead&gt;</code></strong> — שורות הכותרת.</li>
      <li><strong><code>&lt;tbody&gt;</code></strong> — שורות הנתונים.</li>
      <li><strong><code>&lt;tfoot&gt;</code></strong> — שורות סיכום, למשל ״סך הכול״.</li>
    </ul>
    <p class="note-line">
      הם לא חובה ולא משנים את המראה, אבל הם מאפשרים לעצב כל אזור בנפרד,
      ובהדפסה של טבלה ארוכה הדפדפן יכול לחזור על ה־<code>&lt;thead&gt;</code> בכל עמוד.
    </p>
  </div>
</div>

```demo
<style>
  table { border-collapse: collapse; }
  th, td { border: 1px solid #999; padding: 6px 10px; }
  tfoot { font-weight: 700; }
</style>
<table>
  <thead>
    <tr><th>Item</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Book</td><td>20</td></tr>
    <tr><td>Pen</td><td>5</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>25</td></tr>
  </tfoot>
</table>
```

## איחוד תאים

<div class="box theory">
  <div class="box-head"><span class="icon">🔗</span>colspan ו־rowspan</div>
  <div class="box-body">
    <ul>
      <li><strong><code>colspan="2"</code></strong> — התא משתרע על שתי <strong>עמודות</strong>.</li>
      <li><strong><code>rowspan="2"</code></strong> — התא משתרע על שתי <strong>שורות</strong>.</li>
    </ul>
    <p>
      כלל שקל לשכוח: תא שנבלע על ידי התא המאוחד <strong>נמחק לגמרי</strong> מהקוד.
      אם תא משתרע על שתי עמודות, השורה שלו תכיל תא אחד פחות.
    </p>
  </div>
</div>

```demo
<style>
  table { border-collapse: collapse; }
  th, td { border: 1px solid #999; padding: 6px 10px; }
</style>
<table>
  <tr>
    <th colspan="2">Contact</th>
  </tr>
  <tr>
    <td>Email</td><td>ada@example.com</td>
  </tr>
</table>
```

<div class="box">
  <div class="box-body">
    <p>
      בשורה הראשונה יש <strong>תא אחד בלבד</strong>, והוא תופס את רוחב שתי העמודות.
      וכך נראה <code>rowspan</code>:
    </p>
  </div>
</div>

```demo
<style>
  table { border-collapse: collapse; }
  th, td { border: 1px solid #999; padding: 6px 10px; }
</style>
<table>
  <tr>
    <td rowspan="2">Ada</td>
    <td>Email</td>
  </tr>
  <tr>
    <td>Phone</td>
  </tr>
</table>
```

<div class="keypoint">
בשורה השנייה יש תא אחד בלבד, כי התא הימני כבר ״תפוס״ על ידי
<code>rowspan</code> של השורה שמעליה. זו הטעות הנפוצה ביותר בטבלאות —
משאירים את התא הנבלע, והטבלה מתעוותת.
</div>

## טבלה נגישה

<div class="box example">
  <div class="box-head"><span class="icon">♿</span>שלושה דברים שהופכים טבלה לקריאה</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;caption&gt;</code></strong> — כדי שיידעו על מה הטבלה.</li>
      <li><strong><code>&lt;th&gt;</code></strong> לכל כותרת — ולא <code>&lt;td&gt;</code> מודגש.</li>
      <li><strong><code>scope</code></strong> על כל <code>&lt;th&gt;</code> — כדי שיידעו למה הוא שייך.</li>
    </ul>
    <p class="note-line">
      שלושתם לא משנים כמעט כלום במראה, ולכן קל לוותר עליהם בלי לשים לב.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה שובר טבלאות</div>
  <div class="box-body">
    <ul>
      <li><strong>טבלה לפריסת הדף</strong> — הטעות ההיסטורית הגדולה. לפריסה יש CSS.</li>
      <li><strong><code>&lt;td&gt;</code> מודגש במקום <code>&lt;th&gt;</code></strong> — נראה כמו כותרת, אבל אינו כותרת.</li>
      <li><strong>מספר תאים לא אחיד בשורות</strong> — הטבלה תתעוות.</li>
      <li><strong>השארת התא הנבלע</strong> אחרי <code>colspan</code> או <code>rowspan</code>.</li>
      <li><strong><code>&lt;caption&gt;</code> שלא ראשון</strong> — חייב להיות האלמנט הראשון ב־<code>&lt;table&gt;</code>.</li>
      <li><strong><code>&lt;td&gt;</code> ישירות בתוך <code>&lt;table&gt;</code></strong> — כל תא חייב להיות בתוך <code>&lt;tr&gt;</code>.</li>
      <li><strong>ציפייה לקווים</strong> — אין גבולות בברירת מחדל.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>טבלה היא ל<strong>נתונים דו־ממדיים</strong> בלבד, לא לפריסת דף.</li>
      <li><strong><code>&lt;table&gt;</code></strong> עוטף, <strong><code>&lt;tr&gt;</code></strong> שורה, <strong><code>&lt;td&gt;</code></strong> תא.</li>
      <li>בונים <strong>שורה אחרי שורה</strong>; העמודות נוצרות מעצמן.</li>
      <li><strong><code>&lt;th&gt;</code></strong> לתא כותרת, עם <strong><code>scope</code></strong> שמציין עמודה או שורה.</li>
      <li><strong><code>&lt;caption&gt;</code></strong> — שם הטבלה, חייב להיות ראשון בתוכה.</li>
      <li><strong><code>&lt;thead&gt;</code></strong>, <strong><code>&lt;tbody&gt;</code></strong> ו־<strong><code>&lt;tfoot&gt;</code></strong> מחלקים את השורות לאזורים.</li>
      <li><strong><code>colspan</code></strong> מאחד עמודות, <strong><code>rowspan</code></strong> מאחד שורות — והתא הנבלע נמחק.</li>
      <li>אין גבולות בברירת מחדל — הקווים מגיעים מ־CSS.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מתי נכון להשתמש בטבלה?
- כדי לסדר את הדף בעמודות
+ כשלכל תא יש משמעות גם לפי השורה וגם לפי העמודה
- כשרוצים גבולות סביב תוכן
- כשיש הרבה טקסט להציג
= טבלה לפריסת דף היא טעות היסטורית: קורא מסך ינסה לקרוא את הדף תא-תא.

? בנית טבלה ואין בה שום קווים. מה קרה?
- שכחת `<tbody>`
+ כלום — לטבלה אין גבולות בברירת מחדל, הקווים מגיעים מ-CSS
- צריך להוסיף `border="1"`
- `<td>` לא נסגר כראוי
= HTML אחראי למבנה בלבד. הגבולות הם עיצוב.

? מה נותן `<th>` שאין ב-`<td>` מודגש?
- רק מראה מודגש וממורכז
+ קורא מסך מקשר כל תא לכותרת שלו ומקריא ״גיל: 36״ במקום ״36״
- הוא מאפשר מיון של הטבלה
- הוא מרחיב את התא אוטומטית
= `<td>` מודגש נראה ככותרת אבל לא מתפקד ככותרת — אותו היגיון כמו טקסט מודגש מול `<h2>`.

? בשורה יש תא עם `colspan="2"`. כמה תאים יהיו באותה שורה בקוד?
- אותו מספר כמו בשאר השורות
+ תא אחד פחות — התא הנבלע נמחק מהקוד
- תא אחד יותר
- זה לא משנה, הדפדפן מסדר לבד
= זו הטעות הנפוצה ביותר בטבלאות: משאירים את התא הנבלע והטבלה מתעוותת.

? איפה צריך להיכתב `<caption>`?
- מעל ה-`<table>`, מחוצה לו
+ כאלמנט הראשון בתוך `<table>`, לפני כל שורה
- בתוך ה-`<thead>`
- בסוף הטבלה, אחרי `<tfoot>`
= הוא עדיף על `<h3>` מעל הטבלה, כי הוא חלק מהטבלה וקורא מסך מקריא אותו כשמגיעים אליה.
```
