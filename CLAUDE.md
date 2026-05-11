# ═══════════════════════════════════════════════════════════════
# UNIVERSAL VIBE CODING RULES — Next.js / React
# Filosofi: Clean Architecture, Server-first, Type-safe
# ═══════════════════════════════════════════════════════════════

Kamu adalah AI coding assistant. Terapkan semua rules di bawah ini
secara otomatis pada SETIAP kode yang kamu tulis, tanpa perlu diminta.
Ini berlaku untuk project apapun yang menggunakan Next.js / React.

---

## 1. FILE NAMING

Semua file komponen WAJIB `kebab-case`:

```
✅ hero-section.tsx / featured-news.tsx / user-profile-card.tsx
❌ HeroSection.tsx  / FeaturedNews.tsx  / UserProfileCard.tsx
```

Export function di dalamnya tetap PascalCase:
```tsx
// file: hero-section.tsx
export function HeroSection() { ... }
```

File data, hooks, utils, services — semua kebab-case:
```
✅ use-auth.ts / get-news.ts / format-date.ts / auth-service.ts
❌ useAuth.ts  / getNews.ts  / formatDate.ts  / AuthService.ts
```

File data harus nama deskriptif per entity, BUKAN generik:
```
✅ features.ts / journeys.ts / locations.ts / programs.ts
❌ data.ts (monolith berisi semua data)
```

---

## 2. DIRECTORY STRUCTURE

Ikuti pola layered architecture ini untuk setiap project:

```
app/
├── (group)/             ← Route groups per konteks (home, auth, dashboard)
│   ├── layout.tsx       ← Layout spesifik group (nav, footer, sidebar)
│   └── page.tsx         ← Server Component, TANPA "use client"
└── layout.tsx           ← Root layout: providers SAJA

components/
├── animation/           ← Reusable animation wrappers
├── data/                ← Semua static data, 1 file per entity
├── shared/              ← Komponen shared lintas fitur (nav, footer, theme)
└── ui/                  ← UI library (hanya yang benar-benar dipakai)

features/
└── [nama-fitur]/
    ├── components/      ← Komponen spesifik fitur, kebab-case
    ├── services.ts      ← Data fetching & business logic
    └── actions/         ← Server Actions (jika ada mutasi)

lib/
├── utils.ts             ← Helper & utility umum
├── request.ts           ← HTTP client wrapper -> semua fetch diganti menggunakan fungsi request khusus.
├── error.ts             ← Error formatter
├── logger.ts            ← Logger (Pino) -> di setiap error handling sertakan logger (HARUS)
├── date.ts              ← Date formatter
└── access.ts            ← RBAC helper (jika ada auth)

types/
├── [nama].ts            ← Types untuk struktur UI
└── dto/
    └── [entity].ts      ← Types untuk data dari API
```

Prinsip utama:
- Root `layout.tsx` hanya berisi providers (ThemeProvider, Toaster, dll.)
- Navigation & Footer selalu di route group layout, bukan root
- Setiap fitur mandiri di dalam folder `features/[nama]/`
- Static data dipisah per entity di `components/data/`

---

## 3. RENDERING STRATEGY

**Default: Server Component.** Tambahkan `"use client"` hanya jika benar-benar perlu.
pastikan untuk server rendering tidak terjadi hydration error
// features/[fitur]/services.ts
```tsx
"use server";
import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { ResponseDTO } from "@/types/dto/[entity]";

export async function getDataService(param: string): Promise<ResponseDTO | null> {
  try {
    const response = await request<ResponseDTO>(`/endpoint?param=${param}`, {
      next: { revalidate: 3600, tags: ["tag-name"] },
    });
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

pastikan untuk next revalidate benar2 digunakan untuk bagian data yang memang jarang berubah

// ✅ BENAR — page selalu async Server Component
export default async function NewsPage() {
  const news = await getNewsService(10);
  return <NewsList data={news} />;
}

// ❌ SALAH — jangan "use client" di page level
"use client";
export default function NewsPage() { ... }
```

`"use client"` HANYA boleh di komponen leaf yang membutuhkan:
- `useState` / `useEffect` / `useReducer`
- Event handler DOM
- Browser API
- Animasi interaktif

Komponen interaktif tersebut harus dipecah sebagai child component terpisah,
tidak boleh ditaruh langsung di `page.tsx`.

---

## 4. SERVICE LAYER

Setiap data fetching WAJIB diabstraksi dalam service function, bukan langsung di komponen.

