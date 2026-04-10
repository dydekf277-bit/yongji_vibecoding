"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 w-full" ref={heroRef}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "var(--accent-light)",
                color: "var(--accent)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              현재 새로운 기회를 찾고 있어요
            </div>

            <h1 className="heading-xl mb-6">
              <span className="block text-[var(--muted)] text-2xl font-normal mb-2">
                안녕하세요, 저는
              </span>
              <span className="block">정용지</span>
              <span
                className="block"
                style={{ color: "var(--accent)" }}
              >
                입니다.
              </span>
            </h1>

            <p className="text-lg text-[var(--muted)] mb-4 leading-relaxed">
              <strong className="text-[var(--foreground)]">멋있는 글보다 읽히는 글</strong>을
              쓰고 싶은 라이터입니다.
            </p>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
              수산물 플랫폼부터 공간대여 브랜드까지, 다양한 업종에서
              콘텐츠 마케팅과 브랜드 라이팅을 담당해왔습니다.
              고객의 목소리를 듣고, 브랜드의 언어로 연결하는 일을 합니다.
            </p>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["#마케팅", "#콘텐츠", "#라이팅", "#CX", "#디지털글쓰기"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--accent)" }}
              >
                작업물 보기
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold border-2 transition-all duration-200 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                이력서 다운로드
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-4 pt-8 border-t border-[var(--border)]">
              {[
                { number: "4+", label: "년 경력" },
                { number: "2개", label: "업종 경험" },
                { number: "全채널", label: "콘텐츠 운영" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image / illustration area */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Main profile card */}
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl relative"
                style={{ background: "var(--accent-light)" }}
              >
                {/* Placeholder profile illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-bold text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      정
                    </div>
                    <p className="font-semibold text-lg text-[var(--foreground)]">
                      정용지
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      Marketer & UX Writer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
              >
                <span className="text-xl">✍️</span>
                <div>
                  <p className="text-xs text-[var(--muted)]">전문 분야</p>
                  <p className="text-sm font-semibold">UX Writing</p>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
              >
                <span className="text-xl">📈</span>
                <div>
                  <p className="text-xs text-[var(--muted)]">성과</p>
                  <p className="text-sm font-semibold">전환율 +300%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)] text-xs">
          <span>스크롤</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--muted)] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
