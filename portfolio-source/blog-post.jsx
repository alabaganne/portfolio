// ============================================
// Blog post (detail) page
// ============================================
const { useEffect: useEffectPost, useMemo: useMemoPost } = React;

function getSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug") || POSTS[0].slug;
}

function ArticleHero({ post }) {
  return (
    <header className="article-hero">
      <div className="article-hero-bg">
        <BlogCover post={post} variant="hero" />
      </div>
      <div className="article-hero-overlay" />
      <div className="container article-hero-inner">
        <a href="Blog.html" className="back-link">
          ← All posts
        </a>
        <div className="article-meta-top">
          <span className="category-pill">{post.category}</span>
          <span className="dot-sep" />
          <span>{post.date}</span>
          <span className="dot-sep" />
          <span>{post.readTime}</span>
        </div>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-lede">{post.excerpt}</p>
        <div className="article-author">
          <div className="author-avatar">AB</div>
          <div>
            <div className="author-name">{post.author}</div>
            <div className="author-role">Full-Stack Software Engineer</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArticleBody({ post }) {
  const body = POST_BODY[post.slug];
  return (
    <article className="article-body reveal">
      {body ? (
        body.map((b, i) => {
          if (b.kind === "lede") return <p className="lede" key={i}>{b.text}</p>;
          if (b.kind === "h2") return <h2 key={i}>{b.text}</h2>;
          if (b.kind === "h3") return <h3 key={i}>{b.text}</h3>;
          if (b.kind === "callout") return (
            <aside className="callout" key={i}>
              <Icon name="spark" size={20} color="var(--primary)" />
              <p>{b.text}</p>
            </aside>
          );
          if (b.kind === "code") return <pre key={i}><code>{b.text}</code></pre>;
          return <p key={i}>{b.text}</p>;
        })
      ) : (
        <>
          <p className="lede">{post.excerpt}</p>
          <p>
            This post is being drafted. The full article will appear here soon — in the meantime,
            check out the rest of the writing or reach out if you'd like an early preview.
          </p>
          <p>
            I publish in long form once I have something worth sharing, usually after shipping
            the work in production. If the topic above is interesting to you and you'd like the
            notebook version sooner, drop me a line.
          </p>
        </>
      )}

      <div className="article-tags">
        {post.tags.map((t) => <span className="tag" key={t}>#{t}</span>)}
      </div>

      <div className="share-row">
        <span className="share-label">Share</span>
        <a className="share-btn" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a className="share-btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="share-btn" href={`mailto:?subject=${encodeURIComponent(post.title)}`}>
          Email
        </a>
      </div>
    </article>
  );
}

function AuthorBox({ post }) {
  return (
    <aside className="author-box reveal">
      <div className="author-avatar lg">AB</div>
      <div>
        <div className="author-name">Written by {post.author}</div>
        <p>
          Full-Stack Software Engineer building production web apps and AI document systems.
          Working on NORA (Wequity) and RetainYourBrain (Retain Health), and shipping side
          projects from Monastir, Tunisia.
        </p>
        <div className="author-links">
          <a href="https://linkedin.com/in/alabaganne" target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={14} /> LinkedIn
          </a>
          <a href="https://github.com/alabaganne" target="_blank" rel="noreferrer">
            <Icon name="github" size={14} /> GitHub
          </a>
          <a href="mailto:alabaganne9@gmail.com">
            <Icon name="mail" size={14} /> Email
          </a>
        </div>
      </div>
    </aside>
  );
}

function RelatedPosts({ current }) {
  const related = POSTS.filter((p) => p.slug !== current.slug).slice(0, 3);
  return (
    <section className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: 32 }}>
          <span className="section-tag">Keep reading</span>
          <h2>More from the notebook.</h2>
        </div>
        <div className="posts-grid">
          {related.map((p) => (
            <a href={`Blog Post.html?slug=${p.slug}`} className="post-card reveal" key={p.slug}>
              <BlogCover post={p} variant="card" />
              <div className="post-card-body">
                <div className="post-card-meta">
                  <span className="category-pill subtle">{p.category}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="post-card-title">{p.title}</h3>
                <p className="post-card-excerpt">{p.excerpt}</p>
                <div className="post-card-foot">
                  <span className="read-time">{p.readTime}</span>
                  <span className="read-arrow"><Icon name="arrow" size={14} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPostApp() {
  useRevealBlog();
  const slug = useMemoPost(() => getSlugFromUrl(), []);
  const post = useMemoPost(() => POSTS.find((p) => p.slug === slug) || POSTS[0], [slug]);

  useEffectPost(() => {
    document.title = `${post.title} — Ala Baganne`;
  }, [post]);

  return (
    <>
      <BlogNav active="blog" />
      <ArticleHero post={post} />
      <section className="article-wrap">
        <div className="container article-container">
          <ArticleBody post={post} />
          <AuthorBox post={post} />
        </div>
      </section>
      <RelatedPosts current={post} />
      <BlogFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BlogPostApp />);
