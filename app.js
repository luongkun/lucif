/* =========================================================
   Link-in-bio — chỉnh sửa nội dung tại CONFIG bên dưới
   ========================================================= */

const CONFIG = {
  // ---- Thông tin cá nhân ----
  name: "Lucif",
  tagline: "Developer · Designer · Night owl",
  bio: "Mình làm web, mê UI đẹp và code gọn. Luôn đang học cái mới.",
  location: "Việt Nam",
  avatar: "assets/avatar.jpg", // ảnh đại diện (để trống → dùng chữ cái đầu)
  verified: true,           // hiện tick xanh bên cạnh tên
  music: { // playlist nhạc cho widget góc phải
    volume: 1,
    playlist: [
      { title: "Em đã xa anh", artist: "Nguyễn Lương", url: "assets/music.m4a" }
    ]
  },

  // ---- Mạng xã hội (hàng icon tròn nhỏ phía trên) ----
  // Dùng `url` để mở trang, hoặc `copy` để bấm vào là sao chép.
  socials: [
    { name: "GitHub",   url: "https://github.com/luongkun",    icon: "github" },
    { name: "Facebook", url: "https://www.facebook.com/nlwos", icon: "facebook" },
    { name: "TikTok",   url: "https://www.tiktok.com/@nlwo2",  icon: "tiktok" },
    { name: "Discord",  copy: "chilanoidau",                   icon: "discord" },
    { name: "Email",    copy: "lucifermeta0210@gmail.com",     icon: "mail" },
  ],

  // ---- Danh sách link chính (phía dưới) ----
  // Dùng `url` để mở trang, hoặc `copy` để bấm vào là sao chép.
  links: [
    { label: "Portfolio",        url: "https://example.com",           icon: "globe",    note: "Dự án & case study" },
    { label: "Blog / Viết lách", url: "https://example.com/blog",      icon: "book",     note: "Góc notes linh tinh" },
    { label: "Repo nguồn mở",    url: "https://github.com/",           icon: "code",     note: "Những thứ mình đang build" },
    { label: "Mời mình cà phê",  icon: "coffee",   note: "Ủng hộ bằng 1 ly ☕", qr: "https://img.vietqr.io/image/momo-0368852235-compact.png" },
    { label: "Đặt lịch hẹn",     url: "https://example.com/calendar",  icon: "calendar", note: "30 phút trò chuyện" },
    { label: "Gửi email",        url: "mailto:hello@example.com",      icon: "mail",     note: "hello@example.com" },
  ],

  // ---- Giao diện: "light" | "dark" | "auto" ----
  theme: "auto",
};

/* ===================== Icon set ===================== */
const FILL = {
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  instagram: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.9.419.42.679.819.895 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.895-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  discord: "M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.1 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.029zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z",
  telegram: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  spotify: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.601.301.96zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.56.3z",
  tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
};

const STROKE = {
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  shop: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  sparkle: '<path d="M12 3v6M12 15v6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M3 12h6M15 12h6M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/>',
};

const ARROW = '<path d="M5 12h13M13 6l6 6-6 6"/>';
const COPY_ICON =
  '<rect x="9" y="9" width="12" height="12" rx="2"/>' +
  '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>';
const CHECK_ICON = '<path d="m5 12.5 4.5 4.5L19 7"/>';
// Tick xanh kiểu Facebook: hình tròn đặc + tick trắng bên trong
const BADGE =
  '<circle cx="12" cy="12" r="11" fill="currentColor"/>' +
  '<path d="m6.8 12.4 3.5 3.5 7-7.4" fill="none" stroke="#fff" stroke-width="2.6" ' +
  'stroke-linecap="round" stroke-linejoin="round"/>';

