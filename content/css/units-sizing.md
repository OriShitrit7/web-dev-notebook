# Units & Sizing

<p class="lead">
כל ערך ב־CSS שמתאר גודל צריך <strong>יחידה</strong>, והבחירה בין היחידות
היא אחת ההחלטות שמשפיעות הכי הרבה על האתר — במיוחד כשמגיעים למסכים קטנים.
בפרק הזה נבין את ההבדל בין יחידות מוחלטות ליחסיות, ומתי לבחור בכל אחת.
</p>

## שתי משפחות

<div class="box theory">
  <div class="box-head"><span class="icon">📏</span>מוחלט מול יחסי</div>
  <div class="box-body">
    <ul>
      <li>
        <strong>יחידות מוחלטות</strong> — ערך קבוע שלא משתנה לפי ההקשר.
        בפועל משתמשים רק ב־<code>px</code>.
      </li>
      <li>
        <strong>יחידות יחסיות</strong> — הערך מחושב ביחס למשהו אחר:
        גודל הגופן, רוחב ההורה, או גודל החלון.
      </li>
    </ul>
    <p class="note-line">
      יש גם <code>cm</code>, <code>mm</code> ו־<code>pt</code>, אבל הן מיועדות
      להדפסה ולא למסך. על מסך אין ״סנטימטר״ אמיתי.
    </p>
  </div>
</div>

| יחידה | יחסית ל | שימוש טיפוסי |
| --- | --- | --- |
| `px` | כלום — ערך קבוע | מסגרות, צללים, פינות |
| `rem` | גודל הגופן של `<html>` | **גדלי טקסט ומרווחים** |
| `em` | גודל הגופן של האלמנט עצמו | ריווח פנימי שמתאים לגודל הטקסט |
| `%` | האלמנט המכיל | רוחב |
| `vw` / `vh` | 1% מרוחב / גובה החלון | אלמנטים במסך מלא |

## px

<div class="box">
  <div class="box-body">
    <p>
      היחידה הפשוטה ביותר: ערך קבוע. <code>border: 1px</code> יהיה תמיד
      אותו עובי, לא משנה מה קורה סביב.
    </p>
    <p>
      מתאים בדיוק למקרים כאלה — דברים שלא אמורים לגדול ולהתכווץ:
      עובי מסגרת, רדיוס פינה, מרחק צל.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אבל לא לגודל טקסט</div>
  <div class="box-body">
    <p>
      משתמש שהגדיר בדפדפן גופן גדול יותר — כי קשה לו לקרוא —
      <strong>לא יקבל אותו</strong> אם כתבת <code>font-size: 16px</code>.
      הערך קבוע, והוא דורס את ההעדפה שלו.
    </p>
    <p>
      עם <code>rem</code> הטקסט גדל יחד עם ההגדרה שלו. זו הסיבה המרכזית
      להעדיף <code>rem</code> לגדלי טקסט.
    </p>
  </div>
</div>

## rem

<div class="box theory">
  <div class="box-head"><span class="icon">🌳</span>יחסית לשורש</div>
  <div class="box-body">
    <p>
      <code>rem</code> = <em>root em</em>. תמיד יחסית לגודל הגופן של
      אלמנט השורש <code>&lt;html&gt;</code>, שברירת המחדל שלו היא
      <strong>16 פיקסלים</strong>.
    </p>
    <ul>
      <li><code>1rem</code> = 16px</li>
      <li><code>1.5rem</code> = 24px</li>
      <li><code>0.875rem</code> = 14px</li>
    </ul>
    <p class="note-line">
      הנקודה החשובה: הערך <strong>לא תלוי בהורה</strong>.
      <code>1.5rem</code> הוא אותו גודל בדיוק בכל מקום בדף.
    </p>
  </div>
</div>

## em — והמלכודת שבה

