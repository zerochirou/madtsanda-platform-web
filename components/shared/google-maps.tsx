"use client";
export function GoogleMap() {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d583.2159856873036!2d112.02437746310069!3d-7.84529235736302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7857962de603cd%3A0x7f0e1ff2c23c211e!2sMTsN%202%20Kota%20Kediri!5e1!3m2!1sen!2sid!4v1779960469783!5m2!1sen!2sid"
            className="w-full aspect-video"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi MTsN 2 Kota Kediri"
          />
        </div>
  );
}
