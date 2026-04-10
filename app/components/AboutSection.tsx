"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    icon: "✍️",
    title: "읽히는 글쓰기",
    desc: "어려운 정보를 정리하고 가공해 누구나 편하게 읽을 수 있는 글을 씁니다. 기업의 톤앤매너와 각 SNS의 특성에 맞게.",
  },
  {
    icon: "👂",
    title: "고객 목소리 (CS/VOC)",
    desc: "CS팀 교육 및 실무 경험으로 고객의 목소리를 직접 듣고, 서비스 개선점을 관련 부서에 제안합니다.",
  },
  {
    icon: "📣",
    title: "마케팅 실행력",
    desc: "SNS 채널 광고 집행, 한정된 영역과 글자수 내에서 마케팅 활동을 전개하는 데 익숙합니다.",
  },
  {
    icon: "🚀",
    title: "프로젝트 주도",
    desc: "신사업 PO 경험이 있어 가설을 빠르게 실행하고 검증합니다. 조직의 목적에 따라 리드하거나 서포트합니다.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="section-reveal mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            About Me
          </p>
          <h2 className="heading-lg mb-6">
            말로 비즈니스를 <br />
            <span style={{ color: "var(--accent)" }}>성장</span>시킵니다.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div className="section-reveal space-y-5 text-[var(--muted)] leading-relaxed">
            <p>
              &ldquo;멋있는 글&rdquo;보다 &ldquo;읽히는 글&rdquo;이 더 어렵습니다.
              독자가 끝까지 읽게 만드는 글, 행동으로 이어지게 만드는 글 —
              저는 그 <strong className="text-[var(--foreground)]">읽히는 글</strong>을 쓰는 사람이 되고 싶어서 이 일을 시작했습니다.
            </p>
            <p>
              수산물 플랫폼에서 콘텐츠 마케터로 일하며 앱, 블로그, SNS, 유튜브까지
              채널을 가리지 않고 콘텐츠를 만들었고, 신사업 PO로서
              <strong className="text-[var(--foreground)]"> 산지마켓 서비스를 기획부터 론칭까지</strong> 총괄했습니다.
            </p>
            <p>
              CS 업무를 직접 경험한 덕분에 고객이 어떤 언어에 반응하는지,
              어떤 말에 답답함을 느끼는지 몸으로 압니다.
              그래서 저의 글쓰기는 항상 <strong className="text-[var(--foreground)]">고객의 목소리</strong>에서 출발합니다.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              {[
                { label: "경력", value: "4년+" },
                { label: "주요 채널", value: "앱·블로그·SNS·유튜브" },
                { label: "주요 업종", value: "이커머스·스타트업" },
                { label: "특기", value: "콘텐츠 기획 & 라이팅" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl"
                  style={{ background: "var(--background)" }}
                >
                  <p className="text-xs text-[var(--muted)] mb-1">{item.label}</p>
                  <p className="font-semibold text-sm text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 gap-4">
            {values.map((item, i) => (
              <div
                key={item.title}
                className="section-reveal p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-md group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: "var(--accent-light)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