<div class="box theory">
  <div class="box-head"><span class="icon">🪆</span>יחסית לאלמנט עצמו</div>
  <div class="box-body">
    <p>
      <code>em</code> מחושב ביחס לגודל הגופן של <strong>האלמנט עצמו</strong> —
      ולגבי <code>font-size</code> עצמו, ביחס ל<strong>הורה</strong>.
    </p>
    <p>
      וכאן נוצרת התופעה שמפתיעה את כולם: כשמקננים אלמנטים,
      הערכים <strong>מצטברים</strong>.
    </p>
  </div>
</div>

```demo
<style>
  .step { font-size: 1.4em; border-right: 3px solid #4f46e5;
          padding-right: 10px; margin-top: 6px; }
</style>
<div class="step">Level 1 — 1.4em
  <div class="step">Level 2 — 1.4 × 1.4
    <div class="step">Level 3 — 1.4 × 1.4 × 1.4</div>
  </div>
</div>
```

<div class="keypoint">
לשלושת ה־<code>&lt;div&gt;</code> יש בדיוק אותו class, ובכל זאת כל אחד גדול מקודמו.
זה <strong>הצטברות</strong>: כל רמה מכפילה את הרמה שמעליה.
עם <code>rem</code> שלושתם היו זהים.
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>אז מתי em כן טוב?</div>
  <div class="box-body">
    <p>
      דווקא כשרוצים שהמרווח <strong>יתאים לגודל הטקסט</strong>.
      כפתור עם <code>padding: 0.6em 1.2em</code> ישמור על אותן פרופורציות
      בין הטקסט לריווח, גם אם נגדיל אותו.
    </p>
    <p class="note-line">
      כלל אצבע: <strong><code>rem</code> לגדלים ולמרווחים כלליים</strong>,
      <strong><code>em</code> למרווח שנגזר מהטקסט שבתוך אותו אלמנט</strong>.
    </p>
  </div>
</div>

## אחוזים

<div class="box theory">
  <div class="box-head"><span class="icon">📐</span>אחוז ממה?</div>
  <div class="box-body">
    <p>זו השאלה שחשוב לשאול, כי התשובה משתנה לפי המאפיין:</p>
    <ul>
      <li><code>width: 50%</code> — חצי מ<strong>רוחב</strong> האלמנט המכיל.</li>
      <li><code>height: 50%</code> — חצי מ<strong>גובה</strong> האלמנט המכיל, אם יש לו גובה מוגדר.</li>
      <li><code>font-size: 120%</code> — ביחס לגופן של ההורה.</li>
    </ul>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>אחוזים ב־padding מחושבים מהרוחב — גם למעלה ולמטה</div>
  <div class="box-body">
    <p>
      זה נשמע כמו טעות, אבל זו ההגדרה: <strong>אחוזים ב־<code>padding</code>
      וב־<code>margin</code> תמיד מחושבים מהרוחב</strong> של האלמנט המכיל,
      גם כשמדובר בריווח עליון ותחתון.
    </p>
  </div>
</div>

