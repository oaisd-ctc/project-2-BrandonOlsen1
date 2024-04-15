import express from 'express';
import fetchData from '../fetchdata1.js'; // Import fetchData function

const router = express.Router();

// API endpoint to fetch data
router.get('/tasks', async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data); // Send fetched data as JSON response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
