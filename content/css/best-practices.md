# CSS Best Practices & Debugging

<p class="lead">
CSS קל לכתוב וקשה לתחזק. קובץ שגדל בלי שיטה הופך למקום שבו כל שינוי קטן
שובר משהו אחר, ושבו הפתרון היחיד שנראה עובד הוא <code>important!</code>.
הפרק הזה סוגר את מסלול ה־CSS: איך לארגן, איך לתת שמות,
ואיך לאבחן תקלה במקום לנחש.
</p>

## סדר הקובץ

<div class="box theory">
  <div class="box-head"><span class="icon">🗂️</span>מכללי לספציפי</div>
  <div class="box-body">
    <p>
      הסדר אינו קוסמטי. כפי שראינו בפרק <strong>Cascade</strong>,
      כשהספציפיות שווה <strong>מנצח מי שנכתב אחרון</strong> — ולכן
      הסדר קובע מי דורס את מי.
    </p>
    <ol>
      <li><strong>Reset</strong> — איפוס ברירות המחדל של הדפדפן.</li>
      <li><strong>משתנים</strong> — בלוק <code>:root</code> עם הצבעים והמרווחים.</li>
      <li><strong>בסיס</strong> — אלמנטים בסיסיים: <code>body</code>, <code>h1</code>, <code>a</code>.</li>
      <li><strong>פריסה</strong> — המבנה הגדול: header, sidebar, main.</li>
      <li><strong>רכיבים</strong> — כרטיס, כפתור, טופס.</li>
      <li><strong>עזרים</strong> — מחלקות קטנות לשימוש נקודתי.</li>
    </ol>
    <p class="note-line">
      עזרים בסוף בכוונה: הם אמורים לגבור על מה שמעליהם.
      זו דרך להשיג עדיפות <strong>בלי</strong> להעלות ספציפיות.
    </p>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      גם בתוך קובץ אחד שווה לסמן מקטעים בהערות בולטות.
      <code>styles.css</code> של האתר הזה בנוי בדיוק כך — כל מקטע
      פותח בהערה עם קו מפריד, וכך קל לקפוץ בין אזורים.
    </p>
  </div>
</div>

## שמות

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>לפי משמעות, לא לפי מראה</div>
  <div class="box-body">
    <p>
      הכלל מפרק <strong>Syntax &amp; Selectors</strong> חוזר כאן במלוא עוצמתו:
      <code>.warning</code> עדיף על <code>.red-text</code>, כי מחר הצבע ישתנה
      והשם יהפוך לשקר.
    </p>
    <p>
      שיטה מקובלת לשמות רכיבים היא <strong>BEM</strong> —
      <em>Block, Element, Modifier</em>:
    </p>
    <ul>
      <li><code>.card</code> — הרכיב.</li>
      <li><code>.card__title</code> — חלק בתוכו.</li>
      <li><code>.card--featured</code> — וריאציה שלו.</li>
    </ul>
    <p class="note-line">
      השיטה נראית מסורבלת, אבל היא פותרת את הבעיה האמיתית:
      כל בורר הוא <strong>class יחיד</strong>, ולכן הספציפיות שטוחה
      ואין מלחמות דריסה.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">ספציפיות שטוחה — קל לדרוס</div>
    <div class="compare-body">
<pre><code class="language-css">.card__title {
  font-size: 1.25rem;
}
.card--featured .card__title {
  color: #be123c;
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">שרשרת עמוקה — ספציפיות מטפסת</div>
    <div class="compare-body">
<pre><code class="language-css">#main .content .card ul li a {
  color: #be123c;
}</code></pre>
    </div>
  </div>
</div>

## שלושה כללים שמונעים כאב

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>מה באמת חוזר על עצמו</div>
  <div class="box-body">
    <ul>
      <li>
        <strong>לא לעצב עם <code>id</code>.</strong> ספציפיות (1,0,0) שאי אפשר
        לגבור עליה בשום כמות של classes — כפי שראינו בפרק Cascade.
      </li>
      <li>
        <strong>לא לקנן עמוק.</strong> עד שתי רמות. שרשרת ארוכה קושרת את
        ה־CSS למבנה ה־HTML, וכל שינוי מבני שובר אותה.
      </li>
      <li>
        <strong>לא <code>important!</code>.</strong> הוא לא פותר את הבעיה
        אלא דוחה אותה — ה־<code>important!</code> הבא יצטרך לגבור עליו.
      </li>
    </ul>
    <p class="note-line">
      שני חריגים לגיטימיים ל־<code>important!</code> פגשנו כבר:
      <code>prefers-reduced-motion</code> ומחלקות עזר שכל תפקידן לדרוס.
    </p>
  </div>
</div>

## שיטת האבחון

