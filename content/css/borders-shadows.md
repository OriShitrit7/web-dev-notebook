# Borders, Shadows & Outlines

<p class="lead">
שלושת המאפיינים שבפרק הזה אחראים כמעט לכל ה״עומק״ שרואים באתרים מודרניים:
המסגרת שמגדירה גבול, הפינה המעוגלת שמרככת אותו, הצל שמרים כרטיס מהדף,
וקו המיקוד שמראה למשתמש מקלדת איפה הוא נמצא. אחד מהם גם לא תופס מקום בכלל —
וזה בדיוק מה שהופך אותו לשימושי.
</p>

## border — שלושה חלקים

<div class="box theory">
  <div class="box-head"><span class="icon">🖼️</span>עובי, סגנון וצבע</div>
  <div class="box-body">
    <p>
      <code>border</code> הוא קיצור לשלושה מאפיינים נפרדים:
    </p>
    <ul>
      <li><strong><code>border-width</code></strong> — העובי, בדרך כלל ב־<code>px</code>.</li>
      <li><strong><code>border-style</code></strong> — הסגנון: קו רציף, מקווקו וכו׳.</li>
      <li><strong><code>border-color</code></strong> — הצבע.</li>
    </ul>
    <p><code>border: 2px solid #4f46e5;</code></p>
  </div>
</div>

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>בלי style אין מסגרת</div>
  <div class="box-body">
    <p>
      ברירת המחדל של <code>border-style</code> היא <code>none</code>.
      לכן <code>border: 2px #4f46e5</code> <strong>לא יצייר כלום</strong> —
      גם אם יש עובי וגם אם יש צבע.
    </p>
    <p class="note-line">
      שתי ברירות המחדל האחרות סלחניות יותר: בלי עובי מתקבל
      <code>medium</code> (כ־3 פיקסלים), ובלי צבע מתקבל
      <code>currentColor</code> — כלומר צבע הטקסט של האלמנט,
      אותו <code>currentColor</code> שפגשנו בפרק Colors &amp; Backgrounds.
    </p>
  </div>
</div>

```demo
<style>
  div { font-family: system-ui; padding: 8px; margin-bottom: 8px;
        color: #be123c; }
  .a { border: 2px #4f46e5; }
  .b { border: 2px solid; }
  .c { border: solid; }
</style>
<div class="a">border: 2px #4f46e5 — nothing is drawn</div>
<div class="b">border: 2px solid — colour falls back to currentColor</div>
<div class="c">border: solid — width falls back to medium</div>
```

### סגנונות

| ערך | מה מתקבל |
| --- | --- |
| `solid` | קו רציף — הנפוץ ביותר |
| `dashed` | מקווקו |
| `dotted` | נקודות |
| `double` | שני קווים מקבילים |
| `none` | אין מסגרת, ואין מקום שמור |
| `hidden` | כמו `none`, אבל מנצח בקונפליקט בטבלאות |

```demo
<style>
  div { font-family: system-ui; padding: 6px; margin-bottom: 6px;
        border-width: 4px; border-color: #4f46e5; }
  .s { border-style: solid; }
  .d { border-style: dashed; }
  .t { border-style: dotted; }
  .u { border-style: double; }
</style>
<div class="s">solid</div>
<div class="d">dashed</div>
<div class="t">dotted</div>
<div class="u">double</div>
```

### צד אחד בלבד

<div class="box">
  <div class="box-body">
    <p>
      כמו ב־<code>padding</code>, אפשר לפנות לכל צד בנפרד:
      <code>border-top</code>, <code>border-bottom</code> וכן הלאה.
      זה הדפוס הרגיל לקו מפריד בין פריטים ברשימה.
    </p>
    <p class="note-line">
      גם כאן יש גרסאות לוגיות: <code>border-inline-start</code> הוא הצד
      שמתחיל בו הטקסט — ימין ב־RTL, שמאל ב־LTR. בדיוק מה שצריך לפס צבעוני
      בצד של ציטוט באתר עברי.
    </p>
  </div>
</div>

```demo
<style>
  blockquote { font-family: system-ui; margin: 0; padding: 8px 12px;
               background: #f1f5f9;
               border-inline-start: 4px solid #4f46e5; }
</style>
<blockquote dir="rtl">ציטוט עם פס בצד ההתחלה — בעברית הוא יופיע מימין.</blockquote>
```

