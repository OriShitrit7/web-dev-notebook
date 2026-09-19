# Images, Audio & Video

<p class="lead">
עד עכשיו כל מה שכתבנו היה טקסט. בפרק הזה נוסיף לדף <strong>מדיה</strong>:
תמונות, שמע ווידאו. שלושתם עובדים לפי אותו עיקרון — האלמנט ב־HTML הוא רק
<strong>הפניה לקובץ חיצוני</strong>, והקובץ עצמו נשמר בנפרד.
</p>

## img — תמונה

<div class="box theory">
  <div class="box-head"><span class="icon">🖼️</span>שני ה־attributes החשובים</div>
  <div class="box-body">
    <p>
      <code>&lt;img&gt;</code> הוא <strong>Void Element</strong> — אין לו תוכן ואין לו תגית סגירה.
      כל המידע שלו נמצא ב־attributes:
    </p>
    <ul>
      <li><strong><code>src</code></strong> — הנתיב לקובץ התמונה. בלעדיו אין מה להציג.</li>
      <li><strong><code>alt</code></strong> — טקסט חלופי שמתאר את התמונה.</li>
    </ul>
  </div>
</div>

```demo
<img src="assets/images/sample.svg"
     alt="Mountains at sunrise">
```

<div class="keypoint">
התמונה <strong>לא מוטמעת</strong> בתוך קובץ ה־HTML. הדפדפן קורא את ה־<code>src</code>,
מבקש מהשרת קובץ נפרד, ומציג אותו במקום שבו נמצאת התגית.
</div>

### width ו־height

<div class="box">
  <div class="box-body">
    <p>
      אפשר לקבוע את מידות התמונה ב־HTML. אם נותנים רק אחד מהם, השני מחושב לבד
      ושומר על הפרופורציות:
    </p>
  </div>
</div>

```demo
<img src="assets/images/sample.svg"
     alt="Mountains" width="140">
```

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>למה כדאי לציין את שניהם</div>
  <div class="box-body">
    <p>
      אמנם את הגודל הסופי נקבע ב־CSS, אבל יש סיבה טובה לכתוב
      <code>width</code> ו־<code>height</code> גם ב־HTML.
    </p>
    <p>
      התמונה נטענת <strong>אחרי</strong> הטקסט. אם הדפדפן לא יודע מראש כמה מקום היא
      תתפוס, הוא מרנדר את הדף בלעדיה — וכשהיא מגיעה, כל התוכן <strong>קופץ למטה</strong>.
      התופעה נקראת <em>layout shift</em>, והיא הסיבה שלפעמים לוחצים על כפתור ובדיוק אז
      הוא זז.
    </p>
    <p class="note-line">
      כשהמידות כתובות ב־HTML, הדפדפן שומר מראש את השטח הנכון והדף לא קופץ.
    </p>
  </div>
</div>

## alt — איך כותבים נכון

<div class="box theory">
  <div class="box-head"><span class="icon">♿</span>שלושה תפקידים</div>
  <div class="box-body">
    <ul>
      <li>קורא מסך מקריא אותו למי שלא רואה את התמונה.</li>
      <li>הוא מוצג אם התמונה לא נטענה — כפי שראינו בפרק Attributes.</li>
      <li>מנועי חיפוש מסתמכים עליו כדי להבין מה בתמונה.</li>
    </ul>
  </div>
</div>

| סוג התמונה | מה לכתוב ב־alt |
| --- | --- |
| נושאת מידע | תיאור של מה שרואים: `alt="Mountains at sunrise"` |
| דקורטיבית בלבד | ריק: `alt=""` |
| בתוך קישור | לאן הקישור מוביל, לא מה בתמונה |
| טקסט בתוך תמונה (לוגו) | הטקסט עצמו: `alt="Acme"` |

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>alt="" ריק זה לא כמו בלי alt</div>
  <div class="box-body">
    <p>ההבדל בין השניים משמעותי דווקא לנגישות:</p>
    <ul>
      <li>
        <strong><code>alt=""</code></strong> — אומר במפורש ״התמונה דקורטיבית״.
        קורא מסך <strong>ידלג עליה בשקט</strong>. זה מה שרוצים לקישוטים.
      </li>
      <li>
        <strong>בלי <code>alt</code> בכלל</strong> — קורא מסך לא יודע מה לעשות,
        ולרוב <strong>יקריא את שם הקובץ</strong>: ״IMG-20260115-final-2.jpg״.
      </li>
    </ul>
    <p class="note-line">
      לכן לכל <code>&lt;img&gt;</code> צריך <code>alt</code> — גם אם הוא ריק.
    </p>
  </div>
</div>

## פורמטים של תמונות

