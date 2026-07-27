const news = [
  { date: "2026.07", text: "全国三维数字化创新设计大赛18周年精英联赛（2025—2026）一等奖" },
  { date: "2025", text: "2025年度优秀共青团员" },
  { date: "2024—2025", text: "2024—2025学年 一等奖学金" },
  { date: "2024—2025", text: "2024—2025学年 优秀学生" },
];

const publications = [
  {
    year: "2026",
    venue: "Frontiers in Earth Science",
    title: "Research on the spatiotemporal evolution and associated factors of seismic resilience in western China using machine learning",
    authors: "Tang B, Fan G, Wang J and Xue C",
    citation: "Front. Earth Sci. 14:1769685",
    note: "JCR 2区 · 中科院3区",
    doi: "https://doi.org/10.3389/feart.2026.1769685",
  },
];

const honors = [
  { year: "2026.07", title: "全国三维数字化创新设计大赛18周年精英联赛（2025—2026）一等奖" },
  { year: "2025", title: "2025年度优秀共青团员" },
  { year: "2024—2025", title: "2024—2025学年 一等奖学金" },
  { year: "2024—2025", title: "2024—2025学年 优秀学生" },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页"><span>XC</span><strong>薛灿</strong></a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#about">简介</a><a href="#news">动态</a><a href="#education">教育</a><a href="#publications">论文</a><a href="#honors">荣誉</a>
        </nav>
        <a className="contact-link" href="mailto:2380863003@qq.com">联系我 <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Student Researcher · Engineering AI</p>
            <h1>你好，我是<span>薛灿</span></h1>
            <p className="hero-lead">我是<span>中国海洋大学工程学院</span>本科生。</p>
            <div className="focus-chips" aria-label="研究关键词">
              <span>Reinforcement Learning</span><span>Post-training</span><span>Engineering AI</span>
            </div>
            <div className="hero-contacts" aria-label="联系方式">
              <a href="mailto:2380863003@qq.com"><span className="contact-icon" aria-hidden="true">✉</span><span><small>Email</small>2380863003@qq.com</span></a>
              <a href="https://github.com/shuixin1221" target="_blank" rel="noreferrer"><span className="contact-icon contact-icon-github" aria-hidden="true">GH</span><span><small>GitHub</small>shuixin1221</span></a>
            </div>
          </div>

          <aside className="profile-card" aria-label="个人照片与联系方式">
            <div className="portrait-wrap"><img src="/profile.png" alt="薛灿的个人照片" /></div>
            <div className="profile-contact-grid">
              <a href="mailto:2380863003@qq.com"><span>邮箱</span><strong>2380863003@qq.com</strong></a>
              <a href="https://github.com/shuixin1221" target="_blank" rel="noreferrer"><span>GitHub</span><strong>shuixin1221 ↗</strong></a>
            </div>
          </aside>
        </section>

        <section className="section" id="news">
          <div className="section-heading"><p className="section-index">01 / News</p><h2>最新动态</h2></div>
          <div className="news-list">
            {news.map((item, index) => (
              <article className="news-item reveal-card" key={item.date + index}><time>{item.date}</time><p>{item.text}</p><span className="news-mark" aria-hidden="true">✦</span></article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="section-index">02 / Education</p><h2>教育经历</h2></div>
          <div className="timeline">
            <article className="timeline-item reveal-card">
              <time>2024.09 — 至今</time><div><h3>本科生</h3><p className="institution">中国海洋大学 · 工程学院</p></div>
            </article>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><p className="section-index">03 / Publications</p><h2>论文</h2></div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication reveal-card" key={publication.title}>
                <div className="publication-badge"><span>{publication.year}</span><strong>{publication.venue}</strong></div>
                <div className="publication-content">
                  <h3>{publication.title}</h3><p className="authors">{publication.authors} ({publication.year})</p>
                  <p className="citation">{publication.citation}</p><p className="publication-note">{publication.note}</p>
                  <div className="publication-links"><a href={publication.doi} target="_blank" rel="noreferrer">DOI / Paper <span aria-hidden="true">↗</span></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="honors">
          <div className="section-heading"><p className="section-index">04 / Honors</p><h2>荣誉与奖项</h2></div>
          <div className="honor-list">
            {honors.map((honor) => (
              <article className="honor-item reveal-card" key={honor.year + honor.title}><time>{honor.year}</time><h3>{honor.title}</h3></article>
            ))}
          </div>
        </section>
      </main>

      <footer className="simple-footer"><p>© 2026 薛灿</p><p>中国海洋大学 · 工程学院</p></footer>
    </div>
  );
}