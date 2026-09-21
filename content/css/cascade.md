# Cascade, Specificity & Inheritance

<p class="lead">
זה הפרק שפותר את התסכול הראשון של כל מי שלומדת CSS:
<strong>״כתבתי כלל והוא פשוט לא עובד״.</strong>
ברוב המקרים הוא כן עובד — פשוט כלל אחר ניצח אותו.
כאן נבין בדיוק איך הדפדפן מכריע, ואיך לראות את זה בעיניים.
</p>

## הבעיה

<div class="box">
  <div class="box-body">
    <p>שני כללים מתייחסים לאותה פסקה ואומרים דברים סותרים:</p>
  </div>
</div>

```css
p { color: blue; }
p { color: red; }
```

<div class="box theory">
  <div class="box-head"><span class="icon">⚖️</span>ה־Cascade</div>
  <div class="box-body">
    <p>
      זו המילה הראשונה בשם CSS. ה־<strong>Cascade</strong> הוא האלגוריתם
      שמכריע בין הצהרות סותרות, והוא עובד לפי סדר קבוע:
    </p>
    <ol>
      <li><strong>מקור</strong> — כלל שלנו גובר על ברירת המחדל של הדפדפן.</li>
      <li><strong>חשיבות</strong> — <code>!important</code> גובר על הצהרה רגילה.</li>
      <li><strong>ספציפיות</strong> — הבורר המדויק יותר מנצח.</li>
      <li><strong>סדר</strong> — בתיקו, <strong>האחרון שנכתב מנצח</strong>.</li>
    </ol>
    <p class="note-line">
      בדוגמה למעלה שני הבוררים זהים, ולכן ההכרעה נופלת לשלב האחרון:
      הצבע יהיה אדום.
    </p>
  </div>
</div>

## ירושה

<div class="box theory">
  <div class="box-head"><span class="icon">🧬</span>מה עובר מאב לילדים</div>
  <div class="box-body">
    <p>
      חלק מהמאפיינים <strong>עוברים בירושה</strong> מ־Parent ל־Children אוטומטית,
      וחלק לא.
    </p>
    <ul>
      <li><strong>עוברים בירושה</strong> — מאפייני טקסט: <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>line-height</code>, <code>text-align</code>.</li>
      <li><strong>לא עוברים</strong> — מאפייני קופסה: <code>border</code>, <code>margin</code>, <code>padding</code>, <code>background</code>, <code>width</code>.</li>
    </ul>
    <p class="note-line">
      ההיגיון פשוט: אם המסגרת הייתה עוברת בירושה, כל אלמנט בתוך קופסה
      היה מקבל מסגרת משלו. צבע טקסט, לעומת זאת, הגיוני שיימשך פנימה.
    </p>
  </div>
</div>

```demo
<style>
  .parent {
    color: #4f46e5;
    border: 2px solid #4f46e5;
    padding: 12px;
  }
</style>
<div class="parent">
  Parent text
  <p>Child — inherits the colour, not the border.</p>
</div>
```

<div class="keypoint">
הפסקה קיבלה את הצבע הסגול בלי שכתבנו לה כלל, אבל <strong>לא</strong> קיבלה מסגרת משלה.
זו ירושה בפעולה.
</div>

<div class="box">
  <div class="box-body">
    <p>אפשר גם לבקש ירושה במפורש, או לבטל אותה:</p>
    <ul>
      <li><code>inherit</code> — קח את הערך מה־Parent, גם אם המאפיין לא עובר בירושה בדרך כלל.</li>
      <li><code>initial</code> — חזור לערך ברירת המחדל של המאפיין.</li>
    </ul>
    <p class="note-line">
      שימוש נפוץ: <code>button { color: inherit; }</code> — כדי שכפתור יירש את צבע
      הטקסט של הדף במקום לקבל את הצבע השחור שהדפדפן נותן לו.
    </p>
  </div>
</div>

## ספציפיות

<div class="box theory">
  <div class="box-head"><span class="icon">🎯</span>מי מדויק יותר</div>
  <div class="box-body">
    <p>
      כששני כללים חלים על אותו אלמנט ואומרים דברים סותרים,
      מנצח <strong>הבורר הספציפי יותר</strong>.
    </p>
    <p>
      הספציפיות נמדדת בשלוש ספרות, <code>(a, b, c)</code>,
      ומשווים אותן משמאל לימין:
    </p>
  </div>
</div>

| מה בבורר | תורם ל | דוגמה |
| --- | --- | --- |
| `id` | **a** | `#header` → (1,0,0) |
| `class`, attribute, פסאודו־מחלקה | **b** | `.note`, `[type="text"]`, `:hover` → (0,1,0) |
| תגית, פסאודו־אלמנט | **c** | `p`, `::before` → (0,0,1) |
| `*` | כלום | (0,0,0) |