<div class="box theory">
  <div class="box-head"><span class="icon">🔍</span>שלוש שאלות, בסדר הזה</div>
  <div class="box-body">
    <p>
      כשכלל CSS לא עושה מה שציפית, יש שלוש אפשרויות בלבד.
      לחיצה ימנית על האלמנט ← <strong>Inspect</strong>, ואז עוברים עליהן לפי הסדר:
    </p>
    <ol>
      <li><strong>הכלל בכלל לא מופיע</strong> ברשימת הכללים.</li>
      <li><strong>הכלל מופיע עם קו חוצה.</strong></li>
      <li><strong>הכלל מופיע ופעיל</strong> — ובכל זאת לא רואים כלום.</li>
    </ol>
    <p class="note-line">
      כל אחת מצביעה על סוג תקלה אחר לגמרי. זה חוסך את רוב הניחושים.
    </p>
  </div>
</div>

| מה רואים | מה זה אומר | לאן להסתכל |
| --- | --- | --- |
| הכלל לא מופיע | הבורר **לא תפס** את האלמנט | שגיאת כתיב, class חסר, קובץ לא נטען |
| קו חוצה על ההצהרה | כלל אחר **דרס** אותו | ספציפיות, או סדר הכתיבה |
| ההצהרה מופיעה עם סימן אזהרה | **הערך לא חוקי** | יחידה חסרה, שם מאפיין שגוי |
| הכלל פעיל אך אין אפקט | המאפיין **לא חל** על האלמנט | `width` על inline, `z-index` על static |

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>הטריק הכי מהיר לפריסה</div>
  <div class="box-body">
    <p>
      כשמשהו זז ולא ברור מה תופס מקום, מוסיפים זמנית:
    </p>
    <p><code>* { outline: 1px solid red; }</code></p>
    <p class="note-line">
      פתאום רואים את כל הקופסאות. משתמשים ב־<code>outline</code>
      ולא ב־<code>border</code> דווקא כי הוא <strong>לא תופס מקום</strong>
      ולכן לא משנה את הפריסה שאת מנסה לאבחן — בדיוק כפי שראינו
      בפרק Borders &amp; Shadows.
    </p>
  </div>
</div>

```demo
<style>
  .wrap { font-family: system-ui; font-size: 13px; }
  .wrap * { outline: 1px solid #be123c; }
  .wrap div { padding: 8px; }
  .inner { background: #eef2ff; }
</style>
<div class="wrap">
  <div>outer box
    <div class="inner">inner box
      <span>an inline span</span>
    </div>
  </div>
</div>
```

## חמש תקלות שחוזרות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>אבחון מהיר</div>
  <div class="box-body">
    <ul>
      <li>
        <strong>גלילה אופקית מסתורית</strong> — כמעט תמיד אלמנט עם רוחב קבוע,
        <code>100vw</code>, או תמונה בלי <code>max-width: 100%</code>.
      </li>
      <li>
        <strong>האלמנט לא זז</strong> עם <code>top</code> או <code>left</code> —
        חסר <code>position</code> שאינו <code>static</code>.
      </li>
      <li>
        <strong>רווח שלא ביקשת</strong> — או <code>margin</code> שברירת המחדל
        של הדפדפן נתנה, או קריסת מרווחים מפרק Box Model.
      </li>
      <li>
        <strong><code>z-index</code> שלא עובד</strong> — האלמנט <code>static</code>,
        או שיש הקשר ערימה חדש מ־<code>transform</code>.
      </li>
      <li>
        <strong>הצבע לא משתנה</strong> — בדקי אם זה <code>color</code> או
        <code>background-color</code>, ואם המשתנה בכלל מוגדר בהקשר הזה.
      </li>
    </ul>
  </div>
</div>

## מה לבדוק לפני שמסיימים

<div class="box rule">
  <div class="box-head"><span class="icon">✅</span>שש בדיקות</div>
  <div class="box-body">
    <ul>
      <li><strong>רוחב צר</strong> — כ־320 פיקסלים, בלי גלילה אופקית.</li>
      <li><strong>ניווט מקלדת</strong> — Tab עובר על הכול, וקו המיקוד נראה.</li>
      <li><strong>הגדלת גופן</strong> — 200% בהגדרות הדפדפן, בלי שהפריסה נשברת.</li>
      <li><strong>ניגודיות</strong> — טקסט קריא על הרקע שלו.</li>
      <li><strong>תוכן ארוך</strong> — שם ארוך במיוחד לא שובר כרטיס.</li>
      <li><strong>הפחתת תנועה</strong> — <code>prefers-reduced-motion</code> מכובד.</li>
    </ul>
  </div>
</div>

