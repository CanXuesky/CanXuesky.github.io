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
    detail: "研究兴趣包括强化学习、大模型后训练与海洋工程智能化应用。",
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
        <a className="wordmark" href="#top" aria-label="返回首页"><span>YN</span><strong>[你的姓名]</strong></a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#about">简介</a><a href="#news">动态</a><a href="#education">教育</a><a href="#publications">论文</a><a href="#honors">荣誉</a>
        </nav>
        <a className="contact-link" href="mailto:2380863003@qq.com">联系我 <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Student Researcher · Engineering AI</p>
            <h1>你好，我是<span>[你的姓名]</span></h1>
            <p className="hero-lead">
              我是<span>中国海洋大学工程学院</span>本科生，关注
              <span>强化学习</span>与<span>大模型后训练</span>，并探索其在海洋工程数值仿真中的应用。
            </p>
            <p className="hero-sub">
              当前围绕 OrcaFlex 工作流开展学习与实践，希望将智能方法用于仿真参数生成、工况分析、结果解读和优化决策，让复杂的工程仿真流程更加自动化、可复用。
            </p>
            <div className="focus-chips" aria-label="研究关键词">
              <span>Reinforcement Learning</span><span>Post-training</span><span>OrcaFlex</span><span>Engineering AI</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#publications">查看研究成果 <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://github.com/shuixin1221" target="_blank" rel="noreferrer">访问 GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside className="profile-card" aria-label="个人信息摘要">
            <div className="portrait-wrap"><img src="/profile.png" alt="[你的姓名]的个人照片" /></div>
            <div className="profile-meta">
              <p><span>当前身份</span>本科生</p>
              <p><span>研究方向</span>强化学习 · 后训练</p>
              <p><span>工程应用</span>OrcaFlex</p>
            </div>
            <div className="availability"><i aria-hidden="true" />欢迎学术交流与合作</div>
          </aside>
        </section>

        <section className="section" id="news">
          <div className="section-heading"><p className="section-index">01 / News</p><h2>最新动态</h2><p>近期学业、竞赛与荣誉动态。</p></div>
          <div className="news-list">
            {news.map((item, index) => (
              <article className="news-item reveal-card" key={item.date + index}>
                <time>{item.date}</time><p>{item.text}</p><span className="news-mark" aria-hidden="true">✦</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="section-index">02 / Education</p><h2>教育经历</h2><p>学习经历与所在院校。</p></div>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item reveal-card" key={item.period}>
                <time>{item.period}</time><div><h3>{item.degree}</h3><p className="institution">{item.school}</p><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><p className="section-index">03 / Publications</p><h2>论文</h2><p>已发表的代表性研究成果。</p></div>
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
          <div className="section-heading"><p className="section-index">04 / Honors</p><h2>荣誉与奖项</h2><p>学业表现、学生工作与竞赛成果。</p></div>
          <div className="honor-list">
            {honors.map((honor) => (
              <article className="honor-item reveal-card" key={honor.year + honor.title}>
                <time>{honor.year}</time><h3>{honor.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div><p className="footer-title">Let&apos;s connect.</p><a href="mailto:2380863003@qq.com">2380863003@qq.com ↗</a></div>
        <div className="footer-meta"><a href="https://github.com/shuixin1221" target="_blank" rel="noreferrer">GitHub / shuixin1221 ↗</a><p>© 2026 [你的姓名]. Built with care.</p></div>
      </footer>
    </div>
  );
}