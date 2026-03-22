# StratosAI — Business Intelligence Chatbot

> A purpose-built AI business mentor for startup ideas, strategy, growth, and entrepreneurial guidance.
> Built for the **Thinkly Labs Software Engineering Assignment**.

---

## 🔗 Live Demo

**[stratos-chatbot.vercel.app](https://stratos-chatbot.vercel.app)** 
---

## 💡 What is StratosAI?

StratosAI is a purpose-built AI chatbot trained on business knowledge. It acts as your personal business mentor — giving real, actionable advice on:

- 🚀 Startup ideas customized to your budget and skills
- 📈 Business strategy (B2B, SaaS, D2C, growth hacking)
- 📖 Real startup success & failure stories with lessons
- 🔧 Problem solving for sales, marketing, and scaling
- 🌍 Global market insights and emerging opportunities

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | CSS Modules + CSS Custom Properties |
| Fonts | Playfair Display, Lora, DM Mono |
| AI | Groq API (Llama 3.3 70B) |
| Deployment | Vercel |

---

## 📁 Project Structure
```
stratos-ai/
├── api/
│   └── chat.js                # Vercel serverless proxy
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackgroundFx.jsx   # Decorative background
│   │   ├── ChatInput.jsx      # Input bar + quick prompts
│   │   ├── ChatWindow.jsx     # Scrollable message list
│   │   ├── ErrorBanner.jsx    # Error state
│   │   ├── Header.jsx         # Top navigation
│   │   ├── HeroLanding.jsx    # Empty state + suggestions
│   │   ├── MessageBubble.jsx  # Single message bubble
│   │   └── TypingIndicator.jsx# Loading dots
│   ├── constants/
│   │   └── suggestions.js     # All static data + system prompt
│   ├── hooks/
│   │   ├── useChat.js         # Chat state management
│   │   └── useAutoScroll.js   # Auto scroll to bottom
│   ├── services/
│   │   └── api.js             # API call handler
│   ├── styles/
│   │   └── global.css         # Design tokens + animations
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 🚀 Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/kishorsamruddhi/Stratos-ChatBot.git
cd Stratos-ChatBot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Get a free API key
Go to [console.groq.com](https://console.groq.com) → Sign up with Google → API Keys → Create Key

### 4. Create `.env` file
```
VITE_GROQ_API_KEY=gsk_your-key-here
```

### 5. Start the app
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

Or connect GitHub repo on [vercel.com](https://vercel.com) and add environment variable:
- Key: `VITE_GROQ_API_KEY`
- Value: your Groq API key

---

## 🎨 Frontend Thinking

| State | How it's handled |
|---|---|
| **Empty state** | Full hero with animated headline + 8 topic suggestion chips |
| **Loading state** | Gold animated bouncing dots with StratosAI avatar |
| **Error state** | Dismissible red banner with clear message |
| **Quick prompts** | Scrollable chip bar at bottom for zero-friction start |
| **Responsive** | Works from 320px mobile to 4K desktop |

---

## 👨‍💻 Built By

Samruddhi— Thinkly Labs Software Engineering Assignment  
March 2026