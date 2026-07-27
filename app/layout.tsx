import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "薛灿｜个人学术主页",
  description: "薛灿，中国海洋大学工程学院本科生。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}