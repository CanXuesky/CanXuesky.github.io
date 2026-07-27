"use client";

import { useState } from "react";

type Language = "zh" | "en";

const news = [
  { date: "2026.07", zh: "全国三维数字化创新设计大赛18周年精英联赛（2025–2026）一等奖", en: "First Prize, 18th National 3D Digital Innovation Design Competition Elite League (2025–2026)" },
  { date: "2025", zh: "2025年度优秀共青团员", en: "Outstanding Communist Youth League Member" },
  { date: "2024–2025", zh: "2024–2025学年 一等奖学金", en: "First-class Scholarship, Academic Year 2024–2025" },
  { date: "2024–2025", zh: "2024–2025学年 优秀学生", en: "Outstanding Student, Academic Year 2024–2025" },
];

const publications = [{
  year: "2026",
  venue: "Frontiers in Earth Science",
  title: "Research on the spatiotemporal evolution and associated factors of seismic resilience in western China using machine learning",
  authors: "Tang B, Fan G, Wang J and Xue C",
  citation: "Front. Earth Sci. 14:1769685",
  noteZh: "JCR 2区 · 中科院3区",
  noteEn: "JCR Q2 · CAS Q3",
  doi: "https://doi.org/10.3389/feart.2026.1769685",
}];

const honors = [
  { year: "2026.07", zh: "全国三维数字化创新设计大赛18周年精英联赛（2025–2026）一等奖", en: "First Prize, 18th National 3D Digital Innovation Design Competition Elite League (2025–2026)" },
  { year: "2025", zh: "2025年度优秀共青团员", en: "Outstanding Communist Youth League Member" },
  { year: "2024–2025", zh: "2024–2025学年 一等奖学金", en: "First-class Scholarship, Academic Year 2024–2025" },
  { year: "2024–2025", zh: "2024–2025学年 优秀学生", en: "Outstanding Student, Academic Year 2024–2025" },
];

const copy = {
  zh: {
    nav: ["简介", "动态", "教育", "论文", "荣誉"], contact: "联系我",
    name: "薛灿", role: "中国海洋大学工程学院本科生",
    introPrefix: "欢迎来到我的主页，我是", introSchool: "中国海洋大学工程学院", introSuffix: "大三在读本科生。",
    interests: "研究兴趣", chips: ["强化学习", "大模型后训练", "海洋工程智能化"],
    sections: ["最新动态", "教育经历", "论文", "荣誉与奖项"],
    degree: "本科生", school: "中国海洋大学 · 工程学院", present: "2024.09 – 至今",
    footer: "中国海洋大学 · 工程学院",
  },
  en: {
    nav: ["About", "News", "Education", "Publications", "Honors"], contact: "Contact",
    name: "Xue Can", role: "Undergraduate Student at Ocean University of China",
    introPrefix: "Welcome to my homepage. I am a third-year undergraduate student at the ", introSchool: "College of Engineering, Ocean University of China", introSuffix: ".",
    interests: "Research Interests", chips: ["Reinforcement Learning", "LLM Post-training", "Intelligent Ocean Engineering"],
    sections: ["Latest News", "Education", "Publications", "Honors & Awards"],
    degree: "Undergraduate Student", school: "Ocean University of China · College of Engineering", present: "2024.09 – Present",
    footer: "Ocean University of China · College of Engineering",
  },
};

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z"/><path d="m4 7 8 6 8-6"/></svg>;
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.7.6-3.3-1.1-3.3-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.2.1 2.5.6.6 1 1.5 1 2.5 0 3.5-2.3 4.4-4.5 4.6.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z"/></svg>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const t = copy[language];
  const localized = <T extends { zh: string; en: string }>(item: T) => item[language];

  return (
    <div className="site-shell" id="top" lang={language === "zh" ? "zh-CN" : "en"}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={language === "zh" ? "返回首页" : "Back to top"}><span>XC</span><strong>{t.name}</strong></a>
        <nav className="desktop-nav" aria-label={language === "zh" ? "主导航" : "Main navigation"}>
          <a href="#about">{t.nav[0]}</a><a href="#news">{t.nav[1]}</a><a href="#education">{t.nav[2]}</a><a href="#publications">{t.nav[3]}</a><a href="#honors">{t.nav[4]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={language === "zh" ? "语言切换" : "Language switcher"}>
            <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} aria-pressed={language === "zh"}>中文</button>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>English</button>
          </div>
          <a className="contact-link" href="mailto:2380863003@qq.com">{t.contact}</a>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="portrait-wrap"><img src="/profile.png" alt={language === "zh" ? "薛灿的个人照片" : "Portrait of Xue Can"} /></div>
          <div className="hero-copy">
            <h1>{t.name}</h1>
            <p className="hero-role">{t.role}</p>
            <p className="hero-lead">{t.introPrefix}<strong>{t.introSchool}</strong>{t.introSuffix}</p>
            <h2>{t.interests}</h2>
            <div className="focus-chips" aria-label={t.interests}>{t.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
            <div className="hero-contacts" aria-label={language === "zh" ? "联系方式" : "Contact details"}>
              <a href="mailto:2380863003@qq.com" aria-label="Email"><MailIcon /><span>2380863003@qq.com</span></a>
              <a href="https://github.com/CanXuesky" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /><span>CanXuesky</span></a>
            </div>
          </div>
        </section>

        <section className="section" id="news">
          <div className="section-heading"><p className="section-index">01</p><h2>{t.sections[0]}</h2></div>
          <div className="news-list">{news.map((item, index) => <article className="news-item reveal-card" key={item.date + index}><time>{item.date}</time><p>{localized(item)}</p></article>)}</div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="section-index">02</p><h2>{t.sections[1]}</h2></div>
          <div className="timeline"><article className="timeline-item reveal-card"><time>{t.present}</time><div><h3>{t.degree}</h3><p className="institution">{t.school}</p></div></article></div>
        </section>

        <section className="section" id="publications">
          <div className="section-heading"><p className="section-index">03</p><h2>{t.sections[2]}</h2></div>
          <div className="publication-list">{publications.map((publication) => <article className="publication reveal-card" key={publication.title}><div className="publication-badge"><span>{publication.year}</span><strong>{publication.venue}</strong></div><div className="publication-content"><h3>{publication.title}</h3><p className="authors">{publication.authors} ({publication.year})</p><p className="citation">{publication.citation}</p><p className="publication-note">{language === "zh" ? publication.noteZh : publication.noteEn}</p><div className="publication-links"><a href={publication.doi} target="_blank" rel="noreferrer">DOI / Paper</a></div></div></article>)}</div>
        </section>

        <section className="section" id="honors">
          <div className="section-heading"><p className="section-index">04</p><h2>{t.sections[3]}</h2></div>
          <div className="honor-list">{honors.map((honor) => <article className="honor-item reveal-card" key={honor.year + honor.zh}><time>{honor.year}</time><h3>{localized(honor)}</h3></article>)}</div>
        </section>
      </main>

      <footer className="simple-footer"><p>© 2026 {t.name}</p><p>{t.footer}</p></footer>
    </div>
  );
}