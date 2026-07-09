:root {
  color-scheme: light;
  --bg: #f7f9fc;
  --bg-strong: #eef4f9;
  --surface: #ffffff;
  --surface-soft: #f8fbfd;
  --surface-tint: #eef7f8;
  --line: #dce5ee;
  --line-strong: #cad8e5;
  --text: #132033;
  --muted: #66758a;
  --soft: #8997a8;
  --accent: #13c6a7;
  --accent-dark: #0b8e7a;
  --blue: #3b82f6;
  --blue-dark: #1e5fca;
  --shadow: 0 22px 70px rgba(26, 43, 65, .10);
  --shadow-soft: 0 12px 34px rgba(26, 43, 65, .08);
  --radius-xl: 34px;
  --radius-lg: 24px;
  --radius-md: 16px;
  --max: 1180px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 88% 6%, rgba(19, 198, 167, .12), transparent 28rem),
    linear-gradient(180deg, #ffffff 0%, var(--bg) 50%, #ffffff 100%);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.55;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(19, 32, 51, .035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(19, 32, 51, .035) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,.55), transparent 62%);
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

code {
  padding: .14rem .42rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: var(--accent-dark);
  font-size: .9em;
}

.site-header {
  position: sticky;
  top: 14px;
  z-index: 20;
  width: min(var(--max), calc(100% - 32px));
  margin: 0 auto;
  padding: 12px 12px 12px 18px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(220, 229, 238, .88);
  border-radius: 999px;
  background: rgba(255, 255, 255, .88);
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 40px rgba(20, 39, 63, .08);
}

.brand img { width: 180px; height: auto; }

.nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav a,
.header-cta {
  color: var(--muted);
  padding: 10px 13px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 650;
  transition: color .2s ease, background .2s ease, border-color .2s ease, transform .2s ease;
}

.nav a:hover,
.header-cta:hover {
  color: var(--text);
  background: var(--surface-soft);
}

.header-cta {
  border: 1px solid var(--line);
  color: var(--text);
  background: #fff;
}

.section {
  width: min(var(--max), calc(100% - 32px));
  margin: 0 auto;
  padding: 96px 0 0;
}

.hero {
  min-height: 690px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 56px;
  padding-top: 52px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--accent-dark);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .17em;
  font-weight: 850;
}

h1, h2, h3, p { margin-top: 0; }

h1 {
  max-width: 720px;
  margin-bottom: 22px;
  font-size: clamp(48px, 7.3vw, 88px);
  line-height: .93;
  letter-spacing: -.068em;
}

h2 {
  margin-bottom: 14px;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  letter-spacing: -.045em;
}

h3 { margin-bottom: 8px; line-height: 1.15; }

.lead {
  max-width: 650px;
  margin-bottom: 32px;
  color: var(--muted);
  font-size: clamp(19px, 2vw, 23px);
}

.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 19px;
  border-radius: 999px;
  border: 1px solid var(--line);
  font-weight: 780;
  transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
}

.button:hover { transform: translateY(-2px); }

.button.primary {
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--blue));
  border-color: transparent;
  box-shadow: 0 14px 28px rgba(19, 198, 167, .24);
}

.button.ghost { color: var(--text); background: #fff; }
.button.ghost:hover { border-color: var(--line-strong); box-shadow: var(--shadow-soft); }

.hero-visual {
  position: relative;
  min-height: 430px;
  border-radius: var(--radius-xl);
  background:
    linear-gradient(145deg, rgba(255,255,255,.85), rgba(239,247,250,.95)),
    var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.hero-visual::before {
  content: "";
  position: absolute;
  inset: 22px;
  border-radius: 28px;
  border: 1px solid rgba(202, 216, 229, .65);
  background:
    radial-gradient(circle at 78% 22%, rgba(19, 198, 167, .22), transparent 10rem),
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, .14), transparent 12rem),
    #fff;
}

.hero-visual::after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  right: -90px;
  bottom: -110px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(19,198,167,.14), rgba(59,130,246,.15));
}

.visual-card,
.visual-mini { position: absolute; z-index: 2; }

.visual-card-main {
  left: 48px;
  right: 48px;
  top: 72px;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255,255,255,.92);
  box-shadow: var(--shadow-soft);
}