function svg(name, size) {
  const s = size ? ` width="${size}" height="${size}"` : "";
  if (FILL[name]) {
    return `<svg viewBox="0 0 24 24"${s} aria-hidden="true"><path d="${FILL[name]}" fill="currentColor"/></svg>`;
  }
  const d = STROKE[name] || STROKE.link;
  return `<svg viewBox="0 0 24 24"${s} fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
}

/* ===================== Helpers ===================== */
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

const isExternal = (url) => !/^(mailto:|tel:|#)/i.test(url || "");

const initials = (name) =>
  name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const $ = (id) => document.getElementById(id);

/* ===================== Theme ===================== */
const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(mode) {
  const resolved = mode === "auto" ? (media.matches ? "dark" : "light") : mode;
  root.dataset.theme = resolved;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", resolved === "dark" ? "#150b12" : "#fff5f8");
}

let themeMode =
  localStorage.getItem("bio-theme") || (CONFIG.theme === "auto" ? "auto" : CONFIG.theme);

applyTheme(themeMode);

if (themeMode === "auto") media.addEventListener("change", () => applyTheme("auto"));

$("themeToggle").addEventListener("click", () => {
  const current = root.dataset.theme;
  themeMode = current === "dark" ? "light" : "dark";
  localStorage.setItem("bio-theme", themeMode);
  applyTheme(themeMode);
});

/* ===================== Render ===================== */
// Avatar
(function renderAvatar() {
  const box = $("avatar");
  const src = CONFIG.avatar;
  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = CONFIG.name;
    img.addEventListener("error", () => { box.textContent = initials(CONFIG.name); });
    box.appendChild(img);
  } else {
    box.textContent = initials(CONFIG.name);
  }
})();

// Name + badge
$("name").innerHTML =
  esc(CONFIG.name) +
  (CONFIG.verified
    ? `<span class="badge" title="Đã xác minh" role="img" aria-label="Đã xác minh">
        <svg viewBox="0 0 24 24" aria-hidden="true">${BADGE}</svg>
      </span>`
    : "");

$("tagline").textContent = CONFIG.tagline || "";
$("bio").textContent = CONFIG.bio || "";

if (CONFIG.location) {
  $("location").innerHTML = svg("pin", 13) + "<span>" + esc(CONFIG.location) + "</span>";
}

$("footName").textContent = CONFIG.name;
$("year").textContent = new Date().getFullYear();

// Socials
$("socials").innerHTML = (CONFIG.socials || []).map((s) => {
  const icon = svg(s.icon);

  // Dạng "bấm để sao chép" (Discord ID, email...)
  if (s.copy) {
    return `<button class="social social-copy" type="button" data-copy="${esc(s.copy)}"
      aria-label="Sao chép ${esc(s.copy)}" title="${esc(s.name)} — bấm để sao chép">${icon}</button>`;
  }

  const target = isExternal(s.url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<a class="social" href="${esc(s.url)}" aria-label="${esc(s.name)}" title="${esc(s.name)}"${target}>
    ${icon}</a>`;
}).join("");

// Links
$("links").innerHTML = (CONFIG.links || []).map((l, i) => {
  const inner = `
      <span class="ico">${svg(l.icon)}</span>
      <span class="txt">
        <span class="label">${esc(l.label)}</span>
        <span class="note">${esc(l.note || "")}</span>
      </span>`;

  // Dạng "hiện ảnh QR" (Mời cà phê...)
  if (l.qr) {
    return `<li>
    <button class="link link-qr" type="button" data-qr="${esc(l.qr)}" data-label="${esc(l.label)}"
      style="--i:${i}" aria-label="Hiện mã QR ${esc(l.label)}">${inner}
      <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
    </button>
  </li>`;
  }

  // Dạng "bấm để sao chép"
  if (l.copy) {
    return `<li>
    <button class="link link-copy" type="button" data-copy="${esc(l.copy)}"
      style="--i:${i}" aria-label="Sao chép ${esc(l.copy)}">${inner}
      <svg class="arrow copy-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${COPY_ICON}</svg>
    </button>
  </li>`;
  }

  // Dạng link thường
  const target = isExternal(l.url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  return `<li>
    <a class="link" href="${esc(l.url)}" style="--i:${i}"${target}>${inner}
      <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ARROW}</svg>
    </a>
  </li>`;
}).join("");

// Title
if (CONFIG.name) document.title = `${CONFIG.name} · Links`;

/* ===================== Cánh hoa anh đào ===================== */
(function petals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.innerWidth < 380) return; // màn hình quá nhỏ thì bỏ cho đỡ rối

  const aurora = document.querySelector(".aurora");
  const COUNT = 14;
  const frag = document.createDocumentFragment();
  const rnd = (a, b) => a + Math.random() * (b - a);

  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.setProperty("--x", rnd(-4, 100).toFixed(2) + "vw");
    p.style.setProperty("--dx", rnd(-9, 9).toFixed(2) + "vw");
    p.style.setProperty("--s", rnd(7, 14).toFixed(1) + "px");
    p.style.setProperty("--d", rnd(13, 26).toFixed(1) + "s");
    p.style.setProperty("--delay", (-rnd(0, 26)).toFixed(1) + "s"); // âm → bắt đầu giữa chừng
    frag.appendChild(p);
  }
  aurora.appendChild(frag);
})();

