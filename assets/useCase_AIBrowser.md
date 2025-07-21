# Use Case: AI Browsers - The Conversation-First Web

## Executive Summary

AI Browsers represent a paradigm shift as fundamental as the transition from command-line to graphical interfaces. They reverse the traditional interaction hierarchy, making conversation the primary interface while web pages become contextual data sources. This transformation upends core UX assumptions about user journeys, information architecture, and the very purpose of website design. For UX professionals, this isn't just another technology trend—it's a fundamental reimagining of how users will discover and interact with digital information, requiring us to evolve from interface designers to conversation architects.

## The Fundamental Shift

The fundamental shift from traditional web interaction to AI browser interaction can be visualized through two contrasting models. The traditional model follows a linear, designer-controlled path where users navigate through predefined structures to discover and consume information. The AI browser model represents a complete reversal—users ask questions, and AI systems assemble context, analyze multiple sources, and deliver conversational responses.

### Traditional Web Interaction Model
```
User → Website Navigation → Content Discovery → Information Consumption
```

### AI Browser Interaction Model  
```
User Question → AI Context Assembly → Multi-Source Analysis → Conversational Response
```

This reversal transforms every aspect of the user experience: from passive navigation to active inquiry, from single-source consumption to multi-source synthesis, and from designer-controlled journeys to user-driven exploration.

## Core Concept: Reversing the Interaction Hierarchy

### Current State: Interface-Driven

In the current interface-driven state, UX designers and product owners maintain control over information access by determining what data users see and how they see it. This creates a system where users are forced to learn and adapt to each site's unique information architecture, component structure and data displays. In large enterprise organization applications this also holds true, often resulting in a single user journey spanning across different types of experiences as they  navigate through organizational silos. All of this sits on top of a search and discovery paragigm stuck in a experience of; find, navigate to a page, read, repeat.

The designer acts as gatekeeper, with information access mediated through carefully designed experiences that prioritize the designer's vision over the user's natural inquiry patterns. Nothing is threaded, nothing is fluid to each person's needs and path.

- **UX Controls Access**: Designers determine what data users see and how they see it
- **Forced Navigation**: Users must learn and adapt to each site's information architecture
- **Single-Source Interaction**: Users engage with one website/application at a time
- **Designer as Gatekeeper**: Information access mediated through designed experiences

### Future State: Conversation-Driven

In a conversation-driven state, users take control of inquiry through natural language questions that drive information discovery and journey. AI systems mediate access by interpreting user intent and intelligently aggregating relevant data from multiple sources. Background tabs and websites transform into data sources for AI, while users become explorers with direct access to information without the constraints of rigid interfaces.

In the AI browser, the user is in control of display and journey. With their collection of sources, they can focus on their tasks, using the browser conversation to extract information, coordinate across disparate sources, and even execute actions once agents are fully integrated. 

- **User Controls Inquiry**: Natural language questions drive information discovery
- **AI Mediates Access**: Intelligent systems interpret intent and aggregate relevant data
- **Multi-Source Context**: Background tabs and websites become data sources for AI
- **User as Explorer**: Direct access to information without interface constraints

## Technical Implementation

### AI Browser Architecture

The technical implementation of AI browsers requires a sophisticated three-layer architecture that fundamentally reimagines how web content is accessed and processed. For UX designers, understanding this architecture is crucial because it determines how content must be structured and presented to enable effective AI interpretation and synthesis.

The context assembly layer transforms multiple browser tabs into passive data sources, with AI continuously indexing and understanding available content while maintaining real-time context awareness across all open resources. The conversation interface serves as the primary interaction method through natural language, where questions can reference any open tab or accessible data source, and responses synthesize information from multiple sources. The background processing layer allows websites to load and maintain context without active user engagement, with content continuously parsed and made available for AI queries, effectively transforming traditional "browsing" into "context preparation."

**Context Assembly Layer:**
- Multiple browser tabs serve as passive data sources
- AI continuously indexes and understands available content
- Real-time context awareness across all open resources

**Conversation Interface:**

