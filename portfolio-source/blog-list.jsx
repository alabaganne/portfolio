// ============================================
// Blog listing page
// ============================================
const { useState: useStateList, useMemo: useMemoList } = React;

function BlogHero({ count }) {
  return (
    <header className="blog-hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="hero-orb a" />
      <div className="hero-orb b" />
      <div className="container blog-hero-inner">
        <div className="hero-eyebrow">
          <span className="dot"></span>
          Writing &amp; notes · {count} posts
        </div>
        <h1>
          The <span className="accent">engineering notebook</span>.
        </h1>
        <p className="hero-sub" style={{ maxWidth: 720 }}>
          Practical notes from shipping production software — RAG systems, full-stack patterns,
          background jobs, and the messy reality of running a SaaS solo.
        </p>
      </div>
    </header>
  );
}

function FeaturedPost({ post }) {
  return (
    <a href={`Blog Post.html?slug=${post.slug}`} className="featured-post reveal">
      <div className="featured-media">
        <BlogCover post={post} variant="featured" />
      </div>
      <div className="featured-body">
        <div className="featured-meta">
          <span className="category-pill">{post.category}</span>
          <span className="dot-sep" />
          <span>{post.date}</span>
          <span className="dot-sep" />
          <span>{post.readTime}</span>
        </div>
        <h2 className="featured-title">{post.title}</h2>
        <p className="featured-excerpt">{post.excerpt}</p>
        <div className="featured-tags">
          {post.tags.slice(0, 4).map((t) => <span className="tag" key={t}>#{t}</span>)}
        </div>
        <span className="featured-cta">
          Read the post <Icon name="arrow" size={16} />
        </span>
      </div>
    </a>
  );
}

function PostCard({ post }) {
  return (
    <a href={`Blog Post.html?slug=${post.slug}`} className="post-card reveal">
      <BlogCover post={post} variant="card" />
      <div className="post-card-body">
        <div className="post-card-meta">
          <span className="category-pill subtle">{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-card-foot">
          <span className="read-time">{post.readTime}</span>
          <span className="read-arrow">
            <Icon name="arrow" size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}

function BlogList() {
  useRevealBlog();
  const [filter, setFilter] = useStateList("All");
  const categories = useMemoList(
    () => ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))],
    []
  );
  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const rest = POSTS.filter((p) => p !== featured);
  const filtered = filter === "All" ? rest : rest.filter((p) => p.category === filter);

  return (
    <>
      <BlogNav active="blog" />
      <BlogHero count={POSTS.length} />

      {/* Featured */}
      <section className="section-pad" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 32 }}>
            <span className="section-tag">Featured</span>
          </div>
          <FeaturedPost post={featured} />
        </div>
      </section>

      {/* All posts */}
      <section className="section-pad" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">All posts</span>
            <h2>Everything I've written.</h2>
          </div>
          <div className="project-filters reveal" style={{ marginBottom: 36 }}>
            {categories.map((c) => (
              <button key={c}
                className={`filter-btn ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}>
                {c}
                {c !== "All" && (
                  <span style={{ marginLeft: 6, opacity: .6, fontSize: 11 }}>
                    {POSTS.filter((p) => p.category === c).length}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="posts-grid">
            {filtered.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--muted)" }}>
              Nothing in this category yet.
            </div>
          )}
        </div>
      </section>

      <BlogFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BlogList />);