<div class="box">
  <div class="box-body">
    <p>סופרים כמה מכל סוג יש בבורר. כמה דוגמאות:</p>
  </div>
</div>

| בורר | ספציפיות |
| --- | --- |
| `p` | (0,0,1) |
| `.note` | (0,1,0) |
| `p.note` | (0,1,1) |
| `#main p` | (1,0,1) |
| `nav ul li a` | (0,0,4) |
| `.menu a:hover` | (0,2,1) |

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>ההשוואה אינה חיבור</div>
  <div class="box-body">
    <p>
      משווים <strong>ספרה־ספרה משמאל</strong>, ולא סוכמים לערך אחד.
    </p>
    <p>
      לכן <code>#main</code> — שהוא (1,0,0) — מנצח את
      <code>nav ul li a.link.active</code> שהוא (0,2,4),
      למרות שנראה שיש בו הרבה יותר.
    </p>
    <p class="note-line">
      <strong>id אחד גובר על כל כמות של classes.</strong> זו הסיבה
      שהמלצנו בפרק הקודם לא לעצב עם id.
    </p>
  </div>
</div>

```demo
<style>
  p { color: #6b6b70; }
  .note { color: #047857; }
  #special { color: #be123c; }
</style>
<p>element — (0,0,1)</p>
<p class="note">class beats element — (0,1,0)</p>
<p class="note" id="special">id beats class — (1,0,0)</p>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      שלוש הפסקאות תואמות לכלל הראשון, אבל בשתיים האחרונות כלל ספציפי יותר דרס אותו.
      סדר הכתיבה בקובץ לא שינה כאן כלום — הספציפיות הכריעה קודם.
    </p>
  </div>
</div>

## סדר המקור

<div class="box">
  <div class="box-body">
    <p>
      רק כששתי הצהרות <strong>שוות בספציפיות</strong>, מכריע סדר הכתיבה:
      <strong>האחרונה מנצחת</strong>.
    </p>
  </div>
</div>

```demo
<style>
  .box { color: #047857; }
  .box { color: #be123c; }
</style>
<p class="box">Same specificity — the later rule wins</p>
```

<div class="keypoint">
זה מסביר למה סדר הקבצים משנה: אם תטעני קובץ CSS משלך
<strong>לפני</strong> ספרייה חיצונית, הספרייה תדרוס אותך.
</div>

## inline style

<div class="box">
  <div class="box-body">
    <p>
      <code>style="..."</code> ישירות על האלמנט חזק מכל בורר —
      אפילו מ־id. לכן כמעט בלתי אפשרי לדרוס אותו מקובץ CSS.
    </p>
    <p class="note-line">
      זו הסיבה המרכזית להימנע ממנו, מעבר לערבוב עיצוב בתוך מבנה.
    </p>
  </div>
</div>

## important!

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>הפטיש הגדול</div>
  <div class="box-body">
    <p>
      הוספת <code>!important</code> להצהרה מוציאה אותה מכל חישוב הספציפיות
      ונותנת לה עדיפות עליונה.
    </p>
    <p><code>color: red !important;</code></p>
    <p>
      זה עובד — ובדיוק בגלל זה הוא מסוכן. אחרי שמשתמשים בו פעם אחת,
      הדרך היחידה לדרוס אותו היא <code>!important</code> נוסף,
      ומשם הקובץ מידרדר למלחמת חשיבות.
    </p>
    <p class="note-line">
      אם הגעת ל־<code>!important</code>, כמעט תמיד הפתרון הנכון הוא
      <strong>להוריד ספציפיות במקום אחר</strong> — למשל להחליף בורר עם id בבורר class.
    </p>
  </div>
</div>

## סדר ההכרעה המלא

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>איך הדפדפן בוחר, לפי הסדר</div>
  <div class="box-body">
    <ol>
      <li>האם ההצהרה <strong>חלה</strong> על האלמנט בכלל?</li>
      <li><strong>חשיבות</strong> — <code>!important</code> גובר על רגיל.</li>
      <li><strong>inline style</strong> גובר על בוררים.</li>
      <li><strong>ספציפיות</strong> — (a,b,c), משמאל לימין.</li>
      <li><strong>סדר</strong> — בתיקו מלא, האחרון שנכתב.</li>
    </ol>
    <p class="note-line">
      ואם שום כלל לא חל — נכנסת <strong>ירושה</strong> מה־Parent,
      ואם גם היא לא — <strong>ברירת המחדל של הדפדפן</strong>.
    </p>
  </div>
</div>

## לראות את זה בעיניים

<div class="box example">
  <div class="box-head"><span class="icon">🔧</span>DevTools</div>
  <div class="box-body">
    <p>
      אין צורך לנחש מי ניצח — הדפדפן מראה את זה. לחיצה ימנית על אלמנט
      ואז <strong>Inspect</strong> תפתח את כלי הפיתוח.
    </p>
    <p>בלשונית <strong>Styles</strong> רואים את כל הכללים שחלים על האלמנט:</p>
    <ul>
      <li>הם מסודרים <strong>מהמנצח למטה</strong>.</li>
      <li>הצהרה שנדרסה מופיעה עם <strong>קו חוצה</strong>.</li>
      <li>לצד כל כלל כתוב <strong>מאיזה קובץ ומאיזו שורה</strong> הוא הגיע.</li>
      <li>אפשר לשנות ערכים בזמן אמת ולראות מיד את התוצאה.</li>
    </ul>
    <p class="note-line">
      הקו החוצה הוא הכלי הכי שימושי כאן: הוא אומר ״הכלל שלך נמצא,
      הוא פשוט הפסיד״ — וזה מכוון אותך לספציפיות במקום לחפש שגיאת כתיב.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>למה הכלל לא עובד</div>
  <div class="box-body">
    <ul>
      <li><strong>כלל ספציפי יותר דורס</strong> — הסיבה מספר אחת. נראה מיד ב־DevTools.</li>
      <li><strong>הכלל נכתב לפני כלל זהה אחר</strong> — בתיקו האחרון מנצח.</li>
      <li><strong>ציפייה שמסגרת או מרווח יעברו בירושה</strong> — הם לא.</li>
      <li><strong><code>!important</code> כפתרון ראשון</strong> — מסתיר את הבעיה ומחמיר אותה.</li>
      <li><strong>עיצוב עם id</strong> — יוצר ספציפיות שקשה לדרוס בהמשך.</li>
      <li><strong>שגיאת כתיב בבורר</strong> — הכלל פשוט לא יופיע ב־DevTools כלל. אם הוא <em>לא מופיע</em>, זו לא ספציפיות אלא טעות בבורר.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>Cascade</strong> — האלגוריתם שמכריע בין הצהרות סותרות.</li>
      <li><strong>ירושה</strong> — מאפייני טקסט עוברים מ־Parent לילדים; מאפייני קופסה לא.</li>
      <li><code>inherit</code> מבקש ירושה במפורש, <code>initial</code> מחזיר לברירת מחדל.</li>
      <li><strong>ספציפיות</strong> נמדדת כ־<code>(a,b,c)</code>: id, class, תגית.</li>
      <li>משווים <strong>ספרה־ספרה</strong> ולא סוכמים — <strong>id אחד גובר על כל כמות של classes</strong>.</li>
      <li>בתיקו מלא — <strong>האחרון שנכתב מנצח</strong>.</li>
      <li><strong>inline style</strong> חזק מכל בורר.</li>
      <li><strong><code>!important</code></strong> גובר על הכול, ולכן כמעט תמיד סימן לבעיה.</li>
      <li>ב־<strong>DevTools</strong> רואים מי ניצח: הצהרה שנדרסה מופיעה עם קו חוצה.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? על פסקה חלים `p { color: blue; }` ואחריו `p { color: red; }`. מה הצבע?
- כחול, כי הוא נכתב ראשון
+ אדום, כי בספציפיות שווה מנצח הכלל האחרון
- שחור, כי הכללים מתבטלים
- תלוי בדפדפן
= רק כששתי ההצהרות שוות בספציפיות מכריע סדר הכתיבה.

? מי מנצח: `#main` שהוא (1,0,0) או `nav ul li a.link.active` שהוא (0,2,4)?
- הבורר הארוך, כי יש בו יותר חלקים
+ `#main`, כי משווים ספרה־ספרה משמאל ו-id גובר על הכול
- הם שווים
- זה תלוי בסדר הכתיבה
= לא סוכמים לערך אחד. id אחד גובר על כל כמות של classes ותגיות.

? נתת ל-`<div>` צבע טקסט ומסגרת. מה יקבלו הפסקאות שבתוכו?
- גם צבע וגם מסגרת
- רק מסגרת
+ רק את הצבע — מאפייני טקסט עוברים בירושה, מאפייני קופסה לא
- כלום, צריך כלל מפורש
= אילו מסגרת הייתה עוברת בירושה, כל אלמנט פנימי היה מקבל מסגרת משלו.

? כתבת כלל, והוא מופיע ב-DevTools עם קו חוצה. מה זה אומר?
- יש שגיאת כתיב בבורר
+ הכלל נמצא וחל, אבל כלל אחר ניצח אותו
- המאפיין לא נתמך בדפדפן
- הקובץ לא נטען
= זה מכוון אותך לספציפיות. אם הכלל בכלל **לא מופיע** — אז יש טעות בבורר.

? מתי נכון להשתמש ב-`!important`?
- בכל פעם שכלל לא עובד
- בתחילת כל קובץ CSS
+ כמעט אף פעם — בדרך כלל עדיף להוריד ספציפיות במקום אחר
- רק על מאפייני צבע
= אחרי `!important` אחד, הדרך היחידה לדרוס אותו היא `!important` נוסף. משם זה מידרדר.
```