The conversation interface represents the primary interaction method through natural language, where users can ask questions that reference any open tab or accessible data source. This interface enables responses that synthesize information from multiple sources, creating a unified conversational experience that transcends traditional website boundaries.

If the conversation response structure is created in such a way as to properly attribute answers and data, the user can confirm the systems output. Within the conversation thread, being able to dig into the; tab, source, information location, all build confidence and trust. Also, if outside information is used to fill in gaps or augment responsese, this can be clearly indicated.

- Primary interaction through natural language
- Questions can reference any open tab or accessible data source
- Responses synthesize information from multiple sources

**Background Processing:**

The background processing layer fundamentally transforms how websites operate, allowing them to load and maintain context without active user engagement. Content is continuously parsed and made available for AI queries, effectively transforming traditional "browsing" into "context preparation" where websites serve as passive data sources rather than active destinations.

- Websites load and maintain context without active user engagement
- Content continuously parsed and made available for AI queries
- Traditional "browsing" becomes "context preparation"

### Example User Flow

This financial services scenario demonstrates how AI browsers transform complex, multi-step financial analysis into conversational interactions. A user begins by logging into their financial site and opening multiple relevant pages—positions, activity, and portfolio overview—in individual background tabs. The user then initiates their first question about risk exposure, and the AI processes this by analyzing content across all open tabs, delivering a comprehensive response with visualizations of position and sector distribution across accounts, along with guidance on weighting and balancing resources. The conversation naturally flows to a follow-up question about dividend investing, where the AI again processes the same context to provide historical payment analysis and future projections with detailed visualizations showing payment increases over time. This demonstrates how the same contextual setup enables multiple related inquiries without requiring users to navigate between different interfaces or remember complex data relationships.

The following steps break down this conversational flow:

**Financial Analysis Scenario:**
1. **Context Setup**: User logs into their financial site and opens; the positions page, the activity page, the portfolio overview page, in individual background tabs
2. **Question Initiation 1**: "What is my level of risk with too much exposure to a given position or sector?"
3. **AI Processing**: Browser AI analyzes content from all open tabs 
4. **Synthesized Response**: Comprehensive answer drawing from multiple sources and provides visualization of position and sector distribution across accounts. Gives guidance on weighting and resources to understand balancing.
5. **Follow-up Exploration 2**: "As a dividend investor, chart out my last 4 quarters of payments and run a 2 year projection based on my dividend reinvestment strategy."
6. **AI Processing**: Browser AI analyzes content from all open tabs
7. **Synthesized Response**: Comprehensive answer drawing from multiple sources. Provides visualization of past payments and reinvestments with totals by account, position. Provides visualization of projection charting showing hypothetical payment increases over time.

## Implications for UX Design

### The Death of Traditional Information Architecture

**Current UX Paradigms Under Threat:**

The rise of AI browsers doesn't just threaten traditional UX design patterns; it renders them obsolete, fundamentally challenging the core assumptions that have guided web design for decades. Navigation menus, once the cornerstone of website usability, become irrelevant when AI can surface any content through natural language queries. Page hierarchies lose their meaning as information is accessed conversationally rather than through structured navigation paths. User journey design must shift from creating predefined paths to preparing context for AI interpretation. Perhaps most dramatically, landing pages evolve from conversion-focused tools to AI-parseable content libraries, requiring a complete reimagining of their purpose and structure.

These changes represent nothing short of the death of traditional information architecture as we know it:

- Navigation menus become irrelevant when AI can surface any content
- Page hierarchies lose meaning when information is accessed conversationally
- User journey design shifts from paths to context preparation
- Landing pages evolve from conversion tools to AI-parseable content libraries

**New UX Responsibilities:**

The shift to AI browsers fundamentally redefines the UX designer's role, requiring new skills and approaches that prioritize AI interpretation over human navigation. Designers must now focus on AI readable content design, structuring information in ways that artificial intelligence can effectively parse and understand. This includes context optimization, ensuring that content provides rich, comprehensive context when accessed as a background source rather than a primary destination. Intent mapping becomes crucial as designers must understand how content will be discovered through natural language questions rather than traditional navigation patterns. Perhaps most importantly, designers need to consider cross-source experience design, creating content that works effectively when synthesized with information from other websites and data sources.