/* ===================== Layout =====================
   Kích thước giao diện giữ nguyên, KHÔNG thu nhỏ. Danh sách link phía dưới
   tự cuộn bên trong ô (CSS flex + overflow). Đoạn này chỉ là van an toàn:
   nếu viewport quá thấp khiến phần cố định (avatar + thông tin + hàng icon +
   footer) đã chiếm hết chỗ, vùng link bị ép dưới ngưỡng thì mới cho cuộn cả trang.
   ================================================== */
(function layout() {
  const wrap = document.querySelector(".wrap");
  const card = $("card");
  const links = $("links");
  const MAX_ROWS = 5;    // số thẻ link hiện trọn vẹn khi chưa kéo scroll
  const MIN_LINKS = 110; // px — vùng link nhỏ hơn thế này thì vô dụng
  const GAP = 10;        // px — khoảng cách giữa các thẻ (khớp .links > li margin)

  let busy = false;

  function run() {
    if (busy) return;
    busy = true;
    document.body.classList.remove("allow-scroll");
    links.style.maxHeight = "";           // đo tự nhiên trước
    links.style.removeProperty("--row-h");

    // Dùng getBoundingClientRect thay vì offsetHeight: offsetHeight làm tròn
    // số nguyên, cộng dồn qua nhiều thẻ sẽ thiếu vài px → thẻ cuối bị cắt lửng.
    const h = (el) => el.getBoundingClientRect().height;

    const cs = getComputedStyle(wrap);
    const avail =
      wrap.getBoundingClientRect().height -
      parseFloat(cs.paddingTop) -
      parseFloat(cs.paddingBottom);

    // Phần không cuộn = toàn bộ card trừ vùng link.
    // Nếu video hero đang chiếm chỗ trong luồng trang (bản mobile xếp dọc),
    // trừ luôn chiều cao của nó để vùng link không tràn khỏi viewport.
    let room = avail - (h(card) - h(links));
    const heroVideo = document.querySelector(".hero-video");
    if (heroVideo && getComputedStyle(heroVideo).position !== "absolute") {
      room -= h(heroVideo);
    }

    const box = links.getBoundingClientRect();
    const first = links.querySelector(".link");
    const total = links.children.length;

    if (first && total) {
      const rowH = h(first);              // chiều cao 1 thẻ
      // Với n thẻ, chiều cao danh sách = n*rowH + (n-1)*GAP.
      // Thẻ cuối chỉ được tính là "hiện trọn" khi mép dưới của nó < mép dưới vùng cuộn.
      const maxRows = Math.floor((box.height + GAP) / (rowH + GAP) - 1e-6);

      // Quá thấp thì nhường cho cuộn cả trang, ngược lại luôn hiện ít nhất 1 thẻ
      let rows = room < MIN_LINKS ? 0 : Math.min(maxRows, MAX_ROWS, total);
      rows = Math.max(rows, room < MIN_LINKS ? 0 : 1);

      if (rows > 0) {
        // Cắt cứng từng thẻ theo chiều cao hàng. Vì mọi thẻ cao bằng nhau, mép trên
        // của thẻ n luôn nằm đúng bội số của (rowH + GAP), nên không bao giờ có thẻ
        // nào ló ra một phần — kể cả ở tỉ lệ zoom lẻ.
        const ROW_FUZZ = 0.5;
        links.style.setProperty("--row-h", rowH + ROW_FUZZ + "px");

        // Chiều cao vùng cuộn = rows hàng nguyên, suy ra từ chính lưới hàng đó
        links.style.maxHeight = (rows * (rowH + ROW_FUZZ + GAP) - GAP) + "px";
      }
    }

    if (room < MIN_LINKS) {
      document.body.classList.add("allow-scroll");
      links.style.maxHeight = ""; // cuộn cả trang → bỏ luôn giới hạn ô
      links.style.removeProperty("--row-h");
    }
    busy = false;
  }

  run();
  window.addEventListener("resize", run);
  window.addEventListener("orientationchange", run);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
  else window.addEventListener("load", run);
  if (window.ResizeObserver) new ResizeObserver(run).observe(card);
})();

/* ===================== Sao chép ===================== */
const toast = $("toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback cho trình duyệt cũ / không có quyền clipboard (http, iframe...)
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    ta.remove();
    return ok;
  }
}

