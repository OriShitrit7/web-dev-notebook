# Flexbox

<p class="lead">
Flexbox הוא המנוע שפותר את רוב בעיות הפריסה היומיומיות: סרגל ניווט, שורת כפתורים,
כרטיס עם תוכן למעלה וכפתור למטה, ומרכוז מושלם — אנכית ואופקית — בשתי שורות.
הרעיון המרכזי הוא <strong>ציר אחד</strong>: מסדרים פריטים בשורה או בעמודה,
ומחלקים ביניהם את המקום הפנוי.
</p>

## שני תפקידים

<div class="box theory">
  <div class="box-head"><span class="icon">👪</span>מיכל ופריטים</div>
  <div class="box-body">
    <p>
      ברגע שכותבים <code>display: flex</code> על אלמנט, נוצרת חלוקה:
    </p>
    <ul>
      <li>האלמנט עצמו הופך ל<strong>מיכל flex</strong>.</li>
      <li><strong>הילדים הישירים שלו</strong> הופכים ל<strong>פריטי flex</strong>.</li>
    </ul>
    <p>
      זו ההבחנה הכי חשובה בפרק: חלק מהמאפיינים נכתבים על המיכל,
      וחלק על הפריטים. נכדים <strong>לא</strong> מושפעים.
    </p>
  </div>
</div>

<div class="keypoint">
<strong>Flexbox משנה את ההתנהגות של הילדים, לא של עצמו.</strong>
המיכל נשאר אלמנט block רגיל בזרימת המסמך. מה שהשתנה הוא
<strong>איך הוא מסדר את מה שבתוכו</strong>.
</div>

```demo
<style>
  .row { display: flex; background: #eef2ff; padding: 8px; gap: 8px;
         font-family: system-ui; }
  .row div { background: #4f46e5; color: white; padding: 8px; }
</style>
<div class="row">
  <div>one</div>
  <div>two</div>
  <div>three</div>
</div>
```

## שני הצירים

<div class="box theory">
  <div class="box-head"><span class="icon">➕</span>ראשי ומשני</div>
  <div class="box-body">
    <p>
      כל מה שקורה ב־Flexbox מוגדר ביחס לשני צירים:
    </p>
    <ul>
      <li><strong>הציר הראשי</strong> — הכיוון שבו מסודרים הפריטים.</li>
      <li><strong>הציר המשני</strong> — הציר הניצב לו.</li>
    </ul>
    <p>
      <code>flex-direction</code> קובע מי מהם מי. בברירת המחדל,
      <code>row</code>, הציר הראשי הוא <strong>אופקי</strong>.
    </p>
    <p class="note-line">
      זה הבלבול הנפוץ ביותר בפרק: <code>justify-content</code> תמיד עובד על
      <strong>הציר הראשי</strong>, ו־<code>align-items</code> על
      <strong>המשני</strong>. כשמשנים ל־<code>column</code>, שני אלה
      מחליפים כיוון בפועל.
    </p>
  </div>
</div>

| ערך | הציר הראשי |
| --- | --- |
| `row` | ברירת מחדל. אופקי, לפי כיוון הכתיבה |
| `row-reverse` | אופקי, בסדר הפוך |
| `column` | אנכי — מלמעלה למטה |
| `column-reverse` | אנכי, מלמטה למעלה |

<div class="box example">
  <div class="box-head"><span class="icon">↔️</span>row מסתגל ל־RTL</div>
  <div class="box-body">
    <p>
      <code>row</code> אינו ״משמאל לימין״ אלא <strong>לפי כיוון הכתיבה</strong>.
      במסמך <code>dir="rtl"</code> הפריט הראשון יופיע <strong>מימין</strong>.
      זו אותה לוגיקה של <code>start</code> ו־<code>end</code> מפרק Typography,
      והיא עובדת לטובתך באתר בעברית.
    </p>
  </div>
</div>

```demo
<style>
  .strip { display: flex; background: #eef2ff; padding: 6px;
           gap: 6px; margin-bottom: 8px; font-family: system-ui; }
  .strip div { background: #4f46e5; color: white; padding: 6px; }
  .col { flex-direction: column; }
</style>
<div class="strip"><div>1</div><div>2</div><div>3</div></div>
<div class="strip col"><div>1</div><div>2</div><div>3</div></div>
```

## justify-content

