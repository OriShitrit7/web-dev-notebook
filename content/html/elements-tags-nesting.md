# Elements, Tags & Nesting

<p class="lead">
בפרק הזה לומדים את שלושת הרעיונות הבסיסיים שמהם HTML בנוי:
<strong>Tags</strong>, <strong>Elements</strong> ו־<strong>Nesting</strong>.
המטרה היא להבין את המבנה של HTML לפני שמתחילים ללמוד תגיות ספציפיות.
</p>

## Tags

<div class="box theory">
  <div class="box-head"><span class="icon">🏷️</span>מהי Tag?</div>
  <div class="box-body">
    <p>
      HTML בנוי מ־<strong>Tags</strong> — תגיות. תגית היא סימון שנכתב בין הסימנים
      <code>&lt; &gt;</code>, ובעזרתו הדפדפן יודע איזה סוג של רכיב אנחנו מגדירים.
    </p>
    <p>
      שם התגית מופיע בתוך הסוגריים הזוויתיים. לדוגמה כללית:
      <code>&lt;tagname&gt;</code>.
    </p>
    <p class="note-line">
      <code>tagname</code> הוא שם כללי לצורך ההסבר בלבד — הוא לא תג HTML אמיתי.
    </p>
  </div>
</div>

### Opening Tag

<strong>Opening Tag</strong> מסמנת את תחילת האלמנט.

הצורה הכללית היא: <code>&lt;tagname&gt;</code>

### Closing Tag

ברוב האלמנטים קיימת גם <strong>Closing Tag</strong>, שמסמנת את סוף האלמנט.

הצורה הכללית היא: <code>&lt;/tagname&gt;</code>

ההבדל הוא ה־<code>/</code> שמופיע בתחילת תגית הסגירה.

<div class="keypoint">
<strong>כלל בסיסי:</strong> תגית הפתיחה מתחילה את האלמנט, ותגית הסגירה מסיימת אותו.
</div>

## Elements

<div class="box theory">
  <div class="box-head"><span class="icon">🧩</span>מהו Element?</div>
  <div class="box-body">
    <p>
      <strong>Element</strong> הוא היחידה השלמה ב־HTML — לא רק התגית עצמה.
    </p>
    <p>
      ברוב המקרים Element מורכב מ־
      <strong>Opening Tag + Content + Closing Tag</strong>.
    </p>
    <p>
      בצורה כללית: <code>&lt;tagname&gt;Content&lt;/tagname&gt;</code>
    </p>
  </div>
</div>

### המבנה של Element

<div class="figure">
  <img src="assets/images/html-element-anatomy.png" alt="תרשים שמראה Opening Tag, Content, Closing Tag ואת ה-Element השלם">
  <div class="cap">
    האיור מפרק Element לחלקים שלו: תגית פתיחה, תוכן ותגית סגירה.
    הדוגמה משתמשת ב־<code>&lt;h1&gt;</code> רק כדי להמחיש את המבנה — את התגית עצמה נלמד בהמשך.
  </div>
</div>

ההבדל החשוב הוא:

- <strong>Tag</strong> היא חלק מהתחביר של האלמנט.
- <strong>Element</strong> הוא היחידה השלמה.

כלומר, <code>&lt;tagname&gt;</code> לבדו הוא Tag, ואילו
<code>&lt;tagname&gt;Content&lt;/tagname&gt;</code> הוא Element.

### Content

<strong>Content</strong> הוא כל מה שנמצא בין תגית הפתיחה לתגית הסגירה.

ה־Content יכול להיות:

- טקסט
- Element אחר
- כמה Elements
- שילוב של טקסט ו־Elements

<div class="box example">
  <div class="box-head"><span class="icon">💡</span>הנקודה שחשוב להבין</div>
  <div class="box-body">
    <p>
      ה־Content שייך לאותו Element שבתוכו הוא נמצא.
      אם יש Element נוסף בתוך ה־Content, אנחנו כבר נכנסים לנושא של <strong>Nesting</strong>.
    </p>
  </div>
</div>

### Void Elements

לא כל Element בנוי בצורה <code>&lt;tagname&gt;Content&lt;/tagname&gt;</code>.

