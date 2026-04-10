"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("yujin.jeong@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: "📧",
      label: "이메일",
      value: "이메일로 연락주세요",
      action: copyEmail,
      actionLabel: copied ? "복사됨!" : "복사",
    },
    {
      icon: "📸",
      label: "인스타그램",
      value: "@a4_yongg",
      href: "https://instagram.com/a4_yongg",
    },
    {
      icon: "📝",
      label: "네이버 블로그",
      value: "blog.naver.com/dydekf27",
      href: "https://blog.naver.com/dydekf27",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA area */}
        <div className="section-reveal text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>
          <h2 className="heading-lg mb-6">
            함께 만들어갈 <br />
            <span style={{ color: "var(--accent)" }}>이야기</span>가 있나요?
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            브랜드의 언어를 정의하고 싶거나, 제품 경험을 개선하고 싶다면
            편하게 연락 주세요. 커피 챗도 환영합니다 ☕
          </p>
          <a
            href="mailto:yujin.jeong@email.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ background: "var(--accent)" }}
          >
            <span>✉️</span>
            이메일 보내기
          </a>
        </div>

        {/* Contact cards */}
        <div className="section-reveal grid md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-300 text-center group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: "var(--accent-light)" }}
              >
                {contact.icon}
              </div>
              <p className="text-xs text-[var(--muted)] mb-1">{contact.label}</p>
              <p className="text-sm font-semibold mb-3">{contact.value}</p>
              {contact.action ? (
                <button
                  onClick={contact.action}
                  className="text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  {contact.actionLabel}
                </button>
              ) : (
                <a
                  href={contact.href}
                  className="text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 inline-block"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  방문하기
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Availability banner */}
        <div
          className="section-reveal rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: "var(--accent)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              현재 채용 제안 검토 중
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              2026년 하반기부터 합류 가능합니다
            </h3>
            <p className="text-white/80 text-sm">
              풀타임, 파트타임, 프리랜서 프로젝트 모두 열려있어요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
