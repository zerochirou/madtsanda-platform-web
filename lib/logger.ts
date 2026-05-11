import pino from 'pino'

const isDev = process.env.NODE_ENV === 'development'

const logger = pino({
  level: isDev ? 'debug' : 'info',
  // Hindari penggunaan 'transport' objek secara langsung jika menyebabkan error di Next.js
  // Solusi terbaik: Biarkan pino menulis ke stdout secara default di produksi
})

// Jika Anda benar-benar ingin pino-pretty di development tanpa merusak runtime:
if (isDev && typeof window === 'undefined') {
  // Opsional: Anda bisa menggunakan pino-pretty secara eksternal lewat CLI
  // daripada mendefinisikannya di dalam kode transport
}

export default logger