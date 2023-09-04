const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.json({
    "test api is working": "middleware being used",
  });
});

module.exports = router;