| פורמט | מתאים ל | הערה |
| --- | --- | --- |
| `.jpg` | צילומים | קובץ קטן, איכות נפגמת מעט |
| `.png` | גרפיקה, שקיפות | איכות מלאה, קובץ גדול יותר |
| `.svg` | לוגואים, איקונים, תרשימים | וקטורי — חד בכל גודל |
| `.gif` | אנימציות פשוטות | מוגבל ל־256 צבעים |
| `.webp` | הכול | קטן יותר מ־JPG ומ־PNG |

<div class="box">
  <div class="box-body">
    <p class="note-line">
      התמונה בדוגמאות של הפרק הזה היא <code>.svg</code> — ולכן היא נשארת חדה לגמרי
      בכל גודל, גם אם נגדיל אותה פי עשרה.
    </p>
  </div>
</div>

## figure ו־figcaption

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>תמונה עם כיתוב</div>
  <div class="box-body">
    <p>
      כשרוצים להוסיף כיתוב לתמונה, לא כותבים פשוט <code>&lt;p&gt;</code> מתחתיה —
      כי אז אין שום קשר מוצהר ביניהן.
    </p>
    <ul>
      <li><strong><code>&lt;figure&gt;</code></strong> — עוטף את התמונה ואת הכיתוב יחד.</li>
      <li><strong><code>&lt;figcaption&gt;</code></strong> — הכיתוב עצמו.</li>
    </ul>
  </div>
</div>

```demo
<figure>
  <img src="assets/images/sample.svg"
       alt="Mountains" width="180">
  <figcaption>Sunrise over the hills.</figcaption>
</figure>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      הדפדפן מזיח את ה־<code>&lt;figure&gt;</code> בברירת מחדל. החשוב יותר הוא שהקשר
      בין התמונה לכיתוב הפך <strong>מוצהר</strong>, וקורא מסך יודע לקשר ביניהם.
      <code>&lt;figure&gt;</code> מתאים גם לתרשים, לטבלה או לקטע קוד — לא רק לתמונה.
    </p>
  </div>
</div>

## תמונה כקישור

<div class="box">
  <div class="box-body">
    <p>
      מקננים <code>&lt;img&gt;</code> בתוך <code>&lt;a&gt;</code>, בדיוק כמו כל תוכן אחר
      של קישור:
    </p>
  </div>
</div>

```demo
<a href="https://example.com">
  <img src="assets/images/sample.svg"
       alt="Visit Example" width="140">
</a>
```

<div class="keypoint">
כאן ה־<code>alt</code> מתאר את <strong>יעד הקישור</strong> ולא את התמונה.
למשתמש קורא מסך זה הקישור היחיד שיש — אם נכתוב שם ״הרים בזריחה״,
הוא לא יֵדע לאן הוא מוביל.
</div>

## audio — שמע

<div class="box theory">
  <div class="box-head"><span class="icon">🔊</span>נגן מובנה בדפדפן</div>
  <div class="box-body">
    <p>
      <code>&lt;audio&gt;</code> מטמיע נגן שמע. בניגוד ל־<code>&lt;img&gt;</code>
      יש לו תגית סגירה, כי בתוכו אפשר לשים תוכן.
    </p>
    <p>
      ה־attribute <code>controls</code> הוא Boolean Attribute שמציג את כפתורי ההפעלה.
      <strong>בלעדיו הנגן לא נראה כלל</strong> בדף.
    </p>
  </div>
</div>

```demo
<audio controls></audio>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      בדוגמה הזו לא נתנו <code>src</code>, ולכן הנגן ריק — אבל אפשר לראות בדיוק
      איך הוא נראה. בדף אמיתי כותבים כך:
    </p>
  </div>
</div>

```html
<audio controls src="song.mp3">
  הדפדפן שלך לא תומך בנגן שמע.
</audio>
```

<div class="box">
  <div class="box-body">
    <p>
      הטקסט שבתוך האלמנט הוא <strong>תוכן חלופי</strong>: הוא מוצג רק בדפדפנים
      שלא יודעים לנגן שמע. בדפדפן מודרני הוא לא יופיע לעולם.
    </p>
  </div>
</div>

## video — וידאו

<div class="box theory">
  <div class="box-head"><span class="icon">🎬</span>אותו רעיון, עם מסך</div>
  <div class="box-body">
    <p>
      <code>&lt;video&gt;</code> עובד כמו <code>&lt;audio&gt;</code>, בתוספת מידות
      ותמונת פתיחה.
    </p>
  </div>
</div>

| Attribute | מה הוא עושה |
| --- | --- |
| `controls` | מציג כפתורי הפעלה |
| `width` / `height` | מידות הנגן |
| `poster` | תמונה שמוצגת לפני ההפעלה |
| `loop` | מנגן שוב מההתחלה |
| `muted` | מתחיל מושתק |
| `autoplay` | מתחיל לנגן לבד |