// Nút "Copy link" ở footer
$("copyLink").addEventListener("click", async () => {
  const url = location.href;
  showToast((await copyText(url)) ? "Đã copy link ✓" : url);
});

// Gắn hành vi "bấm để sao chép" cho cả hàng icon nhỏ lẫn danh sách link
function bindCopy(container) {
  container.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;

    const value = btn.dataset.copy;
    const ok = await copyText(value);
    if (!ok) {
      showToast(value); // không copy được thì hiện ra để người dùng tự bôi
      return;
    }

    showToast("Đã sao chép: " + value);
    btn.classList.add("done");

    // Thẻ link có chỗ trống icon → đổi tạm sang dấu tick
    const slot = btn.querySelector(".copy-ico");
    if (slot) slot.innerHTML = CHECK_ICON;

    setTimeout(() => {
      btn.classList.remove("done");
      if (slot) slot.innerHTML = COPY_ICON;
    }, 1600);
  });
}

bindCopy($("socials"));
bindCopy($("links"));

/* ===================== Popup QR (Mời cà phê) ===================== */
(function qrModal() {
  const modal = $("qrModal");
  if (!modal) return;
  const img = $("qrImg");
  const cap = $("qrCap");
  function open(url, label) {
    if (img) {
      img.src = url; // chỉ tải ảnh khi mở, không tốn băng thông lúc vào trang
      img.alt = "Mã QR " + (label || "ủng hộ");
    }
    if (cap) cap.textContent = label || "Quét mã để ủng hộ";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
  function close() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
  $("links").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-qr]");
    if (!btn) return;
    open(btn.dataset.qr, btn.dataset.label);
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest(".qr-card")) return; // bấm vào ảnh/chữ thì giữ nguyên
    close(); // bấm bất cứ đâu bên ngoài thì tắt
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

/* ===================== Màn chào =====================
   Hiện mỗi lần vào web. Bấm vào màn chào = thao tác người dùng nên
   gọi phát nhạc ngay trong handler này (trình duyệt cho phép).
   ===================================================== */
(function renderEnter() {
  const ov = $("enterOverlay");
  if (!ov) return;
  const av = ov.querySelector(".enter-avatar");
  if (av) {
    if (CONFIG.avatar) {
      const img = document.createElement("img");
      img.src = CONFIG.avatar;
      img.alt = CONFIG.name || "avatar";
      img.addEventListener("error", () => { av.textContent = initials(CONFIG.name); });
      av.appendChild(img);
    } else {
      av.textContent = initials(CONFIG.name);
    }
  }
})();

(function enterScreen() {
  const ov = $("enterOverlay");
  if (!ov) return;
  let entered = false;
  function enter() {
    if (entered) return;
    entered = true;
    ov.classList.add("leave");
    // Tự phát nhạc (đúng chuỗi gesture từ click nên không bị chặn)
    try {
      const audio = document.getElementById("bg-audio");
      const pb = document.getElementById("audio-play-btn");
      if (audio && audio.paused && pb) pb.click();
    } catch (e) {}
    setTimeout(() => ov.remove(), 700);
  }
  ov.addEventListener("click", enter);
  // Không còn nút bấm: giữ vào được bằng bàn phím (Enter/Space)
  ov.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); enter(); }
  });
  // Hiệu ứng chữ gõ máy kiểu V5 (typed.js nạp defer nên phải chờ DOM ready;
  // CDN lỗi thì giữ chữ tĩnh "Hello Everybody.")
  // startDelay của typed.js chạy lại sau mỗi vòng lặp (begin() gọi lại),
  // nên dùng onBegin để chỉ giữ delay lần đầu vào web.
  let firstBegin = true;
  function initTyped() {
    try {
      if (window.Typed) {
        new window.Typed("#enterTyped", {
          strings: ["Hello Everybody.", "My name is " + (CONFIG.name || "Lucif") + ".", "I really like website design"],
          typeSpeed: 60,
          startDelay: 1500,
          loop: true,
          onBegin: (self) => {
            if (!firstBegin) self.startDelay = 0;
            firstBegin = false;
          }
        });
        return true;
      }
    } catch (e) {}
    return false;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTyped);
  } else {
    initTyped();
  }
})();

/* ===================== Widget nhạc (kiểu Discord-Profile) =====================
   CONFIG.music nhận chuỗi file đơn ("assets/music.mp3") hoặc object playlist:
   { volume: 1, playlist: [{ title, artist, url }] }.
   Nhạc chỉ tải khi bấm phát (audio preload="none").
   =========================================================================== */
