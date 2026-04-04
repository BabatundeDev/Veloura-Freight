import { Reveal } from "../components/Reveal";

const email = "ops@velourafreightlogistics.com";
const phoneDisplay = "+1 (555) 010-4200";
const phoneTel = "+15550104200";
const whatsapp = "15550104200";
const address = "1200 Harbor Exchange, Floor 18, New York, NY 10004";

export function Contact() {
  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-gradient-to-br from-navy-900 to-navy-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Contact</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Speak with our enterprise desk — routing, compliance, and account coverage worldwide.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-xl font-bold text-navy-900">Direct lines</h2>
            <ul className="mt-8 space-y-6 text-slate-700">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
                <a href={`mailto:${email}`} className="mt-1 block text-lg font-medium text-gold-700 hover:underline">
                  {email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
                <a href={`tel:${phoneTel}`} className="mt-1 block text-lg font-medium text-navy-900 hover:text-gold-700">
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">WhatsApp</p>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-4">
              <h2 className="font-semibold text-navy-900">Office location</h2>
              <p className="mt-1 text-sm text-slate-600">{address}</p>
            </div>
            <div className="aspect-[16/11] w-full bg-slate-200">
              <iframe
                title="Office map"
                className="h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.018%2C40.701%2C-74.008%2C40.708&amp;layer=mapnik&amp;marker=40.7045%2C-74.013"
              />
            </div>
            <p className="px-6 py-3 text-xs text-slate-500">
              Map data © OpenStreetMap contributors. Pin is illustrative.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