.visual-topline {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  color: var(--accent-dark);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.visual-card-main h2 {
  max-width: 390px;
  margin-bottom: 12px;
  font-size: clamp(28px, 3.1vw, 42px);
}

.visual-card-main p { color: var(--muted); max-width: 340px; }

.format-row { display: flex; gap: 10px; margin-top: 22px; }
.format-row span {
  display: inline-flex;
  min-width: 82px;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: #f0f6fb;
  border: 1px solid var(--line);
  font-weight: 850;
  color: var(--text);
}

.visual-mini {
  bottom: 52px;
  padding: 18px 20px;
  min-width: 128px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255,255,255,.95);
  box-shadow: var(--shadow-soft);
}

.visual-mini.one { left: 62px; }
.visual-mini.two { right: 70px; }
.visual-mini strong { display: block; font-size: 42px; line-height: .95; letter-spacing: -.05em; }
.visual-mini span { color: var(--muted); font-weight: 700; }

.section-split { display: grid; grid-template-columns: .82fr 1.18fr; gap: 38px; align-items: start; }
.section-heading { max-width: 620px; }
.section-heading.compact { max-width: 760px; }
.section-heading p:not(.eyebrow) { color: var(--muted); font-size: 18px; }

.device-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.device-card,
.part-card,
.guide-card,
.timeline article,
.controls,
.empty-state {
  border: 1px solid var(--line);
  background: rgba(255,255,255,.9);
  box-shadow: var(--shadow-soft);
}

.device-card {
  min-height: 260px;
  padding: 28px;
  border-radius: var(--radius-lg);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.device-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: var(--line-strong); }
.device-card h3 { font-size: 31px; letter-spacing: -.04em; }
.device-card p { color: var(--muted); margin-bottom: 26px; }
.device-meta { display: flex; flex-wrap: wrap; gap: 9px; margin-top: auto; }
.pill {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--surface-soft);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
  font-weight: 760;
}
a.pill { color: var(--accent-dark); background: #eefaf7; border-color: #cdeee7; }

.downloads-section { padding-top: 108px; }

.controls {
  margin-top: 28px;
  padding: 16px;
  border-radius: var(--radius-lg);
  display: grid;
  gap: 13px;
}

.search-box {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface-soft);
}

.search-box span { color: var(--muted); font-size: 13px; font-weight: 850; text-transform: uppercase; letter-spacing: .12em; }
.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  min-height: 32px;
}
.search-box input::placeholder { color: var(--soft); }

.chip-group { display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: var(--muted);
  padding: 9px 13px;
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 760;
  transition: background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
}
.chip:hover { transform: translateY(-1px); border-color: var(--line-strong); color: var(--text); }
.chip.active { color: #fff; background: var(--text); border-color: var(--text); }

.library-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 22px 0 18px;
  color: var(--muted);
  font-weight: 760;
}
.text-button {
  border: 0;
  background: transparent;
  color: var(--accent-dark);
  font: inherit;
  font-weight: 850;
  cursor: pointer;
}

