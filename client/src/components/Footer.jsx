import { Factory } from "lucide-react"

const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Careers", "Blog", "Press"],
  Support: ["Documentation", "API Reference", "Status", "Contact"],
}

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t border-black/8 px-12 pt-12 pb-7">

      {/* Top grid */}
      <div className="grid grid-cols-4 gap-8 pb-9 border-b border-black/8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="
              w-8 h-8 rounded-[9px] flex items-center justify-center
              bg-gradient-to-br from-indigo-500 to-purple-500
            ">
              <Factory size={14} color="white" />
            </div>
            <span className="text-[14px] font-semibold text-[#0f0f1a]">NexCore</span>
          </div>
          <p className="text-[13px] text-black/45 leading-relaxed max-w-[220px]">
            Enterprise resource planning built for modern teams. Trusted worldwide.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h4 className="
              text-[12px] font-semibold text-[#0f0f1a]
              uppercase tracking-[0.04em] mb-3.5
            ">{heading}</h4>
            <ul className="space-y-2.5">
              {items.map(item => (
                <li key={item}>

                    <a href="#"
                    className="
                      text-[13px] text-black/50
                      hover:text-indigo-500 transition-colors duration-150
                    "
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-6">
        <p className="text-[12px] text-black/35">
          © 2026 NexCore Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-[12px] text-black/40">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          All systems operational
        </div>
        <div className="flex gap-2">
          {["Twitter", "LinkedIn", "GitHub"].map(s => (
            <button
              key={s}
              className="
                w-[30px] h-[30px] rounded-lg
                bg-black/6 border border-black/8
                flex items-center justify-center
                text-black/40 text-[13px]
                hover:bg-indigo-500/12 hover:text-indigo-500
                transition-all duration-150
              "
              title={s}
            >
              {s[0]}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer