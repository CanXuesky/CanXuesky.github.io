# 薛灿 · 个人学术主页

基于 [al-folio](https://github.com/alshedivat/al-folio) v1，使用 Jekyll 与 GitHub Pages。

## 本地开发

Ruby 3.3.5、Bundler 2.6.9；Node.js 用于静态文件和提交署名检查。

```sh
bundle install
bundle exec jekyll serve
```

## 内容

- `_pages/`：中英简介、动态、教育、论文和荣誉页面。
- `_data/awards.yml`：原始获奖内容及月份，共用于动态和荣誉列表。
- `_bibliography/papers.bib`：论文条目。
- `assets/img/`：个人照片、海蓝色 XC 图标。
- `_config.yml`：站点信息和模板功能。

## 验证与发布

```sh
bundle exec jekyll build
node --test tests/static-export.test.mjs
node scripts/check-attribution.mjs
bundle exec al-folio upgrade overrides audit
```

GitHub Actions 先构建和验证，通过后由主分支发布到 https://canxuesky.github.io/。
本地模板覆盖记录在 `.al-folio-overrides.yml`，升级核心组件后应复查。
原网站保留在 Git 提交 `12199b2706b3d5e98660dc126e6cb147572bbd09`；可从历史恢复。
模板来源和许可见 `THIRD_PARTY_NOTICES.md` 与 `LICENSE`。