## border-radius

<div class="box theory">
  <div class="box-head"><span class="icon">⌒</span>פינות מעוגלות</div>
  <div class="box-body">
    <p>
      <code>border-radius</code> מעגל את פינות הקופסה — וחשוב לדעת שהוא
      <strong>עובד גם בלי מסגרת בכלל</strong>: הוא חותך גם את הרקע
      ואת התמונה שבפנים.
    </p>
    <p>
      ערך אחד מחיל על ארבע הפינות. ארבעה ערכים הולכים
      <strong>בכיוון השעון החל מהפינה השמאלית־עליונה</strong>.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>שלושה ערכים ששווה לזכור</div>
  <div class="box-body">
    <ul>
      <li><strong><code>50%</code></strong> — על ריבוע מתקבל <strong>עיגול מושלם</strong>. על מלבן — אליפסה.</li>
      <li><strong><code>999px</code></strong> — הצורה המוכרת של כפתור ״גלולה״. כל ערך גדול מספיק ייתן אותה תוצאה.</li>
      <li><strong><code>8px</code>–<code>12px</code></strong> — הטווח המקובל לכרטיסים וכפתורים רגילים.</li>
    </ul>
    <p class="note-line">
      אפשר גם רדיוס אליפטי עם קו נטוי: <code>border-radius: 40px / 15px</code> —
      הרדיוס האופקי לפני הקו והאנכי אחריו.
    </p>
  </div>
</div>

