export default function Footer() {
  return (
    <footer
      className="py-8 border-t border-[var(--border)]"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="font-bold text-lg"
            style={{ color: "var(--accent)" }}
          >
            YJ.
          </span>
          <span className="text-sm text-[var(--muted)]">
            정용지 — Marketer & UX Writer
          </span>
        </div>

        <p className="text-xs text-[var(--muted)]">
          © 2024 정용지. 모든 권리 보유.
        </p>

        <div className="flex gap-4">
          {[
            { label: "인스타그램", href: "https://instagram.com/a4_yongg" },
            { label: "네이버 블로그", href: "https://blog.naver.com/dydekf27" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
