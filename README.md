# LitPick AI

LitPick AI is a modern React web app that showcases the latest New York Times Bestsellers, enhanced with AI-powered summaries, recommendations, and author insights. Browse by genre, discover trending books, and get engaging, personalized information powered by Google Gemini.

---

## 🚀 Features

-   **NYT Bestseller Lists:** Browse up-to-date lists by genre, powered by the New York Times Books API.
-   **AI Book Insights:** Get engaging summaries, recommendations, and author backgrounds using Google Gemini (Generative AI).
-   **Beautiful UI:** Clean, responsive, and accessible design with Tailwind CSS.
-   **Fast & Secure:** Built with React, Vite, and API proxying for security and speed.
-   **Intuitive Navigation:** Effortless routing and genre selection.

---

## 🛠️ Tech Stack

-   **Frontend:** React 18, Vite
-   **Styling:** Tailwind CSS
-   **Routing:** React Router DOM
-   **APIs:** New York Times Books API, Google Gemini (Generative AI)
-   **Deployment:** Vercel

---

## ⚡ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/armanulhaq/litpickai.git
cd litpickai
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a .env file in the project root:

```env
VITE_NYT_API_KEY=your-nyt-api-key
VITE_GEMINI_API_KEY=your-gemini-api-key
```

-   Get your NYT API key from [NYT Developer Portal](https://developer.nytimes.com/)
-   Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### 4. Run the development server

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Proxy Setup

During development, API requests to /api are proxied to the NYT API, with your API key injected automatically.
See vite.config.js for details.

For production see the vercel.json rewrite rules.

---

## 🧠 How It Works

1. **Genre Selection:**
   Users pick a genre (e.g., Fiction, Science) from the moods page.

2. **Book List:**
   The app fetches the latest NYT bestsellers for that genre via a proxied API request.

3. **Book Details:**
   Clicking a book fetches detailed info and sends it to Google Gemini, which returns:

    - A summary
    - Why you'll love it
    - Target audience
    - Author background

4. **AI Display:**
   The AI response is parsed and beautifully displayed, giving users a unique, engaging experience.
