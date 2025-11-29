"use client";

import { supabase } from "@/lib/supabase";
import { waUrl } from "@/lib/whatsapp";
import { X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TRequest = {
    name: string;
    no_wa: string;
    studio_name: string;
}

function CTA() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{
        type: "none" | "error" | "success";
    }>({ type: "none" });

    const defaultFormValue: TRequest = {
        name: "",
        no_wa: "",
        studio_name: ""
    }

    const { control, handleSubmit, reset } = useForm<TRequest>({
        defaultValues: defaultFormValue
    });

    const onSubmit = async (value: TRequest) => {
        setIsLoading(true);

        try {
            const { } = await supabase.from("email_lists").insert([
                {
                    name: value.name,
                    studio_name: value?.studio_name || "",
                    no_wa: value.no_wa
                }
            ])

            setStatus({ type: "success" });
            setIsLoading(false)
            reset(defaultFormValue);
        } catch (e) {
            setStatus({ type: "error" });
            setIsLoading(false)
            console.log(e);
        }
    }

    return (
        <>
            {/* Call to Action / Form Section */}
            <section id="early-access" className="w-full px-6 py-24 relative overflow-hidden bg-primary-blue">
                <div className="max-w-lg mx-auto bg-white backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 relative">

                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">Join the waitlist</h2>
                        <p className="text-slate-500">Tinggalkan nomor WhatsApp kamu dan jadilah yang pertama tau tentang ravilio.</p>
                    </div>

                    {status.type === "error" ? (
                        <div className="bg-red-50 p-4 border border-red-100 rounded-lg mb-4 flex items-start gap-2">
                            <X
                                onClick={() => {
                                    setStatus({ type: "none" });
                                    setIsLoading(false);
                                }}
                                size={18}
                                className="cursor-pointer text-red-500 w-6 mt-1"
                            />
                            <p className="text-red-500 flex-1 text-sm">Opss... kayaknya lagi error nih. Bisa coba ulang, atau langsung hubungi WhatsApp kami supaya lebih cepat. <a className="underline text-blue-600" target="_blank" href={waUrl}>Klik disini untuk hubungi via WhatsApp</a></p>
                        </div>
                    ) : null}

                    {status.type === "success" ? (
                        <div className="bg-green-50 p-4 border border-green-100 rounded-lg mb-4 flex items-start gap-2">
                            <X
                                onClick={() => {
                                    setStatus({ type: "none" });
                                    setIsLoading(false);
                                }}
                                size={18}
                                className="cursor-pointer text-green-500 mt-1 w-6"
                            />
                            <p className="text-green-500 flex-1 text-sm">Yeay! Kamu sudah masuk waitlist Ravilio. Stay tuned, sesuatu yang keren sedang kami siapkan! ✨</p>
                        </div>
                    ) : null}

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Nama Lengkap <span className="text-slate-400 normal-case tracking-normal">{" "}(Wajib diisi)</span></label>
                            <Controller
                                control={control}
                                name="name"
                                rules={{
                                    required: { value: true, message: "Field ini harus diisi" }
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="text"
                                            id="name"
                                            placeholder="Contoh: Fauzan"
                                            className="w-full px-4 py-3 rounded-lg bg-white/50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#293a84]/20 focus:border-[#293a84] transition-all shadow-sm"
                                            style={!!error?.message ? {
                                                "borderColor": "red"
                                            } : {}}
                                        />
                                        {!!error?.message ? (
                                            <p className="text-sm text-red-500">{error?.message}</p>
                                        ) : null}
                                    </div>
                                )}
                            />
                        </div>

                        <div>
                            <label htmlFor="whatsapp" className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Nomor WhatsApp <span className="text-slate-400 normal-case tracking-normal">{" "}(Wajib diisi)</span></label>
                            <Controller
                                control={control}
                                name="no_wa"
                                rules={{
                                    required: { value: true, message: "Field ini harus diisi" }
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="tel"
                                            id="whatsapp"
                                            placeholder="Contoh: 081234567890"
                                            className="w-full px-4 py-3 rounded-lg bg-white/50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#293a84]/20 focus:border-[#293a84] transition-all shadow-sm"
                                            style={!!error?.message ? {
                                                borderColor: "red"
                                            } : {}}
                                        />
                                        {!!error?.message ? (
                                            <p className="text-sm text-red-500">{error?.message}</p>
                                        ) : null}
                                    </div>
                                )}
                            />
                        </div>

                        <div>
                            <label htmlFor="studio" className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide">Nama Studio<span className="text-slate-400 normal-case tracking-normal">{" "}(Optional)</span></label>

                            <Controller
                                control={control}
                                name="studio_name"
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        id="studio"
                                        placeholder="Your Graduation Studio"
                                        className="w-full px-4 py-3 rounded-lg bg-white/50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#293a84]/20 focus:border-[#293a84] transition-all shadow-sm"
                                    />
                                )}
                            />
                        </div>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-[#293a84] text-white font-medium py-3.5 rounded-lg hover:bg-[#293a84]/90 transition-all shadow-lg shadow-[#293a84]/20 mt-2 flex justify-center items-center gap-2 group"
                            style={isLoading ? {
                                backgroundColor: "#6b7280"
                            } : {}}
                        >
                            {isLoading ? "Mengirim Data..." : "Simpan"}
                        </button>

                        <p className="text-sm text-slate-400 text-center leading-normal mt-4">
                            Dengan mengirimkan nomor Anda, Anda setuju untuk menerima pesan dari Ravilio.
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CTA