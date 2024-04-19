const express = require('express');
const fetchData = require('../../fetchdata'); // Adjust the path as necessary

const router = express.Router();

router.get('/getData', async (req, res) => {
  try {
    const data = await fetchData(); // Call fetchData function to get data
    res.json({ success: true, data: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, error: "Failed to fetch data" });
  }
});

module.exports = router;
