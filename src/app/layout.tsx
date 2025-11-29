import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css'; // Pastikan file globals.css ada

// Konfigurasi font Inter
const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
});

// Metadata
export const metadata = {
    title: 'Ravilio — Graduation Photography, Simplified',
    description: 'A SaaS platform built for graduation photographers to manage schedules, bookings, projects, and photo editing.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
            {/* Catatan: font-sans di sini adalah fallback. 
              Class font-inter akan diterapkan via CSS global atau langsung ke body jika diperlukan, 
              tetapi variabel sudah mengikat font Inter ke font-sans di Tailwind config (lihat di bawah). 
              Kita tambahkan class font-inter di body.
            */}
            <body className="text-slate-600 min-h-screen flex flex-col relative selection:bg-[#293a84] selection:text-white font-inter">
                
                {/* Background Elements ditempatkan di layout karena bersifat statis di seluruh aplikasi */}
                <div className="fixed inset-0 -z-10 h-full w-full bg-white">
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    {/* Organic Gradient Blobs */}
                    <div className="absolute top-0 left-0 right-0 -z-10 mx-auto h-[500px] w-[500px] rounded-full bg-[#293a84]/10 opacity-50 blur-[100px] translate-y-[-50%]"></div>
                    <div className="absolute top-[30%] right-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-200/20 opacity-40 blur-[80px] translate-x-[30%]"></div>
                    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-100/30 opacity-40 blur-[100px] translate-x-[-30%] translate-y-[30%]"></div>
                </div>

                {children} 
            </body>
        </html>
    );
}