![hero](Github.png)

<p align="center">
	<h1 align="center"><b>Omniplex</b></h1>
<p align="center">
    Open-Source Perplexity-like AI Search & Chat Platform
    <br />
    <br />
    <a href="https://agreeable-bay-0e0d63510.azurestaticapps.net">🚀 Live Demo</a>
    ·
    <a href="https://github.com/sonamgupta01/omniplex">GitHub Repository</a>
    ·
    <a href="https://agreeable-bay-0e0d63510.azurestaticapps.net/pricing">💳 Pricing</a>
  </p>
</p>

# 🚀 **Deployed & Production Ready**

> **Live Application**: [https://agreeable-bay-0e0d63510.azurestaticapps.net](https://agreeable-bay-0e0d63510.azurestaticapps.net)

This is a fully functional, production-ready deployment with all features working including Stripe payments, AI chat, web search, and plugin integrations.

## 🌟 **Features**

- ✅ **AI Chat**: Google Gemini API integration for intelligent conversations
- ✅ **Web Search**: Google Custom Search API for real-time web results
- ✅ **Weather Plugin**: OpenWeatherMap integration for weather data
- ✅ **Stock Plugin**: Finnhub & Alpha Vantage APIs for market data
- ✅ **Dictionary Plugin**: Word definitions and meanings
- ✅ **File Upload**: Image processing and analysis
- ✅ **Stripe Payments**: Subscription management (test mode)
- ✅ **Firebase Integration**: Authentication, storage, and database
- ✅ **Responsive Design**: Mobile-friendly interface
- ✅ **Chat History**: Persistent conversation storage
- ✅ **Share & Fork**: Share conversations with others

## 🚀 **Quick Start**

### **Option 1: Use Live Demo**
Visit the deployed application: **[https://agreeable-bay-0e0d63510.azurestaticapps.net](https://agreeable-bay-0e0d63510.azurestaticapps.net)**

### **Option 2: Run Locally**

1. **Clone the repository**
```bash
git clone https://github.com/sonamgupta01/omniplex.git
cd omniplex
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```bash
# Google APIs
GOOGLE_API_KEY=your_google_api_key
GOOGLE_CX=your_custom_search_engine_id

# OpenAI API (optional)
OPENAI_API_KEY=your_openai_api_key

# Stripe (for payments)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Application URL
NEXT_PUBLIC_URL=http://localhost:3000

# Plugin APIs
OPENWEATHERMAP_API_KEY=your_weather_api_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key
FINNHUB_API_KEY=your_finnhub_api_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the app.

## 🔧 **API Keys Setup**

### **Required APIs:**
1. **Google API Key**: [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Custom Search API
   - Create a Custom Search Engine at [cse.google.com](https://cse.google.com/)

2. **Stripe Account**: [Stripe Dashboard](https://dashboard.stripe.com/)
   - Get your test API keys for development

3. **Weather API**: [OpenWeatherMap](https://openweathermap.org/api)
   - Free tier available

4. **Stock APIs**:
   - [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
   - [Finnhub](https://finnhub.io/register)

## 🧪 **Testing Stripe Payments**

Use these test card numbers in the deployed app:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Any future expiry date and CVC**

## 🔌 **Plugin Development**

The app supports a modular plugin system. To add new plugins:

1. Update types in `src/utils/types.ts`
2. Add API route in `src/app/api/[plugin-name]/route.ts`
3. Create UI component in `src/components/[PluginName]/`
4. Update `src/components/Source/Source.tsx` to handle the plugin
5. Add plugin data to `src/utils/data.ts`

## 🏗️ **Deployment**

### **Azure Static Web Apps**
This project is deployed on Azure Static Web Apps with automatic CI/CD:

- **Live URL**: [https://agreeable-bay-0e0d63510.azurestaticapps.net](https://agreeable-bay-0e0d63510.azurestaticapps.net)
- **Auto-deployment**: Pushes to `main` branch trigger automatic builds
- **Environment Variables**: Configured in Azure portal

### **Build Process**
```bash
npm run build    # Creates optimized production build
npm run start    # Runs production server locally
```

## 🔄 **Multi-LLM Support**

Currently using **Google Gemini API**. To add other LLMs:

1. **Add API key to environment**:
```bash
ANTHROPIC_API_KEY=your_anthropic_key
```

2. **Update chat API route** (`src/app/api/chat/route.ts`)
3. **Add model options** in `src/utils/data.ts`

### **Supported Models**:
- ✅ **Google Gemini 1.5 Flash** (Current)
- 🔄 **OpenAI GPT** (Ready to integrate)
- 🔄 **Anthropic Claude** (Ready to integrate)

## ✅ **Project Status**

### **Completed Features**
- [x] **AI Chat Integration** - Google Gemini API
- [x] **Web Search** - Google Custom Search API
- [x] **Payment System** - Stripe integration (test mode)
- [x] **Plugin System** - Weather, Stock, Dictionary
- [x] **File Upload** - Image processing
- [x] **Authentication** - Firebase Auth
- [x] **Database** - Firebase Firestore
- [x] **Chat History** - Persistent storage
- [x] **Responsive Design** - Mobile-friendly
- [x] **Production Deployment** - Azure Static Web Apps
- [x] **CI/CD Pipeline** - Automatic deployments

### **Roadmap**
- [ ] **Multi-LLM Support** - OpenAI, Anthropic integration
- [ ] **Advanced Plugins** - More data sources
- [ ] **User Dashboard** - Analytics and usage stats
- [ ] **API Rate Limiting** - Usage controls
- [ ] **Advanced Search** - Filters and sorting

## 🏗️ **Tech Stack**

### **Frontend**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **State Management**: Redux Toolkit + Redux Persist
- **Styling**: TailwindCSS + NextUI + Tremor
- **Icons**: Heroicons + Remix Icons

### **Backend & APIs**
- **Runtime**: Next.js API Routes (Edge Runtime)
- **AI**: Google Gemini API
- **Search**: Google Custom Search API
- **Payment**: Stripe API
- **Weather**: OpenWeatherMap API
- **Stocks**: Alpha Vantage + Finnhub APIs
- **Dictionary**: Free Dictionary API

### **Infrastructure**
- **Hosting**: Azure Static Web Apps
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **CI/CD**: GitHub Actions + Azure
- **Analytics**: Vercel Analytics

## 🔗 **Links**

- **🚀 Live Demo**: [https://agreeable-bay-0e0d63510.azurestaticapps.net](https://agreeable-bay-0e0d63510.azurestaticapps.net)
- **💳 Pricing Page**: [https://agreeable-bay-0e0d63510.azurestaticapps.net/pricing](https://agreeable-bay-0e0d63510.azurestaticapps.net/pricing)
- **📱 Weather Plugin**: [https://agreeable-bay-0e0d63510.azurestaticapps.net/plugins/weather](https://agreeable-bay-0e0d63510.azurestaticapps.net/plugins/weather)
- **📈 Stock Plugin**: [https://agreeable-bay-0e0d63510.azurestaticapps.net/plugins/stocks](https://agreeable-bay-0e0d63510.azurestaticapps.net/plugins/stocks)
- **📚 Dictionary Plugin**: [https://agreeable-bay-0e0d63510.azurestaticapps.net/plugins/dictionary](https://agreeable-bay-0e0d63510.azurestaticapps.net/plugins/dictionary)

## 🤝 **Contributing**

We welcome contributions! To contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📄 **License**

This project is licensed under the [AGPL-3.0 license](LICENSE).

## 📞 **Contact & Support**

- **GitHub Issues**: [Report bugs or request features](https://github.com/sonamgupta01/omniplex/issues)
- **Live Demo**: [Try the application](https://agreeable-bay-0e0d63510.azurestaticapps.net)

---

**⭐ Star this repository if you found it helpful!**

Made with ❤️ using Next.js, React, and TypeScript
