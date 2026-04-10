"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "글쓰기 (Write)",
    color: "#E8643C",
    skills: [
      { name: "디지털 콘텐츠 라이팅", level: 95 },
      { name: "SNS 채널별 글쓰기", level: 92 },
      { name: "보도자료 작성", level: 80 },
      { name: "상세페이지 카피", level: 88 },
    ],
  },
  {
    category: "마케팅 & CS",
    color: "#6C63FF",
    skills: [
      { name: "SNS 콘텐츠 기획·운영", level: 93 },
      { name: "광고 소재 제작", level: 85 },
      { name: "CS / VOC 대응", level: 88 },
      { name: "유튜브 콘텐츠 기획", level: 78 },
    ],
  },
  {
    category: "기획 & 제작",
    color: "#10B981",
    skills: [
      { name: "프로젝트 기획 (PO)", level: 82 },
      { name: "이미지·레이아웃 기획", level: 80 },
      { name: "Photoshop", level: 72 },
      { name: "Premiere Pro (컷편집)", level: 65 },
    ],
  },
];

const tools = [
  { name: "Photoshop", icon: "🎨" },
  { name: "Premiere Pro", icon: "🎬" },
  { name: "Notion", icon: "📋" },
  { name: "인스타그램", icon: "📸" },
  { name: "페이스북", icon: "📘" },
  { name: "네이버 블로그", icon: "📝" },
  { name: "유튜브", icon: "▶️" },
  { name: "X (트위터)", icon: "🐦" },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate progress bars
            const bars = entry.target.querySelectorAll<HTMLElement>("[data-width]");
            bars.forEach((bar) => {
              const width = bar.dataset.width || "0";
              setTimeout(() => {
                bar.style.width = `${width}%`;
              }, 300);
            });
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
    <section
      id="skills"
      className="py-24"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="section-reveal mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Skills
          </p>
          <h2 className="heading-lg">
            무기가 되는 <span style={{ color: "var(--accent)" }}>역량</span>들
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="section-reveal p-6 rounded-2xl bg-white shadow-sm border border-[var(--border)]"
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: group.color }}
                />
                <h3 className="font-bold text-base">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span
                        className="font-semibold"
                        style={{ color: group.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: "0%",
                          background: group.color,
                        }}
                        data-width={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="section-reveal">
          <h3 className="text-sm font-semibold text-[var(--muted)] mb-6 tracking-widest uppercase">
            주로 사용하는 도구들
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border)] text-sm font-medium hover:border-[var(--accent)] hover:shadow-sm transition-all duration-200 cursor-default"
              >
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
