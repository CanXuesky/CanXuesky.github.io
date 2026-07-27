const news = [
  { date: "2026.06", text: "一篇论文被 [会议或期刊名称] 接收。" },
  { date: "2026.03", text: "获得 [奖学金或荣誉名称]。" },
  { date: "2025.09", text: "加入 [实验室名称]，开始研究 [研究主题]。" },
];

const education = [
  { period: "2024 — 至今", degree: "硕士研究生 · [你的专业]", school: "[学校名称] · [学院名称]", detail: "导师：[导师姓名] 教授｜研究方向：[你的研究方向]" },
  { period: "2020 — 2024", degree: "学士 · [本科专业]", school: "[本科院校] · [学院名称]", detail: "主修课程、毕业设计或排名等信息可在这里补充。" },
];

const interests = [
  { number: "01", title: "[研究方向一]", english: "Research Area One", description: "用一到两句话说明你关注的问题、研究对象，以及希望解决的核心挑战。", tags: ["关键词 A", "关键词 B", "关键词 C"] },
  { number: "02", title: "[研究方向二]", english: "Research Area Two", description: "可以介绍所使用的方法、技术路线，或这个方向与你当前课题的关系。", tags: ["方法 A", "方法 B", "应用场景"] },
  { number: "03", title: "[研究方向三]", english: "Research Area Three", description: "如果目前只有两个明确方向，可以删除这一项，页面会自动调整布局。", tags: ["主题 A", "主题 B", "主题 C"] },
];

const publications = [
  { year: "2026", venue: "[会议 / 期刊]", title: "[论文英文标题：清晰地表达研究问题与主要方法]", authors: "[你的姓名], 合作者姓名, 导师姓名", note: "一句话介绍论文解决了什么问题，以及最重要的贡献。", links: ["Paper", "Code", "Project"] },
  { year: "2025", venue: "Under Review", title: "[另一篇论文或正在进行的研究工作]", authors: "[你的姓名], 合作者姓名", note: "对于尚未发表的工作，可以标记为 Under Review 或 Working Paper。", links: ["Preprint"] },
];

const honors = [
  { year: "2026", title: "[奖学金 / 荣誉名称]", organization: "[颁发单位]" },
  { year: "2025", title: "[竞赛奖项 / 优秀学生 / 学业奖学金]", organization: "[颁发单位]" },
  { year: "2024", title: "[本科阶段代表性荣誉]", organization: "[颁发单位]" },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页"><span>YN</span><strong>[你的姓名]</strong></a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#about">简介</a><a href="#news">动态</a><a href="#education">教育</a><a href="#research">研究</a><a href="#publications">论文</a><a href="#honors">荣誉</a>
        </nav>
        <a className="contact-link" href="mailto:yourname@example.com">联系我 <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Graduate Researcher · Academic Portfolio</p>
            <h1>你好，我是<span>[你的姓名]</span></h1>
            <p className="hero-lead">我是<span>[学校名称]</span>的<span>[专业名称]</span>硕士研究生，目前在<span>[实验室名称]</span>开展研究。我的研究兴趣包括<span>[研究方向一]</span>、<span>[研究方向二]</span>以及<span>[研究方向三]</span>。</p>
            <p className="hero-sub">这里可以补充一小段更个人化的介绍，例如你的研究动机、长期目标，或目前正在寻找的合作机会。控制在 2—3 句话以内即可。</p>
            <div className="hero-actions"><a className="button button-primary" href="#publications">查看研究成果 <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="#">下载简历 <span aria-hidden="true">↗</span></a></div>
          </div>
          <aside className="profile-card" aria-label="个人信息摘要">
            <div className="portrait-placeholder"><span>YN</span><small>PHOTO / MONOGRAM</small></div>
            <div className="profile-meta"><p><span>当前身份</span>硕士研究生</p><p><span>所在地点</span>[城市，中国]</p><p><span>研究主题</span>[领域关键词]</p></div>
            <div className="availability"><i aria-hidden="true" />欢迎学术交流与合作</div>
          </aside>
        </section>

        <section className="section" id="news">
          <div className="section-heading"><p className="section-index">01 / News</p><h2>最新动态</h2><p>记录论文接收、获奖、入组和学术交流等近期进展。</p></div>
          <div className="news-list">{news.map((item, index) => <article className="news-item" key={item.date + index}><time>{item.date}</time><p>{item.text}</p><span aria-hidden="true">↗</span></article>)}</div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="section-index">02 / Education</p><h2>教育经历</h2><p>按时间倒序展示学位、学校、导师和研究方向。</p></div>
          <div className="timeline">{education.map((item) => <article className="timeline-item" key={item.period}><time>{item.period}</time><div><h3>{item.degree}</h3><p className="institution">{item.school}</p><p>{item.detail}</p></div></article>)}</div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading"><p className="section-index">03 / Research</p><h2>研究方向</h2><p>聚焦少量清晰的研究主题，并用关键词帮助访客快速理解。</p></div>
          <div className="research-grid">{interests.map((item) => <article className="research-card" key={item.number}><div className="research-card-top"><span>{item.number}</span><p>{item.english}</p></div><h3>{item.title}</h3><p className="research-description">{item.description}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><p className="section-index">04 / Publications</p><h2>代表论文</h2><p>首版建议只放代表性工作，后续可增加完整论文列表与筛选功能。</p></div>
          <div className="publication-list">{publications.map((publication) => <article className="publication" key={publication.year + publication.title}><div className="publication-badge"><span>{publication.year}</span><strong>{publication.venue}</strong></div><div className="publication-content"><h3>{publication.title}</h3><p className="authors">{publication.authors}</p><p className="publication-note">{publication.note}</p><div className="publication-links">{publication.links.map((link) => <a href="#" key={link}>{link} <span aria-hidden="true">↗</span></a>)}</div></div></article>)}</div>
        </section>

        <section className="section" id="honors">
          <div className="section-heading"><p className="section-index">05 / Honors</p><h2>荣誉与奖项</h2><p>优先展示与你的研究能力、学业表现和专业影响力相关的奖项。</p></div>
          <div className="honor-list">{honors.map((honor) => <article className="honor-item" key={honor.year + honor.title}><time>{honor.year}</time><h3>{honor.title}</h3><p>{honor.organization}</p></article>)}</div>
        </section>
      </main>

      <footer><div><p className="footer-title">Let&apos;s connect.</p><a href="mailto:yourname@example.com">yourname@example.com ↗</a></div><div className="footer-meta"><p>GitHub · Google Scholar · ORCID</p><p>© 2026 [你的姓名]. Built with care.</p></div></footer>
    </div>
  );
}
