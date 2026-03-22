# StratosAI — Business Intelligence Chatbot

> A purpose-built AI business mentor for startup ideas, strategy, growth, and entrepreneurial guidance.
> Built for the Thinkly Labs Software Engineering assignment.

---

## Live Demo

🔗 **[stratos-ai.vercel.app](https://stratos-ai.vercel.app)** *(replace with your deployed URL)*

---

## Features

- 💡 **Business Idea Generation** — personalized by budget, skills, and location
- 📈 **Strategy Advice** — B2B, SaaS, D2C, market entry, growth hacking
- 📖 **Real Startup Stories** — success & failure case studies with lessons
- 🔧 **Problem Solving** — low sales, marketing issues, scaling challenges
- ⚡ **Suggestion Chips** — zero-friction entry points for new users
- 🎨 **Polished UI** — dark luxury design, loading/error/empty states all handled
- 📱 **Fully Responsive** — mobile to desktop

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React 18 + Vite                   |
| Styling     | CSS Modules + CSS custom properties |
| Fonts       | Playfair Display, Lora, DM Mono   |
| AI          | Claude (Anthropic) via `/api/chat` proxy |
| Deployment  | Vercel (frontend + serverless API) |

---

## Project Structure

```
stratos-ai/
├── api/
│   └── chat.js                # Vercel serverless function — Anthropic proxy
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackgroundFx.jsx   # Decorative gradient + noise layer
│   │   ├── ChatInput.jsx      # Fixed bottom input bar
│   │   ├── ChatWindow.jsx     # Scrollable message list
│   │   ├── ErrorBanner.jsx    # Dismissible error state
│   │   ├── Header.jsx         # Fixed top nav with live indicator
│   │   ├── HeroLanding.jsx    # Empty state with suggestion chips
│   │   ├── MessageBubble.jsx  # Single chat message (user / assistant)
│   │   └── TypingIndicator.jsx# Animated "AI thinking" dots
│   ├── constants/
│   │   └── suggestions.js     # Suggestion chips, quick prompts, system prompt
│   ├── hooks/
│   │   ├── useAutoScroll.js   # Scrolls chat to bottom on new messages
│   │   └── useChat.js         # All chat state: messages, loading, error, send
│   ├── services/
│   │   └── api.js             # fetch wrapper for /api/chat
│   ├── styles/
│   │   └── global.css         # Design tokens, resets, animations
│   ├── App.jsx                # Root layout — composes all components
│   ├── App.module.css
│   └── main.jsx               # ReactDOM entry point
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/your-username/stratos-ai.git
cd stratos-ai
npm install
```

### 2. Set environment variables

```bash
cp .env.example .env
# Edit .env and paste your Anthropic API key
```

```env
ANTHROPIC_API_KEY=your_key_here
```

> ⚠️ The API key lives **only** in `.env` (server-side). It is never exposed to the browser.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

> For the `/api/chat` serverless route to work locally, use the **Vercel CLI**:
> ```bash
> npm i -g vercel
> vercel dev
> ```

---

## Deploying to Vercel

```bash
# One-time setup
npm i -g vercel
vercel login

# Deploy
vercel --prod
```

Then in the **Vercel dashboard → Project → Settings → Environment Variables**, add:

```
ANTHROPIC_API_KEY = your_key_here
```

Redeploy once after adding the variable.

---

## Design Decisions

| Decision | Rationale |
|---|---|
| CSS Modules | Scoped styles, zero runtime, easy to reason about per-component |
| Custom hook `useChat` | Keeps all state logic out of UI components — easy to test |
| Service layer `api.js` | Single place to change API endpoint or add retries/auth |
| Constants file | All copy/data in one place — easy to update suggestions |
| Serverless proxy | API key stays server-side; follows security best practices |

---

## Frontend Thinking

- **Empty state** → Full hero with animated heading + 8 clickable topic chips
- **Loading state** → Branded gold bouncing-dot typing indicator
- **Error state** → Dismissible banner with mono font, non-intrusive
- **Quick prompts** → Scrollable chip bar at bottom for zero-friction entry
- **Auto-scroll** → Chat follows new messages automatically
- **Auto-grow input** → Textarea expands up to 120px, then scrolls
- **Responsive** → Works on 320px mobile up to 4K

---

## License

MIT
