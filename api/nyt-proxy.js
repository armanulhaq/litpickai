// /api/nyt-proxy.js
// Proxy for NYT API requests, hiding the API key using Vercel environment variables

export default async function handler(req, res) {
  const NYT_API_KEY = process.env.NYT_API_KEY;
  if (!NYT_API_KEY) {
    return res.status(500).json({ error: 'NYT_API_KEY not set in environment variables.' });
  }

  // Build the NYT API URL
  const { path = [] } = req.query;
  const nytPath = Array.isArray(path) ? path.join('/') : path;
  const apiUrl = `https://api.nytimes.com/${nytPath}`;

  // Forward all query params except api-key
  const params = new URLSearchParams(req.query);
  params.set('api-key', NYT_API_KEY);

  // Remove 'path' from params
  params.delete('path');

  const urlWithParams = `${apiUrl}?${params.toString()}`;

  try {
    const nytRes = await fetch(urlWithParams, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await nytRes.json();
    res.status(nytRes.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from NYT API', details: error.message });
  }
}
