# CanXuesky.github.io

薛灿的中英双语个人学术主页，使用 Vinext、React 和 TypeScript 构建，并通过 GitHub Actions 静态发布到 GitHub Pages。

## 本地开发

要求 Node.js `>=22.13.0`。

```bash
npm ci
npm run dev
```

## 验证

```bash
npm test
npm run lint
```

`npm run build` 会将可直接托管的静态文件生成到 `dist/client/`。

## 项目结构

- `app/`：主页组件、元数据与样式
- `public/`：头像、站点图标及 GitHub Pages 配置文件
- `tests/`：静态导出验证
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动部署流程

## 发布

推送到 `main` 后，GitHub Actions 会自动构建并发布网站：

<https://canxuesky.github.io>
