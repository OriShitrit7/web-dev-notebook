# Web Dev Notebook

אתר סטטי ללימוד HTML / CSS / JavaScript, בעיצוב המבוסס על אתר ה־DS/ML הקודם.

## מבנה

```text
index.html
styles.css
app.js
content/
└── html/
    ├── overview.md
    └── elements-tags-nesting.md
```

## הרצה מקומית

ב־Terminal, מתוך תיקיית הפרויקט:

```bash
python3 -m http.server 8000
```

ואז לפתוח:

```text
http://localhost:8000
```

חשוב: בגלל שהאתר טוען קבצי Markdown עם `fetch`, פתיחה ישירה של `index.html` כקובץ מקומי עלולה להיחסם על ידי הדפדפן.

## GitHub Pages

האתר משתמש ב־hash routing (`#/...`), ולכן מתאים ל־GitHub Pages ללא הגדרת rewrites מיוחדת.

לאחר העלאת הקבצים ל־repository:
1. GitHub → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`
4. Folder: `/ (root)`

## הוספת פרק חדש

1. ליצור קובץ Markdown חדש תחת `content/html/`.
2. לעדכן את רשימת `topics` בראש `app.js`.
3. להגדיר `ready: true` ולהוסיף את הנתיב ב־`file`.