<div class="box">
  <div class="box-body">
    <p>
      מחלק את <strong>המקום הפנוי בציר הראשי</strong>.
      זה המאפיין שפותר ״כפתור אחד משמאל ואחד מימין״.
    </p>
  </div>
</div>

| ערך | התוצאה |
| --- | --- |
| `flex-start` | הכול בתחילת הציר (ברירת מחדל) |
| `center` | הכול במרכז |
| `flex-end` | הכול בסוף הציר |
| `space-between` | **הראשון בהתחלה, האחרון בסוף**, השאר מפוזרים |
| `space-around` | מרווח שווה סביב כל פריט |
| `space-evenly` | כל המרווחים זהים, כולל בקצוות |

```demo
<style>
  .bar { display: flex; background: #eef2ff; padding: 6px;
         margin-bottom: 6px; font-family: system-ui; font-size: 13px; }
  .bar div { background: #4f46e5; color: white; padding: 6px; }
  .between { justify-content: space-between; }
  .center { justify-content: center; }
  .evenly { justify-content: space-evenly; }
</style>
<div class="bar between"><div>start</div><div>end</div></div>
<div class="bar center"><div>a</div><div>b</div></div>
<div class="bar evenly"><div>a</div><div>b</div></div>
```

## align-items

<div class="box">
  <div class="box-body">
    <p>
      מיישר את הפריטים ב<strong>ציר המשני</strong>.
      ברירת המחדל היא <code>stretch</code>, ולכן פריטים בשורה
      מקבלים אוטומטית את אותו גובה — גם אם התוכן שלהם שונה.
    </p>
    <p class="note-line">
      <code>stretch</code> הוא הסיבה שכרטיסים בשורה יוצאים שווים בגובה
      בלי שביקשת. אם נתת לפריט <code>height</code> משלו, הוא גובר.
    </p>
  </div>
</div>

```demo
<style>
  .bar { display: flex; background: #eef2ff; height: 80px;
         padding: 6px; gap: 6px; margin-bottom: 8px;
         font-family: system-ui; font-size: 13px; }
  .bar div { background: #4f46e5; color: white; padding: 6px; }
  .c { align-items: center; }
</style>
<div class="bar"><div>stretch</div><div>is the default</div></div>
<div class="bar c"><div>center</div><div>on the cross axis</div></div>
```

<div class="box example">
  <div class="box-head"><span class="icon">🎯</span>מרכוז מושלם בשתי שורות</div>
  <div class="box-body">
    <p>
      זו התשובה לשאלה שנשארה פתוחה בפרק <strong>Box Model</strong>:
      <code>margin: auto</code> לא ממרכז אנכית — אבל Flexbox כן.
    </p>
    <p><code>display: flex; justify-content: center; align-items: center;</code></p>
    <p class="note-line">
      אופקית ואנכית יחד, בלי קשר לגודל התוכן. זה הפתרון שהחליף
      עשור שלם של טריקים.
    </p>
  </div>
</div>

```demo
<style>
  .stage { display: flex; justify-content: center; align-items: center;
           height: 110px; background: #eef2ff; font-family: system-ui; }
  .stage div { background: #4f46e5; color: white; padding: 12px; }
</style>
<div class="stage"><div>perfectly centred</div></div>
```

## gap

<div class="box example">
  <div class="box-head"><span class="icon">📐</span>המרווח הנכון בין פריטים</div>
  <div class="box-body">
    <p>
      <code>gap</code> מגדיר מרווח <strong>בין</strong> הפריטים —
      ורק ביניהם, בלי להוסיף מרווח בקצוות.
    </p>
    <p class="note-line">
      זה עדיף בהרבה על <code>margin</code> על כל פריט, ששם מרווח גם בקצה
      ומחייב לבטל אותו עם <code>:last-child</code>. <code>gap</code> פשוט עושה
      את הדבר הנכון.
    </p>
  </div>
</div>

## flex-wrap

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>ברירת המחדל דוחסת</div>
  <div class="box-body">
    <p>
      כברירת מחדל <code>flex-wrap: nowrap</code> — הפריטים
      <strong>יידחסו</strong> כדי להיכנס לשורה אחת, ולא ירדו לשורה חדשה.
      לכן פריסה בנייד נראית לפעמים כמו רצועות צרות ומעוכות.
    </p>
    <p>
      <code>flex-wrap: wrap</code> מאפשר להם לעבור שורה כשנגמר המקום —
      וזו שורה אחת שהופכת פריסה לרספונסיבית.
    </p>
  </div>
</div>

