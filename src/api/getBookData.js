import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function main(book) {
    const prompt = `
            Given the following book details, respond ONLY with a valid JSON object in this format (no markdown, no code block, no explanation):

            {
                "summary": "...",
                "why_you_will_love_this": "...",
                "target_audience": "...",
                "author_background": "...",
            }

            Be engaging, insightful, and detailed. Avoid generic language. Use the book details below to generate your response.

            Book details:
            Title: ${book.title}
            Author(s): ${book.authors?.join(", ")}
            Description: ${book.description}
            Publisher: ${book.publisher}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            thinkingConfig: {
                thinkingBudget: 0, //fast
            },
        },
    });

    try {
        const jsonStart = response.text.indexOf("{"); //find start of object
        const cleanResponse = response.text.slice(jsonStart); //slice from jsonStart to end of response to isolate json res
        return JSON.parse(cleanResponse);
    } catch (e) {
        console.error(
            "Failed to parse Gemini response as JSON:",
            response.text,
            e
        );
        return null;
    }
}

export default main;
