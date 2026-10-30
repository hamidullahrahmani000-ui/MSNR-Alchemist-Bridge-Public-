
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "MSNR Alchemist Bridge",
    status: "ONLINE",
    broker: "JustMarkets",
    server: "JustMarkets-Demo",
    mode: "DEMO",
    mt5Connected: false
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "WAITING_FOR_MT5",
    mt5Connected: false,
    message: "MT5 terminal bridge is not connected"
  });
});

app.get("/api/market", (req, res) => {
  res.status(503).json({
    symbol: "XAUUSD",
    available: false,
    price: null,
    message: "MT5 bridge is not connected"
  });
});

app.get("/api/account", (req, res) => {
  res.status(503).json({
    available: false,
    balance: null,
    equity: null,
    message: "MT5 bridge is not connected"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MSNR Bridge running on port ${PORT}`);
});
