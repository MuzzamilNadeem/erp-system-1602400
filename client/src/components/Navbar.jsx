import { NavLink } from "react-router-dom"
import {
  LayoutDashboard, Info, Search,
  Bell, Settings, Factory,
} from "lucide-react"

const Navbar = () => {
  return (
    <nav className="
      w-full flex items-center justify-between
      px-8 py-3.5
      bg-gray-300 backdrop-blur-xl
      border-b border-white/10
    ">

      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="
          w-9 h-9 rounded-[10px] flex items-center justify-center
          bg-gradient-to-br from-indigo-500 to-purple-500
        ">
          <Factory size={17} color="white" />
        </div>
        <div className="leading-none">
          <p className="text-[15px] font-semibold text-black tracking-wide">
            NexCore
          </p>
          <p className="text-[10px] text-black/40 uppercase tracking-widest mt-0.5">
            Enterprise Suite
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-1 list-none">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `
              flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
              text-[13.5px] font-medium transition-all duration-200
              ${ isActive
                ? "text-black bg-indigo-500/25 border border-indigo-400/40"
                : "text-black/60 hover:text-black/95 hover:bg-white/8"
              }
            `}
          >
            <LayoutDashboard size={15} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `
              flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
              text-[13.5px] font-medium transition-all duration-200
              ${ isActive
                ? "text-black bg-indigo-500/25 border border-indigo-400/40"
                : "text-black/60 hover:text-black/95 hover:bg-white/8"
              }
            `}
          >
            <Info size={15} />
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `
              flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
              text-[13.5px] font-medium transition-all duration-200
              ${ isActive
                ? "text-black bg-indigo-500/25 border border-indigo-400/40"
                : "text-black/60 hover:text-black/95 hover:bg-white/8"
              }
            `}
          >
            <Info size={15} />
            Signin
          </NavLink>
        </li>

      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5">

        {/* Search pill */}
        <button className="
          flex items-center gap-2 px-3 py-1.5 rounded-lg
          bg-white/5 border border-white/10
          text-black/40 text-[13px]
          hover:bg-white/10 hover:text-black/65
          transition-all duration-200
        ">
          <Search size={13} />
          Search…
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-white/10" />

        {/* Notifications */}
        <button className="
          relative w-[34px] h-[34px] rounded-lg flex items-center justify-center
          bg-white/5 border border-white/10 text-black/55
          hover:bg-white/12 hover:text-black/90
          transition-all duration-200
        ">
          <Bell size={16} />
          <span className="
            absolute top-[5px] right-[5px] w-2 h-2 rounded-full
            bg-purple-500 border-[1.5px] border-[#0f0c29]
          " />
        </button>

        {/* Settings */}
        <button className="
          w-[34px] h-[34px] rounded-lg flex items-center justify-center
          bg-white/5 border border-white/10 text-black/55
          hover:bg-white/12 hover:text-black/90
          transition-all duration-200
        ">
          <Settings size={16} />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-white/10" />

        {/* User Avatar */}
        <div className="
          w-[34px] h-[34px] rounded-full flex items-center justify-center
          bg-gradient-to-br from-indigo-500 to-purple-500
          text-black text-[12px] font-semibold
          border border-white/20 cursor-pointer
          hover:scale-105 transition-transform duration-200
        ">
          AJ
        </div>

      </div>
    </nav>
  )
}

export default Navbar