.parts-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.part-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.part-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: var(--line-strong); }
.part-preview {
  width: 100%;
  aspect-ratio: 1.45;
  object-fit: cover;
  background: #f0f5fa;
  border-bottom: 1px solid var(--line);
}
.part-body {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.part-kicker {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--accent-dark);
  font-size: 12px;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: .11em;
}
.part-title { font-size: 23px; letter-spacing: -.035em; }
.part-description { color: var(--muted); margin-bottom: 0; }
.badges { display: flex; flex-wrap: wrap; gap: 7px; margin-top: auto; }
.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 9px;
  border-radius: 999px;
  border: 1px solid var(--line);
  color: var(--muted);
  background: var(--surface-soft);
  font-size: 12px;
  font-weight: 760;
}
.badge.status-stable { color: #09725f; background: #eefaf7; border-color: #cdeee7; }
.badge.status-beta { color: #8a5a02; background: #fff7df; border-color: #f1dda0; }
.badge.status-legacy { color: #7a3748; background: #fff0f3; border-color: #f4c8d2; }

.download-row { display: grid; grid-template-columns: 1fr 1fr auto; gap: 8px; margin-top: 4px; }
.download-link,
.details-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 42px;
  border-radius: 999px;
  border: 1px solid var(--line);
  font-weight: 850;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
}
.download-link:hover,
.details-button:hover { transform: translateY(-2px); }
.download-link.step { color: #fff; background: var(--text); border-color: var(--text); }
.download-link.stl { color: var(--accent-dark); background: #eefaf7; border-color: #cdeee7; }
.details-button {
  width: 42px;
  cursor: pointer;
  background: #fff;
  color: var(--muted);
  font: inherit;
  font-weight: 900;
}

.guide-card {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 32px;
  border-radius: var(--radius-xl);
  padding: 34px;
  background:
    radial-gradient(circle at 92% 8%, rgba(19,198,167,.14), transparent 16rem),
    #fff;
}
.guide-card p:not(.eyebrow) { color: var(--muted); }
.guide-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.guide-list div {
  padding: 18px;
  border-radius: 18px;
  background: var(--surface-soft);
  border: 1px solid var(--line);
}
.guide-list strong { display: block; margin-bottom: 5px; }
.guide-list span { color: var(--muted); }

.timeline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.timeline article { padding: 22px; border-radius: var(--radius-lg); }
.timeline span { color: var(--accent-dark); font-weight: 850; }
.timeline h3 { margin-top: 12px; font-size: 22px; letter-spacing: -.035em; }
.timeline p { color: var(--muted); margin-bottom: 0; }

.empty-state {
  padding: 40px;
  border-radius: var(--radius-lg);
  text-align: center;
}
.empty-state p { color: var(--muted); margin-bottom: 0; }

.part-dialog {
  width: min(980px, calc(100% - 32px));
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 0;
  color: var(--text);
  background: #fff;
  box-shadow: var(--shadow);
}
.part-dialog::backdrop { background: rgba(15, 23, 42, .35); backdrop-filter: blur(5px); }
.dialog-close {
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 2;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  font: inherit;
  font-size: 24px;
  cursor: pointer;
}
.dialog-layout { display: grid; grid-template-columns: .95fr 1.05fr; gap: 28px; padding: 28px; }
.dialog-layout img { border-radius: 22px; border: 1px solid var(--line); background: #f0f5fa; }
.dialog-copy { padding: 12px 10px 10px 0; }
.dialog-copy h2 { font-size: clamp(31px, 4vw, 48px); }
.dialog-copy p { color: var(--muted); }
.dialog-specs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 22px 0; }
.dialog-specs div { padding: 13px; border-radius: 15px; border: 1px solid var(--line); background: var(--surface-soft); }
.dialog-specs dt { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .11em; font-weight: 850; }
.dialog-specs dd { margin: 4px 0 0; font-weight: 750; }

.site-footer {
  width: min(var(--max), calc(100% - 32px));
  margin: 110px auto 24px;
  padding: 26px;
  display: flex;
  justify-content: space-between;
  gap: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: #fff;
  box-shadow: var(--shadow-soft);
}
.site-footer img { width: 170px; margin-bottom: 12px; }
.site-footer p { max-width: 460px; color: var(--muted); margin-bottom: 0; }
.footer-links { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.footer-links a { color: var(--muted); font-weight: 760; }
.footer-links a:hover { color: var(--text); }

@media (max-width: 1000px) {
  .hero,
  .section-split,
  .guide-card,
  .dialog-layout { grid-template-columns: 1fr; }
  .hero { min-height: 0; }
  .parts-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dialog-copy { padding: 0; }
}

@media (max-width: 760px) {
  .site-header { align-items: flex-start; border-radius: 26px; flex-wrap: wrap; top: 8px; }
  .brand img { width: 158px; }
  .nav { order: 3; width: 100%; margin-left: 0; overflow-x: auto; padding-bottom: 2px; }
  .header-cta { margin-left: auto; }
  .section { padding-top: 72px; }
  .hero { gap: 34px; padding-top: 42px; }
  .hero-visual { min-height: 390px; }
  .visual-card-main { left: 24px; right: 24px; top: 42px; }
  .visual-mini.one { left: 28px; }
  .visual-mini.two { right: 28px; }
  .device-grid,
  .parts-grid,
  .guide-list,
  .timeline { grid-template-columns: 1fr; }
  .search-box { grid-template-columns: 1fr; border-radius: 20px; }
  .library-meta { align-items: flex-start; flex-direction: column; }
  .site-footer { flex-direction: column; margin-top: 82px; }
}

@media (max-width: 480px) {
  .download-row { grid-template-columns: 1fr 1fr; }
  .details-button { grid-column: 1 / -1; width: 100%; }
  .visual-mini { bottom: 34px; min-width: 110px; }
  .visual-mini strong { font-size: 34px; }
}
