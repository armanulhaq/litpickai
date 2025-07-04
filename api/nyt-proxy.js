// /api/nyt-proxy.js
// Proxy for NYT API requests, hiding the API key using Vercel environment variables

export default async function handler(req, res) {
    const NYT_API_KEY = process.env.NYT_API_KEY;
    if (!NYT_API_KEY) {
        return res
            .status(500)
            .json({ error: "NYT_API_KEY not set in environment variables." });
    }

    // Build the NYT API URL
    const { path = [] } = req.query;
    //This is how req.query looked like for a url like this: /api/svc/books/v3/lists/current/hardcover-fiction.json
    //{
    //   path: [
    //     'svc',
    //     'books',
    //     'v3',
    //     'lists',
    //     'current',
    //     'hardcover-fiction.json'
    //   ],
    //   foo: 'bar'
    // }
    //We have extracted the path array and put it in path variable
    const nytPath = Array.isArray(path) ? path.join("/") : path; //Check if path is an array if yes make it url by adding / between them
    const apiUrl = `https://api.nytimes.com/${nytPath}`; //becomes https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json

    // Forward all query params except api-key
    const params = new URLSearchParams(req.query); //extracting the query string from req.query ?foo=bear
    params.set("api-key", NYT_API_KEY);

    // Remove 'path' from params
    params.delete("path"); //If you don't delete it becomes https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json

    const urlWithParams = `${apiUrl}?${params.toString()}`;

    try {
        const nytRes = await fetch(urlWithParams, {
            method: req.method,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await nytRes.json();
        res.status(nytRes.status).json(data);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch from NYT API",
            details: error.message,
        });
    }
}
