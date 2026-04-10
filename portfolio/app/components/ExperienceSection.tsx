"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2020.09 — 2023.12",
    company: "인어교주해적단",
    role: "콘텐츠 마케터",
    type: "정규직",
    desc: "수산물 플랫폼 스타트업에서 자사 앱 및 각종 디지털 채널의 콘텐츠를 기획·제작했습니다. 신사업 프로젝트 PO를 맡아 산지마켓 서비스를 기획부터 정식 론칭까지 총괄했습니다.",
    achievements: [
      "자사 앱 콘텐츠 및 네이버 블로그 콘텐츠 마케팅 기획 및 제작",
      "페이스북, 인스타그램, X 등 SNS 계정 콘텐츠 기획 및 운영",
      "신사업 프로젝트 <산지마켓> PO — 기획 및 정식 서비스 론칭 총괄",
      "자사 유튜브 영상 콘텐츠 기획, 촬영, 편집",
      "CS팀 교육 및 실무 / 홍보팀 보도자료 배포 및 홍보 실무",
    ],
    color: "#E8643C",
  },
  {
    period: "2020.01 — 2020.08",
    company: "공간대여 브랜드 스타트업",
    role: "브랜드 마케터",
    type: "정규직",
    desc: "소셜살롱 브랜드의 초기 기획부터 서비스 론칭, SNS 채널 운영까지 담당했습니다. 브랜드 아이덴티티 구축과 제품 스토리텔링을 통해 브랜드의 첫 언어를 만들었습니다.",
    achievements: [
      "소셜살롱 <두강당> 메인 콘셉트 기획 및 서비스 론칭 총괄",
      "소셜살롱 <두강당> SNS 계정 개설 및 게시물 기획, 제작",
      "전통 꽃을 활용한 스마트폰 스트랩 제품 스토리 기획 및 상세페이지 제작",
    ],
    color: "#6C63FF",
  },
];

const education = [
  {
    period: "2015 — 2019",
    school: "연세대학교",
    major: "경영학과 (마케팅 전공)",
    detail: "졸업논문: 디지털 마케팅에서의 언어 프레이밍 효과",
  },
  {
    period: "2023",
    school: "Nielsen Norman Group",
    major: "UX Writing Certificate",
    detail: "UX Writing & Content Design 공인 자격증",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const elements = ref.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
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
            Experience
          </p>
          <h2 className="heading-lg">
            쌓아온 <span style={{ color: "var(--accent)" }}>경험</span>들
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="section-reveal relative pl-8 border-l-2 border-[var(--border)]"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  borderLeftColor: i === 0 ? exp.color : undefined,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-2.5 top-0 w-5 h-5 rounded-full border-4 border-white"
                  style={{ background: exp.color }}
                />

                <div className="bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-base">{exp.company}</h3>
                        <span
                          className="tag text-xs"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[var(--muted)]">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--muted)] bg-[var(--background)] px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((ach) => (
                      <li
                        key={ach}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span style={{ color: exp.color }} className="mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="space-y-6">
            <div className="section-reveal">
              <h3 className="font-bold text-base mb-5 flex items-center gap-2">
                <span>🎓</span> 학력 & 자격증
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="p-5 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200"
                  >
                    <p className="text-xs text-[var(--muted)] mb-1">
                      {edu.period}
                    </p>
                    <p className="font-bold text-sm">{edu.school}</p>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      {edu.major}
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog posts */}
            <div className="section-reveal p-5 rounded-2xl bg-white border border-[var(--border)]">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <span>✏️</span> 블로그 포스팅
              </h3>
              <div className="space-y-3">
                {[
                  "3년차 스타트업 마케터의 마케팅 인사이트",
                  "마케터가 샘플링도 해야 되나요 (feat. 아는만큼 써진다)",
                  "인스타 감성 그거 어케 하는 건데 (feat. 타고난 사진 감각 <<< 명확한 마케팅 컨셉)",
                ].map((post) => (
                  <a
                    key={post}
                    href="https://blog.naver.com/dydekf27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors leading-relaxed group"
                  >
                    <span className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                    <span className="group-hover:underline">{post}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
