import axios from "axios";

export default async function handler(req, res) {
  const apiUrl = "https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&pageSize=10&apiKey=YOUR_API_KEY";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    // Add an ID to each article if needed
    const articlesWithId = response.data.articles.map((article, index) => ({
      ...article,
      id: index + 1,
    }));

    // Return JSON
    res.status(200).json({ articles: articlesWithId });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
