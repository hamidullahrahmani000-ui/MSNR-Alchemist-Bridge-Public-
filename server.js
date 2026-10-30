app.get("/api/market", (req, res) => {
  res.status(503).json({
    symbol: "XAUUSD",
    available: false,
    price: null,
    message: "Live price unavailable: MT5 bridge is not connected"
  });
});