```demo
<style>
  div { font-family: system-ui; background: #4f46e5; color: white;
        padding: 12px; margin-bottom: 8px; width: 200px;
        text-align: center; }
  .r1 { border-radius: 10px; }
  .r2 { border-radius: 999px; }
  .r3 { border-radius: 20px 0 20px 0; }
  .r4 { width: 80px; height: 80px; border-radius: 50%; padding: 0;
        line-height: 80px; }
</style>
<div class="r1">10px</div>
<div class="r2">999px — pill</div>
<div class="r3">20px 0 20px 0</div>
<div class="r4">50%</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      רדיוס גדול מדי ביחס לגודל האלמנט לא ישבור כלום — הדפדפן
      <strong>מקטין את כל הרדיוסים באופן יחסי</strong> עד שהם מתאימים.
      לכן <code>999px</code> תמיד בטוח.
    </p>
  </div>
</div>

## box-shadow

<div class="box theory">
  <div class="box-head"><span class="icon">🌑</span>חמישה ערכים לפי סדר</div>
  <div class="box-body">
    <p><code>box-shadow: 0 4px 12px rgba(0, 0, 0, .15);</code></p>
    <ul>
      <li><strong>הזזה אופקית</strong> — חיובי ימינה, שלילי שמאלה.</li>
      <li><strong>הזזה אנכית</strong> — חיובי למטה, שלילי למעלה.</li>
      <li><strong><code>blur</code></strong> — רכות הטשטוש. אפס נותן קצה חד. לא יכול להיות שלילי.</li>
      <li><strong><code>spread</code></strong> — הגדלה או הקטנה של הצל עצמו. אופציונלי.</li>
      <li><strong>צבע</strong> — כמעט תמיד שחור בשקיפות נמוכה.</li>
    </ul>
    <p class="note-line">
      שני הערכים הראשונים חובה, השאר אופציונליים.
      הצל <strong>לא תופס מקום</strong> בפריסה — הוא מצויר מעל מה שסביבו.
    </p>
  </div>
</div>

```demo
<style>
  div { font-family: system-ui; background: white; padding: 14px;
        margin: 0 0 18px; border-radius: 10px; width: 220px;
        font-size: 13px; }
  .s1 { box-shadow: 0 1px 3px rgba(0,0,0,.12); }
  .s2 { box-shadow: 0 8px 24px rgba(0,0,0,.18); }
  .s3 { box-shadow: 0 0 0 4px #c7d2fe; }
  .s4 { box-shadow: inset 0 3px 8px rgba(0,0,0,.2); }
</style>
<div class="s1">subtle — barely lifted</div>
<div class="s2">large blur — floating</div>
<div class="s3">spread only — a ring</div>
<div class="s4">inset — pressed in</div>
```

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>שני טריקים</div>
  <div class="box-body">
    <p>
      <strong><code>inset</code></strong> בתחילת הערך הופך את הצל
      לצל <strong>פנימי</strong> — האלמנט נראה שקוע במקום מורם.
    </p>
    <p>
      <strong>בלי blur ועם spread בלבד</strong> מתקבלת טבעת סביב האלמנט,
      שמתנהגת כמו מסגרת נוספת — אבל בלי לתפוס מקום ובלי להזיז שום דבר.
    </p>
    <p class="note-line">
      אפשר לשים <strong>כמה צללים</strong> בהצהרה אחת, מופרדים בפסיקים.
      הראשון ברשימה מצויר <strong>הכי למעלה</strong>. כך בנויים כל סולמות
      ה״גובה״ במערכות עיצוב: צל קרוב וחד יחד עם צל רחוק ורך.
    </p>
  </div>
</div>

```demo
<style>
  div { font-family: system-ui; background: white; padding: 16px;
        border-radius: 12px; width: 230px;
        box-shadow: 0 1px 2px rgba(28,25,23,.06),
                    0 8px 24px rgba(28,25,23,.10); }
</style>
<div>two shadows stacked — close and far</div>
```

<div class="box rule">
  <div class="box-head"><span class="icon">📐</span>כלל אצבע לצללים</div>
  <div class="box-body">
    <p>
      צל טוב כמעט ולא מורגש. שלושה כללים שמספיקים ברוב המקרים:
    </p>
    <ul>
      <li>הזזה אופקית <strong>אפס</strong> — אור מגיע מלמעלה, לא מהצד.</li>
      <li>שקיפות <strong>נמוכה</strong>: בין <code>.05</code> ל־<code>.2</code>.</li>
      <li>ככל שהאלמנט אמור להיראות ״גבוה״ יותר — הזזה אנכית ו־blur גדולים יותר.</li>
    </ul>
  </div>
</div>

### text-shadow

<div class="box">
  <div class="box-body">
    <p>
      לטקסט יש מאפיין משלו, <code>text-shadow</code>, עם תחביר דומה אך מצומצם:
      <strong>הזזה אופקית, הזזה אנכית, blur, צבע</strong> — בלי <code>spread</code>
      ובלי <code>inset</code>.
    </p>
    <p class="note-line">
      השימוש הנפוץ ביותר הוא לא אפקט אלא קריאוּת: טקסט לבן על תמונת רקע
      עם צל עדין נשאר קריא גם באזורים בהירים.
    </p>
  </div>
</div>

## outline

<div class="box theory">
  <div class="box-head"><span class="icon">✨</span>מסגרת שלא תופסת מקום</div>
  <div class="box-body">
    <p>
      <code>outline</code> נראה כמו <code>border</code> ונכתב כמוהו —
      <code>outline: 2px solid #4f46e5</code> — אבל שונה ממנו בשלושה דברים:
    </p>
    <ul>
      <li>הוא <strong>לא חלק ממודל הקופסה</strong>. אין לו עובי שדוחף שום דבר, והוספתו לא תזיז אף אלמנט.</li>
      <li>הוא מצויר <strong>מחוץ</strong> לגבול הקופסה, ועלול לחפוף לשכנים.</li>
      <li>יש לו <code>outline-offset</code>, שמרחיק אותו מהאלמנט (או מקרב, בערך שלילי).</li>
    </ul>
    <p class="note-line">
      בדפדפנים של היום ה־<code>outline</code> <strong>מתעגל יחד עם
      <code>border-radius</code></strong>, כך שהוא נראה טוב גם על כפתור עגול.
    </p>
  </div>
</div>

```demo
<style>
  .chip { display: inline-block; vertical-align: top;
          width: 120px; padding: 8px 0; margin: 8px;
          border-radius: 999px; text-align: center;
          font-family: system-ui; font-size: 13px;
          background: #4f46e5; color: white; }
  .b1 { border: 3px solid #be123c; }
  .b2 { outline: 3px solid #be123c; }
  .b3 { outline: 3px solid #be123c; outline-offset: 4px; }
</style>
<div class="chip">no ring</div>
<div class="chip b1">border</div>
<div class="chip b2">outline</div>
<div class="chip b3">offset</div>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      לארבעת הצ׳יפים הוגדר בדיוק אותו <code>width: 120px</code>, אבל זה עם
      ה־<code>border</code> יוצא <strong>126 על 43</strong> פיקסלים —
      שלושת הפיקסלים של המסגרת נוספו מכל צד. שני הצ׳יפים עם ה־<code>outline</code>
      נשארו <strong>120 על 37</strong>, בדיוק כמו הראשון שאין לו טבעת בכלל,
      והטבעת שלהם פשוט מצוירת מעל הסביבה.
    </p>
  </div>
</div>

### קו המיקוד

<div class="box warn">
  <div class="box-head"><span class="icon">♿</span>אסור למחוק את זה סתם</div>
  <div class="box-body">
    <p>
      ה־<code>outline</code> שהדפדפן מצייר סביב כפתור או שדה שנמצא במיקוד
      הוא <strong>לא קישוט</strong>. הוא מה שמאפשר למי שמנווט במקלדת
      לדעת איפה הוא נמצא בדף.
    </p>
    <p>
      <code>outline: none</code> לבדו הופך את הניווט במקלדת לבלתי אפשרי.
      אם ברירת המחדל לא מתאימה לעיצוב — <strong>מחליפים אותה, לא מוחקים</strong>.
    </p>
  </div>
</div>

<div class="compare">
  <div class="good">
    <div class="compare-head">תקין — מחליפים בעיצוב משלנו</div>
    <div class="compare-body">
<pre><code class="language-css">button:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}</code></pre>
    </div>
  </div>
  <div class="bad">
    <div class="compare-head">שובר נגישות</div>
    <div class="compare-body">
<pre><code class="language-css">button:focus {
  outline: none;
}</code></pre>
    </div>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">🎯</span>למה דווקא focus-visible</div>
  <div class="box-body">
    <p>
      <code>:focus</code> מופעל בכל מיקוד, כולל לחיצת עכבר — ולכן קו המיקוד
      קופץ גם כשמשתמש עכבר לוחץ על כפתור, מה שנראה מיותר.
    </p>
    <p>
      <strong><code>:focus-visible</code></strong> היא פסאודו־מחלקה אחות,
      מאותה משפחה של <code>:hover</code> ו־<code>:focus</code> מפרק
      Advanced Selectors, אבל היא מופעלת רק כשהדפדפן מעריך שהמשתמש
      <strong>זקוק</strong> לסימון — בעיקר בניווט מקלדת. כך מקבלים את שני העולמות.
    </p>
  </div>
</div>

```demo
<style>
  button { font: inherit; padding: 8px 16px; margin: 4px;
           border: 1px solid #cbd5e1; border-radius: 8px;
           background: white; }
  button:focus-visible { outline: 3px solid #4f46e5; outline-offset: 2px; }
</style>
<p style="font-family: system-ui; font-size: 13px;">Press Tab to move between the buttons:</p>
<button>First</button>
<button>Second</button>
<button>Third</button>
```

## מתי מה

| הצורך | הכלי |
| --- | --- |
| גבול שהוא חלק מהעיצוב | `border` |
| קו מפריד בין פריטים | `border-bottom` או `border-block-end` |
| פינות מעוגלות, גם בלי מסגרת | `border-radius` |
| הרמה של כרטיס מהדף | `box-shadow` |
| טבעת שלא מזיזה כלום | `box-shadow` עם spread בלבד |
| סימון מיקוד למקלדת | `outline` ב־`:focus-visible` |

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להשתבש</div>
  <div class="box-body">
    <ul>
      <li><strong><code>border</code> בלי <code>border-style</code></strong> — ברירת המחדל היא <code>none</code>, ולכן לא מצויר כלום.</li>
      <li><strong>הוספת <code>border</code> מזיזה את הפריסה</strong> — כי העובי נספר בקופסה. טבעת שלא מזיזה נעשית עם <code>box-shadow</code> או <code>outline</code>.</li>
      <li><strong><code>outline: none</code> בלי תחליף</strong> — הופך את האתר לבלתי שמיש בניווט מקלדת.</li>
      <li><strong>צל כהה ואטום מדי</strong> — נראה מלוכלך. שקיפות נמוכה ו־blur גדול עדיפים.</li>
      <li><strong>הזזה אופקית בצל</strong> — שוברת את התחושה שהאור מגיע מלמעלה.</li>
      <li><strong><code>blur</code> שלילי</strong> — ערך לא חוקי; רק <code>spread</code> יכול להיות שלילי.</li>
      <li><strong>עיגול תמונה שגולשת מהפינות</strong> — אם התמונה בתוך מיכל מעוגל, צריך גם <code>overflow: hidden</code> על המיכל.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><code>border</code> הוא קיצור ל־<strong>עובי, סגנון וצבע</strong>. בלי סגנון אין מסגרת.</li>
      <li>ברירות מחדל: <code>medium</code> לעובי, <code>currentColor</code> לצבע, <code>none</code> לסגנון.</li>
      <li><code>border-radius</code> חותך גם רקע ותמונה, ו־<strong>ארבעה ערכים הולכים בכיוון השעון מהפינה השמאלית־עליונה</strong>.</li>
      <li><code>50%</code> = עיגול; <code>999px</code> = גלולה. רדיוס גדול מדי מוקטן אוטומטית ולא שובר כלום.</li>
      <li><code>box-shadow</code>: <strong>אופקי, אנכי, blur, spread, צבע</strong> — ו־<code>inset</code> לצל פנימי.</li>
      <li>צל <strong>לא תופס מקום</strong>. כמה צללים מופרדים בפסיקים, והראשון מצויר למעלה.</li>
      <li><code>outline</code> נראה כמו מסגרת אבל <strong>מחוץ למודל הקופסה</strong> — לא מזיז כלום, ויש לו <code>outline-offset</code>.</li>
      <li>קו מיקוד לא מוחקים. מחליפים אותו בעיצוב משלנו תחת <code>:focus-visible</code>.</li>
    </ul>
  </div>
</div>

## בדקי את עצמך

```quiz
? כתבת `border: 2px #4f46e5;` ושום מסגרת לא הופיעה. למה?
- הצבע חייב להיכתב לפני העובי
+ חסר `border-style`, וברירת המחדל שלו היא `none` — ולכן אין מה לצייר
- חייבים להוסיף `border-radius`
- `px` אינו חוקי ב-border
= שתי ברירות המחדל האחרות סלחניות יותר: `medium` לעובי ו-`currentColor` לצבע.

? מה ההבדל המרכזי בין `border` ל-`outline`?
- `outline` תומך רק בצבע אחד
+ `outline` אינו חלק ממודל הקופסה, ולכן הוספתו לא מזיזה אף אלמנט
- `border` אינו נתמך בדפדפנים ישנים
- אין הבדל, אלה שמות נרדפים
= לכן `outline` מתאים לסימון מיקוד: הוא לא גורם לדף לקפוץ.

? מה עושה המילה `inset` בתחילת `box-shadow`?
- מקטינה את הצל
+ הופכת אותו לצל פנימי, כך שהאלמנט נראה שקוע במקום מורם
- מסירה את הטשטוש
- ממקמת את הצל מאחורי הרקע
= בלי `inset` הצל מצויר מחוץ לאלמנט ומרים אותו מהדף.

? למה עדיף `button:focus-visible` על פני `button:focus` לעיצוב קו המיקוד?
- `:focus` אינו נתמך עוד
+ כי `:focus-visible` מופעל רק כשהמשתמש באמת זקוק לסימון, בעיקר בניווט מקלדת, ולא בכל לחיצת עכבר
- כי `:focus-visible` מהיר יותר
- כי רק הוא עובד עם `outline-offset`
= `:focus` היה מדליק את הטבעת גם בלחיצת עכבר רגילה, ולכן מפתחים נטו למחוק אותה לגמרי.

? רוצה להוסיף טבעת סביב כרטיס בלי שהפריסה תזוז אפילו פיקסל. מה תבחרי?
- `border: 4px solid` עם `box-sizing: border-box`
+ `box-shadow: 0 0 0 4px <color>` — spread בלי blur, וצל לא תופס מקום
- `padding: 4px` עם רקע
- `border-radius` גדול
= גם `outline` יעשה את העבודה. `border` לעומת זאת נספר בקופסה ויזיז את השכנים.
```
