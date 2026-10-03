# Anya Shop — вакуумний пакувальник

Сторінка вакуумного пакувальника NEW Vacuum Sealer. Форма замовлення надсилає заявки в Telegram через наявний endpoint /api/order.

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

Тексти, ціни, характеристики та форму замовлення можна редагувати в `index.html`. Ціна в цій версії: 449 грн, стара ціна: 956 грн, знижка: 53%.

Для головного фото додайте зображення `images/product-1.jpg` (або `images/product.jpg` як запасний варіант). Якщо папки `images` немає, створіть її в корені проєкту та додайте своє фото товару.
