"use client";

import { useEffect, useRef, useState } from "react";

const categories = ["전체", "UX Writing", "마케팅", "콘텐츠 전략"];

const projects = [
  {
    id: 1,
    category: "UX Writing",
    title: "핀테크 앱 온보딩 재설계",
    subtitle: "사용자 이탈률 52% 감소",
    desc: "복잡한 금융 용어로 인해 온보딩 이탈률이 높았던 핀테크 앱의 전체 마이크로카피를 재설계했습니다. 사용자 인터뷰와 세션 리플레이 분석을 통해 불안 포인트를 파악하고, 친근하면서도 신뢰감을 주는 언어로 전환했습니다.",
    tags: ["마이크로카피", "온보딩", "A/B 테스트", "Figma"],
    metric: "이탈률 -52%",
    metricSub: "온보딩 완료율 +38%",
    color: "#E8643C",
    emoji: "💳",
  },
  {
    id: 2,
    category: "마케팅",
    title: "D2C 뷰티 브랜드 런칭 캠페인",
    subtitle: "첫 달 매출 목표 180% 달성",
    desc: "0에서 시작하는 D2C 뷰티 브랜드의 포지셔닝 전략부터 런칭 캠페인 전 소재까지 담당했습니다. '내 피부의 첫 번째 과학'이라는 슬로건을 중심으로 인스타그램, 이메일, 랜딩페이지 카피를 통합된 보이스로 운영했습니다.",
    tags: ["카피라이팅", "브랜드 보이스", "이메일", "SNS"],
    metric: "매출 목표 180%",
    metricSub: "이메일 오픈율 42%",
    color: "#6C63FF",
    emoji: "✨",
  },
  {
    id: 3,
    category: "UX Writing",
    title: "SaaS 대시보드 에러 메시지 시스템",
    subtitle: "CS 문의 40% 감소",
    desc: "기술적 에러 메시지로 인한 CS 문의가 급증하던 SaaS 제품의 전체 에러/빈 상태/성공 메시지를 재정의했습니다. 에러 메시지 가이드라인을 수립하고 100개 이상의 메시지를 사용자 친화적으로 재작성했습니다.",
    tags: ["에러 메시지", "콘텐츠 가이드라인", "UX"],
    metric: "CS 문의 -40%",
    metricSub: "사용자 만족도 +28%",
    color: "#10B981",
    emoji: "🛠️",
  },
  {
    id: 4,
    category: "콘텐츠 전략",
    title: "이커머스 SEO 콘텐츠 전략",
    subtitle: "오가닉 트래픽 220% 증가",
    desc: "키워드 리서치와 경쟁사 분석을 기반으로 12개월 SEO 콘텐츠 전략을 수립했습니다. 월 4편의 롱폼 콘텐츠와 주 3회 블로그 운영으로 도메인 권위도를 높이고 구매 전환 콘텐츠를 집중 제작했습니다.",
    tags: ["SEO", "콘텐츠 캘린더", "롱폼 콘텐츠"],
    metric: "오가닉 트래픽 +220%",
    metricSub: "콘텐츠 전환율 +15%",
    color: "#F59E0B",
    emoji: "📊",
  },
  {
    id: 5,
    category: "마케팅",
    title: "구독 서비스 리텐션 이메일 시퀀스",
    subtitle: "이탈률 30% 감소",
    desc: "구독 해지 의도 사용자를 대상으로 행동 기반 이메일 자동화 시퀀스를 설계했습니다. 사용자의 구독 단계와 활동 패턴에 따라 개인화된 메시지를 발송하여 해지율을 크게 낮췄습니다.",
    tags: ["이메일 자동화", "CRM", "개인화", "리텐션"],
    metric: "해지율 -30%",
    metricSub: "재활성화율 +22%",
    color: "#EF4444",
    emoji: "📧",
  },
  {
    id: 6,
    category: "콘텐츠 전략",
    title: "테크 스타트업 브랜드 보이스 가이드",
    subtitle: "전사 언어 일관성 확보",
    desc: "빠르게 성장하는 테크 스타트업의 브랜드 보이스 & 톤 가이드라인을 수립했습니다. 제품, 마케팅, CS팀이 공통으로 참조할 수 있는 언어 원칙과 예시를 담은 가이드를 제작했습니다.",
    tags: ["브랜드 보이스", "스타일 가이드", "전사 표준화"],
    metric: "팀 활용도 94%",
    metricSub: "신규 입사자 온보딩 50% 단축",
    color: "#8B5CF6",
    emoji: "📖",
  },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = ref.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="section-reveal mb-12">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Portfolio
          </p>
          <h2 className="heading-lg mb-4">
            직접 만든 <span style={{ color: "var(--accent)" }}>결과</span>들
          </h2>
          <p className="text-[var(--muted)] max-w-xl">
            숫자로 증명된 프로젝트들입니다. 각 카드를 클릭하면 상세 내용을 볼 수 있어요.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="section-reveal flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white shadow-md"
                  : "bg-[var(--background)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
              style={
                activeCategory === cat
                  ? { background: "var(--accent)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="section-reveal hover-lift bg-white rounded-2xl border border-[var(--border)] overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            >
              {/* Card header */}
              <div
                className="h-40 flex items-center justify-center text-5xl"
                style={{ background: `${project.color}15` }}
              >
                {project.emoji}
              </div>

              <div className="p-6">
                {/* Category badge */}
                <span
                  className="tag text-xs font-semibold mb-3 inline-block"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>

                <h3 className="font-bold text-base mb-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: project.color }}>
                  {project.subtitle}
                </p>

                {/* Metrics */}
                <div className="flex gap-3 mb-4">
                  <div
                    className="flex-1 p-3 rounded-xl text-center"
                    style={{ background: `${project.color}10` }}
                  >
                    <p
                      className="text-sm font-bold"
                      style={{ color: project.color }}
                    >
                      {project.metric}
                    </p>
                  </div>
                  <div
                    className="flex-1 p-3 rounded-xl text-center"
                    style={{ background: `${project.color}10` }}
                  >
                    <p
                      className="text-xs font-semibold"
                      style={{ color: project.color }}
                    >
                      {project.metricSub}
                    </p>
                  </div>
                </div>

                {/* Expandable description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === project.id ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag"
                        style={{
                          background: "var(--background)",
                          color: "var(--muted)",
                          fontSize: "0.7rem",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toggle button */}
                <button
                  className="mt-3 flex items-center gap-1 text-xs font-semibold transition-colors"
                  style={{ color: project.color }}
                >
                  {expandedId === project.id ? "접기" : "자세히 보기"}
                  <span
                    className={`transition-transform duration-300 ${
                      expandedId === project.id ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
