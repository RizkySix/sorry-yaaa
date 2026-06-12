# Please Forgive Me 🥺

Aplikasi minta maaf manis buat Kezia. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS.

## Setup

```bash
git clone <repo-url>
cd sorry-app
npm install
cp .env.local.example .env.local
# isi FONNTE_TOKEN dan WA_TARGET di .env.local
npm run dev
```

Buka http://localhost:3000.

## Fonnte Token

1. Login ke [dashboard.fonnte.com](https://dashboard.fonnte.com)
2. Hubungkan device WhatsApp kamu (scan QR)
3. Copy **Token** dari device tersebut → paste ke `FONNTE_TOKEN` di `.env.local`
4. Set `WA_TARGET` dengan nomor WA tujuan, format: `087762582176`

## Deploy ke Vercel

1. Push repo ini ke GitHub
2. Buka [vercel.com](https://vercel.com) → **Import Project** → pilih repo
3. Di tab **Environment Variables**, tambahkan:
   - `FONNTE_TOKEN` = token Fonnte kamu
   - `WA_TARGET` = nomor WA tujuan
4. Klik **Deploy** — selesai!

## Customize

- Edit pesan apology di constant `APOLOGY_MESSAGE` paling atas [app/page.tsx](app/page.tsx)
- Ganti nama panggilan di judul `Keziaaa 🥺` pada file yang sama
- Edit pesan WA di [app/api/notify/route.ts](app/api/notify/route.ts)

## Struktur

```
app/
  page.tsx              # Halaman utama (apology + celebration)
  layout.tsx
  globals.css
  api/notify/route.ts   # POST → Fonnte WhatsApp API
components/
  CapybaraMullet.tsx    # SVG capybara dengan mullet
  HeartRain.tsx         # Hujan emoji ❤️
  EscapeButton.tsx      # Tombol "Tidak" yang kabur
```
