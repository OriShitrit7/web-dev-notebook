# Grid

<p class="lead">
אם Flexbox מסדר פריטים על <strong>ציר אחד</strong>, Grid מסדר אותם על
<strong>שניים בו־זמנית</strong> — שורות ועמודות יחד. זה הכלי לפריסות של דף שלם,
לגלריות, ולכל מקרה שבו רוצים שהתוכן יתיישר גם לרוחב וגם לגובה
בלי לבנות מבנה HTML מלאכותי סביבו.
</p>

## מיכל ופריטים, שוב

<div class="box theory">
  <div class="box-head"><span class="icon">🧮</span>אותה חלוקת תפקידים</div>
  <div class="box-body">
    <p>
      <code>display: grid</code> על ההורה הופך את <strong>ילדיו הישירים</strong>
      לפריטי grid — בדיוק כמו ב־Flexbox. ההבדל הוא שעכשיו מגדירים
      <strong>רשת</strong> מראש, והפריטים נכנסים לתאים שלה.
    </p>
  </div>
</div>

## grid-template-columns

<div class="box">
  <div class="box-body">
    <p>
      זה המאפיין המרכזי: הוא מגדיר <strong>כמה עמודות יש ומה הרוחב של כל אחת</strong>.
      מספר הערכים הוא מספר העמודות.
    </p>
    <p><code>grid-template-columns: 200px 200px 200px;</code> — שלוש עמודות קבועות.</p>
  </div>
</div>

```demo
<style>
  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 8px; font-family: system-ui; }
  .grid div { background: #4f46e5; color: white; padding: 10px; }
</style>
<div class="grid">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>
```

<div class="keypoint">
הגדרנו <strong>עמודות בלבד</strong>, והשורות נוצרו לבד.
זו התנהגות ברירת המחדל: Grid ממלא עמודה אחר עמודה, ופותח שורה חדשה
בכל פעם שהנוכחית מתמלאת.
</div>

## היחידה fr

<div class="box theory">
  <div class="box-head"><span class="icon">🍰</span>חלק מהמקום הפנוי</div>
  <div class="box-body">
    <p>
      <code>fr</code> (קיצור של <em>fraction</em>) היא יחידה שקיימת
      <strong>רק ב־Grid</strong>, והיא מייצגת <strong>חלק מהמקום הפנוי</strong>.
    </p>
    <ul>
      <li><code>1fr 1fr 1fr</code> — שלוש עמודות שוות.</li>
      <li><code>2fr 1fr</code> — הראשונה כפולה מהשנייה.</li>
      <li><code>200px 1fr</code> — עמודה קבועה, והשנייה לוקחת את כל השאר.</li>
    </ul>
    <p class="note-line">
      היתרון על אחוזים: <code>fr</code> מחשב את המקום <strong>אחרי</strong>
      שהורידו את ה־<code>gap</code>. עם <code>33.33%</code> שלוש פעמים
      ועוד רווחים — הפריסה הייתה גולשת.
    </p>
  </div>
</div>

```demo
<style>
  .grid { display: grid; gap: 8px; margin-bottom: 8px;
          font-family: system-ui; font-size: 13px; }
  .a { grid-template-columns: 2fr 1fr; }
  .b { grid-template-columns: 200px 1fr; }
  .grid div { background: #4f46e5; color: white; padding: 8px; }
</style>
<div class="grid a"><div>2fr</div><div>1fr</div></div>
<div class="grid b"><div>200px — fixed</div><div>1fr — the rest</div></div>
```

## repeat ו־minmax

<div class="box">
  <div class="box-body">
    <p>
      <code>repeat()</code> מקצר חזרות: <code>repeat(3, 1fr)</code>
      זהה ל־<code>1fr 1fr 1fr</code>.
    </p>
    <p>
      <code>minmax()</code> נותן לעמודה <strong>גבול תחתון ועליון</strong>:
      <code>minmax(180px, 1fr)</code> פירושו ״לפחות 180 פיקסלים,
      ואם יש מקום — קחי חלק שווה״.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">✨</span>השורה שמייצרת גלריה רספונסיבית</div>
  <div class="box-body">
    <p><code>grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));</code></p>
    <p>
      זו אחת השורות השימושיות ביותר ב־CSS כולו. היא אומרת:
      ״תכניסי כמה עמודות שנכנסות, כל אחת לפחות 180 פיקסלים,
      וחלקי ביניהן את השאר״.
    </p>
    <p class="note-line">
      התוצאה היא גלריה שמתאימה את עצמה לכל רוחב מסך —
      <strong>בלי media query אחת</strong>. נגיע אליהן בפרק Responsive Design,
      וזו דוגמה למה שלפעמים אפשר לפתור בלעדיהן.
    </p>
  </div>
</div>

