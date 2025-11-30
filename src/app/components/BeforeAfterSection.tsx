import { ArrowRight, Check, History, X, Zap } from "lucide-react";

export default function BeforeAfterSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-24 border shadow-sm rounded-lg border-slate-100 bg-slate-50/50 mb-16">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Transform your business
                </h2>
                <p className="text-slate-500 text-lg">
                    See how Ravilio takes the chaos out of high season.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">

                {/* Connection Arrow */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full border border-slate-200 shadow-lg text-slate-400">
                   <ArrowRight />
                </div>

                {/* Before Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                            <History />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Before</h3>
                    </div>

                    <ul className="space-y-5">
                        {[
                            "Balas chat berulang-ulang",
                            "Client sering hilang karena slow response",
                            "Jadwal bentrok & catatan berantakan",
                            "Pricing harus dijelaskan terus",
                            "DP & booking dicatat manual",
                            "Capek urus chat lebih banyak daripada foto",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-500">
                                <X className="text-red-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* After Card */}
                <div className="bg-[#293a84]/5 rounded-3xl border border-[#293a84]/20 p-8 shadow-xl shadow-[#293a84]/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />

                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#293a84]/10 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#293a84] flex items-center justify-center text-white shadow-lg shadow-[#293a84]/30">
                            <Zap />
                        </div>
                        <h3 className="text-xl font-bold text-[#293a84]">After</h3>
                    </div>

                    <ul className="space-y-5 relative z-10">
                        {[
                            "Booking otomatis tanpa chat panjang",
                            "Client langsung lihat paket & jadwal kosong",
                            "Kalender rapi, tidak ada double booking",
                            "Harga & opsi tampil jelas tanpa perlu jelasin",
                            "Pembayaran & booking tercatat otomatis",
                            "Vendor fokus foto, bukan administrasi",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 font-medium text-slate-700">
                                <div className="bg-[#293a84] rounded-full p-0.5 mt-0.5">
                                    <Check size={18} className="text-white" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
