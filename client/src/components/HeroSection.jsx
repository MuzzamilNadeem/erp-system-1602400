import { Rocket, Play } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="
      w-full px-12 py-20 relative overflow-hidden
      bg-gradient-to-br from-gray-200 via-gray-300 to-indigo-100
      border-b border-black/8
    ">

      {/* Background glow blobs */}
      <div className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-indigo-400/8 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-52 w-[300px] h-[300px] rounded-full bg-purple-400/6 pointer-events-none" />

      <div className="relative z-10 max-w-3xl">

        {/* Badge */}
        <div className="
          inline-flex items-center gap-1.5 mb-6
          px-3 py-1.5 rounded-full
          bg-indigo-500/12 border border-indigo-500/25
          text-[11px] font-semibold text-indigo-700
          uppercase tracking-widest
        ">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
          NexCore ERP Platform
        </div>

        {/* Headline */}
        <h1 className="
          text-[40px] font-bold text-[#0f0f1a]
          leading-[1.15] tracking-tight mb-4
        ">
          Run your entire business from{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            one dashboard
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[15px] text-black/55 leading-relaxed max-w-[520px] mb-9">
          Unify finance, HR, supply chain, and operations into a single
          intelligent workspace. Real-time data, zero silos, full control.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <button className="
            inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px]
            bg-gradient-to-r from-indigo-500 to-purple-500
            text-white text-[13.5px] font-semibold border-none
            cursor-pointer hover:opacity-90 hover:-translate-y-px
            transition-all duration-200
          ">
            <Rocket size={15} />
            Get started free
          </button>
          <button className="
            inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px]
            bg-white/55 border border-black/12
            text-black/70 text-[13.5px] font-medium
            cursor-pointer hover:bg-white/80 transition-all duration-200
          ">
            <Play size={14} />
            Watch demo
          </button>
        </div>

        {/* Stats row */}
        <div className="
          flex gap-8 mt-12 pt-8
          border-t border-black/8
        ">
          {[
            { val: "4.8k+", label: "Companies onboarded" },
            { val: "99.9%", label: "Uptime SLA" },
            { val: "38%",   label: "Avg. cost reduction" },
            { val: "12min", label: "Avg. onboarding time" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="
                text-[24px] font-bold tracking-tight
                bg-gradient-to-r from-indigo-500 to-purple-500
                bg-clip-text text-transparent
              ">{val}</p>
              <p className="text-[12px] text-black/45 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HeroSection