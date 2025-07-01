export const generateAIInsight = async (book) => {
    const apiKey = "JTzipjUysKQ1YCna7pje8XMzJZK1Rxk5cTItnuxd";
    const { title, authors, description } = book;

    const response = await fetch("https://api.cohere.ai/v1/chat", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "command-r-plus",
            temperature: 0.7,
            message: `
      You are an intelligent book assistant.

      INPUT:
      Title: ${title}
      Author(s): ${authors?.join(", ")}
      Description: ${description || "N/A"}

      TASK:
      Return the following structured JSON only:

      {
        "summary": "...",
        "why_you_will_love_this": "...",
        "ai_rating": "...",
        "tags": ["...", "..."],
        "recommended_books": [
          { "title": "...", "reason": "..." },
          { "title": "...", "reason": "..." }
        ]
      }
                  `,
        }),
    });

    const data = await response.json();
    return JSON.parse(data.text);
};
