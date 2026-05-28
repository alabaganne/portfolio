// ============================================
// Blog data
// ============================================

const POSTS = [
  {
    slug: "rag-systems-production",
    title: "Building a RAG system that actually works in production",
    excerpt: "Most RAG demos look magical and break the moment users upload a real 80-page contract. Here's what I learned shipping a legal-grade knowledge base on FastAPI, pgvector and Vertex AI.",
    category: "AI",
    date: "May 12, 2026",
    readTime: "12 min read",
    featured: true,
    cover: "rag",
    accent: "#2563eb",
    tags: ["RAG", "FastAPI", "pgvector", "Vertex AI", "DSPy"],
    author: "Ala Baganne",
  },
  {
    slug: "angularjs-to-react",
    title: "From AngularJS to React: 5 lessons after a 4-year migration",
    excerpt: "We didn't rewrite the app overnight. Here's how we incrementally moved a 25K-user healthcare product off AngularJS without breaking production or our backs.",
    category: "Frontend",
    date: "Apr 28, 2026",
    readTime: "9 min read",
    cover: "migration",
    accent: "#0ea5e9",
    tags: ["AngularJS", "React", "Migration", "Healthcare"],
    author: "Ala Baganne",
  },
  {
    slug: "shipping-menumate-solo",
    title: "How I shipped MenuMate solo: building a SaaS as a one-person team",
    excerpt: "Design, code, marketing, support — when there's nobody else, every hour matters. The tooling, decisions, and shortcuts that let me ship a real SaaS while holding a full-time job.",
    category: "Building",
    date: "Apr 03, 2026",
    readTime: "11 min read",
    cover: "menumate",
    accent: "#1d4ed8",
    tags: ["SaaS", "Solo Founder", "Next.js", "Supabase"],
    author: "Ala Baganne",
  },
  {
    slug: "background-jobs-fastapi",
    title: "Background jobs without the pain: Cloud Tasks, Pub/Sub and FastAPI",
    excerpt: "OCR, embeddings, document conversion — anything you can't do in 200ms belongs out of the request lifecycle. A pattern that keeps your API responsive and your code testable.",
    category: "Backend",
    date: "Mar 17, 2026",
    readTime: "8 min read",
    cover: "queue",
    accent: "#1e40af",
    tags: ["FastAPI", "GCP", "Cloud Tasks", "Pub/Sub"],
    author: "Ala Baganne",
  },
  {
    slug: "dspy-in-practice",
    title: "DSPy in practice: making LLMs learn from a handful of examples",
    excerpt: "Prompt engineering is fragile. Few-shot is repetitive. DSPy gives you a third option — and once it clicked, I never wrote a giant prompt template again.",
    category: "AI",
    date: "Feb 22, 2026",
    readTime: "10 min read",
    cover: "dspy",
    accent: "#2563eb",
    tags: ["DSPy", "LLM", "Prompt engineering"],
    author: "Ala Baganne",
  },
  {
    slug: "booking-systems",
    title: "Designing booking systems that beat off-the-shelf solutions",
    excerpt: "Calendly and Square get you 80% there. The last 20% — no-show protection, dynamic pricing, custom approval flows — is why clients pay you to build it from scratch.",
    category: "Product",
    date: "Jan 30, 2026",
    readTime: "7 min read",
    cover: "booking",
    accent: "#0f172a",
    tags: ["Booking", "Next.js", "Square", "Freelance"],
    author: "Ala Baganne",
  },
];

// Full content of one post — extend with more <article-body> shaped data later
const POST_BODY = {
  "rag-systems-production": [
    { kind: "lede", text: "RAG demos always look magical. You upload a PDF, ask a question, get a glowing answer with citations. Then your users upload an 80-page contract in three languages with scanned signatures and embedded tables, and the magic dies." },
    { kind: "p", text: "I've spent the last year building NORA's knowledge base — a RAG system law firms and notaries use to query their own document libraries. Along the way I rebuilt the chunking pipeline three times, rewrote retrieval twice, and threw out the first version of citations entirely. Here's what survived." },
    { kind: "h2", text: "The chunker is the product" },
    { kind: "p", text: "It's tempting to start with the model. Don't. The single biggest lever on output quality is what you put in the index, and that's owned by the chunker. A naïve fixed-window splitter will happily slice a sentence in half, split a contract clause from its title, or merge two unrelated provisions into one chunk because they happened to fit." },
    { kind: "p", text: "What worked for us: a structure-aware chunker that walks the document tree first (headings, clauses, articles), then falls back to semantic sentence boundaries within sections, with hard ceilings so no chunk exceeds the model's effective context. We keep section titles in chunk metadata, not just in the text — retrieval can use them, and so can the answering model." },
    { kind: "callout", text: "If you can't explain what's in a chunk in one sentence, your chunker isn't done." },
    { kind: "h2", text: "Hybrid retrieval, every time" },
    { kind: "p", text: "Pure vector search is great at fuzzy matches and terrible at proper nouns. Pure BM25 is the opposite. The right answer is both, fused. We use pgvector for embeddings and Postgres full-text for lexical, with reciprocal rank fusion at the top. The cost is tiny; the recall gain on names, references, and dates is enormous." },
    { kind: "h2", text: "Citations or it didn't happen" },
    { kind: "p", text: "Lawyers don't trust answers. They trust sources. Every claim in our generated answers links back to the exact page in the exact document — and clicking it scrolls the viewer to the highlighted passage. This was the single most-requested feature, and the one that converted skeptical users into daily ones." },
    { kind: "p", text: "Engineering-wise: we ask the model to emit answers with inline reference IDs, then post-process to bind them to the retrieved chunks. If a claim has no binding, we drop the sentence rather than risk a hallucinated source." },
    { kind: "h2", text: "Test it like an API, not a chatbot" },
    { kind: "p", text: "RAG output drifts. New documents change retrieval, new embeddings change scores, a model update changes phrasing. We run a golden-question suite on every deploy — 200+ real user queries with expected source pages — and alert on retrieval recall, not just answer correctness. If the right page stops appearing in the top-5, we know before users do." },
    { kind: "h2", text: "Closing thoughts" },
    { kind: "p", text: "There's a phase where everything feels like prompt engineering. Then there's a phase where you realize 90% of your wins come from boring, measurable infrastructure work — better chunkers, better evaluation, better data plumbing. Stay in phase two as long as you can." },
    { kind: "p", text: "If you're building something similar and want to compare notes, I'd love to hear from you." },
  ],
};

window.POSTS = POSTS;
window.POST_BODY = POST_BODY;
