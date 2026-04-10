import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정용지 | 콘텐츠 마케터 & 라이터",
  description: "멋있는 글보다 읽히는 글을 쓰고 싶은 라이터 정용지의 포트폴리오입니다.",
  openGraph: {
    title: "정용지 | 콘텐츠 마케터 & 라이터",
    description: "멋있는 글보다 읽히는 글을 쓰고 싶은 라이터 정용지의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