```demo
<style>
  .grid { display: grid; gap: 8px; font-family: system-ui;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
  .grid div { background: #4f46e5; color: white; padding: 12px; }
</style>
<div class="grid">
  <div>one</div><div>two</div><div>three</div>
  <div>four</div><div>five</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אם תשני את רוחב החלון, מספר העמודות ישתנה לבד.
      <code>auto-fit</code> מכווץ עמודות ריקות; <code>auto-fill</code>
      משאיר אותן כתאים ריקים. ברוב המקרים <code>auto-fit</code> הוא מה שרוצים.
    </p>
  </div>
</div>

## שורות

<div class="box">
  <div class="box-body">
    <p>
      <code>grid-template-rows</code> עובד בדיוק כמו העמודות.
      פחות משתמשים בו, כי בדרך כלל נוח שהשורות ייקבעו לפי התוכן.
    </p>
    <p class="note-line">
      לשורות שנוצרות אוטומטית יש מאפיין משלהן:
      <code>grid-auto-rows</code> — למשל <code>grid-auto-rows: 100px</code>
      ייתן לכל שורה חדשה גובה אחיד.
    </p>
  </div>
</div>

## gap

<div class="box">
  <div class="box-body">
    <p>
      <code>gap</code> עובד כאן בדיוק כמו ב־Flexbox, ואפשר להפריד בין הצירים:
      <code>row-gap</code> ו־<code>column-gap</code>, או הקיצור
      <code>gap: 12px 24px</code> — קודם השורות, אחר כך העמודות.
    </p>
  </div>
</div>

## פריסת פריט על כמה תאים

<div class="box theory">
  <div class="box-head"><span class="icon">📏</span>span</div>
  <div class="box-body">
    <p>
      כאן Grid עושה משהו ש־Flexbox לא יודע: פריט בודד יכול לתפוס
      <strong>כמה עמודות או שורות</strong>.
    </p>
    <ul>
      <li><code>grid-column: span 2</code> — הפריט יתפוס שתי עמודות.</li>
      <li><code>grid-row: span 2</code> — שתי שורות.</li>
      <li><code>grid-column: 1 / 3</code> — מקו רשת 1 עד קו רשת 3.</li>
    </ul>
    <p class="note-line">
      שימי לב שהמספרים הם <strong>קווי הרשת</strong>, לא העמודות.
      ברשת של שלוש עמודות יש <strong>ארבעה</strong> קווים.
    </p>
  </div>
</div>

```demo
<style>
  .grid { display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 8px; font-family: system-ui; font-size: 13px; }
  .grid div { background: #4f46e5; color: white; padding: 10px; }
  .wide { grid-column: span 2; background: #be123c; }
  .tall { grid-row: span 2; background: #047857; }
</style>
<div class="grid">
  <div class="wide">span 2 columns</div>
  <div class="tall">span 2 rows</div>
  <div>c</div>
  <div>d</div>
  <div>e</div>
</div>
```

## יישור בתוך הרשת

<div class="box">
  <div class="box-body">
    <p>
      אותם שמות מ־Flexbox עובדים גם כאן, אבל המשמעות מעט שונה:
    </p>
    <ul>
      <li><strong><code>justify-items</code></strong> — יישור התוכן בתוך התא, <strong>אופקית</strong>.</li>
      <li><strong><code>align-items</code></strong> — יישור בתוך התא, <strong>אנכית</strong>.</li>
      <li><strong><code>justify-content</code></strong> / <strong><code>align-content</code></strong> — מיקום <strong>הרשת כולה</strong> בתוך המיכל, כשהיא קטנה ממנו.</li>
    </ul>
    <p class="note-line">
      וגם כאן, <code>place-items: center</code> הוא קיצור שממרכז בשני הצירים —
      דרך שנייה למרכוז המושלם שראינו בפרק Flexbox.
    </p>
  </div>
</div>

## אזורים בשם

<div class="box example">
  <div class="box-head"><span class="icon">🗺️</span>grid-template-areas</div>
  <div class="box-body">
    <p>
      אפשר לתת לאזורים <strong>שמות</strong>, ואז לצייר את הפריסה
      כמפה בתוך ה־CSS. זו הדרך הקריאה ביותר לפריסת דף שלם.
    </p>
  </div>
</div>

```demo
<style>
  .page { display: grid; gap: 6px; font-family: system-ui; font-size: 13px;
          grid-template-columns: 120px 1fr;
          grid-template-areas:
            "head head"
            "side main"
            "foot foot"; }
  .page > div { background: #4f46e5; color: white; padding: 10px; }
  .h { grid-area: head; }
  .s { grid-area: side; background: #be123c; }
  .m { grid-area: main; }
  .f { grid-area: foot; background: #047857; }
</style>
<div class="page">
  <div class="h">header</div>
  <div class="s">sidebar</div>
  <div class="m">main</div>
  <div class="f">footer</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      כל מחרוזת היא שורה, וכל מילה בה היא עמודה. שם שחוזר פעמיים
      פורש את האזור על פני שני תאים — ולכן ה־header וה־footer
      נמתחים על כל הרוחב. נקודה <code>.</code> מסמנת תא ריק בכוונה.
    </p>
  </div>
</div>

## Grid או Flexbox?

| המקרה | הכלי |
| --- | --- |
| שורת כפתורים או סרגל ניווט | Flexbox |
| מרכוז אלמנט בודד | שניהם |
| תוכן שצריך להתחלק לפי המקום הפנוי | Flexbox |
| גלריה או רשת כרטיסים | Grid |
| פריסת דף — header, sidebar, main | Grid |
| יישור בשני צירים בו־זמנית | Grid |

<div class="keypoint">
<strong>כלל אצבע:</strong> אם אכפת לך רק מכיוון אחד — Flexbox.
אם אכפת לך משורות <strong>וגם</strong> מעמודות — Grid.
ולגמרי לגיטימי לשלב: מיכל Grid שבתוך אחד התאים שלו יש מיכל Flex.
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>אחוזים במקום <code>fr</code></strong> — עם <code>gap</code> הפריסה גולשת, כי האחוזים לא מתחשבים בו.</li>
      <li><strong>ספירת עמודות במקום קווי רשת</strong> — ל־3 עמודות יש 4 קווים, ולכן <code>1 / 4</code> הוא כל הרוחב.</li>
      <li><strong>ציפייה שנכדים יושפעו</strong> — כמו ב־Flexbox, רק ילדים ישירים הם פריטים.</li>
      <li><strong>שימוש ב־Grid לשורת כפתורים</strong> — עובד, אבל Flexbox פשוט יותר שם.</li>
      <li><strong>מספר עמודות קבוע בלי <code>minmax</code></strong> — בנייד העמודות נעשות צרות מדי.</li>
      <li><strong>בלבול בין <code>justify-items</code> ל־<code>justify-content</code></strong> — הראשון על התוכן בתוך התא, השני על הרשת כולה.</li>
      <li><strong><code>grid-template-areas</code> עם מספר עמודות לא אחיד בין השורות</strong> — כל המחרוזות חייבות להכיל את אותו מספר מילים.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>display: grid</code> על ההורה; <strong>ילדים ישירים</strong> הופכים לפריטים.</li>
      <li><code>grid-template-columns</code> מגדיר כמה עמודות ומה רוחבן.</li>
      <li><strong><code>fr</code></strong> — חלק מהמקום הפנוי, ומחושב <strong>אחרי</strong> ה־<code>gap</code>.</li>
      <li><code>repeat(3, 1fr)</code> מקצר חזרות; <code>minmax()</code> נותן גבול תחתון ועליון.</li>
      <li><code>repeat(auto-fit, minmax(180px, 1fr))</code> — גלריה רספונסיבית <strong>בלי media query</strong>.</li>
      <li><code>grid-column: span 2</code> פורש פריט על כמה תאים — משהו ש־Flexbox לא יודע.</li>
      <li>המספרים ב־<code>grid-column</code> הם <strong>קווי רשת</strong>: ל־3 עמודות יש 4 קווים.</li>
      <li><code>grid-template-areas</code> מצייר את הפריסה כמפה קריאה.</li>
      <li><strong>ציר אחד — Flexbox. שני צירים — Grid.</strong></li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? מה המשמעות של `grid-template-columns: 2fr 1fr`?
- עמודה של 2 פיקסלים ועמודה של 1
+ שתי עמודות, והראשונה מקבלת פי שניים מהמקום הפנוי מהשנייה
- שתי שורות ביחס 2 ל-1
- שתי עמודות בגודל זהה
= `fr` מייצג חלק מהמקום הפנוי, ולכן היחס הוא שקובע ולא ערך מוחלט.

? למה עדיף `1fr` על `33.33%` בשלוש עמודות עם `gap`?
- כי אחוזים אינם חוקיים ב-Grid
+ כי `fr` מחשב את המקום אחרי שהורידו את ה-gap, ואילו האחוזים מתעלמים ממנו והפריסה גולשת
- כי `fr` נטען מהר יותר
- אין הבדל בפועל
= שלוש פעמים 33.33% ועוד שני רווחים יוצאים יחד יותר מ-100%.

? ברשת של שלוש עמודות, מה יעשה `grid-column: 1 / 4`?
- יתפוס עמודה אחת
+ יפרוש את הפריט על כל שלוש העמודות, כי המספרים הם קווי רשת ול-3 עמודות יש 4 קווים
- שגיאה, אין עמודה מספר 4
- יתפוס שלוש שורות
= אותה תוצאה אפשר לקבל גם עם `grid-column: span 3`.

? מה עושה `repeat(auto-fit, minmax(180px, 1fr))`?
- יוצר בדיוק שלוש עמודות
+ מכניס כמה עמודות שנכנסות, כל אחת לפחות 180 פיקסלים, ומחלק ביניהן את השאר
- קובע גובה שורה של 180 פיקסלים
- חוזר על הפריט 180 פעמים
= זו פריסה רספונסיבית שמשנה את מספר העמודות לבד, בלי אף media query.

? מתי נכון לבחור Grid ולא Flexbox?
- תמיד, Grid חדש יותר
+ כשצריך לסדר גם שורות וגם עמודות בו-זמנית, למשל גלריה או פריסת דף
- כשיש יותר משלושה פריטים
- כשצריך מרכוז אנכי
= לציר אחד — שורת כפתורים, סרגל ניווט — Flexbox פשוט יותר. ולגיטימי לשלב ביניהם.
```
