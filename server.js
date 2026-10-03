const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post("/api/order", async (req, res) => {
  try {
    const { name, phone, city, warehouse, product, price, quantity, total } = req.body || {};

    if (!name || !phone || !city) {
      return res.status(400).json({ ok: false, error: "Заповніть обов'язкові поля" });
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({ ok: false, error: "Telegram не налаштований" });
    }

    const message =
`🛍 НОВЕ ЗАМОВЛЕННЯ

👤 Ім’я: ${name}
📞 Телефон: ${phone}
📍 Місто: ${city}
📦 Відділення: ${warehouse || "не вказано"}
🛒 Товар: ${product || "не вказано"}
🔢 Кількість: ${quantity || "1"}
💰 Ціна за одиницю: ${price || "не вказано"}
🧾 Разом: ${total || price || "не вказано"}`;

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      }
    );

    const result = await response.json();

    if (!result.ok) {
      console.error(result);
      return res.status(502).json({ ok: false });
    }

    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Shop is running on port ${PORT}`);
});