```demo
<style>
  .bar { display: flex; flex-wrap: wrap; gap: 6px;
         background: #eef2ff; padding: 6px; font-family: system-ui; }
  .bar div { background: #4f46e5; color: white; padding: 8px;
             width: 110px; }
</style>
<div class="bar">
  <div>one</div><div>two</div><div>three</div><div>four</div>
</div>
```

## מאפיינים על הפריט

<div class="box theory">
  <div class="box-head"><span class="icon">🧱</span>flex-grow, flex-shrink, flex-basis</div>
  <div class="box-body">
    <ul>
      <li><strong><code>flex-grow</code></strong> — כמה מהמקום ה<strong>פנוי</strong> הפריט לוקח. ברירת מחדל <code>0</code>.</li>
      <li><strong><code>flex-shrink</code></strong> — כמה הוא מוכן להתכווץ בצפיפות. ברירת מחדל <code>1</code>.</li>
      <li><strong><code>flex-basis</code></strong> — הגודל ההתחלתי שלו לפני החלוקה.</li>
    </ul>
    <p>
      בפועל כותבים את הקיצור <code>flex</code>, ושלושת הערכים האלה
      נדחסים אליו לפי הסדר.
    </p>
  </div>
</div>

| קיצור | המשמעות |
| --- | --- |
| `flex: 1` | קח חלק שווה מהמקום הפנוי |
| `flex: 2` | קח פי שניים מפריט עם `flex: 1` |
| `flex: 0 0 auto` | אל תגדל ואל תתכווץ — שמור על הגודל |
| `flex: none` | זהה ל־`0 0 auto` |