```demo
<style>
  .outer { width: 300px; border: 2px solid #4f46e5; }
  .inner { padding: 10%; background: #eef2ff;
           font-family: system-ui; }
</style>
<div class="outer">
  <div class="inner">padding: 10% — כל הצדדים 30px</div>
</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      ההורה ברוחב 300px, ולכן <code>10%</code> הוא 30 פיקסלים —
      <strong>בכל ארבעת הכיוונים</strong>. זו תכונה שימושית: כך יוצרים
      ריווח שנשאר פרופורציוני בכל רוחב מסך.
    </p>
  </div>
</div>

## יחידות חלון

<div class="box theory">
  <div class="box-head"><span class="icon">🖥️</span>vw ו־vh</div>
  <div class="box-body">
    <ul>
      <li><code>1vw</code> = 1% מ<strong>רוחב</strong> חלון הדפדפן.</li>
      <li><code>1vh</code> = 1% מ<strong>גובה</strong> חלון הדפדפן.</li>
    </ul>
    <p>
      <code>height: 100vh</code> הוא הדרך המקובלת ליצור אזור בגובה מסך מלא,
      למשל תמונת נושא בראש האתר.
    </p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>שתי מלכודות</div>
  <div class="box-body">
    <ul>
      <li>
        <strong><code>width: 100vw</code></strong> כולל בחלק מהדפדפנים גם את פס הגלילה,
        ולכן יוצר <strong>גלילה אופקית</strong> מיותרת. לרוחב מלא עדיף
        <code>width: 100%</code>.
      </li>
      <li>
        <strong><code>100vh</code> בנייד</strong> לא תמיד תואם למה שרואים,
        כי סרגל הכתובת מופיע ונעלם. לשם כך נוספה היחידה <code>100dvh</code>
        (<em>dynamic viewport height</em>), שמתעדכנת בהתאם.
      </li>
    </ul>
  </div>
</div>

## רוחב וגובה

<div class="box">
  <div class="box-body">
    <p>
      <code>width</code> ו־<code>height</code> קובעים גודל קבוע.
      אבל בפועל משתמשים הרבה יותר ב<strong>גבולות</strong>:
    </p>
    <ul>
      <li><code>max-width</code> — עד כאן ולא יותר.</li>
      <li><code>min-width</code> — לא פחות מזה.</li>
      <li>ואותו דבר לגובה.</li>
    </ul>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>שני דפוסים שכדאי להכיר בעל פה</div>
  <div class="box-body">
    <p><strong>תמונה שלא גולשת מהמסך:</strong></p>
    <p><code>img { max-width: 100%; height: auto; }</code></p>
    <p class="note-line">
      התמונה לא תעלה על רוחב ההורה, ו־<code>height: auto</code> שומר על הפרופורציה.
      זו שורה אחת שפותרת את רוב בעיות התמונות בנייד.
    </p>
    <p><strong>עמודת תוכן שמתאימה את עצמה:</strong></p>
    <p><code>.content { width: min(760px, 100%); }</code></p>
    <p class="note-line">
      במסך רחב היא 760 פיקסלים; במסך צר היא פשוט מתכווצת.
      האתר הזה משתמש בדיוק בדפוס הזה.
    </p>
  </div>
</div>

```demo
<style>
  .fixed { width: 400px; background: #fef9e7;
           border: 1px solid #fcd34d; padding: 8px; }
  .fluid { max-width: 400px; background: #ecfdf5;
           border: 1px solid #a7f3d0; padding: 8px;
           margin-top: 8px; }
</style>
<div class="fixed">width: 400px — קבוע</div>
<div class="fluid">max-width: 400px — מתכווץ לפי הצורך</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      אם חלון התצוגה צר מ־400 פיקסלים, הראשון ייצא מהגבול והשני יתאים את עצמו.
      זה ההבדל בין עיצוב נוקשה לעיצוב גמיש.
    </p>
  </div>
</div>

## מה לבחור מתי

| המקרה | היחידה |
| --- | --- |
| גודל טקסט | `rem` |
| מרווחים כלליים | `rem` |
| ריווח פנימי בכפתור | `em` |
| עובי מסגרת, רדיוס פינה, צל | `px` |
| רוחב עמודה או תמונה | `%` או `max-width` |
| אזור בגובה מסך מלא | `vh` או `dvh` |

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong>יחידה חסרה</strong> — <code>width: 300</code> לא יעבוד. חייבים <code>300px</code>.</li>
      <li><strong>רווח לפני היחידה</strong> — <code>10 px</code> שגוי, כותבים <code>10px</code>.</li>
      <li><strong><code>em</code> מקונן</strong> — ערכים מצטברים ומכפילים זה את זה.</li>
      <li><strong><code>px</code> לגודל טקסט</strong> — מתעלם מהעדפת הגופן של המשתמש.</li>
      <li><strong><code>height: 100%</code> בלי גובה להורה</strong> — פשוט לא יעשה כלום.</li>
      <li><strong><code>100vw</code> לרוחב מלא</strong> — עלול לייצר גלילה אופקית.</li>
      <li><strong><code>width</code> קבוע במקום <code>max-width</code></strong> — הסיבה הנפוצה לגלישה בנייד.</li>
    </ul>
  </div>
</div>

<div class="box">
  <div class="box-body">
    <p class="note-line">
      היוצא מן הכלל לכלל היחידות: <strong><code>0</code> לא צריך יחידה</strong>.
      <code>margin: 0</code> תקין לגמרי, כי אפס הוא אפס בכל יחידה.
    </p>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong><code>px</code></strong> — קבוע. למסגרות, פינות וצללים.</li>
      <li><strong><code>rem</code></strong> — יחסית לשורש (16px כברירת מחדל). <strong>לגדלי טקסט ומרווחים</strong>.</li>
      <li><strong><code>em</code></strong> — יחסית לאלמנט עצמו, ו<strong>מצטבר בקינון</strong>.</li>
      <li><strong><code>%</code></strong> — יחסית להורה. ב־<code>padding</code> ו־<code>margin</code> תמיד <strong>מהרוחב</strong>.</li>
      <li><strong><code>vw</code> / <code>vh</code></strong> — אחוז מחלון הדפדפן. <code>dvh</code> מדויק יותר בנייד.</li>
      <li><strong><code>max-width</code></strong> עדיף על <code>width</code> קבוע כמעט תמיד.</li>
      <li><code>img { max-width: 100%; height: auto; }</code> — שורה שפותרת את רוב בעיות התמונות.</li>
      <li>כל ערך צריך יחידה, <strong>חוץ מאפס</strong>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? שלושה `<div>` מקוננים, לכולם `font-size: 1.4em`. מה יקרה?
- כולם יהיו באותו גודל
+ כל אחד יהיה גדול מקודמו — הערכים מצטברים ומכפילים זה את זה
- רק החיצוני יגדל
- הדפדפן יתעלם מהכלל הפנימי
= `em` מחושב ביחס להורה, ולכן בקינון מתקבלת הכפלה. עם `rem` שלושתם היו זהים.

? למה עדיף `rem` על `px` לגודל טקסט?
- כי `rem` מדויק יותר
+ כי משתמש שהגדיל את גופן ברירת המחדל בדפדפן יקבל את ההגדלה, ועם `px` היא נדרסת
- כי `px` אינו נתמך בנייד
- כי `rem` נטען מהר יותר
= זה שיקול נגישות: ערך קבוע מתעלם מהעדפה שהמשתמש הגדיר במפורש.

? לאלמנט מכיל יש רוחב 300px. מה יהיה `padding: 10%` בצד העליון?
- 10% מהגובה של ההורה
+ 30 פיקסלים — אחוזים ב-padding מחושבים תמיד מהרוחב, גם למעלה ולמטה
- תלוי בתוכן
- לא חוקי, אי אפשר אחוזים ב-padding
= זה נשמע כמו טעות אבל זו ההגדרה, והיא שימושית ליצירת ריווח פרופורציוני.

? איזו שורה תמנע מתמונה לגלוש מחוץ למסך בנייד?
- `width: 100%`
+ `max-width: 100%` יחד עם `height: auto`
- `width: 100vw`
- `min-width: 100%`
= `max-width` נותן תקרה אבל מאפשר להתכווץ. `height: auto` שומר על הפרופורציה.

? למה `width: 100vw` עלול ליצור גלילה אופקית?
- כי הוא לא נתמך בכל הדפדפנים
+ כי בחלק מהדפדפנים הוא כולל גם את רוחב פס הגלילה
- כי הוא תמיד גדול מ-100%
- כי הוא מתעלם מ-padding
= לרוחב מלא עדיף `width: 100%`, שמחושב לפי האלמנט המכיל ולא לפי החלון.
```