```demo
<video controls width="220"></video>
```

<div class="box warn">
  <div class="box-head"><span class="icon">⚠️</span>autoplay כמעט תמיד לא יעבוד</div>
  <div class="box-body">
    <p>
      כל הדפדפנים המודרניים <strong>חוסמים ניגון אוטומטי עם קול</strong>,
      כי זו הייתה אחת ההתנהגויות השנואות באינטרנט.
    </p>
    <p>
      וידאו יתחיל לבד רק אם הוא גם <code>muted</code>. כלומר
      <code>autoplay</code> לבדו פשוט לא יעשה כלום.
    </p>
  </div>
</div>

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>כמה פורמטים לאותו סרטון</div>
  <div class="box-body">
    <p>
      לא כל דפדפן תומך בכל פורמט. אפשר להציע כמה אפשרויות באמצעות
      <code>&lt;source&gt;</code>, והדפדפן יבחר את הראשונה שהוא יודע לנגן:
    </p>
  </div>
</div>

```html
<video controls width="400" poster="cover.jpg">
  <source src="clip.webm" type="video/webm">
  <source src="clip.mp4" type="video/mp4">
  הדפדפן שלך לא תומך בווידאו.
</video>
```

<div class="box">
  <div class="box-body">
    <p class="note-line">
      כששמים <code>&lt;source&gt;</code> בפנים, לא כותבים <code>src</code> על
      <code>&lt;video&gt;</code> עצמו. <code>&lt;source&gt;</code> הוא Void Element.
    </p>
  </div>
</div>

## טעויות נפוצות

<div class="box warn">
  <div class="box-head"><span class="icon">🐞</span>מה נוטה להישבר</div>
  <div class="box-body">
    <ul>
      <li><strong><code>&lt;img&gt;</code> בלי <code>alt</code></strong> — קורא מסך יקריא את שם הקובץ.</li>
      <li><strong>נתיב שגוי ב־<code>src</code></strong> — הסיבה הנפוצה ביותר לתמונה שבורה. שימי לב לאותיות גדולות/קטנות בשם הקובץ.</li>
      <li><strong>תגית סגירה ל־<code>&lt;img&gt;</code></strong> — הוא Void Element.</li>
      <li><strong><code>&lt;audio&gt;</code> או <code>&lt;video&gt;</code> בלי <code>controls</code></strong> — הנגן פשוט לא נראה, ונדמה שכלום לא עובד.</li>
      <li><strong>הסתמכות על <code>autoplay</code></strong> — ייחסם אלא אם יש גם <code>muted</code>.</li>
      <li><strong>תמונת ענק שמוקטנת ב־HTML</strong> — הדפדפן עדיין מוריד את הקובץ המלא. מקטינים את הקובץ עצמו.</li>
      <li><strong><code>alt</code> שמתאר תמונה במקום קישור</strong> — כשהתמונה בתוך <code>&lt;a&gt;</code>, ה־<code>alt</code> מתאר את היעד.</li>
    </ul>
  </div>
</div>

## סיכום

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li>מדיה היא תמיד <strong>קובץ חיצוני</strong>; ה־HTML רק מפנה אליו.</li>
      <li><strong><code>&lt;img&gt;</code></strong> — Void Element עם <code>src</code> ו־<code>alt</code>.</li>
      <li><strong><code>alt</code> תמיד</strong>: תיאור לתמונה נושאת מידע, <code>alt=""</code> לדקורטיבית.</li>
      <li>ציון <code>width</code> ו־<code>height</code> מונע <strong>layout shift</strong> — קפיצה של הדף בזמן הטעינה.</li>
      <li>פורמטים: <code>.jpg</code> לצילומים, <code>.png</code> לשקיפות, <code>.svg</code> לוקטורי, <code>.webp</code> לקובץ קטן.</li>
      <li><strong><code>&lt;figure&gt;</code></strong> ו־<strong><code>&lt;figcaption&gt;</code></strong> מקשרים תמונה לכיתוב שלה.</li>
      <li>תמונה בתוך <code>&lt;a&gt;</code> הופכת לקישור — וה־<code>alt</code> מתאר אז את <strong>היעד</strong>.</li>
      <li><strong><code>&lt;audio&gt;</code></strong> ו־<strong><code>&lt;video&gt;</code></strong> צריכים <code>controls</code> כדי להיראות.</li>
      <li><code>autoplay</code> נחסם אלא אם הווידאו <code>muted</code>.</li>
      <li><strong><code>&lt;source&gt;</code></strong> מאפשר להציע כמה פורמטים לאותו קובץ.</li>
    </ul>
  </div>
</div>
