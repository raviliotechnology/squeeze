import Link from 'next/link';
import CTA from './components/CTA';
import FeaturesCard from './components/FeaturesCard';
import { ApertureIcon, ArrowRightIcon, CalendarCheck, CalendarClock, CreditCard, Instagram, KanbanSquare, LayoutDashboard, Map, Package, Users, Wand2 } from 'lucide-react';
import WhyRavilioSection from './components/WhyRavilioSection';
import Logo from "@/assets/Logo.svg";
import Image from 'next/image';
import { waUrl } from '@/lib/whatsapp';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto relative z-50">
        <Link href="#" className="text-xl font-semibold tracking-tighter text-[#293a84] flex items-center gap-2">
          <Image src={Logo.src} alt='Logo Ravilio' width={125} height={40} />
          {/* <span className="bg-white border border-[#293a84]/10 shadow-sm p-1.5 rounded-lg">
            <ApertureIcon className='w-5 h-5 text-[#293a84]' />
          </span>
          Ravilio */}
        </Link>
        <Link href="#early-access" className="text-sm font-medium text-slate-500 hover:text-[#293a84] transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-transparent hover:border-slate-200">
          Early Access
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="w-full max-w-7xl mx-auto px-6 pt-20 pb-24 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-lg font-medium text-[#293a84] mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#293a84] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#293a84]"></span>
          </span>
          Accepting early access requests
        </div>

        <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-slate-900 mb-8">
          Graduation Photography, <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#293a84] to-purple-600">Simplified.</span>
        </h1>

        <p className="mt-16 text-lg md:text-4xl text-primary-blue font-medium max-w-5xl mx-auto leading-relaxed mb-10">
          Kelola Booking & Proyek Fotografi Tanpa Ribet.
        </p>

        <p className="text-lg md:text-3xl text-gray-500 font-light max-w-5xl mx-auto leading-relaxed">
          Semua Otomatis dalam Satu Platform.
          Ravilio membantu kamu <span className='text-black font-medium'>mengatur jadwal</span>, <span className='font-medium text-black'>tim</span>, <span className='font-medium text-black'>pembayaran</span>, hingga <span className='font-medium text-black'>editing</span>. Lebih cepat, rapi, dan tanpa chaos.
        </p>

        <div className='flex items-center gap-2 justify-center mt-16'>
          <div className="flex justify-center gap-4">
            <a href={waUrl} target='_blank' className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-all border shadow-[#293a84]/20 hover:shadow-[#293a84]/30 transform hover:-translate-y-0.5">
              Contact Me on WhatsApp
              <ArrowRightIcon />
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <Link href="#early-access" className="inline-flex items-center gap-2 bg-[#293a84] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#293a84]/90 transition-all shadow-xl shadow-[#293a84]/20 hover:shadow-[#293a84]/30 transform hover:-translate-y-0.5">
              Get Early Access
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="w-full pt-20 pr-6 pb-20 pl-6 relative">
        <div className="max-w-4xl mx-auto text-center bg-[#293a84] p-8 md:p-12 rounded-3xl border border-white/10 shadow-xl shadow-[#293a84]/20 overflow-hidden relative">
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          {/* Inner glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-sm font-semibold tracking-wider text-blue-200 uppercase mb-4">The Challenge</h2>
            <h3 className="text-3xl font-semibold tracking-tight text-white mb-6">Berhenti menjawab pertanyaan yang sama setiap hari.</h3>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              Menerima puluhan pesan dengan pertanyaan identik tentang ketersediaan jadwal, paket, dan lokasi. Chat yang berulang ini menghabiskan waktu dan memperlambat alur kerja kamu.
            </p>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed mt-4"><strong className="text-white font-semibold">{" "}Ravilio</strong> menggabungkan sistem booking dan manajemen proyek dalam satu tempat. Jadi, kamu bisa fokus mengerjakan hal yang lebih produktif dan strategis</p>
          </div>
        </div>
      </section>

      {/* why ravilio */}
      <WhyRavilioSection />

      {/* Core Features Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">Built for your workflow</h2>
          <p className="text-gray-500 font-light text-2xl">Mudahkan pekerjaan kamu. Bangun Workflow Profesional Tanpa Perlu Software Rumit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeaturesCard
            icon={<CalendarCheck />}
            title='Sistem Booking Otomatis'
            description='Atur paket foto dan harga dengan fleksibel.'
          />

          <FeaturesCard
            icon={<Package />}
            title='Pengaturan Harga & Paket'
            description='Client pilih jadwal, layanan, dan langsung terjadwal tanpa bolak-balik chat.'
          />

          <FeaturesCard
            icon={<Map />}
            title='Multi Lokasi'
            description='Punya klien di kota yang berbeda-beda? Ravilio bisa handle kebutuhanmu.'
          />

          <FeaturesCard
            icon={<LayoutDashboard />}
            title='Dashboard'
            description='Kami menyediakan dashboard untuk memantau perkembangan bisnis mu'
          />

          <FeaturesCard
            icon={<CreditCard />}
            title='Payment Gateway Integration'
            description='Pembayaran aman, cepat, dan langsung masuk. Tidak ada lagi follow-up invoice manual.'
          />

          <FeaturesCard
            icon={<CalendarClock />}
            title='Manajemen Jadwal'
            description='Fitur kalender untuk monitoring jadwal foto kamu.'
          />

          <FeaturesCard
            icon={<Users />}
            title='Manajemen Team'
            description='Assign fotografer atau editor sesuai ketersediaan.'
          />

          <FeaturesCard
            icon={<Wand2 />}
            title='Manajemen Editing'
            description='Pantau progress editing, revisi, dan delivery file dalam satu dashboard.'
          />

          <FeaturesCard
            icon={<KanbanSquare />}
            title='Project Management Lengkap'
            description='Semua status proyek: booking, produksi, editing, hingga selesai. Jelas dan transparan.'
          />

          {/* Feature 6 (Visual filler/CTA within grid) */}
          <div className="md:col-span-3 group bg-gradient-to-br from-[#293a84] to-[#1e2a60] text-white p-8 rounded-2xl flex flex-col justify-center items-center shadow-xl shadow-[#293a84]/20 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10">
              <ApertureIcon className='w-40 h-40' />
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <h3 className="text-2xl font-semibold mb-2 tracking-tight relative z-10">Siap Hemat Waktu & Hindari Jadwal Berantakan?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed relative z-10">Coba Ravilio sekarang dan rasakan workflow yang lebih rapi.</p>
            <Link href="#early-access" className="font-semibold uppercase tracking-wider border-b border-white/40 pb-0.5 hover:border-white transition-colors relative z-10">Get Access →</Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* Footer */}
      <footer className="w-full py-8 border-t border-slate-200/60 mt-auto bg-gradient-to-r backdrop-blur-md flex flex-col gap-2 items-center justify-center">
        <p className="text-sm text-slate-500 text-center">© 2025 Ravilio. All rights reserved.</p>

        <a href="https://www.instagram.com/ravilio.id/" target='_blank' className='cursor-pointer hover:scale-[101%] hover:shadow-sm flex items-center gap-1 text-sm bg-gradient-to-r from-purple-50 to-blue-50 px-2 py-1 rounded-lg border border-blue-100'>
          <Instagram size={18} className='text-primary-blue' />
          <span className='text-primary-blue'>
            @ravilio.id
          </span>
        </a>
      </footer>
    </>
  );
}