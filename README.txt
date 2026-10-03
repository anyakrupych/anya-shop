# Anya Shop

Односторінковий магазин із формою замовлення та відправленням заявок у Telegram.

## Файли

- `index.html` — сторінка магазину.
- `server.js` — сервер, який приймає замовлення і надсилає їх у Telegram.
- `package.json` — налаштування Node.js та Express.
- `README.txt` — ця інструкція.

## ВАЖЛИВО: Telegram Token

Не вставляйте Bot Token у `index.html` або інші файли, які завантажуються у GitHub.

На хостингу створіть дві змінні середовища:

BOT_TOKEN = ваш токен Telegram-бота
CHAT_ID = 8837674840

## Запуск

Потрібен Node.js 18 або новіший.

Встановлення:

npm install

Запуск:

npm start

Після запуску відкрийте:

http://localhost:3000

## Розміщення на Render

Створіть Web Service і підключіть GitHub-репозиторій.

Build Command:

npm install

Start Command:

npm start

У розділі Environment додайте:

BOT_TOKEN
CHAT_ID

Значення CHAT_ID:

8837674840

Значення BOT_TOKEN береться з BotFather. Не публікуйте його.

## Редагування товару

Тексти, ціни, характеристики та відгуки змінюються в `index.html`.

Фото товару можна замінити в папці `images`.
