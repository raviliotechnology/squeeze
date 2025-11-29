import { CalendarOff, FileWarning, MessageSquare, User2 } from "lucide-react";

export default function WhyRavilioSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* Sticky Title Column */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
              Kenapa Ravilio?
            </h2>

            <div className="hidden lg:flex items-center gap-3 text-sm font-medium text-gray-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="flex h-2 w-2">
                <span className="animate-pulse inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
              <span className="flex-1 text-base">Masalah ini bikin stres.</span>
            </div>
          </div>
        </div>

        {/* Vertical List Column */}
        <div className="lg:col-span-7 flex flex-col gap-5">

          {/* Item 1 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-orange-500/5 hover:border-orange-500/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400 rounded-l-2xl"></div>

            <div className="flex items-start gap-5">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 border border-orange-100/50">
                  <MessageSquare />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1.5">Chat WA Masuk Tanpa Henti</h3>
                <p className="text-slate-500 leading-relaxed mb-3">
                  Setiap hari ratusan calon client masuk bertanya hal yang sama: &quot;Ada slot besok?&quot; atau &quot;Berapa harganya?&quot;.
                </p>
                <div className="bg-orange-50/50 border border-orange-100 rounded-md px-3 py-2 inline-block">
                  <span className="text-xs text-orange-700 font-medium italic">&quot;Kak price list dong?&quot; x 50 chats/day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-red-500/5 hover:border-red-500/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-400 rounded-l-2xl"></div>

            <div className="flex items-start gap-5">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 border border-red-100/50">
                  <User2 />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1.5">Admin Kewalahan</h3>
                <p className="text-slate-500 leading-relaxed">
                  Tanpa sistem, semua harus dijawab manual. Chat yang nyangkut membuat pelanggan kabur, chat lupa dibalas memicu komplain.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-rose-500/5 hover:border-rose-500/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-400 rounded-l-2xl"></div>

            <div className="flex items-start gap-5">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 border border-rose-100/50">
                  <CalendarOff />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1.5">Jadwal Sering Bentrok</h3>
                <p className="text-slate-500 leading-relaxed mb-3">
                  Client sudah bayar… tapi jadwal ternyata double booking karena pencatatan manual di Excel/Buku.
                </p>
                <div className="bg-rose-50/50 border border-rose-100 rounded-md px-3 py-2 inline-block">
                  <span className="text-xs text-rose-700 font-medium italic">&quot;Loh jam 1 sudah ada yang booking?!&quot;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-amber-500/5 hover:border-amber-500/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400 rounded-l-2xl"></div>

            <div className="flex items-start gap-5">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 border border-amber-100/50">
                  <FileWarning />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1.5">Editing Menumpuk & File Hilang</h3>
                <p className="text-slate-500 leading-relaxed">
                  Revisi lewat WA, link file tercecer, hingga akhirnya editor bingung: &quot;Ini project yang mana?&quot;.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