```tsx
// features/[fitur]/services.ts
"use server";
import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { ResponseDTO } from "@/types/dto/[entity]";

export async function getDataService(param: string): Promise<ResponseDTO | null> {
  try {
    const response = await request<ResponseDTO>(`/endpoint?param=${param}`, {
      next: { revalidate: 3600, tags: ["tag-name"] },
    });
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
```

Wajib dalam setiap service function:
- `"use server"` di atas file
- `try-catch` menyelimuti semua operasi
- `logger.error(errorFormat(error))` untuk setiap error
- Return `null` saat failure — JANGAN throw atau re-throw
- Generic type `request<T>()` selalu diisi
- `revalidate` dan `tags` selalu ada untuk caching

---

## 5. TYPE SAFETY

JANGAN pernah definisikan interface atau type di dalam file komponen.

```tsx
// ❌ SALAH — inline type di komponen
interface Article { id: string; title: string; }
function ArticleCard({ data }: { data: Article }) {}

// ✅ BENAR — import dari types/
import type { ArticleDTO } from "@/types/dto/article";
function ArticleCard({ data }: { data: ArticleDTO }) {}
```

Aturan penempatan:
- Data dari API → `types/dto/[entity].ts`
- Struktur UI (sidebar item, nav item, dll.) → `types/[name].ts`
- Props sederhana yang tidak dipakai ulang → boleh inline, tapi tetap singkat

Selalu gunakan `import type` untuk type-only imports.

---

## 6. ERROR HANDLING

contoh error handling
```tsx
try {
    const res = await fetch(`https://api.example.com/v1/weather?q=${city}`);
    
    if (!res.ok) {
      // Menangani status code spesifik (404, 401, dll)
      return { error: 'Lokasi tidak ditemukan', status: res.status };
    }

    const data = await res.json();
    return { data, error: null };
  } catch (err) {
    // Menangani network failure atau error tak terduga
    return { error: 'Gagal terhubung ke server', status: 500 };
  }

Manfaatkan error.tsx (Error Boundaries)
```tsx

Tangani "Not Found" Secara Spesifik
sebisa mungkin saat menulis kode tsx, utamakan sinkronisasi langsung ke database atau tulis langsung ke return html components, ketimbang buat variabel baru. (minimalkan variable data statis baru)

// ✅ BENAR
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";

try {
  const result = await fetchSomething();
  return result;
} catch (error: unknown) {
  logger.error(errorFormat(error));
  return null;
}

// ❌ SALAH
try {
  const result = await fetchSomething();
  return result;
} catch (e) {
  console.log(e);   // ❌ jangan console.log
  throw e;          // ❌ jangan re-throw tanpa handling
}
```

- Logger: selalu `logger.error()` dari `lib/logger.ts` (Pino)
- Format: selalu `errorFormat()` dari `lib/error.ts` sebelum logging
- Return value: selalu `null` pada failure di service layer

---

## 7. ANIMATION

```tsx
// ✅ BENAR — package modern
import { motion, AnimatePresence } from "motion/react";

// ❌ SALAH — package lama
import { motion } from "framer-motion";
```

Selalu gunakan package `motion`, bukan `framer-motion`.

---

## 8. TAILWIND

Selalu gunakan syntax Tailwind v4:

```tsx
// ✅ v4
className="bg-linear-to-t from-black/80 to-transparent"
className="bg-linear-to-br from-blue-500 to-purple-600"

// ❌ v3 (deprecated)
className="bg-gradient-to-t from-black/80 to-transparent"
```

---

## 9. THEMING

Config theme ada di dalam komponen ThemeProvider sendiri, bukan diteruskan dari layout:

```tsx
// ✅ BENAR — components/shared/theme-provider.tsx
export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

// app/layout.tsx — bersih tanpa props
<ThemeProvider>{children}</ThemeProvider>

// ❌ SALAH — config tercecer di layout
<NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</NextThemesProvider>
```

---

## 10. LAYOUT COMPOSITION

```tsx
// app/layout.tsx — ROOT: providers saja
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// app/(home)/layout.tsx — GROUP: nav + footer di sini
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

---

## 11. FONT

Gunakan SATU font utama saja. Jangan load font yang tidak digunakan:

```tsx
// ✅ BENAR — satu font
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

// ❌ SALAH — berlebihan
import { Inter, Geist, Geist_Mono } from "next/font/google";
```

---

## 12. IMAGE

```tsx
// ✅ BENAR
<Image
  src={src}
  alt={alt}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  fetchPriority="high"
  priority
/>
```

- Selalu sertakan `sizes` pada `<Image fill />`
- Above-the-fold: gunakan `fetchPriority="high"` + `priority`
- Gambar remote: konfigurasi `remotePatterns` di `next.config.ts`

---

## 13. FORM

Selalu gunakan `react-hook-form` + `zod` untuk form handling:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  ...
}
```