<div class="keypoint">
שלוש מהבדיקות האלה הן <strong>נגישות</strong>, לא אסתטיקה.
ניווט מקלדת, ניגודיות והפחתת תנועה הם מה שקובע אם אפשר בכלל
להשתמש באתר — ולא רק אם הוא נראה טוב.
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>ניחוש במקום אבחון</strong> — שינוי ערכים אקראי במקום לפתוח Inspect.</li>
      <li><strong><code>important!</code> כפתרון ראשון</strong> — במקום לבדוק למה הכלל נדרס.</li>
      <li><strong>עיצוב עם <code>id</code></strong> — ספציפיות שלא ניתן לגבור עליה.</li>
      <li><strong>שמות לפי מראה</strong> — <code>.blue-button</code> שהפך אדום.</li>
      <li><strong>קובץ בלי סדר פנימי</strong> — כללים שנדרסים בלי שאפשר לעקוב.</li>
      <li><strong>שכחת רענון קשיח</strong> — לפעמים הקובץ הישן עדיין ב־cache. <code>Cmd+Shift+R</code>.</li>
      <li><strong>בדיקה רק בדפדפן אחד וברוחב אחד</strong>.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>סדר הקובץ: <strong>reset, משתנים, בסיס, פריסה, רכיבים, עזרים</strong>.</li>
      <li>עזרים בסוף — עדיפות <strong>בלי</strong> העלאת ספציפיות.</li>
      <li>שמות <strong>לפי משמעות</strong>. BEM שומר על ספציפיות שטוחה.</li>
      <li>שלושה כללים: בלי <code>id</code> לעיצוב, בלי קינון עמוק, בלי <code>important!</code>.</li>
      <li>אבחון בשלוש שאלות: הכלל <strong>לא מופיע</strong> / <strong>נדרס</strong> / <strong>פעיל אך חסר אפקט</strong>.</li>
      <li>כלל שלא מופיע ב־DevTools הוא <strong>שגיאת בורר</strong>, לא ספציפיות.</li>
      <li><code>* { outline: 1px solid red }</code> — הטריק המהיר לאבחון פריסה.</li>
      <li>לפני סיום: רוחב צר, מקלדת, הגדלת גופן, ניגודיות, תוכן ארוך, הפחתת תנועה.</li>
    </ul>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎓</span>סוף מסלול ה־CSS</div>
  <div class="box-body">
    <p>
      זה הפרק האחרון ב־CSS. מכאן יש לך את כל מה שצריך כדי לעצב דף שלם:
      בוררים, Cascade, מודל הקופסה, פריסה עם Flexbox ו־Grid,
      התאמה לכל מסך, ותנועה.
    </p>
    <p class="note-line">
      מה שחסר הוא <strong>התנהגות</strong> — מה קורה כשלוחצים, מה נטען מהשרת,
      ואיך הדף משתנה בזמן אמת. זה בדיוק התפקיד של השכבה השלישית,
      <strong>JavaScript</strong>.
    </p>
  </div>
</div>

## בדקי את עצמך

```quiz
? למה מחלקות עזר נכתבות בסוף קובץ ה-CSS?
- כי הן הכי פחות חשובות
+ כי בספציפיות שווה מנצח מי שנכתב אחרון, וכך הן גוברות בלי להעלות ספציפיות
- כי הדפדפן טוען אותן ראשונות
- כי אחרת הן לא יעבדו כלל
= זו דרך להשיג עדיפות בלי `!important` ובלי בוררים ארוכים.

? כלל שכתבת בכלל לא מופיע ברשימת הכללים ב-DevTools. מה זה אומר?
- שהוא נדרס על ידי כלל ספציפי יותר
+ שהבורר לא תפס את האלמנט — שגיאת כתיב, class חסר, או קובץ שלא נטען
- שהערך אינו חוקי
- שצריך להוסיף `!important`
= כלל שנדרס כן מופיע, אבל עם קו חוצה. זה ההבדל שחוסך את רוב זמן האבחון.

? למה משתמשים ב-`* { outline: 1px solid red }` ולא ב-`border` כדי לאבחן פריסה?
- כי `outline` בולט יותר
+ כי `outline` אינו תופס מקום, ולכן הוא לא משנה את הפריסה שמנסים לאבחן
- כי `border` אינו נתמך על `*`
- כי `outline` נטען מהר יותר
= `border` היה מוסיף פיקסלים לכל אלמנט ומזיז את כל הדף.

? מדוע עדיף `.warning` על `.red-text`?
- `.warning` קצר יותר
+ כי השם מתאר את המשמעות, ולכן הוא יישאר נכון גם אחרי שהצבע ישתנה
- כי `.red-text` אינו שם חוקי
- כי `.warning` ספציפי יותר
= שם שמתאר מראה הופך לשקר ברגע שמעצבים מחדש.

? באתר יש גלילה אופקית שלא ביקשת. מה הכי סביר שגורם לה?
- `overflow: auto` על ה-body
+ אלמנט עם רוחב קבוע, `100vw`, או תמונה בלי `max-width: 100%`
- חוסר ב-`display: flex`
- `position: relative` על ההורה
= `100vw` כולל בחלק מהדפדפנים גם את פס הגלילה, ולכן הוא חורג במעט מהרוחב הזמין.
```
