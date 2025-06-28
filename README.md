# TurphDesigns Consulting Website

A modern, AI-powered consulting business website built with Next.js 14, featuring intelligent conversation capabilities and persistent memory.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **AI-Powered Chat**: Integrated Claude AI assistant for customer engagement
- **Context Memory**: Persistent conversation history using Vercel KV (Redis)
- **Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **SEO Optimized**: Comprehensive metadata and structured data
- **Vercel Ready**: Optimized for seamless Vercel deployment

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **AI Integration**: Claude API (Anthropic)
- **Memory Storage**: Vercel KV (Redis)
- **State Management**: Zustand
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd turphdesigns_site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`:
   ```env
   # Claude API - Get from https://console.anthropic.com/
   ANTHROPIC_API_KEY=your_claude_api_key_here
   
   # Vercel KV (Redis) - Get from Vercel Dashboard > Storage
   KV_URL=your_vercel_kv_url_here
   KV_REST_API_URL=your_vercel_kv_rest_api_url_here
   KV_REST_API_TOKEN=your_vercel_kv_rest_api_token_here
   KV_REST_API_READ_ONLY_TOKEN=your_vercel_kv_rest_api_read_only_token_here
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://turphdesigns.com
   ```

## 🔧 Setup Instructions

### 1. Get Claude API Key
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Sign up/login to your account
3. Generate an API key
4. Add it to your `.env.local` file

### 2. Set up Vercel KV (for Memory Storage)
1. Deploy to Vercel first (even without env vars)
2. Go to your Vercel dashboard
3. Navigate to Storage tab
4. Create a new KV database
5. Copy the connection details to your `.env.local`
6. Redeploy your application

### 3. Local Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Context Memory Framework

The application features a sophisticated context memory system:

### Key Components:
- **ContextMemoryManager**: Handles persistent storage of conversations
- **ChatStore**: Client-side state management with Zustand
- **Session Management**: Automatic session creation and management
- **Message History**: Maintains conversation context for AI responses

### Memory Features:
- Persistent conversation history across sessions
- Automatic session management
- Message deduplication and optimization
- TTL-based cleanup (7 days by default)
- User metadata tracking

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Connect your repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main

### Manual Deployment
```bash
npm run build
npm start
```

## 🎨 Customization

### Updating Business Information
- Edit company details in `src/app/page.tsx`
- Update system prompt in `src/app/api/chat/route.ts`
- Modify metadata in `src/app/layout.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Theme configuration: `tailwind.config.ts`

### AI Assistant Behavior
- System prompt: `src/app/api/chat/route.ts`
- Model settings: Adjust in the API route
- Response formatting: Customize in the chat interface

## 📱 Features Overview

### Chat Interface
- Floating chat button
- Real-time messaging
- Typing indicators
- Message timestamps
- Auto-scroll functionality
- Mobile-responsive design

### Business Website
- Professional landing page
- Service showcase
- About section
- Contact information
- SEO-optimized content

### Memory System
- Session-based conversations
- Persistent message history
- Context-aware responses
- Automatic cleanup
- User preferences storage

## 🔒 Environment Security

- Never commit `.env.local` to version control
- Use Vercel environment variables for production
- Rotate API keys regularly
- Monitor usage and costs

## 📈 Performance Optimization

- Next.js App Router for optimal performance
- Static generation where possible
- Optimized images and assets
- Efficient state management
- Lazy loading components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: hello@turphdesigns.com
- Use the AI chat assistant on the website
- Create an issue in this repository

## 📄 License

This project is proprietary to TurphDesigns. All rights reserved.

---

Built with ❤️ using modern web technologies for the future of consulting.
