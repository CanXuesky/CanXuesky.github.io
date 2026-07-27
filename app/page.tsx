const news = [
  { date: "2026.07", text: "全国三维数字化创新设计大赛18周年精英联赛（2025—2026）一等奖" },
  { date: "2025", text: "2025年度优秀共青团员" },
  { date: "2024—2025", text: "2024—2025学年 一等奖学金" },
  { date: "2024—2025", text: "2024—2025学年 优秀学生" },
];

const education = [
  {
    period: "2024.09 — 至今",
    degree: "本科生",
    school: "中国海洋大学 · 工程学院",
    detail: "专业与其他教育信息可在确认后继续补充。",
  },
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
        <a className="wordmark" href="#top" aria-label="返回首页">
          <span>YN</span><strong>[你的姓名]</strong>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#about">简介</a>
          <a href="#news">动态</a>
          <a href="#education">教育</a>
          <a href="#publications">论文</a>
          <a href="#honors">荣誉</a>
        </nav>
        <a className="contact-link" href="mailto:yourname@example.com">联系我 <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Student Researcher · Academic Portfolio</p>
            <h1>你好，我是<span>[你的姓名]</span></h1>
            <p className="hero-lead">
              我是<span>中国海洋大学工程学院</span>本科生。我的研究工作涉及
              <span>地震韧性时空演化</span>及<span>机器学习应用</span>。
            </p>
            <p className="hero-sub">
              目前已完成一项关于中国西部地震韧性及其关联因素的研究。
              这里后续可以继续补充个人简介、研究兴趣与学术目标。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#publications">查看研究成果 <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="#">下载简历 <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="profile-card" aria-label="个人信息摘要">
            <div className="portrait-placeholder"><span>YN</span><small>PHOTO / MONOGRAM</small></div>
            <div className="profile-meta">
              <p><span>当前身份</span>本科生</p>
              <p><span>所在院校</span>中国海洋大学</p>
              <p><span>所在学院</span>工程学院</p>
            </div>
            <div className="availability"><i aria-hidden="true" />欢迎学术交流与合作</div>
          </aside>
        </section>

        <section className="section" id="news">
          <div className="section-heading"><p className="section-index">01 / News</p><h2>最新动态</h2><p>近期学业、竞赛与荣誉动态。</p></div>
          <div className="news-list">
            {news.map((item, index) => (
              <article className="news-item" key={item.date + index}>
                <time>{item.date}</time><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="section-index">02 / Education</p><h2>教育经历</h2><p>学习经历与所在院校。</p></div>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.period}>
                <time>{item.period}</time>
                <div><h3>{item.degree}</h3><p className="institution">{item.school}</p><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><p className="section-index">03 / Publications</p><h2>论文</h2><p>已发表的代表性研究成果。</p></div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="publication-badge"><span>{publication.year}</span><strong>{publication.venue}</strong></div>
                <div className="publication-content">
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors} ({publication.year})</p>
                  <p className="citation">{publication.citation}</p>
                  <p className="publication-note">{publication.note}</p>
                  <div className="publication-links"><a href={publication.doi} target="_blank" rel="noreferrer">DOI / Paper <span aria-hidden="true">↗</span></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="honors">
          <div className="section-heading"><p className="section-index">04 / Honors</p><h2>荣誉与奖项</h2><p>学业表现、学生工作与竞赛成果。</p></div>
          <div className="honor-list">
            {honors.map((honor) => (
              <article className="honor-item" key={honor.year + honor.title}>
                <time>{honor.year}</time><h3>{honor.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div><p className="footer-title">Let&apos;s connect.</p><a href="mailto:yourname@example.com">yourname@example.com ↗</a></div>
        <div className="footer-meta"><p>GitHub · Google Scholar · ORCID</p><p>© 2026 [你的姓名]. Built with care.</p></div>
      </footer>
    </div>
  );
}