Jangan gunakan controlled input manual (`useState` per field) untuk form kompleks.

---

## 14. LOADING STATE

Setiap komponen yang fetch data HARUS punya skeleton/loading state:

```tsx
// ✅ BENAR
export function NewsCardSkeleton() {
  return <div className="animate-pulse bg-muted rounded-lg h-48 w-full" />;
}

// Dipakai di Suspense boundary
<Suspense fallback={<NewsCardSkeleton />}>
  <NewsCard />
</Suspense>
```

---

## 15. BARREL EXPORT (index.ts)

Setiap folder yang berisi lebih dari satu file WAJIB punya `index.ts` sebagai
pintu keluar tunggal. Ini membuat import di seluruh project jauh lebih rapi.

```tsx
// ❌ SALAH — import berantakan, path panjang
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";

// ✅ BENAR — satu baris, satu sumber
import { Button, Modal, Input } from "@/components/ui";
```

Struktur barrel export:

```
components/ui/
├── button.tsx
├── modal.tsx
├── input.tsx
├── badge.tsx
└── index.ts          ← barrel

components/shared/
├── navigation.tsx
├── footer.tsx
├── theme-provider.tsx
└── index.ts          ← barrel

features/[fitur]/components/
├── hero-section.tsx
├── feature-card.tsx
├── stats-section.tsx
└── index.ts          ← barrel

types/dto/
├── news.ts
├── auth.ts
├── error.ts
└── index.ts          ← barrel
```

Isi `index.ts` — re-export semua dari folder tersebut:

```ts
// components/ui/index.ts
export { Button } from "./button";
export { Modal } from "./modal";
export { Input } from "./input";
export { Badge } from "./badge";

// features/home/components/index.ts
export { HeroSection } from "./hero-section";
export { FeatureCard } from "./feature-card";
export { StatsSection } from "./stats-section";

// types/dto/index.ts
export type { NewsDTO, NewsResponseDTO } from "./news";
export type { AuthDTO, LoginResponseDTO } from "./auth";
export type { ErrorDTO } from "./error";
```

Aturan barrel:
- Buat `index.ts` segera saat folder memiliki 2+ file
- JANGAN re-export default export — selalu gunakan named export
- `index.ts` TIDAK boleh berisi logika apapun, hanya re-export
- Untuk types, selalu gunakan `export type` bukan `export`

---

## 16. LARANGAN KERAS

Hal-hal berikut SELALU ditolak, tidak ada pengecualian:

| Larangan | Gantinya |
|---|---|
| `"use client"` di `page.tsx` | Jadikan Server Component |
| `import { motion } from "framer-motion"` | `import from "motion/react"` |
| Interface / type inline di komponen | Pindah ke `types/dto/` |
| `bg-gradient-to-*` (Tailwind v3) | `bg-linear-to-*` |
| `console.log` untuk error | `logger.error(errorFormat(error))` |
| File komponen PascalCase | kebab-case |
| Semua data dalam satu `data.ts` | Pecah per entity |
| Navigation/Footer di root `layout.tsx` | Pindah ke route group layout |
| File `.md` di dalam folder komponen | Hapus atau pindah ke `/docs` |
| 2+ font di satu project | Maksimal 1 font utama |
| shadcn component massal tanpa kurasi | Install hanya yang dipakai |
| Fetch data langsung di komponen | Abstraksi ke service layer |
| Folder 2+ file tanpa `index.ts` | Tambahkan barrel export |

---

## CHECKLIST SEBELUM SELESAI

Verifikasi setiap sebelum mengakhiri satu fitur:

- [ ] Tidak ada `"use client"` di file `page.tsx`
- [ ] Semua file menggunakan `kebab-case`
- [ ] Tidak ada type/interface inline di komponen
- [ ] Static data dipecah per entity
- [ ] Setiap data fetching punya service function
- [ ] Error di-handle dengan `logger.error(errorFormat(error))`
- [ ] Import animasi dari `motion/react`
- [ ] Gradient menggunakan Tailwind v4 syntax
- [ ] Loading/skeleton state tersedia
- [ ] Tidak ada komponen shadcn yang tidak dipakai
- [ ] Navigation & Footer ada di route group layout
- [ ] ThemeProvider config ada di dalam komponen, bukan layout
- [ ] Setiap folder 2+ file sudah punya `index.ts` barrel export

---

> Rules ini berlaku universal untuk semua project Next.js / React.
> Terapkan sejak commit pertama — file naming, structure, rendering strategy,
> dan type safety adalah yang paling mahal jika harus di-refactor nanti.
