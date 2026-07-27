import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[你的姓名]｜个人学术主页",
  description: "[你的姓名]的个人学术主页，记录教育经历、研究方向、论文成果与荣誉奖项。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