This new paradigm requires constructing what might be called "a source library behind the visual page"—where the visual page serves primarily as orientation and entry point, while the underlying base information used to construct it becomes directly accessible to AI systems. The traditional web page becomes a facade, with the real value lying in the comprehensive, structured data and detailed content that powers it. This source library approach enables AI browsers to access the full depth of information rather than being limited to what's visually presented, allowing users to ask questions that require synthesis of data that might never be explicitly shown on any single page.

These new responsibilities can be broken down into four key areas:

- **AI-Readable Content Design**: Structuring information for AI interpretation
- **Context Optimization**: Ensuring content provides rich context when accessed as background source
- **Intent Mapping**: Understanding how content will be discovered through questions rather than navigation
- **Cross-Source Experience**: Designing for multi-site information synthesis

**Current Limitations & Future Challenges:**

It's important to acknowledge that the page context and open tabs approach represents just the first baby step toward true AI browser functionality. In this current workflow solution, users still bear the full burden of context discovery—they must find and load all the right pages, relying on traditional browsing, searching, and historical references to build their data collection. The AI may be able to synthesize information, but the user remains responsible for ensuring the correct data is available for analysis.

The practical realities of these scenarios reveal additional user responsibilities that haven't been eliminated. Users must ensure their context tabs display the complete dataset they need—if a positions view truncates rows, users need to expand the view to show all accounts and positions. Activity pages typically default to short date ranges, requiring users to adjust filters to capture the full scope of data needed for their queries. This means that while AI browsers promise conversational simplicity, users still need to understand their data sources well enough to prepare them properly for AI consumption.

These limitations highlight a fundamental challenge: today's websites are not built for agentic interaction. Each site uses different naming conventions, exposes data in different formats, and follows nonstandard patterns. As AI agents become more sophisticated, they will need to adapt to this heterogeneity, but the burden of context preparation will likely remain with users for the foreseeable future. 


### From User Journeys to Question Journeys

The shift from traditional user journeys to question journeys represents a fundamental reorientation of UX design philosophy. Traditional UX focuses on guiding users through predefined paths, optimizing conversion funnels, and reducing cognitive load through information hierarchy. In contrast, AI browser UX requires enabling user questions to dictate data queries and assembly, providing comprehensive context for AI interpretation, designing content that works in synthesis with other sources, and creating "question-worthy" information experiences that can be discovered and synthesized conversationally. Content delivery must shift from purpose-built snippets to comprehensive, topic-based research papers that provide rich context for AI interpretation and user inquiry.

This shift can be summarized by contrasting the core focus areas of each approach:

**Traditional UX Focus:**
- Guiding users through predefined paths
- Optimizing conversion funnels
- Reducing cognitive load through information hierarchy

**AI Browser UX Focus:**
- Enabling user questions to drive data queries and assembly
- Providing comprehensive context for AI interpretation
- Designing content that works in synthesis with other sources
- Creating "question-worthy" information experiences


## Conclusion: The Conversation-First Future

AI Browsers represent more than a new technology, they embody a fundamental shift toward conversation-first digital interaction. For UX professionals, this means evolving from interface designers to conversation enablers, from path creators to context architects, and from navigation designers to question facilitators.

The designers who recognize this shift early and begin developing skills in AI-readable content design, cross-source experience planning, and conversational information architecture will be positioned to lead the next generation of digital experiences. Those who continue designing for traditional browsing patterns risk becoming irrelevant in the conversation-first future.

**The question isn't whether AI Browsers will change how we design digital experiences—it's whether we'll be ready when they do.**

The future of UX design is conversational. The question is: are you ready to start designing for it?

---

*This use case represents Tom Murphy's perspective on the future of web interaction, drawing from experience scaling products at Amazon and implementing AI-powered interfaces at Fidelity Investments.* 