# helt.ty — Browser App Preview

Мобилно здравно приложение, визуализирано в браузър с iPhone рамка. Екраните са от [Google Stitch](https://stitch.withgoogle.com/) експорти в `stitch_helt.ty/`.

## Стартиране

```bash
npm install
npm run dev
```

Отворете `http://localhost:5173` — Vite стартира автоматично браузъра.

## Екрани

| Таб / екран | Stitch файл |
|-------------|-------------|
| Начало | `dashboard_1/code.html` |
| Активност | `activity/code.html` |
| Хранене | `nutrition/code.html` |
| Профил | `profile_1/code.html` |
| Вода | `hydration/code.html` |
| Добави храна | `add_food/code.html` |
| Тренировка | `workout_details/code.html` |
| Здравни данни | `health_insights/code.html` |

Алтернативни варианти: `dashboard_2`, `profile_2`.

## Production build

```bash
npm run build
npm run preview
```