```demo
<style>
  .bar { display: flex; gap: 6px; background: #eef2ff;
         padding: 6px; font-family: system-ui; font-size: 13px; }
  .bar div { background: #4f46e5; color: white; padding: 8px 0;
             text-align: center; min-width: 0; overflow: hidden; }
  .one { flex: 1; }
  .two { flex: 2; }
</style>
<div class="bar">
  <div class="one">1fr</div>
  <div class="two">2fr</div>
  <div>fixed</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      הפריט השלישי לא גדל בכלל, כי ברירת המחדל היא <code>flex-grow: 0</code>.
      שני הראשונים חילקו ביניהם את כל השאר ביחס של 1 ל־2.
    </p>
    <p class="note-line">
      ב־CSS של הדמו יש גם <code>min-width: 0</code>, כהרגל טוב: לפריטי flex יש
      <code>min-width: auto</code>, שמונע מהם לרדת מתחת לרוחב התוכן שלהם.
      עם תוויות קצרות כמו כאן זה לא מורגש, אבל ברגע שיש טקסט ארוך
      <strong>היחס שביקשת מתעוות</strong>. מיד נראה את זה שוב ברשימת הטעויות.
    </p>
  </div>
</div>

### margin: auto בתוך flex

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>הטריק שדוחף פריט לקצה</div>
  <div class="box-body">
    <p>
      בתוך מיכל flex, <code>margin</code> עם <code>auto</code>
      בולע את כל המקום הפנוי בכיוון הזה. <code>margin-inline-start: auto</code>
      על פריט אחד <strong>ידחוף אותו לקצה</strong> ויישאיר את השאר במקומם.
    </p>
    <p class="note-line">
      זה הפתרון הנקי לסרגל ניווט שבו רוב הקישורים בצד אחד
      וכפתור ההתחברות לבדו בצד השני.
    </p>
  </div>
</div>

### order

<div class="box warn">
  <div class="box-head"><span class="icon">♿</span>סדר ויזואלי בלבד</div>
  <div class="box-body">
    <p>
      <code>order</code> משנה את סדר ההצגה של הפריטים בלי לגעת ב־HTML.
      אבל <strong>קוראי מסך וניווט מקלדת ממשיכים לפי סדר ה־HTML</strong>,
      ולכן שינוי אגרסיבי יוצר חוויה מבלבלת למי שמנווט במקלדת.
    </p>
    <p class="note-line">
      אם הסדר ההגיוני שונה — עדיף לשנות אותו ב־HTML עצמו.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>display: flex</code> על הילד במקום על ההורה</strong> — המאפיינים נכתבים על המיכל.</li>
      <li><strong>ציפייה שנכדים יושפעו</strong> — רק <strong>ילדים ישירים</strong> הופכים לפריטי flex.</li>
      <li><strong>בלבול בין הצירים</strong> — ב־<code>column</code>, <code>justify-content</code> עובד <strong>אנכית</strong>.</li>
      <li><strong>שכחת <code>flex-wrap: wrap</code></strong> — הפריטים נדחסים במקום לרדת שורה.</li>
      <li><strong><code>margin</code> במקום <code>gap</code></strong> — מוסיף מרווח גם בקצוות.</li>
      <li><strong>שימוש ב־<code>order</code> לשינוי סדר משמעותי</strong> — שובר ניווט מקלדת.</li>
      <li><strong>ציפייה ש־<code>flex: 1</code> ייתן רוחב שווה</strong> — הוא מחלק את <strong>המקום הפנוי</strong>, לא את הרוחב הכולל. לרוחב זהה צריך גם <code>flex-basis: 0</code>, וזה בדיוק מה ש־<code>flex: 1</code> עושה בפועל.</li>
      <li><strong>פריט שמסרב להתכווץ</strong> — לפריטי flex יש <code>min-width: auto</code>, שמונע מהם לרדת מתחת לרוחב התוכן. טקסט ארוך או <code>&lt;pre&gt;</code> יגלשו מהמיכל, והיחסים שביקשת יתעוותו. הפתרון הוא <code>min-width: 0</code> על הפריט.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>display: flex</code> על ההורה הופך את <strong>ילדיו הישירים</strong> לפריטים.</li>
      <li><code>flex-direction</code> קובע את <strong>הציר הראשי</strong>; <code>row</code> מסתגל ל־RTL.</li>
      <li><strong><code>justify-content</code></strong> — הציר הראשי. <strong><code>align-items</code></strong> — הציר המשני.</li>
      <li>מרכוז מושלם: <code>justify-content: center</code> + <code>align-items: center</code>.</li>
      <li>ברירת המחדל של <code>align-items</code> היא <code>stretch</code> — ומכאן הגבהים השווים.</li>
      <li><code>gap</code> נותן מרווח <strong>רק בין</strong> פריטים, בלי הקצוות.</li>
      <li><code>flex-wrap: wrap</code> מאפשר ירידת שורה. בלעדיו הפריטים נדחסים.</li>
      <li><code>flex: 1</code> מחלק את <strong>המקום הפנוי</strong> בין הפריטים.</li>
      <li><code>margin-inline-start: auto</code> דוחף פריט בודד לקצה.</li>
      <li>לפריט יש <code>min-width: auto</code> כברירת מחדל — לכן לפעמים צריך <code>min-width: 0</code>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? על איזה אלמנט כותבים `display: flex`?
- על כל אחד מהפריטים שרוצים לסדר
+ על ההורה — והילדים הישירים שלו הופכים לפריטי flex
- על `<body>` תמיד
- על ההורה ועל הילדים יחד
= נכדים אינם מושפעים. רק הילדים הישירים של המיכל הופכים לפריטים.

? במיכל עם `flex-direction: column`, מה עושה `justify-content: center`?
- ממרכז אופקית
+ ממרכז אנכית, כי ב-column הציר הראשי הוא האנכי
- לא עושה כלום
- הופך את סדר הפריטים
= `justify-content` תמיד פועל על הציר הראשי, ו-`flex-direction` הוא שקובע מי הציר הראשי.

? למה כרטיסים בשורה יוצאים בגובה זהה בלי שביקשת?
- כי flex מחשב ממוצע גבהים
+ כי ברירת המחדל של `align-items` היא `stretch`, והפריטים נמתחים לגובה המיכל
- כי `gap` משווה אותם
- כי `flex: 1` משווה גבהים
= אם תיתני לפריט `height` משלו, הוא יגבר על ה-stretch.

? הפריטים נדחסים ומעוכים במסך צר במקום לרדת שורה. מה חסר?
- `justify-content: space-between`
+ `flex-wrap: wrap` — ברירת המחדל היא `nowrap`, שדוחסת הכול לשורה אחת
- `align-items: center`
- `overflow: auto`
= זו שורה אחת שהופכת פריסת flex לרספונסיבית.

? מה הדרך הנקייה לדחוף כפתור בודד לקצה סרגל ניווט, בלי להזיז את השאר?
- `position: absolute` על הכפתור
+ `margin-inline-start: auto` על אותו פריט — בתוך flex הוא בולע את כל המקום הפנוי
- `float: left`
- `order: 99`
= `order` רק ישנה את מיקומו ברצף, ולא ידחוף אותו לקצה.
```
