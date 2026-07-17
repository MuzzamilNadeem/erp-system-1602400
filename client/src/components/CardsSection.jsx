const modules = [
  { icon: "💹", color: "indigo", label: "Finance",    title: "Financial Management", desc: "Ledger, payroll, budgeting, and tax reporting in one unified view." },
  { icon: "👥", color: "purple", label: "HR",         title: "Human Resources",      desc: "Hiring pipelines, attendance, performance reviews, and payroll automation." },
  { icon: "📦", color: "teal",   label: "Operations", title: "Supply Chain",         desc: "Inventory tracking, vendor management, and procurement workflows." },
  { icon: "⚡", color: "amber",  label: "Automation", title: "Workflow Automation",  desc: "Trigger-based automations across every department with no-code rules." },
  { icon: "📊", color: "green",  label: "Insights",   title: "Analytics & Reports",  desc: "Live dashboards, exportable reports, and AI-assisted forecasting." },
  { icon: "🔐", color: "red",    label: "Security",   title: "Access & Security",    desc: "Role-based permissions, audit logs, SSO, and compliance controls." },
]

// icon bg colors per color key — glassmorphism on gray-300 bg
const iconStyles = {
  indigo: "bg-indigo-500/12 text-indigo-600",
  purple: "bg-purple-500/12 text-purple-600",
  teal:   "bg-teal-500/12   text-teal-600",
  amber:  "bg-amber-500/12  text-amber-600",
  green:  "bg-green-500/12  text-green-700",
  red:    "bg-red-500/12    text-red-600",
}

const CardsSection = () => {
  return (
    <section className="px-12 py-16 bg-gray-300">

      {/* Section header */}
      <div className="mb-9">
        <p className="
          text-[11px] font-semibold uppercase tracking-[0.08em]
          text-indigo-500 mb-2.5
        ">Core modules</p>
        <h2 className="text-[26px] font-bold text-[#0f0f1a] tracking-tight">
          Everything your enterprise needs
        </h2>
        <p className="text-[14px] text-black/50 mt-2 max-w-lg leading-relaxed">
          Six fully integrated modules that talk to each other — no middleware,
          no data exports, no headaches.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-4">
        {modules.map(({ color, label, title, desc }) => (
          <div
            key={title}
            className="
              relative overflow-hidden
              bg-white/55 border border-white/80 rounded-2xl p-6
              backdrop-blur-md
              hover:-translate-y-1 hover:bg-white/72
              transition-all duration-200
            "
          >
            {/* Icon */}
            <div className={`
              w-[42px] h-[42px] rounded-xl flex items-center justify-center
              text-[19px] mb-4 ${iconStyles[color]}
            `}>
              {/* swap emoji for lucide icon if preferred */}
            </div>

            <h3 className="text-[14.5px] font-semibold text-[#0f0f1a] mb-1.5">
              {title}
            </h3>
            <p className="text-[13px] text-black/50 leading-relaxed">{desc}</p>

            {/* Tag */}
            <span className="
              inline-block mt-3.5 px-2.5 py-0.5 rounded-full
              text-[11px] font-medium
              bg-indigo-500/10 text-indigo-700
              border border-indigo-500/18
            ">{label}</span>

            {/* Subtle corner accent */}
            <div className="
              absolute -bottom-8 -right-8 w-20 h-20 rounded-full
              bg-indigo-400/5 pointer-events-none
            " />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardsSection