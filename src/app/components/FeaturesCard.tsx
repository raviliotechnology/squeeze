import React, { ReactNode } from 'react'

type TFeaturesCard = {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeaturesCard({ icon, description, title }: TFeaturesCard) {
  return (
    <div className="group bg-white/60 backdrop-blur-md border border-slate-200/60 p-8 rounded-2xl hover:border-[#293a84]/30 hover:bg-white/80 hover:shadow-xl hover:shadow-[#293a84]/5 transition-all duration-300">
      <div className="w-10 h-10 bg-[#293a84]/5 border border-[#293a84]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#293a84]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">{title}</h3>
      <p className=" text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeaturesCard