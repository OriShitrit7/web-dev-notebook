#!/bin/bash
# Web Dev Notebook — הפעלה מקומית בלחיצה כפולה.
# מרים שרת מקומי בתיקייה הזו ופותח את האתר בדפדפן.

cd "$(dirname "$0")" || exit 1

if ! command -v python3 >/dev/null 2>&1; then
  echo "❌  python3 לא מותקן על המחשב."
  echo "    אפשר להתקין דרך: https://www.python.org/downloads/"
  echo
  read -r -p "אנטר לסגירה..."
  exit 1
fi

# מוצא את הפורט הפנוי הראשון החל מ-8000, כדי שהרצה שנייה לא תיפול.
PORT=$(python3 - <<'PY'
import socket
for port in range(8000, 8100):
    sock = socket.socket()
    try:
        sock.bind(('127.0.0.1', port))
    except OSError:
        continue
    finally:
        sock.close()
    print(port)
    break
PY
)

if [ -z "$PORT" ]; then
  echo "❌  לא נמצא פורט פנוי בטווח 8000-8099."
  read -r -p "אנטר לסגירה..."
  exit 1
fi

echo "════════════════════════════════════════════"
echo "  Web Dev Notebook"
echo "════════════════════════════════════════════"
echo
echo "  📖  http://localhost:$PORT"
echo
echo "  • הדפדפן ייפתח אוטומטית עוד רגע."
echo "  • אם שינוי בתוכן לא מופיע — רענון קשיח: Cmd+Shift+R"
echo "  • לעצירה: Ctrl+C, או פשוט לסגור את החלון הזה."
echo

# --bind 127.0.0.1 כדי שהשרת יהיה זמין רק מהמחשב הזה ולא מהרשת המקומית.
python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null
  echo
  echo "  השרת נעצר."
}
trap cleanup EXIT INT TERM

sleep 1
open "http://localhost:$PORT/"

wait "$SERVER_PID"