קיימים אלמנטים שלא מכילים Content ולכן אין להם Closing Tag. הם נקראים
<strong>Void Elements</strong>.

הצורה הכללית שלהם היא פשוט: <code>&lt;tagname&gt;</code>

את ה־Void Elements הספציפיים נלמד בהמשך, כשנגיע לנושאים הרלוונטיים.

## Nesting

<div class="box theory">
  <div class="box-head"><span class="icon">🪆</span>מהו Nesting?</div>
  <div class="box-body">
    <p>
      HTML בנוי בצורה <strong>היררכית</strong>. Element יכול להימצא בתוך Element אחר.
      למבנה הזה קוראים <strong>Nesting</strong>.
    </p>
    <p>
      כלומר, ה־Content של Element יכול להיות בעצמו Element אחר.
    </p>
  </div>
</div>

לדוגמה מבנית:

```html
<parent>
    <child>Content</child>
</parent>
```

<code>parent</code> ו־<code>child</code> כאן הם שמות כלליים להמחשת המבנה, ולא תגיות HTML אמיתיות.

### Parent, Child & Siblings

כאשר Element נמצא ישירות בתוך Element אחר:

- האלמנט החיצוני נקרא <strong>Parent</strong>.
- האלמנט שנמצא ישירות בתוכו נקרא <strong>Child</strong>.

אפשר לייצג את המבנה כך:

```text
parent
└── child
```

אם כמה Elements נמצאים בתוך אותו Parent ובאותה רמה, הם נקראים <strong>Siblings</strong>:

```text
parent
├── child A
└── child B
```

<div class="keypoint">
<strong>Parent / Child</strong> מתארים קשר אנכי בהיררכיה.
<strong>Siblings</strong> מתארים Elements שנמצאים זה לצד זה באותה רמה.
</div>

### Nesting בכמה רמות

Nesting יכול להיות עמוק יותר מרמה אחת:

```text
A
└── B
    └── C
```

כאן <code>B</code> נמצא בתוך <code>A</code>, ו־<code>C</code> נמצא בתוך <code>B</code>.

כך למעשה בנוי דף HTML אמיתי: עץ של Elements שמקוננים זה בתוך זה.

### סדר הסגירה של Elements

כאשר מקננים Elements, חייבים לסגור אותם בסדר הנכון.

הכלל הוא: <strong>האלמנט שנפתח אחרון — נסגר ראשון.</strong>

מבנה תקין:

```html
<A>
    <B>
    </B>
</A>
```

מבנה לא תקין:

```html
<A>
    <B>
</A>
    </B>
```

אפשר לחשוב על זה כמו סוגריים: <code>( [ ] )</code> תקין, ואילו <code>( [ ) ]</code> אינו תקין.

### Indentation

<strong>Indentation</strong> היא הזחה של הקוד לפי רמת ה־Nesting.

```text
A
    B
        C
```

ההזחה עצמה לא יוצרת את ה־Nesting — התגיות הן שיוצרות אותו.  
המטרה של ההזחה היא להראות בצורה ברורה את ההיררכיה ולהפוך את הקוד לקריא יותר.

<div class="box summary">
  <div class="box-head"><span class="icon">📌</span>סיכום הפרק</div>
  <div class="box-body">
    <ul>
      <li><strong>Tag</strong> — התחביר שנכתב בין <code>&lt; &gt;</code>.</li>
      <li><strong>Element</strong> — היחידה השלמה, שבדרך כלל כוללת Opening Tag, Content ו־Closing Tag.</li>
      <li><strong>Nesting</strong> — מצב שבו Element נמצא בתוך Element אחר.</li>
      <li><strong>Parent</strong> — Element שמכיל Element אחר ישירות.</li>
      <li><strong>Child</strong> — Element שנמצא ישירות בתוך Parent.</li>
      <li><strong>Sibling</strong> — Elements שנמצאים באותה רמה ותחת אותו Parent.</li>
      <li><strong>Void Element</strong> — Element שלא מכיל Content ולכן אין לו Closing Tag.</li>
    </ul>
  </div>
</div>