(function musicPlayer() {
  const audio = document.getElementById("bg-audio");
  const playBtn = document.getElementById("audio-play-btn");
  const prevBtn = document.getElementById("audio-prev-btn");
  const nextBtn = document.getElementById("audio-next-btn");
  const disc = document.getElementById("audio-disc");
  const eq = document.getElementById("equalizer");
  const volumeSlider = document.getElementById("volume-slider");
  const trackTitle = document.getElementById("audio-track-title");
  const artistName = document.getElementById("audio-artist-name");

  if (!audio || !CONFIG.music) return;

  const playIcon = document.getElementById("play-icon");

  // Chuẩn hoá config: chuỗi file đơn -> playlist 1 bài
  let playlist = [];
  let volume = 1;
  if (typeof CONFIG.music === "string") {
    const file = CONFIG.music.split("/").pop() || CONFIG.music;
    playlist = [{ title: file.replace(/\.[a-z0-9]+$/i, ""), artist: CONFIG.name || "", url: CONFIG.music }];
  } else {
    if (Array.isArray(CONFIG.music.playlist) && CONFIG.music.playlist.length > 0) {
      playlist = CONFIG.music.playlist;
    } else if (CONFIG.music.url) {
      playlist = [{
        title: CONFIG.music.title || "Nhạc nền",
        artist: CONFIG.music.artist || "",
        url: CONFIG.music.url
      }];
    }
    if (typeof CONFIG.music.volume === "number") volume = CONFIG.music.volume;
  }
  if (playlist.length === 0) return;

  let currentTrackIndex = 0;
  audio.volume = volume;
  if (volumeSlider) volumeSlider.value = volume;

  function updateWidgetState(isPlaying) {
    if (playIcon) playIcon.className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
    if (disc) disc.classList.toggle("playing", isPlaying);
    if (eq) eq.classList.toggle("active", isPlaying);
  }

  // Gán src cho bài đang chọn — chỉ gọi khi thật sự bấm nghe
  function ensureAudioSource() {
    if (!playlist[currentTrackIndex]) return;
    if (audio.getAttribute("src")) return;
    audio.src = playlist[currentTrackIndex].url;
  }

  function loadTrack(index, autoPlay) {
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;
    currentTrackIndex = index;

    const track = playlist[currentTrackIndex];
    try { audio.pause(); audio.currentTime = 0; } catch (e) {}

    // Mới vào trang chỉ đổi nhãn, không nạp file
    audio.removeAttribute("src");
    if (autoPlay) {
      ensureAudioSource();
      try { audio.load(); } catch (e) {}
    }

    if (trackTitle) {
      trackTitle.textContent = track.title;
      trackTitle.title = track.title;
    }
    if (artistName) {
      const countTag = playlist.length > 1 ? (currentTrackIndex + 1) + "/" + playlist.length + " • " : "";
      artistName.textContent = countTag + (track.artist || "");
    }

    if (autoPlay) {
      const p = audio.play();
      if (p && p.then) {
        p.then(() => {
          updateWidgetState(true);
          showToast("Đang phát: " + track.title);
        }).catch(() => updateWidgetState(false));
      }
    } else {
      updateWidgetState(false);
    }
  }

  function playNextTrack() {
    loadTrack(currentTrackIndex + 1, true);
  }

  function playPrevTrack() {
    try {
      if (audio.currentTime > 3) {
        audio.currentTime = 0;
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
        return;
      }
    } catch (e) {}
    loadTrack(currentTrackIndex - 1, true);
  }

  loadTrack(0, false);

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        ensureAudioSource();
        const p = audio.play();
        if (p && p.then) {
          p.then(() => updateWidgetState(true)).catch(() => {
            updateWidgetState(false);
            showToast("Chưa có file nhạc: " + (playlist[currentTrackIndex] || {}).url);
          });
        }
      } else {
        audio.pause();
        updateWidgetState(false);
      }
    });
  }
  if (nextBtn) nextBtn.addEventListener("click", playNextTrack);
  if (prevBtn) prevBtn.addEventListener("click", playPrevTrack);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = parseFloat(e.target.value);
    });
  }

  audio.addEventListener("play", () => updateWidgetState(true));
  audio.addEventListener("pause", () => updateWidgetState(false));
  audio.addEventListener("ended", playNextTrack);
})();
