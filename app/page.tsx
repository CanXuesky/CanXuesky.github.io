const news = [
  { date: "2026.07", text: "全国三维数字化创新设计大赛18周年精英联赛（2025–2026）一等奖" },
  { date: "2025", text: "2025年度优秀共青团员" },
  { date: "2024–2025", text: "2024–2025学年 一等奖学金" },
  { date: "2024–2025", text: "2024–2025学年 优秀学生" },
];

const publications = [{
  year: "2026",
  venue: "Frontiers in Earth Science",
  title: "Research on the spatiotemporal evolution and associated factors of seismic resilience in western China using machine learning",
  authors: "Tang B, Fan G, Wang J and Xue C",
  citation: "Front. Earth Sci. 14:1769685",
  note: "JCR 2区 · 中科院3区",
  doi: "https://doi.org/10.3389/feart.2026.1769685",
}];

const honors = [
  { year: "2026.07", title: "全国三维数字化创新设计大赛18周年精英联赛（2025–2026）一等奖" },
  { year: "2025", title: "2025年度优秀共青团员" },
  { year: "2024–2025", title: "2024–2025学年 一等奖学金" },
  { year: "2024–2025", title: "2024–2025学年 优秀学生" },
];

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z"/><path d="m4 7 8 6 8-6"/></svg>;
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.7.6-3.3-1.1-3.3-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.2.1 2.5.6.6 1 1.5 1 2.5 0 3.5-2.3 4.4-4.5 4.6.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z"/></svg>;
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页"><span>XC</span><strong>薛灿</strong></a>
        <nav className="desktop-nav" aria-label="主导航"><a href="#about">简介</a><a href="#news">动态</a><a href="#education">教育</a><a href="#publications">论文</a><a href="#honors">荣誉</a></nav>
        <a className="contact-link" href="mailto:2380863003@qq.com">联系我</a>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="portrait-wrap"><img src="/profile.png" alt="薛灿的个人照片" /></div>
          <div className="hero-copy">
            <h1>薛灿</h1>
            <p className="hero-role">中国海洋大学工程学院本科生</p>
            <p className="hero-lead">我是<strong>中国海洋大学工程学院</strong>本科生。</p>
            <h2>研究兴趣</h2>
            <div className="focus-chips" aria-label="研究兴趣"><span>强化学习</span><span>大模型后训练</span><span>海洋工程智能化</span></div>
            <div className="hero-contacts" aria-label="联系方式">
              <a href="mailto:2380863003@qq.com" aria-label="发送邮件"><MailIcon /><span>2380863003@qq.com</span></a>
              <a href="https://github.com/shuixin1221" target="_blank" rel="noreferrer" aria-label="访问 GitHub 主页"><GithubIcon /><span>shuixin1221</span></a>
            </div>
          </div>
        </section>

        <section className="section" id="news">
          <div className="section-heading"><p className="section-index">01 / News</p><h2>最新动态</h2></div>
          <div className="news-list">{news.map((item, index) => <article className="news-item reveal-card" key={item.date + index}><time>{item.date}</time><p>{item.text}</p></article>)}</div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="section-index">02 / Education</p><h2>教育经历</h2></div>
          <div className="timeline"><article className="timeline-item reveal-card"><time>2024.09 – 至今</time><div><h3>本科生</h3><p className="institution">中国海洋大学 · 工程学院</p></div></article></div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><p className="section-index">03 / Publications</p><h2>论文</h2></div>
          <div className="publication-list">{publications.map((publication) => <article className="publication reveal-card" key={publication.title}><div className="publication-badge"><span>{publication.year}</span><strong>{publication.venue}</strong></div><div className="publication-content"><h3>{publication.title}</h3><p className="authors">{publication.authors} ({publication.year})</p><p className="citation">{publication.citation}</p><p className="publication-note">{publication.note}</p><div className="publication-links"><a href={publication.doi} target="_blank" rel="noreferrer">DOI / Paper</a></div></div></article>)}</div>
        </section>

        <section className="section" id="honors">
          <div className="section-heading"><p className="section-index">04 / Honors</p><h2>荣誉与奖项</h2></div>
          <div className="honor-list">{honors.map((honor) => <article className="honor-item reveal-card" key={honor.year + honor.title}><time>{honor.year}</time><h3>{honor.title}</h3></article>)}</div>
        </section>
      </main>

      <footer className="simple-footer"><p>© 2026 薛灿</p><p>中国海洋大学 · 工程学院</p></footer>
    </div>
  );
}